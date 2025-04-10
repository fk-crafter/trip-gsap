"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryTitle() {
  const textRef = useRef(null);
  const grainRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      grainRef.current,
      { opacity: 0 },
      {
        opacity: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center py-32 overflow-hidden z-50">
      <div
        ref={grainRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-0 bg-[url('/img/grain.png')] bg-cover"
      />
      <div ref={textRef} className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-black">
          The World Through Your Eyes
        </h2>
        <p className="text-gray-400">
          Traveling is more than just visiting places — it&apos;s a powerful way
          to grow as a person.
        </p>
      </div>
    </div>
  );
}
