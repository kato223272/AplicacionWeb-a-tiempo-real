import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo.png';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/obtenerUsuarioActual');
      setLoggedInUser(response.data.usuario.user);
    } catch (error) {
      console.error('Error al obtener información del usuario:', error.message);
    }
  };

  const navbarClass = isSticky ? 'navbar sticky' : 'navbar';

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/iniciarSesion', {
        user: username,
        password: password,
      });

      if (response.data.usuario.user) {
        setLoggedInUser(response.data.usuario.user);
        setIsLoginOpen(false);

        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: `¡Bienvenido, ${response.data.usuario.user}!`,
        });

        navigate('/');
      } else {
        console.error('Error al iniciar sesión: usuario no proporcionado en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);

      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Credenciales incorrectas o problemas de conexión',
      });
    }
  };

  const handleCerrarSesion = () => {
    setLoggedInUser(null);

    Swal.fire({
      icon: 'success',
      title: 'Cierre de sesión exitoso',
      text: 'Has cerrado sesión correctamente',
    });

    navigate('/');
  };

  return (
    <div className={navbarClass}>
      <img src={logo} alt="Logo" className="logoNavbar" />
      
      <div className="login-container">
        {loggedInUser ? (
          <div className="user-container">
            <div className="user-greeting">
              ¡Hola, {loggedInUser}!
            </div>
            <a href='/registrarse'>
              <button className="accionesDise" > 
                Acciones
              </button>
            </a>
            <button className="logout-button" onClick={handleCerrarSesion}>
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <button className="login-button" onClick={toggleLogin}>
            Iniciar Sesión
          </button>
        )}
        {isLoginOpen && !loggedInUser && (
          <div className="login-dropdown">
            <form onSubmit={handleLogin}>
              <label htmlFor="username" className="input-label">
                Usuario:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="input-field"
              />

              <label htmlFor="password" className="input-label">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
              />

              <button type="submit" className="submit-button">
                Iniciar Sesión
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
