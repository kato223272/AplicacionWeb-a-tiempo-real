import React, { useEffect, useState } from 'react';
import '../../css/Datos.css';
import { BsArrow90DegLeft } from "react-icons/bs";
import CardComponent from './Cards'; 

function Nav() {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const cardData = await nombre.collection('tucoleccion').get();
  //       const cardsArray = cardData.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setCards(cardsArray);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

  return (
    <div className="componentesNav">
       <a href="/">
        {" "}
        <div className="flechaRegresoRegistrarDatos" style={{color:"black"}}>
          <BsArrow90DegLeft />
        </div>
      </a>
      <div className="contenidoComponentesNav" id="contenidoComponentesNav">
        <ul style={{ display: 'flex', listStyle: "none" }}>
          <li style={{ textDecoration: "none" }}>
            <a className="menu" href="#Bovinos">
              Bovinos
            </a>
          </li>
          <li>
            <a className="menu" href="#Porcinos">
              Porcinos
            </a>
          </li>
          <li>
            <a className="menu" href="#Gallinaceos">
              Gallinaceos
            </a>
          </li>
          <li>
            <a className="menu" href="#Ovinos">
              Ovinos
            </a>
          </li>
        </ul>
      </div>

      <div className="ContenedorDatosNav" style={{display:"block"}}>
        <div>
        <div className="NombreDatos" style={{ display: "flex", alignItems: "center" }} id='Bovinos'>
          <h4>Bovinos</h4>
          <hr style={{ width: '87.5%', margin: '0' }} />
          <a href=""> <h4>Ver más</h4></a>
        
        </div>
        {/* <div className="contenedorGeneradorCards" style={{ display: "flex" }}>
          {cards.map((card) => (
            <CardComponent
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div> */}
        </div>
       

        <div>
        <div className="NombreDatos" style={{ display: "flex", alignItems: "center" }} id='Porcinos'>
          <h4>Porcinos</h4>
          <hr style={{ width: '87%', margin: '0' }} />
          <a href=""> <h4>Ver más</h4></a>
        </div>
        {/* <div className="contenedorGeneradorCards" style={{ display: "flex" }}>
          {cards.map((card) => (
            <CardComponent
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div> */}
        </div>


        <div>
        <div className="NombreDatos" style={{  display: "flex", alignItems: "center"}} id='Gallineceos'>
          <h4>Gallineceos</h4>
          <hr style={{ width: '85%', margin: '0' }} />
          <a href=""> <h4>Ver más</h4></a>
        </div>
        {/* <div className="contenedorGeneradorCards" style={{ display: "flex" }}>
          {cards.map((card) => (
            <CardComponent
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div> */}
        </div>     


        <div>
        <div className="NombreDatos" style={{  display: "flex", alignItems: "center" }} id='Ovinos'>
          <h4>Ovinos</h4>
          <hr style={{ width: '88.5%', margin: '0' }} />
          <a href=""> <h4>Ver más</h4></a>
        </div>
        {/* <div className="contenedorGeneradorCards" style={{ display: "flex" }}>
          {cards.map((card) => (
            <CardComponent
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div> */}
        </div>   

      </div>
    </div>
  );
}

export default Nav;


