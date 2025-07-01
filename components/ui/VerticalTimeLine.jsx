import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar } from "react-icons/fa";


const events = [
  {
    date: "2023 - presente",
    title: "Inicio del Proyecto",
    subtitle: "Fase de Investigación",
    description: "Estudio de mercado, validación con familias y expertos educativos.",
    color: "#2196f3",
  },
  {
    date: "26/06/2025",
    title: "Desarrollo del Producto",
    subtitle: "",
    description: "Producción de contenidos, diseño gráfico e interfaz educativa.",
    color: "#4caf50",
  },
  {
    date: "2024",
    title: "Pruebas piloto",
    subtitle: "",
    description: "Implementación en centros educativos aliados y recopilación de feedback.",
    color: "#4caf50",
  },
  {
    date: "FINALIZADO",
    title: "",
    subtitle: "",
    description: "",
    color: "#f44336",
    isEnd: true,
  },
];

const VerticalTimelineComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index);
    document.body.style.overflow = "hidden"; // Evitar scroll de fondo
  };

  const handleCollapse = () => {
    setExpandedIndex(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <VerticalTimeline>
        {events.map((event, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element ${
                event.isEnd ? "end-marker" : ""
              }`}
              date={event.date}
              contentStyle={{
                background: event.color,
                color: "#fff",
                cursor: "pointer",
              }}
              contentArrowStyle={{ borderRight: `7px solid ${event.color}` }}
              iconStyle={{ background: event.color, color: "#fff" }}
              icon={<FaStar />}
            >
              {!event.isEnd && (
                <div
                  className={`element-content ${
                    isExpanded ? "expanded" : "hover-zoom"
                  }`}
                  onClick={() => handleExpand(index)}
                >
                  <h3 className="vertical-timeline-element-title">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {event.subtitle}
                    </h4>
                  )}
                  <p>{event.description}</p>
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
            {events[expandedIndex].subtitle && (
              <h4>{events[expandedIndex].subtitle}</h4>
            )}
            <p>{events[expandedIndex].description}</p>
            <p className="panel-date">{events[expandedIndex].date}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default VerticalTimelineComponent;
