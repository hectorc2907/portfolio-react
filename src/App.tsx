import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // Archivo de estilos personalizados

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

export const App: React.FC = () => {
  const [aosReady, setAOSReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    setAOSReady(true);
    const handleScroll = () => {
      if (aosReady) {
        window.scrollTo(0, 0);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aosReady]);

  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
