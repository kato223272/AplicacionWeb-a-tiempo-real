import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from '../img/CosechaCarrusel.jpeg';
import Imagen2 from '../img/VacasCarrousel.png';
import Imagen3 from '../img/SemillasCarrusel.webp';

import './Carrusel.css';

function CarouselComponent() {
  return (
    <Carousel className='carousel'>
      
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 imagen-carousel"
            src={Imagen1}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 imagen-carousel"
            src={Imagen2}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-container">
          <img
            className="d-block w-100 imagen-carousel"
            src={Imagen3}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
