import React from "react";
import "./Section.css";

import HeroSection from "./Components/HeroSection";
import ProjectIntro from "./Components/ProjectIntro";
import Motivation from "./Components/Motivation";
import Highlights from "./Components/Highlights";
import HowItWorks from "./Components/HowItWorks";
import Technologies from "./Components/Technologies";
import Team from "./Components/Team";
import Vision from "./Components/Vision";
import FooterNote from "./components/FooterNote";


import { useEffect } from "react";

export default function About() {

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
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="about-page">

      <div className="about-layout">
        
        <div className="about-content">

          <HeroSection />
          <ProjectIntro />
          <Motivation />
          <Highlights />
          <HowItWorks />
          <Technologies />
          <Team />
          <Vision />

        </div>
      </div>

    </div>
  );
}