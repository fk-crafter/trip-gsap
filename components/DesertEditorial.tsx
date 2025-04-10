"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    title: "Sahara",
    image: "/img/sahara.jpg",
    video: "/video/sahara.mp4",
    description: "Endless dunes and the golden silence of ancient sands.",
  },
  {
    title: "Atacama",
    image: "/img/atacama.jpg",
    video: "/video/atacama.mp4",
    description: "Earth's driest desert, rich in stars and surreal colors.",
  },
  {
    title: "Wadi Rum",
    image: "/img/wadi-rum.jpg",
    video: "/video/wadi-rum.mp4",
    description: "Canyons carved by time, under red Martian-like skies.",
  },
  {
    title: "Death Valley",
    image: "/img/death-valley.jpg",
    video: "/video/death-valley.mp4",
    description: "Extreme heat and iconic desertscapes in California.",
  },
];

export default function DesertEditorial() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".animated-block").forEach((el) => {
        gsap.fromTo(
          el,
          {
            clipPath: "circle(0% at 50% 50%)",
            scale: 0.95,
            opacity: 0,
          },
          {
            clipPath: "circle(150% at 50% 50%)",
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="z-50 w-full bg-gradient-to-b from-[#f7d199] via-[#f3b36b] to-[#d87c3a] text-white py-20"
    >
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#4b1e08]">
          Desert Dreams
        </h2>
        <p className="text-[#4b1e08]/70 mt-3 max-w-xl mx-auto text-base md:text-lg">
          Embrace the vast silence and golden horizons.
        </p>
      </div>

      {destinations.map((dest, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`animated-block w-full max-w-7xl mx-auto flex flex-col md:flex-row ${
              isReversed ? "md:flex-row-reverse" : ""
            } gap-6 py-24 border-b border-white/10 px-6 md:px-0 items-center`}
          >
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl md:w-1/2 relative group">
              <Image
                src={dest.image}
                alt={dest.title}
                width={1000}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                src={dest.video}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div
              className={`w-full md:w-1/2 flex items-center ${
                isReversed ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`space-y-4 w-full max-w-md ${
                  isReversed ? "text-right" : "text-left"
                }`}
              >
                <h2 className="text-5xl font-bold inline-block relative group cursor-pointer text-[#4b1e08]">
                  {dest.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#4b1e08] transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-lg text-[#4b1e08]/70">{dest.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
