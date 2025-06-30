import React from "react";

export default function Beneficios() {
  return (
    <section id="beneficios" className="beneficios-section">
      <div className="beneficios-container">
        <h2 className="beneficios-title">Beneficios exclusivos de la preventa</h2>
        <ul className="beneficios-list">
          <li>
            <strong>50% de descuento vitalicio</strong> — solo durante esta preventa.
            Nunca volverás a pagar el precio completo.
          </li>
          <li>
            <strong>Acceso prioritario</strong> a la demo de la app antes del lanzamiento oficial.
          </li>
          <li>
            <strong>Participación activa</strong> en el desarrollo. Tu opinión moldeará la plataforma.
          </li>
          <li>
            <strong>Entrada exclusiva</strong> a la comunidad privada de familias pioneras.
          </li>
          <li>
            <strong>Deja un legado</strong> para tu hijo: una educación diseñada para la libertad y la vida real.
          </li>
        </ul>
        <p className="beneficios-aviso">
          ⚠️ Las plazas son limitadas y no volverán a ofrecerse con estas condiciones.
        </p>
      </div>
    </section>
  );
}
