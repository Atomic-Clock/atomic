// export default function SystemWorking() {
//   return (
//     <section className="sim-system">

//       {/* HEADER */}
//       <div className="sim-header">
//         <h2>How the System Works</h2>
//         <p>
//           Behind the graph, the system continuously calculates and corrects
//           frequency to achieve stability.
//         </p>
//       </div>

//       <div className="sim-content">

//         {/* CORE LOGIC */}
//         <div className="content-block">
//           <h3>Real-Time Feedback Loop</h3>
//           <p>
//             The system compares the current frequency with the desired value.
//             The difference between them is called <strong>error</strong>.
//           </p>
//           <p>
//             This error is continuously corrected using a PID controller.
//           </p>
//         </div>

//         {/* PID */}
//         <div className="content-block">
//           <h3>PID Controller Role</h3>
//           <ul>
//             <li><strong>Kp:</strong> Reacts to current error (fast response)</li>
//             <li><strong>Ki:</strong> Removes long-term error</li>
//             <li><strong>Kd:</strong> Prevents oscillations and stabilizes</li>
//           </ul>
//         </div>

//         {/* DISTURBANCE */}
//         <div className="content-block">
//           <h3>External Disturbances</h3>
//           <p>
//             Temperature and magnetic noise introduce instability into the system.
//           </p>
//           <p>
//             These disturbances cause fluctuations and drift in the graph.
//           </p>
//         </div>

//         {/* OUTPUT */}
//         <div className="content-block">
//           <h3>System Output</h3>
//           <p>
//             The graph output represents how well the system maintains a constant frequency.
//           </p>

//           <ul>
//             <li>Stable Output → System Locked</li>
//             <li>Fluctuating Output → Poor tuning</li>
//             <li>Drifting Output → High disturbance</li>
//           </ul>
//         </div>

//         {/* LEARNING */}
//         <div className="content-block highlight">
//           <h3>What You Learn</h3>
//           <ul>
//             <li>How control systems behave in real-time</li>
//             <li>Impact of tuning parameters on stability</li>
//             <li>How noise affects precision systems</li>
//             <li>How to achieve a stable system (LOCK)</li>
//           </ul>
//         </div>

//       </div>
//     </section>
//   );
// }


// export default function SystemWorking() {
//   return (
//     <section className="sim-system">

//       {/* HEADER */}
//       <div className="sim-header">
//         <h2>How the System Works Internally</h2>
//         <p>
//           Behind the graph, a real-time feedback system continuously calculates,
//           corrects, and stabilizes frequency.
//         </p>
//       </div>

//       <div className="sim-content">

//         {/* CORE LOOP */}
//         <div className="content-block">
//           <h3>Real-Time Feedback Loop</h3>
//           <p>
//             At every moment, the system compares the current frequency with the
//             desired reference value.
//           </p>
//           <p>
//             The difference between them is called <strong>frequency error</strong>.
//             This error drives the entire correction process.
//           </p>
//         </div>

//         {/* SYSTEM EQUATION (IMPORTANT BUT SIMPLE) */}
//         <div className="content-block">
//           <h3>What Generates the Graph</h3>
//           <p>
//             Each point on the graph is calculated using a combination of:
//           </p>

//           <ul>
//             <li><strong>Base Frequency:</strong> Ideal reference value</li>
//             <li><strong>Drift:</strong> Caused by temperature and magnetic field</li>
//             <li><strong>Noise:</strong> Random environmental disturbances</li>
//             <li><strong>PID Correction:</strong> Error compensation</li>
//           </ul>

//           <p>
//             The final output is the corrected frequency plotted over time.
//           </p>
//         </div>

//         {/* PID */}
//         <div className="content-block">
//           <h3>PID Controller (Correction Engine)</h3>

//           <ul>
//             <li><strong>Kp (Proportional):</strong> Reacts instantly to current error</li>
//             <li><strong>Ki (Integral):</strong> Removes accumulated error over time</li>
//             <li><strong>Kd (Derivative):</strong> Predicts behavior and reduces oscillation</li>
//           </ul>

