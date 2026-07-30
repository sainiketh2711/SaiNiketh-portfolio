import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <img
        src="/Sai Niketh.jpeg"
        alt="Sai Niketh"
        className="hero-image"
      />

      <h1>Hi, I'm Sai Niketh Reddy</h1>

      <h2>B.Tech CSE (AI & ML) Student</h2>

      <p>
        Passionate about Web Development, AI & Machine Learning,
        and creating modern responsive websites.
      </p>

      <a href="#contact" className="hero-btn">
        Contact Me
      </a>
    </section>
  );
}

export default Hero;