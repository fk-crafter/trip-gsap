"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    title: "Kyoto",
    image: "/kyoto.jpg",
    video: "/kyoto.mp4",
    description: "A spiritual journey through peaceful Zen temples.",
  },
  {
    title: "Swiss Alps",
    image: "/swiss-alps.jpg",
    video: "/swiss-alps.mp4",
    description: "Dive into alpine heights, where snow meets silence.",
  },
  {
    title: "Black Forest",
    image: "/black-forest.jpg",
    video: "/black-forest.mp4",
    description: "Mysteries and legends deep in the heart of the forest.",
  },
  {
    title: "Banff",
    image: "/banff.jpg",
    video: "/banff.mp4",
    description: "Turquoise lakes and majestic peaks in the Canadian Rockies.",
  },
];

export default function NatureEditorial() {
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
      className="z-50 w-full bg-gradient-to-b from-[#e3f2f1] to-[#fef9f3] text-gray-800 py-20"
    >
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-700">
          Nature Escapes
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-base md:text-lg">
          Reconnect with nature through landscapes that inspire peace and awe.
        </p>
      </div>

      {destinations.map((dest, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`animated-block w-full max-w-7xl mx-auto flex flex-col md:flex-row ${
              isReversed ? "md:flex-row-reverse" : ""
            } gap-6 py-24 border-b border-gray-300 px-6 md:px-0 items-center`}
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
                <h2 className="text-5xl font-bold inline-block relative group cursor-pointer text-emerald-700">
                  {dest.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-lg text-gray-600">{dest.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