//           <p>
//             The PID controller continuously adjusts the system to push the
//             frequency back toward stability.
//           </p>
//         </div>

//         {/* DISTURBANCES */}
//         <div className="content-block">
//           <h3>Disturbances & Instability Sources</h3>

//           <ul>
//             <li><strong>Temperature:</strong> Causes atomic motion → frequency broadening</li>
//             <li><strong>Magnetic Field:</strong> Shifts energy levels → frequency drift</li>
//             <li><strong>Laser Instability:</strong> Weak or saturated signal</li>
//             <li><strong>Noise:</strong> Random fluctuations affecting measurements</li>
//           </ul>

//           <p>
//             These factors constantly disturb the system, making stabilization challenging.
//           </p>
//         </div>

//         {/* OUTPUT */}
//         <div className="content-block">
//           <h3>System Output (What You See)</h3>

//           <ul>
//             <li><strong>Frequency Value:</strong> current system output</li>
//             <li><strong>Error Magnitude:</strong> deviation from ideal</li>
//             <li><strong>Stability State:</strong> LOCKED or UNLOCKED</li>
//           </ul>

//           <p><strong>Lock Condition:</strong></p>
//           <ul>
//             <li>Small error + low variation → 🟢 LOCKED</li>
//             <li>Large or fluctuating error → 🔴 UNLOCKED</li>
//           </ul>
//         </div>

//         {/* LEARNING */}
//         <div className="content-block highlight">
//           <h3>What This Teaches You</h3>

//           <ul>
//             <li>How real control systems maintain stability</li>
//             <li>How disturbances affect precision systems</li>
//             <li>How PID tuning changes system response</li>
//             <li>How to achieve and maintain frequency lock</li>
//           </ul>

//           <p>
//             This simulation mirrors real atomic clock stabilization systems
//             used in GPS, satellites, and communication networks.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }






// import { useState } from "react";

// export default function SystemWorking() {
//   const [open, setOpen] = useState(null);

//   const toggle = (key) => {
//     setOpen(open === key ? null : key);
//   };

//   return (
//     <section className="sim-system">

//       {/* HEADER */}
//       <div className="sim-header">
//         <h2>How the System Works Internally</h2>
//         <p>
//           Behind the graph, a real-time feedback system continuously calculates,
//           corrects, and stabilizes frequency.
//         </p>
//       </div>

//       <div className="system-flow">

//         {/* 1️⃣ FEEDBACK LOOP */}
//         <div className="system-item">
//           <div className="system-head" onClick={() => toggle("loop")}>
//             <h3>🔁 Real-Time Feedback Loop</h3>
//             <span>{open === "loop" ? "−" : "+"}</span>
//           </div>

//           {open === "loop" && (
//             <div className="system-body">
//               <p>
//                 The system continuously compares the current frequency with the
//                 desired reference value.
//               </p>
//               <p>
//                 The difference between them is called{" "}
//                 <strong>frequency error</strong>, which drives the correction process.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* 2️⃣ GRAPH GENERATION */}
//         <div className="system-item">
//           <div className="system-head" onClick={() => toggle("graph")}>
//             <h3>📊 What Generates the Graph</h3>
//             <span>{open === "graph" ? "−" : "+"}</span>
//           </div>

//           {open === "graph" && (
//             <div className="system-body">
//               <p>Each point on the graph is calculated using:</p>

//               <ul>
//                 <li><strong>Base Frequency:</strong> Ideal reference</li>
//                 <li><strong>Drift:</strong> Temperature + magnetic effects</li>
//                 <li><strong>Noise:</strong> Random disturbances</li>
//                 <li><strong>PID Correction:</strong> Error compensation</li>
//               </ul>

