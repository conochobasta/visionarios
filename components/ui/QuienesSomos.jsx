import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function QuienesSomos() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        {/* Contenedor de imagen + brillo */}
       <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brillo circular */}
          <div className="image-glow" />

          {/* Imagen */}
          <img
            src="./images/mackbook.png"
            alt="Sobre nosotros"
            className="about-img"
          />
        </motion.div>


        {/* Texto */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="quienesSomos-title">QUIÉNES SOMOS</h2>
          <h5 className="quienesSomos-subtitle">nuestra visión y misión</h5>
          <p className="about-paragraph">
            <b>Solo las primeras 500 familias fundadoras tendrán acceso anticipado a nuestra IA educativa revolucionaria.</b>
          </p>
          <p className="about-paragraph">
            ¿Por qué? Porque la educación tradicional y masiva ya no funciona para todos los niños. Nosotros apostamos por <b>niños con pensamiento crítico y padres que lideran el cambio.</b>
          </p>
          <p className="about-paragraph">
            Forma parte del inicio. <b>No como usuario, sino como co-creador.</b>
          </p>
          <p className="about-paragraph">
            Esta oportunidad es única e irrepetible. Disfruta de acceso exclusivo, una comunidad privada y un <b>50% de descuento de por vida.</b>
          </p>
        </motion.div>
      </div>

      {/* Línea blanca */}
      <motion.div
        className="linea-blanca"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Tags con animaciones individuales */}
      <div className="quienes-somos-tags-container">
        <div className="tag-group">
          <motion.div
            className="tag-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ACCESO EXCLUSIVO
          </motion.div>
          <motion.div
            className="tag-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            IA EDUCATIVA
          </motion.div>
        </div>
        <div className="tag-group">
          <motion.div
            className="tag-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            DESCUENTO VITALICIO
          </motion.div>
          <motion.div
            className="tag-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            COMUNIDAD PRIVADA
          </motion.div>
        </div>
      </div>
    </section>
  );
}
