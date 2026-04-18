// import React, { useEffect, useState } from "react";
// import "./Simulation.css";

// import ControlPanel from "./components/ControlPanel";
// import LockIndicator from "./components/LockIndicator";
// import NoiseMeter from "./components/NoiseMeter";
// import StabilityGraph from "./components/StabilityGraph";

// // existing components
// import ExplanationPanel from "./components/ExplanationPanel";
// import ModePanel from "./components/ModePanel";
// import { simulateStep, initialState, getSystemStatus } from "./SimulateLogic";

// // ✅ NEW SECTIONS (create these files)
// import SimulationHero from "./components/SimulationHero";
// import SimulationIntro from "./components/SimulationIntro";
// import ParametersSection from "./components/ParametersSection";
// import GraphExplanation from "./components/GraphExplanation";
// import SystemWorking from "./components/SystemWorking";

// const SimulatePage = () => {
//   const [state, setState] = useState(initialState);

//   const [controls, setControls] = useState({
//     laser: 5,
//     temperature: 5,
//     magnetic: 5,
//     Kp: 0.5,
//     Ki: 0.1,
//     Kd: 0.2,
//   });

//   const [running, setRunning] = useState(true);

//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       setState((prev) => simulateStep(prev, controls));
//     }, 200);

//     return () => clearInterval(interval);
//   }, [controls, running]);

//   // ✅ explanation logic
//   const { message } = getSystemStatus(state, controls);

//   return (
//     <>
//       {/* 🔥 HERO SECTION */}
//       <SimulationHero />

//       {/* 🔍 INTRO */}
//       <SimulationIntro />

//       {/* ⚙️ PARAMETERS */}
//       <ParametersSection />

//       {/* 📊 GRAPH EXPLANATION */}
//       <GraphExplanation />

//       {/* 🧠 SYSTEM WORKING */}
//       <SystemWorking />

//       {/* 🚀 ACTUAL SIMULATION */}
//       <section id="simulation-section" className="simulation-main">
//         <h2 className="simulation-title">Interactive Simulation Lab</h2>

//         <div className="simulate-container">

//           {/* LEFT */}
//           <div className="left">
//             <ControlPanel controls={controls} setControls={setControls} />
//             <ModePanel setControls={setControls} />
//           </div>

//           {/* CENTER */}
//           <div className="center">
//             <StabilityGraph history={state.history} />
//           </div>

//           {/* RIGHT */}
//           <div className="right">
//             <LockIndicator locked={state.locked} />
//             <NoiseMeter noise={state.noise} />

//             <div className="buttons">
//               <button onClick={() => setRunning(!running)}>
//                 {running ? "Pause" : "Play"}
//               </button>

//               <button onClick={() => setState(initialState)}>
//                 Reset
//               </button>
//             </div>

//             <ExplanationPanel message={message} />
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default SimulatePage;



























// import React, { useEffect, useState } from "react";
// import "./Simulation.css";

// import ControlPanel from "./components/ControlPanel";
// import LockIndicator from "./components/LockIndicator";
// import NoiseMeter from "./components/NoiseMeter";
// import StabilityGraph from "./components/StabilityGraph";

// import ExplanationPanel from "./components/ExplanationPanel";
// import ModePanel from "./components/ModePanel";
// import {
//   simulateStep,
//   initialState,
//   getSystemStatus,
// } from "./SimulateLogic";

// import SimulationHero from "./components/SimulationHero";
// import SimulationIntro from "./components/SimulationIntro";
// import ParametersSection from "./components/ParametersSection";
// import GraphExplanation from "./components/GraphExplanation";
// import SystemWorking from "./components/SystemWorking";

// const SimulatePage = () => {
//   const [state, setState] = useState(initialState);

//   const [controls, setControls] = useState({
//     laser: 5,
//     temperature: 5,
//     magnetic: 5,
//     Kp: 0.5,
//     Ki: 0.1,
//     Kd: 0.2,
//   });

