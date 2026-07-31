import "./Projects.css";

function Projects() {
  const projects = [
    {
      image: "/project1.jpeg",
      title: "Digital Thermometer with Alarm",
      description:
        "An Arduino-based project that measures temperature and gives an alert using a buzzer."
    },
    {
      image: "/project2.jpeg",
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built using HTML, CSS, JavaScript and React."
    },
    {
      image: "/project3.jpeg",
      title: "AI & ML Project",
      description:
        "A machine learning based project exploring data analysis and intelligent solutions."
    }
  ];

  return (
    <section className="projects" id="projects" data-aos="zoom-in">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;