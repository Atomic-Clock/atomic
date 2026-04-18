// export default function SimulationIntro() {
//   return (
//     <section className="sim-intro">
//       <h2>What This Simulation Demonstrates</h2>

//       <p>
//         This simulation represents a simplified model of an atomic clock control
//         system. The goal is to maintain a stable frequency by continuously
//         correcting errors using a feedback mechanism.
//       </p>

//       <p>
//         You will act as a system engineer, adjusting parameters such as laser
//         current, temperature, magnetic disturbances, and PID controller values
//         to observe how the system behaves in real-time.
//       </p>

//       <ul>
//         <li>Understand system stability</li>
//         <li>Observe drift and oscillations</li>
//         <li>Learn PID tuning</li>
//         <li>Achieve frequency lock</li>
//       </ul>
//     </section>
//   );
// }



// export default function SimulationIntro() {
//   return (
//     <section id="intro-section" className="sim-intro">
      
//       {/* HEADER */}
//       <div className="sim-header">
//         <h2>Understanding the Simulation Environment</h2>
//         <p>
//           This section introduces the core idea behind the simulation and explains 
//           how different system parameters influence the behavior of an atomic clock.
//         </p>
//       </div>

//       {/* CONTENT */}
//       <div className="sim-content">

//         {/* BLOCK 1 */}
//         <div className="content-block">
//           <h3>Purpose of the Simulation</h3>
//           <p>
//             This simulation represents a simplified model of an atomic clock control 
//             system, where the primary goal is to maintain a highly stable frequency. 
//             In real-world systems, this stability is achieved using precise feedback 
//             mechanisms that continuously monitor and correct deviations.
//           </p>
//           <p>
//             Here, you will interact with those same control principles in a visual 
//             and intuitive way, allowing you to understand how stability is achieved 
//             and why it sometimes fails.
//           </p>
//         </div>

//         {/* BLOCK 2 */}
//         <div className="content-block">
//           <h3>Your Role as a System Engineer</h3>
//           <p>
//             In this simulation, you take on the role of a system engineer responsible 
//             for tuning and stabilizing the system. You will adjust parameters such as 
//             laser current, temperature, magnetic disturbances, and PID controller values.
//           </p>
//           <p>
//             Every adjustment you make directly affects the system’s response, which 
//             you will observe through real-time changes in the graph and system indicators.
//           </p>
//         </div>

//         {/* BLOCK 3 */}
//         <div className="content-block">
//           <h3>What You Will Observe</h3>
//           <p>
//             As you interact with the system, you will notice different types of behavior:
//           </p>

//           <ul>
//             <li>
//               <strong>Stable Response:</strong> A flat graph indicating successful 
//               frequency lock and minimal error.
//             </li>
//             <li>
//               <strong>Oscillations:</strong> Repeated fluctuations caused by improper 
//               PID tuning, especially high proportional gain.
//             </li>
//             <li>
//               <strong>Drift:</strong> Gradual deviation from stability due to external 
//               disturbances like temperature or magnetic noise.
//             </li>
//           </ul>
//         </div>

//         {/* BLOCK 4 */}
//         <div className="content-block">
//           <h3>Learning Objectives</h3>
//           <p>
//             This simulation is designed to help you develop an intuitive understanding 
//             of control systems and atomic clock behavior. By experimenting with different 
//             conditions, you will learn:
//           </p>

//           <ul>
//             <li>How system stability depends on proper parameter tuning</li>
//             <li>How environmental factors introduce noise and instability</li>
//             <li>How PID controllers correct errors in real-time</li>
//             <li>How and why a system achieves or loses frequency lock</li>
//           </ul>
//         </div>

//       </div>
//     </section>
//   );
// }




export default function SimulationIntro() {
  return (
    <section id="intro-section" className="sim-intro">
      
      {/* HEADER */}
      <div className="sim-header">
        <h2>Understanding the Simulation Environment</h2>

        <p>
          This section introduces the core idea behind the simulation and explains 
          how different system parameters influence the behavior of an atomic clock.
        </p>

        <p className="sim-highlight">
          Explore how system parameters directly control frequency stability and lock behavior.
        </p>
      </div>

      {/* DIVIDER */}
    {/* <div className="sim-divider"></div> */}

      {/* CONTENT WRAPPER */}
      <div className="sim-content-wrapper">
        <div className="sim-content">

          {/* BLOCK 1 */}
          <div className="content-block">
            <h3>Purpose of the Simulation</h3>
            <p>
              This simulation represents a simplified model of an atomic clock control 
              system, where the primary goal is to maintain a highly stable frequency. 
              In real-world systems, this stability is achieved using precise feedback 
              mechanisms that continuously monitor and correct deviations.
            </p>
            <p>
              Here, you will interact with those same control principles in a visual 
              and intuitive way, allowing you to understand how stability is achieved 
              and why it sometimes fails.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="content-block">
            <h3>Your Role as a System Engineer</h3>
            <p>
              In this simulation, you take on the role of a system engineer responsible 
              for tuning and stabilizing the system. You will adjust parameters such as 
              laser current, temperature, magnetic disturbances, and PID controller values.
            </p>
            <p>
              Every adjustment you make directly affects the system’s response, which 
              you will observe through real-time changes in the graph and system indicators.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="content-block">
            <h3>What You Will Observe</h3>
            <p>
              As you interact with the system, you will notice different types of behavior:
            </p>

            <ul className="sim-list">
              <li>
                <strong>Stable Response:</strong> A flat graph indicating successful 
                frequency lock and minimal error.
              </li>
              <li>
                <strong>Oscillations:</strong> Repeated fluctuations caused by improper 
                PID tuning, especially high proportional gain.
              </li>
              <li>
                <strong>Drift:</strong> Gradual deviation from stability due to external 
                disturbances like temperature or magnetic noise.
              </li>
            </ul>
          </div>

          {/* BLOCK 4 */}
          <div className="content-block">
            <h3>Learning Objectives</h3>
            <p>
              This simulation is designed to help you develop an intuitive understanding 
              of control systems and atomic clock behavior. By experimenting with different 
              conditions, you will learn:
            </p>

            <ul className="sim-list">
              <li>How system stability depends on proper parameter tuning</li>
              <li>How environmental factors introduce noise and instability</li>
              <li>How PID controllers correct errors in real-time</li>
              <li>How and why a system achieves or loses frequency lock</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}