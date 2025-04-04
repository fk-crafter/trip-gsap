"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    title: "destination 1",
    image: "/image3.jpg",
  },
  {
    title: "destination 2",
    image: "/image3.jpg",
  },
  {
    title: "destination 3",
    image: "/image3.jpg",
  },
  {
    title: "destination 4",
    image: "/image3.jpg",
  },
];

export default function FeaturedDestinations() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(horizontalRef.current, {
      x: () => {
        const scrollWidth = horizontalRef.current?.scrollWidth ?? 0;
        const containerWidth = containerRef.current?.offsetWidth ?? 0;
        const extra = 1000;
        return `-${scrollWidth - containerWidth + extra}`;
      },
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => {
          const scrollWidth = horizontalRef.current?.scrollWidth ?? 0;
          const containerWidth = containerRef.current?.offsetWidth ?? 0;
          const extra = 100;
          return `+=${scrollWidth - containerWidth + extra}`;
        },
        scrub: true,
        pin: true,
        anticipatePin: 1,
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
      <div
        ref={horizontalRef}
        className="flex space-x-32 h-full items-center px-32 pr-[500px]"
      >
        {destinations.map((dest, index) => (
          <div key={index} className="flex-shrink-0 group relative">
            <Image
              src={dest.image}
              alt={dest.title}
              width={500}
              height={600}
              className="floating-image rounded-3xl shadow-2xl object-cover transition-transform duration-500"
            />

            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300">
              <p className="text-white text-lg font-semibold">{dest.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
