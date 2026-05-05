// src/pages/TrainingMode/components/PerformanceScore.jsx
import React from "react";

function PerformanceScore({ score, finalScore, grade, phase }) {
  const displayedScore = phase === "passed" || phase === "failed" ? finalScore : score.total;

  return (
    <section className="panel score-card">
      <span className="panel-label">Performance Score</span>

      <div className="score-main">
        <strong>{displayedScore}</strong>
        <span>/ 100</span>
      </div>

      <h2>{grade}</h2>

      <div className="score-breakdown">
        <p>Speed <span>{score.speed}</span></p>
        <p>Stability <span>{score.stability}</span></p>
        <p>Noise <span>{score.noise}</span></p>
        <p>PID Smoothness <span>{score.pid}</span></p>
      </div>
    </section>
  );
}

export default PerformanceScore;
