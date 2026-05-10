// export default function StabilitySection() {
//   return (
//     <section className="py-20 bg-[#111827]">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-10 text-cyan-400">
//           Why Stability is Critical
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white/5 p-6 rounded-xl border border-white/10">
//             <h3 className="text-xl font-semibold mb-3">GPS Systems</h3>
//             <p className="text-gray-400">
//               Accurate positioning depends on nanosecond precision.
//             </p>
//           </div>

//           <div className="bg-white/5 p-6 rounded-xl border border-white/10">
//             <h3 className="text-xl font-semibold mb-3">Telecommunication</h3>
//             <p className="text-gray-400">
//               Network synchronization prevents data loss.
//             </p>
//           </div>

//           <div className="bg-white/5 p-6 rounded-xl border border-white/10">
//             <h3 className="text-xl font-semibold mb-3">Defense & Space</h3>
//             <p className="text-gray-400">
//               Mission timing requires extreme frequency stability.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { motion } from "framer-motion";

// export default function ConceptsSection() {
//   // Array of topics with title, description, and placeholder image
//   const items = [
//     {
//       title: "USAC Virtual Lab",
//       desc: "A platform to explore ultra-stable atomic clocks, lasers, and precision time measurements through interactive simulations.",
//       img: "/images/usac_lab.png" // put your image in public/images
//     },
//     {
//       title: "Atomic Time",
//       desc: "Atomic time is defined using the vibration frequency of atoms, providing the most accurate measurement of time.",
//       img: "/images/atomic_time.png"
//     },
//     {
//       title: "Standard Time",
//       desc: "Standard time is derived from atomic clocks and used globally for synchronization of navigation, telecom, and science.",
//       img: "/images/standard_time.png"
//     },
//     {
//       title: "Atomic Clock",
//       desc: "Atomic clocks use atomic transitions as frequency references achieving extraordinary stability and accuracy.",
//       img: "/images/atomic_clock.png"
//     },
//     {
//       title: "Laser",
//       desc: "Lasers interact with atoms to enable cooling, trapping, and precise frequency measurements in atomic clocks.",
//       img: "/images/laser.png"
//     },
//     {
//       title: "Wavelength",
//       desc: "Wavelength represents the distance between wave peaks and is used to determine optical frequencies.",
//       img: "/images/wavelength.png"
//     }
//   ];

//   return (
//     <section className="py-24 bg-[#111827]">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-cyan-400 mb-6">
//           Understanding Precision Time
//         </h2>

//         <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
//           Explore the core concepts behind atomic clocks, laser systems,
//           and wavelength measurements used in ultra-precise timekeeping.
//         </p>

//         {/* Grid for Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {items.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-cyan-400 
//                          transition duration-300 hover:scale-105 flex flex-col items-center text-center"
//             >
//               {/* Image */}
//               <div className="w-24 h-24 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-4 text-white">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-400 text-sm">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






import { motion } from "framer-motion";

export default function ConceptsCards() {
  const items = [
    {
      title: "Atomic Insight AI",
      shortDesc: "Explore ultra-stable atomic clocks & simulations.",
      longDesc: `Atomic Insight AI provides interactive simulations to study atomic clocks, lasers, and wavelength measurements. 
      Students and researchers can experiment with timekeeping and measurement principles without physical lab equipment. 
      It helps develop a deep understanding of ultra-precise time systems and their applications in navigation, communication, and science.`,
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7H9l3-7zM5 9h14l-7 13-7-13z" />
        </svg>
      )
    },
    {
      title: "Atomic Time",
      shortDesc: "Precise measurement of time using atoms.",
      longDesc: `Atomic time is based on the vibrations of atoms such as cesium or rubidium. 
      It is the most accurate time measurement available today, forming the basis for global navigation, telecommunications, and scientific experiments. 
      Atomic time ensures that measurements of time and frequency remain consistent over long periods.`,
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      title: "Standard Time",
      shortDesc: "Time synchronized worldwide.",
      longDesc: `Standard time is derived from atomic time and distributed globally through organizations like NIST and BIPM. 
      It synchronizes clocks worldwide, enabling systems like GPS, telecommunications, and astronomy. 
      Standard time ensures coordinated operations across countries and industries.`,
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
        </svg>
      )
    },
    {
      title: "Atomic Clock",
      shortDesc: "Device generating ultra-precise time.",
      longDesc: `Atomic clocks measure time by counting atomic transitions. 
      Modern clocks achieve extraordinary stability, losing less than a second over millions of years. 
      They are crucial for GPS, telecommunications, scientific experiments, and defining international time standards.`,
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Laser",
      shortDesc: "Used for precise measurement and control.",
      longDesc: `Lasers manipulate and measure atoms in atomic clocks. 
      They are essential for techniques like cooling and trapping atoms, allowing extremely accurate frequency measurements. 
      Lasers are also used in spectroscopy, optical clocks, and high-precision experiments.`,
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
        </svg>
      )
    },
    {
      title: "Wavelength",
      shortDesc: "Distance between wave peaks, key to frequency.",
      longDesc: `Wavelength represents the spatial period of light waves. 
      It is directly related to frequency and is used in optical clocks and spectroscopy. 
      Accurate wavelength measurement contributes to precision in timekeeping and frequency standards.`,
      icon: (
        <svg className="w-12 h-12 text-cyan-400 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M2 12c2-4 6-4 8 0s6 4 8 0" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/5 p-8 rounded-xl border border-white/10 cursor-pointer
                       flex flex-col items-center text-center relative overflow-hidden group shadow-lg"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Icon */}
            {item.icon}

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>

            {/* Short Description */}
            <p className="text-gray-200 text-base mb-2">{item.shortDesc}</p>

            {/* Long Description */}
            <motion.p
              className="text-gray-300 text-sm max-h-0 overflow-hidden group-hover:max-h-80 transition-all duration-500 text-left mt-2"
            >
              {item.longDesc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}