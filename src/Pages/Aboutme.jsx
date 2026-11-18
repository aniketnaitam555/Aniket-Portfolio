import "./Aboutme.css";
import profilePic from "../assets/software pic.png";

const Aboutme = () => {
  return (
    <section className="about-page page-section">
      <div className="grid-backdrop" />

      <div className="container">
        <div className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar">
              <img src={profilePic} alt="Portrait of Aniket" />
            </div>
            <span className="status" aria-hidden="true" />
          </div>

          <div className="cgpa">CGPA &bull; 6.3 / 10</div>

          <div className="tags">
            <span>He / Him</span>
            <span>B.E &apos;19</span>
            <span>Open to work</span>
          </div>
        </div>

        <p className="eyebrow">about me</p>

        <h1>
          I&apos;m <span>Aniket</span>
        </h1>

        <div className="description">
          <p>// Bachelor of Engineering graduate, 6.3 CGPA</p>
          <p>// Obsessed with clean architecture and beautiful UI</p>
          <p>// Living at the intersection of systems and design</p>
        </div>

        <div className="skills">
          <span>Problem Solver</span>
          <span>Fast Learner</span>
          <span>Team Player</span>
          <span>Open Source</span>
          <span>Clean Code</span>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
