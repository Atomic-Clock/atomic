// // src/pages/TrainingMode/hooks/useTrainingSimulation.js
// import { useEffect, useMemo, useRef, useState } from "react";
// import { difficultySettings, initialControls } from "../data/trainingConfig";

// const maxGraphPoints = 80;

// function clamp(value, min, max) {
//   return Math.min(max, Math.max(min, value));
// }

// function getGrade(score, phase) {
//   if (phase === "failed") return "Lock Failed";
//   if (score >= 95) return "Research Ready";
//   if (score >= 85) return "Lab Certified";
//   if (score >= 70) return "Stable Operator";
//   if (score >= 50) return "Needs Calibration";
//   return "Lock Failed";
// }

// function getTimestamp(secondsElapsed) {
//   const seconds = String(secondsElapsed).padStart(2, "0");
//   return `00:${seconds}`;
// }

// export function useTrainingSimulation() {
//   const [difficulty, setDifficulty] = useState("engineer");
//   const [phase, setPhase] = useState("ready");
//   const [controls, setControls] = useState(initialControls);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [frequencyData, setFrequencyData] = useState(Array(60).fill(0));
//   const [stabilityProgress, setStabilityProgress] = useState(0);
//   const [events, setEvents] = useState([]);
//   const [finalScore, setFinalScore] = useState(0);

//   const elapsedRef = useRef(0);
//   const lockTimeRef = useRef(null);

//   const currentConfig = difficultySettings[difficulty];

//   const system = useMemo(() => {
//     const laserError = Math.abs(controls.laserCurrent - 5);
//     const tempError = Math.abs(controls.temperature - 5);
//     const magneticError = controls.magneticNoise / 10;

//     const kpError = Math.abs(controls.kp - 5);
//     const kiError = Math.abs(controls.ki - 5);
//     const kdError = Math.abs(controls.kd - 5);

//     const pidRoughness = (kpError + kiError + kdError) / 15;
//     const environmentalNoise = magneticError * 0.9 + tempError * 0.04;
//     const tuningError = laserError * 0.35 + tempError * 0.12 + pidRoughness * 0.8;

//     const randomNoise = (Math.random() - 0.5) * environmentalNoise;
//     const drift = tuningError + randomNoise - controls.kd * 0.03;
//     const noise = clamp(environmentalNoise + pidRoughness * 0.35, 0, 1.5);

//     const locked =
//       Math.abs(drift) <= currentConfig.driftLimit &&
//       noise <= currentConfig.noiseTolerance &&
//       controls.laserCurrent >= 4 &&
//       controls.laserCurrent <= 6 &&
//       controls.kp >= 3.5 &&
//       controls.kp <= 6.8;

//     return {
//       drift,
//       noise,
//       pidRoughness,
//       locked,
//     };
//   }, [controls, currentConfig]);

//   const score = useMemo(() => {
//     const lockSeconds = lockTimeRef.current ?? currentConfig.lockTimeLimit;

//     const speed = clamp(
//       Math.round(25 - (lockSeconds / currentConfig.lockTimeLimit) * 15),
//       0,
//       25
//     );

//     const stability = clamp(Math.round((stabilityProgress / currentConfig.stabilityHoldTime) * 35), 0, 35);
//     const noise = clamp(Math.round(20 - system.noise * 12), 0, 20);
//     const pid = clamp(Math.round(20 - system.pidRoughness * 20), 0, 20);

//     return {
//       speed,
//       stability,
//       noise,
//       pid,
//       total: clamp(speed + stability + noise + pid, 0, 100),
//     };
//   }, [system, stabilityProgress, currentConfig]);

//   const grade = getGrade(phase === "passed" || phase === "failed" ? finalScore : score.total, phase);

//   function addEvent(message) {
//     setEvents((previous) => [
//       {
//         id: crypto.randomUUID(),
//         time: getTimestamp(elapsedRef.current),
//         message,
//       },
//       ...previous.slice(0, 7),
//     ]);
//   }

