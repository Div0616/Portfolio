import React, { useState } from "react";
import "./Projects.css";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "My Portfolio",
    featured: true,
    description:
      "A premium dark-themed portfolio with loader, blur navbar, interactive sections, and smooth UI animations.",
    tech: ["React", "CSS", "Framer Motion"],
    live: "https://example.com",
    github: "https://github.com/example",
  },
  {
    id: 2,
    title: "E-Commerce",
    featured: false,
    description:
      "Modern e-commerce UI with clean product layout, responsive design, and scalable component structure.",
    tech: ["React", "CSS", "REST API"],
    live: "https://example.com",
    github: "https://github.com/example",
  },
  {
    id: 3,
    title: "AI Safety Monitoring Prototype",
    featured: true,
    description:
      "Prototype for detecting abnormal crowd activity using motion + density logic on CCTV frames (rules-based).",
    tech: ["Python", "OpenCV", "Numpy"],
    live: "https://example.com",
    github: "https://github.com/example",
  },
  {
    id: 4,
    title: "Analytics Dashboard UI",
    featured: false,
    description:
      "Clean dashboard layout with structured cards and scalable sections for metrics and future charts.",
    tech: ["React", "UI Design"],
    live: "https://example.com",
    github: "https://github.com/example",
  },
  {
    id: 5,
    title: "Quick Pure",
    featured: false,
    description:
      "Clean dashboard layout with structured cards and scalable sections for metrics and future charts.",
    tech: ["React", "UI Design"],
    live: "quickpure.in",
    github: "https://github.com/example",
  },
];

// ✅ Auto-fix URL (so "quickpure.in" becomes "https://quickpure.in")
const normalizeUrl = (url) => {
  if (!url) return "#";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  const filters = ["All", "React", "Python", "UI Design"];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <p className="projects-tag">Projects</p>
          <h2 className="projects-title">My Work</h2>
          <p className="projects-subtitle">
            Clean, real projects focused on UI quality, structure, and smooth
            user experience.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="projects-timeline">
          <div className="timeline-line"></div>

          {filtered.map((p) => (
            <div key={p.id} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="project-row compact">
                <div className="project-left">
                  <div className="project-title-wrap">
                    <h3 className="project-title">{p.title}</h3>

                    {p.featured && (
                      <span className="featured-badge">
                        <Star size={14} />
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="project-desc">{p.description}</p>

                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-right">
                  <a
                    href={normalizeUrl(p.live)}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn primary"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  <a
                    href={normalizeUrl(p.github)}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn secondary"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>

                <div className="row-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
