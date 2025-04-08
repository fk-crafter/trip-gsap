"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Visages du monde",
    img: "/kyoto.jpg",
    text: "Des regards qui racontent des histoires.",
  },
  {
    title: "Plats typiques",
    img: "/images/food.jpg",
    text: "Goûtez aux saveurs du monde.",
  },
  {
    title: "Habits traditionnels",
    img: "/images/clothing.jpg",
    text: "Des tissus et motifs porteurs de culture.",
  },
  {
    title: "Scènes de rue",
    img: "/images/street.jpg",
    text: "Le quotidien vibrant de chaque pays.",
  },
];

export default function CultureDiscoverySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".panel");

    if (container && sections.length > 0) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          // Utilise window.innerWidth pour calculer une vraie longueur de scroll
          end: () => `+=${window.innerWidth * (sections.length - 1)}`,
        },
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-50 h-screen w-[400vw] flex"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="panel w-screen h-screen flex items-center justify-center flex-col bg-gray-900 text-white p-10"
        >
          <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
          <img
            src={slide.img}
            alt={slide.title}
            className="w-2/3 h-96 object-cover rounded-xl shadow-lg"
          />
          <p className="mt-6 text-xl max-w-xl text-center opacity-80">
            {slide.text}
          </p>
        </div>
      ))}
    </section>
  );
}
