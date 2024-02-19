
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./footer.css";

function Footer() {
  return (
    <footer className="footercontenedor">
      <div className="container">
        <div className="footer-content">
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} virtual-dev Todos los derechos reservados.</p>
          <p>Política de Privacidad | Términos y Condiciones</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
