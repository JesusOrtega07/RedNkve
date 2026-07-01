"use client";
// Author: Chus / shegberg
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Raíces en Tapachula",
    description:
      "Nacimos en Tapachula con un propósito claro: ser el espacio donde los jóvenes chiapanecos encuentren voz, acción y comunidad. Nuestra identidad es local, nuestro impacto es real.",
  },
  {
    number: "02",
    title: "Servicio con propósito",
    description:
      "Organizamos brigadas, apoyos comunitarios y programas sociales que transforman realidades. Creemos que servir no es un acto puntual, sino una forma de vida.",
  },
  {
    number: "03",
    title: "Formación y liderazgo",
    description:
      "Preparamos a los jóvenes para ser protagonistas: con talleres, diálogos y espacios de participación ciudadana que desarrollan líderes para Chiapas y México.",
  },
];

const SobreNosotros = () => {
  return (
    <section id="nosotros" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-melgar-green text-sm font-black uppercase tracking-widest mb-4"
          >
            Sobre nosotros
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-5"
          >
            Jóvenes que construyen
            <br />
            <span className="text-melgar-green">el Tapachula que queremos.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Red Jóvenes Melgar es la estructura juvenil de la Red Melgar: un espacio donde la energía,
            el talento y el compromiso de los jóvenes se convierten en acción social concreta.
            No solo asistimos a eventos — los protagonizamos.
          </motion.p>

          {/* Senator attribution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-8 bg-melgar-yellow/10 border border-melgar-yellow/20 rounded-2xl px-5 py-3"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-melgar-yellow/40 flex-shrink-0">
              <Image src="/senador/senator-melgar.jpeg" alt="Sen. Luis Armando Melgar" fill className="object-cover object-top" />
            </div>
            <div className="text-left">
              <p className="text-melgar-yellow text-[10px] font-black uppercase tracking-widest">Impulsado por</p>
              <p className="text-gray-900 font-black text-sm leading-tight">Sen. Luis Armando Melgar</p>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group"
            >
              <p className="text-4xl font-black text-gray-100 group-hover:text-melgar-green/20 transition-colors mb-3">
                {pillar.number}
              </p>
              <h3 className="text-xl font-black text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-950 rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 relative overflow-hidden"
        >
          {/* Logo watermark */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image src="/logo/logo.jpeg" alt="" fill className="object-cover" />
            </div>
          </div>
          {[
            { value: "100+", label: "Jóvenes activos" },
            { value: "3+", label: "Eventos en 2026" },
            { value: "1", label: "Tapachula · Chiapas" },
            { value: "∞", label: "Impacto social" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SobreNosotros;
