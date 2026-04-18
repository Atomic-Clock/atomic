
// export default function ParametersSection() {
//   return (
//     <section className="sim-params">

//       {/* HEADER */}
//       <div className="sim-header">
//         <h2>Control Parameters in Frequency Stabilization</h2>
//         <p>
//           This simulation represents a real-time atomic clock stabilization system.
//           Every parameter directly influences frequency stability, lock condition,
//           and system noise behavior.
//         </p>
//       </div>

//       <div className="params-flow">

//         {/* INTRO */}
//         <div className="param-row">
//           <h3>What This Simulation Represents</h3>
//           <p>
//             The system simulates <strong>frequency deviation vs time</strong>.
//             In an ideal atomic clock, frequency remains perfectly stable.
//           </p>

//           <p>However in real systems, stability is affected by:</p>

//           <ul>
//             <li><strong>Drift →</strong> slow shift due to temperature & magnetic effects</li>
//             <li><strong>Noise →</strong> random fluctuations from environment</li>
//             <li><strong>Control Response →</strong> PID correction behavior</li>
//           </ul>

//           <p><strong>Graph Meaning:</strong></p>
//           <ul>
//             <li>Flat line → Perfect LOCKED state</li>
//             <li>Oscillation → PID instability (over-correction)</li>
//             <li>Drift → External disturbance dominating system</li>
//             <li>Random spikes → Noise interference</li>
//           </ul>
//         </div>

//         {/* LASER */}
//         <div className="param-row">
//           <h3>Laser Current (Excitation Control)</h3>

//           <p>
//             The laser excites atoms and measures their energy transitions.
//             This interaction defines the reference frequency of the system.
//           </p>

//           <ul>
//             <li><strong>Unit:</strong> Normalized scale (0 – 10)</li>
//           </ul>

//           <p><strong>System Behavior:</strong></p>
//           <ul>
//             <li><strong>0 – 3:</strong> Weak signal → high sensitivity to noise → unstable graph</li>
//             <li><strong>4 – 7:</strong> Optimal excitation → clear resonance → stable locking</li>
//             <li><strong>8 – 10:</strong> Overdrive → atomic saturation → measurement distortion</li>
//           </ul>

//           <p>
//             Laser instability amplifies the effect of noise and makes frequency locking harder.
//           </p>
//         </div>

//         {/* TEMPERATURE */}
//         <div className="param-row">
//           <h3>Temperature (Atomic Motion Influence)</h3>

//           <p>
//             Temperature controls atomic motion. Higher temperature increases
//             Doppler broadening, reducing measurement precision.
//           </p>

//           <p><strong>Behavior:</strong></p>
//           <ul>
//             <li><strong>Low:</strong> sharp atomic transitions → stable frequency</li>
//             <li><strong>Medium:</strong> mild broadening → small fluctuations</li>
//             <li><strong>High:</strong> high motion → strong drift + noise amplification</li>
//           </ul>

//           <p>
//             Temperature also increases sensitivity to magnetic noise and reduces PID effectiveness.
//           </p>
//         </div>

//         {/* MAGNETIC */}
//         <div className="param-row">
//           <h3>Magnetic Field Noise (Environmental Disturbance)</h3>

//           <p>
//             External magnetic fields shift atomic energy levels (Zeeman Effect),
//             causing systematic frequency deviation.
//           </p>

//           <p><strong>Behavior:</strong></p>
//           <ul>
//             <li><strong>Low:</strong> stable environment → clean signal</li>
//             <li><strong>Medium:</strong> random fluctuations → noisy graph</li>
//             <li><strong>High:</strong> continuous interference → long-term drift</li>
//           </ul>

//           <p>
//             Magnetic noise is one of the strongest causes of lock loss in the system.
//           </p>
//         </div>

//         {/* NOISE METER (NEW SECTION ADDED) */}
//         <div className="param-row highlight-row">
//           <h3>Noise Meter (Real-Time Environmental Stability)</h3>

//           <p>
//             The noise meter represents total system disturbance including:
//           </p>

//           <ul>
//             <li>Magnetic interference</li>
//             <li>Thermal fluctuations</li>
//             <li>Laser instability</li>
//             <li>Random environmental noise</li>
//           </ul>

//           <p><strong>Noise Levels:</strong></p>
//           <ul>
//             <li><strong>0 – 2:</strong> Clean environment → stable graph + strong lock</li>
//             <li><strong>3 – 6:</strong> Moderate noise → small jitter in frequency</li>
//             <li><strong>7 – 10:</strong> High noise → unstable system + frequent unlocks</li>
//           </ul>

//           <p>
//             Noise directly affects the graph as random spikes and increases the
//             probability of losing lock even with good PID tuning.
//           </p>
//         </div>

//         {/* PID */}
//         <div className="param-row">
//           <h3>PID Controller (Error Correction System)</h3>

//           <p>
//             The PID controller continuously corrects frequency error caused by
//             drift and noise.
//           </p>

