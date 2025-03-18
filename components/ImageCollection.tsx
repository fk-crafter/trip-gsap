"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Image1 from "@/public/image1.avif";
import Image2 from "@/public/image2.avif";
import Image3 from "@/public/image3.avif";

gsap.registerPlugin(ScrollTrigger);

export default function ImageCollection() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRefs = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) {
      imageRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const elements = imageRefs.current.filter(
      (el) => el !== null
    ) as HTMLDivElement[];

    elements.forEach((imageRef) => {
      gsap.fromTo(
        imageRef,
        { x: -100, y: 100, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.2,
          overwrite: "auto",
          scrollTrigger: {
            trigger: imageRef,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      elements.forEach((el) => ScrollTrigger.getById(el?.id)?.kill());
    };
  }, []);

  return (
    <div className="mt-48 flex flex-col items-center gap-16">
      {[Image1, Image2, Image3].map((imgSrc, index) => (
        <div
          key={index}
          ref={(el) => setRefs(el, index)}
          className="relative group w-[400px] h-[250px] overflow-hidden"
        >
          <Image
            src={imgSrc}
            alt={`Image ${index + 1}`}
            width={400}
            height={250}
            className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
