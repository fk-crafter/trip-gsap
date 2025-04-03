"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const heroContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.to(heroContainerRef.current, {
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
    });

    gsap.from(titleRef.current, {
      opacity: 1,
      y: 500,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.3 }
    );
  }, []);

  return (
    <section
      ref={heroContainerRef}
      className="relative flex flex-col justify-center items-center h-screen text-center text-white bg-black overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/bg.mp4"
      />
      <div className="absolute inset-0 bg-opacity-40 z-1" />
      <div className="relative z-10 px-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          Explore The World
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          Discover breathtaking landscapes, immerse yourself in diverse
          cultures, and create unforgettable memories.
        </p>
        <button
          ref={buttonRef}
          className="mt-6 px-8 py-4 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg rounded-full shadow-md transition-transform duration-200 ease-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-300 hover:shadow-lg hover:translate-y-[-2px] active:scale-95"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
