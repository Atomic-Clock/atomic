// import React from "react";

// const ExplanationPanel = ({ message }) => {
//   return (
//     <div className="explanation-panel">

//       {/* HEADER */}
//       <div className="explain-header">
//         <h3>System Insight</h3>
//         <p>Real-time system behavior analysis</p>
//       </div>

//       {/* DYNAMIC MESSAGE */}
//       <div className="explain-message">
//         <p>{message}</p>
//       </div>

//       {/* QUICK GUIDE */}
//       <div className="explain-guide">
//         <h4>Quick Understanding</h4>

//         <ul>
//           <li>🟢 Stable → Proper tuning (LOCK)</li>
//           <li>🟡 Oscillation → High Kp / low Kd</li>
//           <li>🔴 Drift → High noise or temperature</li>
//           <li>⚪ Slow response → Low Kp</li>
//         </ul>
//       </div>

//     </div>
//   );
// };

// export default ExplanationPanel;














// import React from "react";

// const ExplanationPanel = ({ message, state, controls }) => {

//   const { locked, pointType, noise, drift } = state;

//   // 🎯 STATUS DETECTION
//   let status = "STABILIZING";
//   let color = "#94a3b8";

//   if (locked) {
//     status = "LOCKED";
//     color = "#22c55e";
//   } else if (pointType === "oscillation") {
//     status = "OSCILLATING";
//     color = "#eab308";
//   } else if (pointType === "drift") {
//     status = "DRIFT";
//     color = "#ef4444";
//   }

//   return (
//     <div className="explanation-panel">

//       {/* HEADER */}
//       <div className="explain-header">
//         <div className="status-badge" style={{ background: color }}>
//           {status}
//         </div>

//         <div>
//           <h3>System Insight</h3>
//           <p>Live simulation analysis</p>
//         </div>
//       </div>

//       {/* CORE MESSAGE */}
//       <div className="explain-message">
//         <p>{message}</p>
//       </div>

//       {/* 🔥 NEW GRID LAYOUT */}
//       <div className="explain-grid">

//         {/* LEFT → SYSTEM DATA */}
//         <div className="explain-box">
//           <h4>System Readings</h4>

//           <div className="explain-item">
//             <span>Frequency</span>
//             <span>{state.frequency.toFixed(3)}</span>
//           </div>

//           <div className="explain-item">
//             <span>Target</span>
//             <span>{state.targetFrequency}</span>
//           </div>

//           <div className="explain-item">
//             <span>Drift</span>
//             <span>{drift.toFixed(3)}</span>
//           </div>

//           <div className="explain-item">
//             <span>Noise</span>
//             <span>{noise.toFixed(3)}</span>
//           </div>
//         </div>

//         {/* RIGHT → CONTROLS */}
//         <div className="explain-box">
//           <h4>Control Inputs</h4>

//           <div className="explain-item">
//             <span>Laser</span>
//             <span>{controls.laser.toFixed(2)}</span>
//           </div>

//           <div className="explain-item">
//             <span>Temperature</span>
//             <span>{controls.temperature.toFixed(2)}</span>
//           </div>

//           <div className="explain-item">
//             <span>Magnetic</span>
//             <span>{controls.magnetic.toFixed(2)}</span>
//           </div>

//           <div className="explain-item">
//             <span>Kp / Ki / Kd</span>
//             <span>
//               {controls.Kp.toFixed(2)} / {controls.Ki.toFixed(2)} / {controls.Kd.toFixed(2)}
//             </span>
//           </div>
//         </div>

//       </div>

//       {/* 🧠 BEHAVIOR EXPLANATION */}
//       <div className="explain-action">
//         <h4>System Behavior</h4>

//         {locked && (
//           <p>
//             System has achieved lock. Frequency is stable and matches the target.
//           </p>
//         )}

//         {pointType === "oscillation" && (
//           <p>
//             Oscillations detected due to high proportional gain (Kp). Reduce Kp or increase Kd.
//           </p>
//         )}

