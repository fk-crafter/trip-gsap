"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ChoiceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".animate-narrative"),
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full z-50 min-h-[100vh] bg-[#f7f7f7] text-gray-900 flex flex-col items-center justify-center text-center px-6"
    >
      <h2 className="animate-narrative text-4xl md:text-5xl font-semibold mb-6">
        Ready to plan your adventure?
      </h2>
      <p className="animate-narrative text-lg md:text-xl max-w-2xl text-gray-700">
        A map is here to guide you — pick your vibe and start exploring.
      </p>
    </section>
  );
}
