"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Mountain, Sun, Snowflake, Plane } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const kits = [
  {
    title: "Trekking Essentials",
    icon: <Mountain size={28} className="text-emerald-600" />,
    items: [
      { name: "Hiking Boots", image: "/img/kit/hiking-boots.jpg" },
      { name: "Water Bottle", image: "/img/kit/bottle.jpg" },
      { name: "Rain Jacket", image: "/img/kit/jacket.jpg" },
      { name: "Map & Compass", image: "/img/kit/compass.jpg" },
    ],
  },
  {
    title: "Beach Vibes",
    icon: <Sun size={28} className="text-yellow-500" />,
    items: [
      { name: "Swimsuit", image: "/img/kit/swimsuits.jpg" },
      { name: "Sunscreen", image: "/img/kit/sunscreen.jpg" },
      { name: "Towel", image: "/img/kit/towel.jpg" },
      { name: "Flip Flops", image: "/img/kit/flip.jpg" },
    ],
  },
  {
    title: "Cold Adventures",
    icon: <Snowflake size={28} className="text-blue-400" />,
    items: [
      { name: "Gloves", image: "/img/kit/gloves.jpg" },
      { name: "Thermal Shirt", image: "/img/kit/thermal.jpg" },
      { name: "Snow Goggles", image: "/img/kit/goggles.jpg" },
      { name: "Wool Socks", image: "/img/kit/socks.jpg" },
    ],
  },
  {
    title: "Nomad Digital",
    icon: <Plane size={28} className="text-indigo-500" />,
    items: [
      { name: "Laptop", image: "/img/kit/laptop.jpg" },
      { name: "Noise-canceling", image: "/img/kit/headphones.jpg" },
      { name: "Charger", image: "/img/kit/charger.jpg" },
      { name: "Notebook", image: "/img/kit/notebook.jpg" },
    ],
  },
];

export default function WhatInMyBag() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const kitSections = sectionRef.current?.querySelectorAll(".kit");

    kitSections?.forEach((kit, i) => {
      const items = kit.querySelectorAll(".item");

      gsap.fromTo(
        items,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: kit,
            start: "top 60%",
          },
        }
      );

      gsap.fromTo(
        kit.querySelector(".kit-title"),
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: kit,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full z-50 py-24 px-6 bg-[#f8fafc] text-gray-800"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        What’s In My Bag?
      </h2>

      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {kits.map((kit, index) => (
          <div
            key={index}
            className="kit flex flex-col md:flex-row items-center gap-12"
          >
            <div className="kit-title md:w-1/3 text-center md:text-left">
              <div className="flex items-center gap-3 text-2xl font-semibold">
                {kit.icon}
                <span>{kit.title}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:w-2/3">
              {kit.items.map((item, i) => (
                <div
                  key={i}
                  className="item flex flex-col items-center text-sm text-gray-700"
                >
                  <div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-2">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
