// export default function Lasersystemsection() {
//   return (
//     // <section className="laser-section">
//     <section id="laser" className="laser-section">
//       <h2>Laser Systems</h2>
//       <p>Understanding laser sources and their behavior.</p>
//     </section>
//   );
// }


export default function Laserystemsection() {
  return (
    <section id="laser" className="laser-section">

      {/* HEADER */}
      <div className="laser-header">
        <h2>Laser Systems (Hardware Layer)</h2>
        <p>
          The core hardware responsible for generating and controlling light used to interact with atoms.
        </p>
      </div>

      {/* LASER VISUAL */}
      {/* <div className="laser-visual">

        <div className="laser-source">VCSEL</div>

        <div className="laser-beam">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="laser-target">Atoms</div>

      </div> */}
      
      <div className="image ls">
      <img src="/Images/laser_systems_learnpg.png" alt="Laser Systems" />
      </div>

      {/* FEATURE BLOCKS */}
      <div className="laser-features">

        <div className="laser-box vcsel">
          <h3>VCSEL</h3>
          <p>Compact semiconductor laser emitting vertical coherent light.</p>
        </div>

        <div className="laser-box activation">
          <h3>Laser Activation</h3>
          <p>Generation of laser via electrical pumping and stimulated emission.</p>
        </div>

        <div className="laser-box characterization">
          <h3>Laser Characterization</h3>
          <p>Analyzing wavelength, power, and stability for precision.</p>
        </div>

      </div>

      {/* CONTENT */}
      <div className="laser-cards">

        <div className="card">
          <h3>How Lasers Are Generated</h3>
          <ul>
            <li>Electrical current excites electrons inside a semiconductor material.</li>
            <li>Population inversion is achieved where more electrons are in excited state.</li>
            <li>Stimulated emission produces identical photons.</li>
            <li>Photons reflect between mirrors, amplifying the light.</li>
            <li>A coherent laser beam is emitted with precise frequency.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Laser Control Mechanisms</h3>
          <ul>
            <li>Current control adjusts intensity and output power.</li>
            <li>Temperature control stabilizes wavelength and frequency.</li>
            <li>Frequency locking keeps laser tuned to atomic transition.</li>
            <li>Feedback systems continuously correct deviations.</li>
            <li>Modulation enables precise detection of atomic response.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Role in Atomic Clocks</h3>
          <ul>
            <li>Laser interacts directly with atoms to excite transitions.</li>
            <li>Specific frequencies act as a reference for time measurement.</li>
            <li>High stability ensures accurate and consistent operation.</li>
            <li>Compact VCSEL lasers enable portable atomic clock systems.</li>
            <li>Acts as the bridge between electronics and atomic physics.</li>
          </ul>
        </div>

      </div>

    </section>
  );
}