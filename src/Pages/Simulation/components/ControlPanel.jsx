// import React from "react";
// const ControlPanel = ({ controls, setControls }) => {
//   const handleChange = (key, value) => {
//     setControls({ ...controls, [key]: parseFloat(value) });
//   };

//   return (
//     <div className="panel">
//       <h3>Control Panel</h3>

//       {["laser", "temperature", "magnetic"].map((item) => (
//         <div key={item}>
//           <label>{item}: {controls[item]}</label>
//           <input
//             type="range"
//             min="0"
//             max="10"
//             step="0.1"
//             value={controls[item]}
//             onChange={(e) => handleChange(item, e.target.value)}
//           />
//         </div>
//       ))}

//       {["Kp", "Ki", "Kd"].map((item) => (
//         <div key={item}>
//           <label>{item}: {controls[item]}</label>
//           <input
//             type="range"
//             min="0"
//             max="2"
//             step="0.01"
//             value={controls[item]}
//             onChange={(e) => handleChange(item, e.target.value)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ControlPanel;






















// import React, { useState } from "react";

// const ControlPanel = ({ controls, setControls }) => {
//   const [open, setOpen] = useState(true);
//   const [activeInfo, setActiveInfo] = useState(null);

//   const handleChange = (key, value) => {
//     setControls({
//       ...controls,
//       [key]: parseFloat(value),
//     });
//   };

//   const InfoBox = ({ title, text }) => (
//     <div className="info-box">
//       <h4>{title}</h4>
//       <p>{text}</p>
//     </div>
//   );

//   const RangeMeter = ({ value, max }) => {
//     const percent = (value / max) * 100;

//     let color = "#22c55e";
//     if (percent > 60) color = "#facc15";
//     if (percent > 85) color = "#ef4444";

//     return (
//       <div className="range-meter">
//         <div
//           className="range-fill"
//           style={{ width: `${percent}%`, background: color }}
//         />
//       </div>
//     );
//   };

//   const ControlItem = ({
//     label,
//     value,
//     max,
//     step,
//     onChange,
//     hint,
//     infoTitle,
//     infoText,
//   }) => (
//     <div className="control-item">

//       {/* LABEL */}
//       <div
//         className="control-label"
//         onClick={() =>
//           setActiveInfo(activeInfo === label ? null : label)
//         }
//       >
//         <strong>{label}</strong>
//         <span>{value.toFixed(2)}</span>
//       </div>

//       {/* SLIDER + METER */}
//       <div className="slider-row">
//         <input
//           type="range"
//           min="0"
//           max={max}
//           step={step}
//           value={value}
//           onChange={onChange}
//         />

//         <RangeMeter value={value} max={max} />
//       </div>

//       <p className="hint">{hint}</p>

//       {/* INFO BOX */}
//       {activeInfo === label && (
//         <InfoBox title={infoTitle} text={infoText} />
//       )}
//     </div>
//   );

//   return (
//     <div className={`control-panel ${open ? "open" : "closed"}`}>

//       {/* HEADER */}
//       <div className="panel-header-clean">
//         <h2>Control Panel</h2>

//         <button
//           className="panel-toggle-btn"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? "◀" : "▶"}
//         </button>
//       </div>

//       {/* ✅ TOGGLE CONTENT FIX */}
//       {open && (
//         <div className="panel-content">

//           <h3 className="section-title">Control Settings</h3>

//           {/* ENVIRONMENT */}
//           <div className="section">
//             <h3 className="section-heading">Environment Controls</h3>

//             <ControlItem
//               label="Laser Current"
//               value={controls.laser}
//               max={10}
//               step={0.1}
//               onChange={(e) => handleChange("laser", e.target.value)}
//               hint="Controls atomic excitation and resonance stability"
//               infoTitle="Laser Current"
//               infoText="Laser current determines excitation strength of atomic transition. Too high causes detuning, too low weakens signal lock."
//             />

//             <ControlItem
//               label="Temperature"
//               value={controls.temperature}
//               max={10}
//               step={0.1}
//               onChange={(e) => handleChange("temperature", e.target.value)}
//               hint="Affects atomic vibration and thermal noise"
//               infoTitle="Temperature Effect"
//               infoText="Higher temperature increases atomic motion leading to frequency drift and reduced lock stability."
//             />

//             <ControlItem
//               label="Magnetic Noise"
//               value={controls.magnetic}
//               max={10}
//               step={0.1}
//               onChange={(e) => handleChange("magnetic", e.target.value)}
//               hint="External interference affecting signal stability"
//               infoTitle="Magnetic Interference"
//               infoText="External magnetic fields disturb atomic transitions causing jitter and noise in frequency output."
//             />
//           </div>

//           {/* PID */}
//           <div className="section">
//             <h3 className="section-heading">PID Controller</h3>

//             <ControlItem
//               label="Kp"
//               value={controls.Kp}
//               max={2}
//               step={0.01}
//               onChange={(e) => handleChange("Kp", e.target.value)}
//               hint="Controls immediate error correction"
//               infoTitle="Proportional Gain (Kp)"
//               infoText="High Kp reacts aggressively to errors but may cause oscillations in system response."
//             />

//             <ControlItem
//               label="Ki"
//               value={controls.Ki}
//               max={2}
//               step={0.01}
//               onChange={(e) => handleChange("Ki", e.target.value)}
//               hint="Removes long-term drift error"
//               infoTitle="Integral Gain (Ki)"
//               infoText="Ki eliminates accumulated error but too high value leads to overshoot and instability."
//             />

