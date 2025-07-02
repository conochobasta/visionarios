import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const beneficioData = [
  { src: "./images/discount.png", alt: "Descuento", label: "50% descuento vitalicio" },
  { src: "./images/clock.png", alt: "Flexibilidad horaria", label: "Acceso prioritario" },
  { src: "./images/speechBallon.png", alt: "Soporte personalizado", label: "Participación activa" },
  { src: "./images/ticket.png", alt: "Acceso exclusivo", label: "Entrada exclusiva" },
  { src: "./images/leaf.png", alt: "Educación consciente", label: "Deja un legado" },
];

export default function Beneficios() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="beneficios" className="beneficios-section">
      <div className="beneficios-container">
        <motion.h2
          className="beneficios-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          BENEFICIOS PARA TI
        </motion.h2>

        <motion.h5
          className="beneficios-subtitle"
          initial={{ opacity: 0, y: -15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          todo lo que vas a obtener
        </motion.h5>

        <div className="beneficios-subcontainer" ref={ref}>
          {beneficioData.map((beneficio, index) => (
            <motion.div
              key={index}
              className="beneficio-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            >
              <div className="circle">
                <img className="imageBeneficio" src={beneficio.src} alt={beneficio.alt} />
              </div>
              <motion.p
                className="beneficio-label"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
              >
                {beneficio.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
