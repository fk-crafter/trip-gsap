"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import Image1 from "@/public/image1.avif";
import Image2 from "@/public/image2.avif";
import Image3 from "@/public/image3.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const setRef = (el: HTMLImageElement | null, index: number) => {
    if (el) imageRefs.current[index] = el;
  };

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
        <div key={index} className="relative group w-fit z-10">
          <Image
            ref={(el) => setRef(el, index)}
            src={img}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="z-10"
          />
          <div className="absolute left-[-220px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 bg-white p-4 rounded shadow-lg pointer-events-none">
            <p>text {index + 1}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
