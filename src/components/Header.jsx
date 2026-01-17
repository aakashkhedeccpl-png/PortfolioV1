import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import "./Header.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );
      const scrollPos = window.scrollY + 150;

      sections.forEach((section, idx) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navLinks[idx].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        {/* Logo */}
        <a href="#home" className="header__logo">
          <div className="header__logo-icon">
            <span>A</span>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-name">Aakash</span>
            <span className="header__logo-role">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`header__nav-link ${
                activeSection === link.id ? "header__nav-link--active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="header__actions">
          <div className="header__socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <a href="#contact" className="header__cta">
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            className="header__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="header__mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header__mobile-footer">
          <div className="header__mobile-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:email@example.com">
              <Mail size={20} />
            </a>
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}