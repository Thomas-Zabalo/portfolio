"use client";

import { useSmoothScroll } from "@/utils/useSmoothScroll";

export default function SmoothScrollWrapper() {
  useSmoothScroll();
  return null; // Ce composant ne rend rien, il applique juste le scroll
}
