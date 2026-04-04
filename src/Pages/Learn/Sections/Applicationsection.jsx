// export default function Applicationssection() {
//   return (
//     // <section className="applications-section">
//     <section id="applications" className="applications-section">
//       <h2>Real-World Applications</h2>
//       <p>Where atomic clocks are used in real life.</p>
//     </section>
//   );
// }


// export default function Applicationssection() {
//   return (
//     <section id="realworld" className="realworld-section">

//       {/* 🔥 CENTER HEADER */}
//       <div className="realworld-header">
//         <h2>Real-World Atomic Clock Systems</h2>
//         <p>
//           From lab precision to real-world deployment — enabling accurate timing
//           in navigation, communication, and advanced technologies.
//         </p>
//       </div>

//       {/* 🔥 USAC FEATURE BLOCK */}
//       <div className="usac-container">

//         <div className="usac-text">
//           <h3>USAC (Chip-Scale Atomic Clock)</h3>
//           <p>
//             A compact, low-power atomic clock designed for real-world applications
//             where precision timing is required in portable and embedded systems.
//           </p>

//           <ul>
//             <li>Ultra-small chip-scale design</li>
//             <li>Low power consumption</li>
//             <li>High precision timing output</li>
//             <li>Ideal for GPS-denied environments</li>
//             <li>Used in defense and IoT systems</li>
//           </ul>
//         </div>

//         <div className="usac-image">
//           <img 
//             src="/Images/usac.png" 
//             alt="USAC Atomic Clock"
//           />
//         </div>

//       </div>

//       {/* 🔥 ADVANCED SYSTEM GRID */}
//       <div className="advanced-grid">

//         <div className="advanced-card">
//           <h3>Laser Cooling</h3>
//           <p>Reduces atomic motion to improve accuracy and stability.</p>
//         </div>

//         <div className="advanced-card">
//           <h3>Optical Transitions</h3>
//           <p>Uses high-frequency light for ultra-precise measurements.</p>
//         </div>

//         <div className="advanced-card">
//           <h3>Atomic Fountains</h3>
//           <p>Extends interaction time to enhance precision.</p>
//         </div>

//         <div className="advanced-card">
//           <h3>Optical Lattice</h3>
//           <p>Traps atoms in laser grids to minimize disturbances.</p>
//         </div>

//         <div className="advanced-card">
//           <h3>Ultra-Stable Lasers</h3>
//           <p>Ensures minimal noise during atomic interaction.</p>
//         </div>

//       </div>

//       {/* 🔥 FINAL IMPACT LINE */}
//       <div className="realworld-footer">
//         <p>
//           Powering the future of precision — from satellites to smartphones.
//         </p>
//       </div>

//     </section>
//   );
// }


export default function Applicationsection() {
  return (
    <section id="applications" className="applications-section">

      {/* 🔥 HEADER */}
      <div className="realworld-header">
        <h2>Real-World Atomic Clock Systems</h2>
        <p>
          Transitioning from laboratory precision to real-world deployment,
          atomic clocks enable accurate timing across navigation, communication,
          defense, and space technologies.
        </p>
      </div>

      {/* 🔥 USAC SECTION */}
      <div className="usac-container">

        <div className="usac-text">
          <h3>USAC (Chip-Scale Atomic Clock)</h3>
          <p>
            The USAC is a highly miniaturized atomic clock designed for portable
            and embedded systems. Despite its compact size, it delivers reliable
            and precise timing, making it ideal for real-world environments where
            traditional atomic clocks are impractical.
          </p>

          <ul>
            <li>Compact chip-scale design for portability</li>
            <li>Low power consumption for battery-based systems</li>
            <li>Maintains high timing accuracy and stability</li>
            <li>Operates in GPS-denied or remote environments</li>
            <li>Widely used in defense, IoT, and communication systems</li>
          </ul>
        </div>

        <div className="usac-image">
          <img 
            src="/Images/usac_learnpg.png" 
            alt="USAC Atomic Clock"
          />
        </div>

      </div>

      {/* 🔥 ADVANCED SECTION TITLE */}
      <div className="advanced-header">
        <h3>Advanced Atomic Clock Technologies</h3>
        <p>
          Modern atomic clocks use advanced techniques to achieve extreme
          precision and long-term stability beyond conventional systems.
        </p>
      </div>

      {/* 🔥 ADVANCED GRID */}
      <div className="advanced-grid">

        <div className="advanced-card">
          <h4>Laser Cooling</h4>
          <p>
            Atoms are cooled to near absolute zero, reducing thermal motion
            and significantly improving measurement accuracy.
          </p>
        </div>

        <div className="advanced-card">
          <h4>Optical Transitions</h4>
          <p>
            Uses high-frequency light waves instead of microwaves, enabling
            finer resolution and higher precision.
          </p>
        </div>

        <div className="advanced-card">
          <h4>Atomic Fountains</h4>
          <p>
            Atoms are launched upward, increasing interaction time and
            enhancing precision of frequency measurement.
          </p>
        </div>

        <div className="advanced-card">
          <h4>Optical Lattice</h4>
          <p>
            Atoms are trapped in a laser grid, minimizing movement and
            reducing environmental disturbances.
          </p>
        </div>

        <div className="advanced-card">
          <h4>Ultra-Stable Lasers</h4>
          <p>
            Highly stable lasers reduce noise and ensure consistent
            interaction with atomic transitions.
          </p>
        </div>

      </div>

      {/* 🔥 WORKING SUMMARY */}
      <div className="realworld-working">
        <h3>How Advanced Systems Work</h3>
        <p>
          Atoms are first prepared and stabilized using cooling or trapping
          techniques. A highly stable laser interacts with these atoms, and the
          resulting resonance is detected with extreme sensitivity. Control
          systems analyze any deviation and apply corrections through a feedback
          loop, producing a highly stable and accurate frequency output.
        </p>
      </div>

      {/* 🔥 FINAL IMPACT */}
      <div className="realworld-footer">
        <p>
          Powering the future of precision — from satellites to smartphones.
        </p>
      </div>

    </section>
  );
}