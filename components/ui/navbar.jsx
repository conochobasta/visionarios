import React, { useState, useEffect } from "react";


export default function Navbar({ setIsRegisterOpen, setIsLoginOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú lateral si la pantalla es mayor a 1116px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1116 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <img src="./images/logo.png" alt="Logo" className="logo" />

          <div className="desktop-links">
            <a href="#BeneficiosExclusivos">BENEFICIOS PARA TI</a>
            <a href="#QuienesSomos">QUIENES SOMOS</a>
            <a href="#phases">LAS FASES</a>
            <a href="#testimonials">TESTIMONIOS</a>
            <a href="#faqs">FAQS</a>
            <a
              href="#register"
              onClick={() => setIsRegisterOpen(true)}
              className="register-link"
            >
              Registro / Pago
            </a>
            <a href="#login" onClick={() => setIsLoginOpen(true)}>
              Iniciar sesión
            </a>
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <a href="#BeneficiosExclusivos" onClick={() => setMenuOpen(false)}>BENEFICIOS PARA TI</a>
        <a href="#QuienesSomos" onClick={() => setMenuOpen(false)}>QUIENES SOMOS</a>
        <a href="#phases" onClick={() => setMenuOpen(false)}>LAS FASES</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>TESTIMONIOS</a>
        <a href="#faqs" onClick={() => setMenuOpen(false)}>FAQS</a>
        <a
          href="#register"
          onClick={() => {
            setIsRegisterOpen(true);
            setMenuOpen(false);
          }}
        >
          Registro / Pago
        </a>
        <a
          href="#login"
          onClick={() => {
            setIsLoginOpen(true);
            setMenuOpen(false);
          }}
        >
          Iniciar sesión
        </a>
      </div>

      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
