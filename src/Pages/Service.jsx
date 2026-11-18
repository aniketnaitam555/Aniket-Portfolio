import "./Service.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const tools = [
  "Tailwind CSS", "Figma", "Docker", "Firebase", "Stripe", "Razorpay",
  "REST API", "GraphQL", "Git", "React", "Next.js", "Node.js",
  "TypeScript", "MongoDB", "PostgreSQL",
];

const offerings = [
  {
    title: "Web Development",
    desc: "Full-stack apps built with React, Node.js, and a database that fits the job. Shipped on time, documented, and easy to hand off.",
  },
  {
    title: "Mentorship",
    desc: "1:1 guidance for developers leveling up \u2014 code reviews, project pairing, and a straight answer to \u201cam I doing this right?\u201d",
  },
  {
    title: "Freelance Collaboration",
    desc: "Short-term or ongoing work on an existing codebase: features, fixes, performance, or a full rebuild.",
  },
];

const Service = () => {
  return (
    <section className="services page-section">
      <div className="grid-backdrop" />

      <div className="container">
        <p className="eyebrow">freelance services</p>

        <h1 className="services-heading">
          Let me build
          <br />
          <span>it for you.</span>
        </h1>

        <div className="description">
          <p>// Web development that ships on time.</p>
          <p>// Mentorship that actually moves the needle.</p>
          <p>// Real work, real results &mdash; no fluff.</p>
        </div>

        <div className="buttons">
          <NavLink to="/contact" className="btn btn-primary">
            Book a Free Call <FaArrowRight />
          </NavLink>
          <a href="mailto:aniketnaitam666@gmail.com" className="btn btn-secondary">
            Email Me
          </a>
        </div>

        <div className="offerings">
          {offerings.map((item) => (
            <div className="offer-card card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <span className="stack-label">// tools I work with</span>
          <div className="stack-pills">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
