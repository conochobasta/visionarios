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
            Queremos que las primeras 500 familias fundadoras accedan a nuestra IA educativa antes que nadie.
          </p>
          <p className="about-paragraph">
            ¿Por qué? Porque no creemos que la educación estándar y masificada ayude a todos los niños. Creemos en niños con pensamiento crítico y padres que toman las riendas.
          </p>
          <p className="about-paragraph">
            Forma parte del inicio. No como usuario, sino como co-creador.
          </p>
          <p className="about-paragraph">
            Esta oportunidad no volverá. Tendrás acceso exclusivo, comunidad privada, y un descuento del 50% para siempre.
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
