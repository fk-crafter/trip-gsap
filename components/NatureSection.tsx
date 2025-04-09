"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  { title: "Kyoto", image: "/kyoto.jpg", video: "/kyoto.mp4" },
  { title: "Swiss Alps", image: "/swiss-alps.jpg", video: "/swiss-alps.mp4" },
  {
    title: "Black Forest",
    image: "/black-forest.jpg",
    video: "/black-forest.mp4",
  },
  { title: "Banff", image: "/banff.jpg", video: "/banff.mp4" },
];

export default function NatureSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const scrollWidth = horizontalRef.current?.scrollWidth ?? 0;
    const containerWidth = containerRef.current?.offsetWidth ?? 0;
    const distance = scrollWidth - containerWidth;

    gsap.to(horizontalRef.current, {
      x: -distance,
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
    });

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
      className="relative w-full h-screen overflow-hidden bg-black text-white z-50"
    >
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
        <h2 className="text-4xl font-bold uppercase tracking-widest">
          Nature Escapes
        </h2>
        <p className="text-white/70 mt-2 max-w-md mx-auto text-sm">
          Reconnect with your roots, surrounded by silence and trees.
        </p>
      </div>

      <div
        ref={horizontalRef}
        className="flex space-x-32 h-full items-center px-32 pr-[500px]"
      >
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="flex-shrink-0 group relative w-[600px] h-[337px]"
          >
            <Image
              src={dest.image}
              alt={dest.title}
              fill
              className="floating-image rounded-3xl shadow-2xl object-cover transition-transform duration-500"
            />

            <video
              className="absolute -top-[5px] left-0 w-full h-full rounded-3xl shadow-2xl object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              src={dest.video}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300 z-20">
              <p className="text-white text-lg font-semibold">{dest.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