//         {pointType === "drift" && (
//           <p>
//             High noise or environmental disturbance is causing drift. Reduce temperature or magnetic noise.
//           </p>
//         )}

//         {!locked && pointType === "normal" && (
//           <p>
//             System is stabilizing. PID controller is adjusting frequency toward target.
//           </p>
//         )}
//       </div>

//     </div>
//   );
// };

// export default ExplanationPanel;














import React from "react";

const ExplanationPanel = ({ message, state, controls }) => {

  const { locked, pointType, noise, drift, frequency, targetFrequency } = state;

  // 🎯 STATUS DETECTION (SYNCED WITH SYSTEM)
  let status = "STABILIZING";
  let color = "#94a3b8";

  if (locked) {
    status = "LOCKED";
    color = "#22c55e";   // 🟢
  } 
  else if (pointType === "oscillation") {
    status = "OSCILLATING";
    color = "#eab308";   // 🟡
  } 
  else if (pointType === "drift") {
    status = "DRIFT";
    color = "#ef4444";   // 🔴
  }

  return (
    <div className="explanation-panel">

      {/* 🔥 HEADER */}
      <div className="explain-header">

        <div className="status-wrapper">
          <div 
            className="status-badge soft"
            style={{ "--status-color": color }}
          >
            {status}
          </div>
        </div>

        <div className="explain-title">
          <h3>System Insight</h3>
          <p>Live simulation analysis</p>
        </div>

      </div>

      {/* 📢 CORE MESSAGE */}
      <div className="explain-message">
        <p>{message}</p>
      </div>

      {/* 📊 GRID */}
      <div className="explain-grid">

        {/* LEFT → SYSTEM */}
        <div className="explain-box">
          <h4>System Readings</h4>

          <div className="explain-item">
            <span>Frequency</span>
            <span>{frequency.toFixed(3)}</span>
          </div>

          <div className="explain-item">
            <span>Target</span>
            <span>{targetFrequency}</span>
          </div>

          <div className="explain-item">
            <span>Drift</span>
            <span>{drift.toFixed(3)}</span>
          </div>

          <div className="explain-item">
            <span>Noise</span>
            <span>{noise.toFixed(3)}</span>
          </div>
        </div>

        {/* RIGHT → CONTROLS */}
        <div className="explain-box">
          <h4>Control Inputs</h4>

          <div className="explain-item">
            <span>Laser</span>
            <span>{controls.laser.toFixed(2)}</span>
          </div>

          <div className="explain-item">
            <span>Temperature</span>
            <span>{controls.temperature.toFixed(2)}</span>
          </div>

          <div className="explain-item">
            <span>Magnetic</span>
            <span>{controls.magnetic.toFixed(2)}</span>
          </div>

          <div className="explain-item">
            <span>Kp / Ki / Kd</span>
            <span>
              {controls.Kp.toFixed(2)} / {controls.Ki.toFixed(2)} / {controls.Kd.toFixed(2)}
            </span>
          </div>
        </div>

      </div>

      {/* 🧠 BEHAVIOR */}
      <div className="explain-action">
        <h4>System Behavior</h4>

        {locked && (
          <p>
            🟢 System Locked → Frequency is stable and matches the target.  
            Noise and drift are minimal, PID is perfectly tuned.
          </p>
        )}

        {pointType === "oscillation" && (
          <p>
            🟡 Oscillation → High Kp is causing overshoot.  
            Reduce Kp or increase Kd to stabilize.
          </p>
        )}

        {pointType === "drift" && (
          <p>
            🔴 Drift → Environmental noise is too high.  
            Reduce temperature or magnetic disturbance.
          </p>
        )}

        {!locked && pointType === "normal" && (
          <p>
            ⚪ Stabilizing → System is approaching target.  
            PID controller is correcting the error gradually.
          </p>
        )}
      </div>

    </div>
  );
};

export default ExplanationPanel;