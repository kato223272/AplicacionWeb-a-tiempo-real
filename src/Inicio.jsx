import React from 'react';
import Carrusel from './Components/Carrusel.jsx'
import CardComponent from './Components/Inicio/Cards.jsx';
import './css/Inicio.css'
import Vacas from './img/VacaDeInicioCard.jpeg'
import Semillas from './img/SemillasVariasInicio.jpeg'
import Cosecha from './img/SeñorConVegetalesCarrusel.jpg'

const Inicio = () => {
  return (

    <div className="containerInicio">
    <Carrusel/>
    
      <div className="row mt-4">
        <div className="col-md-4">
          <a href="/seleccion" className='componenteCardsEstilo'>
          <CardComponent
            image={Vacas}
            title="Ganadería"
          />
          </a>
         
        </div>
        <div className="col-md-4">

          <a href="/seleccion" className='componenteCardsEstilo'>
          <CardComponent
            image={Semillas}
            title="Semillas"
           
          />
          </a>
        </div>
      
        <div className="col-md-4">
        <a href="/seleccion" className='componenteCardsEstilo'> <CardComponent
            image={Cosecha}
            title="Cosecha"
      
          /></a>
         
        </div>
      </div>
    </div>
  );
};

export default Inicio;