//   // 🎛 CONTROL STATES
//   const [running, setRunning] = useState(true); // auto start
//   const [speed, setSpeed] = useState(300);
//   const [showControls, setShowControls] = useState(true);
//   const [fullscreen, setFullscreen] = useState(false);

//   // 🔁 RESET FUNCTION (USED BY MODE PANEL)
//   const resetSimulation = () => {
//     setState(initialState);
//     setRunning(true);
//   };

//   // 🚀 MAIN SIMULATION LOOP
//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       setState((prev) => simulateStep(prev, controls));
//     }, speed);

//     return () => clearInterval(interval);
//   }, [controls, running, speed]);

//   // 📢 STATUS MESSAGE
//   const { message } = getSystemStatus(state, controls);

//   return (
//     <>
//       <SimulationHero />
//       <SimulationIntro />
//       <ParametersSection />
//       <GraphExplanation />
//       <SystemWorking />

//       <section className="simulation-main">
//         <h2 className="simulation-title">
//           Interactive Simulation Lab
//         </h2>

//         <div
//           className={`simulate-container ${
//             fullscreen ? "fullscreen" : ""
//           }`}
//         >
//           {/* 🔹 LEFT PANEL */}
//           <div
//             className={`left ${
//               showControls ? "" : "collapsed"
//             }`}
//           >
//             <button
//               className="toggle-btn"
//               onClick={() =>
//                 setShowControls(!showControls)
//               }
//             >
//               {showControls
//                 ? "Hide Controls ◀"
//                 : "Show Controls ▶"}
//             </button>

//             {showControls && (
//               <>
//                 <ControlPanel
//                   controls={controls}
//                   setControls={setControls}
//                 />

//                 <ModePanel
//                   setControls={setControls}
//                   resetSimulation={resetSimulation}
//                 />
//               </>
//             )}
//           </div>

//           {/* 🔹 CENTER */}
//           <div className="center">
//             {/* 🎛 GRAPH CONTROLS */}
//             <div className="graph-controls">
//               <button
//                 onClick={() => setRunning(!running)}
//               >
//                 {running ? "Pause" : "Play"}
//               </button>

//               <button
//                 onClick={() =>
//                   setState((prev) =>
//                     simulateStep(prev, controls)
//                   )
//                 }
//               >
//                 Step ▶
//               </button>

//               <button onClick={resetSimulation}>
//                 Reset
//               </button>

//               <button
//                 onClick={() =>
//                   setFullscreen(!fullscreen)
//                 }
//               >
//                 {fullscreen
//                   ? "Exit Fullscreen"
//                   : "Fullscreen 📺"}
//               </button>
//             </div>

//             {/* ⚡ SPEED CONTROL */}
//             <div className="speed-control">
//               <label>Speed</label>
//               <input
//                 type="range"
//                 min="100"
//                 max="1000"
//                 step="100"
//                 value={speed}
//                 onChange={(e) =>
//                   setSpeed(Number(e.target.value))
//                 }
//               />
//               <span>{speed} ms</span>
//             </div>

//             {/* 📊 GRAPH */}
//             <StabilityGraph
//               history={state.history}
//               panelOpen={showControls}
//             />
//           </div>

//           {/* 🔹 RIGHT PANEL */}
//           <div className="right">
//             {/* 🔒 LOCK INDICATOR (FROM STATE) */}
//             <LockIndicator
//               locked={state.locked}
//               drift={state.drift}
//             />

//             {/* 🌡 NOISE */}
//             <NoiseMeter controls={controls} />

//             {/* 📢 MESSAGE */}
//             <ExplanationPanel message={message} />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SimulatePage;











// import React, { useEffect, useState } from "react";
// import "./Simulation.css";

// import ControlPanel from "./components/ControlPanel";
// import LockIndicator from "./components/LockIndicator";
// import NoiseMeter from "./components/NoiseMeter";
// import StabilityGraph from "./components/StabilityGraph";

// import ExplanationPanel from "./components/ExplanationPanel";
// import ModePanel from "./components/ModePanel";
// import { simulateStep, initialState, getSystemStatus } from "./SimulateLogic";

