import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../css/IniciarSesion.css'

function Login() {
  return (
   <div className="ContenedorInicioSesion">
    <Col className="ColIzquierdaInicio"></Col>
    <Col className="ColDerechadaInicio">
      <div className="DatosInicioSesion">
          <h1>BIENVENIDO</h1>
          <hr />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </div>
    </Col>
   </div>
    // <div className="login-container">
    //   <div className="login-form">
    //     <h2>Iniciar sesión</h2>
    //     <form>
    //       <div className="mb-3">
    //         <label htmlFor="email" className="form-label">
    //           Correo electrónico
    //         </label>
    //         <input type="email" className="form-control" id="email" />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="password" className="form-label">
    //           Contraseña
    //         </label>
    //         <input type="password" className="form-control" id="password" />
    //       </div>
    //       <button type="submit" className="btn btn-primary">
    //         Iniciar sesión
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Login;
