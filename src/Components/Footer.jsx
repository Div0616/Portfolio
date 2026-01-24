import React from "react";
import "./Footer.css";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <h3 className="footer-logo">Divyanshu</h3>
          <p className="footer-text">
            Building clean UI, modern React experiences, and smooth interactions.
          </p>
          <p className="footer-copy">© {year} Divyanshu. All rights reserved.</p>
        </div>

        {/* Middle */}
        <div className="footer-middle">
          <p className="footer-title">Quick Links</p>
          <div className="footer-links">
            {links.map((l) => (
              <button key={l.id} className="footer-link" onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="footer-right">
          <p className="footer-title">Connect</p>

          <div className="footer-social">
            <a
              href="https://github.com/Div0616"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshu-singh0616/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <Linkedin size={18} />
            </a>

            <a
  href="mailto:yourmail@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Divyanshu,%20I%20want%20to%20talk%20about..."
  className="social-btn"
>
  <Mail size={18} />
</a>

          </div>

          <p className="footer-mini">
            Want to collaborate? Reach out anytime.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
