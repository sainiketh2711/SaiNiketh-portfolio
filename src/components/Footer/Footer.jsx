import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h3>Sai Niketh Reddy</h3>

      <p>
        Building modern web experiences with React & AI/ML.
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/sainiketh2711"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:indlasainikethreddy08@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        © 2026 Sai Niketh Reddy. All Rights Reserved.
      </p>

      <p>
        Built with React ❤️
      </p>

    </footer>
  );
}

export default Footer;