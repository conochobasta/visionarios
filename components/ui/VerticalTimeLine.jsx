// components/VerticalTimelineComponent.jsx
"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar } from "react-icons/fa";

const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - presente"
        contentStyle={{ background: "#2196f3", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #2196f3" }}
        iconStyle={{ background: "#2196f3", color: "#fff" }}
        icon={<FaStar />}
        animate={true}
        intersectionObserverProps={{
        triggerOnce: false,
        threshold: 0.1, // más sensible, ajustable
      }}
      >
        <h3 className="vertical-timeline-element-title">Inicio del Proyecto</h3>
        <h4 className="vertical-timeline-element-subtitle">Fase de Investigación</h4>
        <p>Estudio de mercado, validación con familias y expertos educativos.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="26/06/2025"
        iconStyle={{ background: "#4caf50", color: "#fff" }}
        icon={<FaStar />}
        animate={true}
        intersectionObserverProps={{
        triggerOnce: false,
        threshold: 0.1, // más sensible, ajustable
      }}
      >
        <h3 className="vertical-timeline-element-title">Desarrollo del Producto</h3>
        <p>Producción de contenidos, diseño gráfico e interfaz educativa.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024"
        iconStyle={{ background: "#4caf50", color: "#fff" }}
        icon={<FaStar />}
        animate={true}
        intersectionObserverProps={{
        triggerOnce: false,
        threshold: 0.1, // más sensible, ajustable
      }}
      >
        <h3 className="vertical-timeline-element-title">Desarrollo del Producto</h3>
        <p>Producción de contenidos, diseño gráfico e interfaz educativa.</p>
      </VerticalTimelineElement>

<VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024"
        iconStyle={{ background: "#4caf50", color: "#fff" }}
        icon={<FaStar />}
        animate={true}
        intersectionObserverProps={{
        triggerOnce: false,
        threshold: 0.1, // más sensible, ajustable
      }}
      >
        <h3 className="vertical-timeline-element-title">Desarrollo del Producto</h3>
        <p>Producción de contenidos, diseño gráfico e interfaz educativa.</p>
      </VerticalTimelineElement>


      <VerticalTimelineElement
        iconStyle={{ background: "#f44336", color: "#fff" }}
        date="FINALIZADO"
        icon={<FaStar />}
        animate={true}
        intersectionObserverProps={{
        triggerOnce: false,
        threshold: 0.1, // más sensible, ajustable
      }}
      />
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
