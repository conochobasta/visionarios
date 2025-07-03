import React, { useEffect, useRef, useState, forwardRef } from "react";
import CountDownTimer from "@/components/ui/CountdownTimer.jsx";

const BottomBar = forwardRef((props, ref) => {
  const barRef = ref || useRef(null); // usa el ref externo o interno
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const bar = barRef.current;

      if (!footer || !bar) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const overlap = windowHeight - footerRect.top;

      if (overlap > 0) {
        setBottomOffset(overlap);
      } else {
        setBottomOffset(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [barRef]);

  return (
    <div
      ref={barRef}
      className="bottom-bar"
      style={{
        position: "fixed",
        bottom: `${bottomOffset}px`,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "bottom 0.3s ease",

        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="bottom-bar-content">
        <h3 className="bottom-bar-title">OFERTA exclusiva por tiempo limitado</h3>
        <p className="bottom-bar-subtitle">Acceso anticipado al mejor precio</p>

        <p className="bottom-bar-text">AHORA</p>
        <div className="price-container">
          <img src="images/new_price.png" alt="Precio nuevo" />
          <img src="images/old_price.png" alt="Precio antiguo" />
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
});

export default BottomBar;
