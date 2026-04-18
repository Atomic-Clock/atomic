// import React from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const StabilityGraph = ({ history }) => {
//   const data = {
//     labels: history.map((_, i) => i),
//     datasets: [
//       {
//         label: "Frequency",
//         data: history,
//         tension: 0.4,
//         borderWidth: 2,
//         pointRadius: 0, // cleaner graph
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     animation: false, // real-time feel
//     plugins: {
//       legend: {
//         labels: {
//           color: "white",
//         },
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "white",
//         },
//         title: {
//           display: true,
//           text: "Time",
//           color: "white",
//         },
//       },
//       y: {
//         min: 0,
//         max: 20,
//         ticks: {
//           color: "white",
//         },
//         title: {
//           display: true,
//           text: "Frequency",
//           color: "white",
//         },
//       },
//     },
//   };

//   return (
//     <div className="graph-container">
//       <Line data={data} options={options} />

//       {/* 👇 Learning Guide */}
//       <div className="graph-info">
//         <p>🟢 Flat Line → Stable System (LOCKED)</p>
//         <p>🟡 Oscillation → Poor PID tuning</p>
//         <p>🔴 Rising/Falling → Drift (Unstable)</p>
//       </div>
//     </div>
//   );
// };

// export default StabilityGraph;































// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const StabilityGraph = ({ history = [], running, panelOpen }) => {
//   const [selectedPoint, setSelectedPoint] = useState(null);
//   const [fullscreen, setFullscreen] = useState(false);

//   // 🧠 CLASSIFICATION (FINAL)
//   const getPointType = (index) => {
//     if (index < 6) return "normal";

//     const slice = history.slice(index - 6, index);

//     const avg =
//       slice.reduce((a, b) => a + b, 0) / slice.length;

//     const variance =
//       slice.reduce((a, b) => a + Math.pow(b - avg, 2), 0) /
//       slice.length;

//     const stdDev = Math.sqrt(variance);

//     const drift = Math.abs(history[index] - 10);

//     // 🟢 LOCK
//     if (stdDev < 0.03 && drift < 0.15) return "locked";

//     // 🔴 HIGH NOISE / DRIFT
//     if (stdDev > 0.35) return "noise";

//     // 🟡 OSCILLATION
//     if (stdDev > 0.12) return "oscillation";

//     return "normal"; // ⚪
//   };

//   // 🎨 COLORS
//   const pointColors = history.map((_, i) => {
//     const type = getPointType(i);

//     if (type === "locked") return "#22c55e";      // green
//     if (type === "oscillation") return "#facc15"; // yellow
//     if (type === "noise") return "#ef4444";       // red
//     return "#ffffff";                             // white
//   });

//   // 🔘 POINT SIZE
//   const pointRadius = history.map((_, i) => {
//     const type = getPointType(i);
//     return type === "locked" ? 5 : 2;
//   });

//   // 📊 DATA
//   const data = {
//     labels: history.map((_, i) => i),
//     datasets: [
//       {
//         label: "Frequency vs Time",
//         data: history,
//         tension: 0.35,
//         borderWidth: 2,
//         borderColor: "#6366f1",
//         pointBackgroundColor: pointColors,
//         pointRadius: pointRadius,
//       },
//     ],
//   };

//   // ⚙️ OPTIONS
//   const options = {
//     responsive: true,
//     animation: false,
//     maintainAspectRatio: false,

//     plugins: {
//       legend: {
//         labels: { color: "white" },
//       },
//       tooltip: {
//         callbacks: {
//           label: (ctx) =>
//             `Freq: ${ctx.raw.toFixed(3)}`,
//         },
//       },
//     },

//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;

//         setSelectedPoint({
//           time: index,
//           value: history[index],
//           type: getPointType(index),
//         });
//       }
//     },

//     scales: {
//       x: {
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Time",
//           color: "white",
//         },
//       },
//       y: {
//         min: 0,
//         max: 20,
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Frequency",
//           color: "white",
//         },
//       },
//     },
//   };

