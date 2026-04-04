// export default function Advancedconceptsection() {
//   return (
//     // <section className="advanced-section">
//     <section id="advanced" className="advanced-section">
//       <h2>Advanced Concepts</h2>
//       <p>Doppler-free techniques and coherent population trapping.</p>
//     </section>
//   );
// }


// import React from "react";

// const AdvancedConcepts = () => {
//   return (
//     <section id="advanced" className="advanced-section">
//       {/* Section Header */}
//       <div className="section-header">
//         <h1>Advanced Spectroscopy Techniques</h1>
//         <p>How scientists overcome fundamental limitations to achieve ultra-precise atomic clocks.</p>
//       </div>

//       {/* Intro Block */}
//       <div className="intro-block fade-in">
//         <p>
//           Even with precise atomic transitions, real-world clocks face challenges:
//         </p>
//         <ul>
//           <li><strong>Doppler broadening:</strong> Thermal motion of atoms smears spectral lines.</li>
//           <li><strong>Environmental noise:</strong> Magnetic fields and temperature fluctuations affect precision.</li>
//           <li><strong>Laser noise:</strong> Imperfect light sources introduce errors.</li>
//         </ul>
//         <p>
//           Advanced techniques are applied to measure atomic transitions with ultimate accuracy.
//         </p>
//         <div className="animation-placeholder">
//           [Animation: Blurred spectral lines → sharp peaks]
//         </div>
//       </div>

//       {/* Doppler-Free Spectroscopy Card */}
//       <div className="card1 fade-in left-card1">
//         <div className="card-text">
//           <h2>Doppler-Free Spectroscopy</h2>
//           <ul>
//             <li><strong>Problem:</strong> Atomic motion causes Doppler broadening → absorption lines are smeared.</li>
//             <li><strong>Solution:</strong> Use counter-propagating laser beams. Only stationary atoms contribute to sharp lines.</li>
//             <li>Outcome: Narrow absorption peaks → higher precision frequency measurement.</li>
//           </ul>
//           <div className="insight-box">
//             Doppler-Free spectroscopy is the first step toward ultra-precise atomic clocks.
//           </div>
//         </div>
//         <div className="card-visual">
//           <div className="animation-placeholder">
//             [Animation: Two lasers hitting atoms → stationary atoms highlighted]
//           </div>
//         </div>
//       </div>

//       {/* Coherent Population Trapping Card */}
//       <div className="card1 fade-in right-card1">
//         <div className="card-visual">
//           <div className="animation-placeholder">
//             [Animation: Energy levels → atoms enter dark state]
//           </div>
//         </div>
//         <div className="card-text">
//           <h2>Coherent Population Trapping (CPT)</h2>
//           <ul>
//             <li>Two laser frequencies trap atoms in a “dark state” where they stop absorbing light.</li>
//             <li>Reduces energy dissipation and stabilizes atomic states.</li>
//             <li>Core principle behind compact atomic clocks (USAC) – small, low-power, extremely precise.</li>
//           </ul>
//           <div className="insight-box">
//             CPT allows clocks to achieve long-term stability without large setups.
//           </div>
//         </div>
//       </div>

//       {/* Real-World Application Card */}
//       <div className="card fade-in full-width-card">
//         <div className="card-visual">
//           <div className="animation-placeholder">
//             [Animation/Image: Satellite with compact atomic clock]
//           </div>
//         </div>
//         <div className="card-text">
//           <h2>Real-World Use – USAC</h2>
//           <ul>
//             <li>USAC clocks use CPT for satellites and navigation systems.</li>
//             <li>Compact, low-power design with high stability is essential for GPS, telecom, and space applications.</li>
//           </ul>
//         </div>
//       </div>

//       {/* Interactive Footer */}
//       <div className="interactive-footer fade-in">
//         <p>
//           Hover over terms like <strong>Doppler</strong>, <strong>CPT</strong>, or <strong>USAC</strong> to learn more! Drag the slider to see blurred → sharp spectral lines.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AdvancedConcepts;


export default function AdvancedConcepts() {
  return (
    <section id="advanced" className="advanced-section">

      {/* HEADER */}
      <div className="advanced-header">
        <h2>Advanced Spectroscopy Techniques</h2>
        <p>
          How scientists overcome physical limitations to achieve ultra-precise atomic clocks.
        </p>
      </div>

      {/* ROW 1 */}
      <div className="adv-row">
        <div className="card">
          <h3>Why Advanced Techniques ?</h3>
          <ul>
            <li>Atomic clocks require extremely precise frequency measurement.</li>
            <li>Real-world conditions introduce noise and inaccuracies.</li>
            <li>Doppler broadening spreads spectral lines due to motion.</li>
            <li>External disturbances reduce measurement precision.</li>
            <li>Advanced methods are needed to achieve ultra-high accuracy.</li>
          </ul>
        </div>

        <div className="visual blur-lines"></div>
      </div>

      {/* ROW 2 */}
      <div className="adv-row reverse">
        <div className="card">
          <h3>Doppler-Free Spectroscopy</h3>
          <ul>
            <li>Moving atoms distort observed frequencies.</li>
            <li>This leads to broadened and unclear spectral lines.</li>
            <li>Two opposite laser beams are used.</li>
            <li>Doppler shifts cancel out for stationary atoms.</li>
            <li>Produces sharp and precise spectral peaks.</li>
          </ul>

          <div className="insight-box">
            Eliminates Doppler broadening → Enables high-resolution measurements
          </div>
        </div>

        {/* <div className="visual laser-lines"> 
          <span></span>
        </div> */}

            <div className="image style1">
      <img src="/Images/doppler_free_learnpg.png" alt="Doppler Free Spectroscopy" />
    </div>

      </div>

      {/* ROW 3 */}
      <div className="adv-row">
        <div className="card">
          <h3>Coherent Population Trapping (CPT)</h3>
          <ul>
            <li>Uses two laser frequencies to control atomic states.</li>
            <li>Atoms enter a “dark state” and stop absorbing light.</li>
            <li>This reduces energy loss and improves stability.</li>
            <li>Generates a narrow and stable resonance signal.</li>
            <li>Essential for compact atomic clocks.</li>
          </ul>

          <div className="insight-box">
            Core principle behind compact atomic clocks (USAC)
          </div>
        </div>

        {/* <div className="visual energy-level">
          <span></span>
        </div> */}


            <div className="image style2">
      <img src="/Images/cpt_learnpg.png" alt="CPT" />
    </div>
    
      </div>

      {/* ROW 4 */}
      <div className="adv-row reverse">
        <div className="card">
          <h3>Real-World Application (USAC)</h3>
          <ul>
            <li>Chip-scale atomic clocks use CPT.</li>
            <li>Compact and energy-efficient design.</li>
            <li>Maintains high precision in small devices.</li>
            <li>Used in GPS, telecom, and satellites.</li>
            <li>Enables portable timing systems.</li>
          </ul>
        </div>

        {/* <div className="visual chip-box"></div> */}

            <div className="image style3">
      <img src="/Images/application_image_learnpg.jpg" alt="Applications" />
    </div>
      </div>

    </section>
  );
}