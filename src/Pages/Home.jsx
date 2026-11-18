import "/src/Pages/Home.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="hero">
      <div className="grid-backdrop" />

      <div className="hero-content container">
        <p className="eyebrow">available for work</p>

        <h1>
          Hey, I&apos;m <span>Aniket</span>
          <br />I build as a <em>Developer</em>
        </h1>

        <div className="hero-desc">
          <p>// fast, scalable, and delightful digital experiences</p>
          <p>// from idea to deployment, I handle it all</p>
        </div>

        <div className="buttons">
          <NavLink to="/project" className="btn btn-primary">
            View My Work <FaArrowRight />
          </NavLink>
          <NavLink to="/contact" className="btn btn-secondary">
            Let&apos;s Talk <FaArrowUpRightFromSquare />
          </NavLink>
        </div>

        <div className="hero-stack">
          <span className="stack-label">// stack</span>
          <div className="stack-pills">
            <span>React</span>
            <span>Node.js</span>
            <span>Tailwind</span>
            <span>JavaScript</span>
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
