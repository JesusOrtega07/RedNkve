"use client";
// Author: Chus / shegberg
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
type Jugador = {
  nombre: string;
  nombreCorto: string;
  dorsal: string;
  posicion: string;
  rol: string;
  descripcion: string;
  frase: string; // football analogy quote
  imagen: string;
  xPct: number;
  yPct: number;
  accent: string;
  instagram: string;
  instagramHandle: string;
};

type DT = {
  nombre: string;
  posicion: string;
  rol: string;
  descripcion: string;
  frase: string;
  imagen: string;
  instagram: string;
  instagramHandle: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const jugadores: Jugador[] = [
  {
    nombre: "Santiago",
    nombreCorto: "Santiago",
    dorsal: "10",
    posicion: "Capitán · Mediapunta",
    rol: "Líder de Movimiento",
    descripcion:
      "El #10 nunca descansa. Santiago dirige desde el centro, conecta a todos y marca el ritmo que la Red necesita para ganar cada partido.",
    frase:
      "Un capitán no gana solo — gana con sus compañeros. Mi trabajo es asegurarme de que todos lleguen al arco.",
    imagen: "/mundial/santiago.jpeg",
    xPct: 50,
    yPct: 24,
    accent: "#FACC15",
    instagram: "https://www.instagram.com/ay.dieguito/",
    instagramHandle: "@ay.dieguito",
  },
  {
    nombre: "Lupita",
    nombreCorto: "Lupita",
    dorsal: "07",
    posicion: "Extremo Izquierdo",
    rol: "Líder de Difusión",
    descripcion:
      "Los mejores goles empiezan con una asistencia perfecta. Lupita lleva el mensaje a cada rincón, amplificando la voz de la Red hasta el último aficionado.",
    frase:
      "El mejor pase es el que llega donde nadie espera. Así trabajo yo — llegando a todos.",
    imagen: "/mundial/lupita.jpeg",
    xPct: 20,
    yPct: 47,
    accent: "#22c55e",
    instagram: "https://www.instagram.com/arisaa_fg/",
    instagramHandle: "@arisaa_fg",
  },
  {
    nombre: "Meliza Aguilar",
    nombreCorto: "Meliza",
    dorsal: "11",
    posicion: "Extremo Derecho",
    rol: "Directora Creativa",
    descripcion:
      "La que hace irresistible mirar al equipo. Meliza define la estética, la narrativa visual y la marca que distingue a la Red en cualquier cancha.",
    frase:
      "El fútbol también se gana con lo que el rival ve en ti. Nosotros les damos algo que no pueden olvidar.",
    imagen: "/mundial/meliza.png",
    xPct: 80,
    yPct: 47,
    accent: "#FB923C",
    instagram: "https://www.instagram.com/jh_glz14/",
    instagramHandle: "@jh_glz14",
  },
  {
    nombre: "Jesús Ortega",
    nombreCorto: "Jesús",
    dorsal: "08",
    posicion: "Motor del Equipo",
    rol: "Líder de Tecnología e Innovación",
    descripcion:
      "El mediocampista que no para. Jesús convierte la tecnología en ventaja táctica, manteniendo a la Red conectada y siempre un paso adelante.",
    frase:
      "En el campo siempre hay caos. La tecnología es mi forma de encontrar el orden dentro de él.",
    imagen: "/mundial/jesus.jpg",
    xPct: 50,
    yPct: 68,
    accent: "#38BDF8",
    instagram: "https://www.instagram.com/nososoyyisus_/",
    instagramHandle: "@nososoyyisus_",
  },
];

const dt: DT = {
  nombre: "Sen. Luis Armando Melgar",
  posicion: "Director Técnico",
  rol: "El Artífice del Movimiento",
  descripcion:
    "Detrás de cada gran equipo hay una visión más grande. El Senador Melgar es el estratega que fundó el campo donde todos jugamos. Sin DT no hay equipo.",
  frase:
    "Este equipo no necesita que yo juegue. Necesita que yo confíe en ellos. Y lo hago.",
  imagen: "/mundial/senador.jpeg",
  instagram: "https://www.instagram.com/red_jovenes_melgar/",
  instagramHandle: "@red_jovenes_melgar",
};

// ─── Instagram Icon ───────────────────────────────────────────────────────────
const IgIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// ─── Jugador Modal ────────────────────────────────────────────────────────────
const JugadorModal = ({
  jugador,
  onClose,
}: {
  jugador: Jugador | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!jugador) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #0f1f0f 0%, #111827 60%)",
          border: `2px solid ${jugador.accent}30`,
          boxShadow: `0 0 60px ${jugador.accent}20`,
        }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ backgroundColor: jugador.accent }} />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Dorsal watermark */}
        <div
          className="absolute top-6 left-5 font-black leading-none select-none pointer-events-none"
          style={{ fontSize: "5rem", color: `${jugador.accent}12` }}
        >
          #{jugador.dorsal}
        </div>

        {/* Photo */}
        <div className="relative w-full" style={{ paddingTop: "72%" }}>
          <Image
            src={jugador.imagen}
            alt={jugador.nombre}
            fill
            className="object-cover object-top"
            sizes="400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

          {/* Position chip */}
          <div className="absolute bottom-4 left-4">
            <span
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: jugador.accent, color: jugador.accent === "#FACC15" ? "#111" : "#fff" }}
            >
              #{jugador.dorsal} · {jugador.posicion}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-6 pb-6 pt-4">
          <h3 className="text-white font-black text-2xl tracking-tight mb-0.5">{jugador.nombre}</h3>
          <p className="text-sm mb-4" style={{ color: jugador.accent }}>{jugador.rol}</p>

          {/* Football quote */}
          <div
            className="rounded-2xl px-5 py-4 mb-5 border-l-4"
            style={{
              backgroundColor: `${jugador.accent}12`,
              borderLeftColor: jugador.accent,
            }}
          >
            <p className="text-white font-black italic text-sm leading-snug">
              "{jugador.frase}"
            </p>
          </div>

          {/* Instagram */}
          <a
            href={jugador.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm transition-all hover:opacity-90"
            style={{
              backgroundColor: jugador.accent,
              color: jugador.accent === "#FACC15" ? "#111" : "#fff",
            }}
          >
            <IgIcon />
            {jugador.instagramHandle}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── DT Modal ─────────────────────────────────────────────────────────────────
const DTModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 12 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl bg-gray-950 border border-melgar-yellow/30"
        style={{ boxShadow: "0 0 60px rgba(250,204,21,0.15)" }}
      >
        <div className="h-1.5 w-full bg-melgar-yellow" />

        <button
          onClick={onClose}
          className="absolute top-5 right-4 z-20 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* DT watermark */}
        <div className="absolute top-6 left-4 font-black leading-none select-none pointer-events-none text-melgar-yellow/8"
          style={{ fontSize: "5rem" }}>DT</div>

        {/* Photo */}
        <div className="relative w-full" style={{ paddingTop: "72%" }}>
          <Image src={dt.imagen} alt={dt.nombre} fill className="object-cover object-top" sizes="400px" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-melgar-yellow text-melgar-navy">
              Director Técnico · Fundador
            </span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-4">
          <h3 className="text-white font-black text-2xl tracking-tight mb-0.5">{dt.nombre}</h3>
          <p className="text-melgar-yellow text-sm mb-4">{dt.rol}</p>

          <div className="bg-melgar-yellow/10 border-l-4 border-melgar-yellow rounded-r-2xl px-5 py-4 mb-5">
            <p className="text-white font-black italic text-sm leading-snug">
              "{dt.frase}"
            </p>
          </div>

          <a
            href={dt.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm bg-melgar-yellow hover:bg-melgar-yellow-dark text-melgar-navy transition-colors"
          >
            <IgIcon />
            {dt.instagramHandle}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── SVG Field ────────────────────────────────────────────────────────────────
const FootballField = () => (
  <svg viewBox="0 0 400 620" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full" aria-hidden="true">
    {Array.from({ length: 11 }).map((_, i) => (
      <rect key={i} x={0} y={i * 56.4} width={400} height={56.4}
        fill={i % 2 === 0 ? "rgba(255,255,255,0.018)" : "rgba(0,0,0,0.025)"} />
    ))}
    <rect x={28} y={18} width={344} height={584} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
    <line x1={28} y1={310} x2={372} y2={310} stroke="rgba(255,255,255,0.3)" strokeWidth={1.5} />
    <circle cx={200} cy={310} r={60} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <circle cx={200} cy={310} r={4} fill="rgba(255,255,255,0.55)" />
    <rect x={100} y={18} width={200} height={100} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <rect x={140} y={18} width={120} height={46} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth={1} />
    <rect x={155} y={3} width={90} height={18} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} />
    <circle cx={200} cy={90} r={3.5} fill="rgba(255,255,255,0.55)" />
    <rect x={100} y={502} width={200} height={100} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <rect x={140} y={556} width={120} height={46} fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth={1} />
    <rect x={155} y={599} width={90} height={18} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} />
    <circle cx={200} cy={532} r={3.5} fill="rgba(255,255,255,0.55)" />
    <path d="M28 18 Q44 18 44 34" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <path d="M372 18 Q356 18 356 34" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <path d="M28 602 Q44 602 44 586" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    <path d="M372 602 Q356 602 356 586" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
    {/* Formation lines */}
    <line x1={200} y1={149} x2={200} y2={421} stroke="rgba(34,197,94,0.3)" strokeWidth={1.2} strokeDasharray="5 5" />
    <line x1={200} y1={421} x2={80} y2={291} stroke="rgba(34,197,94,0.25)" strokeWidth={1.2} strokeDasharray="5 5" />
    <line x1={200} y1={421} x2={320} y2={291} stroke="rgba(34,197,94,0.25)" strokeWidth={1.2} strokeDasharray="5 5" />
    <line x1={200} y1={149} x2={80} y2={291} stroke="rgba(34,197,94,0.2)" strokeWidth={1.2} strokeDasharray="5 5" />
    <line x1={200} y1={149} x2={320} y2={291} stroke="rgba(34,197,94,0.2)" strokeWidth={1.2} strokeDasharray="5 5" />
  </svg>
);

