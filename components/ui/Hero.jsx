import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountDownTimer from '@/components/ui/CountdownTimer.jsx';

const slides = [
  {
    image: './images/carousel/carousel-1.jpg',
    phrase: 'Imagina una educación sin límites, diseñada por y para visionarios.',
  },
  {
    image: './images/carousel/carousel-2.jpg',
    phrase: 'La tecnología más avanzada al servicio del desarrollo humano.',
  },
  {
    image: './images/carousel/carousel-3.jpg',
    phrase: 'El futuro de tus hijos comienza con tu decisión hoy.',
  },
  {
    image: './images/carousel/carousel-4.jpg',
    phrase: 'El futuro de tus hijos comienza con tu decisión hoy.',
  },
  {
    image: './images/carousel/carousel-5.jpg',
    phrase: 'El futuro de tus hijos comienza con tu decisión hoy.',
  },
];

const SLIDE_DURATION = 7000; // 7 segundos

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      {/* Fondo dinámico */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentIndex].image}
          className="hero-bg"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className='degradadoHero'></div>

      {/* Controles de flechas */}
      <div className="carousel-controls">
        <button onClick={prevSlide} className="arrow arrow-left" aria-label="Slide anterior">
          {/* Usaremos entidades o SVG para flecha, pero puedes poner la imagen si prefieres */}
          &#x276E;
        </button>
        <button onClick={nextSlide} className="arrow arrow-right" aria-label="Slide siguiente">
          &#x276F;
        </button>
      </div>

      {/* Barra de progreso */}
      <motion.div
        className="progress-bar"
        style={{
          width: `${(currentIndex / (slides.length - 1)) * 100}%`,
        }}
        initial={false}
        animate={{ width: `${(currentIndex / (slides.length - 1)) * 100}%` }}
        transition={{ duration: 0.8 }}
      />

      <div className="hero-inner">
        <div className="hero-content" ref={ref}>
          <div className="hero-phrase-container">
            <AnimatePresence mode="wait">
              <motion.p
                className="hero-phrase"
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
              >
                {slides[currentIndex].phrase}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Cuenta regresiva */}
          <div className="countdown-overlay">
            <CountDownTimer targetDate="2026-07-01T23:59:59" />
          </div>

          <motion.h1
            className="title-label"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            APP EDUCATIVA REVOLUCIONARIA
          </motion.h1>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Bienvenido a <span className="highlight">VISIONARIOS</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Apoya la creación de la educación más libre, personalizada y avanzada con IA.
            Accede a nuestra demo exclusiva y participa activamente en su desarrollo.
            <br /><br />
            Plazas limitadas para familias visionarias comprometidas con la libertad educativa
          </motion.p>

          <motion.button
            className="hero-button"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Conviértete en FUNDADOR
          </motion.button>
        </div>

        
      </div>
    </section>
  );
}
