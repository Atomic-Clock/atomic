// // src/pages/TrainingMode/components/MissionBriefing.jsx
// import React from "react";

// function MissionBriefing() {
//   return (
//     <section className="mission-briefing">
//       <div>
//         <span className="briefing-label">Objective</span>
//         <h2>Stabilize the atomic clock system</h2>
//       </div>

//       <div className="briefing-grid">
//         <div>
//           <strong>01</strong>
//           <p>Acquire lock before the countdown reaches zero.</p>
//         </div>

//         <div>
//           <strong>02</strong>
//           <p>Keep frequency drift inside the stability band.</p>
//         </div>

//         <div>
//           <strong>03</strong>
//           <p>Hold lock for 10 seconds to complete certification.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MissionBriefing;





// src/pages/TrainingMode/components/MissionBriefing.jsx
import React from "react";
import { difficultySettings } from "../data/trainingConfig";

const difficultyText = {
  beginner: {
    title: "Guided Practice",
    detail: "Wider tolerance, longer timer, frequent hints, and forgiving stability recovery.",
  },
  engineer: {
    title: "Engineering Certification",
    detail: "Standard tolerance, balanced noise, occasional hints, and stricter stability rules.",
  },
  research: {
    title: "Research Precision",
    detail: "Narrow lock band, short timer, high sensitivity, minimal hints, and instant stability failure.",
  },
};

function MissionBriefing({ difficulty }) {
  const config = difficultySettings[difficulty];
  const level = difficultyText[difficulty];

  return (
    <section className="mission-briefing">
      <div>
        <span className="briefing-label">Objective</span>
        <h2>Stabilize the atomic clock system</h2>
      </div>

      <div className="briefing-grid">
        <div>
          <strong>01</strong>
          <p>Acquire lock within {config.lockTimeLimit} seconds.</p>
        </div>

        <div>
          <strong>02</strong>
          <p>Keep frequency drift inside the stability band.</p>
        </div>

        <div>
          <strong>03</strong>
          <p>Hold lock for {config.stabilityHoldTime} seconds to complete certification.</p>
        </div>
      </div>

      <div className="difficulty-brief">
        <span>{level.title}</span>
        <p>{level.detail}</p>
      </div>
    </section>
  );
}

export default MissionBriefing;
