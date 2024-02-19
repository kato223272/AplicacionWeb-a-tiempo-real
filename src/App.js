import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Chat from './Components/ChatRoom.jsx';
import ChatRoom from './Components/ChatRoom.jsx';

import Footer from './Components/footer.jsx';
// import Navbar from './Components/Navbar.jsx';
import Inicio from './Inicio.jsx';
// import Editar from './Pages/EditarPerfil.jsx';
import Home from './Pages/Home.jsx';
// import Recuperar from './Pages/RecuperarContrasenia.jsx';
import Registrarse from './Pages/Registrarse.jsx';
import Seleccion from './Pages/Seleccion.jsx';
import Venta from './Components/Venta.jsx'


function App() {
  // const currentPath = window.location.pathname.toLowerCase();
  // const navbarDisplay = (currentPath !== '/iniciosesion' && currentPath !== '/venta' && currentPath !== '/home' && currentPath !== '/crear' && currentPath !== '/recuperarcontrasenia' && currentPath !== '/registrarse') ? "block" : "none";

  return (
    <Router>
      {/* <div style={{ display: navbarDisplay }}>
        <Navbar />
      </div> */}
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/room/:roomId" element={<ChatRoom />} />
        <Route path="/Chat" element={<Chat />} />

        <Route path="/venta" element={<Venta/>} />

        {/* <Route path="/Crear" element={<Crear />} /> */}
        <Route exact path="/Home" Component={Home} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/seleccion" element={<Seleccion />} />
        {/* <Route path="/recuperarcontrasenia" element={<Recuperar />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;