//   function startChallenge() {
//     elapsedRef.current = 0;
//     lockTimeRef.current = null;

//     setPhase("acquiring");
//     setTimeLeft(currentConfig.lockTimeLimit);
//     setStabilityProgress(0);
//     setFinalScore(0);
//     setFrequencyData(Array(60).fill(0));
//     setEvents([]);

//     setTimeout(() => addEvent("Challenge started. Begin lock acquisition."), 0);
//   }

//   function resetChallenge() {
//     elapsedRef.current = 0;
//     lockTimeRef.current = null;

//     setPhase("ready");
//     setControls(initialControls);
//     setTimeLeft(currentConfig.lockTimeLimit);
//     setFrequencyData(Array(60).fill(0));
//     setStabilityProgress(0);
//     setEvents([]);
//     setFinalScore(0);
//   }

//   function updateControl(key, value) {
//     setControls((previous) => ({
//       ...previous,
//       [key]: value,
//     }));
//   }

//   useEffect(() => {
//     setTimeLeft(currentConfig.lockTimeLimit);
//   }, [currentConfig.lockTimeLimit]);

//   useEffect(() => {
//     if (phase !== "acquiring" && phase !== "holding") return;

//     const interval = setInterval(() => {
//       elapsedRef.current += 1;

//       setFrequencyData((previous) => {
//         const nextValue = system.drift + (Math.random() - 0.5) * system.noise;
//         return [...previous.slice(-maxGraphPoints + 1), nextValue];
//       });

//       if (phase === "acquiring") {
//         setTimeLeft((previous) => {
//           if (previous <= 1) {
//             setPhase("failed");
//             setFinalScore(score.total);
//             addEvent("Timer expired before lock acquisition.");
//             return 0;
//           }

//           return previous - 1;
//         });

//         if (system.locked) {
//           lockTimeRef.current = elapsedRef.current;
//           setPhase("holding");
//           addEvent("Frequency lock acquired. Stability hold started.");
//         }
//       }

//       if (phase === "holding") {
//         if (!system.locked || Math.abs(system.drift) > currentConfig.driftLimit) {
//           setPhase("failed");
//           setFinalScore(score.total);
//           addEvent("Stability limit exceeded. Lock lost.");
//           return;
//         }

//         setStabilityProgress((previous) => {
//           const next = previous + 1;

//           if (next >= currentConfig.stabilityHoldTime) {
//             const completedScore = clamp(score.total + 8, 0, 100);
//             setFinalScore(completedScore);
//             setPhase("passed");
//             addEvent("Stability challenge completed successfully.");
//           }

//           return next;
//         });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [phase, system, score, currentConfig]);

//   return {
//     difficulty,
//     setDifficulty,
//     phase,
//     controls,
//     updateControl,
//     timeLeft,
//     frequencyData,
//     stabilityProgress,
//     events,
//     currentConfig,
//     score,
//     finalScore,
//     grade,
//     locked: system.locked,
//     drift: system.drift,
//     noise: system.noise,
//     startChallenge,
//     resetChallenge,
//   };
// }







// // src/pages/TrainingMode/hooks/useTrainingSimulation.js
// import { useEffect, useMemo, useRef, useState } from "react";
// import { difficultySettings, initialControls } from "../data/trainingConfig";

// const maxGraphPoints = 100;

// function clamp(value, min, max) {
//   return Math.min(max, Math.max(min, value));
// }

// function getGrade(score, phase) {
//   if (phase === "failed") return "Lock Failed";
//   if (score >= 95) return "Research Ready";
//   if (score >= 85) return "Lab Certified";
//   if (score >= 70) return "Stable Operator";
//   if (score >= 50) return "Needs Calibration";
//   return "Lock Failed";
// }

// function getTimestamp(secondsElapsed) {
//   return `00:${String(secondsElapsed).padStart(2, "0")}`;
// }

