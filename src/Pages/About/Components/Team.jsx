import React from "react";

export default function Team() {
  return (
    <section className="team-section">
      <h2 className="team-title reveal">Meet the Team</h2>

      <p className="team-intro reveal delay-1">
        Built by a team of two passionate students, combining curiosity, creativity, and a shared vision to simplify complex technology.
        What started as an idea quickly turned into a collaborative effort to make atomic clock concepts more structured, accessible, and engaging for learners.
        Through continuous learning and experimentation, we aimed to bridge the gap between theory and real-world understanding.
      </p>

      <div className="team-grid">

        <div className="team-card reveal delay-2">
          <div className="avatar">S</div>
          <h3>Suhani Singh</h3>
          <p>Frontend Developer / Research</p>
        </div>

        <div className="team-card reveal delay-3">
          <div className="avatar">P</div>
          <h3>Pooja Sharma</h3>
          <p>Backend / Integration</p>
        </div>

      </div>
    </section>
  );
}