"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  { title: "Sahara", image: "/img/sahara.jpg", video: "/video/sahara.mp4" },
  { title: "Atacama", image: "/img/atacama.jpg", video: "/video/atacama.mp4" },
  {
    title: "Wadi Rum",
    image: "/img/wadi-rum.jpg",
    video: "/video/wadi-rum.mp4",
  },
  {
    title: "Death Valley",
    image: "/img/death-valley.jpg",
    video: "/video/death-valley.mp4",
  },
];

export default function DesertSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const scrollWidth = horizontalRef.current?.scrollWidth ?? 0;
    const containerWidth = containerRef.current?.offsetWidth ?? 0;
    const distance = scrollWidth - containerWidth;

    gsap.fromTo(
      horizontalRef.current,
      { x: -distance },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${distance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
        },
      }
    );

    gsap.utils.toArray<HTMLElement>(".floating-image").forEach((el) => {
      gsap.to(el, {
        y: "-=10",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#f7d199] via-[#f3b36b] to-[#d87c3a] text-white z-50"
    >
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
        <h2 className="text-4xl font-bold tracking-tight text-[#4b1e08]">
          Desert Dreams
        </h2>
        <p className="text-[#4b1e08]/70 mt-2 max-w-md mx-auto text-sm">
          Embrace the vast silence and golden horizons.
        </p>
      </div>

      <div
        ref={horizontalRef}
        className="flex space-x-32 h-full items-center px-32 pr-[500px]"
      >
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="flex-shrink-0 group relative w-[600px] h-[337px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={dest.image}
              alt={dest.title}
              fill
              className="object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
            />

            <video
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-3xl"
              src={dest.video}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
              <p className="text-white text-lg font-semibold bg-[#b25626]/70 px-4 py-1 rounded-full backdrop-blur-sm shadow-md">
                {dest.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