// function makeId() {
//   if (typeof crypto !== "undefined" && crypto.randomUUID) {
//     return crypto.randomUUID();
//   }

//   return `${Date.now()}-${Math.random()}`;
// }

// export function useTrainingSimulation() {
//   const [difficulty, setDifficulty] = useState("engineer");
//   const [phase, setPhase] = useState("ready");
//   const [controls, setControls] = useState(initialControls);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [frequencyData, setFrequencyData] = useState(Array(80).fill(2.2));
//   const [stabilityProgress, setStabilityProgress] = useState(0);
//   const [events, setEvents] = useState([]);
//   const [finalScore, setFinalScore] = useState(0);

//   const elapsedRef = useRef(0);
//   const lockTimeRef = useRef(null);

//   const currentConfig = difficultySettings[difficulty];

//   const system = useMemo(() => {
//     const laserError = Math.abs(controls.laserCurrent - 5);
//     const tempError = Math.abs(controls.temperature - 5);
//     const magneticLevel = controls.magneticNoise / 10;

//     const kpError = Math.abs(controls.kp - 5);
//     const kiError = Math.abs(controls.ki - 5);
//     const kdError = Math.abs(controls.kd - 5);

//     const pidRoughness = (kpError + kiError + kdError) / 15;

//     const tuningError =
//       laserError * 0.34 +
//       tempError * 0.13 +
//       pidRoughness * 0.75;

//     const noise =
//       magneticLevel * 0.72 +
//       tempError * 0.045 +
//       pidRoughness * 0.25;

//     const damping = controls.kd * 0.035;
//     const drift = tuningError + noise * 0.35 - damping;

//     const laserNearResonance = laserError <= 1.2;
//     const pidUsable =
//       controls.kp >= 3.2 &&
//       controls.kp <= 7.1 &&
//       controls.ki >= 3.0 &&
//       controls.ki <= 7.2 &&
//       controls.kd >= 3.0 &&
//       controls.kd <= 7.4;

//     const locked =
//       Math.abs(drift) <= currentConfig.driftLimit &&
//       noise <= currentConfig.noiseTolerance &&
//       laserNearResonance &&
//       pidUsable;

//     return {
//       drift,
//       noise,
//       pidRoughness,
//       locked,
//     };
//   }, [controls, currentConfig]);

//   const score = useMemo(() => {
//     const lockSeconds = lockTimeRef.current ?? currentConfig.lockTimeLimit;

//     const speed = clamp(
//       Math.round(25 - (lockSeconds / currentConfig.lockTimeLimit) * 15),
//       0,
//       25
//     );

//     const stability = clamp(
//       Math.round((stabilityProgress / currentConfig.stabilityHoldTime) * 35),
//       0,
//       35
//     );

//     const noise = clamp(Math.round(20 - system.noise * 13), 0, 20);
//     const pid = clamp(Math.round(20 - system.pidRoughness * 20), 0, 20);

//     return {
//       speed,
//       stability,
//       noise,
//       pid,
//       total: clamp(speed + stability + noise + pid, 0, 100),
//     };
//   }, [system, stabilityProgress, currentConfig]);

//   const grade = getGrade(
//     phase === "passed" || phase === "failed" ? finalScore : score.total,
//     phase
//   );

//   function addEvent(message) {
//     setEvents((previous) => [
//       {
//         id: makeId(),
//         time: getTimestamp(elapsedRef.current),
//         message,
//       },
//       ...previous.slice(0, 7),
//     ]);
//   }

//   function startChallenge() {
//     elapsedRef.current = 0;
//     lockTimeRef.current = null;

//     setPhase("acquiring");
//     setTimeLeft(currentConfig.lockTimeLimit);
//     setStabilityProgress(0);
//     setFinalScore(0);
//     setFrequencyData(Array(80).fill(2.2));
//     setEvents([]);

//     setTimeout(() => {
//       addEvent("Challenge started. Tune the system toward resonance.");
//     }, 0);
//   }

