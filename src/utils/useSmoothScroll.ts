"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    let scrollY = window.scrollY;
    let speed = 0;
    let isScrolling = false;
    let lastDeltaY = 0;
    let usingTrackpad = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Détection du trackpad (valeurs faibles et fréquentes)
      if (Math.abs(e.deltaY) < 15) {
        usingTrackpad = true;
      } else {
        usingTrackpad = false;
      }

      // Ajuster la sensibilité selon la source
      const sensitivity = 0.02;
      speed += e.deltaY * sensitivity;

      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }

      lastDeltaY = e.deltaY;
    };

    const smoothScroll = () => {
      if (Math.abs(speed) > 0.5) {
        scrollY += speed;
        speed *= 0.9; // Effet d’inertie pour ralentir progressivement
        window.scrollTo(0, scrollY);
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
