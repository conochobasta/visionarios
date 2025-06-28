// components/Registro.jsx
import { Button } from "@/components/ui/button";

export default function Registro() {
  return (
    <section id="register" className="form-section">
      <h2>Regístrate y Accede a la Demo</h2>
      <form className="form">
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <Button className="btn-primary  btn-form">Pagar y Acceder</Button>
      </form>
    </section>
  );
}
