import React, { useState } from "react";
import { ExternalLink, Github, Eye, X, ArrowRight } from "lucide-react";
import "./Projects.css";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with product management, cart functionality, secure checkout, and payment integration using Stripe.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    category: "Full Stack",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description:
      "Instant messaging app with real-time communication, private rooms, typing indicators, and message history.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800",
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    category: "Full Stack",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Kanban-style project management tool with drag-and-drop, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Full Stack",
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Interactive weather application with real-time data, 7-day forecasts, and location-based search.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800",
    tech: ["React", "OpenWeather API", "Chart.js"],
    category: "Frontend",
    live: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with smooth animations and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    tech: ["React", "Framer Motion", "CSS"],
    category: "Frontend",
    live: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "Full-featured blog with markdown editor, comments, categories, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${
                project.featured ? "project-card--featured" : ""
              }`}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="project-card__image">
                <img src={project.image} alt={project.title} />
                <div className="project-card__overlay">
                  <button
                    className="project-card__view"
                    onClick={() => openModal(project)}
                  >
                    <Eye size={20} />
                    <span>View Details</span>
                  </button>
                </div>
                {project.featured && (
                  <span className="project-card__badge">Featured</span>
                )}
              </div>

              {/* Content */}
              <div className="project-card__content">
                <span className="project-card__category">
                  {project.category}
                </span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__tech">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="project-card__tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="project-card__tech-more">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.live}
                    className="project-card__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="project-card__link project-card__link--secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="projects__footer">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Github size={18} />
            <span>View All on GitHub</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div
            className="project-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="project-modal__close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="project-modal__image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="project-modal__body">
              <span className="project-modal__category">
                {selectedProject.category}
              </span>
              <h3 className="project-modal__title">{selectedProject.title}</h3>
              <p className="project-modal__description">
                {selectedProject.description}
              </p>

              <div className="project-modal__tech">
                <h4>Technologies Used:</h4>
                <div className="project-modal__tech-list">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-modal__actions">
                <a
                  href={selectedProject.live}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={18} />
                  <span>View Live Demo</span>
                </a>
                <a
                  href={selectedProject.github}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}