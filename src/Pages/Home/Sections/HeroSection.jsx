// import { useEffect, useState } from "react";

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0b0f1a]">
      
//       {/* Background Glow */}
//       <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>

//       <div className="z-10 text-center max-w-4xl px-6">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6">
//           USAC Virtual Lab
//         </h1>

//         <p className="text-lg md:text-xl text-gray-300 mb-8">
//           Explore the science of Atomic Clocks, Frequency Stability,
//           and Precision Timing Systems in a virtual environment.
//         </p>

//         <div className="flex justify-center gap-6">
//           <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition">
//             Learn Mode
//           </button>

//           <button className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400/10 rounded-lg transition">
//             Simulate Mode
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


// import { useEffect, useState } from "react";

// const Images = [
//   "/Images/Slide1_Home.jpeg",
//   "/Images/Slide2_Home.jpeg",
//   "/Images/Slide3_Home.jpeg",
// ];

// export default function HeroSection() {

//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % Images.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + Images.length) % Images.length);
//   };

//   useEffect(() => {
//     const slider = setInterval(nextSlide, 4000);
//     return () => clearInterval(slider);
//   }, []);

//   return (
//     <section className="relative h-[600px] flex items-center justify-center text-center text-white overflow-hidden">

//       {/* Background Image */}
//       <img
//         src={Images[current]}
//         alt="lab"
//         className="absolute w-full h-full object-cover transition-all duration-700"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* LEFT ARROW */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 z-20 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
//       >
//         ❮
//       </button>

//       {/* RIGHT ARROW */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 z-20 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
//       >
//         ❯
//       </button>

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl px-6">

//         <h1 className="text-6xl font-bold mb-6">
//           USAC Virtual Lab
//         </h1>

//         <p className="text-lg text-gray-200 mb-8">
//           Explore Atomic Clocks, Frequency Stability and Precision Timing
//           Systems in a virtual environment.
//         </p>

//         <div className="flex justify-center gap-6">
//           <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg">
//             Learn Mode
//           </button>

//           <button className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400/10 rounded-lg">
//             Simulate Mode
//           </button>
//         </div>

//       </div>

//       {/* DOT INDICATORS */}
//       <div className="absolute bottom-6 flex gap-3 z-20">
//         {Images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full ${
//               current === index ? "bg-white" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>

//     </section>
//   );
// }




// import { useEffect, useState } from "react";

// const Slides = [
//   {
//     image: "/Images/Slide1_Home.jpeg",
//     title: "Atomic Time",
//     desc: "Atomic time is the most accurate way of measuring time using the natural vibration of atoms like Cesium.",
//     align: "left",
//   },
//   {
//     image: "/Images/Slide2_Home.jpeg",
//     title: "Laser",
//     desc: "A laser produces a highly focused beam of light with a single wavelength and extremely stable frequency.",
//     align: "right",
//   },
//   {
//     image: "/Images/Slide3_Home.jpeg",
//     title: "Atomic Clock",
//     desc: "Atomic clocks measure time using atomic vibrations and are used in GPS, satellites and global timing systems.",
//     align: "left",
//   },
//   {
//     image: "/Images/Slide4_Home.jpeg",
//     title: "Wavelength",
//     desc: "Wavelength is the distance between two peaks of a wave and determines the frequency of light.",
//     align: "right",
//   },
//   {
//     image: "/Images/Slide5_Home.jpeg",
//     title: "Time Standards",
//     desc: "The SI second is defined using Cesium atomic transitions which act as the global time standard.",
//     align: "left",
//   },
// ];

// export default function HeroSection() {

//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % Slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + Slides.length) % Slides.length);
//   };

//   useEffect(() => {
//     const slider = setInterval(nextSlide, 4000);
//     return () => clearInterval(slider);
//   }, []);

//   const slide = Slides[current];

//   return (
//     <section className="relative h-[600px] flex items-center text-white overflow-hidden">

//       {/* Background Image */}
//       <img
//         src={slide.image}
//         alt="lab"
//         className="absolute w-full h-full object-cover transition-all duration-700"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* LEFT ARROW */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 z-20 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
//       >
//         ❮
//       </button>

//       {/* RIGHT ARROW */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 z-20 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
//       >
//         ❯
//       </button>

//       {/* TEXT CONTENT */}
//       <div
//         className={`relative z-10 max-w-xl px-10 ${
//           slide.align === "left"
//             ? "ml-16 text-left"
//             : "ml-auto mr-16 text-right"
//         }`}
//       >
//         <h1 className="text-5xl font-bold mb-4">
//           {slide.title}
//         </h1>

//         <p className="text-lg text-gray-200">
//           {slide.desc}
//         </p>
//       </div>

//       {/* DOT INDICATORS */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
//         {Slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full ${
//               current === index ? "bg-white" : "bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>

//     </section>
//   );
// }


import { useEffect, useState } from "react";

const Slides = [
  {
    image: "/Images/Slide1_Home.jpeg",
    type: "hero"
  },
  {
    image: "/Images/atomic_time.jpeg",
    title: "Atomic Time",
    desc: "Atomic time is the highly accurate measurement of time based on the natural vibration frequency of atoms, usually cesium-133.",
    align: "left"
  },
  {
    image: "/Images/standard_time.jpeg",
    title: "Standard Time",
    desc: "Standard time is the official uniform time adopted by a country or region, based on a specific time zone.",
    align: "left"
  },
  {
    image: "/Images/atomic_clock.jpeg",
    title: "Atomic Clock",
    desc: "An atomic clock is a high-precision clock that measures time using the constant frequency of atomic transitions in atoms such as cesium or rubidium.",
    align: "left"
  },
  {
    image: "/Images/laser.jpg",
    title: "Laser",
    desc: "Lasers are devices that produce a highly concentrated beam of coherent light through stimulated emission of radiation.",
    align: "right"
  },
  // {
  //   image: "/Images/Slide4_Home.jpeg",
  //   title: "Atomic Clock",
  //   desc: "Atomic clocks measure time using atomic transitions and power GPS and global timing systems.",
  //   align: "left"
  // },
  {
    image: "/Images/wavelength.jpg",
    title: "Wavelength",
    desc: "Wavelength is the distance between two consecutive identical points of a wave, such as crest to crest or trough to trough.",
    align: "right"
  }
];

export default function HeroSection() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % Slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + Slides.length) % Slides.length);
  };

  useEffect(() => {
    const slider = setInterval(nextSlide, 6000);
    return () => clearInterval(slider);
  }, []);

  const slide = Slides[current];

  return (
    <section className="relative h-[600px] flex items-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={slide.image}
        alt="lab"
        className="absolute w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-6 z-20 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-6 z-20 text-white text-4xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/60"
      >
        ❯
      </button>

      {/* HERO SLIDE */}
      {/* HERO SLIDE */}
{slide.type === "hero" ? (

  <div className="relative z-10 max-w-3xl mx-auto text-center px-6">

    <h1 className="text-6xl font-bold mb-6">
      USAC Virtual Lab
    </h1>

    <p className="text-lg text-gray-200">
      Explore Atomic Clocks, Frequency Stability and Precision Timing
      Systems in a virtual environment.
    </p>

  </div>

) : (

        /* NORMAL INFO SLIDES */
        <div
          className={`relative z-10 max-w-xl px-10 ${
            slide.align === "left"
              ? "ml-16 text-left"
              : "ml-auto mr-16 text-right"
          }`}
        >

          <h1 className="text-5xl font-bold mb-4">
            {slide.title}
          </h1>

          <p className="text-lg text-gray-200">
            {slide.desc}
          </p>

        </div>

      )}

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {Slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

    </section>
  );
}