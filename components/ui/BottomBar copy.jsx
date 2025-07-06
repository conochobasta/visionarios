import React, { useEffect, useRef, useState, forwardRef } from "react";
import CountDownTimer from "@/components/ui/CountdownTimer.jsx";

const BottomBar = forwardRef((props, ref) => {
  const barRef = ref || useRef(null);
  const [isFixed, setIsFixed] = useState(true);
  const [barInitialTop, setBarInitialTop] = useState(null);
  const [footerTop, setFooterTop] = useState(null);

  useEffect(() => {
    const updatePositions = () => {
      const footer = document.querySelector("footer");
      const bar = barRef.current;
      if (!footer || !bar) return;

      const barTopOnPage = bar.getBoundingClientRect().top + window.scrollY;
      const footerTopOnPage = footer.getBoundingClientRect().top + window.scrollY;

      setBarInitialTop(barTopOnPage);
      setFooterTop(footerTopOnPage);
    };

    window.addEventListener("resize", updatePositions);
    updatePositions();

    return () => {
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const bar = barRef.current;
      const scrollBottom = window.scrollY + window.innerHeight;

      if (!bar || footerTop === null || barInitialTop === null) return;

      const isTouchingFooter = scrollBottom >= footerTop;

      if (isTouchingFooter) {
        // Se ha alcanzado el footer → ponlo relative
        setIsFixed(false);
      } else if (window.scrollY + window.innerHeight < barInitialTop + bar.offsetHeight) {
        // Subes y bar está por debajo de su posición original → vuelve a fixed
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [footerTop, barInitialTop]);

  return (
    <div
      ref={barRef}
      className="bottom-bar"
      style={{
        position: isFixed ? "fixed" : "relative",
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.4s ease",
        boxShadow: isFixed ? "0 -2px 10px rgba(0,0,0,0.1)" : "none",
        backgroundColor: "#B8A269",
      }}
    >
      <div
        className="bottom-bar-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          gap: "8rem",
        }}
      >
        <div className="bottom-bar-texts">
          <h3 className="bottom-bar-title">OFERTA exclusiva por tiempo limitado</h3>
          <p className="bottom-bar-subtitle">Acceso anticipado al mejor precio</p>
        </div>

        <div className="time-container">
          <p style={{ marginBottom: "0.3rem" }}>AUMENTO DE PRECIO EN</p>
          <div className="countdown-bottomBar">
            <CountDownTimer targetDate="2026-07-01T23:59:59" className="compact" />
          </div>
        </div>

        <div className="price-container" style={{ display: "flex", flexDirection: "column" }}>
          <p className="bottom-bar-text" style={{ marginBottom: "-0.3rem" }}>AHORA</p>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <img src="images/new_price.png" alt="Precio nuevo" />
            <img src="images/old_price.png" alt="Precio antiguo" />
          </div>
        </div>

        <button
          className="bottom-bar-button"
          onClick={() => alert("Redirigir a la preventa")}
        >
          Conviértete en FUNDADOR
        </button>
      </div>
    </div>
  );
});

export default BottomBar;
