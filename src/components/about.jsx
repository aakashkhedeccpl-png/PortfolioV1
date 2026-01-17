import React from "react";
import { GraduationCap, Award, Code2, Users, ArrowRight } from "lucide-react";
import "./AboutSection.css";

export default function About() {
  const stats = [
    { icon: <Code2 size={24} />, value: "15+", label: "Projects Completed" },
    { icon: <Users size={24} />, value: "10+", label: "Happy Clients" },
    { icon: <Award size={24} />, value: "2+", label: "Years Experience" },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      year: "2020 - 2024",
    },
    {
      degree: "Higher Secondary (12th)",
      school: "MP Board",
      year: "2020",
    },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate Developer Building Digital Solutions
          </h2>
          <p className="section-subtitle">
            Dedicated to creating exceptional web experiences with clean code
            and modern technologies
          </p>
        </div>

        <div className="about__grid">
          {/* Left - Image */}
          <div className="about__image-section">
            <div className="about__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600"
                alt="Developer workspace"
                className="about__image"
              />
              <div className="about__image-overlay" />

              {/* Experience Badge */}
              <div className="about__badge">
                <span className="about__badge-value">2+</span>
                <span className="about__badge-label">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="about__content">
            <div className="about__intro">
              <h3 className="about__name">
                I'm <span>Aakash Khede</span>
              </h3>
              <p className="about__role">
                Full Stack Developer | MERN Specialist
              </p>
            </div>

            <div className="about__bio">
              <p>
                A dedicated software engineer with a passion for building
                scalable, user-friendly web applications. I specialize in the{" "}
                <strong>MERN Stack</strong> — MongoDB, Express.js, React.js, and
                Node.js.
              </p>
              <p>
                My journey in tech began during my Computer Science studies,
                where I discovered the art of transforming ideas into digital
                reality. Since then, I've been committed to continuous learning
                and delivering high-quality solutions.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating
                intuitive user experiences. When I'm not coding, I'm exploring
                new technologies and contributing to open-source projects.
              </p>
            </div>

            {/* Stats */}
            <div className="about__stats">
              {stats.map((stat, i) => (
                <div key={i} className="about__stat">
                  <div className="about__stat-icon">{stat.icon}</div>
                  <div className="about__stat-content">
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="about__education">
              <h4 className="about__section-title">
                <GraduationCap size={20} />
                Education
              </h4>
              <div className="about__edu-list">
                {education.map((edu, i) => (
                  <div key={i} className="about__edu-item">
                    <div className="about__edu-dot" />
                    <div className="about__edu-content">
                      <h5>{edu.degree}</h5>
                      <p>{edu.school}</p>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="about__cta">
              <a href="#contact" className="btn btn-primary">
                <span>Let's Work Together</span>
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}