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
      <div id="portal-root"></div>
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
        
        <div style={{ height: barHeight }}></div>

        {/* BottomBar con ref */}
        <BottomBar ref={bottomBarRef} />

        
        <footer className="custom-footer">
          <div className="footer-top">
            <img src="/images/meecube.png" alt="MeeCube logo" className="footer-logo" />

            <div className="footer-contact">
              <h4>CONTÁCTANOS</h4>
              <a href="mailto:meecube.ai@gmail.com">meecube.ai@gmail.com</a>
            </div>

            <div className="footer-legal">
              <h4>LEGAL</h4>
              <a href="#">Aviso legal</a>
              <a href="#">Política de privacidad</a>
            </div>
          </div>

          <hr className="footer-separator" />

          <div className="footer-bottom">
            <p>2025 Copyright Abast Global SL</p>
            <div className="footer-socials">
              <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
              <a href="#"><img src="/images/X.png" alt="X (Twitter)" /></a>
              <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
