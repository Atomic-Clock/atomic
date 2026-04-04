// export default function Conclusionsection() {
//   return (
//     <section className="conclusion-section">
//       <h2>Conclusion</h2>
//       <p>You now understand atomic clocks from basics to advanced systems.</p>
//     </section>
//   );
// }



export default function Conclusionsection() {
  return (
    <section id="conclusion" className="conclusion-section">

      {/* 🔥 HEADER */}
      <div className="conclusion-header">
        <h2>Conclusion</h2>
      </div>

      {/* 🔥 MAIN TEXT */}
      <div className="conclusion-content">
        <p>
          Atomic clocks represent one of the most precise technologies developed
          by modern science, where the natural oscillations of atoms are used to
          measure time with extraordinary accuracy.
        </p>

        <p>
          From atomic interactions and laser control to detection systems and
          feedback mechanisms like MAVC, each component plays a crucial role in
          building a stable and self-correcting system.
        </p>

        <p>
          With advancements such as chip-scale atomic clocks and optical systems,
          this technology has moved beyond laboratories into real-world
          applications including GPS, telecommunications, defense, and space
          exploration.
        </p>

        <p>
          As innovation continues, atomic clocks will become even more compact,
          efficient, and powerful—shaping the future of precision timing across
          emerging technologies.
        </p>
      </div>

      {/* 🔥 FINAL LINE */}
      <div className="conclusion-highlight">
        <p>From atoms to accuracy — redefining the way the world measures time.</p>
      </div>

    </section>
  );
}