//   return (
//     <div
//       className={`graph-container ${
//         fullscreen ? "fullscreen" : ""
//       } ${panelOpen ? "panel-open" : "panel-closed"}`}
//       style={{ height: fullscreen ? "90vh" : "400px" }}
//     >
//       {/* HEADER */}
//       <div className="graph-header">
//         <div>
//           <h3>Real-Time Frequency Stability</h3>
//           <p>
//             {running
//               ? "● Running (Live Simulation)"
//               : "⏸ Paused"}
//           </p>
//         </div>

//         <button
//           className="fullscreen-btn"
//           onClick={() => setFullscreen(!fullscreen)}
//         >
//           {fullscreen ? "Exit" : "Fullscreen"}
//         </button>
//       </div>

//       {/* GRAPH */}
//       <Line data={data} options={options} />

//       {/* POINT INFO */}
//       {selectedPoint && (
//         <div className="point-info">
//           <h4>Selected Point</h4>
//           <p>Time: {selectedPoint.time}</p>
//           <p>Frequency: {selectedPoint.value.toFixed(3)}</p>
//           <p>
//             Status:{" "}
//             {selectedPoint.type === "locked" && "🟢 LOCKED"}
//             {selectedPoint.type === "oscillation" && "🟡 OSCILLATING"}
//             {selectedPoint.type === "noise" && "🔴 NOISE"}
//             {selectedPoint.type === "normal" && "⚪ NORMAL"}
//           </p>
//         </div>
//       )}

//       {/* GUIDE */}
//       <div className="graph-info">
//         <p>🟢 Lock → Stable flat line</p>
//         <p>🟡 Oscillation → High Kp</p>
//         <p>🔴 Noise → Temperature / Magnetic disturbance</p>
//         <p>⚪ Normal → Transition phase</p>
//       </div>
//     </div>
//   );
// };

// export default StabilityGraph;



















// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const StabilityGraph = ({ history = [], running, panelOpen }) => {
//   const [selectedPoint, setSelectedPoint] = useState(null);
//   const [fullscreen, setFullscreen] = useState(false);

//   // ✅ SAFETY: ensure at least 2 points
//   const safeHistory =
//     history.length > 1 ? history : [10, 10];

//   // 🔒 LOCK DETECTION
//   const isLocked = (index) => {
//     if (index < 6) return false;

//     const slice = safeHistory.slice(index - 6, index);

//     const avg =
//       slice.reduce((a, b) => a + b, 0) / slice.length;

//     const variance =
//       slice.reduce((a, b) => a + Math.pow(b - avg, 2), 0) /
//       slice.length;

//     return Math.sqrt(variance) < 0.06;
//   };

//   // 🔴 DRIFT DETECTION
//   const isDrifting = (value) => {
//     return Math.abs(value - 10) > 1.2;
//   };

//   // 🟡 OSCILLATION DETECTION
//   const isOscillating = (index) => {
//     if (index < 4) return false;

//     const a = safeHistory[index];
//     const b = safeHistory[index - 1];
//     const c = safeHistory[index - 2];

//     return (a > b && b < c) || (a < b && b > c);
//   };

//   const data = {
//     labels: safeHistory.map((_, i) => i),
//     datasets: [
//       {
//         label: "Frequency",
//         data: safeHistory,
//         tension: 0.35,
//         borderWidth: 2,
//         borderColor: "#6366f1",

//         pointRadius: 3,

//         pointBackgroundColor: safeHistory.map((v, i) => {
//           if (isLocked(i)) return "#22c55e";      // 🟢
//           if (isDrifting(v)) return "#ef4444";    // 🔴
//           if (isOscillating(i)) return "#eab308"; // 🟡
//           return "#ffffff";                       // ⚪
//         }),
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     animation: false,
//     maintainAspectRatio: false,

//     plugins: {
//       legend: {
//         labels: { color: "white" },
//       },
//     },

//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;

//         setSelectedPoint({
//           time: index,
//           value: safeHistory[index],
//           locked: isLocked(index),
//         });
//       }
//     },

//     scales: {
//       x: {
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Time",
//           color: "white",
//         },
//       },
//       y: {
//         min: 0,
//         max: 20,
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Frequency",
//           color: "white",
//         },
//       },
//     },
//   };

