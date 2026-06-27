"use client";
// Author: Chus / shegberg
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Integrantes", href: "#integrantes" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-melgar-green">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Red Jóvenes Melgar"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-black text-white text-sm leading-tight">
                  Red Jóvenes Melgar
                </p>
                <p className="text-xs text-melgar-green font-bold uppercase tracking-widest">
                  Tapachula, Chiapas
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Organización juvenil comprometida con el impacto social en Chiapas.
              Servicio, formación y participación ciudadana.
            </p>
            <p className="mt-4 text-xs font-bold text-melgar-yellow italic">
              "Tenemos con qué."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-melgar-green transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-5">
              Redes sociales
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/red_jovenes_melgar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-melgar-green transition-colors font-medium"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @red_jovenes_melgar
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590649134202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-melgar-green transition-colors font-medium"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Red Jóvenes Melgar
              </a>
            </div>
          </div>
        </div>

        {/* Senador strip */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-melgar-yellow/5 border border-melgar-yellow/15 rounded-2xl px-6 py-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-melgar-yellow/40 flex-shrink-0">
              <Image src="/senador/senator-melgar.jpeg" alt="Sen. Luis Armando Melgar" fill className="object-cover object-top" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-center sm:text-left flex-1">
              <div>
                <p className="text-melgar-yellow text-[10px] font-black uppercase tracking-widest">Una iniciativa del</p>
                <p className="text-white font-black text-sm">Sen. Luis Armando Melgar · Chiapas</p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-gray-700" />
              <p className="text-gray-500 italic text-sm font-bold">"Tenemos con qué."</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Red Jóvenes Melgar · Tapachula, Chiapas, México
          </p>
          <p className="text-xs text-gray-600">
            Hecho con compromiso por{" "}
            <span className="text-melgar-green font-bold">la comunidad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
