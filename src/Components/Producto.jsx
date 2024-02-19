import React, { useState, useEffect } from "react";

import AgregarRepartidor from "../Components/ProductosNuevos";
import '../css/Producto.css';

const Inicio = () => {
    const [obtenerRepartidores, setObtenerRepartidores] = useState([]);
  
    const getRepartidores = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/producto/conseguirProducto"
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json();
        setObtenerRepartidores(data.repartidores);
      } catch (error) {
        console.error("Error al obtener repartidores", error);
      }
    };
  
    const longPolling = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/producto/ObtenerProductoNuevo"
        );
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json();
        setObtenerRepartidores(data.repartidores);
       
      } catch (error) {
        console.error("Error al recibir notificación", error);
      }finally{
        longPolling();
      }
    };
  
    useEffect(() => {
      getRepartidores();
      longPolling();
    }, []);
  
  
  
    return (
      <>
      
        <div >
          {/* <h1>Repartidores Disponibles y Nuevos</h1> */}
          <div className="Productosje">
          {/* <ul>
            {obtenerRepartidores.length > 0 ? (
              obtenerRepartidores.map((repartidor, i) => (
                <div key={i} >
                  <li>{repartidor.nombre}</li>
                </div>
              ))
            ) : (
              <p>pendiente</p>
            )}
          </ul> */}
          </div>
          <AgregarRepartidor />
        </div>
        
      </>
    );
  };
  
  export default Inicio;