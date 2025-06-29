import React from 'react';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Columna izquierda: texto */}
        <div className="hero-text">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Bienvenido a <span className="highlight">Visionarios</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            La plataforma educativa que transforma la curiosidad en aprendizaje.
          </motion.p>

          <motion.button
            className="hero-button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Empezar ahora
          </motion.button>
        </div>

        {/* Columna derecha: imagen */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="./images/undraw_family_6gj8.svg" // ✅ Asegúrate de tener esta imagen en /public
            alt="Ilustración educativa"
          />
        </motion.div>
      </div>
    </section>
  );
}
