import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { BsArrow90DegLeft } from "react-icons/bs";
import "../css/IniciarSesion.css";

function Login() {
  return (
    <div className="ContenedorInicioSesion">
      <a href="/">
        {" "}
        <div className="flechaRegresoRegistrar">
          <BsArrow90DegLeft />
        </div>
      </a>

      <Col className="ColIzquierdaInicio"></Col>
      <Col className="ColDerechadaInicio">
        <div className="DatosInicioSesion">
          <h1>BIENVENIDO</h1>
          <hr />
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextemail"
            >
              <Form.Label column sm="2" className="letraIniciarSesion">
                Correo
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="email" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2" className="letraIniciarSesion">
                Contraseña
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>

          <div className="contenedorDeLetrasInicioSesion">
            <div classname="RecuperarContraInicioSesion">
              <a href="">
                <h5>Recuperar contraseña</h5>
              </a>
            </div>

            <div>
              <a href="">
                {" "}
                <button className="botonIniciarSesion">Iniciar sesión</button>
              </a>
            </div>

            <div className="RegistrateInicioSesion" style={{ display: "flex" }}>
              <div className="preguntaInicioSesion">
                <h5>¿No tienes una cuenta?</h5>
              </div>
              <div>
                <a href="/registrarse">
                  <h5>Registrate</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}

export default Login;