//   function resetChallenge() {
//     elapsedRef.current = 0;
//     lockTimeRef.current = null;

//     setPhase("ready");
//     setControls(initialControls);
//     setTimeLeft(currentConfig.lockTimeLimit);
//     setFrequencyData(Array(80).fill(2.2));
//     setStabilityProgress(0);
//     setEvents([]);
//     setFinalScore(0);
//   }

//   function updateControl(key, value) {
//     setControls((previous) => ({
//       ...previous,
//       [key]: value,
//     }));
//   }

//   useEffect(() => {
//     if (phase === "ready") {
//       setTimeLeft(currentConfig.lockTimeLimit);
//     }
//   }, [currentConfig.lockTimeLimit, phase]);

//   useEffect(() => {
//     if (phase !== "acquiring" && phase !== "holding") return;

//     const interval = setInterval(() => {
//       elapsedRef.current += 1;

//       const graphNoise = (Math.random() - 0.5) * system.noise * 0.75;
//       const nextGraphValue = system.drift + graphNoise;

//       setFrequencyData((previous) => [
//         ...previous.slice(-maxGraphPoints + 1),
//         nextGraphValue,
//       ]);

//       if (phase === "acquiring") {
//         setTimeLeft((previous) => {
//           if (previous <= 1) {
//             setPhase("failed");
//             setFinalScore(score.total);
//             addEvent("Timer expired before lock acquisition.");
//             return 0;
//           }

//           return previous - 1;
//         });

//         if (system.locked) {
//           lockTimeRef.current = elapsedRef.current;
//           setPhase("holding");
//           addEvent("Frequency lock acquired. Stability hold started.");
//         }
//       }

//       if (phase === "holding") {
//         if (!system.locked || Math.abs(system.drift) > currentConfig.driftLimit) {
//           setPhase("failed");
//           setFinalScore(score.total);
//           addEvent("Drift exceeded the stability band. Lock lost.");
//           return;
//         }

//         setStabilityProgress((previous) => {
//           const next = previous + 1;

//           if (next >= currentConfig.stabilityHoldTime) {
//             const completedScore = clamp(score.total + 8, 0, 100);
//             setFinalScore(completedScore);
//             setPhase("passed");
//             addEvent("Stability challenge completed successfully.");
//           }

//           return next;
//         });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [phase, system, score, currentConfig]);

//   return {
//     difficulty,
//     setDifficulty,
//     phase,
//     controls,
//     updateControl,
//     timeLeft,
//     frequencyData,
//     stabilityProgress,
//     events,
//     currentConfig,
//     score,
//     finalScore,
//     grade,
//     locked: system.locked,
//     drift: system.drift,
//     noise: system.noise,
//     startChallenge,
//     resetChallenge,
//   };
// }




// src/pages/TrainingMode/hooks/useTrainingSimulation.js
import { useEffect, useMemo, useRef, useState } from "react";
import { difficultySettings, initialControls } from "../data/trainingConfig";

const maxGraphPoints = 100;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getGrade(score, phase) {
  if (phase === "failed") return "Lock Failed";
  if (score >= 95) return "Research Ready";
  if (score >= 85) return "Lab Certified";
  if (score >= 70) return "Stable Operator";
  if (score >= 50) return "Needs Calibration";
  return "Lock Failed";
}

function getTimestamp(secondsElapsed) {
  return `00:${String(secondsElapsed).padStart(2, "0")}`;
}

