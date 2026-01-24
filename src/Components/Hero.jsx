import React from "react";
import "./Hero.css";
import profile from "../assets/coding.png";
import { Code2, Cpu, Database, Globe, Terminal, Braces } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>


      <div className="hero-meteors">
  <div className="meteor m1">
    <span className="meteor-icon c1">⚛</span>
    <span className="meteor-trail t1"></span>
  </div>

  <div className="meteor m2">
    <span className="meteor-icon c2">⌘</span>
    <span className="meteor-trail t2"></span>
  </div>

  <div className="meteor m3">
    <span className="meteor-icon c3">⚡</span>
    <span className="meteor-trail t3"></span>
  </div>

  <div className="meteor m4">
    <span className="meteor-icon c4">{"</>"}</span>
    <span className="meteor-trail t4"></span>
  </div>

  <div className="meteor m5">
    <span className="meteor-icon c5">☁</span>
    <span className="meteor-trail t5"></span>
  </div>
</div>


      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <p className="hero-badge">🚀 Available for Projects</p>

          <h1 className="hero-title">
            Hi, I’m <span className="hero-highlight">Divyanshu Singh</span>
            <br />
            I build modern web experiences.
          </h1>

          <p className="hero-subtitle">
            I’m a developer focused on building clean, fast, and interactive
            websites using React, animations, and modern UI systems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary">
              View Projects
            </a>

            <a href="#contact" className="hero-btn secondary">
              Contact Me
            </a>
          </div>
</div>
        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="profile-ring">
            <div className="profile-inner">
              <img src={profile} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
