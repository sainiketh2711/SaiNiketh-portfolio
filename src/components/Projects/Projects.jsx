import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      image: "/project1.jpeg",
      title: "Digital Thermometer with Alarm",
      description:
        "Arduino-based temperature monitoring system with LCD display and buzzer alarm.",
      github: "https://github.com/sainiketh2711",
      demo: "#",
    },
    {
      image: "/project2.jpeg",
      title: "React Portfolio Website",
      description:
        "A modern responsive portfolio built using React, CSS and JavaScript.",
      github: "https://github.com/sainiketh2711",
      demo: "#",
    },
    {
      image: "/project3.jpeg",
      title: "AI & ML Project",
      description:
        "Machine Learning project for intelligent data analysis and prediction.",
      github: "https://github.com/sainiketh2711",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects" data-aos="zoom-in">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github-btn"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn demo-btn"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;