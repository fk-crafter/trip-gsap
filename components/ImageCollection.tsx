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
          { y: 300, opacity: 0, x: -600 },
          {
            y: 0,
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "power4.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: imageRef,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
              markers: true,
              scrub: false,
            },
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((imageRef) => {
      if (imageRef) {
        const image = imageRef.querySelector("img");

        imageRef.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(imageRef.querySelector(".ghost"), {
            opacity: 1,
            scale: 1.15,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        imageRef.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.in",
          });

          gsap.to(imageRef.querySelector(".ghost"), {
            opacity: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.in",
          });
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
          className="relative group w-[400px] h-[250px]"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-0 ghost">
            <Image
              src={imgSrc}
              alt={`Image ${index + 1}`}
              width={400}
              height={250}
              className="w-full h-full object-cover rounded-lg shadow-xl blur-lg opacity-50"
            />
          </div>

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
