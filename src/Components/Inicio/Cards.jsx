import React from 'react';
import './Cards.css';

const CardComponent = ({ image, title, text }) => {
  const cardStyle = {
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="ContenedorDeCards" style={cardStyle}>
      <div className="DatosDeLasCards">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardComponent;
