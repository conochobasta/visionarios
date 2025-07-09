import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountDownTimer from '@/components/ui/CountdownTimer.jsx';

const slides = [
  {
    image: './images/carousel/carousel-1.jpg',
    phrase: '"La educación que elijas hoy definirá su mañana."',
  },
  {
    image: './images/carousel/carousel-2.jpg',
    phrase: '"¿Vas a confiar el futuro de tu hijo a un modelo del siglo pasado?"',
  },
  {
    image: './images/carousel/carousel-3.jpg',
    phrase: '"Si quieres resultados diferentes, deja de educar igual que todos."',
  },
  {
    image: './images/carousel/carousel-4.jpg',
    phrase: '"Elegir diferente no es arriesgado. Apostar por lo mismo, sí."',
  },
  {
    image: './images/carousel/carousel-5.jpg',
    phrase: '"Si lo que viene es nuevo, ¿por qué educarlo como antes?"',
  },
];

const SLIDE_DURATION = 7000; // 7 segundos

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);


 const startSlideTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startSlideTimer();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startSlideTimer();
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
            APP EDUCATIVA QUE CAMBIARÁ EL FUTURO
          </motion.h1>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span className="highlight">VISIONARIOS</span> te necesita ahora
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Impulsa hoy la creación de la educación más libre, personalizada y avanzada con IA. 
            La educación del futuro no se construye sola: accede ahora a esta experiencia exclusiva y participa activamente en su desarrollo. 
            El momento es ahora.
            <br /><br />
            <b style={{color: "white"}}>Cupos extremadamente limitados. ¿Vas a quedarte fuera?</b>
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
