// export default function AtomicInfoSection() {
//   return (
//     <section className="py-20 bg-[#0b0f1a]">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
//         <div>
//           <h2 className="text-3xl font-bold mb-6 text-cyan-400">
//             Understanding Atomic Time
//           </h2>

//           <p className="text-gray-300 mb-4">
//             Atomic clocks operate by measuring transitions between
//             energy levels of atoms. These transitions occur at
//             extremely stable frequencies.
//           </p>

//           <p className="text-gray-400">
//             By locking an oscillator to this atomic resonance,
//             ultra-precise timekeeping is achieved.
//           </p>
//         </div>

//         <div className="bg-white/5 backdrop-blur-md rounded-xl p-10 text-center border border-white/10">
//           <p className="text-gray-400">[ Atomic Diagram Placeholder ]</p>
//         </div>

//       </div>
//     </section>
//   );
// }

// import { useEffect, useState } from "react";

// export default function AtomicInfoSection() {

//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const localTime = time.toLocaleTimeString();
//   const utcTime = time.toUTCString().split(" ")[4];
//   const date = time.toDateString();

//   return (
//     <section className="py-20 bg-[#0b0f1a]">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* TOP SECTION */}
//         <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 items-start">

//           {/* LEFT INFORMATION */}
//           <div>

//             <h2 className="text-3xl font-bold text-cyan-400 mb-6">
//               Understanding Atomic Time
//             </h2>

//             <p className="text-gray-300 text-justify mb-4 leading-relaxed">
//               Atomic time is the most precise method of measuring time used in
//               modern science and global technology systems. Unlike mechanical
//               clocks that rely on gears or pendulums, atomic clocks measure the
//               natural vibration frequencies of atoms. These vibrations occur
//               at extremely stable and predictable rates.
//             </p>

//             <p className="text-gray-300 text-justify mb-4 leading-relaxed">
//               The international definition of one second is based on the
//               transition frequency of the <span className="text-cyan-300">Cesium-133 atom</span>.
//               Specifically, one second corresponds to exactly
//               <span className="text-cyan-300"> 9,192,631,770 oscillations </span>
//               of radiation emitted during a specific atomic energy transition.
//             </p>

//             <p className="text-gray-300 text-justify leading-relaxed">
//               By synchronizing electronic oscillators to this atomic resonance,
//               laboratories can maintain extremely stable time references used
//               in satellite navigation, telecommunications networks, scientific
//               experiments, and global time synchronization systems.
//             </p>

//           </div>


//           {/* CLOCK PANEL */}
//           <div className="flex justify-center">

//             <div className="w-56 h-56 rounded-lg border border-cyan-400/30
//             bg-[#070b14] shadow-xl flex flex-col items-center justify-center
//             font-mono tracking-wider">

//               <p className="text-xs text-gray-400 mb-2">
//                 REFERENCE CLOCK
//               </p>

//               <div className="text-4xl font-bold text-cyan-400">
//                 {localTime}
//               </div>

//               <p className="text-xs text-gray-500 mt-1">
//                 Local Time
//               </p>

//               <div className="mt-4 text-lg text-white">
//                 {utcTime}
//               </div>

//               <p className="text-xs text-gray-500">
//                 UTC
//               </p>

//               <p className="text-[10px] text-gray-600 mt-3">
//                 {date}
//               </p>

//             </div>

//           </div>

//         </div>


//         {/* SECOND INFORMATION SECTION */}
//         <div className="mt-14 grid md:grid-cols-2 gap-10">

//           <div>

//             <h3 className="text-xl font-semibold text-cyan-400 mb-4">
//               Atomic Clock Technology
//             </h3>

//             <p className="text-gray-400 text-justify mb-3">
//               Atomic clocks operate by monitoring the microwave signals
//               emitted by atoms when they transition between defined
//               energy states. By locking a quartz oscillator to this
//               highly stable frequency, extremely precise timekeeping
//               can be achieved.
//             </p>

//             <p className="text-gray-400 text-justify">
//               Modern optical lattice clocks and cesium fountain clocks
//               are capable of losing less than
//               <span className="text-cyan-300"> one second in tens of millions of years</span>.
//               These clocks represent the foundation of international
//               scientific timekeeping standards.
//             </p>

//           </div>


//           <div>

//             <h3 className="text-xl font-semibold text-cyan-400 mb-4">
//               Global Time Standards
//             </h3>

//             <ul className="text-gray-400 space-y-3 text-justify">

//               <li>
//                 <span className="text-cyan-300 font-semibold">International Atomic Time (TAI)</span>
//                 is the continuous time scale calculated from a global
//                 network of atomic clocks maintained by national laboratories.
//               </li>

//               <li>
//                 <span className="text-cyan-300 font-semibold">Coordinated Universal Time (UTC)</span>
//                 is the official time standard used worldwide and is derived
//                 from TAI with occasional leap-second adjustments.
//               </li>

//               <li>
//                 <span className="text-cyan-300 font-semibold">GPS Time</span>
//                 is maintained by atomic clocks onboard navigation satellites
//                 and is used for precise positioning and navigation.
//               </li>

//               <li>
//                 <span className="text-cyan-300 font-semibold">Network Time Protocol (NTP)</span>
//                 synchronizes computer systems globally using atomic
//                 time references.
//               </li>

//             </ul>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";

