// src/pages/TrainingMode/components/TrainingControls.jsx
import React from "react";

const controlMeta = [
  {
    key: "laserCurrent",
    label: "Laser Current",
    helper: "Controls atomic excitation and resonance stability",
  },
  {
    key: "temperature",
    label: "Temperature",
    helper: "Affects vibration and thermal noise",
  },
  {
    key: "magneticNoise",
    label: "Magnetic Noise",
    helper: "External interference affecting signal stability",
  },
  {
    key: "kp",
    label: "Kp",
    helper: "Controls proportional correction strength",
  },
  {
    key: "ki",
    label: "Ki",
    helper: "Corrects accumulated long-term frequency error",
  },
  {
    key: "kd",
    label: "Kd",
    helper: "Smooths rapid oscillations and overshoot",
  },
];

function getStatus(key, value) {
  if (key === "magneticNoise") {
    if (value <= 3) return "Low";
    if (value <= 6) return "Moderate";
    return "High";
  }

  if (value >= 4 && value <= 6) return "Optimal";
  if (value >= 3 && value <= 7) return "Acceptable";
  return "Risky";
}

function TrainingControls({ controls, updateControl, disabled }) {
  return (
    <section className="panel controls-panel">
      <div className="panel-heading">
        <span className="panel-label">Control Console</span>
        <h2>System Tuning</h2>
      </div>

      <div className="control-list">
        {controlMeta.map((control) => (
          <label className="control-card" key={control.key}>
            <div className="control-row">
              <span>{control.label}</span>
              <strong>{controls[control.key].toFixed(1)}</strong>
            </div>

            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={controls[control.key]}
              disabled={disabled}
              onChange={(event) =>
                updateControl(control.key, Number(event.target.value))
              }
            />

            <div className="control-row muted">
              <small>{control.helper}</small>
              <em>{getStatus(control.key, controls[control.key])}</em>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}

export default TrainingControls;
