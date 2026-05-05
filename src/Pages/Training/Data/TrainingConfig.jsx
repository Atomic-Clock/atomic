// // src/pages/TrainingMode/data/trainingConfig.js
// export const difficultySettings = {
//   beginner: {
//     lockTimeLimit: 60,
//     stabilityHoldTime: 10,
//     driftLimit: 1.2,
//     noiseTolerance: 0.85,
//   },
//   engineer: {
//     lockTimeLimit: 60,
//     stabilityHoldTime: 10,
//     driftLimit: 0.8,
//     noiseTolerance: 0.6,
//   },
//   research: {
//     lockTimeLimit: 60,
//     stabilityHoldTime: 10,
//     driftLimit: 0.45,
//     noiseTolerance: 0.38,
//   },
// };

// export const initialControls = {
//   laserCurrent: 5,
//   temperature: 5,
//   magneticNoise: 5,
//   kp: 5,
//   ki: 5,
//   kd: 5,
// };




// // src/pages/TrainingMode/data/trainingConfig.js
// export const difficultySettings = {
//   beginner: {
//     lockTimeLimit: 60,
//     stabilityHoldTime: 10,
//     driftLimit: 1.25,
//     noiseTolerance: 0.9,
//   },
//   engineer: {
//     lockTimeLimit: 60,
//     stabilityHoldTime: 10,
//     driftLimit: 0.85,
//     noiseTolerance: 0.65,
//   },
//   research: {
//     lockTimeLimit: 60,
//     stabilityHoldTime: 10,
//     driftLimit: 0.5,
//     noiseTolerance: 0.42,
//   },
// };

// export const initialControls = {
//   laserCurrent: 2.4,
//   temperature: 7.4,
//   magneticNoise: 7.2,
//   kp: 2.6,
//   ki: 7.8,
//   kd: 2.8,
// };





// src/pages/TrainingMode/data/trainingConfig.js
export const difficultySettings = {
  beginner: {
    lockTimeLimit: 75,
    stabilityHoldTime: 8,
    driftLimit: 1.35,
    noiseTolerance: 0.95,
    disturbanceMultiplier: 0.65,
    pidSensitivity: 0.55,
    hintFrequency: 6,
    failureMode: "forgiving",
  },
  engineer: {
    lockTimeLimit: 60,
    stabilityHoldTime: 10,
    driftLimit: 0.85,
    noiseTolerance: 0.65,
    disturbanceMultiplier: 1,
    pidSensitivity: 0.85,
    hintFrequency: 10,
    failureMode: "reset",
  },
  research: {
    lockTimeLimit: 45,
    stabilityHoldTime: 15,
    driftLimit: 0.48,
    noiseTolerance: 0.42,
    disturbanceMultiplier: 1.45,
    pidSensitivity: 1.25,
    hintFrequency: 0,
    failureMode: "instant",
  },
};

export const initialControls = {
  laserCurrent: 2.4,
  temperature: 7.4,
  magneticNoise: 7.2,
  kp: 2.6,
  ki: 7.8,
  kd: 2.8,
};
