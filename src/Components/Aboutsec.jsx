import React, { useEffect, useRef, useState } from "react";
import "./Aboutsec.css";
import aboutImg from "../assets/WhatsApp Image 2026-01-24 at 13.32.55.jpeg";
import { Sparkles, Code2, Rocket, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // active card
  const [activeCard, setActiveCard] = useState("developer");

  // counter animation
  const [counts, setCounts] = useState({
    projects: 0,
    months: 0,
    commits: 0,
    skills: 0,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const targets = {
      projects: 12,
      months: 8,
      commits: 150,
      skills: 10,
    };

    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      setCounts({
        projects: Math.floor(targets.projects * progress),
        months: Math.floor(targets.months * progress),
        commits: Math.floor(targets.commits * progress),
        skills: Math.floor(targets.skills * progress),
      });

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [visible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "show" : ""}`}
    >
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <div className="about-heading">
            <p className="about-tag">
              <Sparkles size={16} />
              About Me
            </p>

            <h2 className="about-title">
              I build clean, modern, and high-performance websites.
            </h2>

            <p className="about-desc">
              I’m <span className="about-highlight">Divyanshu</span>, a frontend
              developer focused on building smooth UI, interactive animations,
              and responsive web experiences using React.
            </p>

            <p className="about-desc">
              I care about performance, clean design, and real usability — not
              just “looks good”.
            </p>
          </div>

          {/* STATS */}
          <div className="about-stats">
            <div className="stat">
              <h3>{6}+</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>{counts.months}+</h3>
              <p>Months Building</p>
            </div>
            <div className="stat">
              <h3>{counts.commits}+</h3>
              <p>Commits</p>
            </div>
            <div className="stat">
              <h3></h3>
              <p>Skills</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="about-buttons">
            <a className="about-btn primary" href="#projects">
              View My Work
            </a>
            <a className="about-btn secondary" href="#contact">
              Hire / Contact
            </a>
          </div>

          {/* TIMELINE */}
          <div className="about-timeline">
            <h3 className="timeline-title">My Journey</h3>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>
                  <GraduationCap size={18} /> Started Building
                </h4>
                <p>
                  Learned fundamentals, built small projects, and focused on
                  consistency.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>
                  <Code2 size={18} /> React + UI Systems
                </h4>
                <p>
                  Built modern layouts, reusable components, and polished
                  designs.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>
                  <Rocket size={18} /> Animations + Motion
                </h4>
                <p>
                  Started building premium interactive experiences with smooth
                  transitions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>
                  <Briefcase size={18} /> Real Projects Mindset
                </h4>
                <p>
                  Focused on performance, structure, and features that matter in
                  real products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          {/* IMAGE CARD */}
          <div
  className="about-image-card tilt-card"
  onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10; // left/right tilt
    const rotateX = -((y - midY) / midY) * 10; // up/down tilt

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
  }}
>
  <div className="about-image-glow"></div>
  <div className="cursor-glow"></div>

  <img src={aboutImg} alt="About" className="about-image" />

  <div className="about-image-badge">
    <span className="pulse-dot"></span>
    Building premium UI experiences
  </div>
</div>


          {/* INTERACTIVE CARDS */}
          <div className="about-cards">
            <button
              className={`about-card ${
                activeCard === "developer" ? "active" : ""
              }`}
              onClick={() => setActiveCard("developer")}
            >
              <div className="card-top">
                <Code2 size={18} />
                <h3>Frontend Developer</h3>
              </div>
              <p>Clean components, responsive layouts, and modern React UI.</p>
            </button>

            <button
              className={`about-card ${
                activeCard === "motion" ? "active" : ""
              }`}
              onClick={() => setActiveCard("motion")}
            >
              <div className="card-top">
                <Rocket size={18} />
                <h3>UI + Motion</h3>
              </div>
              <p>Micro-interactions, hover effects, and scroll animations.</p>
            </button>
          </div>

          <div className="about-panel">
            {activeCard === "developer" ? (
              <>
                <h3>What I do</h3>
                <p>
                  I build modern React websites with clean structure, fast
                  performance, and responsive design that works everywhere.
                </p>
              </>
            ) : (
              <>
                <h3>What I love</h3>
                <p>
                  Making interfaces feel premium with subtle motion and
                  interaction — not noisy animations.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
