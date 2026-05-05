// // src/pages/TrainingMode/components/FrequencyGraph.jsx
// import React from "react";

// function FrequencyGraph({ frequencyData, driftLimit, phase }) {
//   const width = 700;
//   const height = 330;
//   const centerY = height / 2;
//   const scale = 55;

//   const points = frequencyData
//     .map((value, index) => {
//       const x = (index / Math.max(frequencyData.length - 1, 1)) * width;
//       const y = centerY - value * scale;
//       return `${x},${y}`;
//     })
//     .join(" ");

//   const upperBand = centerY - driftLimit * scale;
//   const bandHeight = driftLimit * scale * 2;

//   return (
//     <section className="panel graph-panel">
//       <div className="panel-heading graph-heading">
//         <div>
//           <span className="panel-label">Live Frequency Stability</span>
//           <h2>Lock Acquisition Graph</h2>
//         </div>

//         <span className={`phase-pill ${phase}`}>{phase}</span>
//       </div>

//       <svg className="frequency-graph" viewBox={`0 0 ${width} ${height}`}>
//         <defs>
//           <linearGradient id="lineGradient" x1="0" x2="1">
//             <stop offset="0%" stopColor="#38bdf8" />
//             <stop offset="100%" stopColor="#a78bfa" />
//           </linearGradient>
//         </defs>

//         <rect
//           x="0"
//           y={upperBand}
//           width={width}
//           height={bandHeight}
//           className="stability-band"
//         />

//         {[0, 1, 2, 3, 4, 5].map((line) => (
//           <line
//             key={line}
//             x1="0"
//             x2={width}
//             y1={(line / 5) * height}
//             y2={(line / 5) * height}
//             className="grid-line"
//           />
//         ))}

//         <line x1="0" x2={width} y1={centerY} y2={centerY} className="target-line" />

//         <polyline points={points} className="frequency-line" />

//         {frequencyData.map((value, index) => {
//           if (index % 5 !== 0) return null;

//           const x = (index / Math.max(frequencyData.length - 1, 1)) * width;
//           const y = centerY - value * scale;

//           return <circle key={index} cx={x} cy={y} r="3" className="data-dot" />;
//         })}
//       </svg>

//       <div className="graph-legend">
//         <span><i className="legend target" /> Target frequency</span>
//         <span><i className="legend band" /> Stability band</span>
//         <span><i className="legend trace" /> System response</span>
//       </div>
//     </section>
//   );
// }

// export default FrequencyGraph;







// src/pages/TrainingMode/components/FrequencyGraph.jsx
import React from "react";

function FrequencyGraph({ frequencyData, driftLimit, phase }) {
  const width = 820;
  const height = 430;
  const centerY = height / 2;
  const scale = 70;

  const points = frequencyData
    .map((value, index) => {
      const x = (index / Math.max(frequencyData.length - 1, 1)) * width;
      const y = centerY - value * scale;
      return `${x},${y}`;
    })
    .join(" ");

  const upperBand = centerY - driftLimit * scale;
  const bandHeight = driftLimit * scale * 2;

  return (
    <section className="panel graph-panel">
      <div className="panel-heading graph-heading">
        <div>
          <span className="panel-label">Live Frequency Stability</span>
          <h2>Lock Acquisition Graph</h2>
        </div>

        <span className={`phase-pill ${phase}`}>{phase}</span>
      </div>

      <svg className="frequency-graph" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y={upperBand}
          width={width}
          height={bandHeight}
          className="stability-band"
        />

        {[0, 1, 2, 3, 4, 5, 6].map((line) => (
          <line
            key={line}
            x1="0"
            x2={width}
            y1={(line / 6) * height}
            y2={(line / 6) * height}
            className="grid-line"
          />
        ))}

        <line x1="0" x2={width} y1={centerY} y2={centerY} className="target-line" />

        <polyline points={points} className="frequency-line" />

        {frequencyData.map((value, index) => {
          if (index % 5 !== 0) return null;

          const x = (index / Math.max(frequencyData.length - 1, 1)) * width;
          const y = centerY - value * scale;

          return <circle key={index} cx={x} cy={y} r="3.4" className="data-dot" />;
        })}
      </svg>

      <div className="graph-legend">
        <span><i className="legend target" /> Target frequency</span>
        <span><i className="legend band" /> Stability band</span>
        <span><i className="legend trace" /> System response</span>
      </div>
    </section>
  );
}

export default FrequencyGraph;
