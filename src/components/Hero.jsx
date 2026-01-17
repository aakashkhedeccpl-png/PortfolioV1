import React from "react";
import { ArrowRight, Download, MapPin, Briefcase, CheckCircle } from "lucide-react";
import "./Hero.css";

// Resume import karo
import resumePDF from "../assets/Aakash_Khede_FullStack_Developer_Resume1234.pdf";

export default function Hero() {
  const highlights = [
    "Full Stack Developer",
    "1+ Years Experience",
    "15+ Projects Delivered",
  ];

  return (
    <section className="hero" id="home">
      {/* Background Elements */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          {/* Status Badge */}
          <div className="hero__status">
            <span className="hero__status-dot" />
            <span>Available for opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Aakash Khede</span>
            <br />
            <span className="hero__role">Software Engineer</span>
          </h1>

          {/* Description */}
          <p className="hero__description">
            I design and build exceptional digital experiences. Specializing in{" "}
            <strong>React.js</strong>, <strong>Node.js</strong>, and modern web
            technologies to create scalable, user-centric applications.
          </p>

          {/* Highlights */}
          <div className="hero__highlights">
            {highlights.map((item, i) => (
              <div key={i} className="hero__highlight">
                <CheckCircle size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            
            {/* Resume Download - Import method */}
            <a 
              href={resumePDF} 
              className="btn btn-secondary" 
              download="Aakash_Khede_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Quick Info */}
          <div className="hero__info">
            <div className="hero__info-item">
              <MapPin size={16} />
              <span>India</span>
            </div>
            <div className="hero__info-divider" />
            <div className="hero__info-item">
              <Briefcase size={16} />
              <span>Full-time / Freelance</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <div className="hero__image-bg" />
            <img
              src="/my-photo.jpg"
              alt="Aakash Khede"
              className="hero__image"
            />

            {/* Floating Cards */}
            <div className="hero__float hero__float--exp">
              <div className="hero__float-icon">💼</div>
              <div className="hero__float-content">
                <span className="hero__float-value">1+</span>
                <span className="hero__float-label">Years Exp</span>
              </div>
            </div>

            <div className="hero__float hero__float--projects">
              <div className="hero__float-icon">🚀</div>
              <div className="hero__float-content">
                <span className="hero__float-value">15+</span>
                <span className="hero__float-label">Projects</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="hero__tech">
            <span className="hero__tech-label">Tech Stack</span>
            <div className="hero__tech-list">
              <div className="hero__tech-item" title="React">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
              </div>
              <div className="hero__tech-item" title="Node.js">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
              </div>
              <div className="hero__tech-item" title="JavaScript">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
              </div>
              <div className="hero__tech-item" title="MongoDB">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}