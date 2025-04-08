"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MapRevealSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-50 w-full h-[100vh] bg-[#f2f2f2] flex items-center justify-center overflow-hidden"
    >
      <div ref={imageRef} className="w-[400px] h-[500px] relative">
        <Image
          src="/airport.jpg"
          alt="Reveal"
          fill
          className="object-cover rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
}
