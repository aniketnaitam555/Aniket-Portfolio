import { useState, useEffect } from "react";
import "/src/Pages/Navbar.css";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/service", label: "Services" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">A.</span>
          <span className="logo-text">
            Aniket
            <em>Developer</em>
          </span>
        </NavLink>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/contact" className="hire-btn">
          Hire Me
        </NavLink>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="hire-btn mobile">
              Hire Me
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
