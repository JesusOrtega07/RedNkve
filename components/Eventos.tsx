"use client";
// Author: Chus / shegberg
import Image from "next/image";
import { motion } from "framer-motion";

type Evento = {
  slug: string;
  title: string;
  date: string;
  location: string;
  tags: string[];
  description: string;
  image: string | null;
  video: string | null;
  link: string;
};

const eventos: Evento[] = [
  {
    slug: "toma-de-protesta",
    title: "Toma de Protesta",
    date: "7 de junio de 2026",
    location: "Tapachula, Chiapas",
    tags: ["Institucional", "Liderazgo"],
    description:
      "Un momento histórico para nuestra organización. Con compromiso firme y visión de futuro, formalizamos oficialmente la estructura de Red Jóvenes Melgar, marcando el inicio de una nueva etapa de participación juvenil en Chiapas.",
    image: "/eventos/toma-de-protesta/cover.jpg",
    video: null,
    link: "https://www.instagram.com/p/DZVE5UPEY9_/?igsh=MWU1eWZqdnpjZ2h3dA==",
  },
  {
    slug: "primer-partido-mexico",
    title: "Primer Partido México",
    date: "11 de junio de 2026",
    location: "Tapachula, Chiapas",
    tags: ["Comunidad", "Deportes"],
    description:
      "La Red Jóvenes Melgar se unió a la emoción del Primer Partido de México en la Copa del Mundo 2026. Una noche de comunidad, identidad nacional y energía juvenil que nos recordó que celebrar juntos también es hacer comunidad.",
    image: "/eventos/primer-partido/cover.jpg",
    video: null,
    link: "https://www.instagram.com/p/DZWXbV9Nx2E/?igsh=MXVkdjk3ZHRnd3pqOQ==",
  },
  {
    slug: "segundo-partido-mexico",
    title: "Segundo Partido México",
    date: "18 de junio de 2026",
    location: "Tapachula, Chiapas",
    tags: ["Comunidad", "Unidad"],
    description:
      "La Red volvió a reunirse para vivir juntos el Segundo Partido de México. Más que un evento deportivo, fue un espacio de convivencia, pertenencia y orgullo chiapaneco que sigue construyendo nuestra identidad como comunidad.",
    image: null,
    video: "/eventos/segundo-partido/partido.mov",
    link: "https://www.instagram.com/p/DZrE7U1tDxf/?igsh=bWpwdWMzdGJtNHNi",
  },
  {
    slug: "torneo-futbol",
    title: "Torneo de Futbol.",
    date: "¡¡¡PROXIMAMENTE!!!",
    location: "Tapachula, Chiapas",
    tags: ["Mundial", "Futbol", "Deportes"],
    description:
      "La Red volvió a reunirse para vivir juntos el Segundo Partido de México. Más que un evento deportivo, fue un espacio de convivencia, pertenencia y orgullo chiapaneco que sigue construyendo nuestra identidad como comunidad.",
    image: "/eventos/evento-futbol/EventoFutbol.PNG",
    video: null,
    link: "https://www.instagram.com/p/DZrE7U1tDxf/?igsh=bWpwdWMzdGJtNHNi",
  },
  {
    slug: "playa",
    title: "Limpiemos nuestras playas.",
    date: "¡¡¡PROXIMAMENTE!!!",
    location: "Tapachula, Chiapas",
    tags: ["Comunidad", "Conciencia"],
    description:
      "La Red volvió a reunirse para vivir juntos el Segundo Partido de México. Más que un evento deportivo, fue un espacio de convivencia, pertenencia y orgullo chiapaneco que sigue construyendo nuestra identidad como comunidad.",
    image: "/eventos/playa/playa.PNG",
    video: null,
    link: "https://www.instagram.com/p/DZrE7U1tDxf/?igsh=bWpwdWMzdGJtNHNi",
  },
  {
    slug: "bazar",
    title: "Bazar Juvenil",
    date: "¡¡¡PROXIMAMENTE!!!",
    location: "Tapachula, Chiapas",
    tags: ["Comunidad", "Conciencia"],
    description:
      "La Red volvió a reunirse para vivir juntos el Segundo Partido de México. Más que un evento deportivo, fue un espacio de convivencia, pertenencia y orgullo chiapaneco que sigue construyendo nuestra identidad como comunidad.",
    image: "/eventos/bazar/bazar.PNG",
    video: null,
    link: "https://www.instagram.com/p/DZrE7U1tDxf/?igsh=bWpwdWMzdGJtNHNi",
  },
];

const EventoCard = ({ evento, index }: { evento: Evento; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    whileHover={{ y: -4 }}
    className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
  >
    {/* Media */}
    <div className="relative h-52 w-full overflow-hidden">
      {evento.video ? (
        <>
          <video
            src={evento.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* Video badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-melgar-green text-white font-black text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Video
            </span>
          </div>
        </>
      ) : evento.image ? (
        <Image
          src={evento.image}
          alt={evento.title}
          fill
          className="object-cover object-center"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-melgar-navy to-melgar-green flex items-center justify-center">
          <p className="text-white/30 text-6xl font-black select-none">RJM</p>
        </div>
      )}
      {/* Date badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-sm text-melgar-navy font-black text-xs px-3 py-1.5 rounded-full">
          {evento.date}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex gap-2 flex-wrap mb-3">
        {evento.tags.map((tag) => (
          <span
            key={tag}
            className="bg-green-50 text-melgar-green font-bold text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-2">{evento.title}</h3>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
        {evento.location}
      </p>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{evento.description}</p>

      <a
        href={evento.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-melgar-green font-bold text-sm hover:underline"
      >
        Ver en Instagram
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Eventos = () => {
  return (
    <section id="eventos" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-melgar-green text-sm font-black uppercase tracking-widest mb-4"
          >
            Nuestros eventos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4"
          >
            Aquí contamos historias
            <br className="hidden md:block" /> de comunidad.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            Cada evento es un espacio donde los jóvenes somos protagonistas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {eventos.map((evento, i) => (
            <EventoCard key={evento.slug} evento={evento} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/red_jovenes_melgar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-melgar-green font-bold text-sm hover:underline"
          >
            Ver todos los eventos en Instagram
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Eventos;
