"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroLoading from "./HeroLoading";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const lineRef = useRef(null);
  const videoRef = useRef(null);
  const [loadingDone, setLoadingDone] = useState(false);

  useGSAP(
    () => {
      if (!loadingDone) return;

      gsap.to(videoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
      });

      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
        },
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        x: -800,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.6,
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -800,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.8,
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power4.out",
        delay: 1.1,
      });

      gsap.from(lineRef.current, {
        opacity: 0,
        width: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 1.4,
      });
    },
    { dependencies: [loadingDone] }
  );

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col justify-center items-center h-screen text-center text-white  overflow-hidden"
    >
      {!loadingDone && <HeroLoading onComplete={() => setLoadingDone(true)} />}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110"
        autoPlay
        loop
        muted
        playsInline
        src="/bg.mp4"
      />

      {loadingDone && (
        <div className="relative z-20 px-6">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-extrabold uppercase "
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
      )}
    </section>
  );
}
