// export default function GraphExplanation() {
//   return (
//     <section className="sim-graph-info">
//       <h2>Understanding the Graph</h2>

//       <ul>
//         <li>🟢 Flat Line → Stable system (LOCKED)</li>
//         <li>🟡 Oscillations → Poor PID tuning</li>
//         <li>🔴 Upward/Downward Drift → External disturbance</li>
//       </ul>

//       <p>
//         The graph shows how frequency evolves over time. Your goal is to minimize
//         fluctuations and achieve a stable horizontal line.
//       </p>
//     </section>
//   );
// }



// export default function GraphExplanation() {
//   return (
//     <section className="sim-graph-info">

//       {/* HEADER */}
//       <div className="sim-header">
//         <h2>Understanding the Frequency Graph</h2>
//         <p>
//           This graph is the core of the simulation. It shows how the system's 
//           frequency changes over time based on the parameters you control.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="sim-content">

//         {/* BLOCK 1 */}
//         <div className="content-block">
//           <h3>What This Graph Shows</h3>
//           <p>
//             The graph represents <strong>Frequency vs Time</strong>. 
//             Each point shows how stable or unstable the system is at that moment.
//           </p>
//           <p>
//             A stable atomic clock maintains a constant frequency — which appears 
//             as a flat horizontal line.
//           </p>
//         </div>

//         {/* BLOCK 2 */}
//         <div className="content-block">
//           <h3>How to Use the Graph</h3>

//           <div className="step-block">
//             <p><strong>Step 1:</strong> Press <strong>Play</strong> to start simulation.</p>
//             <p><strong>Step 2:</strong> Use sliders in Control Panel.</p>
//             <p><strong>Step 3:</strong> Observe real-time graph changes.</p>
//             <p><strong>Step 4:</strong> Pause and use <strong>Step ▶</strong> for slow analysis.</p>
//             <p><strong>Step 5:</strong> Click on graph points to inspect values.</p>
//           </div>
//         </div>

//         {/* BLOCK 3 */}
//         <div className="content-block">
//           <h3>How to Read the Graph</h3>

//           <ul>
//             <li>
//               🟢 <strong>Flat Line:</strong> System is stable → Frequency LOCKED
//             </li>

//             <li>
//               🟡 <strong>Oscillations:</strong> Poor PID tuning → System over-correcting
//             </li>

//             <li>
//               🔴 <strong>Drift (Up/Down):</strong> External disturbances (temperature, magnetic noise)
//             </li>
//           </ul>
//         </div>

//         {/* BLOCK 4 */}
//         <div className="content-block">
//           <h3>What Affects the Graph</h3>

//           <ul>
//             <li>Laser Current → controls signal strength</li>
//             <li>Temperature → increases noise and instability</li>
//             <li>Magnetic Noise → introduces drift</li>
//             <li>PID (Kp, Ki, Kd) → controls error correction</li>
//           </ul>

//           <p>
//             A balance between all these parameters is required to achieve a stable system.
//           </p>
//         </div>

//         {/* BLOCK 5 */}
//         <div className="content-block">
//           <h3>Your Objective</h3>
//           <p>
//             Your goal is to minimize fluctuations and maintain a stable frequency 
//             over time. This represents a successfully stabilized atomic clock system.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }




// import { useState } from "react";

// export default function GraphExplanation() {
//   const [active, setActive] = useState(1);

//   const steps = [
//     {
//       title: "Start the Simulation",
//       content:
//         "Click Play to begin. The graph starts plotting frequency in real time as the system generates output continuously.",
//     },
//     {
//       title: "Control the System",
//       content:
//         "Adjust Laser, Temperature, Magnetic Noise and PID values. Each parameter directly affects system behavior.",
//     },
//     {
//       title: "Observe Response",
//       content:
//         "The graph reacts instantly. You will see stability, drift, oscillations or noise depending on inputs.",
//     },
//     {
//       title: "Analyze Behavior",
//       content:
//         "Pause and step through the graph to clearly understand how each parameter affects the system.",
//     },
//     {
//       title: "Inspect Points",
//       content:
//         "Click any point to see exact frequency, time and whether the system is stable or unstable.",
//     },
//   ];

//   return (
//     <section className="sim-graph-info">

//       <div className="sim-header">
//         <h2>Understanding & Using the Frequency Graph</h2>
//         <p>
//           Learn how to control, observe and analyze system behavior step-by-step.
//         </p>
//       </div>

//       <div className="sim-steps">

//         {steps.map((step, i) => (
//           <div key={i} className="step">

//             <div
//               className={`step-circle ${active === i ? "active" : ""}`}
//               onClick={() => setActive(i)}
//             >
//               {i + 1}
//             </div>

