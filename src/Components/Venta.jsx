import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/venta.css";

const Paquetes = () => {
  const [estadoPaquete, setEstadoPaquete] = useState("En proceso");
  const [actualizacion, setActualizacion] = useState(false);
  const [historialEstados, setHistorialEstados] = useState([]);
  const [vendidoClicked, setVendidoClicked] = useState(false); // Nuevo estado para verificar si se ha hecho clic en "Vender"

  const obtenerEstadoPaquete = async () => {
    try {
      const response = await axios.get("http://localhost:3000/estado-venta");
      if (response.status === 200) {
        const data = response.data;
        setEstadoPaquete(data.estado);
        setHistorialEstados((prevHistorial) => [...prevHistorial, data.estado]);
        setActualizacion(true);
      } else {
        console.error(
          "Error al obtener el estado del venta:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error al obtener el estado del venta:", error);
    }
  };

  const cambiarEstadoEntregado = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/cambiar-estado-venta/Vendido"
      );
      if (response.status === 200) {
        // Eliminar este setActualizacion para evitar cambiar el estado automáticamente
        setVendidoClicked(true); // Actualizar el estado para indicar que se ha hecho clic en "Vender"
      } else {
        console.error(
          "Error al cambiar el estado de la venta:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error al cambiar el estado de la venta:", error);
    }
  };

  useEffect(() => {
    console.log("Ejecutando efecto de useEffect");
    const interval = setInterval(() => {
      obtenerEstadoPaquete();
      setActualizacion(false);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="paquetes-container">
      <h1 className="title">Venta</h1>
      <div className="estado-container">
        <p className="estado-label">Estado de venta:</p>
        <p className="estado-value">{estadoPaquete}</p>
      </div>
      {actualizacion && (
        <p className="actualizacion-message">
          El estado de la venta se ha actualizado.
        </p>
      )}

      {!vendidoClicked && ( 
        <button className="vender-button" onClick={cambiarEstadoEntregado}>
          Vender
        </button>
      )}
      
      <h2 className="historial-title">Estados de venta:</h2>
      <div className="historial-container">
        <ul className="historial-list">
          {historialEstados.map((estado, index) => (
            <li key={index} className="historial-item">
              {estado}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Paquetes;
