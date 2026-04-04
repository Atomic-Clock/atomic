// export default function Detectionsection() {
//   return (
//     // <section className="detection-section">
//     <section id="detection" className="detection-section">
//       <h2>Detection & Measurement</h2>
//       <p>Photodetectors and signal visualization tools.</p>
//     </section>
//   );
// }


// export default function DetectionSection() {
//   return (
//     <section id="detection" className="detection-section">

//       {/* HEADER */}
//       <div className="detection-header">
//         <h2>Detection & Measurement</h2>
//         <p>
//           Converting atomic interactions into measurable electrical signals and visualizing them.
//         </p>
//       </div>

//       {/* SIGNAL FLOW VISUAL */}
//       <div className="signal-flow">

//         <div className="flow-box">Light</div>

//         <div className="flow-line"></div>

//         <div className="flow-box">Photodetector</div>

//         <div className="flow-line"></div>

//         <div className="flow-box">Signal</div>

//         <div className="flow-line"></div>

//         <div className="flow-box oscilloscope">
//           Oscilloscope
//           <div className="wave"></div>
//         </div>

//       </div>

//       {/* CONTENT */}
//       <div className="detection-cards">

//         <div className="card">
//           <h3>Photodetector</h3>
//           <ul>
//             <li>Converts incoming light into electrical signals.</li>
//             <li>Based on the photoelectric effect.</li>
//             <li>Detects intensity variations after atomic interaction.</li>
//             <li>Captures resonance signals from atoms.</li>
//             <li>Key factors: sensitivity, response time, and noise.</li>
//           </ul>
//         </div>

//         <div className="card">
//           <h3>Oscilloscope</h3>
//           <ul>
//             <li>Displays electrical signals as waveforms.</li>
//             <li>Plots voltage versus time.</li>
//             <li>Helps visualize resonance peaks.</li>
//             <li>Used for signal analysis and debugging.</li>
//             <li>Essential for tuning the system.</li>
//           </ul>
//         </div>

//         <div className="card">
//           <h3>Signal Conversion & Visualization</h3>
//           <ul>
//             <li>Light from atoms reaches the photodetector.</li>
//             <li>Converted into electrical current.</li>
//             <li>Signal carries atomic transition information.</li>
//             <li>Oscilloscope displays waveform patterns.</li>
//             <li>Peaks indicate atomic resonance.</li>
//           </ul>
//         </div>

//       </div>

//     </section>
//   );
// }



// export default function DetectionSection() {
//   return (
//     <section id="detection" className="detection-section">

//       {/* TOP SPLIT */}
//       <div className="detection-container">

//         {/* LEFT SIDE */}
//         <div className="detection-left">

//           <h2>Detection & Measurement</h2>
//           <p>
//             Converting atomic interactions into measurable electrical signals
//             and visualizing them in real time.
//           </p>

//           <div className="mini-cards">

//             <div className="mini-card">
//               <h3>Photodetector</h3>
//               <p>Light → Electrical Signal Conversion</p>
//             </div>

//             <div className="mini-card">
//               <h3>Oscilloscope</h3>
//               <p>Electrical Signal → Waveform Visualization</p>
//             </div>

//           </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="detection-right">

//           <div className="signal-flow-vertical">

//             <div className="flow-box">Light</div>
//             <div className="flow-line-vertical"></div>

//             <div className="flow-box">Photodetector</div>
//             <div className="flow-line-vertical"></div>

//             <div className="flow-box">Signal</div>
//             <div className="flow-line-vertical"></div>

//             <div className="flow-box oscilloscope">
//               Oscilloscope
//               <div className="wave"></div>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* 🔥 FULL CONTENT BACK */}
//       <div className="detection-cards">

//         <div className="card">
//           <h3>Photodetector</h3>
//           <ul>
//             <li>Converts incoming light into electrical signals.</li>
//             <li>Based on the photoelectric effect.</li>
//             <li>Detects intensity variations after atomic interaction.</li>
//             <li>Captures resonance signals from atoms.</li>
//             <li>Key factors: sensitivity, response time, and noise.</li>
//           </ul>
//         </div>

//         <div className="card">
//           <h3>Oscilloscope</h3>
//           <ul>
//             <li>Displays electrical signals as waveforms.</li>
//             <li>Plots voltage versus time.</li>
//             <li>Helps visualize resonance peaks.</li>
//             <li>Used for signal analysis and debugging.</li>
//             <li>Essential for tuning the system.</li>
//           </ul>
//         </div>

//         <div className="card">
//           <h3>Signal Conversion & Visualization</h3>
//           <ul>
//             <li>Light from atoms reaches the photodetector.</li>
//             <li>Converted into electrical current.</li>
//             <li>Signal carries atomic transition information.</li>
//             <li>Oscilloscope displays waveform patterns.</li>
//             <li>Peaks indicate atomic resonance.</li>
//           </ul>
//         </div>

//       </div>

//     </section>
//   );
// }


export default function DetectionSection() {
  return (
    <section id="detection" className="detection-section">

      {/* 🔥 CENTERED HEADER */}
      <div className="detection-header">
        <h2>Detection & Measurement</h2>
        <p>
          Converting atomic interactions into measurable electrical signals
          and visualizing them in real time.
        </p>
      </div>

      {/* TOP SPLIT */}
      <div className="detection-container">

        {/* LEFT SIDE */}
        <div className="detection-left">

          <div className="mini-cards">
            <div className="mini-card">
              <h3>Photodetector</h3>
              <p>Light → Electrical Signal Conversion</p>
            </div>

            <div className="mini-card">
              <h3>Oscilloscope</h3>
              <p>Electrical Signal → Waveform Visualization</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="detection-right">
  <img 
    src="/Images/detection_learnpg.png" 
    alt="Detection Process"
    className="detection-image"
  />
</div>

      </div>

      {/* 🔥 FULL CONTENT */}
      <div className="detection-cards">

        <div className="card">
          <h3>Photodetector</h3>
          <ul>
            <li>Converts incoming light into electrical signals.</li>
            <li>Based on the photoelectric effect.</li>
            <li>Detects intensity variations after atomic interaction.</li>
            <li>Captures resonance signals from atoms.</li>
            <li>Key factors: sensitivity, response time, and noise.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Oscilloscope</h3>
          <ul>
            <li>Displays electrical signals as waveforms.</li>
            <li>Plots voltage versus time.</li>
            <li>Helps visualize resonance peaks.</li>
            <li>Used for signal analysis and debugging.</li>
            <li>Essential for tuning the system.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Signal Conversion & Visualization</h3>
          <ul>
            <li>Light from atoms reaches the photodetector.</li>
            <li>Converted into electrical current.</li>
            <li>Signal carries atomic transition information.</li>
            <li>Oscilloscope displays waveform patterns.</li>
            <li>Peaks indicate atomic resonance.</li>
          </ul>
        </div>

      </div>

    </section>
  );
}