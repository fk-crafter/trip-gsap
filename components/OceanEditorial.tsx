"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const destinations = [
  {
    title: "Maldives",
    image: "/img/maldives.jpg",
    video: "/video/maldives.mp4",
    description: "Crystal-clear waters and overwater bungalows in paradise.",
  },
  {
    title: "Bora Bora",
    image: "/img/bora-bora.jpg",
    video: "/video/bora-bora.mp4",
    description: "Turquoise lagoons and tropical serenity in French Polynesia.",
  },
  {
    title: "Tulum",
    image: "/img/tulum.jpg",
    video: "/video/tulum.mp4",
    description: "Where ancient ruins meet dreamy white-sand beaches.",
  },
  {
    title: "Bali",
    image: "/img/bali.jpg",
    video: "/video/bali.mp4",
    description: "Lush island life and golden sunsets over the ocean.",
  },
];

export default function OceanEditorial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="z-50 w-full bg-gradient-to-b from-[#d4f1f9] to-[#fff5e1] text-gray-800 py-20 transition-all duration-700">
      <div className="text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sky-700">
          Ocean Vibes
        </h2>
        <p className="text-sky-600 mt-3 max-w-xl mx-auto text-base md:text-lg">
          Let the tide reset your soul and the sun warm your thoughts.
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 transition-all"
        >
          {isOpen ? "Close" : "Explore"}{" "}
          <ChevronDown
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`transition-all duration-700 overflow-hidden ${
          isOpen ? "max-h-[4000px] mt-10" : "max-h-0"
        }`}
      >
        {destinations.map((dest, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row ${
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
                  <h2 className="text-5xl font-bold inline-block relative group cursor-pointer text-sky-700">
                    {dest.title}
                    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-sky-700 transition-all duration-300 group-hover:w-full"></span>
                  </h2>
                  <p className="text-lg text-sky-600">{dest.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
