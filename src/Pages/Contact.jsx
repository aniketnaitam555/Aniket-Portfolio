import { useState } from "react";
import "./Contact.css";
import profilePic from "../assets/software pic.png";
import {
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaArrowRight,
} from "react-icons/fa6";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-page page-section">
      <div className="container contact-grid">
        <div className="left-panel">
          <div className="profile-card card">
            <div className="profile-top">
              <div className="avatar">
                <img src={profilePic} alt="Portrait of Aniket" />
              </div>
              <div>
                <h2>Aniket</h2>
                <p>B.E. &bull; Freelancer &bull; Mentor</p>
              </div>
            </div>

            <div className="info">
              <div className="info-item">
                <FaEnvelope className="icon" />
                <div>
                  <span>Email</span>
                  <p>aniketnaitam666@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <FaLocationDot className="icon" />
                <div>
                  <span>Location</span>
                  <p>Nagpur, Maharashtra</p>
                </div>
              </div>

              <div className="info-item">
                <FaClock className="icon" />
                <div>
                  <span>Timezone</span>
                  <p>IST (UTC +5:30)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reach-card card">
            <h4>Reach out for</h4>
            <ul>
              <li>Freelance project collaboration</li>
              <li>Full-time / internship opportunity</li>
              <li>Hackathon team-up</li>
              <li>Just vibing &amp; networking</li>
            </ul>
          </div>

          <div className="response-card card">
            <h4>Response guarantee</h4>
            <p>
              Every message gets a personal reply within <strong>24 hours</strong>.
            </p>
          </div>
        </div>

        <div className="right-panel card">
          <p className="eyebrow">send a message</p>
          <h1>Drop me a line</h1>
          <p className="subtitle">I&apos;ll get back to you shortly.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="abc@example.com" required />
            </div>

            <select defaultValue="">
              <option value="" disabled>
                Select inquiry type&hellip;
              </option>
              <option>Freelance Project</option>
              <option>Mentorship</option>
              <option>Job Opportunity</option>
            </select>

            <input
              type="text"
              placeholder="e.g. Let's build something cool together"
              required
            />

            <textarea
              rows="7"
              placeholder="Tell me about your project, idea, or just say hello"
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              {sent ? "Message sent" : "Send Message"} <FaArrowRight />
            </button>

            {sent && (
              <p className="form-note">
                Thanks &mdash; got it. I&apos;ll reply within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
