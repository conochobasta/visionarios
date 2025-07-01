import React from "react";

export default function Beneficios() {
  return (
    <section id="beneficios" className="beneficios-section">
      <div className="beneficios-container">
        <h2 className="beneficios-title">BENEFICIOS PARA TI</h2>
        <h5 className="beneficios-subtitle">todo lo que vas a obtener</h5>
        <div className="beneficios-subcontainer">
          <div class="circle"><img className="imageBeneficio" src="./images/discount.png" /></div>
          <div class="circle"><img className="imageBeneficio" src="./images/clock.png" /></div>
          <div class="circle"><img className="imageBeneficio" src="./images/speechBallon.png" /></div>
          <div class="circle"><img className="imageBeneficio" src="./images/ticket.png" /></div>
          <div class="circle"><img className="imageBeneficio" src="./images/leaf.png" /></div>
        </div>
       
      </div>
    </section>
  );
}
