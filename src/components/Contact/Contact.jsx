import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-left">
      <h2>Contact Me</h2>

      <p>
        I am open to learning opportunities, internships, and
        collaborations.
      </p>

      <div className="contact-info">
        <p>
          📧 Email: sainikethreddy@gamil.com
        </p>

        <p>
          📱 Phone: +91 XXXXX XXXXX
        </p>

        <p>
          📍 Location: India
        </p>
      </div>

      <a href="mailto:sainikethreddy@gamil.com" className="contact-btn">
        Send Email
      </a>
    </section>
  );
}

export default Contact;