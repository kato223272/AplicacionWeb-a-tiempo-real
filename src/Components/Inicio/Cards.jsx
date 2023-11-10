import React from 'react';
import './Cards.css';

const CardComponent = ({ image, title }) => {
  const CardSeccionEstilo = {
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='ContenedorDeCardsSeleccion'>
    <div className="CardsSeleccion" style={CardSeccionEstilo}>
      <div className="DatosDeLasCardsSeleccion">
        <h4>{title}</h4>

      </div>
    </div>
    </div>
  );
};

export default CardComponent;
