"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  { name: "Airbnb", logo: "/img/sponsor/airbnb.png" },
  { name: "Emirates", logo: "/img/sponsor/emirates.png" },
  { name: "Expedia", logo: "/img/sponsor/expedia.png" },
  { name: "National Geographic", logo: "/img/sponsor/national-g.png" },
  { name: "Lonely Planet", logo: "/img/sponsor/lonely-p.png" },
  { name: "TripAdvisor", logo: "/img/sponsor/tripadvisor.png" },
  { name: "Booking", logo: "/img/sponsor/booking.png" },
  { name: "Qatar Airways", logo: "/img/sponsor/qatar-air.png" },
  { name: "Skyscanner", logo: "/img/sponsor/skyscanner.png" },
  { name: "Google Travel", logo: "/img/sponsor/google-travel.png" },
  { name: "Delta", logo: "/img/sponsor/delta.png" },
  { name: "Kayak", logo: "/img/sponsor/kayak.png" },
  { name: "Hilton", logo: "/img/sponsor/hilton.png" },
  { name: "Marriott", logo: "/img/sponsor/marriott.png" },
  { name: "Trivago", logo: "/img/sponsor/trivago.png" },
  { name: "Etihad Airways", logo: "/img/sponsor/etihad.png" },
  { name: "Turkish Airlines", logo: "/img/sponsor/turkish-air.png" },
  { name: "KLM", logo: "/img/sponsor/klm.png" },
  { name: "Hertz", logo: "/img/sponsor/hertz.png" },
  { name: "Avis", logo: "/img/sponsor/avis.png" },
  { name: "Europcar", logo: "/img/sponsor/europcar.png" },
  { name: "Hostelworld", logo: "/img/sponsor/hostelworld.png" },
  { name: "TUI", logo: "/img/sponsor/tui.png" },
  { name: "Air France", logo: "/img/sponsor/air-france.png" },
  { name: "JetBlue", logo: "/img/sponsor/jetblue.png" },
  { name: "EasyJet", logo: "/img/sponsor/easyjet.png" },
];

export default function SponsorsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    logoRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          rotateX: -90,
          opacity: 0,
          transformOrigin: "center",
        },
        {
          rotateX: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white py-20 relative z-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Trusted Travel Partners
        </h2>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={{
          maxHeight: isOpen ? "1000px" : "250px",
        }}
      >
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-6 perspective-1000">
          {sponsors.slice(0, isOpen ? sponsors.length : 8).map((sponsor, i) => (
            <div
              key={i}
              ref={(el) => {
                logoRefs.current[i] = el;
              }}
              className="w-28 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center [transform-style:preserve-3d]"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={100}
                height={60}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 text-gray-700 hover:text-black transition-all"
        >
          {isOpen ? "Show Less" : "Show All"}
          <ChevronDown
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </section>
  );
}
