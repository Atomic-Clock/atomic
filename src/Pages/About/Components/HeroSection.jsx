import React, { useEffect } from "react";

export default function HeroSection() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = document.querySelector(".about-hero");
      if (hero) {
        hero.style.setProperty("--x", `${e.clientX}px`);
        hero.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <h1 className="about-hero-title reveal">About This Project</h1>
        <p className="about-hero-subtext reveal delay-1">
          We are building more than just a project — we are simplifying one of
          the most precise technologies ever created: the atomic clock.
        </p>
      </div>
    </section>
  );
}