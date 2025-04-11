"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "/img/thai-street.jpg",
    alt: "Street food in Thailand",
    label: "Food - Thailand",
  },
  {
    src: "/img/mexico-street.png",
    alt: "Traditional dance in Mexico",
    label: "Culture - Mexico",
  },
  {
    src: "/img/morocco-street.jpg",
    alt: "Market in Morocco",
    label: "Market - Morocco",
  },
  {
    src: "/img/pakistan-street.avif",
    alt: "Playing children",
    label: "People - Pakistan",
  },
  {
    src: "/img/senegal-street.jpg",
    alt: "Street life in Senegal",
    label: "Street Life - Senegal",
  },
  {
    src: "/img/japan-street.webp",
    alt: "Ceremony of tea in Japan",
    label: "Tradition - Japan",
  },
  {
    src: "/img/vietnam-street.jpg",
    alt: "Street vendors in Vietnam",
    label: "Market - Vietnam",
  },
  {
    src: "/img/nepal-street.jpg",
    alt: "Local family in Nepal",
    label: "Life - Nepal",
  },
];

type RandomStyle = {
  rotate: number;
  translateY: number;
};

export default function InspirationGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [randomStyles, setRandomStyles] = useState<RandomStyle[]>([]);

  useEffect(() => {
    const styles: RandomStyle[] = images.map(() => ({
      rotate: (Math.random() - 0.5) * 6,
      translateY: Math.random() * 10 - 5,
    }));
    setRandomStyles(styles);
  }, []);

  useGSAP(() => {
    if (randomStyles.length > 0 && containerRef.current) {
      const items = containerRef.current.querySelectorAll(".media-item");

      gsap.set(items, {
        opacity: 0,
        filter: "blur(6px)",
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 40%",
        once: true,
        onEnter: () => {
          gsap.to(items, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power1.inOut",
            stagger: 0.05,
          });
        },
      });
    }
  }, [randomStyles]);

  return (
    <section className="relative z-50 py-20 px-4 bg-white" ref={containerRef}>
      <h2 className="text-4xl font-bold text-center mb-12 z-10 relative">
        Moments of the World
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center max-w-6xl mx-auto">
        {images.map((img, index) => {
          const style = randomStyles[index] || { rotate: 0, translateY: 0 };

          return (
            <div
              key={index}
              className="media-item w-64 h-40 relative rounded-xl overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:z-10"
              style={{
                transform: `rotate(${style.rotate}deg) translateY(${style.translateY}px)`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-2">
                {img.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