function makeId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random()}`;
}

function getHint(controls, system) {
  if (controls.magneticNoise > 6) return "Hint: Magnetic noise is high. Reduce interference.";
  if (controls.laserCurrent < 4) return "Hint: Increase laser current toward resonance.";
  if (controls.laserCurrent > 6) return "Hint: Laser current is above resonance range.";
  if (Math.abs(controls.temperature - 5) > 1.6) return "Hint: Temperature is causing thermal drift.";
  if (system.pidRoughness > 0.35) return "Hint: PID tuning is rough. Move Kp, Ki, and Kd closer to balanced values.";
  if (Math.abs(system.drift) > 0.9) return "Hint: Drift is still outside the stable band.";
  return "Hint: You are close. Make small tuning adjustments.";
}

export function useTrainingSimulation() {
  const [difficulty, setDifficulty] = useState("engineer");
  const [phase, setPhase] = useState("ready");
  const [controls, setControls] = useState(initialControls);
  const [timeLeft, setTimeLeft] = useState(60);
  const [frequencyData, setFrequencyData] = useState(Array(80).fill(2.2));
  const [stabilityProgress, setStabilityProgress] = useState(0);
  const [events, setEvents] = useState([]);
  const [finalScore, setFinalScore] = useState(0);
  const [instabilityCount, setInstabilityCount] = useState(0);

  const elapsedRef = useRef(0);
  const lockTimeRef = useRef(null);

  const currentConfig = difficultySettings[difficulty];

  const system = useMemo(() => {
    const laserError = Math.abs(controls.laserCurrent - 5);
    const tempError = Math.abs(controls.temperature - 5);
    const magneticLevel = controls.magneticNoise / 10;

    const kpError = Math.abs(controls.kp - 5);
    const kiError = Math.abs(controls.ki - 5);
    const kdError = Math.abs(controls.kd - 5);

    const pidRoughness =
      ((kpError + kiError + kdError) / 15) * currentConfig.pidSensitivity;

    const tuningError =
      laserError * 0.34 +
      tempError * 0.13 +
      pidRoughness * 0.75;

    const noise =
      (magneticLevel * 0.72 +
        tempError * 0.045 +
        pidRoughness * 0.25) *
      currentConfig.disturbanceMultiplier;

    const damping = controls.kd * 0.035;
    const drift = tuningError + noise * 0.35 - damping;

    const laserNearResonance = laserError <= (difficulty === "research" ? 0.7 : 1.2);

    const pidUsable =
      controls.kp >= (difficulty === "research" ? 4.0 : 3.2) &&
      controls.kp <= (difficulty === "research" ? 6.2 : 7.1) &&
      controls.ki >= (difficulty === "research" ? 4.0 : 3.0) &&
      controls.ki <= (difficulty === "research" ? 6.2 : 7.2) &&
      controls.kd >= (difficulty === "research" ? 4.0 : 3.0) &&
      controls.kd <= (difficulty === "research" ? 6.3 : 7.4);

    const locked =
      Math.abs(drift) <= currentConfig.driftLimit &&
      noise <= currentConfig.noiseTolerance &&
      laserNearResonance &&
      pidUsable;

    return {
      drift,
      noise,
      pidRoughness,
      locked,
    };
  }, [controls, currentConfig, difficulty]);

  const score = useMemo(() => {
    const lockSeconds = lockTimeRef.current ?? currentConfig.lockTimeLimit;

    const speed = clamp(
      Math.round(25 - (lockSeconds / currentConfig.lockTimeLimit) * 15),
      0,
      25
    );

    const stability = clamp(
      Math.round((stabilityProgress / currentConfig.stabilityHoldTime) * 35),
      0,
      35
    );

    const noise = clamp(Math.round(20 - system.noise * 13), 0, 20);
    const pid = clamp(Math.round(20 - system.pidRoughness * 20), 0, 20);

    return {
      speed,
      stability,
      noise,
      pid,
      total: clamp(speed + stability + noise + pid, 0, 100),
    };
  }, [system, stabilityProgress, currentConfig]);

  const grade = getGrade(
    phase === "passed" || phase === "failed" ? finalScore : score.total,
    phase
  );

  function addEvent(message) {
    setEvents((previous) => [
      {
        id: makeId(),
        time: getTimestamp(elapsedRef.current),
        message,
      },
      ...previous.slice(0, 7),
    ]);
  }

  function startChallenge() {
    elapsedRef.current = 0;
    lockTimeRef.current = null;

    setPhase("acquiring");
    setTimeLeft(currentConfig.lockTimeLimit);
    setStabilityProgress(0);
    setInstabilityCount(0);
    setFinalScore(0);
    setFrequencyData(Array(80).fill(2.2));
    setEvents([]);

    setTimeout(() => {
      addEvent(`${difficulty.toUpperCase()} challenge started.`);
    }, 0);
  }

  function resetChallenge() {
    elapsedRef.current = 0;
    lockTimeRef.current = null;

    setPhase("ready");
    setControls(initialControls);
    setTimeLeft(currentConfig.lockTimeLimit);
    setFrequencyData(Array(80).fill(2.2));
    setStabilityProgress(0);
    setInstabilityCount(0);
    setEvents([]);
    setFinalScore(0);
  }

  function updateControl(key, value) {
    setControls((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  useEffect(() => {
    if (phase === "ready") {
      setTimeLeft(currentConfig.lockTimeLimit);
    }
  }, [currentConfig.lockTimeLimit, phase]);

  useEffect(() => {
    if (phase !== "acquiring" && phase !== "holding") return;

    const interval = setInterval(() => {
      elapsedRef.current += 1;

      const graphNoise =
        (Math.random() - 0.5) *
        system.noise *
        currentConfig.disturbanceMultiplier;

      const nextGraphValue = system.drift + graphNoise;

      setFrequencyData((previous) => [
        ...previous.slice(-maxGraphPoints + 1),
        nextGraphValue,
      ]);

      if (
        currentConfig.hintFrequency > 0 &&
        elapsedRef.current % currentConfig.hintFrequency === 0 &&
        phase === "acquiring" &&
        !system.locked
      ) {
        addEvent(getHint(controls, system));
      }

      if (phase === "acquiring") {
        setTimeLeft((previous) => {
          if (previous <= 1) {
            setPhase("failed");
            setFinalScore(score.total);
            addEvent("Timer expired before lock acquisition.");
            return 0;
          }

          return previous - 1;
        });

        if (system.locked) {
          lockTimeRef.current = elapsedRef.current;
          setPhase("holding");
          addEvent("Frequency lock acquired. Stability hold started.");
        }
      }

      if (phase === "holding") {
        const unstable =
          !system.locked || Math.abs(system.drift) > currentConfig.driftLimit;

        if (unstable && currentConfig.failureMode === "instant") {
          setPhase("failed");
          setFinalScore(score.total);
          addEvent("Research limit exceeded. Lock failed instantly.");
          return;
        }

        if (unstable && currentConfig.failureMode === "reset") {
          setInstabilityCount((previous) => {
            const next = previous + 1;

            if (next >= 2) {
              setPhase("failed");
              setFinalScore(score.total);
              addEvent("Repeated instability detected. Challenge failed.");
            } else {
              setStabilityProgress(0);
              addEvent("Stability warning. Hold timer reset.");
            }

            return next;
          });

          return;
        }

        if (unstable && currentConfig.failureMode === "forgiving") {
          setStabilityProgress((previous) => Math.max(0, previous - 1));
          addEvent("Minor drift detected. Hold progress reduced.");
          return;
        }

        setStabilityProgress((previous) => {
          const next = previous + 1;

          if (next >= currentConfig.stabilityHoldTime) {
            const completedScore = clamp(score.total + 8, 0, 100);
            setFinalScore(completedScore);
            setPhase("passed");
            addEvent("Stability challenge completed successfully.");
          }

          return next;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, system, score, currentConfig, controls, difficulty]);

  return {
    difficulty,
    setDifficulty,
    phase,
    controls,
    updateControl,
    timeLeft,
    frequencyData,
    stabilityProgress,
    events,
    currentConfig,
    score,
    finalScore,
    grade,
    locked: system.locked,
    drift: system.drift,
    noise: system.noise,
    startChallenge,
    resetChallenge,
  };
}
