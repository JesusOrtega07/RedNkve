"use client";
// Author: Chus / shegberg
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
type Jugador = {
  nombre: string;
  nombreCorto: string;
  dorsal: string;
  posicion: string;
  rol: string;
  descripcion: string;
  imagen: string;
  xPct: number; // % from left of field container
  yPct: number; // % from top of field container
  accent: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
// Field SVG viewBox: 0 0 400 620  (portrait)
// Player positions mapped to %, attack goes UP (top = opponent goal)
const jugadores: Jugador[] = [
  {
    nombre: "Santiago",
    nombreCorto: "Santiago",
    dorsal: "10",
    posicion: "Capitán · Mediapunta",
    rol: "Líder de Movimiento",
    descripcion:
      "El #10 nunca descansa. Santiago dirige desde el centro, conecta a todos y marca el ritmo que la Red necesita para ganar cada partido.",
    imagen: "/mundial/santiago.jpeg",
    xPct: 50,
    yPct: 24,
    accent: "#FACC15",
  },
  {
    nombre: "Lupita",
    nombreCorto: "Lupita",
    dorsal: "07",
    posicion: "Extremo Izquierdo",
    rol: "Líder de Difusión",
    descripcion:
      "Los mejores goles empiezan con una asistencia perfecta. Lupita lleva el mensaje a cada rincón, amplificando la voz de la Red hasta el último aficionado.",
    imagen: "/mundial/lupita.jpeg",
    xPct: 20,
    yPct: 47,
    accent: "#22c55e",
  },
  {
    nombre: "Meliza Aguilar",
    nombreCorto: "Meliza",
    dorsal: "11",
    posicion: "Extremo Derecho",
    rol: "Directora de Identidad Visual y Branding",
    descripcion:
      "La que hace irresistible mirar al equipo. Meliza define la estética, la narrativa visual y la marca que distingue a la Red en cualquier cancha.",
    imagen: "/mundial/meliza.png",
    xPct: 80,
    yPct: 47,
    accent: "#FB923C",
  },
  {
    nombre: "Jesús Ortega",
    nombreCorto: "Jesús",
    dorsal: "08",
    posicion: "Motor del Equipo",
    rol: "Líder de Tecnología e Innovación",
    descripcion:
      "El mediocampista que no para. Jesús convierte la tecnología en ventaja táctica, manteniendo a la Red conectada y siempre un paso adelante.",
    imagen: "/mundial/jesus.jpg",
    xPct: 50,
    yPct: 68,
    accent: "#38BDF8",
  },
];

const dt = {
  nombre: "Sen. Luis Armando Melgar",
  nombreCorto: "Sen. Melgar",
  dorsal: "DT",
  posicion: "Director Técnico",
  rol: "El Artífice del Movimiento",
  descripcion:
    "Detrás de cada gran equipo hay una visión más grande. El Senador Melgar es el estratega que fundó el campo donde todos jugamos. Sin DT no hay equipo.",
  imagen: "/mundial/senador.jpeg",
  accent: "#ffffff",
};

// ─── SVG Field ────────────────────────────────────────────────────────────────
const FootballField = () => (
  <svg
    viewBox="0 0 400 620"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full"
    aria-hidden="true"
  >
    {/* Grass stripes */}
    {Array.from({ length: 11 }).map((_, i) => (
      <rect
        key={i}
        x={0}
        y={i * 56.4}
        width={400}
        height={56.4}
        fill={i % 2 === 0 ? "rgba(255,255,255,0.018)" : "rgba(0,0,0,0.025)"}
      />
    ))}

    {/* Field boundary */}
    <rect
      x={28}
      y={18}
      width={344}
      height={584}
      fill="none"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth={2}
    />

    {/* Center line */}
    <line
      x1={28}
      y1={310}
      x2={372}
      y2={310}
      stroke="rgba(255,255,255,0.3)"
      strokeWidth={1.5}
    />

    {/* Center circle */}
    <circle
      cx={200}
      cy={310}
      r={60}
      fill="none"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth={1.5}
    />
    <circle cx={200} cy={310} r={4} fill="rgba(255,255,255,0.55)" />

    {/* Top penalty area */}
    <rect
      x={100}
      y={18}
      width={200}
      height={100}
      fill="none"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth={1.5}
    />
    {/* Top goal area */}
    <rect
      x={140}
      y={18}
      width={120}
      height={46}
      fill="none"
      stroke="rgba(255,255,255,0.16)"
      strokeWidth={1}
    />
    {/* Top goal */}
    <rect
      x={155}
      y={3}
      width={90}
      height={18}
      fill="rgba(255,255,255,0.07)"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth={1.5}
    />
    {/* Top penalty spot */}
    <circle cx={200} cy={90} r={3.5} fill="rgba(255,255,255,0.55)" />

    {/* Bottom penalty area */}
    <rect
      x={100}
      y={502}
      width={200}
      height={100}
      fill="none"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth={1.5}
    />
    {/* Bottom goal area */}
    <rect
      x={140}
      y={556}
      width={120}
      height={46}
      fill="none"
      stroke="rgba(255,255,255,0.16)"
      strokeWidth={1}
    />
    {/* Bottom goal */}
    <rect
      x={155}
      y={599}
      width={90}
      height={18}
      fill="rgba(255,255,255,0.07)"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth={1.5}
    />
    {/* Bottom penalty spot */}
    <circle cx={200} cy={532} r={3.5} fill="rgba(255,255,255,0.55)" />

    {/* Corner arcs */}
    <path d="M28 18 Q44 18 44 34" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <path d="M372 18 Q356 18 356 34" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <path d="M28 602 Q44 602 44 586" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <path d="M372 602 Q356 602 356 586" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />

    {/* Formation lines — diamond shape (dashed green) */}
    {/* Jesús(200,421) → Santiago(200,149) center axis */}
    <line x1={200} y1={149} x2={200} y2={421}
      stroke="rgba(34,197,94,0.3)" strokeWidth={1.2} strokeDasharray="5 5" />
    {/* Jesús → Lupita(80,291) */}
    <line x1={200} y1={421} x2={80} y2={291}
      stroke="rgba(34,197,94,0.25)" strokeWidth={1.2} strokeDasharray="5 5" />
    {/* Jesús → Meliza(320,291) */}
    <line x1={200} y1={421} x2={320} y2={291}
      stroke="rgba(34,197,94,0.25)" strokeWidth={1.2} strokeDasharray="5 5" />
    {/* Santiago → Lupita */}
    <line x1={200} y1={149} x2={80} y2={291}
      stroke="rgba(34,197,94,0.2)" strokeWidth={1.2} strokeDasharray="5 5" />
    {/* Santiago → Meliza */}
    <line x1={200} y1={149} x2={320} y2={291}
      stroke="rgba(34,197,94,0.2)" strokeWidth={1.2} strokeDasharray="5 5" />
  </svg>
);

// ─── Player Dot (on field) ────────────────────────────────────────────────────
const PlayerDot = ({ jugador, index }: { jugador: Jugador; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.5 + index * 0.15, type: "spring", stiffness: 260, damping: 18 }}
    className="absolute flex flex-col items-center cursor-default select-none"
    style={{
      left: `${jugador.xPct}%`,
      top: `${jugador.yPct}%`,
      transform: "translate(-50%, -50%)",
    }}
  >
    {/* Outer glow ring */}
    <div className="relative group">
      <div
        className="absolute inset-[-4px] rounded-full opacity-40 blur-sm"
        style={{ backgroundColor: jugador.accent }}
      />
      {/* Photo circle */}
      <div
        className="relative w-11 h-11 rounded-full overflow-hidden border-2 shadow-lg"
        style={{ borderColor: jugador.accent }}
      >
        <Image
          src={jugador.imagen}
          alt={jugador.nombre}
          fill
          className="object-cover object-top"
          sizes="44px"
        />
      </div>
      {/* Dorsal badge */}
      <div
        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black shadow-md"
        style={{ backgroundColor: jugador.accent, color: jugador.accent === "#FACC15" ? "#1a1a1a" : "#fff" }}
      >
        {jugador.dorsal}
      </div>
    </div>
    {/* Short name */}
    <div className="mt-1 px-1.5 py-[2px] rounded text-[9px] font-black uppercase text-white leading-none whitespace-nowrap"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}>
      {jugador.nombreCorto}
    </div>
  </motion.div>
);

