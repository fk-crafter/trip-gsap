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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        planeRef.current,
        {
          scale: 0.2,
          opacity: 0.5,
        },
        {
          scale: 1.5,
          opacity: 1,
          ease: "power2.out",
          duration: 0.5,
        }
      ).to(planeRef.current, {
        opacity: 0,
        ease: "power1.out",
        duration: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="z-50 relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #dbeafe, #ffffff)",
        }}
      >
        <Image
          ref={planeRef}
          src="/plane2.png"
          alt="Flying Plane"
          width={800}
          height={800}
          className="object-contain"
        />
      </section>

      <section className="w-full h-[100vh] bg-white flex items-center justify-center"></section>
    </>
  );
}
