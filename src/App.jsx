import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css'
import Projects from "./components/Projects";
import Skils from "./components/Skils";
import About from "./components/about";
import ContactSection from "./components/Contact";

export default function App() {
  return (
    <>
      <div className="hidden" id="home"></div>
      <Header />
      <Hero />
      <Projects />
      <Skils />
      <About/>
      <ContactSection/>
    </>
  );
}