// import SimulationHero from "./components/SimulationHero";
// import SimulationIntro from "./components/SimulationIntro";
// import ParametersSection from "./components/ParametersSection";
// import GraphExplanation from "./components/GraphExplanation";
// import SystemWorking from "./components/SystemWorking";

// const SimulatePage = () => {
//   const [state, setState] = useState(initialState);

//   const [controls, setControls] = useState({
//     laser: 5,
//     temperature: 5,
//     magnetic: 5,
//     Kp: 0.5,
//     Ki: 0.1,
//     Kd: 0.2,
//   });

//   const [running, setRunning] = useState(true);
//   const [speed, setSpeed] = useState(300);
//   const [showControls, setShowControls] = useState(true);
//   const [fullscreen, setFullscreen] = useState(false);

//   // ✅ RESET FUNCTION
//   const resetSimulation = () => {
//     setState(initialState);
//   };

//   // ✅ MAIN LOOP
//   useEffect(() => {
//     if (!running) return;

//     const interval = setInterval(() => {
//       setState((prev) => simulateStep(prev, controls));
//     }, speed);

//     return () => clearInterval(interval);
//   }, [controls, running, speed]);

//   const { message } = getSystemStatus(state, controls);

//   return (
//     <>
//       <SimulationHero />
//       <SimulationIntro />
//       <ParametersSection />
//       <GraphExplanation />
//       <SystemWorking />

//       <section className="simulation-main">
//         <h2 className="simulation-title">Interactive Simulation Lab</h2>

//         <div className={`simulate-container ${fullscreen ? "fullscreen" : ""}`}>

//           {/* LEFT */}
//           <div className={`left ${showControls ? "" : "collapsed"}`}>
//             <button
//               className="toggle-btn"
//               onClick={() => setShowControls(!showControls)}
//             >
//               {showControls ? "Hide Controls ◀" : "Show Controls ▶"}
//             </button>

//             {showControls && (
//               <>
//                 <ControlPanel controls={controls} setControls={setControls} />
//                 <ModePanel
//                   setControls={setControls}
//                   resetSimulation={resetSimulation}
//                 />
//               </>
//             )}
//           </div>

//           {/* CENTER */}
//           <div className="center">

//             <div className="graph-controls">
//               <button onClick={() => setRunning(!running)}>
//                 {running ? "Pause" : "Play"}
//               </button>

//               <button
//                 onClick={() =>
//                   setState((prev) => simulateStep(prev, controls))
//                 }
//               >
//                 Step ▶
//               </button>

//               <button
//                 onClick={() => {
//                   setState(initialState);
//                   setRunning(true);
//                 }}
//               >
//                 Reset
//               </button>

//               <button onClick={() => setFullscreen(!fullscreen)}>
//                 {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
//               </button>
//             </div>

//             <div className="speed-control">
//               <label>Speed</label>
//               <input
//                 type="range"
//                 min="100"
//                 max="1000"
//                 step="100"
//                 value={speed}
//                 onChange={(e) => setSpeed(Number(e.target.value))}
//               />
//               <span>{speed} ms</span>
//             </div>

//             {/* ✅ GRAPH ONLY HISTORY */}
//             <StabilityGraph
//               history={state.history}
//               running={running}
//               panelOpen={showControls}
//             />
//           </div>

//           {/* RIGHT */}
//           <div className="right">

//             {/* ✅ LOCK FROM HISTORY */}
//             <LockIndicator history={state.history} />

//             {/* ✅ NOISE */}
//             <NoiseMeter controls={controls} />

//             <ExplanationPanel message={message} />
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default SimulatePage;























import React, { useEffect, useState } from "react";
import "./Simulation.css";

import ControlPanel from "./components/ControlPanel";
import LockIndicator from "./components/LockIndicator";
import NoiseMeter from "./components/NoiseMeter";
import StabilityGraph from "./components/StabilityGraph";