//             <div className="step-content">
//               <h4>{step.title}</h4>

//               {active === i && (
//                 <div className="step-dropdown">
//                   <p>{step.content}</p>
//                 </div>
//               )}
//             </div>

//           </div>
//         ))}

//       </div>

//       {/* GRAPH READING (NO BOXES → STRIP STYLE) */}
//       <div className="graph-reading">

//         <div className="reading-line green">
//           🟢 Stable → Frequency LOCKED (flat behavior)
//         </div>

//         <div className="reading-line yellow">
//           🟡 Oscillation → Over-correction (PID issue)
//         </div>

//         <div className="reading-line red">
//           🔴 Drift → External disturbance dominating
//         </div>

//         <div className="reading-line white">
//           ⚪ Noise → Random fluctuations
//         </div>

//       </div>

//     </section>
//   );
// }










import { useState } from "react";

export default function GraphExplanation() {

  const [active, setActive] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Start the Simulation",
      content: (
        <>
          <p>
            Click <strong>Play</strong> to begin the simulation. The graph starts
            plotting <strong>frequency vs time</strong> in real-time.
          </p>
          <p>
            Each point represents the system's current frequency at that moment.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "Adjust Control Parameters",
      content: (
        <>
          <p>
            Use the control panel sliders to adjust:
          </p>
          <ul>
            <li><strong>Laser Current:</strong> affects signal strength</li>
            <li><strong>Temperature:</strong> introduces drift</li>
            <li><strong>Magnetic Noise:</strong> adds disturbance</li>
            <li><strong>PID (Kp, Ki, Kd):</strong> controls correction response</li>
          </ul>
          <p>
            Changes are reflected instantly on the graph.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "Observe Graph Behavior",
      content: (
        <>
          <p>
            Watch how the graph reacts as you change parameters:
          </p>
          <ul>
            <li>Smooth line → stable system</li>
            <li>Rapid fluctuations → noise or poor tuning</li>
            <li>Gradual shift → drift due to environment</li>
          </ul>
        </>
      )
    },
    {
      id: 4,
      title: "Analyze Using Data Points",
      content: (
        <>
          <p>
            Click on any point in the graph to inspect:
          </p>
          <ul>
            <li><strong>Time:</strong> when the value was recorded</li>
            <li><strong>Frequency:</strong> system output</li>
            <li><strong>Status:</strong> Stable (LOCK) or Unstable</li>
          </ul>
          <p>
            Green points indicate stable regions detected by the system.
          </p>
        </>
      )
    },
    {
      id: 5,
      title: "Use Pause & Step Mode",
      content: (
        <>
          <p>
            Pause the simulation to stop real-time updates.
          </p>
          <p>
            Use <strong>Step ▶</strong> to move forward one data point at a time.
          </p>
          <p>
            This helps in analyzing how small parameter changes affect the system.
          </p>
        </>
      )
    },
    {
      id: 6,
      title: "Achieve Frequency Lock",
      content: (
        <>
          <p>
            Your goal is to achieve a <strong>stable (LOCKED)</strong> system.
          </p>
          <ul>
            <li>Low noise</li>
            <li>Controlled temperature</li>
            <li>Proper PID tuning</li>
          </ul>
          <p>
            When stable, the graph becomes nearly flat and green points appear.
          </p>
        </>
      )
    }
  ];

  const current = steps.find(s => s.id === active);

  return (
    <section className="sim-graph-info">

      {/* HEADER */}
      <div className="sim-header">
        <h2>How to Use the Graph</h2>
        <p>
          Learn how to interact with the graph, analyze system behavior,
          and achieve frequency stability.
        </p>
      </div>

      {/* STEP NAV */}
      <div className="graph-steps">
        {steps.map(step => (
          <div
            key={step.id}
            className={`graph-step ${active === step.id ? "active" : ""}`}
            onClick={() => setActive(step.id)}
          >
            <div className="step-circle">{step.id}</div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>

      {/* ACTIVE PANEL */}
      <div className="graph-panel">
        <h3>{current.title}</h3>
        {current.content}
      </div>

      {/* LEGEND */}
      <div className="graph-legend">

        <div className="legend-item stable">
          <span></span>
          Stable Region → Frequency LOCK achieved (green points)
        </div>

        <div className="legend-item oscillation">
          <span></span>
          Oscillation → Over-correction due to PID imbalance
        </div>

        <div className="legend-item drift">
          <span></span>
          Drift → External disturbance (temperature / magnetic field)
        </div>

        <div className="legend-item noise">
          <span></span>
          Noise → Random fluctuations affecting stability
        </div>

      </div>

    </section>
  );
}