// ─── Player Dot ───────────────────────────────────────────────────────────────
const PlayerDot = ({
  jugador,
  index,
  onClick,
}: {
  jugador: Jugador;
  index: number;
  onClick: () => void;
}) => (
  <motion.button
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.5 + index * 0.15, type: "spring", stiffness: 260, damping: 18 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="absolute flex flex-col items-center cursor-pointer group"
    style={{ left: `${jugador.xPct}%`, top: `${jugador.yPct}%`, transform: "translate(-50%, -50%)" }}
    aria-label={`Ver perfil de ${jugador.nombre}`}
  >
    <div className="relative">
      <div className="absolute inset-[-4px] rounded-full opacity-40 blur-sm group-hover:opacity-70 transition-opacity"
        style={{ backgroundColor: jugador.accent }} />
      {/* Pulse ring on hover */}
      <div className="absolute inset-[-8px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity border-2"
        style={{ borderColor: jugador.accent }} />
      <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 shadow-lg"
        style={{ borderColor: jugador.accent }}>
        <Image src={jugador.imagen} alt={jugador.nombre} fill className="object-cover object-top" sizes="44px" />
      </div>
      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black shadow-md"
        style={{ backgroundColor: jugador.accent, color: jugador.accent === "#FACC15" ? "#1a1a1a" : "#fff" }}>
        {jugador.dorsal}
      </div>
    </div>
    <div className="mt-1 px-1.5 py-[2px] rounded text-[9px] font-black uppercase text-white leading-none whitespace-nowrap"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}>
      {jugador.nombreCorto}
    </div>
  </motion.button>
);

