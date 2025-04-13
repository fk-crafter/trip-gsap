"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const COLUMN_COUNT = 4;

const images = [
  {
    src: "/img/tokyo-cross.jpg",
    alt: "Shibuya Crossing in Tokyo",
    label: "City - Japan (Tokyo)",
  },
  {
    src: "/img/kyoto-temple.jpg",
    alt: "Temple in Kyoto",
    label: "Culture - Japan (Kyoto)",
  },
  {
    src: "/img/osaka-food.jpg",
    alt: "Food stalls in Osaka",
    label: "Food - Japan (Osaka)",
  },

  {
    src: "/img/swiss-zurich.jpg",
    alt: "Cityscape in Zurich",
    label: "City - Switzerland (Zurich)",
  },
  {
    src: "/img/swiss-alps.jpg",
    alt: "Alpine view in Zermatt",
    label: "Nature - Switzerland (Zermatt)",
  },
  {
    src: "/img/swiss-fondu.jpg",
    alt: "Fondue in Geneva",
    label: "Food - Switzerland (Geneva)",
  },
  {
    src: "/img/germany-streetart.jpg",
    alt: "Street art in Berlin",
    label: "Culture - Germany (Berlin)",
  },
  {
    src: "/img/germany-hamburg.jpg",
    alt: "Port of Hamburg",
    label: "City - Germany (Hamburg)",
  },

  {
    src: "/img/canada-oldmontreal.jpg",
    alt: "Old Montreal",
    label: "City - Canada (Montreal)",
  },
  {
    src: "/img/canada-vancouver.jpg",
    alt: "Nature near Vancouver",
    label: "Nature - Canada (Vancouver)",
  },
  {
    src: "/img/canada-toronto.png",
    alt: "Street food in Toronto",
    label: "Food - Canada (Toronto)",
  },

  {
    src: "/img/maldives-bungalow.jpg",
    alt: "Overwater bungalow",
    label: "Relax - Maldives",
  },
  {
    src: "/img/maldives-diving.jpg",
    alt: "Diving in clear waters",
    label: "Adventure - Maldives",
  },
  {
    src: "/img/maldives-sunset.jpg",
    alt: "Sunset on the beach",
    label: "View - Maldives",
  },

  {
    src: "/img/borabora-lagoon.jpg",
    alt: "Lagoon view",
    label: "Nature - Bora Bora",
  },
  {
    src: "/img/borabora-paddle.jpg",
    alt: "Paddle board in turquoise water",
    label: "Relax - Bora Bora",
  },
  {
    src: "/img/borabora-hut.jpg",
    alt: "Traditional hut",
    label: "Culture - Bora Bora",
  },

  {
    src: "/img/tulum-beach.jpg",
    alt: "Beach in Tulum",
    label: "Relax - Tulum",
  },
  { src: "/img/tulum-ruins.jpg", alt: "Mayan ruins", label: "Culture - Tulum" },
  {
    src: "/img/tulum-food.jpg",
    alt: "Street food in Tulum",
    label: "Food - Tulum",
  },

  {
    src: "/img/bali-rice.jpg",
    alt: "Rice fields in Ubud",
    label: "Nature - Bali (Ubud)",
  },

  { src: "/img/bali-beach.jpg", alt: "Beach at sunset", label: "Relax - Bali" },

  {
    src: "/img/time-square.jpg",
    alt: "Times Square",
    label: "City - New York (Manhattan)",
  },
  {
    src: "/img/nyc-central.jpg",
    alt: "Central Park",
    label: "Nature - New York (Manhattan)",
  },
  {
    src: "/img/nyc-food.jpg",
    alt: "Hot dog stand",
    label: "Food - New York (Brooklyn)",
  },

  {
    src: "/img/paris-eiffel.jpg",
    alt: "Eiffel Tower",
    label: "Landmark - Paris",
  },
  {
    src: "/img/paris-louvre.jpg",
    alt: "Louvre Museum",
    label: "Culture - Paris",
  },
  { src: "/img/paris-bakery.jpg", alt: "French bakery", label: "Food - Paris" },

  {
    src: "/img/sydney-opera.jpg",
    alt: "Opera House",
    label: "Landmark - Sydney",
  },
  {
    src: "/img/sydney-harbour.jpg",
    alt: "Sydney Harbour Bridge",
    label: "View - Sydney",
  },
  { src: "/img/sydney-beach.jpg", alt: "Bondi Beach", label: "Relax - Sydney" },

  {
    src: "/img/marrakesh-souk.jpg",
    alt: "Souk in Marrakech",
    label: "Market - Morocco (Marrakech)",
  },
  {
    src: "/img/chefcha.jpg",
    alt: "Blue city",
    label: "Color - Morocco (Chefchaouen)",
  },
  {
    src: "/img/Moroccan-Food.jpg",
    alt: "Moroccan Food",
    label: "Food - Morocco (Casablanca)",
  },

  {
    src: "/img/chile-atacama.jpg",
    alt: "Atacama Desert",
    label: "Nature - Chile",
  },
  {
    src: "/img/chile-santiago.jpg",
    alt: "Cityscape of Santiago",
    label: "City - Chile (Santiago)",
  },
  {
    src: "/img/chile-patagonia.jpg",
    alt: "Patagonian mountains",
    label: "Hiking - Chile (Patagonia)",
  },

  { src: "/img/jordan-petra.jpg", alt: "Petra", label: "Wonder - Jordan" },
  {
    src: "/img/jordan-desert.jpg",
    alt: "Wadi Rum desert",
    label: "Nature - Jordan",
  },
  {
    src: "/img/jordan-amman.jpg",
    alt: "Streets of Amman",
    label: "City - Jordan (Amman)",
  },

  {
    src: "/img/california-coast.jpg",
    alt: "Highway 1 coast",
    label: "View - California (Big Sur)",
  },
  {
    src: "/img/california-hollywood.jpg",
    alt: "Hollywood sign",
    label: "Culture - California (LA)",
  },
  {
    src: "/img/california-sf.jpg",
    alt: "Golden Gate Bridge",
    label: "Landmark - California (SF)",
  },
];

