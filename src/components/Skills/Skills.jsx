import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C Programming",
    "Python",
    "AI & Machine Learning",
    "Git & GitHub"
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;