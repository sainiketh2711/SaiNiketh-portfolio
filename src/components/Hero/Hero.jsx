import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-content">
        <div className="hero-text">
          <h3>👋 Hello, I'm</h3>

          <h1>Sai Niketh Reddy</h1>

          <h2>
            <Typewriter
              words={[
                "Web Developer",
                "React Developer",
                "AI & ML Student",
                "Frontend Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p>
            Passionate about building modern, responsive, and user-friendly web
            applications using React while continuously learning AI & Machine
            Learning.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn">
              Contact Me
            </a>

            <a href="/resume.pdf" className="resume-btn" download>
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/sainiketh2711" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="/Sai Niketh.jpeg"
            alt="Sai Niketh"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;