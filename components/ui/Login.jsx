// components/Login.jsx
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <section id="login" className="form-section">
      <h2>Iniciar Sesión</h2>
      <form className="form">
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <Button className="btn-secondary btn-form btn-dark">Entrar</Button>
      </form>
    </section>
  );
}
