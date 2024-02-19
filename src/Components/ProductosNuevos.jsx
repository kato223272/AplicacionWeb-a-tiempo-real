import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AgregarRepartidor = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [repartidores, setRepartidores] = useState([]);

  useEffect(() => {
    const obtenerRepartidoresLongPolling = async () => {
      try {
        // while (true) {
         
          const response = await axios.get('http://localhost:3000/producto/conseguirProducto');
          console.log(response);
          if (response.status === 200) {
            setRepartidores(response.data.repartidores);
          }
        //}
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerRepartidoresLongPolling(); 
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/producto/crearProducto', {
        nombre: nombre,
        direccion: direccion
      });

      if (response) {
        setSuccessMessage('´Producto agregado exitosamente');
        setNombre('');
        setDireccion('');
      } else {
        setErrorMessage('Error al agregar Producto');
      }
    } catch (error) {
      setErrorMessage('Error de red al intentar agregar repartidor');
      console.error('Error al agregar repartidor', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del Producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripcion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <button type="submit">Agregar Producto</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <h2>Lista de Productos</h2>
      <ul>
        {repartidores.map((repartidor) => (
          <li key={repartidor.id}>{repartidor.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgregarRepartidor;
