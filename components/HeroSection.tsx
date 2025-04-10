"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const heroContainerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);
  const curtainRef = useRef(null);
  const loadingRef = useRef(null);

  useGSAP(() => {
    gsap.to(".hero-logo", {
      scale: 1.05,
      opacity: 0.9,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(loadingRef.current, {
      scale: 1.05,
      opacity: 0.3,
      duration: 1.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(curtainRef.current, {
      yPercent: -100,
      duration: 3,
      ease: "power4.inOut",
      delay: 0.5,
    });

    gsap.fromTo(
      videoRef.current,
      {
        scale: 5,
        opacity: 0.6,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: "power2.out",
        delay: 0.5,
      }
    );

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
      delay: 3,
    });

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 3.3,
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
        delay: 3.6,
      }
    );
  }, []);

  return (
    <section
      ref={heroContainerRef}
      className="relative flex flex-col justify-center items-center h-screen text-center text-white bg-black overflow-hidden"
    >
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-black z-50 flex flex-col justify-center items-center"
      >
        <Image
          src="/img/logo.png"
          alt="Logo"
          className="w-80 h-40 mb-4 invert hero-logo"
          width={300}
          height={300}
        />
        <p
          ref={loadingRef}
          className="text-white text-lg tracking-wider font-light mt-2 uppercase"
        >
          Loading
        </p>
      </div>
      <video
        ref={videoRef}
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
                className="px-6 py-3 cursor-pointer uppercase text-sm tracking-wider text-white border border-white bg-black/30 rounded-md transition-all duration-300 backdrop-blur-sm hover:bg-white/20"
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
