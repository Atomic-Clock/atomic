import React, { useEffect } from "react";

export default function ProjectIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro-container">

        {/* Left Side - Text */}
        <div className="about-intro-text">
          <h2 className="reveal">What We Built</h2>

          <p className="reveal delay-1">
            This project is an interactive learning platform designed to explain
            atomic clocks from foundational concepts to advanced real-world
            implementations.
          </p>

          <p className="reveal delay-2">
            Atomic clocks are among the most accurate timekeeping systems in
            existence, yet their working remains complex and inaccessible to
            most learners. Our goal is to bridge that gap by presenting
            structured, visual, and easy-to-understand content.
          </p>

          <p className="reveal delay-3">
            We have integrated theoretical knowledge with practical insights
            into real laboratory instruments, making the learning experience
            both academic and application-oriented.
          </p>
        </div>

        {/* Right Side - Visual */}
        <div className="about-intro-visual reveal delay-2">
          <div className="intro-glass-card">
            {/* <p>⚛️</p> */}
            <img src="/Images/about_1.jpeg" 
            alt="Atomic Clock" className="intro-image" />
          </div>
        </div>

      </div>
    </section>
  );
}