//   return (
//     <div
//       className={`graph-container ${
//         fullscreen ? "fullscreen" : ""
//       } ${panelOpen ? "panel-open" : ""}`}
//       style={{ height: fullscreen ? "90vh" : "400px" }}
//     >

//       {/* HEADER */}
//       <div className="graph-header">
//         <div>
//           <h3>Real-Time Frequency Stability</h3>
//           <p>
//             {running
//               ? "● Running (Live Simulation)"
//               : "⏸ Paused"}
//           </p>
//         </div>

//         <button
//           className="fullscreen-btn"
//           onClick={() => setFullscreen(!fullscreen)}
//         >
//           {fullscreen ? "Exit" : "Fullscreen"}
//         </button>
//       </div>

//       {/* GRAPH */}
//       <Line data={data} options={options} />

//       {/* POINT INFO */}
//       {selectedPoint && (
//         <div className="point-info">
//           <h4>Selected Point</h4>
//           <p>Time: {selectedPoint.time}</p>
//           <p>Freq: {selectedPoint.value.toFixed(3)}</p>
//           <p>
//             {selectedPoint.locked
//               ? "LOCKED 🟢"
//               : "UNSTABLE"}
//           </p>
//         </div>
//       )}

//       {/* GUIDE */}
//       <div className="graph-info">
//         <p>🟢 Lock → Stable</p>
//         <p>⚪ Normal</p>
//         <p>🟡 Oscillation</p>
//         <p>🔴 Drift</p>
//       </div>
//     </div>
//   );
// };

// export default StabilityGraph;
























// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const StabilityGraph = ({ history = [], running, panelOpen }) => {
//   const [selectedPoint, setSelectedPoint] = useState(null);
//   const [fullscreen, setFullscreen] = useState(false);

//   // 🔒 LOCK DETECTION (same as system)
//   const isStable = (index) => {
//     if (index < 5) return false;

//     const slice = history.slice(index - 5, index);

//     const avg =
//       slice.reduce((a, b) => a + b, 0) / slice.length;

//     const variance =
//       slice.reduce((a, b) => a + Math.pow(b - avg, 2), 0) /
//       slice.length;

//     return Math.sqrt(variance) < 0.05;
//   };

//   const data = {
//     labels: history.map((_, i) => i),
//     datasets: [
//       {
//         label: "Frequency",
//         data: history,
//         tension: 0.35,
//         borderWidth: 2,
//         borderColor: "#6366f1",

//         pointRadius: history.map((_, i) =>
//           isStable(i) ? 5 : 2
//         ),

//         pointBackgroundColor: history.map((_, i) =>
//           isStable(i) ? "#22c55e" : "#ffffff"
//         ),
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     animation: false,
//     maintainAspectRatio: false,

//     plugins: {
//       legend: {
//         labels: { color: "white" },
//       },
//       tooltip: {
//         callbacks: {
//           label: (ctx) =>
//             `Freq: ${ctx.raw.toFixed(3)}`,
//         },
//       },
//     },

//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;

//         setSelectedPoint({
//           time: index,
//           value: history[index],
//           stable: isStable(index),
//         });
//       }
//     },

//     scales: {
//       x: {
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Time",
//           color: "white",
//         },
//       },
//       y: {
//         min: 0,
//         max: 20,
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Frequency",
//           color: "white",
//         },
//       },
//     },
//   };

//   return (
//     <div
//       className={`graph-container ${
//         fullscreen ? "fullscreen" : ""
//       } ${panelOpen ? "panel-open" : ""}`}
//       style={{ height: fullscreen ? "90vh" : "400px" }}
//     >

//       {/* HEADER */}
//       <div className="graph-header">
//         <div>
//           <h3>Real-Time Frequency Stability</h3>
//           <p>
//             {running
//               ? "● Running (Live Simulation)"
//               : "⏸ Paused"}
//           </p>
//         </div>

//         <button
//           className="fullscreen-btn"
//           onClick={() => setFullscreen(!fullscreen)}
//         >
//           {fullscreen ? "Exit" : "Fullscreen"}
//         </button>
//       </div>

//       {/* GRAPH */}
//       <Line data={data} options={options} />

