import React from 'react';
// import Carousel from './Components/Carousel.jsx';
import CardComponent from './Components/Inicio/Cards.jsx';
import './css/Inicio.css'

const CarouselView = () => {
  return (
    <div className="containerInicio">
      <div className="row mt-4">
        <div className="col-md-4">
          <CardComponent
            image="img"
            title="Card 1"
            text="Contenido de la Tarjeta 1"
          />
        </div>
        <div className="col-md-4">
          <CardComponent
            image="img"
            title="Card 2"
            text="Contenido de la Tarjeta 2"
          />
        </div>
        <div className="col-md-4">
          <CardComponent
            image="img"
            title="Card 3"
            text="Contenido de la Tarjeta 3"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselView;
