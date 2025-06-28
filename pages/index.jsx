import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Fases from "@/components/ui/FasesSection";
import Testimonios from "@/components/ui/Testimonios";
import Registro from "@/components/ui/Registro";
import Login from "@/components/ui/Login";
import Hero from '@/components/ui/Hero';
import QuienesSomos from '@/components/ui/QuienesSomos';
import FAQS from '@/components/ui/FAQS.jsx';
import VerticalTimeLine from "@/components/ui/VerticalTimeLine";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork as WorkIcon } from 'react-icons/md';
import { MdSchool as SchoolIcon } from 'react-icons/md';
import { MdStar as StarIcon } from 'react-icons/md';








import { useState } from "react";

export default function VisionariosLanding() {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
            <a href="#register" className="register-link">Registro / Pago</a>
            <a href="#login">Iniciar sesión</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="form-section webSection">
        <Hero />
      </section>

      {/* QuienesSomos */}
      <section id="QuienesSomos" className="form-section webSection">
        <QuienesSomos />
      </section>

      <main className="main-content">
        {/* Contenedor Únete */}
        <div id="join" className="join-container">
          <Button className="btn-dark btn-secondary btn-unete">Únete como Visionario</Button>
        </div>


        {/* Testimonios */}
        <section id="testimonials" className="testimonials-section webSection">
          <Testimonios />
        </section>


        {/* Fases */}
        <section id="phases" className="timeline-wrapper webSection">
          <VerticalTimeLine />
        </section> 

        {/* Registro */}
        <section id="register" className="form-section webSection">
          <Registro />
        </section>

        {/* Login */}
        <section id="login" className="form-section webSection">
          <Login />
        </section>

        {/* faqs */}
        <section  id="faqs" className="faqs-wrapper webSection">
          <FAQS />
        </section>


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
