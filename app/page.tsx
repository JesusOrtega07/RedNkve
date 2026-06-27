// Author: Chus / shegberg
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SobreNosotros from "@/components/SobreNosotros";
import Eventos from "@/components/Eventos";
import SeccionMundial from "@/components/SeccionMundial";
import Integrantes from "@/components/Integrantes";
import CrecimientoMapa from "@/components/CrecimientoMapa";
import SenadorQuote from "@/components/SenadorQuote";
import CTAComunidad from "@/components/CTAComunidad";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <SobreNosotros />
      <Eventos />
      <SeccionMundial />
      <Integrantes />
      <CrecimientoMapa />
      <SenadorQuote />
      <CTAComunidad />
      <Footer />
    </main>
  );
};

export default HomePage;
