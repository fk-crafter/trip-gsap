"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Image1 from "@/public/image1.avif";
import Image2 from "@/public/image2.avif";
import Image3 from "@/public/image3.avif";

gsap.registerPlugin(ScrollTrigger);

export default function ImageCollection() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((imageRef) => {
      if (imageRef) {
        gsap.fromTo(
          imageRef,
          { x: -100, y: 100, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
              markers: true,
            },
          }
        );

        gsap.to(imageRef, {
          y: -50,
          scrollTrigger: {
            trigger: imageRef,
            start: "top 100%",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });
  }, []);

  return (
    <div className="mt-48 flex flex-col items-center gap-16">
      {[Image1, Image2, Image3].map((imgSrc, index) => (
        <div
          key={index}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
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
