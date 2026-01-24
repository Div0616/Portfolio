import React, { useState } from "react";
import "./ContactBar.css";
import resumeFile from "../assets/Divyanshusinghresume016 (1).pdf";

import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  MessageCircle,
  Download,
  X,
} from "lucide-react";

const ContactBar = () => {
  const email = "divyanshhsingh0011@gmail.com";
  const whatsappNumber = "8446638364";
  const linkedinUrl = "https://www.linkedin.com/in/divyanshu-singh0616/";
  const githubUrl = "https://github.com/Div0616";

  const [copied, setCopied] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      alert("Copy failed. Copy manually: " + email);
    }
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <p className="contact-tag">Contact</p>
            <h2 className="contact-title">Let’s build something real.</h2>
            <p className="contact-subtitle">
              Quick ways to reach me — no boring forms.
            </p>
          </div>

          <div className="contact-bar">
            <div className="contact-item">
              <div className="contact-left">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>

                <div className="contact-text">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">{email}</p>
                </div>
              </div>

              <button className="contact-action" onClick={copyEmail}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="contact-actions">
              <a
                className="contact-btn"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <a
                className="contact-btn"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                className="contact-btn"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>

              <a className="contact-btn primary" href={resumeFile} download>
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <button className="floating-cta" onClick={() => setOpenPopup(true)}>
        <MessageCircle size={18} />
        Message
      </button>

      {openPopup && (
        <div className="mini-popup">
          <div
            className="mini-popup-overlay"
            onClick={() => setOpenPopup(false)}
          />

          <div className="mini-popup-box">
            <button className="mini-close" onClick={() => setOpenPopup(false)}>
              <X size={18} />
            </button>

            <h3 className="mini-title">Quick Message</h3>
            <p className="mini-sub">
              Click below to open WhatsApp or email me directly.
            </p>

            <div className="mini-actions">
              <a
                className="mini-btn primary"
                href={`https://wa.me/${8446638364}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <a className="mini-btn" href={`mailto:${email}`}>
                <Mail size={16} />
                Email
              </a>
            </div>

            <p className="mini-note">
              I usually reply within <span>24 hours</span>.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactBar;
