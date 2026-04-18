// import React from "react";

// const ModePanel = ({ setControls }) => {
//   const presets = {
//     ideal: { Kp: 0.5, Ki: 0.1, Kd: 0.2, temperature: 3, magnetic: 2 },
//     unstable: { Kp: 2, Ki: 0, Kd: 0, temperature: 5, magnetic: 5 },
//     highNoise: { Kp: 0.5, Ki: 0.1, Kd: 0.2, temperature: 9, magnetic: 9 },
//   };

//   return (
//     <div className="modes">
//       <h3>Presets</h3>

//       <button onClick={() => setControls(presets.ideal)}>
//         Ideal
//       </button>

//       <button onClick={() => setControls(presets.unstable)}>
//         Unstable
//       </button>

//       <button onClick={() => setControls(presets.highNoise)}>
//         High Noise
//       </button>
//     </div>
//   );
// };

// export default ModePanel;




















import React, { useState } from "react";

const ModePanel = ({ setControls, resetSimulation }) => {
  const [active, setActive] = useState(null);

  const presets = {
    ideal: {
      name: "Ideal Condition",
      desc: "Balanced parameters → stable system (LOCK achievable)",
      values: {
        laser: 5,
        temperature: 3,
        magnetic: 2,
        Kp: 0.5,
        Ki: 0.1,
        Kd: 0.2,
      },
    },

    unstable: {
      name: "Unstable System",
      desc: "High Kp → oscillations (over-correction)",
      values: {
        laser: 5,
        temperature: 5,
        magnetic: 5,
        Kp: 2,
        Ki: 0,
        Kd: 0,
      },
    },

    highNoise: {
      name: "High Noise Environment",
      desc: "Extreme disturbance → drift & instability",
      values: {
        laser: 5,
        temperature: 9,
        magnetic: 9,
        Kp: 0.5,
        Ki: 0.1,
        Kd: 0.2,
      },
    },
  };

  const handlePreset = (key) => {
    const selected = presets[key];

    // ✅ Apply controls
    setControls(selected.values);

    // ✅ Reset simulation (VERY IMPORTANT)
    if (resetSimulation) resetSimulation();

    // ✅ Set active UI
    setActive(key);
  };

  return (
    <div className="modes">

      {/* HEADER */}
      <div className="modes-header">
        <h3>Control Modes</h3>
        <p>Select scenario to test system behavior</p>
      </div>

      {/* PRESETS */}
      <div className="preset-list">
        {Object.keys(presets).map((key) => (
          <button
            key={key}
            className={`preset-btn ${active === key ? "active" : ""}`}
            onClick={() => handlePreset(key)}
          >
            <div className="preset-title">
              {presets[key].name}
            </div>

            <div className="preset-desc">
              {presets[key].desc}
            </div>
          </button>
        ))}
      </div>

      {/* INFO */}
      {active && (
        <div className="preset-info">
          <p>
            Active Mode: <strong>{presets[active].name}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ModePanel;
