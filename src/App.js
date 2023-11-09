import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Footer from './Components/footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Inicio from './Inicio.jsx';
// import Editar from './Pages/EditarPerfil.jsx';
import InicioSesion from './Pages/IniciarSesion.jsx';
import Recuperar from './Pages/RecuperarContrasenia.jsx';
import Registrarse from './Pages/Registrarse.jsx';
import Seleccion from './Pages/Seleccion.jsx';


function App() {
  const currentPath = window.location.pathname.toLowerCase();
  const navbarDisplay = (currentPath !== '/iniciosesion' && currentPath !== '/Crear' && currentPath !== '/recuperarcontrasenia' && currentPath !== '/registrarse') ? "block" : "none";

  return (
    <Router>
      <div style={{ display: navbarDisplay }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/Crear" element={<Crear />} /> */}
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/seleccion" element={<Seleccion />} />
        <Route path="/recuperarcontrasenia" element={<Recuperar />} />
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;