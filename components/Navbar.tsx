"use client";
// Author: Chus / shegberg
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Integrantes", href: "#integrantes" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-melgar-green shadow-md shadow-green-100">
            <Image
              src="/logo/logo.jpeg"
              alt="Red Jóvenes Melgar"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-black text-gray-900 leading-tight text-base">
              Red Jóvenes Melgar
            </p>
            <p className="text-xs text-melgar-green font-bold uppercase tracking-widest">
              Tapachula, Chiapas
            </p>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-gray-600 hover:text-melgar-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://www.instagram.com/red_jovenes_melgar/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-melgar-green hover:bg-melgar-green-dark text-white font-black px-6 py-2.5 rounded-xl transition-colors shadow-lg shadow-green-200 text-sm"
          >
            Únete
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gray-900 origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-gray-900"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-gray-900 origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-bold text-gray-700 hover:text-melgar-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.instagram.com/red_jovenes_melgar/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-melgar-green text-white font-black px-6 py-3 rounded-xl text-center text-sm mt-2"
              >
                Únete
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
