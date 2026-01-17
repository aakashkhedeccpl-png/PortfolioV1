import React, { useState } from "react";
import "./Skils.css";

const CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

const SKILLS = [
  {
    name: "React.js",
    category: "frontend",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    category: "frontend",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "frontend",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 82,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "backend",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: 78,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    category: "backend",
    level: 72,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    category: "tools",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    category: "tools",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "C++",
    category: "tools",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    category: "tools",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`skills__filter ${
                activeCategory === cat.id ? "skills__filter--active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills__grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ "--delay": `${index * 0.05}s` }}
            >
              <div className="skill-card__header">
                <div className="skill-card__icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <div className="skill-card__info">
                  <h4 className="skill-card__name">{skill.name}</h4>
                  <span className="skill-card__level">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-card__progress">
                <div
                  className="skill-card__progress-bar"
                  style={{ "--width": `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="skills__footer">
          <div className="skills__note">
            <span className="skills__note-icon">💡</span>
            <p>
              Continuously learning and exploring new technologies to stay
              updated with industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}