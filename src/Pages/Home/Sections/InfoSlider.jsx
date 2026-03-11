import { useState, useEffect } from "react";

const slides = [
  {
    title: "What is an Atomic Clock?",
    text: "An atomic clock measures time using the precise frequency of atoms like Cesium or Rubidium.",
  },
  {
    title: "Why Stability Matters",
    text: "Small frequency drifts can cause massive timing errors in GPS and communication systems.",
  },
  {
    title: "Global Applications",
    text: "Atomic clocks power GPS satellites, telecom networks, defense systems, and space missions.",
  },
];

export default function InfoSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#111827] text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
          {slides[current].title}
        </h2>

        <p className="text-gray-300 text-lg">
          {slides[current].text}
        </p>
      </div>
    </section>
  );
}