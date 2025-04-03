"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !leftRef.current ||
      !rightRef.current ||
      !scrollableRef.current
    )
      return;

    // Pin gauche
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${scrollableRef.current!.scrollHeight}`,
      pin: leftRef.current,
      pinSpacing: false,
      scrub: false,
    });

    // Pin droite
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${scrollableRef.current!.scrollHeight}`,
      pin: rightRef.current,
      pinSpacing: false,
      scrub: false,
    });

    // Scroll du contenu interne dans la colonne droite
    gsap.to(scrollableRef.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollableRef.current!.scrollHeight}`,
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full z-50 py-32 px-4 text-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-[200vh]">
        {/* Colonne gauche (pin classique) */}
        <div ref={leftRef} className="relative">
          <div className="sticky top-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why travel is important
            </h2>
            <p className="text-gray-400">
              Traveling is more than just visiting places—its a powerful way to
              grow as a person.
            </p>
          </div>
        </div>

        {/* Colonne droite (pin + scroll interne) */}
        <div ref={rightRef} className="relative h-[80vh] overflow-hidden">
          <div ref={scrollableRef} className="space-y-48">
            <div>
              <h3 className="text-xl font-semibold">1. Broadens Perspective</h3>
              <p className="text-gray-400 mt-2">
                Seeing how others live opens your mind and helps you understand
                different cultures and lifestyles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Builds Confidence</h3>
              <p className="text-gray-400 mt-2">
                Navigating new environments boosts independence and
                problem-solving skills.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Creates Memories</h3>
              <p className="text-gray-400 mt-2">
                The experiences you gain while traveling often become the most
                cherished memories of your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
