import React from "react";

export default function Technologies() {
  return (
    <section className="tech-section">
      <h2 className="tech-title reveal">Technologies Behind This</h2>

      <div className="tech-list">

        <div className="tech-item reveal delay-1">
          <h3>Frontend Development</h3>
          <p>
            Built using React which is a modern framework for dynamic and responsive interfaces.
          </p>
        </div>

        <div className="tech-item reveal delay-2">
          <h3>Structured UI Design</h3>
          <p>
            Focused on clarity, hierarchy, and intuitive navigation for better learning experience.
          </p>
        </div>

        <div className="tech-item reveal delay-3">
          <h3>Hardware Concept Integration</h3>
          <p>
            Incorporates understanding of real-world devices used in atomic clock systems.
          </p>
        </div>

        <div className="tech-item reveal delay-1">
          <h3>Research-Based Content Development</h3>
          <p>
            Content is curated from reliable sources to ensure accuracy and depth.
          </p>
        </div>

        <div className="tech-item reveal delay-2">
          <h3>Modular Learning Architecture</h3>
          <p>
            Designed with a scalable structure to support progressive and organized learning.
          </p>
        </div>

      </div>
    </section>
  );
}