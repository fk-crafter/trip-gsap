"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTransition() {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      overlayRef.current,
      { height: 0, width: "40%", left: "30%" },
      {
        height: "100vh",
        width: "100%",
        left: 0,
        ease: "none",
        delay: 0.5,
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={overlayRef}
      className="w-full fixed bottom-0 left-0 z-20 pointer-events-none bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-lg"
    />
  );
}
