export default function PlatformOverview() {
  return (
    <section className="py-20 bg-[#0b0f1a] text-center">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">
        Explore the Platform
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {["Learn Mode", "Simulate Mode", "Training Mode", "Stability Analyzer"].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400 transition cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}