export default function InspirationGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  useGSAP(() => {
    if (!containerRef.current) return;

    const title = containerRef.current.querySelector(".gallery-title");
    const items = containerRef.current.querySelectorAll(".media-item");

    gsap.set(title, { opacity: 0 });
    gsap.set(items, { opacity: 0 });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 40%",
      once: true,
      onEnter: () => {
        gsap.to(title, {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        });

        gsap.to(items, {
          opacity: 1,
          duration: 1.2,
          ease: "power1.out",
          stagger: {
            each: 0.1,
            from: "start",
          },
        });
      },
    });
  }, []);

  useEffect(() => {
    if (showAll && containerRef.current) {
      const allItems = containerRef.current.querySelectorAll(".media-item");
      const newItems = Array.from(allItems).slice(12);

      gsap.set(newItems, { opacity: 0 });

      gsap.to(newItems, {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        stagger: {
          each: 0.1,
          from: "start",
        },
      });
    }
  }, [showAll]);

  const visibleImages = showAll ? images : images.slice(0, 12);

  return (
    <section className="relative z-50 py-20 px-4 bg-white" ref={containerRef}>
      <h2 className="gallery-title text-4xl font-bold text-center mb-12 z-10 relative">
        Moments of the World
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center max-w-6xl mx-auto">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className="media-item w-64 h-40 relative rounded-xl overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-1 hover:z-10 group"
            style={{
              transform: "none",
              willChange: "opacity",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-500"
              fill
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white text-sm p-2 transition-all duration-500 group-hover:bg-black/60 group-hover:backdrop-blur-sm">
              {img.label}
            </div>
          </div>
        ))}
      </div>

      {images.length > 12 && (
        <div className="flex justify-center mt-10">
          <span
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-black cursor-pointer hover:opacity-70 transition-opacity duration-300 group"
          >
            {showAll ? "Show less" : "See more"}
            <ChevronDown
              className={`transition-transform duration-500 group-hover:opacity-80 ${
                showAll ? "rotate-180" : ""
              }`}
              size={18}
            />
          </span>
        </div>
      )}
    </section>
  );
}
