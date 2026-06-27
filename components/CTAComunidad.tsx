"use client";
// Author: Chus / shegberg
import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Jóvenes" },
  { value: "3+", label: "Eventos 2026" },
  { value: "1", label: "Tapachula, Chis." },
];

const CTAComunidad = () => {
  return (
    <section id="contacto" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-melgar-navy rounded-3xl p-10 md:p-16 text-center overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-melgar-green/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-melgar-yellow/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-melgar-green text-sm font-black uppercase tracking-widest mb-4"
            >
              Únete a la Red
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
            >
              ¿Listo para ser{" "}
              <span className="text-melgar-yellow">protagonista?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg max-w-xl mx-auto mb-10"
            >
              Síguenos en redes sociales, participa en nuestros eventos y forma parte
              de la comunidad juvenil más activa de Chiapas.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center gap-12 mb-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.instagram.com/red_jovenes_melgar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-melgar-green hover:bg-melgar-green-dark text-white font-black px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-900/40"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Seguir en Instagram
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.facebook.com/profile.php?id=61590649134202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-black px-8 py-4 rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Seguir en Facebook
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-500 text-sm mt-6"
            >
              Participación libre. Impacto real.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAComunidad;
