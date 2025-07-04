import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    date: "2023 - presente",
    title: "Despegue",
    subtitle: "Diagnóstico inicial e IA adaptativa básica",
    description:
      "Aquí comienza el viaje. Nuestra IA analiza las fortalezas y ritmos de aprendizaje de tu hijo, generando una primera ruta personalizada. Un espacio seguro para explorar, sin presión, y con todo el poder de una tecnología diseñada para acompañar.",
    color: "#2196f3",
    image: "images/brujula.png",
  },
  {
    date: "26/06/2025",
    title: "Navegación",
    subtitle: "pensamiento crítico y feedback personalizado",
    description:
      "En esta etapa, tu hijo accede a módulos diseñados para cultivar el pensamiento crítico, con retroalimentación continua y personalizada. La IA no solo observa: interpreta, sugiere y potencia cada nuevo descubrimiento.",
    color: "#4caf50",
    image: "images/puzzle.png",
  },
  {
    date: "2024",
    title: "Expansión",
    subtitle: " IA emocional y sugerencias de entorno familiar",
    description:
      "La tecnología se vuelve aún más cercana. La IA empieza a entender no solo cómo aprende tu hijo, sino cómo se siente. Además, sugiere ajustes en casa que potencian su desarrollo desde un enfoque holístico.",
    color: "#4caf50",
    image: "images/brain.png",
  },
  {
    date: "2024",
    title: "Estrategia",
    subtitle: "Perfil parental e informes para padres",
    description:
      "Te damos herramientas inteligentes para acompañar sin invadir. Visualiza avances, identifica necesidades y descubre cómo guiar mejor su aprendizaje desde casa. Tú también formas parte del cambio.",
    color: "#4caf50",
    image: "images/house.png",
  },
  {
    date: "2024",
    title: "Futuro Alfa",
    subtitle: "Versión casi completa: IA multicomponente",
    description:
      "Lo que hoy es visión, mañana será realidad. En esta etapa, abrimos las puertas a una comunidad de familias pioneras que, junto con nosotros, definen cómo será la educación personalizada del futuro. IA, emoción y propósito, al servicio del desarrollo humano.",
    color: "#4caf50",
    image: "images/bullseye.png",
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const VerticalTimelineComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  /* INDICE PARA CAMBIAR TIMELINE */
  const activeIndex = 0;


  const handleExpand = (index) => {
    setExpandedIndex(index);
  };

  const handleCollapse = () => {
    setExpandedIndex(null);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="phases-text"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2>LAS FASES</h2>
        <h5>el paso a paso del progreso</h5>
      </motion.div>

      <section className="timeline-section">
        <div className="timeline-bg-blob yellow" />
        <div className="timeline-bg-blob orange" />
        <div className="timeline-bg-blob yellow2" />
        <div className="timeline-bg-blob purple2" />
        <div className="timeline-bg-blob purple" />

        <VerticalTimeline>
          {events.map((event, index) => {
            const isExpanded = expandedIndex === index;
            const isActive = index === activeIndex;

            return (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element custom-timeline-element ${
                  event.isEnd ? "end-marker" : ""
                } ${isActive ? "active" : ""}`}
                contentStyle={{
                cursor: isExpanded ? "default" : "pointer",
                color: "white",
                backgroundColor: "#293166",
                borderRadius: 12,
                opacity: isExpanded ? 0 : 1,
                pointerEvents: isExpanded ? "none" : "auto",
                transition: "opacity 0.3s ease",
                }}
                contentArrowStyle={{
                  backgroundImage: isActive
                    ? `url('/images/arrow.png')`
                    : "none",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  border: "none",
                  width: "30px",
                  height: "30px",
                  transform:
                    index % 2 === 0 ? "rotate(0deg)" : "rotate(180deg)",
                  marginRight: index % 2 !== 0 && isActive ? "25px" : "0",
                  marginLeft: index % 2 === 0 && isActive ? "25px" : "0",
                }}
                iconStyle={{
                  background: isActive ? "#B8A269" : "#293166",
                  color: "#fff",
                }}
                icon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    {index + 1}
                  </div>
                }
              >
                {!event.isEnd && (
                  <div
                    className={`element-content ${
                      isExpanded ? "expanded" : "hover-zoom"
                    }`}
                    onClick={() => handleExpand(index)}
                  >
                    <motion.div
                    layoutId={`card-${index}`}  // Esto debe coincidir con el del portal
                    className={`content-wrapper ${index % 2 === 0 ? "left-side" : "right-side"}`}
                    style={{ position: "relative" }}
                    >
                    <div
                      className={`content-wrapper ${
                        index % 2 === 0 ? "left-side" : "right-side"
                      }`}
                    >
                      {/* Aquí animamos título y subtítulo con motion */}
                      <div className="header-content" style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={event.image}
                          alt="icon"
                          className="side-image"
                        />
                        <div className="titles" style={{ marginLeft: 12 }}>
                          <motion.h3
                            className="vertical-timeline-element-title"
                            initial="hidden"
                            animate="visible"
                            variants={titleVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          >
                            {event.title}
                          </motion.h3>
                          {event.subtitle && (
                            <motion.h4
                              className="vertical-timeline-element-subtitle"
                              initial="hidden"
                              animate="visible"
                              variants={subtitleVariants}
                              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                            >
                              {event.subtitle}
                            </motion.h4>
                          )}
                        </div>
                      </div>

                      <div className="text-paragraph">
                        <p>{event.description}</p>
                      </div>
                    </div>
                    </motion.div>
                  </div>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>

        {mounted  && typeof window !== "undefined" &&
        ReactDOM.createPortal(
          <AnimatePresence>
            {expandedIndex !== null && (
              <motion.div
                className="overlay"
                onClick={handleCollapse}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                  padding: "2rem",
                  fontFamily: "Montserrat",
                }}
              >
                <motion.div
                  layoutId={`card-${expandedIndex}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    backgroundColor: "#293166",
                    borderRadius: 20,
                    padding: "5rem",
                    maxWidth: "800px",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    color: "white",
                    position: "relative",
                  }}
                >
                  <button
                    onClick={handleCollapse}
                    style={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      fontSize: 30,
                      background: "transparent",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                    aria-label="Cerrar"
                  >
                    ×
                  </button>
                 {/*} <img
                    src={events[expandedIndex].image}
                    alt={events[expandedIndex].title}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "contain",
                      marginBottom: "1rem",
                      borderRadius: 10,
                    }}
                  />*/}
                  <h2 style={{ marginTop: 0 }}>{events[expandedIndex].title}</h2>
                  {events[expandedIndex].subtitle && (
                    <h4 style={{color: "#99A3CC", fontWeight: "300", marginBottom: "1.5rem"}}>
                      {events[expandedIndex].subtitle}
                    </h4>
                  )}
                  <p >{events[expandedIndex].description}</p>
                  <p style={{marginTop: "1rem", color: "#99A3CC", fontWeight: "300" }}>
                    {events[expandedIndex].date}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.getElementById("portal-root")
        )}
      </section>
    </>
  );
};

export default VerticalTimelineComponent;
