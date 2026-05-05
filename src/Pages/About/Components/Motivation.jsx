import React, { useEffect } from "react";

export default function Motivation() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="motivation-section">
      <div className="motivation-wrapper">

        {/* LEFT CONTENT */}
        <div className="motivation-container">

          <h2 className="reveal">Why We Built This</h2>

          <p className="reveal delay-1">
            While exploring the domain of <span>precision timekeeping</span>, we realized that
            most resources available are either <span>too technical</span> or too scattered for
            effective learning.
          </p>

          <p className="reveal delay-2">
            As students, we wanted a platform that could guide us from the basics
            to advanced systems in a clear and structured way. When we couldn’t
            find one, <span>we decided to build it ourselves</span>.
          </p>

          <p className="reveal delay-3">
            This project is driven by <span>curiosity</span>, <span>clarity</span>, and the desire
            to make complex concepts accessible to everyone.
          </p>

        </div>

        <div className="motivation-visual">
          <div className="timeline">
            <div className="timeline-step">
              <div className="dot"></div>
              <div className="content">
                <h4 className="reveal">Problem</h4>
                <p className="reveal delay-1">
                  Most available resources on atomic clocks are too complex, making it difficult for learners to grasp the fundamentals.
                </p>
              </div>
            </div>

    <div className="timeline-step">
      <div className="dot"></div>
      <div className="content">
        <h4 className="reveal">Gap</h4>
        <p className="reveal delay-2">
          There was no single platform that explained concepts in a structured, simple, and visually understandable way.
        </p>
      </div>
    </div>

    <div className="timeline-step">
      <div className="dot"></div>
      <div className="content">
        <h4 className="reveal">Solution</h4>
        <p className="reveal delay-3">
          We built an interactive platform that simplifies complex ideas and connects theory with real-world understanding.
        </p>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}