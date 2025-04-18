"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryTitle() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const grainRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const words = headingRef.current?.querySelectorAll("span");

    words?.forEach((word, i) => {
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
            start: `top+=${100 + i * 20} bottom-=20`,
            end: "top center",
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      grainRef.current,
      { opacity: 0 },
      {
        opacity: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const headingText = "The World Through Your Eyes";

  return (
    <div className="relative w-full min-h-[180vh] flex flex-col items-center justify-center py-32 overflow-hidden z-50 bg-white">
      <div
        ref={grainRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-0"
      />
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-black leading-snug"
        >
          {headingText.split(" ").map((word, i) => (
            <span key={i} className="inline-block mx-1 whitespace-nowrap">
              {word}
            </span>
          ))}
        </h2>
        <p ref={paragraphRef} className="text-gray-400 mt-6 opacity-0">
          Traveling is more than just visiting places — it&apos;s a powerful way
          to grow as a person.
        </p>
      </div>
    </div>
  );
}