// ─── Cromo card ───────────────────────────────────────────────────────────────
const Cromo = ({
  jugador,
  index,
  onClick,
}: {
  jugador: Jugador;
  index: number;
  onClick: () => void;
}) => (
  <motion.button
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
    whileHover={{ y: -6, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className="relative flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-gradient-to-b from-gray-800 to-gray-900 text-left w-full cursor-pointer"
    style={{ boxShadow: `0 0 20px ${jugador.accent}15` }}
  >
    <div className="h-1.5 w-full" style={{ backgroundColor: jugador.accent }} />
    <div className="absolute top-3 right-3 font-black leading-none select-none pointer-events-none"
      style={{ fontSize: "3.5rem", color: `${jugador.accent}18` }}>
      {jugador.dorsal}
    </div>
    <div className="relative w-full" style={{ paddingTop: "85%" }}>
      <Image src={jugador.imagen} alt={jugador.nombre} fill className="object-cover object-top" sizes="180px" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
    <div className="px-4 pb-4 pt-2">
      <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: jugador.accent }}>
        {jugador.posicion}
      </p>
      <h3 className="text-white font-black text-sm leading-tight mb-0.5">{jugador.nombre}</h3>
      <p className="text-gray-400 text-[10px] leading-snug">{jugador.rol}</p>
      <p className="text-[10px] mt-2 font-bold uppercase tracking-widest" style={{ color: jugador.accent }}>
        Ver ficha →
      </p>
    </div>
  </motion.button>
);

