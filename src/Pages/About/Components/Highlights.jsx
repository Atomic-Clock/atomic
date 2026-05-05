import React, { useEffect } from "react";

export default function Highlights() {
  return (
    <section className="highlights-section">
      <h2 className="highlights-title reveal">Key Highlights</h2>

      <div className="highlights-grid">

        <div className="highlight-card reveal delay-1">
          <h3>Interactive Learning</h3>
          <p>
            Concepts are broken down into simple, structured modules for better understanding.
          </p>
        </div>

        <div className="highlight-card reveal delay-1">
          <h3>Concept to Application</h3>
          <p>
            Bridging theoretical knowledge with real-world atomic clock systems.
          </p>
        </div>

        <div className="highlight-card reveal delay-1">
          <h3>Instrument Integration</h3>
          <p>
            Incorporates practical insights into devices like SMU, wavemeter, and photodetectors.
          </p>
        </div>

        <div className="highlight-card reveal delay-2">
          <h3>Visual Understanding</h3>
          <p>
            Focused on clarity through organized and intuitive presentation.
          </p>
        </div>

        <div className="highlight-card reveal delay-2">
          <h3>Structured Learning Path</h3>
          <p>
            A step-by-step progression from fundamentals to advanced concepts for guided learning.
          </p>
        </div>

      </div>
    </section>
  );
}