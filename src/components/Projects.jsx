// ProjectSection.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";


export default function ProjectSection({ projects = null, simulateLoadMs = 800 }) {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isListView, setIsListView] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const defaultProjects = [
    {
      id: 1,
      title: "E-commerce UI",
      tech: "React • Context API • CSS",
      desc: "Product listing, cart flow, filters and responsive UI.",
      href: "#",
      repo: "#",
    },
    {
      id: 2,
      title: "Real-time Chat",
      tech: "Socket.io • Node • React",
      desc: "Rooms, typing indicators, message history and media support.",
      href: "#",
      repo: "#",
    },
    {
      id: 3,
      title: "Portfolio Site",
      tech: "React • CSS Animations",
      desc: "Multi-section portfolio with smooth transitions and blog.",
      href: "#",
      repo: "#",
    },
    {
      id: 4,
      title: "Data Visualizer",
      tech: "D3.js • React",
      desc: "Custom charts, filters, export to PNG/CSV.",
      href: "#",
      repo: "#",
    },
  ];

  const list = Array.isArray(projects) && projects.length ? projects : defaultProjects;

  // simulated loading (use your fetch logic instead)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), simulateLoadMs);
    return () => clearTimeout(t);
  }, [simulateLoadMs]);

  // intersection observer — reveal cards with stagger after load
  useEffect(() => {
    if (loading) return;
    const root = containerRef.current;
    if (!root) return;
    const cards = root.querySelectorAll(".proj-card");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [loading]);

  // tilt handlers
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)).toFixed(3);
    const ry = ((x - rect.width / 2) / (rect.width / 2)).toFixed(3);
    card.style.setProperty("--rx", rx);
    card.style.setProperty("--ry", ry);
  };
  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", 0);
    card.style.setProperty("--ry", 0);
  };

  // toggle layout: set inline grid template for immediate effect
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    if (isListView) grid.style.gridTemplateColumns = "1fr";
    else grid.style.gridTemplateColumns = "";
  }, [isListView]);

  // keyboard shortcut 'L' for toggle when component focused
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const handler = (e) => {
      if (e.key === "l" || e.key === "L") setIsListView((s) => !s);
    };
    root.addEventListener("keydown", handler);
    return () => root.removeEventListener("keydown", handler);
  }, []);

  // open modal
  function openModal(project) {
    setModalProject(project);
    // lock scroll
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModalProject(null);
    document.body.style.overflow = "";
  }

  // close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section
        id="projects"
        className="projects-section"
        aria-labelledby="projects-heading"
        ref={containerRef}
        tabIndex={-1} // to receive keyboard 'L' when focused
      >
        <div className="projects-inner">
          <header className="projects-header" role="toolbar" aria-label="Projects controls">
            <div>
              <h2 id="projects-heading" className="projects-title">My Projects</h2>
              <p className="projects-sub">Selected work — hover cards for micro-interactions</p>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div className="projects-count" aria-hidden>{list.length} projects</div>

              
            </div>
          </header>

          <div className="projects-grid" role="list" ref={gridRef}>
            {loading
              ? // skeletons
                list.map((_, idx) => (
                  <article key={idx} className="proj-card skeleton" style={{ ["--order"]: idx }} aria-hidden>
                    <div className="border-anim" />
                    <div className="glow" />
                    <div className="skeleton-top">
                      <div className="skeleton-thumb" />
                      <div className="skeleton-lines">
                        <div className="s-line s-line-title" />
                        <div className="s-line s-line-meta" />
                      </div>
                    </div>
                    <div className="s-line s-line-desc" />
                    <div className="s-tags">
                      <div className="s-tag" />
                      <div className="s-tag" />
                      <div className="s-tag" />
                    </div>
                    <div className="s-line s-line-cta" />
                  </article>
                ))
              : // real cards
                list.map((p, idx) => (
                  <article
                    key={p.id}
                    className="proj-card"
                    role="listitem"
                    tabIndex={0}
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                    onFocus={resetTilt}
                    onBlur={resetTilt}
                    style={{ ["--order"]: idx }}
                  >
                    <div className="border-anim" aria-hidden="true" />
                    <div className="glow" aria-hidden="true" />

                    <div className="proj-top">
                      <div
                        className="proj-thumb"
                        aria-hidden="true"
                        /* if you supply p.img you can set as background inline-style */
                        style={p.img ? { backgroundImage: `url(${p.img})`, backgroundSize: "cover" } : {}}
                      >
                        {!p.img && (
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="3" fill="white" opacity="0.06" />
                            <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                          </svg>
                        )}
                      </div>

                      <div className="proj-body">
                        <h3 className="proj-title">{p.title}</h3>
                        <p className="proj-meta">{p.tech}</p>
                      </div>
                    </div>

                    <p className="proj-desc">{p.desc}</p>

                    <div className="proj-tags" aria-hidden>
                      <span className="tag">UI</span>
                      <span className="tag">Frontend</span>
                      <span className="tag">Demo</span>
                    </div>

                    <div className="proj-actions">
                      <button
                        className="proj-cta"
                        onClick={() => openModal(p)}
                        aria-label={`View details for ${p.title}`}
                      >
                        View
                      </button>

                      {p.repo && (
                        <a className="proj-cta" href={p.repo} target="_blank" rel="noopener noreferrer" title="Repository link">
                          Repo
                        </a>
                      )}
                    </div>
                  </article>
                ))}
          </div>
        </div>
      </section>

      {/* simple modal (inline-styles so no extra CSS needed) */}
      {modalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={modalProject.title}
          tabIndex={-1}
          onClick={(e) => {
            // close when clicking overlay
            if (e.target === e.currentTarget) closeModal();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(180deg, rgba(2,6,23,0.6), rgba(2,6,23,0.85))",
            padding: 20,
          }}
        >
          <div
            role="document"
            style={{
              width: "min(920px, 96%)",
              background: "linear-gradient(180deg, rgba(15,23,36,0.98), rgba(8,12,20,0.98))",
              borderRadius: 14,
              padding: 20,
              boxShadow: "0 30px 80px rgba(2,6,23,0.8)",
              color: "var(--text)",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                right: 12,
                top: 12,
                background: "transparent",
                border: "none",
                color: "rgba(230,238,248,0.9)",
                fontSize: 18,
                cursor: "pointer",
                padding: 8,
              }}
              aria-label="Close"
            >
              ✕
            </button>

            <h3 style={{ marginTop: 6 }}>{modalProject.title}</h3>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>{modalProject.tech}</p>

            <div style={{ display: "flex", gap: 18, marginTop: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: "0 0 320px", minHeight: 180, borderRadius: 10, overflow: "hidden", background: "#07101b" }}>
                {modalProject.img ? (
                  <img src={modalProject.img} alt={modalProject.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ padding: 18, color: "var(--muted)" }}>No image provided</div>
                )}
              </div>

              <div style={{ flex: "1 1 320px" }}>
                <p style={{ lineHeight: 1.6 }}>{modalProject.desc}</p>
                <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderRadius: 999 }}>UI</span>
                  <span style={{ padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderRadius: 999 }}>Frontend</span>
                  <span style={{ padding: "6px 10px", background: "rgba(255,255,255,0.03)", borderRadius: 999 }}>{modalProject.tech.split("•")[0]}</span>
                </div>

                <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
                  {modalProject.href && modalProject.href !== "#" && (
                    <a href={modalProject.href} target="_blank" rel="noreferrer" className="proj-cta">Live</a>
                  )}
                  {modalProject.repo && modalProject.repo !== "#" && (
                    <a href={modalProject.repo} target="_blank" rel="noreferrer" className="proj-cta">Repository</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
