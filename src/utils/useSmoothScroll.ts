"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let scrollY = window.scrollY;
    let speed = 0;
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // Laisse le zoom avec Ctrl + Scroll
      e.preventDefault();

      const sensitivity = 0.05; // Ajuste la sensibilité pour plus de fluidité
      speed += e.deltaY * sensitivity;

      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    };

    const smoothScroll = () => {
      if (Math.abs(speed) > 0.5) {
        scrollY = Math.max(0, scrollY + speed); // Empêche les valeurs négatives
        speed *= 0.9; // Effet d’inertie
        window.scrollTo({ top: scrollY, behavior: "instant" });
        requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
