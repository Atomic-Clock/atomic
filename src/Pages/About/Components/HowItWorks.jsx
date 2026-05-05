import React from "react";

export default function HowItWorks() {
  return (
    <section className="how-section">
      <h2 className="how-title reveal">How It Works</h2>

      <div className="how-steps">

        <div className="step reveal delay-1">
          <div className="step-number">01</div>
          <h3>Start with Basics</h3>
          <p>
            Users begin with fundamental concepts of atomic structure and time measurement.
          </p>
        </div>

        <div className="step reveal delay-2">
          <div className="step-number">02</div>
          <h3>Explore Core Mechanisms</h3>
          <p>
            Learn how atomic transitions are used to achieve extremely precise timekeeping.
          </p>
        </div>

        <div className="step reveal delay-2">
          <div className="step-number">03</div>
          <h3>Understand Instruments</h3>
          <p>
            Get introduced to real-world devices used in atomic clock systems and their roles.
          </p>
        </div>

        <div className="step reveal delay-3">
          <div className="step-number">04</div>
          <h3>Connect to Real Systems</h3>
          <p>
            See how all components integrate into fully functioning atomic clock systems.
          </p>
        </div>

      </div>
    </section>
  );
}