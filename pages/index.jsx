import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/ui/navbar.jsx';
import Testimonios from "@/components/ui/Testimonios";
import RegisterPopup from "@/components/ui/Registro";
import LoginPopup from "@/components/ui/Login";
import Hero from '@/components/ui/Hero';
import QuienesSomos from '@/components/ui/QuienesSomos';
import FAQS from '@/components/ui/FAQS.jsx';
import BeneficiosExclusivos from '@/components/ui/beneficiosExclusivos.jsx';
import VerticalTimeLine from "@/components/ui/VerticalTimeLine";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import BottomBar from '@/components/ui/BottomBar.jsx';








import { useState } from "react";

export default function VisionariosLanding() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const start = '2025-06-29T12:00:00';
  const end = '2025-07-01T23:59:59';

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false, // Se reanima si vuelve a aparecer
    threshold: 0.3,
  });

  return (
    <div className="app-container">
      
      {/* navbar */}
      <Navbar />

      <div style={{ padding: 20 }}>
      {/* Popups */}
      <LoginPopup open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterPopup open={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      </div>

      {/* Hero */}
      <section id="hero" className="">
        <Hero />
      </section>

      <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="fraseDecisiones">“El futuro se construye con decisiones valientes”</p>
      </motion.section>


    <main className="main-content">

      {/* BeneficiosExclusivos */}
      <section id="BeneficiosExclusivos" className=" webSection">
        <BeneficiosExclusivos /> 
      </section>

      {/* QuienesSomos */}
      <section id="QuienesSomos" className=" webSection">
        <QuienesSomos /> 
      </section>

      {/* Fases */}
        <section id="phases" className="timeline-wrapper webSection">
          <VerticalTimeLine />
        </section> 

        {/* Testimonios */}
        <section id="testimonials" className="testimonials-section webSection">
          <Testimonios />
        </section>      

        {/* faqs */}
        <section  id="faqs" className="faqs-wrapper webSection">
          <FAQS />
        </section>  

        {/* Registro */}
       {/*} <section id="register" className="form-section webSection">
          <Registro />
        </section>

        {/* Login 
        <section id="login" className="form-section webSection">
          <Login />
        </section>*/}

        
        <BottomBar />

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