//           <ul>
//             <li><strong>Kp:</strong> reacts to current error (fast correction)</li>
//             <li><strong>Ki:</strong> removes accumulated drift (long-term correction)</li>
//             <li><strong>Kd:</strong> dampens oscillations (stability control)</li>
//           </ul>

//           <p><strong>System Interaction:</strong></p>
//           <ul>
//             <li>Noise increases error → PID reacts</li>
//             <li>High Kp amplifies response → oscillation risk</li>
//             <li>High Ki removes drift but may overshoot</li>
//             <li>High Kd stabilizes noisy systems</li>
//           </ul>

//           <p><strong>Typical Stable Ranges:</strong></p>
//           <ul>
//             <li>Kp: 0.3 – 1.0</li>
//             <li>Ki: 0.05 – 0.2</li>
//             <li>Kd: 0.1 – 0.5</li>
//           </ul>
//         </div>

//         {/* SYSTEM OUTPUT (NEW IMPORTANT LAYER) */}
//         <div className="param-row">
//           <h3>System Output Parameters (What You Observe)</h3>

//           <ul>
//             <li><strong>Frequency Error:</strong> difference from ideal atomic frequency</li>
//             <li><strong>Drift:</strong> slow shift caused by temperature & magnetic field</li>
//             <li><strong>Noise Response:</strong> random fluctuation in signal</li>
//             <li><strong>Lock State:</strong> system stability indicator</li>
//           </ul>

//           <p><strong>Lock Condition:</strong></p>
//           <ul>
//             <li>Error small + noise controlled → 🟢 LOCKED</li>
//             <li>Error growing or oscillating → 🔴 UNLOCKED</li>
//           </ul>
//         </div>

//         {/* FINAL */}
//         <div className="param-row highlight-row">
//           <h3>System-Level Understanding</h3>

//           <p>
//             This is a closed-loop control system where stability depends on
//             balancing physics (laser, temperature, magnetic field) and control
//             theory (PID tuning).
//           </p>

//           <p><strong>To achieve LOCK:</strong></p>

//           <ul>
//             <li>Laser must remain stable</li>
//             <li>Temperature must be controlled</li>
//             <li>Magnetic noise must be minimal</li>
//             <li>PID must counteract drift and noise effectively</li>
//           </ul>

//           <p>
//             Any imbalance causes visible changes in the frequency graph:
//             drift, oscillation, or instability.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }








import { useState } from "react";

