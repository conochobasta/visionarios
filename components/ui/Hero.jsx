import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Se repite cada vez que entra en pantalla
    threshold: 0.4,
  });

  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Columna izquierda: texto */}
        <div className="hero-text" ref={ref}>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1 }}
          >
            Bienvenido a <span className="highlight">Visionarios</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Accede a nuestra demo exclusiva y participa activamente en su desarrollo.
            <br />
            Plazas limitadas para familias visionarias comprometidas con la libertad educativa.
          </motion.p>

          <motion.button
            className="hero-button"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Conviértete en fundador de Visionarios.
          </motion.button>
        </div>

        {/* Columna derecha: imagen */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 30 }}
           animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="./images/undraw_family_6gj8.svg"
            alt="Ilustración educativa"
          />
        </motion.div>
      </div>
    </section>
  );
}
