"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FlightIntro() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current!.querySelectorAll(".animate-item");

      gsap.fromTo(
        elements,
        {
          y: 50,
          opacity: 0,
          rotationX: 45,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="z-50 w-full h-[100vh] bg-white flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="animate-item text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Fasten your seatbelts.
      </h2>
      <p className="animate-item text-lg md:text-xl text-gray-600 max-w-xl">
        Were about to discover the world.
      </p>
    </section>
  );
}
