import React from 'react';
import './Cards.css';

const CardComponent = ({ image, nombre, descripcion }) => {
  return (
    <div className="cardStyle">
      <img src={image} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Descripcion: {descripcion}</p>
    </div>
  );
};

export default CardComponent;