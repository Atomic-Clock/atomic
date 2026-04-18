// import React from "react";

// const LockIndicator = ({ locked }) => {
//   return (
//     <div className={`lock ${locked ? "green" : "red"}`}>
//       {locked ? "LOCKED" : "UNLOCKED"}
//     </div>
//   );
// };

// export default LockIndicator;


// import React from "react";

// const LockIndicator = ({ history = [] }) => {

//   // ✅ SAME LOGIC AS GRAPH
//   const getStability = () => {
//     if (history.length < 8) return { locked: false, strength: 0 };

//     const recent = history.slice(-8);

//     const avg =
//       recent.reduce((sum, val) => sum + val, 0) / recent.length;

//     const variance =
//       recent.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) /
//       recent.length;

//     const stability = Math.sqrt(variance);

//     // 🔥 IMPORTANT: threshold relaxed
//     const locked = stability < 0.08;

//     const strength = Math.max(0, 100 - stability * 800);

//     return { locked, strength };
//   };

//   const { locked, strength } = getStability();

//   return (
//     <div className={`lock-container ${locked ? "locked" : "unlocked"}`}>

//       {/* HEADER */}
//       <div className="lock-header">
//         <div className="lock-circle">
//           {locked ? "✔" : "!"}
//         </div>

//         <h3 className="lock-text">
//           {locked ? "SYSTEM LOCKED" : "SYSTEM UNLOCKED"}
//         </h3>
//       </div>

//       {/* BAR */}
//       <div className="lock-bar">
//         <div
//           className="lock-fill"
//           style={{
//             width: `${strength}%`,
//             background: locked ? "#22c55e" : "#ef4444",
//             transition: "0.3s",
//           }}
//         />
//       </div>

//       {/* TEXT */}
//       <p className="lock-desc">
//         {locked
//           ? "Stable frequency → Lock achieved"
//           : "System unstable → oscillation or drift present"}
//       </p>

//       <div className="lock-hint">
//         {locked
//           ? "✔ Graph → Flat line"
//           : "⚠ Graph → Oscillation / Drift"}
//       </div>

//     </div>
//   );
// };

// export default LockIndicator;






































// import React from "react";

// const LockIndicator = ({ locked = false, pointType = "normal" }) => {

//   // 🎨 COLOR BASED ON SYSTEM STATE
//   const getColor = () => {
//     if (pointType === "lock") return "#22c55e";        // 🟢 Stable
//     if (pointType === "oscillation") return "#eab308"; // 🟡 Oscillation
//     if (pointType === "drift") return "#ef4444";       // 🔴 Noise/Drift
//     return "#94a3b8";                                  // ⚪ Normal
//   };

//   // 📊 VISUAL STRENGTH (NO CALCULATION NOW)
//   const getStrength = () => {
//     if (pointType === "lock") return 100;
//     if (pointType === "oscillation") return 65;
//     if (pointType === "drift") return 30;
//     return 50;
//   };

//   return (
//     <div className={`lock-container ${locked ? "locked" : "unlocked"}`}>

//       {/* HEADER */}
//       <div className="lock-header">
//         <div
//           className="lock-circle"
//           style={{
//             background: getColor(),
//             transition: "0.3s ease"
//           }}
//         >
//           {locked ? "✔" : "!"}
//         </div>

//         <h3 className="lock-text">
//           {locked ? "SYSTEM LOCKED" : "SYSTEM UNLOCKED"}
//         </h3>
//       </div>

//       {/* PROGRESS BAR */}
//       <div className="lock-bar">
//         <div
//           className="lock-fill"
//           style={{
//             width: `${getStrength()}%`,
//             background: getColor(),
//             transition: "0.3s ease",
//           }}
//         />
//       </div>

//       {/* DESCRIPTION */}
//       <p className="lock-desc">
//         {pointType === "lock" && "Stable frequency → Lock achieved"}
//         {pointType === "oscillation" && "Oscillations → Tune PID (Kp/Kd)"}
//         {pointType === "drift" && "High noise → Unstable system"}
//         {pointType === "normal" && "System stabilizing..."}
//       </p>

//       {/* HINT */}
//       <div className="lock-hint">
//         {pointType === "lock" && "🟢 Graph → Flat stable line"}
//         {pointType === "oscillation" && "🟡 Graph → Oscillation"}
//         {pointType === "drift" && "🔴 Graph → Drift"}
//         {pointType === "normal" && "⚪ Graph → Transition"}
//       </div>

//     </div>
//   );
// };

// export default LockIndicator;


























import React from "react";

const LockIndicator = ({ history = [], locked = false, pointType = "normal" }) => {

  // ✅ LIVE FLUCTUATION FROM HISTORY
  const getStrength = () => {
    if (!history || history.length < 4) return 10;

    const recent = history.slice(-4).map(p => p.value);

    const avg =
      recent.reduce((a, b) => a + b, 0) / recent.length;

    const variance =
      recent.reduce((a, b) => a + Math.pow(b - avg, 2), 0) /
      recent.length;

    const stdDev = Math.sqrt(variance);

    // 🔥 More responsive scaling
    return Math.max(5, Math.min(100, 100 - stdDev * 900));
  };

  // 🎨 COLOR BASED ON SYSTEM STATE (NOT RANDOM)
  const getColor = () => {
    if (pointType === "lock") return "#22c55e";        // 🟢
    if (pointType === "oscillation") return "#eab308"; // 🟡
    if (pointType === "drift") return "#ef4444";       // 🔴
    return "#94a3b8";                                  // ⚪
  };

  const strength = getStrength();

  return (
    <div className={`lock-container ${locked ? "locked" : "unlocked"}`}>

      {/* HEADER */}
      <div className="lock-header">
        <div
          className="lock-circle"
          style={{
            background: getColor(),
            transition: "0.2s ease"
          }}
        >
          {locked ? "✔" : "!"}
        </div>

        <h3 className="lock-text">
          {locked ? "SYSTEM LOCKED" : "SYSTEM UNLOCKED"}
        </h3>
      </div>

      {/* 🔥 PROGRESS BAR (NOW LIVE) */}
      <div className="lock-bar">
        <div
          className="lock-fill"
          style={{
            width: `${strength}%`,
            background: getColor(),
            transition: "0.15s linear", // 🔥 faster response
          }}
        />
      </div>

      {/* DESCRIPTION */}
      <p className="lock-desc">
        {pointType === "lock" && "Stable frequency → Lock achieved"}
        {pointType === "oscillation" && "Oscillations → Tune PID (Kp/Kd)"}
        {pointType === "drift" && "High noise → Unstable system"}
        {pointType === "normal" && "System stabilizing..."}
      </p>

      {/* HINT */}
      <div className="lock-hint">
        {pointType === "lock" && "🟢 Graph → Flat stable line"}
        {pointType === "oscillation" && "🟡 Graph → Oscillation"}
        {pointType === "drift" && "🔴 Graph → Drift"}
        {pointType === "normal" && "⚪ Graph → Transition"}
      </div>

    </div>
  );
};

export default LockIndicator;