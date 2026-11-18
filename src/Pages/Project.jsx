import "./Project.css";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "Myntra Shopping Website Clone",
    tagline: "Full-stack e-commerce platform with real-time inventory",
    description:
      "A production-grade shopping platform built with React, Node.js, and MongoDB. Features JWT auth, Stripe payments, real-time stock updates via WebSockets, and an admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe", "WebSocket"],
    status: "live",
    github: "https://github.com/aniketinfinity666",
    demo: "https://github.com/aniketinfinity666",
  },
  {
    title: "Weather Forecast App",
    tagline: "Live weather data pulled from a public forecast API",
    description:
      "A responsive weather dashboard built with React that fetches real-time conditions and a multi-day forecast, with search by city and saved locations.",
    stack: ["React", "REST API", "JavaScript", "CSS"],
    status: "live",
    github: "https://github.com/aniketinfinity666",
    demo: "https://github.com/aniketinfinity666",
  },
];

const Project = () => {
  return (
    <section className="project-page page-section">
      <div className="grid-backdrop" />

      <div className="container">
        <p className="eyebrow">featured work</p>
        <h1 className="section-heading">High-impact projects</h1>
        <p className="section-sub">
          A selection of things I&apos;ve built, end to end &mdash; from
          schema to shipped UI.
        </p>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card card" key={project.title}>
              <div className="status">
                <span className="diamond">&#9670;</span>
                <span className="live">&bull; {project.status}</span>
              </div>

              <div className="project-content">
                <h2>{project.title}</h2>
                <h4>{project.tagline}</h4>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="buttons">
                <a
                  className="btn btn-secondary"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> Code
                </a>
                <a
                  className="btn btn-primary"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FaArrowUpRightFromSquare />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
