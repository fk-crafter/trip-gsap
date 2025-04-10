"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Destination = {
  title: string;
  image: string;
  video: string;
  description: string;
};

type Props = {
  title: string;
  description: string;
  themeColor: string;
  textColor: string;
  borderColor: string;
  gradient: string;
  destinations: Destination[];
  enableHoverPreview?: boolean;
};

export default function DestinationSection({
  title,
  description,
  themeColor,
  textColor,
  borderColor,
  gradient,
  destinations,
  enableHoverPreview = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section
      className={`relative z-50 w-full bg-gradient-to-b ${gradient} text-gray-800 py-20 transition-all duration-700`}
      onMouseMove={(e) => {
        if (!enableHoverPreview || isOpen) return;
        setHoverPos({ x: e.clientX, y: e.clientY });
        setShowPreview(true);
      }}
      onMouseLeave={() => setShowPreview(false)}
    >
      {!isOpen && enableHoverPreview && (
        <div
          className="pointer-events-none fixed z-[999] transition-opacity duration-300 ease-out"
          style={{
            top: hoverPos.y + 20,
            left: hoverPos.x + 20,
            opacity: showPreview ? 1 : 0,
          }}
        >
          <div className="w-48 h-32 rounded-lg overflow-hidden shadow-lg border border-white/30">
            <Image
              src={destinations[0].image}
              alt="Preview"
              width={192}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="text-center px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight ${themeColor}`}
        >
          {title}
        </h2>
        <p
          className={`${textColor} mt-3 max-w-xl mx-auto text-base md:text-lg`}
        >
          {description}
        </p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`mt-6 inline-flex items-center gap-2 ${themeColor} hover:opacity-80 transition-all`}
        >
          {isOpen ? "Close" : "Explore"}
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
              } gap-6 py-24 border-b ${borderColor} px-6 md:px-0 items-center`}
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
                  <h2
                    className={`text-5xl font-bold inline-block relative group cursor-pointer ${themeColor}`}
                  >
                    {dest.title}
                    <span
                      className={`absolute left-0 -bottom-1 w-0 h-1 ${themeColor} transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </h2>
                  <p className={`text-lg ${textColor}`}>{dest.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
