"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sponsors = [
  { name: "Airbnb", logo: "/img/sponsor/airbnb.png" },
  { name: "Emirates", logo: "/img/sponsor/airbnb.png" },
  { name: "Expedia", logo: "/img/sponsor/airbnb.png" },
  { name: "National Geographic", logo: "/img/sponsor/airbnb.png" },
  { name: "Lonely Planet", logo: "/img/sponsor/airbnb.png" },
  { name: "TripAdvisor", logo: "/img/sponsor/airbnb.png" },
  { name: "Booking", logo: "/img/sponsor/airbnb.png" },
  { name: "Qatar Airways", logo: "/img/sponsor/airbnb.png" },
  { name: "Skyscanner", logo: "/img/sponsor/airbnb.png" },
  { name: "Google Travel", logo: "/img/sponsor/airbnb.png" },
  { name: "Delta", logo: "/img/sponsor/airbnb.png" },
  { name: "Kayak", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
  { name: "Hilton", logo: "/img/sponsor/airbnb.png" },
];

export default function SponsorsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-20 relative z-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Trusted Travel Partners
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-6">
        {sponsors.slice(0, isOpen ? sponsors.length : 8).map((sponsor, i) => (
          <motion.div
            key={i}
            className="w-28 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={100}
              height={60}
              className="object-contain w-full h-auto"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 text-gray-700 hover:text-black transition-all"
        >
          {isOpen ? "Show Less" : "Show All"}
          <ChevronDown
            className={`transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </section>
  );
}