//             <ControlItem
//               label="Kd"
//               value={controls.Kd}
//               max={2}
//               step={0.01}
//               onChange={(e) => handleChange("Kd", e.target.value)}
//               hint="Stabilizes system response"
//               infoTitle="Derivative Gain (Kd)"
//               infoText="Kd reduces oscillations and smooths system response to sudden changes."
//             />
//           </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default ControlPanel;















import React, { useState } from "react";

const ControlPanel = ({ controls, setControls }) => {
  const [open, setOpen] = useState(true);
  const [activeInfo, setActiveInfo] = useState(null);

  const handleChange = (key, value) => {
    setControls({
      ...controls,
      [key]: parseFloat(value),
    });
  };

  const InfoBox = ({ title, text }) => (
    <div className="info-box">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );

  // ✅ FIX 1: stable color logic (no flicker changes)
  const getColor = (percent) => {
    if (percent > 85) return "#ef4444";
    if (percent > 60) return "#facc15";
    return "#22c55e";
  };

  const RangeMeter = ({ value, max }) => {
    const safeValue = isNaN(value) ? 0 : value;
    const percent = Math.min((safeValue / max) * 100, 100);
    const color = getColor(percent);

    return (
      <div className="range-meter">
        <div
          className="range-fill"
          style={{
            width: `${percent}%`,
            background: color,
            transition: "width 0.25s ease, background 0.25s ease",
          }}
        />
      </div>
    );
  };

  const ControlItem = ({
    label,
    value,
    max,
    step,
    onChange,
    hint,
    infoTitle,
    infoText,
  }) => (
    <div className="control-item">

      <div
        className="control-label"
        onClick={() =>
          setActiveInfo((prev) => (prev === label ? null : label))
        }
      >
        <strong>{label}</strong>
        <span>{value.toFixed(2)}</span>
      </div>

      <div className="slider-row">
        <input
          type="range"
          min="0"
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />

        <RangeMeter value={value} max={max} />
      </div>

      <p className="hint">{hint}</p>

      {activeInfo === label && (
        <InfoBox title={infoTitle} text={infoText} />
      )}
    </div>
  );

  return (
    <div className={`control-panel ${open ? "open" : "closed"}`}>

      <div className="panel">

  {/* HEADER WITH TOGGLE */}
  <div 
    className="panel-header-toggle"
    onClick={() => setOpen(!open)}
  >
    <span className={`arrow ${open ? "open" : ""}`}>
      ▶
    </span>

    <h3>Control Panel</h3>
  </div>

  {/* CONTENT */}
  {open && (
    <div className="panel-body">
      {/* your existing controls */}
    </div>
  )}

</div>

      {/* FIX 2: avoid full unmount flicker */}
      <div className="panel-content" style={{
        maxHeight: open ? "2000px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s ease"
      }}>

        <h3 className="section-title">Control Settings</h3>

        <div className="section">
          <h3 className="section-heading">Environment Controls</h3>

          <ControlItem
            label="Laser Current"
            value={controls.laser}
            max={10}
            step={0.1}
            onChange={(e) => handleChange("laser", e.target.value)}
            hint="Controls atomic excitation and resonance stability"
            infoTitle="Laser Current"
            infoText="Laser current determines excitation strength of atomic transition. Too high causes detuning, too low weakens signal lock."
          />

          <ControlItem
            label="Temperature"
            value={controls.temperature}
            max={10}
            step={0.1}
            onChange={(e) => handleChange("temperature", e.target.value)}
            hint="Affects atomic vibration and thermal noise"
            infoTitle="Temperature Effect"
            infoText="Higher temperature increases atomic motion leading to frequency drift and reduced lock stability."
          />

          <ControlItem
            label="Magnetic Noise"
            value={controls.magnetic}
            max={10}
            step={0.1}
            onChange={(e) => handleChange("magnetic", e.target.value)}
            hint="External interference affecting signal stability"
            infoTitle="Magnetic Interference"
            infoText="External magnetic fields disturb atomic transitions causing jitter and noise in frequency output."
          />
        </div>

        <div className="section">
          <h3 className="section-heading">PID Controller</h3>

          <ControlItem
            label="Kp"
            value={controls.Kp}
            max={2}
            step={0.01}
            onChange={(e) => handleChange("Kp", e.target.value)}
            hint="Controls immediate error correction"
            infoTitle="Proportional Gain (Kp)"
            infoText="High Kp reacts aggressively to errors but may cause oscillations in system response."
          />

          <ControlItem
            label="Ki"
            value={controls.Ki}
            max={2}
            step={0.01}
            onChange={(e) => handleChange("Ki", e.target.value)}
            hint="Removes long-term drift error"
            infoTitle="Integral Gain (Ki)"
            infoText="Ki eliminates accumulated error but too high value leads to overshoot and instability."
          />

          <ControlItem
            label="Kd"
            value={controls.Kd}
            max={2}
            step={0.01}
            onChange={(e) => handleChange("Kd", e.target.value)}
            hint="Stabilizes system response"
            infoTitle="Derivative Gain (Kd)"
            infoText="Kd reduces oscillations and smooths system response to sudden changes."
          />
        </div>

      </div>
    </div>
  );
};

export default ControlPanel;