// ─── DT card (clickeable) ────────────────────────────────────────────────────
const DTCard = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="relative flex items-center gap-5 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-4 border border-white/10 backdrop-blur-sm overflow-hidden w-full text-left cursor-pointer group"
  >
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-melgar-yellow" />
    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl font-black text-white/5 select-none leading-none pointer-events-none">DT</div>
    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-melgar-yellow flex-shrink-0 shadow-lg">
      <Image src={dt.imagen} alt={dt.nombre} fill className="object-cover object-top" sizes="64px" />
    </div>
    <div>
      <p className="text-melgar-yellow text-[10px] font-black uppercase tracking-widest mb-0.5">
        {dt.posicion} · Fundador
      </p>
      <h3 className="text-white font-black text-base leading-tight">{dt.nombre}</h3>
      <p className="text-gray-400 text-xs mt-0.5">{dt.rol}</p>
    </div>
    <div className="ml-auto flex-shrink-0">
      <span className="text-melgar-yellow text-[10px] font-black uppercase tracking-widest group-hover:underline">
        Ver →
      </span>
    </div>
  </motion.button>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const SeccionMundial = () => {
  const [selectedJugador, setSelectedJugador] = useState<Jugador | null>(null);
  const [dtOpen, setDtOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#061606" }}>
      {/* Stadium atmosphere */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-melgar-yellow/10 border border-melgar-yellow/30 text-melgar-yellow font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-6"
          >
            <span>🏆</span> FIFA World Cup 2026 · México · Edición Especial
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4"
          >
            Nuestro{" "}
            <span className="text-melgar-green">once titular.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Como en el fútbol, cada quien tiene su posición.{" "}
            <span className="text-white font-bold">Toca una ficha</span> para conocer a cada jugador de la Red.
          </motion.p>
        </div>

        {/* Field + Cards */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* Field */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-3 text-melgar-green text-[10px] font-black uppercase tracking-widest"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 9.293 4.707A1 1 0 0110 3z" clipRule="evenodd" />
              </svg>
              Dirección de ataque
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xs rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "400 / 620",
                background: "linear-gradient(180deg, #0d2e0d 0%, #0a2010 50%, #0d2e0d 100%)",
                boxShadow: "0 0 60px rgba(34,197,94,0.15), 0 0 120px rgba(34,197,94,0.06)",
              }}
            >
              <FootballField />
              {jugadores.map((j, i) => (
                <PlayerDot key={j.dorsal} jugador={j} index={i} onClick={() => setSelectedJugador(j)} />
              ))}
            </motion.div>

            {/* DT below field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}
              className="w-full max-w-xs mt-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-gray-600 text-[10px] font-black uppercase tracking-widest">Cuerpo técnico</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <DTCard onClick={() => setDtOpen(true)} />
            </motion.div>
          </div>

          {/* Cromos */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-1"
            >
              Fichas del equipo — toca para ver más
            </motion.p>
            <DTCard onClick={() => setDtOpen(true)} />
            <div className="grid grid-cols-2 gap-3">
              {jugadores.map((j, i) => (
                <Cromo key={j.dorsal} jugador={j} index={i} onClick={() => setSelectedJugador(j)} />
              ))}
            </div>
          </div>
        </div>

        {/* Lema */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
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

      {/* Modals */}
      <AnimatePresence>
        {selectedJugador && (
          <JugadorModal jugador={selectedJugador} onClose={() => setSelectedJugador(null)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {dtOpen && <DTModal onClose={() => setDtOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default SeccionMundial;
