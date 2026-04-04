// export default function Basicssection() {
//   return (
//     <section id="basics" className="basics-section">
//       <h2>Basics of Time & Atomic Clocks</h2>
//       <p>This section introduces fundamental concepts.</p>
//     </section>
//   );
// }

// export default function BasicsSection() {
//   return (
//     <section id="basics" className="basics-section">
//       {/* Header */}
//       <div className="basics-header">
//         <h2>Basics of Time & Atomic Clocks</h2>
//         <p>
//           Understanding how time is defined and why atomic precision matters in
//           modern technology.
//         </p>
//       </div>

//       {/* Content */}
//       <div className="basics-content">
//         {/* LEFT SIDE (TEXT) */}
//         <div className="basics-text">
//           <div className="content-block">
//             <h3>What is Time?</h3>
//             <p>
//               Time is a measurable quantity used to sequence events and describe
//               the progression of the physical world.
//             </p>
//           </div>

//           <div className="content-block">
//             <h3>Why Do We Need Accurate Time?</h3>
//             <p>
//               Precise time is essential for technologies like GPS navigation,
//               communication systems, and scientific experiments.
//             </p>
//           </div>

//           <div className="content-block">
//             <h3>What is an Atomic Clock?</h3>
//             <p>
//               An atomic clock measures time using the frequency of atomic
//               transitions in elements like cesium, making it the most accurate
//               timekeeping method available.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE (VISUAL PLACEHOLDER) */}
//         <div className="basics-visual">
//           <div className="visual-box">
//             <p>Visual / Diagram Here</p>
//           </div>
//         </div>
//       </div>

//       {/* Extra Info */}
//       <div className="basics-extra">
//         <div className="key-points">
//           <h4>Key Points</h4>
//           <ul>
//             <li>Time helps us measure and organize events</li>
//             <li>Accuracy is critical in modern technology</li>
//             <li>Atomic clocks provide extreme precision</li>
//           </ul>
//         </div>

//         <div className="why-matters">
//           <h4>Why This Matters</h4>
//           <p>
//             Without atomic clocks, systems like GPS would become inaccurate
//             within seconds, affecting navigation and global communication.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


import Keypointsbox from "../Components/Keypointsbox";
import Whyitmatters from "../Components/Whyitmatters";

export default function BasicsSection() {
  return (
    <section id="basics" className="basics-section">
      {/* Header */}
      <div className="basics-header">
        <h2>Basics of Time & Atomic Clocks</h2>
        <p>
          Understanding how time is defined and why precision is critical in
          modern technology and scientific systems.
        </p>
      </div>

      {/* Content */}
      <div className="basics-content">
        {/* LEFT SIDE */}
        <div className="basics-text">
          <div className="content-block">
            <h3>What is Time?</h3>
            <p>
              Time is a fundamental physical quantity used to measure the
              sequence and duration of events. It helps us understand motion,
              change, and the progression of the universe in a structured way.
            </p>
          </div>

          <div className="content-block">
            <h3>Why Do We Need Accurate Time?</h3>
            <p>
              Accurate timekeeping is essential for technologies like GPS,
              telecommunications, and scientific research. Even a tiny error in
              time measurement can lead to significant inaccuracies in these
              systems.
            </p>
          </div>

          <div className="content-block">
            <h3>What is an Atomic Clock?</h3>
            <p>
              An atomic clock measures time based on the precise frequency of
              atomic transitions in elements like cesium. It is the most
              accurate timekeeping device, capable of maintaining precision over
              millions of years.
            </p>
          </div>
        </div>

        {/* <div className="basics-visual">
          <div className="visual-box">
            <div className="atom-animation">
              <div className="nucleus"></div>

              <div className="orbit orbit1">
                <div className="electron"></div>
                </div>
                
                <div className="orbit orbit2">
                    <div className="electron"></div>
                    </div>
                    
                    <div className="orbit orbit3">
                        <div className="electron"></div>
                        </div>
            </div>
          </div>
        </div> */}

<div className="basics-visual">
          <div className="visual-box">
<div className="time-evolution">
  <div className="clock analog">
    <div className="hand hour"></div>
    <div className="hand minute"></div>
  </div>

  <div className="clock digital">
    <span>12:00:00</span>
  </div>

  <div className="clock atomic">
    <span>12:00:00.000</span>
  </div>
</div>
</div>
</div>


      </div>

      {/* Reusable Components */}
      <div className="basics-extra">
        <Keypointsbox
          points={[
            "Time helps measure and organize events in a structured manner.",
            "High precision is critical for modern technological systems.",
            "Atomic clocks use atomic transitions for unmatched accuracy.",
            "Even nanosecond errors can impact real-world systems.",
          ]}
        />

        <Whyitmatters
          points={[
            "GPS positioning depends on extremely precise time signals.",
            "Communication networks require synchronized timing.",
            "Scientific experiments highly rely on precise and accurate measurements.",
            "Small timing errors can lead to large system failures.",
          ]}
        />
      </div>
    </section>
  );
}