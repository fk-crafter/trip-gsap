"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import HeroLoading from "./HeroLoading";

gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const heroContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.to(videoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 4,
      ease: "power2.out",
      delay: 0.6,
    });

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
      x: -1150,
      duration: 1.2,
      ease: "power4.out",
      delay: 5.8,
    });

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, x: -1100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 6.2,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 6.5,
      }
    );

    gsap.fromTo(
      lineRef.current,
      { opacity: 0, width: 0 },
      {
        opacity: 1,
        width: "100%",
        duration: 1.2,
        ease: "power4.out",
        delay: 6.4,
      }
    );
  }, []);

  return (
    <section
      ref={heroContainerRef}
      className="relative flex flex-col justify-center items-center h-screen text-center text-white bg-black overflow-hidden"
    >
      <HeroLoading />

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="/bg.mp4"
      />

      <div className="absolute inset-0 bg-black/40 z-1" />

      <div className="relative z-10 px-6">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          Explore The World
        </h1>
        <hr
          ref={lineRef}
          className="w-1/2 mx-auto my-8 border-t-2 border-white"
        />
        <p
          ref={subtitleRef}
          className="mt-4 text-lg md:text-xl max-w-3xl text-white bg-black/20 px-4 py-2 rounded-md backdrop-blur-sm shadow-md"
        >
          Discover breathtaking landscapes, immerse yourself in diverse
          cultures, and create unforgettable memories.
        </p>
        <div
          ref={buttonRef}
          className="mt-10 flex flex-wrap gap-4 justify-center items-center"
        >
          {["Things to do", "Watch video", "Plan your trip"].map(
            (label, index) => (
              <button
                key={index}
                className="px-6 py-3 cursor-pointer uppercase text-sm tracking-wider text-white border bg-black/50 rounded-md transition-all duration-300 backdrop-blur-sm hover:bg-white/20"
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
