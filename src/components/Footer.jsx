import "/src/Pages/Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-backdrop" />

      <div className="footer-container container">
        <div className="footer-about">
          <NavLink to="/" className="logo">
            <span className="logo-mark">A.</span>
            <span>Aniket</span>
          </NavLink>

          <p className="role">// Developer</p>

          <p className="bio">
            Building meaningful products and helping developers grow
            through mentorship.
          </p>

          <div className="info">
            <p>Maharashtra, India</p>
            <p>IST &bull; UTC +5:30</p>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
        </div>

        <div className="footer-links">
          <h4>Work</h4>
          <NavLink to="/service">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/contact">Hire Me</NavLink>
          <NavLink to="/contact">Book a Call</NavLink>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>

          <a href="https://github.com/aniketinfinity666" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub <span>&#8599;</span>
          </a>

          <a href="https://www.linkedin.com/in/aniketnaitam" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn <span>&#8599;</span>
          </a>        
        </div>
      </div>

      <div className="container">
        <div className="tech-stack">
          <h4>Built with</h4>
          <div className="tech-list">
            <span>React</span>
            <span>React Router</span>
            <span>Vite</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; 2026 Aniket. Designed &amp; built with care.</p>
        <p>Made in India</p>
        <p>v2.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;
