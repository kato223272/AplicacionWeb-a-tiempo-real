import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

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

  const navbarClass = isSticky ? 'navbar sticky' : 'navbar';

  return (
    <div className={navbarClass}>
      <img src="logo.png" alt="Logo" className="logoNavbar" />
      <a href="/iniciosesion"><button className="login-button">Iniciar Sesión</button></a>
    </div>
  );
}

export default Navbar;
