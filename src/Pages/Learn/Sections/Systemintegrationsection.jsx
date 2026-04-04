// export default function Systemintegrationsection() {
//   return (
//     // <section className="system-section">
//     <section id="integration" className="system-section">
//       <h2>System Integration</h2>
//       <p>Combining all components into a working atomic clock system.</p>
//     </section>
//   );
// }


export default function Systemintegrationsection() {
  return (
    <section id="integration" className="integration-section">

      {/* 🔥 CENTERED HEADER */}
      <div className="integration-header">
        <h2>System Integration</h2>
        <p>
          Bringing all components together into a synchronized system
          for precise and stable time generation.
        </p>
      </div>

      {/* 🔥 SYSTEM FLOW DIAGRAM */}
      <div className="integration-flow">

        <div className="flow-box">Atomic System</div>
        <div className="arrow">→</div>

        <div className="flow-box">Laser Interaction</div>
        <div className="arrow">→</div>

        <div className="flow-box">Detection Unit</div>
        <div className="arrow">→</div>

        <div className="flow-box highlight">MAVC (Control)</div>
        <div className="arrow">→</div>

        <div className="flow-box">Frequency Output</div>

      </div>

      {/* 🔥 IMAGE + EXPLANATION */}
      <div className="integration-middle">

        {/* <div className="integration-image">
          <img 
            src="/Images/system_integration.png"
            alt="System Integration Diagram"
          />
        </div> */}

        <div className="integration-text">
          <h3>Closed Loop Control System</h3>
          <p>
            The system operates in a continuous feedback loop where the MAVC
            monitors atomic response, detects deviations, and corrects the
            frequency in real time to maintain extreme precision.
          </p>
        </div>

      </div>

      {/* 🔥 CARDS */}
      <div className="integration-cards">

        <div className="integration-card">
          <h3>MAVC (Control Module)</h3>
          <ul>
            <li>Acts as the central control unit of the system.</li>
            <li>Receives signals from detection system.</li>
            <li>Compares actual vs expected atomic frequency.</li>
            <li>Generates correction signals.</li>
            <li>Maintains system stability in real time.</li>
          </ul>
        </div>

        <div className="integration-card">
          <h3>Component Interaction</h3>
          <ul>
            <li>Atoms interact with controlled laser input.</li>
            <li>Detection unit captures atomic response.</li>
            <li>Signal converted into electrical form.</li>
            <li>MAVC processes and analyzes the signal.</li>
            <li>Corrections sent back to system.</li>
          </ul>
        </div>

        <div className="integration-card">
          <h3>Feedback & Output</h3>
          <ul>
            <li>Continuous monitoring of system output.</li>
            <li>Error signals are instantly corrected.</li>
            <li>Frequency gets stabilized over time.</li>
            <li>Final output used as time reference.</li>
            <li>Ensures ultra-high precision timing.</li>
          </ul>
        </div>

      </div>

    </section>
  );
}