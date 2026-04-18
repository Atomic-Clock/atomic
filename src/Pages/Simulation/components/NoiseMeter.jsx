// import React from "react";

// const NoiseMeter = ({ noise }) => {
//   const level = Math.min(Math.abs(noise) * 100, 100);

//   return (
//     <div className="noise-meter">
//       <h4>Noise</h4>
//       <div className="meter">
//         <div
//           className="level"
//           style={{ height: `${level}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default NoiseMeter;





















// import React, { useMemo } from "react";

// const NoiseMeter = ({ controls = {} }) => {
//   const {
//     temperature = 5,
//     magnetic = 5,
//     laser = 5,
//   } = controls;

//   // ✅ SAME MODEL AS simulateStep (VERY IMPORTANT)
//   const { level, status, color, tempNoise, magneticNoise, laserNoise } =
//     useMemo(() => {
//       // 🔥 Match simulation logic (not random, but intensity-based)

//       const tempNoise = Math.abs(temperature - 5) * 12;   // thermal effect
//       const magneticNoise = magnetic * 10;                // strongest disturbance
//       const laserNoise = Math.abs(laser - 5) * 8;         // tuning instability

//       const total = tempNoise + magneticNoise + laserNoise;

//       const level = Math.min(total, 100);

//       let status = "LOW";
//       let color = "#22c55e";

//       if (level > 35 && level <= 70) {
//         status = "MEDIUM";
//         color = "#eab308";
//       } else if (level > 70) {
//         status = "HIGH";
//         color = "#ef4444";
//       }

//       return {
//         level,
//         status,
//         color,
//         tempNoise,
//         magneticNoise,
//         laserNoise,
//       };
//     }, [temperature, magnetic, laser]);

//   return (
//     <div className="noise-container">

//       {/* HEADER */}
//       <div className="noise-header">
//         <h3>Noise Meter</h3>
//         <p>Environmental disturbance level</p>
//       </div>

//       {/* MAIN METER */}
//       <div className="meter-wrapper">
//         <div className="meter">
//           <div
//             className="level"
//             style={{
//               height: `${level}%`,
//               background: `linear-gradient(to top, ${color}, transparent)`
//             }}
//           />
//         </div>
//       </div>

//       {/* VALUE */}
//       <div className="noise-info">
//         <span className="noise-value">{level.toFixed(0)}%</span>
//         <span className="status" style={{ color }}>
//           {status}
//         </span>
//       </div>

//       {/* BREAKDOWN */}
//       <div className="noise-breakdown">

//         <div className="bar">
//           <span>Temp</span>
//           <div className="bar-bg">
//             <div
//               className="bar-fill"
//               style={{ width: `${Math.min(tempNoise, 100)}%` }}
//             />
//           </div>
//         </div>

//         <div className="bar">
//           <span>Magnetic</span>
//           <div className="bar-bg">
//             <div
//               className="bar-fill"
//               style={{ width: `${Math.min(magneticNoise, 100)}%` }}
//             />
//           </div>
//         </div>

//         <div className="bar">
//           <span>Laser Drift</span>
//           <div className="bar-bg">
//             <div
//               className="bar-fill"
//               style={{ width: `${Math.min(laserNoise, 100)}%` }}
//             />
//           </div>
//         </div>

//       </div>

//       {/* DESCRIPTION */}
//       <div className="noise-desc">
//         {status === "LOW" &&
//           "Stable environment → Graph becomes flat (LOCK possible)."}

//         {status === "MEDIUM" &&
//           "Moderate noise → Oscillations appear in graph."}

//         {status === "HIGH" &&
//           "High disturbance → Drift and unstable frequency."}
//       </div>

//       {/* GRAPH LINK */}
//       <div className="noise-hint">
//         {status === "LOW" && "🟢 Graph: Stable Lock Zone"}
//         {status === "MEDIUM" && "🟡 Graph: Oscillation Zone"}
//         {status === "HIGH" && "🔴 Graph: Drift Zone"}
//       </div>

//     </div>
//   );
// };

// export default NoiseMeter;



































import React, { useMemo } from "react";

const NoiseMeter = ({ controls = {}, noise = 0 }) => {
  const {
    temperature = 5,
    magnetic = 5,
    laser = 5,
  } = controls;

  const {
    level,
    status,
    color,
    tempNoise,
    magneticNoise,
    laserNoise,
  } = useMemo(() => {
    // 🔥 BASE NOISE (FROM REAL SIMULATION)
    const baseNoise = noise * 100;

    // 🔥 COMPONENT BREAKDOWN (VISUAL PURPOSE)
    const tempNoise = Math.abs(temperature - 5) * 10;
    const magneticNoise = magnetic * 12;
    const laserNoise = Math.abs(laser - 5) * 8;

    // 🔥 FINAL LEVEL = mix of real + visual
    const total = baseNoise + (tempNoise + magneticNoise + laserNoise) * 0.3;

    const level = Math.min(total, 100);

    let status = "LOW";
    let color = "#22c55e";

    if (level > 35 && level <= 70) {
      status = "MEDIUM";
      color = "#eab308";
    } else if (level > 70) {
      status = "HIGH";
      color = "#ef4444";
    }

    return {
      level,
      status,
      color,
      tempNoise,
      magneticNoise,
      laserNoise,
    };
  }, [temperature, magnetic, laser, noise]);

  return (
    <div className="noise-container">

      {/* HEADER */}
      <div className="noise-header">
        <h3>Noise Meter</h3>
        <p>Real-time environmental disturbance</p>
      </div>

      {/* MAIN METER */}
      <div className="meter-wrapper">
        <div className="meter">
          <div
            className="level"
            style={{
              height: `${level}%`,
              background: `linear-gradient(to top, ${color}, transparent)`,
              transition: "height 0.3s ease"
            }}
          />
        </div>
      </div>

      {/* VALUE */}
      <div className="noise-info">
        <span className="noise-value">{level.toFixed(0)}%</span>
        <span className="status" style={{ color }}>
          {status}
        </span>
      </div>

      {/* BREAKDOWN */}
      <div className="noise-breakdown">

        <div className="bar">
          <span>Temp</span>
          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${Math.min(tempNoise, 100)}%` }}
            />
          </div>
        </div>

        <div className="bar">
          <span>Magnetic</span>
          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${Math.min(magneticNoise, 100)}%` }}
            />
          </div>
        </div>

        <div className="bar">
          <span>Laser</span>
          <div className="bar-bg">
            <div
              className="bar-fill"
              style={{ width: `${Math.min(laserNoise, 100)}%` }}
            />
          </div>
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="noise-desc">
        {status === "LOW" &&
          "Stable environment → Lock achievable (flat graph)."}

        {status === "MEDIUM" &&
          "Moderate noise → Oscillations in graph."}

        {status === "HIGH" &&
          "High disturbance → Drift & instability."}
      </div>

      {/* HINT */}
      <div className="noise-hint">
        {status === "LOW" && "🟢 Stable Zone"}
        {status === "MEDIUM" && "🟡 Oscillation Zone"}
        {status === "HIGH" && "🔴 Drift Zone"}
      </div>

    </div>
  );
};

export default NoiseMeter;