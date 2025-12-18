import React from "react";
import "./AboutSection.css";

export default function About() {
  return (
    <section id="about" className="about-root">
      <div className="about-container">
        <div className="about-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
            alt="Developer Illustration"
            className="about-img"
          />
        </div>

        <div className="about-right">
          <h2 className="about-title">About Me</h2>
          <p className="about-intro">
            Hi, I’m <span className="highlight">Aakash Khede</span> — a dedicated{" "}
            <span className="highlight">MERN Stack Developer</span> with a strong
            passion for building elegant, responsive, and user-friendly web
            applications using <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and{" "}
            <b>MongoDB</b>.
          </p>

          <p className="about-desc">
            My journey started in <b>Computer Science Engineering</b>, where I
            discovered my love for web technologies. Since then, I’ve been
            continuously learning new frameworks, exploring full-stack
            development, and focusing on creating impactful digital experiences.
          </p>

          <p className="about-desc">
            I’m also deeply interested in <b>Frontend UI Design</b>,{" "}
            <b>Problem Solving (DSA - C++)</b>, and <b>Modern Web Trends</b>. My
            goal is to deliver clean, efficient, and scalable web solutions.
          </p>

          <div className="about-edu">
            <h3>🎓 Education</h3>
            <ul>
              <li>
                <b>B.Tech (CSE)</b> — Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
              </li>
              <li>
                <b>Intermediate (12th)</b> — MP Board
              </li>
              <li>
                <b>High School (10th)</b> — MP Board
              </li>
            </ul>
          </div>

          <div className="about-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
