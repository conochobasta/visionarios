import React from 'react';
import CountDownTimer from '@/components/ui/CountdownTimer.jsx';

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <h3 className="bottom-bar-title">OFERTA exclusiva por tiempo limitado</h3>
        <p className="bottom-bar-subtitle">Acceso anticipado al mejor precio</p>

        <p className="bottom-bar-text">
          AHORA
        </p>
        <div className="price-container">
            <img src="images/new_price.png"></img>
            <img src="images/old_price.png"></img>
        </div>
        <div className="time-container">
            <p>AUMENTO DE PRECIO EN </p>
            <div className="countdown-bottomBar">
                <CountDownTimer targetDate="2026-07-01T23:59:59" className="compact" />
            </div>
        </div>


      </div>
      <button
        className="bottom-bar-button"
        onClick={() => alert("Redirigir a la preventa")}
      >
        Conviértete en FUNDADOR
      </button>
    </div>
  );
}