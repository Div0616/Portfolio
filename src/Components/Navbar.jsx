import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link highlight while scrolling (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setMenuOpen(false);

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Lock background scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-container">
          {/* Brand */}
          <div className="navbar-logo" onClick={() => scrollToSection("home")}>
            <span className="logo-dot"></span>
            <span className="logo-text">Divyanshu</span>
          </div>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  className={`nav-link ${active === sec.id ? "active" : ""}`}
                  onClick={() => scrollToSection(sec.id)}
                >
                  {sec.label}
                  <span className="nav-underline"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {sections.map((sec) => (
            <button
              key={sec.id}
              className={`mobile-link ${active === sec.id ? "active" : ""}`}
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
