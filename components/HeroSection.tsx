"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center h-screen text-center text-white bg-gradient-to-b from-[#0f0f0f] to-[#1c1c1e] px-6">
      <h1
        ref={titleRef}
        className="text-6xl md:text-7xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text drop-shadow-lg"
      >
        Unforgettable Journeys
      </h1>

      <p
        ref={subtitleRef}
        className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl drop-shadow-md"
      >
        Experience the world&apos;s most breathtaking destinations, wrapped in
        luxury and adventure.
      </p>

      <button
        ref={buttonRef}
        className="mt-6 px-8 py-4 bg-gray-800 text-gray-300 font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 hover:text-white"
      >
        Explore Now
      </button>
    </section>
  );
}
