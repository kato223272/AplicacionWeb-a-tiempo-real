import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
          <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextemail">
        <Form.Label column sm="2" className="letraIniciarSesion">
            Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="letraIniciarSesion">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
    <a href=""> <button className="botonIniciarSesion">Iniciar sesión</button></a>
      </div>
    </Col>
 
   </div>
  );
}

export default Login;
