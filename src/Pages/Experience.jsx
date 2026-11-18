import "./Experience.css";
import { FaLocationDot } from "react-icons/fa6";

const roles = [
  {
    title: "Intern",
    company: "Skillected",
    type: "Internship",
    mode: "Remote",
    date: "Oct 2025 \u2013 Aug 2026",
    summary: "Worked on multiple projects to build product clones end to end.",
    highlights: [
      "Built 8 reusable component modules adopted across 3 product teams",
      "Introduced an animation system using Framer Motion",
    ],
    stack: ["React", "Node.js", "MongoDB", "REST API", "JavaScript"],
  },
  {
    title: "IT Support Engineer",
    company: "Naval Armament Inspectorate",
    type: "Full Time",
    mode: "Onsite",
    date: "Sep 2023 \u2013 Sep 2026",
    summary:
      "Maintained computer systems, networks, and software so employees could work without technical issues.",
    highlights: [
      "Troubleshot hardware issues, software installs, and network/user support",
      "Owned system maintenance, security, and access management",
    ],
    stack: ["Windows", "Linux", "Firewall", "Server", "Networking"],
  },
];

const Experience = () => {
  return (
    <section className="experience-page page-section">
      <div className="grid-backdrop" />

      <div className="container">
        <p className="eyebrow">work experience</p>
        <h1 className="section-heading">Internships &amp; roles</h1>
        <p className="section-sub">
          Where I&apos;ve worked, what I owned, and what shipped.
        </p>

        <div className="timeline">
          {roles.map((role) => (
            <article className="exp-card card" key={role.title + role.company}>
              <div className="tags">
                <span className="active">{role.type}</span>
                <span>{role.mode}</span>
              </div>

              <h2>{role.title}</h2>

              <div className="company">
                <FaLocationDot className="icon" />
                <span>{role.company}</span>
              </div>

              <p className="date">{role.date}</p>

              <p className="description">{role.summary}</p>

              <ul>
                {role.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {role.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
