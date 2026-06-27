"use client";
// Author: Chus / shegberg
import Image from "next/image";
import { motion } from "framer-motion";

const SenadorQuote = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-melgar-green text-sm font-black uppercase tracking-widest mb-6">
              Nuestra inspiración
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">
              Una visión que
              <br />
              <span className="text-melgar-yellow">nos mueve.</span>
            </h2>

            {/* Quote block */}
            <div className="bg-melgar-yellow/10 border-l-4 border-melgar-yellow rounded-r-2xl px-6 py-5 mb-4">
              <p className="font-black italic text-white text-xl leading-snug mb-3">
                "Tenemos con qué."
              </p>
              <p className="text-sm text-gray-400">
                — Sen. Luis Armando Melgar · Chiapas
              </p>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mt-6">
              Red Jóvenes Melgar nace del entorno de la Red Melgar, impulsada por el{" "}
              <span className="text-white font-bold">Senador Luis Armando Melgar</span>, con la convicción
              de que Chiapas tiene el talento, la energía y la voluntad para transformarse.
              Los jóvenes somos esa fuerza.
            </p>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Decorative border */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl border-2 border-melgar-yellow/30" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-melgar-navy-mid">
                <Image
                  src="/senador/senator-melgar.jpeg"
                  alt="Senador Luis Armando Melgar"
                  fill
                  className="object-cover object-top"
                />
                {/* Overlay name */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <p className="text-white font-black text-sm">Sen. Luis Armando Melgar</p>
                  <p className="text-melgar-yellow text-xs font-bold uppercase tracking-widest">
                    Chiapas · México
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SenadorQuote;
