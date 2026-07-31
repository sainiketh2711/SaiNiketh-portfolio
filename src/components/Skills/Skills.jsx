import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "80%" },
    { name: "C Programming", level: "80%" },
    { name: "Python", level: "70%" },
    { name: "AI & Machine Learning", level: "75%" },
    { name: "Git & GitHub", level: "85%" },
  ];

  return (
    <section className="skills" id="skills" data-aos="fade-right">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="skill-progress">
  <div
    className="skill-progress-bar"
    style={{ width: skill.level }}
  ></div>
</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;