// ─── Cromo / Player Card ──────────────────────────────────────────────────────
const Cromo = ({ jugador, index }: { jugador: Jugador; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
    whileHover={{ y: -6, scale: 1.03 }}
    className="relative flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-gradient-to-b from-gray-800 to-gray-900"
    style={{ boxShadow: `0 0 20px ${jugador.accent}15` }}
  >
    {/* Top accent bar */}
    <div className="h-1.5 w-full" style={{ backgroundColor: jugador.accent }} />

    {/* Dorsal number — watermark */}
    <div className="absolute top-3 right-3 font-black leading-none select-none"
      style={{ fontSize: "3.5rem", color: `${jugador.accent}18` }}>
      {jugador.dorsal}
    </div>

    {/* Photo */}
    <div className="relative w-full" style={{ paddingTop: "85%" }}>
      <Image
        src={jugador.imagen}
        alt={jugador.nombre}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 50vw, 180px"
      />
      {/* Gradient overlay bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>

    {/* Info */}
    <div className="px-4 pb-4 pt-2">
      <p
        className="text-[10px] font-black uppercase tracking-widest mb-0.5"
        style={{ color: jugador.accent }}
      >
        {jugador.posicion}
      </p>
      <h3 className="text-white font-black text-sm leading-tight mb-0.5">{jugador.nombre}</h3>
      <p className="text-gray-400 text-[10px] leading-snug">{jugador.rol}</p>
    </div>
  </motion.div>
);

// ─── DT Special Card ──────────────────────────────────────────────────────────
const DTCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="relative flex items-center gap-5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-4 border border-white/10 backdrop-blur-sm overflow-hidden"
  >
    {/* Gold accent left bar */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-melgar-yellow" />

    {/* "DT" watermark */}
    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl font-black text-white/5 select-none leading-none">
      DT
    </div>

    {/* Photo */}
    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-melgar-yellow flex-shrink-0 shadow-lg">
      <Image
        src={dt.imagen}
        alt={dt.nombre}
        fill
        className="object-cover object-top"
        sizes="64px"
      />
    </div>

    {/* Text */}
    <div>
      <p className="text-melgar-yellow text-[10px] font-black uppercase tracking-widest mb-0.5">
        {dt.posicion} · Fundador
      </p>
      <h3 className="text-white font-black text-base leading-tight">{dt.nombre}</h3>
      <p className="text-gray-400 text-xs mt-0.5">{dt.rol}</p>
    </div>
  </motion.div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const SeccionMundial = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#061606" }}>
      {/* Stadium atmosphere: radial light from center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(34,197,94,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Corner floodlights */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-melgar-yellow/10 border border-melgar-yellow/30 text-melgar-yellow font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-6"
          >
            <span>🏆</span> FIFA World Cup 2026 · México · Edición Especial
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4"
          >
            Nuestro{" "}
            <span className="text-melgar-green">once titular.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Como en el fútbol, cada quien tiene su posición. En la Red Jóvenes Melgar
            también salimos a ganar — con estrategia, talento y el mismo espíritu
            mundialista que vive Tapachula este 2026.
          </motion.p>
        </div>

        {/* ── Field + Cards layout ── */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* LEFT: Football Field */}
          <div className="flex flex-col items-center">
            {/* Attacking direction label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-3 text-melgar-green text-[10px] font-black uppercase tracking-widest"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 9.293 4.707A1 1 0 0110 3z" clipRule="evenodd" />
              </svg>
              Dirección de ataque
            </motion.div>

            {/* Field container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xs rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "400 / 620",
                background: "linear-gradient(180deg, #0d2e0d 0%, #0a2010 50%, #0d2e0d 100%)",
                boxShadow: "0 0 60px rgba(34,197,94,0.15), 0 0 120px rgba(34,197,94,0.06)",
              }}
            >
              <FootballField />

              {/* Player dots positioned on field */}
              {jugadores.map((j, i) => (
                <PlayerDot key={j.dorsal} jugador={j} index={i} />
              ))}
            </motion.div>

            {/* DT — below field, outside it */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full max-w-xs mt-4"
            >
              {/* Bench divider */}
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
                  Cuerpo técnico
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="flex items-center gap-3 bg-black/40 rounded-xl p-3 border border-white/10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-melgar-yellow flex-shrink-0">
                  <Image src={dt.imagen} alt={dt.nombre} fill className="object-cover object-top" sizes="40px" />
                </div>
                <div>
                  <p className="text-melgar-yellow text-[10px] font-black uppercase tracking-widest">
                    DT · {dt.posicion}
                  </p>
                  <p className="text-white font-black text-xs">{dt.nombre}</p>
                </div>
                <div className="ml-auto text-3xl font-black text-white/10 leading-none select-none">DT</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Cromos / Player Cards */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-1"
            >
              Fichas del equipo
            </motion.p>

            {/* DT Card (detailed) */}
            <DTCard />

            {/* 4 player cromos in 2x2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {jugadores.map((j, i) => (
                <Cromo key={j.dorsal} jugador={j} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Lema ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-3xl md:text-4xl font-black italic text-melgar-yellow">
            "Tenemos con qué."
          </p>
          <p className="text-gray-600 text-xs font-black uppercase tracking-widest mt-2">
            Red Jóvenes Melgar · Tapachula, Chiapas · Mundial 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SeccionMundial;
