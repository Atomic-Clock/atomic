// import Herosection from "./Sections/Herosection";
// import Atomvisualizer from "./Sections/Atomvisualizer";
// import Resonancesection from "./Sections/Resonancesection";
// import Driftsection from "./Sections/Driftsection";
// import Systemflowsection from "./Sections/Systemflowsection";
// import SimulationCTAsection from "./Sections/SimulationCTAsection";

// const Learn = () => {
//   return (
//     <div className="bg-[#0b0f1a] text-white w-full min-h-screen">

//       <Herosection />
//       <Atomvisualizer />
//       <Resonancesection />
//       <Driftsection />
//       <Systemflowsection />
//       <SimulationCTAsection />

//     </div>
//   );
// };

// export default Learn;



import Herosection from "./Sections/Herosection";
import Roadmapsection from "./Sections/Roadmapsection";
import Basicssection from "./Sections/Basicssection";
import Atomicphysicssection from "./Sections/Atomicphysicssection";
import Spectroscopysection from "./Sections/Spectroscopysection";
import Advancedconceptsection from "./Sections/Advancedconceptsection";
import Lasersystemsection from "./Sections/Lasersystemsection";
import Detectionsection from "./Sections/Detectionsection";
import Systemintegrationsection from "./Sections/Systemintegrationsection";
import Applicationssection from "./Sections/Applicationsection";
import Conclusionsection from "./Sections/Conclusionsection";
import "./Styles/Learnpage.css";
import "./Styles/Sections.css";

export default function Learn() {
  return (
    <div className="learn-page">
      <Herosection />
      <Roadmapsection />
      <Basicssection />
      <Atomicphysicssection />
      <Spectroscopysection />
      <Advancedconceptsection />
      <Lasersystemsection />
      <Detectionsection />
      <Systemintegrationsection />
      <Applicationssection />
      <Conclusionsection />
    </div>
  );
}