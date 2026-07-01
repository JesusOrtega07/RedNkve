// Author: Chus / shegberg
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Red Jóvenes Melgar — Tenemos con qué",
  description:
    "Asociación juvenil comprometida con el impacto social en Chiapas. Servicio, formación y participación ciudadana para los jóvenes de Tapachula.",
  keywords: "Red Jóvenes Melgar, Chiapas, Tapachula, juventud, impacto social, Luis Armando Melgar",
  openGraph: {
    title: "Red Jóvenes Melgar",
    description: "Tenemos con qué — La comunidad juvenil más activa de Chiapas.",
    locale: "es_MX",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
