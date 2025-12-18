
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";



const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  const subVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.12 } },
  };
  const photoVariant = {
    hidden: { opacity: 0, scale: 0.95, x: 40 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="hero-root" aria-label="Hero - Aakash Dev">
      {/* Background animated layers (pure CSS) */}
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="hero-container">
        {/* Left: Text */}
        <motion.div className="hero-left" initial="hidden" animate="visible" variants={textVariant}>
          <motion.h1 className="hero-title" initial="hidden" animate="visible" variants={textVariant}>
            Hi, I’m <span className="accent">Aakash</span>
          </motion.h1>

          <motion.p className="hero-sub" initial="hidden" animate="visible" variants={subVariant}>
            I am a Frontend Developer — building beautiful &amp; performant web experiences.
          </motion.p>

          <motion.div className="hero-ctas" initial="hidden" animate="visible" variants={subVariant}>
            <a href="#projects" className="btn-primary" aria-label="See Projects">View Projects</a>
            <a href="#contact" className="btn-outline" aria-label="Contact Me">Contact</a>
          </motion.div>

        </motion.div>

        {/* Right: Photo */}
        <motion.div className="hero-right" initial="hidden" animate="visible" variants={photoVariant}>
          {/* Replace 'my-photo.jpg' with your image (public folder or import) */}
          <img src="/my-photo.jpg" alt="Aakash Dev" className="hero-photo" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