export default function AtomicInfoSection() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //const localTime = time.toLocaleTimeString();
const localTime = time.toLocaleTimeString("en-GB", { hour12: false });
//   const localTime = time.toLocaleTimeString("en-US", {
//   hour: "numeric",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true
// });
// const hours = time.getHours() % 12 || 12;
// const minutes = String(time.getMinutes()).padStart(2, "0");
// const seconds = String(time.getSeconds()).padStart(2, "0");
//const localTime = `${hours}:${minutes}:${seconds}`;

  const utcTime = time.toUTCString().split(" ")[4];
  const date = time.toDateString();

  return (
    <section className="py-20 bg-[#0b0f1a]">

      {/* WIDTH FIXED */}
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">

          {/* LEFT INFORMATION */}
          <div>

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Understanding Atomic Time
            </h2>

            <ul className="space-y-3 text-gray-300 leading-relaxed list-disc pl-6">

              <li>
                <span className="text-cyan-300 font-semibold">Atomic Time</span> is the
                most precise timekeeping system used in modern science
                and global technology infrastructure.
              </li>

              <li>
                It is based on the extremely stable oscillations of the
                <span className="text-cyan-300 font-semibold"> Cesium-133 atom</span>.
              </li>

              <li>
                One second is officially defined as
                <span className="text-cyan-300 font-semibold">
                  {" "}9,192,631,770 oscillations
                </span>
                of microwave radiation emitted during a cesium atomic transition.
              </li>

              <li>
                Atomic clocks measure these oscillations and lock a
                highly stable electronic oscillator to this natural frequency.
              </li>

              <li>
                This enables timekeeping accurate to within
                <span className="text-cyan-300 font-semibold">
                  {" "}less than one second over millions of years.
                </span>
              </li>

              <li>
                Atomic time forms the foundation of
                <span className="text-cyan-300 font-semibold"> International Atomic Time (TAI)</span>
                and the global civil standard
                <span className="text-cyan-300 font-semibold"> Coordinated Universal Time (UTC)</span>.
              </li>

              <li>
                Highly precise time synchronization enables technologies such as
                <span className="text-cyan-300 font-semibold"> GPS navigation</span>,
                satellite communication,
                financial networks, and internet infrastructure.
              </li>

            </ul>

          </div>


          {/* CLOCK PANEL */}
          <div className="flex justify-center">

            <div className="w-[320px] mt-8 rounded-xl
            bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#020617]
            border border-cyan-400/40
            shadow-[0_0_40px_rgba(34,211,238,0.25)]
            flex flex-col items-center
            font-mono px-10 py-10 space-y-4">

              {/* <p className="text-xs text-gray-400 tracking-widest">
                ATOMIC REFERENCE CLOCK
              </p> */}
              <p className="text-xs text-gray-400 tracking-[0.25em]">
                ATOMIC REFERENCE CLOCK
              </p>

              <div className="text-5xl font-bold text-cyan-300 tracking-widest
              drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
                {localTime}
              </div>

              <p className="text-sm text-gray-400">
                Local Time
              </p>

              <p className="text-[11px] text-gray-400">
                Indian Standard Time (IST)
              </p>

              <div className="text-2xl text-white tracking-wider mt-3 whitespace-nowrap">
                {utcTime}
              </div>

              <p className="text-sm text-gray-400 whitespace-nowrap">
                Coordinated Universal Time (UTC)
              </p>
              
              <p className="text-sm text-gray-500 mt-1">
                {date}
              </p>

              <div className="w-full border-t border-cyan-400/20 pt-3 mt-2 text-center">
    <p className="text-[11px] text-cyan-300">
      Atomic Reference: 9,192,631,770 Hz
    </p>
  </div>

            </div>

          </div>

        </div>


        {/* SECOND INFORMATION SECTION */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">

          {/* TECHNOLOGY */}
          <div>

            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Atomic Clock Technology
            </h3>

            <ul className="text-gray-400 space-y-3 list-disc pl-6">

              <li>
                Atomic clocks monitor microwave signals emitted when atoms
                transition between defined
                <span className="text-cyan-300 font-semibold"> energy states</span>.
              </li>

              <li>
                These signals occur at an extremely stable
                <span className="text-cyan-300 font-semibold"> resonance frequency</span>.
              </li>

              <li>
                A
                <span className="text-cyan-300 font-semibold"> quartz oscillator</span>
                is locked to this atomic frequency to maintain precise timing.
              </li>

              <li>
                Advanced clocks such as
                <span className="text-cyan-300 font-semibold"> Cesium Fountain Clocks</span>
                and
                <span className="text-cyan-300 font-semibold"> Optical Lattice Clocks</span>
                achieve extraordinary stability.
              </li>

              <li>
                These clocks may lose less than
                <span className="text-cyan-300 font-semibold">
                  {" "}one second in tens of millions of years.
                </span>
              </li>

            </ul>

          </div>


          {/* TIME STANDARDS */}
          <div>

            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Global Time Standards
            </h3>

            <ul className="text-gray-400 space-y-3 list-disc pl-6">

              <li>
                <span className="text-cyan-300 font-semibold">
                  International Atomic Time (TAI)
                </span>
                is calculated from a worldwide network of atomic clocks
                maintained by national timing laboratories.
              </li>

              <li>
                <span className="text-cyan-300 font-semibold">
                  Coordinated Universal Time (UTC)
                </span>
                is the official global time standard derived from TAI
                with occasional
                <span className="text-cyan-300 font-semibold"> leap second</span>
                adjustments.
              </li>

              <li>
                <span className="text-cyan-300 font-semibold">GPS Time</span>
                is maintained by atomic clocks onboard navigation satellites
                and is essential for accurate positioning.
              </li>

              <li>
                <span className="text-cyan-300 font-semibold">
                  Network Time Protocol (NTP)
                </span>
                synchronizes computer systems worldwide using atomic
                time references.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}