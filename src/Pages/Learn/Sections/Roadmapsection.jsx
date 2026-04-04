// export default function Roadmapsection() {
//   return (
//     // <section className="roadmap-section">
//     <section id="roadmap" className="roadmap-section">
//       <h2>Learning Path</h2>
//       <p>Follow the journey from basics to advanced concepts</p>
//     </section>
//   );
// }


export default function RoadmapSection() {
    const steps = [
  { label: "Basics", id: "basics" },
  { label: "Atomic Physics", id: "atomic" },
  { label: "Spectroscopy", id: "spectroscopy" },
  { label: "Advanced Concepts", id: "advanced" },
  { label: "Laser Systems", id: "laser" },
  { label: "Detection", id: "detection" },
  { label: "Integration", id: "integration" },
  { label: "Applications", id: "applications" },
];


const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

//   const steps = [
//     "Basics",
//     "Atomic Physics",
//     "Spectroscopy",
//     "Advanced Concepts",
//     "Laser Systems",
//     "Detection",
//     "Integration",
//     "Applications",
//   ];

  return (
    <section id="roadmap" className="roadmap-section">
      <h2 className="roadmap-title">Your Learning Journey</h2>
      <p className="roadmap-subtitle">
        Follow a structured path from fundamental concepts to advanced atomic
        clock systems.
      </p>

      <div className="roadmap-container">
        {/* {steps.map((step, index) => (
          <div key={index} className="roadmap-step">
            <div className="step-circle">{index + 1}</div>
            <p className="step-label">{step}</p>
          </div>
        ))} */}

        {steps.map((step, index) => (
  <div
    key={index}
    className="roadmap-step"
    onClick={() => handleScroll(step.id)}
  >
    <div className="step-circle">{index + 1}</div>
    <p className="step-label">{step.label}</p>
  </div>
))}
      </div>
    </section>
  );
}