import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code2 } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:aakash@example.com", label: "Email" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer */}
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <div className="footer__logo-icon">
                <Code2 size={24} />
              </div>
              <div className="footer__logo-text">
                <span className="footer__logo-name">Aakash Khede</span>
                <span className="footer__logo-role">Software Engineer</span>
              </div>
            </a>
            <p className="footer__description">
              Building exceptional digital experiences with modern technologies. 
              Passionate about clean code, user experience, and continuous learning.
            </p>
            <div className="footer__socials">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__nav">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__services">
            <h4 className="footer__title">Services</h4>
            <ul className="footer__links">
              <li><a href="#projects">Web Development</a></li>
              <li><a href="#projects">Frontend Development</a></li>
              <li><a href="#projects">Backend Development</a></li>
              <li><a href="#projects">Full Stack Solutions</a></li>
              <li><a href="#contact">Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__contact">
            <h4 className="footer__title">Get In Touch</h4>
            <ul className="footer__contact-list">
              <li>
                <Mail size={16} />
                <a href="mailto:aakash.khede@gmail.com">aakash.khede@gmail.com</a>
              </li>
              <li>
                <span>📍</span>
                <span>Madhya Pradesh, India</span>
              </li>
            </ul>
            <a href="#contact" className="footer__cta">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Aakash Khede. Crafted with{" "}
            <Heart size={14} className="footer__heart" /> using React
          </p>

          <button
            className="footer__scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}