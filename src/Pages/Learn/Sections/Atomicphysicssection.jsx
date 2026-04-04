// export default function Atomicphysicssection() {
//   return (
//     // <section className="atomic-section">
//     <section id="atomic" className="atomic-section">
//       <h2>Atomic Physics</h2>
//       <p>Understanding atoms and energy levels.</p>
//     </section>
//   );
// }


import Keypointsbox from "../Components/Keypointsbox";
import Whyitmatters from "../Components/Whyitmatters";

export default function AtomicPhysicsSection() {
  return (
    <section id="atomic" className="atomic-section">
      {/* Header */}
      <div className="atomic-header">
        <h2>Atomic Physics & Energy Levels</h2>
        <p>
          Understanding how atoms store energy and how electron transitions form
          the basis of precise time measurement.
        </p>
      </div>

      {/* Content */}
      <div className="atomic-content">
        {/* LEFT SIDE */}
        <div className="atomic-text">
          <div className="content-block">
            <h3>What is an Atom?</h3>
            <p>
              An atom is the smallest unit of matter that retains the properties
              of an element. It consists of a nucleus made of protons and
              neutrons, surrounded by electrons arranged in defined energy
              regions.
            </p>
          </div>

          <div className="content-block">
            <h3>Energy Levels in Atoms</h3>
            <p>
              Electrons exist in specific energy levels that are quantized,
              meaning they can only occupy certain allowed states. They cannot
              exist between these levels, making atomic behavior highly
              predictable.
            </p>
          </div>

          <div className="content-block">
            <h3>Atomic Transitions</h3>
            <p>
              When electrons move between energy levels, they absorb or emit
              energy in the form of electromagnetic radiation. The frequency of
              these transitions is extremely precise, forming the foundation of
              atomic clocks.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="basics-visual">
        <div className="visual-box">
        {/* <div className="atomic-visual">
          <div className="energy-diagram">
            <div className="level level1"></div>
            <div className="level level2"></div>
            <div className="level level3"></div>

            <div className="electron"></div>
            <div className="transition-line"></div>
          </div>
        </div> */}

        <div className="atomic-visual">
  <div className="energy-diagram">

    {/* Transition Paths */}
<div className="path p1"></div>
<div className="path p2"></div>
<div className="path p3"></div>

    {/* Energy Levels */}
    <div className="level level1"></div>
    <div className="level level2"></div>
    <div className="level level3"></div>

    {/* Electrons */}
    <div className="electron e1"></div>
    <div className="electron e2"></div>
    <div className="electron e3"></div>

  </div>
</div>

      </div>
      </div></div>

      {/* Extra Info */}
      <div className="atomic-extra">
        <Keypointsbox
          points={[
            "Atoms consist of a nucleus and surrounding electrons",
            "Energy levels are discrete and quantized",
            "Electrons transition by absorbing or emitting energy",
            "Transitions occur at precise and measurable frequencies",
          ]}
        />

        <Whyitmatters
          points={[
            "Atomic clocks rely on stable atomic transitions",
            "Transition frequency acts as a natural time reference",
            "Cesium atoms provide highly stable frequency standards",
            "This principle defines global time measurement",
          ]}
        />
      </div>
    </section>
  );
}