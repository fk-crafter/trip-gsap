"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaPen,
  FaMapMarkedAlt,
  FaCamera,
  FaPlug,
  FaFileAlt,
  FaLanguage,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const tips = [
  {
    title: "Always carry a pen",
    icon: <FaPen size={28} />,
    detail:
      "Filling out customs forms on planes or trains becomes much easier. Trust us.",
  },
  {
    title: "Download offline maps",
    icon: <FaMapMarkedAlt size={28} />,
    detail:
      "Google Maps lets you save areas. Lifesaver in places with no signal.",
  },
  {
    title: "Back up your docs",
    icon: <FaFileAlt size={28} />,
    detail: "Passport, bookings, ID — keep copies in your email or cloud.",
  },
  {
    title: "Bring a universal adapter",
    icon: <FaPlug size={28} />,
    detail: "Different countries, different sockets. Save yourself the hunt.",
  },
  {
    title: "Ask locals",
    icon: <FaLanguage size={28} />,
    detail: "Skip tourist traps. Locals always know the best food and spots.",
  },
  {
    title: "Take photos of receipts",
    icon: <FaCamera size={28} />,
    detail: "Especially for rentals or deposits. Proof helps if issues arise.",
  },
];

export default function TravelTips() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".flip-card");

    if (!cards || !titleRef.current) return;

    // Titre
    gsap.fromTo(
      titleRef.current,
      {
        y: 40,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
        },
      }
    );

    // Cartes
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
        rotateX: 15,
        rotateZ: 4,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateZ: 0,
        duration: 1.4,
        ease: "power4.out",
        stagger: {
          each: 0.2,
          from: "center",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
        },
      }
    );
  }, []);

  return (
    <section
      className="w-full z-50 py-24 px-6 bg-white text-gray-800 text-center"
      ref={containerRef}
    >
      <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16">
        Before You Go
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flip-card relative h-60 cursor-pointer perspective"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0.2,0.2,1)] w-full h-full transform-style-preserve-3d ${
                flippedIndex === index ? "rotate-y-180" : ""
              }`}
            >
              <div className="absolute w-full h-full backface-hidden bg-gray-100 rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500">
                <div className="text-indigo-600">{tip.icon}</div>
                <h3 className="text-lg font-semibold">{tip.title}</h3>
                <p className="text-sm text-gray-500">Tap for details</p>
              </div>

              <div className="absolute w-full h-full backface-hidden bg-indigo-600 text-white rounded-xl shadow-2xl p-6 flex items-center justify-center rotate-y-180">
                <p className="text-sm leading-relaxed text-center max-w-[85%]">
                  {tip.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
