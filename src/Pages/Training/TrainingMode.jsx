// // src/pages/TrainingMode/TrainingMode.jsx
// import React from "react";
// import "./TrainingMode.css";

// import MissionBriefing from "./Components/MissionBriefing";
// import DifficultySelector from "./Components/DifficultySelector";
// import ChallengeTimer from "./Components/ChallengeTimer";
// import TrainingControls from "./Components/TrainingControls";
// import FrequencyGraph from "./Components/FrequencyGraph";
// import LockStatusPanel from "./Components/LockStatusPanel";
// import StabilityChallenge from "./Components/StabilityChallenge";
// import PerformanceScore from "./Components/PerformanceScore";
// import EventLog from "./Components/EventLog";

// import { useTrainingSimulation } from "./hooks/useTrainingSimulation";

// function TrainingMode() {
//   const training = useTrainingSimulation();

//   return (
//     <main className="training-page">
//       <section className="training-header">
//         <p className="training-kicker">Interactive Challenge Mode</p>
//         <h1>Training Mode</h1>
//         <p>
//           Acquire atomic clock lock within 60 seconds, then maintain stable
//           frequency control for 10 seconds.
//         </p>
//       </section>

//       <MissionBriefing />

//       <section className="training-topbar">
//         <DifficultySelector
//           difficulty={training.difficulty}
//           setDifficulty={training.setDifficulty}
//           disabled={training.phase !== "ready"}
//         />

//         <div className="training-actions">
//           <button className="training-btn secondary" onClick={training.resetChallenge}>
//             Reset
//           </button>

//           <button
//             className="training-btn primary"
//             onClick={training.startChallenge}
//             disabled={training.phase !== "ready"}
//           >
//             Start Challenge
//           </button>
//         </div>
//       </section>

//       <section className="training-dashboard">
//         <aside className="training-column">
//           <TrainingControls
//             controls={training.controls}
//             updateControl={training.updateControl}
//             disabled={training.phase === "ready" || training.phase === "passed" || training.phase === "failed"}
//           />
//         </aside>

//         <section className="training-center">
//           <FrequencyGraph
//             frequencyData={training.frequencyData}
//             driftLimit={training.currentConfig.driftLimit}
//             phase={training.phase}
//           />

//           <EventLog events={training.events} />
//         </section>

//         <aside className="training-column">
//           <ChallengeTimer
//             timeLeft={training.timeLeft}
//             totalTime={training.currentConfig.lockTimeLimit}
//             phase={training.phase}
//           />

//           <LockStatusPanel
//             phase={training.phase}
//             locked={training.locked}
//             drift={training.drift}
//             noise={training.noise}
//           />

//           <StabilityChallenge
//             phase={training.phase}
//             stabilityProgress={training.stabilityProgress}
//             holdTime={training.currentConfig.stabilityHoldTime}
//           />

//           <PerformanceScore
//             score={training.score}
//             finalScore={training.finalScore}
//             grade={training.grade}
//             phase={training.phase}
//           />
//         </aside>
//       </section>
//     </main>
//   );
// }

// export default TrainingMode;



// src/pages/TrainingMode/TrainingMode.jsx
import React from "react";
import "./TrainingMode.css";

import MissionBriefing from "./Components/MissionBriefing";
import DifficultySelector from "./Components/DifficultySelector";
import ChallengeTimer from "./Components/ChallengeTimer";
import TrainingControls from "./Components/TrainingControls";
import FrequencyGraph from "./Components/FrequencyGraph";
import LockStatusPanel from "./Components/LockStatusPanel";
import StabilityChallenge from "./Components/StabilityChallenge";
import PerformanceScore from "./Components/PerformanceScore";
import EventLog from "./Components/EventLog";

import { useTrainingSimulation } from "./hooks/useTrainingSimulation";

function TrainingMode() {
  const training = useTrainingSimulation();

  return (
    <main className="training-page">
      <section className="training-header">
        <p className="training-kicker intro-delay-1">Interactive Challenge Mode</p>
        <h1 className="training-title">Training Mode</h1>
        <p className="training-subtitle">
          Atomic Clock Lock Acquisition Challenge
        </p>
        <p className="training-bootline intro-delay-3">
          Certification sequence initialized. Stabilize the system before timeout.
        </p>
      </section>

      <MissionBriefing difficulty={training.difficulty} />

      <section className="training-topbar">
        <DifficultySelector
          difficulty={training.difficulty}
          setDifficulty={training.setDifficulty}
          disabled={training.phase !== "ready"}
        />

        <div className="training-actions">
          <button className="training-btn secondary" onClick={training.resetChallenge}>
            Reset
          </button>

          <button
            className="training-btn primary"
            onClick={training.startChallenge}
            disabled={training.phase !== "ready"}
          >
            Start Challenge
          </button>
        </div>
      </section>

      <section className="training-dashboard">
        <aside className="training-column">
          <TrainingControls
            controls={training.controls}
            updateControl={training.updateControl}
            disabled={
              training.phase === "ready" ||
              training.phase === "passed" ||
              training.phase === "failed"
            }
          />
        </aside>

        <section className="training-center">
          <FrequencyGraph
            frequencyData={training.frequencyData}
            driftLimit={training.currentConfig.driftLimit}
            phase={training.phase}
          />

          <EventLog events={training.events} />
        </section>

        <aside className="training-column">
          <ChallengeTimer
            timeLeft={training.timeLeft}
            totalTime={training.currentConfig.lockTimeLimit}
            phase={training.phase}
          />

          <LockStatusPanel
            phase={training.phase}
            locked={training.locked}
            drift={training.drift}
            noise={training.noise}
          />

          <StabilityChallenge
            phase={training.phase}
            stabilityProgress={training.stabilityProgress}
            holdTime={training.currentConfig.stabilityHoldTime}
          />

          <PerformanceScore
            score={training.score}
            finalScore={training.finalScore}
            grade={training.grade}
            phase={training.phase}
          />
        </aside>
      </section>
    </main>
  );
}

export default TrainingMode;
