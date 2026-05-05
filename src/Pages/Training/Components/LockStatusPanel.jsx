// src/pages/TrainingMode/components/LockStatusPanel.jsx
import React from "react";

function LockStatusPanel({ phase, locked, drift, noise }) {
  let title = "System Unlocked";
  let message = "Tune controls to approach atomic resonance.";
  let className = "status-card unlocked";

  if (phase === "acquiring") {
    title = locked ? "Lock Detected" : "Acquiring Lock";
    message = locked
      ? "Frequency response is inside the lock threshold."
      : "Adjust laser current, noise, and PID values.";
    className = locked ? "status-card locked" : "status-card acquiring";
  }

  if (phase === "holding") {
    title = "Lock Stability Test";
    message = "Maintain low drift until the hold timer completes.";
    className = "status-card locked";
  }

  if (phase === "passed") {
    title = "Certification Passed";
    message = "Stable lock maintained successfully.";
    className = "status-card passed";
  }

  if (phase === "failed") {
    title = "Challenge Failed";
    message = "Lock was not acquired or stability was lost.";
    className = "status-card failed";
  }

  return (
    <section className={className}>
      <div className="status-orb">{locked || phase === "passed" ? "✓" : "!"}</div>
      <h2>{title}</h2>
      <p>{message}</p>

      <div className="status-metrics">
        <span>Drift <strong>{Math.abs(drift).toFixed(2)}</strong></span>
        <span>Noise <strong>{noise.toFixed(2)}</strong></span>
      </div>
    </section>
  );
}

export default LockStatusPanel;
