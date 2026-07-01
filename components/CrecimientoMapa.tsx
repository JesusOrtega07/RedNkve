"use client";
// Author: Chus / shegberg
import { motion } from "framer-motion";

const CrecimientoMapa = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-melgar-green text-sm font-black uppercase tracking-widest mb-4"
          >
            Presencia territorial
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4"
          >
            Crecimiento Red
            <br />
            <span className="text-melgar-green">Jóvenes Melgar.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            La Red no es solo un grupo — es un movimiento que crece sección por sección
            en Tapachula, Chiapas. Explora nuestra presencia en el mapa interactivo.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto"
        >
          {[
            { value: "250+", label: "Miembros" },
            { value: "54", label: "Secciones activas" },
            { value: "Tapachula", label: "Municipio" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100"
            >
              <p className="text-xl font-black text-gray-900">{stat.value}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Iframe map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg"
          style={{ height: "640px" }}
        >
          <iframe
            src="https://mapa-jovenes-melgar.vercel.app"
            className="w-full h-full"
            title="Mapa de Crecimiento Red Jóvenes Melgar · Tapachula"
            loading="lazy"
            allow="fullscreen"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-gray-400 mt-4"
        >
          Mapa interactivo del Crecimiento de la Red Jovenes Melgar · Tapachula, Chiapas
        </motion.p>
      </div>
    </section>
  );
};

export default CrecimientoMapa;
