import React from "react";
import "./Skils.css";

const TECHS = [
    { key: "react", title: "REACT.JS", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", desc: "Component-based UI library — JSX, hooks, virtual DOM." },
    { key: "javascript", title: "JAVASCRIPT", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", desc: "Dynamic scripting — ES6+, async/await, DOM, events." },
    { key: "typescript", title: "TYPESCRIPT", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", desc: "Typed superset of JS — interfaces, types, better tooling." },
    { key: "java", title: "JAVA CORE", img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", desc: "OOP, JVM, collections, exceptions, multithreading basics." },
    { key: "c", title: "C", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Programming_Language.svg", desc: "Procedural, pointers, memory management." },
    { key: "cpp", title: "C++ / DSA", img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", desc: "STL, algorithms, data structures, performance." },
    { key: "html", title: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", desc: "Structure & semantics of web pages." },
    { key: "css", title: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", desc: "Styling, layout, flexbox, grid, animations." },
    { key: "tailwind", title: "TAILWIND CSS (ref)", img: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.7d8f9d6f.svg", desc: "Utility-first CSS (shown for reference only)." },
    { key: "mysql", title: "MYSQL", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg", desc: "Relational DB — SQL, joins, indexing." },
    { key: "express", title: "EXPRESS.JS", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", desc: "Minimal Node framework — routing, middleware." },
  
    { key: "git", title: "GIT & GITHUB", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", desc: "Version control — commits, branches, PRs." },
  
];

export default function Skils() {
    return (
        <div className="tech-root" id="skills">
            <header className="tech-header">
                <div>
                    <h1>Tech Stack Showcase</h1>
                    <p className="sub">REACT.JS | JAVASCRIPT | TYPESCRIPT | JAVA CORE | C | DSA + C++ | CSS | HTML | TAILWIND CSS | MYSQL | EXPRESS.JS | MERN | GIT & GITHUB | TYPESCRIPT + EXPRESS</p>
                </div>
            </header>

            <main className="grid">
                {TECHS.map((t) => (
                    <article key={t.key} className="card" tabIndex={0} aria-label={t.title}>
                        <div className="card-inner">
                            <div className="card-front">
                                <div className="logo"><img src={t.img} alt={`${t.title} logo`} /></div>
                                <h3>{t.title}</h3>
                                <p className="short">{t.desc}</p>
                            </div>

                            <div className="card-back">
                                <h4>Quick points</h4>
                                <ul>
                                    <li>Practice projects</li>
                                    <li>Interview questions</li>
                                    <li>Build a mini project</li>
                                </ul>
                                <div className="mini">Click / focus to see animation</div>
                            </div>
                        </div>
                    </article>
                ))}
            </main>

            <footer className="note">Note: Replace remote image URLs with local assets for production.</footer>
        </div>
    );
}