import ExplanationPanel from "./components/ExplanationPanel";
import ModePanel from "./components/ModePanel";
import { simulateStep, initialState, getSystemStatus } from "./SimulateLogic";

import SimulationHero from "./components/SimulationHero";
import SimulationIntro from "./components/SimulationIntro";
import ParametersSection from "./components/ParametersSection";
import GraphExplanation from "./components/GraphExplanation";
import SystemWorking from "./components/SystemWorking";

const SimulatePage = () => {
  const [state, setState] = useState(initialState);

  const [controls, setControls] = useState({
    laser: 5,
    temperature: 5,
    magnetic: 5,
    Kp: 0.5,
    Ki: 0.1,
    Kd: 0.2,
  });

  const [running, setRunning] = useState(true);
  const [speed, setSpeed] = useState(300);
  const [showControls, setShowControls] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  // RESET
  const resetSimulation = () => {
    setState(initialState);
  };

  // MAIN LOOP
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setState((prev) => simulateStep(prev, controls));
    }, speed);

    return () => clearInterval(interval);
  }, [controls, running, speed]);

  const { message } = getSystemStatus(state, controls);

  return (
    <>
      <SimulationHero />
      <SimulationIntro />
      <ParametersSection />
      <GraphExplanation />
      <SystemWorking />

      <section className="simulation-main">
        <h2 className="simulation-title">Frequency Stabilization Simulator</h2>

        <div className={`simulate-container ${fullscreen ? "fullscreen" : ""}`}>

          {/* BACK BUTTON */}
          {fullscreen && (
            <button
              className="fullscreen-back-btn"
              onClick={() => setFullscreen(false)}
            >
              ←
            </button>
          )}

          {/* LEFT PANEL */}
          {!fullscreen && (
            <div className={`left ${showControls ? "" : "collapsed"}`}>
              <button
                className="toggle-btn square-toggle"
                onClick={() => setShowControls(!showControls)}
              >
                {showControls ? "◀" : "▶"}
              </button>

              {showControls && (
                <>
                  <ControlPanel controls={controls} setControls={setControls} />
                  <ModePanel
                    setControls={setControls}
                    resetSimulation={resetSimulation}
                  />
                </>
              )}
            </div>
          )}

          {/* CENTER */}
          <div className="center">

            {/* ICON CONTROL BAR */}
            <div className="graph-controls icon-bar">

              <button
                className="icon-btn"
                onClick={() => setRunning(!running)}
                title={running ? "Pause" : "Play"}
              >
                {running ? "⏸" : "▶"}
              </button>

              <button
                className="icon-btn"
                onClick={() =>
                  setState((prev) => simulateStep(prev, controls))
                }
                title="Step"
              >
                ⏭
              </button>

              <button
                className="icon-btn"
                onClick={() => {
                  setState(initialState);
                  setRunning(true);
                }}
                title="Reset"
              >
                ⟳
              </button>

              <button
                className="icon-btn"
                onClick={() => setFullscreen(true)}
                title="Fullscreen"
              >
                ⛶
              </button>
            </div>

            {/* SPEED CONTROL */}
            <div className="speed-control aesthetic-speed">
              <label>Speed</label>
              <input
                type="range"
                min="100"
                max="1000"
                step="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
              <span>{speed} ms</span>
            </div>

            {/* GRAPH + EXPLANATION */}
            <div className="graph-wrapper">

              <StabilityGraph
                history={state.history}
                running={running}
                panelOpen={showControls}
              />

              {/* NOW BELOW GRAPH */}
              <ExplanationPanel
                message={message}
                state={state}
                controls={controls}
              />

            </div>
          </div>

          {/* RIGHT PANEL */}
          {!fullscreen && (
            <div className="right">

              {/* <LockIndicator
                history={state.history}
                drift={state.drift}
                noise={state.noise}
              /> */}
              <LockIndicator 
  history={state.history}
  locked={state.locked}
  pointType={state.pointType}
/>

              <NoiseMeter
                controls={controls}
                noise={state.noise}
              />

            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default SimulatePage;