import React from "react";


export default function navbar() {
 return (
      <nav className="navbar">
        <div className="navbar-inner">
          <img src="./images/logo.png" alt="Logo" className="logo" />
          <div className="nav-links">
            <a href="#about">Quiénes somos</a>
            <a href="#phases">Fases</a>
            <a href="#faqs">FAQ</a>
            <a href="#testimonials">Testimonios</a>
            <a href="#join">Únete</a>
            <a href="#register" onClick={() => setIsRegisterOpen(true)} className="register-link">Registro / Pago</a>
            <a href="#login" onClick={() => setIsLoginOpen(true)}>Iniciar sesión</a>
          </div>
        </div>
      </nav>
 );
}