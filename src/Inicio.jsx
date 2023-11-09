import React from 'react';
import Carrusel from './Components/Carrusel.jsx'
import CardComponent from './Components/Inicio/Cards.jsx';
import './css/Inicio.css'
import Vacas from './img/VacaDeInicioCard.jpeg'
import Semillas from './img/SemillasVariasInicio.jpeg'
import Cosecha from './img/SeñorConVegetalesCarrusel.jpg'

const CarouselView = () => {
  return (
    <div className="containerInicio">
    <Carrusel/>
      <div className="row mt-4">
        <div className="col-md-4">
          <CardComponent
            image={Vacas}
            title="Ganadería"
    
          />
        </div>
        <div className="col-md-4">
          <CardComponent
            image={Semillas}
            title="Semillas"
           
          />
        </div>
        <div className="col-md-4">
          <CardComponent
            image={Cosecha}
            title="Cosecha"
      
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselView;
