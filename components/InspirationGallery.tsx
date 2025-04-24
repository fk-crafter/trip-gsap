"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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

  // Animate first 6 on scroll
  useGSAP(() => {
    if (!containerRef.current) return;

    const initialItems = Array.from(
      containerRef.current.querySelectorAll(".media-item")
    ).slice(0, 6);

    gsap.set(initialItems, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 45,
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    ScrollTrigger.batch(initialItems, {
      start: "top 85%",
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        });
      },
    });
  }, []);

  // Animate new items on toggle
  useEffect(() => {
    if (!showAll || !containerRef.current) return;

    const allItems = containerRef.current.querySelectorAll(".media-item");
    const newItems = Array.from(allItems).slice(6);

    gsap.set(newItems, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 45,
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(newItems, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
    });
  }, [showAll]);

  const visibleImages = showAll ? images : images.slice(0, 6);

  return (
    <section
      ref={containerRef}
      className="relative z-50 py-24 px-4 bg-[#f8f4f1] overflow-hidden"
    >
      <h2 className="text-5xl font-semibold text-center mb-20 text-gray-800">
        Moments of the World
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[200px] [grid-auto-flow:dense]">
        {visibleImages.map((img, index) => {
          const isTall = index % 5 === 0 || index % 7 === 0;
          const isWide = index % 4 === 0;
          const colSpan = isWide ? "col-span-2" : "";
          const rowSpan = isTall ? "row-span-2" : "";

          return (
            <div
              key={index}
              className={`media-item group relative overflow-hidden rounded-xl shadow-md bg-white ${colSpan} ${rowSpan}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                width={600}
                height={400}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-xs p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-14">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-black transition"
        >
          <ChevronDown
            className={`transition-transform duration-500 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </section>
  );
}
