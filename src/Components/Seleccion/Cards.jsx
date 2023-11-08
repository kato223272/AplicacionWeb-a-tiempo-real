import React from 'react';
import './Cards.css';

const CardComponent = ({ image, title, text }) => {
  const cardStyle = {
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="CardsSeleccion" style={cardStyle}>
      <div className="DatosDeLasCardsSeleccion">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardComponent;
