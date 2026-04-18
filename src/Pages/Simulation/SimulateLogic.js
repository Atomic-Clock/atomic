// export function getSystemStatus(state, controls) {
//   let message = "";
//   let status = "stable";

//   if (state.drift > 2) {
//     message = "⚠️ High Drift: System is unstable due to poor tuning or high noise.";
//     status = "unstable";
//   } else if (controls.Kp > 1.5) {
//     message = "⚠️ High Kp causing oscillations.";
//     status = "oscillating";
//   } else if (controls.temperature > 7) {
//     message = "🔥 High temperature increasing noise and instability.";
//     status = "noise";
//   } else if (state.locked) {
//     message = "✅ System Locked: Frequency stabilized successfully.";
//     status = "locked";
//   } else {
//     message = "⚙️ Adjust parameters to achieve lock.";
//   }

//   return { message, status };
// }
// let integral = 0;
// let prevError = 0;

// export const initialState = {
//   frequency: 0,
//   targetFrequency: 10,
//   error: 0,
//   drift: 0,
//   noise: 0,
//   locked: false,
//   history: [],
// };

// function pidController(error, Kp, Ki, Kd) {
//   integral += error;
//   const derivative = error - prevError;
//   prevError = error;

//   return Kp * error + Ki * integral + Kd * derivative;
// }

// function generateNoise(temp, magnetic) {
//   return (Math.random() - 0.5) * (temp * 0.05 + magnetic * 0.1);
// }

// export function simulateStep(state, controls) {
//   const error = state.targetFrequency - state.frequency;

//   const correction = pidController(
//     error,
//     controls.Kp,
//     controls.Ki,
//     controls.Kd
//   );

//   const noise = generateNoise(
//     controls.temperature,
//     controls.magnetic
//   );

//   let newFreq = state.frequency + correction + noise;

//   const drift = Math.abs(error);

//   const locked = drift < 0.2;

//   return {
//     ...state,
//     frequency: newFreq,
//     error,
//     drift,
//     noise,
//     locked,
//     history: [...state.history.slice(-50), newFreq],
//   };
// }


































// ================= SYSTEM STATUS =================
export function getSystemStatus(state, controls) {
  let message = "";
  let status = "stable";

  if (state.locked) {
    message = "✅ System Locked: Frequency stabilized successfully.";
    status = "locked";
  } 
  else if (state.pointType === "drift") {
    message = "🔴 High Drift: System unstable due to noise.";
    status = "unstable";
  } 
  else if (state.pointType === "oscillation") {
    message = "🟡 Oscillation detected: High Kp causing instability.";
    status = "oscillating";
  } 
  else if (state.noise > 0.5) {
    message = "🟠 Environmental noise affecting system.";
    status = "noise";
  } 
  else {
    message = "⚙️ System adjusting... approaching stability.";
  }

  return { message, status };
}


// ================= INITIAL STATE =================
export const initialState = {
  frequency: 9,
  targetFrequency: 10,
  error: 0,
  drift: 0,
  noise: 0,
  locked: false,
  pointType: "normal",

  // 🔥 IMPORTANT: start with ONE valid point
  history: [{ value: 9, type: "normal" }],

  integral: 0,
  prevError: 0,
};


// ================= PID CONTROLLER =================
function pidController(error, state, Kp, Ki, Kd) {
  const integral = state.integral + error * 0.1;
  const derivative = (error - state.prevError) * 0.5;

  const output =
    Kp * error +
    Ki * integral +
    Kd * derivative;

  return {
    output,
    integral,
    prevError: error,
  };
}


// ================= NOISE MODEL =================
function generateNoise(temp, magnetic) {
  const thermal =
    (temp - 5) * (Math.random() - 0.5) * 0.2;

  const magneticNoise =
    magnetic * (Math.random() - 0.5) * 0.25;

  return thermal + magneticNoise;
}


// ================= MAIN SIMULATION =================
export function simulateStep(state, controls) {
  const {
    laser,
    temperature,
    magnetic,
    Kp,
    Ki,
    Kd,
  } = controls;

  // 🎯 ERROR
  const error = state.targetFrequency - state.frequency;

  // ⚙️ PID
  const pid = pidController(error, state, Kp, Ki, Kd);

  // 🔥 LASER EFFECT
  const laserEffect = (laser - 5) * 0.3;

  // 🌡 + 🧲 NOISE
  const noise = generateNoise(temperature, magnetic);

  // 🧠 DAMPING
  const damping =
    -0.06 * (state.frequency - state.targetFrequency);

  // 📊 FINAL FREQUENCY
  let newFreq =
    state.frequency +
    pid.output +
    laserEffect +
    noise +
    damping;

  // ✅ LIMIT (smooth range)
  newFreq = Math.max(0, Math.min(20, newFreq));

  // 📉 DRIFT
  const drift = Math.abs(error);

  // 🔍 STABILITY CHECK
  const recent = [
    ...state.history.slice(-8),
    { value: newFreq }
  ];

  let stability = 1;

  if (recent.length >= 8) {
    const values = recent.map((p) => p.value);

    const avg =
      values.reduce((a, b) => a + b, 0) / values.length;

    const variance =
      values.reduce((a, b) => a + Math.pow(b - avg, 2), 0) /
      values.length;

    stability = Math.sqrt(variance);
  }

  // 🔒 LOCK CONDITION
  const locked =
    stability < 0.12 &&
    drift < 0.2 &&
    Math.abs(noise) < 0.3;

  // 🎨 POINT TYPE
  let pointType = "normal";

  if (locked) {
    pointType = "lock";        // 🟢
  } 
  else if (Kp > 1.0 && stability < 0.25) {
    pointType = "oscillation"; // 🟡
  } 
  else if (stability >= 0.25 || Math.abs(noise) > 0.3) {
    pointType = "drift";       // 🔴
  }

  return {
    ...state,
    frequency: newFreq,
    error,
    drift,
    noise: Math.abs(noise),
    locked,
    pointType,

    // 🔥 IMPORTANT: store objects (value + type)
    history: [
      ...state.history.slice(-120),
      { value: newFreq, type: pointType }
    ],

    integral: pid.integral,
    prevError: pid.prevError,
  };
}