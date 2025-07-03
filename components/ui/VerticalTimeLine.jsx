import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const VerticalTimelineComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

/* INDICE PARA CAMBIAR TIMELINE */
  const activeIndex = 0; 

  const handleExpand = (index) => {
    setExpandedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleCollapse = () => {
    setExpandedIndex(null);
    document.body.style.overflow = "auto";
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
                /*date={event.date}
                dateClassName={`custom-date ${index % 2 === 0 ? "date-left" : "date-right"}`}*/
                contentStyle={{
                  cursor: "pointer",
                  color: "white",
                }}
               contentArrowStyle={{
                  backgroundImage: isActive
                    ? `url('/images/arrow.png')`
                    : 'none',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  border: 'none',
                  width: '30px',
                  height: '30px',
                  transform: index % 2 === 0 ? 'rotate(0deg)' : 'rotate(180deg)', // rota si es lado derecho o izquierdo
                  marginRight: index % 2 !== 0 && isActive ? '25px' : '0',  // flecha a la izquierda, separada hacia la izquierda
                  marginLeft: index % 2 === 0 && isActive ? '25px' : '0',
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
                    className={`element-content ${isExpanded ? "expanded" : "hover-zoom"}`}
                    onClick={() => handleExpand(index)}
                  >
                    <div
                      className={`content-wrapper ${index % 2 === 0 ? "left-side" : "right-side"}`}
                    >
                      {/* Encabezado con imagen, título y subtítulo */}
                      <div className="header-content">
                        <img src={event.image} alt="icon" className="side-image" />
                        <div className="titles">
                          <h3 className="vertical-timeline-element-title">{event.title}</h3>
                          {event.subtitle && (
                            <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>
                          )}
                        </div>
                      </div>

                      {/* Texto separado */}
                      <div className="text-paragraph">
                        <p>{event.description}</p>
                      </div>
                    </div>
                  </div>
                )}

              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>

        {expandedIndex !== null && (
          <div className="fullscreen-panel">
            <div className="panel-content">
              <button className="close-button" onClick={handleCollapse}>
                ✕
              </button>
              <h2>{events[expandedIndex].title}</h2>
              {events[expandedIndex].subtitle && <h4>{events[expandedIndex].subtitle}</h4>}
              <p>{events[expandedIndex].description}</p>
              <p className="panel-date">{events[expandedIndex].date}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default VerticalTimelineComponent;
