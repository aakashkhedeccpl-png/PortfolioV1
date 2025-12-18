// Header.jsx (plain CSS, no Tailwind)
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import "./Header.css"; // Plain CSS file — required



const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const logoVariant = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
  const navItemVariant = {
    hidden: { opacity: 0, y: -8 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
  };
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.18 } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.12 } },
  };

  return (
    <header className="hd-root" >
      <div className="hd-container">
       
        <motion.a
          href="#home"
          className="hd-brand"
          initial="hidden"
          animate="visible"
          variants={logoVariant}
          aria-label="Aakash.Dev - Home"
        >
          {/* AD badge (styled in CSS) */}
          <motion.div className="hd-badge" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
            AD
          </motion.div>

          {/* Brand texts (hidden on small screens via CSS) */}
          <div className="hd-brand-texts">
            <div className="hd-name">
              Aakash<span className="hd-accent">.Dev</span>
            </div>
            <div className="hd-role">Frontend Engineer</div>
          </div>
        </motion.a>

        {/* Center: Desktop navigation (visible on wider screens) */}
        <nav className="hd-nav" aria-label="Primary Navigation">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className="hd-nav-link"
              initial="hidden"
              animate="visible"
              custom={idx}
              variants={navItemVariant}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right: Social icons + CTA + mobile toggle */}
        <div className="hd-right">
          <div className="hd-social" aria-hidden={false}>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hd-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hd-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:youremail@gmail.com" aria-label="Email" className="hd-icon">
              <Mail size={20} />
            </a>
          </div>

          <a href="#contact" className="hd-cta">Hire Me</a>

          {/* Mobile menu button (visible on small screens via CSS) */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="hd-mobile-btn"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            type="button"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="hd-mobile"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="hd-mobile-inner">
              <div className="hd-mobile-links">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="hd-mobile-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="hd-mobile-footer">
                <div className="hd-mobile-social">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="hd-icon"><Github size={20} /></a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hd-icon"><Linkedin size={20} /></a>
                  <a href="mailto:youremail@gmail.com" className="hd-icon"><Mail size={20} /></a>
                </div>
                <a href="#contact" onClick={() => setOpen(false)} className="hd-cta hd-mobile-cta">Hire Me</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
