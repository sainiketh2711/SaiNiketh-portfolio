import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-left">

      <h2>Contact Me</h2>

      <p className="contact-text">
        I am open to learning opportunities, internships, and collaborations.
        Feel free to connect with me.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>
            indlasainikethreddy08@gmail.com
          </p>
        </div>


        <div className="contact-card">
          <FaPhone />
          <h3>Phone</h3>
          <p>
            +91 XXXXX XXXXX
          </p>
        </div>


        <div className="contact-card">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>
            India
          </p>
        </div>

      </div>


      <div className="contact-buttons">

        <a
          href="mailto:indlasainikethreddy08@gmail.com"
          className="contact-btn"
        >
          Send Email
        </a>


        <a
          href="https://github.com/sainiketh2711"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <FaGithub /> GitHub
        </a>


        <a
          href="#"
          className="social-btn"
        >
          <FaLinkedin /> LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Contact;