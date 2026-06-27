"use client";
// Author: Chus / shegberg
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
type Integrante = {
  nombre: string;
  cargo: string;
  imagen: string | null;
  instagram: string;
  instagramHandle: string;
  frase: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const integrantes: Integrante[] = [
  {
    nombre: "Santiago",
    cargo: "Líder de Movimiento",
    imagen: "/integrantes/santiago.jpg",
    instagram: "https://www.instagram.com/ay.dieguito/",
    instagramHandle: "@ay.dieguito",
    frase: "El movimiento no espera. Yo tampoco.",
  },
  {
    nombre: "Jesús Ortega",
    cargo: "Líder de Tecnología e Innovación",
    imagen: "/integrantes/jesus_ortega.jpeg",
    instagram: "https://www.instagram.com/nososoyyisus_/",
    instagramHandle: "@nososoyyisus_",
    frase: "La tecnología al servicio de quienes más lo necesitan.",
  },
  {
    nombre: "Meliza Aguilar",
    cargo: "Directora Creativa",
    imagen: "/integrantes/meliza_aguilar.jpeg",
    instagram: "https://www.instagram.com/jh_glz14/",
    instagramHandle: "@jh_glz14",
    frase: "Si no llama la atención, no está cumpliendo su propósito.",
  },
  {
    nombre: "Lupita",
    cargo: "Líder de Difusión",
    imagen: null,
    instagram: "https://www.instagram.com/arisaa_fg/",
    instagramHandle: "@arisaa_fg",
    frase: "Cada mensaje que enviamos es una semilla que sembramos.",
  },
];

const senador: Integrante = {
  nombre: "Sen. Luis Armando Melgar",
  cargo: "Fundador del Movimiento",
  imagen: "/senador/senator-melgar.jpeg",
  instagram: "https://www.instagram.com/red_jovenes_melgar/",
  instagramHandle: "@red_jovenes_melgar",
  frase: "Los jóvenes no son el futuro. Son el presente de Chiapas.",
};

// ─── Instagram icon ───────────────────────────────────────────────────────────
const IgIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// ─── Modal ────────────────────────────────────────────────────────────────────
const IntegranteModal = ({
  integrante,
  onClose,
  isSenador,
}: {
  integrante: Integrante;
  onClose: () => void;
  isSenador?: boolean;
}) => {
  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Card */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 10 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Photo */}
        <div className="relative w-full" style={{ paddingTop: "75%" }}>
          {integrante.imagen ? (
            <Image
              src={integrante.imagen}
              alt={integrante.nombre}
              fill
              className="object-cover object-top"
              sizes="400px"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-melgar-navy to-melgar-green flex items-center justify-center">
              <span className="text-white text-8xl font-black opacity-30">
                {integrante.nombre.charAt(0)}
              </span>
            </div>
          )}
          {/* Photo gradient */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

          {/* Cargo badge on photo */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${isSenador ? "bg-melgar-yellow text-melgar-navy" : "bg-melgar-green text-white"}`}>
              {integrante.cargo}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-6 pb-6 pt-2">
          <h3 className="text-gray-900 font-black text-2xl tracking-tight mb-4">
            {integrante.nombre}
          </h3>

          {/* Quote */}
          <div className={`rounded-2xl px-5 py-4 mb-5 border-l-4 ${isSenador ? "bg-melgar-yellow/10 border-melgar-yellow" : "bg-green-50 border-melgar-green"}`}>
            <p className={`font-black italic text-base leading-snug ${isSenador ? "text-gray-900" : "text-gray-800"}`}>
              "{integrante.frase}"
            </p>
          </div>

          {/* Instagram CTA */}
          <a
            href={integrante.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm transition-colors ${
              isSenador
                ? "bg-melgar-yellow hover:bg-melgar-yellow-dark text-melgar-navy"
                : "bg-melgar-green hover:bg-melgar-green-dark text-white"
            }`}
          >
            <IgIcon />
            {integrante.instagramHandle}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Avatar placeholder ───────────────────────────────────────────────────────
const AvatarPlaceholder = ({ nombre }: { nombre: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-melgar-navy to-melgar-green flex items-center justify-center">
    <span className="text-white text-4xl font-black">
      {nombre.charAt(0).toUpperCase()}
    </span>
  </div>
);

// ─── Small card ───────────────────────────────────────────────────────────────
const IntegranteCard = ({
  integrante,
  index,
  onClick,
}: {
  integrante: Integrante;
  index: number;
  onClick: () => void;
}) => (
  <motion.button
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-left w-full group cursor-pointer"
  >
    <div className="h-1.5 bg-melgar-green w-full" />
    <div className="p-6 flex flex-col items-center text-center">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-md group-hover:border-melgar-green/30 transition-colors">
        {integrante.imagen ? (
          <Image src={integrante.imagen} alt={integrante.nombre} fill className="object-cover object-top" sizes="96px" />
        ) : (
          <AvatarPlaceholder nombre={integrante.nombre} />
        )}
      </div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
        {integrante.cargo}
      </p>
      <h3 className="text-lg font-black text-gray-900 mb-3">{integrante.nombre}</h3>
      <span className="text-xs text-melgar-green font-bold group-hover:underline">
        Ver perfil →
      </span>
    </div>
  </motion.button>
);

// ─── Section ──────────────────────────────────────────────────────────────────
const Integrantes = () => {
  const [selected, setSelected] = useState<Integrante | null>(null);
  const [isSenadorSelected, setIsSenadorSelected] = useState(false);

  const openModal = (integrante: Integrante, esSenador = false) => {
    setSelected(integrante);
    setIsSenadorSelected(esSenador);
  };
  const closeModal = () => { setSelected(null); setIsSenadorSelected(false); };

  return (
    <section id="integrantes" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-melgar-green text-sm font-black uppercase tracking-widest mb-4"
          >
            Nuestro equipo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4"
          >
            Personas que dan{" "}
            <span className="text-melgar-green">vida a la Red.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            Jóvenes de Tapachula, Chiapas, que llevan el lema en las acciones, no solo en las palabras.
          </motion.p>
        </div>

        {/* Senador featured card — clickeable */}
        <motion.button
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
          onClick={() => openModal(senador, true)}
          className="relative overflow-hidden rounded-3xl mb-8 bg-gray-950 border border-melgar-yellow/20 w-full text-left group cursor-pointer"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-melgar-yellow" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 100% at 15% 50%, rgba(250,204,21,0.06) 0%, transparent 70%)" }}
          />
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 p-8 pl-10">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-melgar-yellow/40 flex-shrink-0 shadow-xl">
              <Image src="/senador/senator-melgar.jpeg" alt="Sen. Luis Armando Melgar" fill className="object-cover object-top" sizes="144px" />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
              <span className="inline-block mb-2 text-[10px] font-black uppercase tracking-widest text-melgar-yellow bg-melgar-yellow/10 border border-melgar-yellow/20 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                Fundador del Movimiento
              </span>
              <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-1">
                Sen. Luis Armando Melgar
              </h3>
              <p className="text-gray-400 text-sm mb-4">Senador por Chiapas · Impulsor de la Red Jóvenes Melgar</p>
              <blockquote className="bg-melgar-yellow/10 border-l-4 border-melgar-yellow rounded-r-xl px-4 py-2 max-w-md">
                <p className="font-black italic text-white text-base leading-snug">"Tenemos con qué."</p>
              </blockquote>
            </div>
            <div className="md:ml-auto self-center hidden md:block">
              <span className="text-melgar-yellow text-xs font-black uppercase tracking-widest group-hover:underline">
                Ver perfil →
              </span>
            </div>
          </div>
        </motion.button>

        {/* Team cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {integrantes.map((integrante, i) => (
            <IntegranteCard
              key={integrante.nombre}
              integrante={integrante}
              index={i}
              onClick={() => openModal(integrante)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <IntegranteModal
            integrante={selected}
            onClose={closeModal}
            isSenador={isSenadorSelected}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Integrantes;
