"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Image1 from "@/public/image1.avif";
import Image2 from "@/public/image2.avif";
import Image3 from "@/public/image3.jpg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageCollection() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const setRef = (el: HTMLImageElement | null, index: number) => {
    if (el) imageRefs.current[index] = el;
  };

  useGSAP(() => {
    imageRefs.current.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 100, x: -100 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: img,
            start: "top 50%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="pt-72 flex flex-col items-center justify-center min-h-screen gap-4">
      <Image
        ref={(el) => setRef(el, 0)}
        src={Image1}
        alt="Image 1"
        width={500}
        height={500}
      />
      <Image
        ref={(el) => setRef(el, 1)}
        src={Image2}
        alt="Image 2"
        width={500}
        height={500}
      />
      <Image
        ref={(el) => setRef(el, 2)}
        src={Image3}
        alt="Image 3"
        width={500}
        height={500}
      />
    </div>
  );
}