export default function ParametersSection() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (
    <section className="sim-intro">

      {/* HEADER */}
      <div className="sim-header">
        <h2>Control Parameters in Frequency Stabilization</h2>
        <p>
          This simulation represents a real-time atomic clock stabilization system.
          Each parameter directly influences frequency stability, lock condition,
          and system noise behavior.
        </p>
      </div>

      <div className="param-fullwrap">

        {/* INTRO */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("intro")}>
            <h3><span className="neon-dot blue"></span>What This Simulation Represents</h3>
            <span>{open === "intro" ? "−" : "+"}</span>
          </div>

          {open === "intro" && (
            <div className="param-body">

              <p>
                The system simulates <strong>frequency deviation over time</strong>.
                In an ideal atomic clock, the output frequency is highly stable and
                used as a precise time reference.
              </p>

              <p>In real physical systems, stability is affected by:</p>

              <ul>
                <li><strong>Drift →</strong> slow frequency shift due to temperature and magnetic effects</li>
                <li><strong>Noise →</strong> random fluctuations from environmental disturbances</li>
                <li><strong>Control Response →</strong> feedback correction via PID controller</li>
              </ul>

              <p><strong>Graph Interpretation:</strong></p>
              <ul>
                <li>Flat line → Stable locked state</li>
                <li>Oscillations → PID over-correction / instability</li>
                <li>Drift → External physical disturbances dominating system</li>
                <li>Random spikes → Environmental noise interference</li>
              </ul>

            </div>
          )}
        </div>

        {/* LASER */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("laser")}>
            <h3><span className="neon-dot pink"></span>Laser Current (Excitation Control)</h3>
            <span>{open === "laser" ? "−" : "+"}</span>
          </div>

          {open === "laser" && (
            <div className="param-body">

              <p>
                The laser is used to probe atomic transitions by interacting with
                atoms at a specific resonance frequency.
              </p>

              <ul>
                <li><strong>Unit:</strong> Normalized scale (0 – 10)</li>
              </ul>

              <p><strong>System Behavior:</strong></p>
              <ul>
                <li>0–3 → Weak excitation → low signal-to-noise ratio → unstable readings</li>
                <li>4–7 → Optimal excitation → clear resonance → stable locking possible</li>
                <li>8–10 → Overdriven excitation → saturation effects → distorted measurement</li>
              </ul>

              <p>
                Excessive laser intensity can disturb atomic state populations,
                reducing measurement accuracy.
              </p>

            </div>
          )}
        </div>

        {/* TEMPERATURE */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("temp")}>
            <h3><span className="neon-dot orange"></span>Temperature (Atomic Motion Influence)</h3>
            <span>{open === "temp" ? "−" : "+"}</span>
          </div>

          {open === "temp" && (
            <div className="param-body">

              <p>
                Temperature determines atomic motion. Higher temperatures increase
                Doppler broadening, reducing spectral precision.
              </p>

              <p><strong>Behavior:</strong></p>
              <ul>
                <li>Low → sharp transitions → stable frequency measurement</li>
                <li>Medium → moderate broadening → small fluctuations</li>
                <li>High → strong motion → increased drift and noise sensitivity</li>
              </ul>

              <p>
                Higher temperature also reduces the effectiveness of PID correction
                due to increased system randomness.
              </p>

            </div>
          )}
        </div>

        {/* MAGNETIC */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("mag")}>
            <h3><span className="neon-dot green"></span>Magnetic Field Noise (Environmental Disturbance)</h3>
            <span>{open === "mag" ? "−" : "+"}</span>
          </div>

          {open === "mag" && (
            <div className="param-body">

              <p>
                External magnetic fields shift atomic energy levels through the
                Zeeman effect, introducing systematic frequency errors.
              </p>

              <p><strong>Behavior:</strong></p>
              <ul>
                <li>Low → stable environment → accurate frequency</li>
                <li>Medium → fluctuating fields → noisy signal</li>
                <li>High → strong interference → long-term drift</li>
              </ul>

              <p>
                Magnetic noise is one of the primary causes of loss of lock.
              </p>

            </div>
          )}
        </div>

        {/* NOISE */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("noise")}>
            <h3><span className="neon-dot cyan"></span>Noise Meter (Environmental Stability Index)</h3>
            <span>{open === "noise" ? "−" : "+"}</span>
          </div>

          {open === "noise" && (
            <div className="param-body">

              <p>
                The noise meter represents total system disturbance from multiple sources:
              </p>

              <ul>
                <li>Magnetic interference</li>
                <li>Thermal fluctuations</li>
                <li>Laser intensity noise</li>
                <li>Random environmental variations</li>
              </ul>

              <p><strong>Noise Levels:</strong></p>
              <ul>
                <li>0–2 → Clean system → stable lock</li>
                <li>3–6 → Moderate noise → small jitter</li>
                <li>7–10 → High noise → instability and frequent unlock</li>
              </ul>

              <p>
                Noise directly introduces random fluctuations in the frequency signal
                and increases instability probability.
              </p>

            </div>
          )}
        </div>

        {/* PID */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("pid")}>
            <h3><span className="neon-dot violet"></span>PID Controller (Proportional–Integral–Derivative)</h3>
            <span>{open === "pid" ? "−" : "+"}</span>
          </div>

          {open === "pid" && (
            <div className="param-body">

              <ul>
                <li><strong>Kp (Proportional Gain):</strong> responds to current error</li>
                <li><strong>Ki (Integral Gain):</strong> removes accumulated error over time</li>
                <li><strong>Kd (Derivative Gain):</strong> predicts and reduces future oscillations</li>
              </ul>

              <p><strong>System Interaction:</strong></p>
              <ul>
                <li>Noise increases error → PID correction activates</li>
                <li>High Kp → fast response but causes oscillation</li>
                <li>High Ki → removes drift but may overshoot</li>
                <li>High Kd → stabilizes fluctuations</li>
              </ul>

              <p><strong>Typical Stable Ranges:</strong></p>
              <ul>
                <li>Kp: 0.3 – 1.0</li>
                <li>Ki: 0.05 – 0.2</li>
                <li>Kd: 0.1 – 0.5</li>
              </ul>

            </div>
          )}
        </div>

        {/* SYSTEM OUTPUT */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("sys")}>
            <h3><span className="neon-dot blue"></span>System Output Parameters</h3>
            <span>{open === "sys" ? "−" : "+"}</span>
          </div>

          {open === "sys" && (
            <div className="param-body">

              <ul>
                <li><strong>Frequency Error:</strong> deviation from reference frequency</li>
                <li><strong>Drift:</strong> slow time-dependent shift in frequency</li>
                <li><strong>Noise Response:</strong> random fluctuations in signal</li>
                <li><strong>Lock State:</strong> system stability indicator</li>
              </ul>

              <p>
                🟢 LOCKED → stable operation  
                🔴 UNLOCKED → unstable operation
              </p>

            </div>
          )}
        </div>

        {/* FINAL */}
        <div className="param-card">
          <div className="param-head" onClick={() => toggle("final")}>
            <h3><span className="neon-dot green"></span>System-Level Understanding</h3>
            <span>{open === "final" ? "−" : "+"}</span>
          </div>

          {open === "final" && (
            <div className="param-body">

              <p>
                This is a closed-loop control system where stability depends on
                balancing physical parameters (laser, temperature, magnetic field)
                and feedback control (PID system).
              </p>

              <ul>
                <li>Stable laser → reliable signal</li>
                <li>Controlled temperature → reduced drift</li>
                <li>Low magnetic noise → stable frequency reference</li>
                <li>Proper PID tuning → maintains system lock</li>
              </ul>

              <p>
                Any imbalance leads to observable effects in the frequency graph:
                drift, oscillations, or instability.
              </p>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}