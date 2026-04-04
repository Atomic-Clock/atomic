// export default function Herosection() {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

//       <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
//         Understanding the Physics of Time
//       </h1>

//       <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
//         Atomic clocks measure time using the natural vibration frequency
//         of atoms. These frequencies are incredibly stable, making atomic
//         clocks the most accurate timekeeping systems ever built.
//       </p>

//       <div className="mt-12 w-40 h-40 rounded-full border-2 border-cyan-400 flex items-center justify-center animate-pulse">
//         <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
//       </div>

//     </section>
//   );
// }



// export default function Herosection() {
//   return (
//     <section className="hero-section">
//       <h1>Understanding Atomic Clocks</h1>
//       <p>From basic physics to real-world precision systems</p>
//       <button>Start Learning</button>
//     </section>
//   );
// }




export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* <h1>Understanding Atomic Clocks</h1>
        <p>
          From fundamental physics to real-world precision systems — explore how
          time is defined at the atomic level.
        </p>
        <button className="hero-btn">Start Learning</button> */}
        

        <h1>
  The Science of Time,
  <br /> Measured at the Atomic Level
</h1>

<p>
  Discover how atomic clocks achieve unmatched precision using quantum physics,
  lasers, and advanced spectroscopy — powering technologies like GPS,
  satellites, and global communication.
</p>

{/* <button className="hero-btn">Start Learning</button> */}

<button
  className="hero-btn"
  onClick={() => {
    document.getElementById("roadmap").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Start Learning
</button>

      </div>
    </section>
  );
}