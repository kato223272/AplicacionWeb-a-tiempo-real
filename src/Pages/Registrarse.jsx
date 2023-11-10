import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImagenPerfil from '../img/VariasSemillas,Registro.jpeg'
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Registrarse.css'
import { BsArrow90DegLeft } from "react-icons/bs";

function Registrarse() {
  return (
     
    <div className="ContenedorRegistrarse">
       <a href="/iniciosesion">
      <div className="flechaRegresoRegistrar"><BsArrow90DegLeft /></div>
      </a>
     <Col>
    
     <div className="CuadrodeRegistrar">
     <div className="IconoRegistrarse">
      <img src={ImagenPerfil}alt="" />
     </div>
     <div className="ContenidoInformacionRegistrar">
     <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextemail">
        <Form.Label column sm="2" className="letraIniciarSesion">
            Correo:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="correo electrónico" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="letraIniciarSesion">
          Contraseña:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="contraseña" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="letraIniciarSesion">
          Teléfono:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="tel" placeholder="teléfono" />
        </Col>
      </Form.Group>
    </Form>
     </div>
    
    <a href=""> <button className="botonIniciarRegistrar">Registrarse</button></a>
     </div>
     </Col>
    </div>
  );
}

export default Registrarse;
