"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import Image1 from "@/public/img/breathe.jpg";
import Image2 from "@/public/img/move.jpg";
import Image3 from "@/public/img/connect.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const setRef = (el: HTMLImageElement | null, index: number) => {
    if (el) imageRefs.current[index] = el;
  };

  const hoverTexts = ["Breathe", "Move", "Connect"];

  useGSAP(() => {
    imageRefs.current.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 100, x: -100, rotate: 10 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          rotate: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: img,
            start: "top 50%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="min-h-[250vh] pt-72 relative z-50 flex flex-col items-center justify-center gap-20 text-black overflow-hidden">
      {[Image1, Image2, Image3].map((img, index) => (
        <div
          key={index}
          className={`relative group w-fit z-10 ${
            index % 2 === 0 ? "translate-x-32" : "-translate-x-32"
          }`}
        >
          {" "}
          <Image
            ref={(el) => setRef(el, index)}
            src={img}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="z-10 rounded-3xl shadow-xl object-cover"
          />
          <div className="absolute left-[-220px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white bg-gradient-to-br from-slate-600 to-slate-800 backdrop-blur-md p-4 rounded-2xl shadow-2xl pointer-events-none scale-95 group-hover:scale-100">
            <p className="text-lg font-medium tracking-wide">
              {hoverTexts[index]}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
