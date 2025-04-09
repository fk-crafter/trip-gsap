"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CulturalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const addToRefs = (el: HTMLVideoElement | null) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSlides = videoPaths.length;

      gsap.to(scrollRef.current, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${window.innerWidth * (totalSlides - 1)}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      videoRefs.current.forEach((video, i) => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: () => `top+=${window.innerWidth * i} top`,
          end: () => `top+=${window.innerWidth * (i + 1)} top`,
          onEnter: () => video.play(),
          onLeave: () => video.pause(),
          onEnterBack: () => video.play(),
          onLeaveBack: () => video.pause(),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const videoPaths = [
    "/kyoto-break.mp4",
    "/japan-food.mp4",
    "/morocco.mp4",
    "/morocco-souk.mov",
    "/moroccan-food.mov",
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden z-50"
    >
      <div ref={scrollRef} className="flex h-full w-[790vw]">
        {videoPaths.map((src, index) => (
          <video
            key={index}
            ref={addToRefs}
            className="w-screen h-full object-cover flex-shrink-0"
            muted
            autoPlay
            loop
            playsInline
            src={src}
          />
        ))}
      </div>
    </div>
  );
}
