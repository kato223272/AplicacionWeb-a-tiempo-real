// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./footer.css";

function Footer() {
  return (
    <footer className="footercontenedor">
      <div className="container">
        <div className="footer-content">
          <div className="social-icons">
            <h3>Síguenos</h3>
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook className="icon" />
            </motion.a>
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter className="icon" />
            </motion.a>
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram className="icon" />
            </motion.a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} vitual-dev Todos los derechos reservados.</p>
          <p>Política de Privacidad | Términos y Condiciones</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