//       {/* POINT INFO */}
//       {selectedPoint && (
//         <div className="point-info">
//           <h4>Selected Point</h4>
//           <p>Time: {selectedPoint.time}</p>
//           <p>Freq: {selectedPoint.value.toFixed(3)}</p>
//           <p>
//             {selectedPoint.stable
//               ? "LOCKED 🟢"
//               : "UNSTABLE 🔴"}
//           </p>
//         </div>
//       )}

//       {/* GUIDE */}
//       <div className="graph-info">
//         <p>🟢 Lock → Flat line</p>
//         <p>⚪ Normal → Smooth</p>
//         <p>🟡 Oscillation → High Kp</p>
//         <p>🔴 Drift → Noise</p>
//       </div>
//     </div>
//   );
// };

// export default StabilityGraph;












// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";

// const StabilityGraph = ({ history = [], running, panelOpen }) => {
//   const [selectedPoint, setSelectedPoint] = useState(null);
//   const [fullscreen, setFullscreen] = useState(false);

//   // ✅ SAFETY (important)
//   if (!history || history.length === 0) {
//     return (
//       <div className="graph-container">
//         <p style={{ textAlign: "center" }}>Waiting for simulation...</p>
//       </div>
//     );
//   }

//   // ✅ EXTRACT VALUES (VERY IMPORTANT FIX)
//   const values = history.map((p) =>
//     typeof p === "number" ? p : p.value
//   );

//   // ✅ COLORS BASED ON TYPE
//   const colors = history.map((p) => {
//     if (p.type === "lock") return "#22c55e";        // 🟢
//     if (p.type === "oscillation") return "#eab308"; // 🟡
//     if (p.type === "drift") return "#ef4444";       // 🔴
//     return "#ffffff";                               // ⚪
//   });

//   const data = {
//     labels: values.map((_, i) => i),
//     datasets: [
//       {
//         label: "Frequency",
//         data: values, // ✅ FIXED
//         tension: 0.35,
//         borderWidth: 2,
//         borderColor: "#6366f1",

//         pointRadius: history.map((p) =>
//           p.type === "lock" ? 5 : 2
//         ),

//         pointBackgroundColor: colors, // ✅ FIXED
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     animation: false,
//     maintainAspectRatio: false,

//     plugins: {
//       legend: {
//         labels: { color: "white" },
//       },
//       tooltip: {
//         callbacks: {
//           label: (ctx) =>
//             `Freq: ${ctx.raw.toFixed(3)}`,
//         },
//       },
//     },

//     onClick: (evt, elements) => {
//       if (elements.length > 0) {
//         const index = elements[0].index;
//         const point = history[index];

//         setSelectedPoint({
//           time: index,
//           value: point.value,
//           type: point.type,
//         });
//       }
//     },

//     scales: {
//       x: {
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Time",
//           color: "white",
//         },
//       },
//       y: {
//         min: 5,
//         max: 15, // ✅ matches your simulation logic
//         ticks: { color: "white" },
//         title: {
//           display: true,
//           text: "Frequency",
//           color: "white",
//         },
//       },
//     },
//   };

//   return (
//     <div
//       className={`graph-container ${
//         fullscreen ? "fullscreen" : ""
//       } ${panelOpen ? "panel-open" : ""}`}
//       style={{ height: fullscreen ? "90vh" : "400px" }}
//     >
//       {/* HEADER */}
//       <div className="graph-header">
//         <div>
//           <h3>Real-Time Frequency Stability</h3>
//           <p>
//             {running
//               ? "● Running (Live Simulation)"
//               : "⏸ Paused"}
//           </p>
//         </div>

//         <button
//           className="fullscreen-btn"
//           onClick={() => setFullscreen(!fullscreen)}
//         >
//           {fullscreen ? "Exit" : "Fullscreen"}
//         </button>
//       </div>

//       {/* GRAPH */}
//       <Line data={data} options={options} />

