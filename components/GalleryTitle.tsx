"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryTitle() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll("span");

    words.forEach((word, i) => {
      gsap.fromTo(
        word,
        {
          opacity: 0,
          y: 40,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: word,
            start: `top+=${100 + i * 20} bottom-=20`, // progressif
            end: "top center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const text =
    "The World Through Your Eyes Traveling is more than just visiting places — it's a powerful way to grow as a person.";

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center py-32 overflow-hidden z-50">
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div
          ref={textRef}
          className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-black leading-snug"
        >
          {text.split(" ").map((word, i) => (
            <span key={i} className="inline-block mx-1 whitespace-nowrap">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
