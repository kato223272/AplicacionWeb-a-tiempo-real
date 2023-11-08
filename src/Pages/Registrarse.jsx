import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/IniciarSesion.css'

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar sesión</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
