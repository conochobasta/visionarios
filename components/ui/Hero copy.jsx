import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountDownTimer from '@/components/ui/CountdownTimer.jsx';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Se repite cada vez que entra en pantalla
    threshold: 0,
  });

  return (
    <section className="hero">
            {/* countdown */}
      <div className="hero-inner">
        {/* Columna izquierda: texto */}
        <div className="hero-content" ref={ref}>
           <motion.h1
            className="title-label"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1 }}
          >
            APP EDUCATIVA REVOLUCIONARIA
          </motion.h1>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Bienvenido a <span className="highlight">VISIONARIOS</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
           Apoya la creación de la educación más libre, personalizada y avanzada con IA. Accede a nuestra demo exclusiva y participa activamente en su desarrollo.
            <br />
            <br />
            Plazas limitadas para familias visionarias comprometidas con la libertad educativa
          </motion.p>

          <motion.button
            className="hero-button"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Conviértete en FUNDADOR
          </motion.button>
        </div>

        {/* Columna derecha: imagen */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="image-wrapper">
          {/* countdown sobre la imagen */}
          <div className="countdown-overlay">
            <CountDownTimer targetDate="2026-07-01T23:59:59" />
          </div>
          <img
            src="./images/family.png"
            alt="Ilustración educativa"
            className="hero-main-image"
          />
        </div>
      </motion.div>
      </div>
    </section>
  );
}