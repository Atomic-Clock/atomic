
// export default function SimulationHero() {
//   return (
//     <section className="sim-hero">
//       <div className="sim-hero-content">

//         <h1>
//           Atomic Clock Simulation
//           <br />
//           <span>Control & Stability Analysis</span>
//         </h1>

//         <p className="hero-main-text">
//           This simulation demonstrates how atomic clocks maintain precise
//           frequency using laser stabilization and feedback control systems.
//         </p>

//         <p className="hero-sub-text">
//           By adjusting parameters such as laser current, temperature, noise, and
//           PID gains, you can observe how system stability, frequency drift, and
//           lock conditions evolve in real time.
//         </p>

//       </div>
//     </section>
//   );
// }

export default function SimulationHero() {
  return (
    <section className="sim-hero">

      {/* Background Effects */}
      <div className="hero-grid"></div>
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="sim-hero-content">

        <h1>
          Atomic Clock Simulation
          <br />
          <span>Control & Stability Analysis</span>
        </h1>

        <div className="hero-text">
  <p>
    This simulation demonstrates how atomic clocks maintain precise
    frequency using laser stabilization and feedback control systems.
  </p>

  <p>
    Adjust system parameters to observe stability, frequency drift, and
    lock behavior under realistic operating conditions.
  </p>
</div>

      </div>
    </section>
  );
}


