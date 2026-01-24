import React, { useState } from "react";
import "./Skills.css";

// import icons from assets (your rule)
import reactIcon from "../assets/react.png";
import jsIcon from "../assets/java-script.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import framerIcon from "../assets/picture.png";
import githubIcon from "../assets/github.png";
import vscodeIcon from "../assets/logo.png";
import apiIcon from "../assets/api.png";
import nodeIcon from "../assets/programing.png";

const skillData = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Core building blocks for modern UI",
    badge: "Main Focus",
    proof: ["Responsive layouts", "Reusable components", "Clean UI structure"],
    tools: [
      { name: "React", icon: reactIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
    ],
  },
  {
    id: "ui-motion",
    title: "UI + Motion",
    subtitle: "Make interfaces feel premium & alive",
    badge: "Polish",
    proof: ["Micro-interactions", "Hover effects", "Smooth transitions"],
    tools: [
      { name: "Framer Motion", icon: framerIcon },
      { name: "CSS Animations", icon: cssIcon },
      { name: "React UI Patterns", icon: reactIcon },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "Workflow that keeps code clean & fast",
    badge: "Daily Use",
    proof: ["Version control", "Debugging", "Component structure"],
    tools: [
      { name: "GitHub", icon: githubIcon },
      { name: "VS Code", icon: vscodeIcon },
    ],
  },
  {
    id: "backend",
    title: "Backend Basics",
    subtitle: "Enough to connect real features",
    badge: "Growing",
    proof: ["API integration", "Auth basics", "Data flow understanding"],
    tools: [
      { name: "REST APIs", icon: apiIcon },
      { name: "Node (Basics)", icon: nodeIcon },
      { name: "JSON", icon: jsIcon },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState("frontend");

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <p className="skills-tag">Skills</p>
          <h2 className="skills-title">My Skill Stack</h2>
          <p className="skills-subtitle">
            I focus on building clean, interactive, and production-style web
            experiences — not just “knowing tools”.
          </p>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {skillData.map((card) => (
            <div
              key={card.id}
              className={`skill-card ${active === card.id ? "active" : ""}`}
              onMouseEnter={() => setActive(card.id)}
            >
              <div className="skill-card-top">
                <div className="skill-card-title-wrap">
                  <h3 className="skill-card-title">{card.title}</h3>
                  <span className="skill-badge">{card.badge}</span>
                </div>
                <p className="skill-card-sub">{card.subtitle}</p>
              </div>

              {/* Hidden on default, revealed on hover/active */}
              <div className="skill-reveal">
                <div className="skill-tools">
                  {card.tools.map((tool) => (
                    <div key={tool.name} className="tool-chip">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="tool-icon"
                      />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>

                <div className="skill-proof">
                  <p className="proof-title">What I can do</p>
                  <ul>
                    {card.proof.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
