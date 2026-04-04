// export default function Spectroscopysection() {
//   return (
//     // <section className="spectroscopy-section">
//     <section id="spectroscopy" className="spectroscopy-section">
//       <h2>Spectroscopy</h2>
//       <p>Understanding interaction between light and atoms.</p>
//     </section>
//   );
// }


// import Keypointsbox from "../Components/Keypointsbox";
// import Whyitmatters from "../Components/Whyitmatters";

// export default function SpectroscopySection() {
//   return (
//     <section id="spectroscopy" className="spectroscopy-section">
      
//       {/* HEADER */}
//       <div className="spectroscopy-header">
//         <h2>Spectroscopy & Light Signatures</h2>
//         <p>
//           Understanding how light reveals atomic behavior and enables precise
//           time measurement.
//         </p>
//       </div>

//       {/* MAIN VISUAL */}
//       <div className="spectroscopy-visual">
//         <div className="spectrum-box">

//           {/* Spectral Lines */}
//           <div className="spectral-lines">
//             <span className="line l1"></span>
//             <span className="line l2"></span>
//             <span className="line l3"></span>
//             <span className="line l4"></span>
//             <span className="line l5"></span>
//           </div>

//         </div>
//       </div>

//       {/* IMAGES */}
//       <div className="spectroscopy-images">
//         <div className="image-card">
//           <img src="/images/emission.jpg" alt="Emission Spectrum" />
//           <p>Emission Spectrum</p>
//         </div>

//         <div className="image-card">
//           <img src="/images/absorption.jpg" alt="Absorption Spectrum" />
//           <p>Absorption Spectrum</p>
//         </div>
//       </div>

//       {/* CONTENT CARDS */}
//       <div className="spectroscopy-cards">

//         <div className="card">
//           <h3>What is Spectroscopy?</h3>
//           <p>
//             Spectroscopy is the study of how matter interacts with electromagnetic radiation. 
//             It helps scientists analyze the composition and behavior of atoms by observing 
//             how they absorb or emit light.
//           </p>
//           <p>
//             When atoms interact with energy, they produce unique patterns of light. These 
//             patterns act like fingerprints that can be studied and measured.
//           </p>
//         </div>

//         <div className="card">
//           <h3>Emission and Absorption Spectra</h3>
//           <p>
//             Atoms emit or absorb light at specific wavelengths, forming distinct spectral 
//             lines rather than a continuous spectrum.
//           </p>
//           <p>
//             Emission spectrum → bright lines on dark background <br/>
//             Absorption spectrum → dark lines on continuous light <br/>
//             Each element has its own unique spectral pattern.
//           </p>
//         </div>

//         <div className="card">
//           <h3>Role in Atomic Clocks</h3>
//           <p>
//             Atomic clocks rely on detecting extremely precise frequencies associated with 
//             atomic transitions.
//           </p>
//           <p>
//             By observing specific spectral lines, scientists can measure the exact frequency 
//             of radiation emitted during electron transitions. This frequency acts as a stable 
//             reference for measuring time with extreme accuracy.
//           </p>
//         </div>

//       </div>

//     </section>
//   );
// }


export default function SpectroscopySection() {
  return (
    <section id="spectroscopy" className="spectroscopy-section">

      {/* HEADER */}
      <div className="spectroscopy-header">
        <h2>Spectroscopy & Light Interaction</h2>
        <p>
          Understanding how light reveals atomic behavior and enables precise time measurement.
        </p>
      </div>

      {/* PRISM ANIMATION */}
      <div className="prism-container">

        {/* Incoming Light */}
        <div className="light-beam"></div>

        {/* Prism */}
        <div className="prism"></div>

        {/* Split Spectrum */}
        <div className="spectrum">
          <span className="s-line violet"></span>
          <span className="s-line blue"></span>
          <span className="s-line cyan"></span>
        </div>

      </div>

      {/* SPECTRA BLOCKS (instead of images) */}
      <div className="spectra-types">

        {/* Emission */}
        <div className="spectra-card">
          <h3>Emission Spectrum</h3>
          <div className="emission-box">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>

        {/* Absorption */}
        <div className="spectra-card">
          <h3>Absorption Spectrum</h3>
          <div className="absorption-box">
            <div className="cut c1"></div>
            <div className="cut c2"></div>
            <div className="cut c3"></div>
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="spectroscopy-cards">

        <div className="card">
          <h3>What is Spectroscopy ?</h3>
          <ul>
            <li>Spectroscopy is the study of how matter interacts with electromagnetic radiation.</li>
            <li>It helps scientists analyze the composition and behavior of atoms by observing how they absorb or emit light.</li>
        
            <li>When atoms interact with energy, they produce unique patterns of light.</li>
            <li>These patterns act like fingerprints that can be studied and measured.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Emission and Absorption Spectra</h3>
          <ul>
            <li>
            Atoms emit or absorb light at specific wavelengths, forming distinct spectral lines rather than a continuous spectrum.
          </li>
          <li>
            Emission spectrum → bright lines on dark background </li>
          <li>Absorption spectrum → dark lines on continuous light </li>
          <li>Each element has its own unique spectral pattern.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Role in Atomic Clocks</h3>
          <ul><li>
            Atomic clocks rely on detecting extremely precise frequencies associated with atomic transitions.
          </li>
          <li>
            By observing specific spectral lines, scientists can measure the exact frequency of radiation emitted during electron transitions.</li>
          <li>This frequency acts as a stable reference for measuring time with extreme accuracy.</li>
          </ul>
        </div>

      </div>

    </section>
  );
}