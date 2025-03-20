"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OverlayEffect() {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    gsap.fromTo(
      overlayRef.current,
      { y: "120%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute -bottom-32 left-0 w-full h-full bg-white flex items-center justify-center text-black text-3xl font-bold "
    >
      <h2>welcome to the gallery</h2>
    </div>
  );
}
