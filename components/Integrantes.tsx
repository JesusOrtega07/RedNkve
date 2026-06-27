"use client";
// Author: Chus / shegberg
import Image from "next/image";
import { motion } from "framer-motion";

const integrantes = [
  {
    nombre: "Jesús Ortega",
    cargo: "Coordinador General",
    imagen: "/integrantes/jesus_ortega.jpeg",
    instagram: "https://www.instagram.com/nososoyyisus_",
  },
  {
    nombre: "Meliza Aguilar",
    cargo: "Secretaria de Organización",
    imagen: "/integrantes/meliza_aguilar.jpeg",
    instagram: "https://www.instagram.com/red_jovenes_melgar/",
  },
  {
    nombre: "Santiago",
    cargo: "Coordinador de Comunicación",
    imagen: "/integrantes/santiago.jpg",
    instagram: "https://www.instagram.com/red_jovenes_melgar/",
  },
  {
    nombre: "Lupita",
    cargo: "Coordinadora de Eventos",
    imagen: null,
    instagram: "https://www.instagram.com/red_jovenes_melgar/",
  },
];

const AvatarPlaceholder = ({ nombre }: { nombre: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-melgar-navy to-melgar-green flex items-center justify-center">
    <span className="text-white text-4xl font-black">
      {nombre.charAt(0).toUpperCase()}
    </span>
  </div>
);

const IntegranteCard = ({
  integrante,
  index,
}: {
  integrante: (typeof integrantes)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -4 }}
    className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
  >
    {/* Accent bar */}
    <div className="h-1.5 bg-melgar-green w-full" />

    <div className="p-6 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-md">
        {integrante.imagen ? (
          <Image
            src={integrante.imagen}
            alt={integrante.nombre}
            fill
            className="object-cover object-top"
          />
        ) : (
          <AvatarPlaceholder nombre={integrante.nombre} />
        )}
      </div>

      {/* Info */}
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
        {integrante.cargo}
      </p>
      <h3 className="text-lg font-black text-gray-900 mb-4">{integrante.nombre}</h3>

      {/* Social link */}
      <a
        href={integrante.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-melgar-green transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        Instagram
      </a>
    </div>
  </motion.div>
);

const Integrantes = () => {
  return (
    <section id="integrantes" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-melgar-green text-sm font-black uppercase tracking-widest mb-4"
          >
            Nuestro equipo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4"
          >
            Personas que dan
            <br className="hidden md:block" />{" "}
            <span className="text-melgar-green">vida a la Red.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            Jóvenes comprometidos con Chiapas que llevan el lema en las acciones, no solo en las palabras.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {integrantes.map((integrante, i) => (
            <IntegranteCard key={integrante.nombre} integrante={integrante} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrantes;