//               <p>
//                 The final output is the corrected frequency plotted over time.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* 3️⃣ PID */}
//         <div className="system-item">
//           <div className="system-head" onClick={() => toggle("pid")}>
//             <h3>⚙️ PID Controller (Correction Engine)</h3>
//             <span>{open === "pid" ? "−" : "+"}</span>
//           </div>

//           {open === "pid" && (
//             <div className="system-body">
//               <ul>
//                 <li><strong>Kp (Proportional):</strong> reacts to current error</li>
//                 <li><strong>Ki (Integral):</strong> removes accumulated error</li>
//                 <li><strong>Kd (Derivative):</strong> reduces oscillations</li>
//               </ul>

//               <p>
//                 The PID controller constantly pushes the system back toward stability.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* 4️⃣ DISTURBANCES */}
//         <div className="system-item">
//           <div className="system-head" onClick={() => toggle("disturb")}>
//             <h3>🌍 Disturbances & Instability Sources</h3>
//             <span>{open === "disturb" ? "−" : "+"}</span>
//           </div>

//           {open === "disturb" && (
//             <div className="system-body">
//               <ul>
//                 <li><strong>Temperature:</strong> atomic motion → frequency spread</li>
//                 <li><strong>Magnetic Field:</strong> energy shift → drift</li>
//                 <li><strong>Laser Instability:</strong> weak or saturated signal</li>
//                 <li><strong>Noise:</strong> random fluctuations</li>
//               </ul>

//               <p>
//                 These continuously disturb the system and make stabilization difficult.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* 5️⃣ OUTPUT */}
//         <div className="system-item">
//           <div className="system-head" onClick={() => toggle("output")}>
//             <h3>📤 System Output (What You See)</h3>
//             <span>{open === "output" ? "−" : "+"}</span>
//           </div>

//           {open === "output" && (
//             <div className="system-body">

//               <ul>
//                 <li><strong>Frequency Value:</strong> current output</li>
//                 <li><strong>Error:</strong> deviation from ideal</li>
//                 <li><strong>State:</strong> LOCKED / UNLOCKED</li>
//               </ul>

//               <div className="system-highlight">
//                 ✔ Small error + stable output → <strong>LOCKED</strong>
//               </div>

//               <div className="system-highlight warn">
//                 ⚠ Oscillation → <strong>Poor PID tuning</strong>
//               </div>

//               <div className="system-highlight danger">
//                 ✖ Continuous drift → <strong>High disturbance</strong>
//               </div>

//             </div>
//           )}
//         </div>

//         {/* 6️⃣ LEARNING */}
//         <div className="system-item">
//           <div className="system-head" onClick={() => toggle("learn")}>
//             <h3>🎯 What This Teaches You</h3>
//             <span>{open === "learn" ? "−" : "+"}</span>
//           </div>

//           {open === "learn" && (
//             <div className="system-body">
//               <ul>
//                 <li>How real control systems maintain stability</li>
//                 <li>Impact of disturbances on precision systems</li>
//                 <li>Effect of PID tuning on behavior</li>
//                 <li>How to achieve and maintain LOCK</li>
//               </ul>

//               <p>
//                 This simulation reflects real systems used in GPS, satellites,
//                 and communication networks.
//               </p>
//             </div>
//           )}
//         </div>

//       </div>
//     </section>
//   );
// }















// import { useState } from "react";

// export default function SystemWorking() {
//   const [open, setOpen] = useState(null);

//   const toggle = (key) => {
//     setOpen(open === key ? null : key);
//   };

//   return (
//     <section className="sim-system">

//       {/* HEADER */}
//       <div className="sim-header">
//         <h2>How the System Works Internally</h2>
//         <p>
//           Behind the graph, a real-time feedback system continuously calculates,
//           corrects, and stabilizes frequency.
//         </p>
//       </div>

//       <div className="system-flow">

