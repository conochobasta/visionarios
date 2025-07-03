import React, { useState, useEffect, useRef } from "react";
import Navbar from '@/components/ui/navbar.jsx';
import Testimonios from "@/components/ui/Testimonios";
import RegisterPopup from "@/components/ui/Registro";
import LoginPopup from "@/components/ui/Login";
import Hero from '@/components/ui/Hero';
import QuienesSomos from '@/components/ui/QuienesSomos';
import FAQS from '@/components/ui/FAQS.jsx';
import BeneficiosExclusivos from '@/components/ui/beneficiosExclusivos.jsx';
import VerticalTimeLine from "@/components/ui/VerticalTimeLine";
import BottomBar from '@/components/ui/BottomBar.jsx';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export default function VisionariosLanding() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const bottomBarRef = useRef(null);
  const [barHeight, setBarHeight] = useState(0);

    const [ref, inView] = useInView({
    triggerOnce: false, // Se reanima si vuelve a aparecer
    threshold: 0.3,
  });

  useEffect(() => {
    function updateHeight() {
      if (bottomBarRef.current) {
        setBarHeight(bottomBarRef.current.offsetHeight);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div style={{ padding: 20 }}>
        <LoginPopup open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        <RegisterPopup open={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      </div>

      <section id="hero"><Hero /></section>

      <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="fraseDecisiones">“El futuro se construye con decisiones valientes”</p>
            </motion.section>

      <main className="main-content">

        <section id="BeneficiosExclusivos" className="webSection"><BeneficiosExclusivos /></section>

        <section id="QuienesSomos" className="webSection"><QuienesSomos /></section>

        <section id="phases" className="timeline-wrapper webSection"><VerticalTimeLine /></section> 

        <section id="testimonials" className="testimonials-section webSection"><Testimonios /></section>   

        <section id="faqs" className="faqs-wrapper webSection"><FAQS /></section>  

        {/* Placeholder para que el contenido no quede tapado por BottomBar */}
        
        {/*PONER BOTTOMBAR */}

        
        <footer className="footer">
          <p>© 2025 Visionarios. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="#">Aviso legal</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