//       {/* POINT INFO */}
//       {selectedPoint && (
//         <div className="point-info">
//           <h4>Selected Point</h4>
//           <p>Time: {selectedPoint.time}</p>
//           <p>Freq: {selectedPoint.value.toFixed(3)}</p>
//           <p>
//             {selectedPoint.type === "lock" && "LOCKED 🟢"}
//             {selectedPoint.type === "oscillation" && "OSCILLATION 🟡"}
//             {selectedPoint.type === "drift" && "DRIFT 🔴"}
//             {selectedPoint.type === "normal" && "NORMAL ⚪"}
//           </p>
//         </div>
//       )}

//       {/* GUIDE */}
//       <div className="graph-info">
//         <p>🟢 Lock → Flat stable</p>
//         <p>⚪ Normal → Smooth response</p>
//         <p>🟡 Oscillation → High Kp</p>
//         <p>🔴 Drift → Noise / instability</p>
//       </div>
//     </div>
//   );
// };

// export default StabilityGraph;

















import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const StabilityGraph = ({ history = [], running, panelOpen }) => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);

  // ✅ SAFETY (no blank screen)
  if (!history || history.length === 0) {
    return (
      <div className="graph-container">
        <p style={{ textAlign: "center" }}>Waiting for simulation...</p>
      </div>
    );
  }

  // ✅ MOVING WINDOW (last 120 points only)
  const visibleHistory = history.slice(-120);

  // ✅ EXTRACT VALUES
  const values = visibleHistory.map((p) =>
    typeof p === "number" ? p : p.value
  );

  // ✅ COLORS BASED ON TYPE
  const pointColors = visibleHistory.map((p) => {
    if (p.type === "lock") return "#22c55e";        // 🟢
    if (p.type === "oscillation") return "#eab308"; // 🟡
    if (p.type === "drift") return "#ef4444";       // 🔴
    return "#ffffff";                               // ⚪
  });

  const data = {
    labels: values.map((_, i) => i),

    datasets: [
      {
        label: "Frequency",
        data: values, // ✅ FIXED (numbers only)

        borderColor: "#6366f1",
        borderWidth: 2,
        tension: 0.35,

        pointRadius: visibleHistory.map((p) =>
          p.type === "lock" ? 4 : 2
        ),

        pointBackgroundColor: pointColors,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: false,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: { color: "white" },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `Freq: ${ctx.raw.toFixed(3)}`,
        },
      },
    },

    onClick: (evt, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const point = visibleHistory[index];

        setSelectedPoint({
          time: index,
          value: point.value,
          type: point.type,
        });
      }
    },

    scales: {
      x: {
        ticks: { color: "white" },
        title: {
          display: true,
          text: "Time",
          color: "white",
        },
      },
      y: {
        min: 0,
        max: 20,
        ticks: { color: "white" },
        title: {
          display: true,
          text: "Frequency",
          color: "white",
        },
      },
    },
  };

  return (
    <div
      className={`graph-container ${
        fullscreen ? "fullscreen" : ""
      } ${panelOpen ? "panel-open" : ""}`}
      style={{ height: fullscreen ? "90vh" : "420px" }}
    >
      {/* HEADER */}
      <div className="graph-header">
        <div>
          <h3>Real-Time Frequency Stability</h3>
          <p>
            {running
              ? "● Running (Live Simulation)"
              : "⏸ Paused"}
          </p>
        </div>

        
      </div>

      {/* GRAPH */}
      <Line data={data} options={options} />

      {/* SELECTED POINT */}
      {selectedPoint && (
        <div className="point-info">
          <h4>Selected Point</h4>
          <p>Time: {selectedPoint.time}</p>
          <p>Freq: {selectedPoint.value.toFixed(3)}</p>
          <p>
            {selectedPoint.type === "lock" && "LOCKED 🟢"}
            {selectedPoint.type === "oscillation" && "OSCILLATION 🟡"}
            {selectedPoint.type === "drift" && "DRIFT 🔴"}
            {selectedPoint.type === "normal" && "NORMAL ⚪"}
          </p>
        </div>
      )}

      {/* GUIDE */}
      <div className="graph-info">
        <p>🟢 Lock → Flat graph, stable output</p>
        <p>⚪ Normal → Smooth, Stabilizing</p>
        <p>🟡 Oscillation → High Kp</p>
        <p>🔴 Drift → Noise causing Instability</p>
      </div>
    </div>
  );
};

export default StabilityGraph;