"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PlaneRevealSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        planeRef.current,
        {
          scale: 0.2,
          y: 300,
          opacity: 0.5,
        },
        {
          scale: 1.5,
          y: -880,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1500",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="z-50 relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        ref={planeRef}
        src="/plane.png"
        alt="Flying Plane"
        width={800}
        height={800}
        className="object-contain"
      />
    </section>
  );
}
