"use client";
// Author: Chus / shegberg
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const carouselImages = [
  { src: "/carrusel/img1.jpeg", alt: "Red Jóvenes Melgar — evento comunitario" },
  { src: "/carrusel/img2.jpg", alt: "Red Jóvenes Melgar — jóvenes en acción" },
  { src: "/carrusel/img3.jpeg", alt: "Red Jóvenes Melgar — participación ciudadana" },
  { src: "/carrusel/img4.jpg", alt: "Red Jóvenes Melgar — brigada social" },
  { src: "/carrusel/img5.jpeg", alt: "Red Jóvenes Melgar — comunidad Chiapas" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={carouselImages[current].src}
            alt={carouselImages[current].alt}
            fill
            priority={current === 0}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-melgar-navy-dark/80 via-melgar-navy/70 to-melgar-navy-dark/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24">
        {/* Logo hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-melgar-green shadow-2xl shadow-green-500/30 ring-4 ring-white/10">
            <Image src="/logo/logo.jpeg" alt="Red Jóvenes Melgar" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-melgar-green text-sm font-black uppercase tracking-widest mb-5"
        >
          Organización Juvenil · Tapachula, Chiapas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-4"
        >
          Tenemos{" "}
          <span className="text-melgar-green">con qué.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Somos la estructura juvenil que está cambiando Chiapas desde adentro.
          Servicio, formación y participación ciudadana para los jóvenes que quieren hacer la diferencia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#nosotros"
            className="bg-melgar-green hover:bg-melgar-green-dark text-white font-black px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green-900/40 text-base"
          >
            Conoce la Red
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#eventos"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-black px-8 py-4 rounded-xl transition-all text-base"
          >
            Ver eventos
          </motion.a>
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Imagen ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-melgar-green"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 right-8 z-10 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-bold uppercase tracking-widest rotate-90 origin-center">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
