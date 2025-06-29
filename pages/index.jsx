import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Fases from "@/components/ui/FasesSection";
import Testimonios from "@/components/ui/Testimonios";
import RegisterPopup from "@/components/ui/Registro";
import LoginPopup from "@/components/ui/Login";
import Hero from '@/components/ui/Hero';
import QuienesSomos from '@/components/ui/QuienesSomos';
import FAQS from '@/components/ui/FAQS.jsx';
import CountDownTimer from '@/components/ui/countdownTimer.jsx';
import VerticalTimeLine from "@/components/ui/VerticalTimeLine";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';








import { useState } from "react";

export default function VisionariosLanding() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const start = '2025-06-29T12:00:00';
  const end = '2025-07-01T23:59:59';

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="logo">Visionarios</span>
          <div className="nav-links">
            <a href="#about">Quiénes somos</a>
            <a href="#phases">Fases</a>
            <a href="#faqs">FAQ</a>
            <a href="#testimonials">Testimonios</a>
            <a href="#join">Únete</a>
            <a href="#register" onClick={() => setIsRegisterOpen(true)} className="register-link">Registro / Pago</a>
            <a href="#login" onClick={() => setIsLoginOpen(true)}>Iniciar sesión</a>
          </div>
        </div>
      </nav>

      <div style={{ padding: 20 }}>
      {/* Popups */}
      <LoginPopup open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterPopup open={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      </div>

      {/* Hero */}
      <section id="hero" className="">
        <Hero />
      </section>

    <main className="main-content">

      {/* QuienesSomos */}
      <section id="QuienesSomos" className="form-section webSection">
        <QuienesSomos />
      </section>

      {/* Contenedor Únete */}
      <div id="join" className="join-container">
          <Button className="btn-dark btn-secondary btn-unete">Únete como Visionario</Button>
        </div>

      {/* countdown */}
        <section id="countdown" className="webSection">
          <CountDownTimer targetDate="2025-07-01T23:59:59" />
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
