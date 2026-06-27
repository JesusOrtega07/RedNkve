"use client";
// Author: Chus / shegberg
import Image from "next/image";
import { motion } from "framer-motion";

const SenadorQuote = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-0">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(250,204,21,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[520px]">

          {/* LEFT: Photo — flush left, full height */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/senador/senator-melgar.jpeg"
                alt="Senador Luis Armando Melgar"
                fill
                className="object-cover object-top"
                sizes="50vw"
              />
              {/* Right gradient fade into the text column */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-950" />
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
            </div>

            {/* Name overlay on the photo */}
            <div className="absolute bottom-8 left-8 z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-melgar-yellow bg-melgar-yellow/10 border border-melgar-yellow/20 px-3 py-1 rounded-full">
                Fundador
              </span>
              <h3 className="text-white font-black text-2xl mt-2 leading-tight">
                Sen. Luis Armando Melgar
              </h3>
              <p className="text-gray-400 text-sm">Chiapas · México</p>
            </div>
          </motion.div>

          {/* Mobile photo (portrait) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:hidden relative h-72 rounded-2xl overflow-hidden mt-12 mx-0"
          >
            <Image
              src="/senador/senator-melgar.jpeg"
              alt="Senador Luis Armando Melgar"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-black text-lg">Sen. Luis Armando Melgar</p>
              <p className="text-melgar-yellow text-xs font-bold uppercase tracking-widest">Fundador · Chiapas</p>
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center py-16 md:pl-12"
          >
            <p className="text-melgar-yellow text-sm font-black uppercase tracking-widest mb-6">
              La visión detrás de todo
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8">
              El movimiento
              <br />
              <span className="text-melgar-yellow">tiene nombre.</span>
            </h2>

            {/* Main quote */}
            <div className="bg-melgar-yellow/10 border-l-4 border-melgar-yellow rounded-r-2xl px-6 py-5 mb-6">
              <p className="font-black italic text-white text-2xl md:text-3xl leading-tight mb-3">
                "Tenemos con qué."
              </p>
              <p className="text-sm text-gray-400">— Sen. Luis Armando Melgar · Chiapas, México</p>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Red Jóvenes Melgar nace de la convicción del{" "}
              <span className="text-white font-bold">Senador Luis Armando Melgar</span>{" "}
              de que Chiapas tiene el talento, la energía y la voluntad para transformarse.
              Esta Red es su apuesta por los jóvenes como protagonistas del cambio.
            </p>

            {/* Second quote */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
              <p className="text-gray-300 italic text-base font-bold leading-snug mb-2">
                "Con la salud no se juega."
              </p>
              <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">
                — Sen. Luis Armando Melgar
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SenadorQuote;
