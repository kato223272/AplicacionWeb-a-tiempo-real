import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Grupo from './Home'
import Producto from '../Components/Producto';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Registrarse.css'
import Venta from '../Components/Venta'



function UseChat() {
  

  return (
    <div className="ContenedorRegistrarse">
      <Row>
        <Col>
          <div className="CuadrodeRegistrar">
          <Grupo></Grupo>

          </div>
        </Col>
        <Col>
          <div className="CuadrodeRegistrar">
            <Venta></Venta>
          </div>
        </Col>
        <Col>
          <div className="CuadrodeRegistrar">
            <Producto></Producto>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UseChat;
