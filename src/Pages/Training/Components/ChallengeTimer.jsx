// src/pages/TrainingMode/components/ChallengeTimer.jsx
import React from "react";

function formatTime(seconds) {
  return `00:${String(seconds).padStart(2, "0")}`;
}

function ChallengeTimer({ timeLeft, totalTime, phase }) {
  const percentage = Math.max(0, (timeLeft / totalTime) * 100);

  let timerClass = "timer-card";
  if (timeLeft <= 10 && phase === "acquiring") timerClass += " danger";
  else if (timeLeft <= 20 && phase === "acquiring") timerClass += " warning";

  return (
    <section className={timerClass}>
      <span className="panel-label">Time Remaining</span>
      <strong>{formatTime(timeLeft)}</strong>

      <div className="timer-track">
        <div style={{ width: `${percentage}%` }} />
      </div>
    </section>
  );
}

export default ChallengeTimer;