//         {/* ITEM */}
//         {[
//           {
//             key: "loop",
//             title: "Real-Time Feedback Loop",
//             content: (
//               <>
//                 <p>
//                   The system continuously compares the current frequency with the
//                   desired reference value.
//                 </p>
//                 <p>
//                   The difference between them is called{" "}
//                   <strong>frequency error</strong>, which drives the correction process.
//                 </p>
//               </>
//             )
//           },
//           {
//             key: "graph",
//             title: "What Generates the Graph",
//             content: (
//               <>
//                 <p>Each point on the graph is calculated using:</p>
//                 <ul>
//                   <li><strong>Base Frequency:</strong> Ideal reference</li>
//                   <li><strong>Drift:</strong> Temperature + magnetic effects</li>
//                   <li><strong>Noise:</strong> Random disturbances</li>
//                   <li><strong>PID Correction:</strong> Error compensation</li>
//                 </ul>
//                 <p>
//                   The final output is the corrected frequency plotted over time.
//                 </p>
//               </>
//             )
//           },
//           {
//             key: "pid",
//             title: "PID Controller (Correction Engine)",
//             content: (
//               <>
//                 <ul>
//                   <li><strong>Kp (Proportional):</strong> reacts to current error</li>
//                   <li><strong>Ki (Integral):</strong> removes accumulated error</li>
//                   <li><strong>Kd (Derivative):</strong> reduces oscillations</li>
//                 </ul>
//                 <p>
//                   The PID controller constantly pushes the system back toward stability.
//                 </p>
//               </>
//             )
//           },
//           {
//             key: "disturb",
//             title: "Disturbances & Instability Sources",
//             content: (
//               <>
//                 <ul>
//                   <li><strong>Temperature:</strong> atomic motion → frequency spread</li>
//                   <li><strong>Magnetic Field:</strong> energy shift → drift</li>
//                   <li><strong>Laser Instability:</strong> weak or saturated signal</li>
//                   <li><strong>Noise:</strong> random fluctuations</li>
//                 </ul>
//                 <p>
//                   These continuously disturb the system and make stabilization difficult.
//                 </p>
//               </>
//             )
//           },
//           {
//             key: "output",
//             title: "System Output (What You See)",
//             content: (
//               <>
//                 <ul>
//                   <li><strong>Frequency Value:</strong> current output</li>
//                   <li><strong>Error:</strong> deviation from ideal</li>
//                   <li><strong>State:</strong> LOCKED / UNLOCKED</li>
//                 </ul>

//                 <div className="system-highlight success">
//                   Small error + stable output → <strong>LOCKED</strong>
//                 </div>

//                 <div className="system-highlight warn">
//                   Oscillation → <strong>Poor PID tuning</strong>
//                 </div>

//                 <div className="system-highlight danger">
//                   Continuous drift → <strong>High disturbance</strong>
//                 </div>
//               </>
//             )
//           },
//           {
//             key: "learn",
//             title: "What This Teaches You",
//             content: (
//               <>
//                 <ul>
//                   <li>How real control systems maintain stability</li>
//                   <li>Impact of disturbances on precision systems</li>
//                   <li>Effect of PID tuning on behavior</li>
//                   <li>How to achieve and maintain LOCK</li>
//                 </ul>
//                 <p>
//                   This simulation reflects real systems used in GPS, satellites,
//                   and communication networks.
//                 </p>
//               </>
//             )
//           }
//         ].map((item) => (
//           <div
//             key={item.key}
//             className={`system-card ${open === item.key ? "active" : ""}`}
//             onClick={() => toggle(item.key)}
//           >
//             <div className="system-head">
//               <h3>{item.title}</h3>
//               <span>{open === item.key ? "−" : "+"}</span>
//             </div>

//             {open === item.key && (
//               <div className="system-body">{item.content}</div>
//             )}
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }



import { useState } from "react";

