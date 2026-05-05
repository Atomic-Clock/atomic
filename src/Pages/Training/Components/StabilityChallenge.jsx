// src/pages/TrainingMode/components/StabilityChallenge.jsx
import React from "react";

function StabilityChallenge({ phase, stabilityProgress, holdTime }) {
  const percentage = Math.min(100, (stabilityProgress / holdTime) * 100);

  return (
    <section className="panel stability-card">
      <span className="panel-label">Lock Stability Challenge</span>
      <h2>{stabilityProgress.toFixed(1)} / {holdTime}s</h2>

      <div className="stability-track">
        <div style={{ width: `${percentage}%` }} />
      </div>

      <p>
        {phase === "holding"
          ? "Keep drift inside the stability band."
          : "Begins after frequency lock is achieved."}
      </p>
    </section>
  );
}

export default StabilityChallenge;
