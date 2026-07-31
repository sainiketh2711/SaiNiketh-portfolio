import "./Stats.css";
import { FaCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: "3+",
      title: "Projects",
    },
    {
      icon: <FaCode />,
      number: "8+",
      title: "Skills",
    },
    {
      icon: <FaGraduationCap />,
      number: "1st",
      title: "Year CSE Student",
    },
  ];

  return (
    <section className="stats" data-aos="fade-up">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-icon">
            {stat.icon}
          </div>

          <h2>{stat.number}</h2>
          <p>{stat.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;