export default function SystemWorking() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  const items = [
    {
      key: "loop",
      title: "Real-Time Feedback Loop",
      content: (
        <>
          <p>
            The system continuously compares the current frequency with the
            desired reference value.
          </p>
          <p>
            The difference between them is called{" "}
            <strong>frequency error</strong>, which drives the correction process.
          </p>
        </>
      )
    },
    {
      key: "graph",
      title: "What Generates the Graph",
      content: (
        <>
          <p>Each point on the graph is calculated using:</p>
          <ul>
            <li><strong>Base Frequency:</strong> Ideal reference</li>
            <li><strong>Drift:</strong> Temperature + magnetic effects</li>
            <li><strong>Noise:</strong> Random disturbances</li>
            <li><strong>PID Correction:</strong> Error compensation</li>
          </ul>
          <p>
            The final output is the corrected frequency plotted over time.
          </p>
        </>
      )
    },
    {
      key: "pid",
      title: "PID Controller (Correction Engine)",
      content: (
        <>
          <ul>
            <li><strong>Kp (Proportional):</strong> reacts to current error</li>
            <li><strong>Ki (Integral):</strong> removes accumulated error</li>
            <li><strong>Kd (Derivative):</strong> reduces oscillations</li>
          </ul>
          <p>
            The PID controller constantly pushes the system back toward stability.
          </p>
        </>
      )
    },
    {
      key: "disturb",
      title: "Disturbances & Instability Sources",
      content: (
        <>
          <ul>
            <li><strong>Temperature:</strong> atomic motion → frequency spread</li>
            <li><strong>Magnetic Field:</strong> energy shift → drift</li>
            <li><strong>Laser Instability:</strong> weak or saturated signal</li>
            <li><strong>Noise:</strong> random fluctuations</li>
          </ul>
          <p>
            These continuously disturb the system and make stabilization difficult.
          </p>
        </>
      )
    },
    {
      key: "output",
      title: "System Output (What You See)",
      content: (
        <>
          <ul>
            <li><strong>Frequency Value:</strong> current output</li>
            <li><strong>Error:</strong> deviation from ideal</li>
            <li><strong>State:</strong> LOCKED / UNLOCKED</li>
          </ul>

          <div className="system-highlight success">
            Small error + stable output → <strong>LOCKED</strong>
          </div>

          <div className="system-highlight warn">
            Oscillation → <strong>Poor PID tuning</strong>
          </div>

          <div className="system-highlight danger">
            Continuous drift → <strong>High disturbance</strong>
          </div>
        </>
      )
    },
    {
      key: "learn",
      title: "What This Teaches You",
      content: (
        <>
          <ul>
            <li>How real control systems maintain stability</li>
            <li>Impact of disturbances on precision systems</li>
            <li>Effect of PID tuning on behavior</li>
            <li>How to achieve and maintain LOCK</li>
          </ul>
          <p>
            This simulation reflects real systems used in GPS, satellites,
            and communication networks.
          </p>
        </>
      )
    }
  ];

  // 🔥 split into 2 columns
  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);

  return (
    <section className="sim-system">

      {/* HEADER */}
      <div className="sim-header">
        <h2>How the System Works Internally</h2>
        <p>
          Behind the graph, a real-time feedback system continuously calculates,
          corrects, and stabilizes frequency.
        </p>
      </div>

      <div className="system-flow">

        {/* LEFT COLUMN */}
        <div className="system-col">
          {leftItems.map((item) => (
            <div
              key={item.key}
              className={`system-card ${open === item.key ? "active" : ""}`}
              onClick={() => toggle(item.key)}
            >
              <div className="system-head">
                <h3>{item.title}</h3>
                <span>{open === item.key ? "−" : "+"}</span>
              </div>

              {open === item.key && (
                <div className="system-body">{item.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="system-col">
          {rightItems.map((item) => (
            <div
              key={item.key}
              className={`system-card ${open === item.key ? "active" : ""}`}
              onClick={() => toggle(item.key)}
            >
              <div className="system-head">
                <h3>{item.title}</h3>
                <span>{open === item.key ? "−" : "+"}</span>
              </div>

              {open === item.key && (
                <div className="system-body">{item.content}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}