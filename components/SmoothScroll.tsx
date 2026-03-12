"use client";
import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }: any) {
  return (
    <ReactLenis root options={{ lerp: 1, duration: 2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;