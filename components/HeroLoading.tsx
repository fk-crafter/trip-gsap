"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

type Props = {
  onComplete?: () => void;
};

export default function HeroLoading({ onComplete }: Props) {
  const curtainRef = useRef(null);
  const stackRef = useRef<HTMLDivElement[]>([]);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const loadingTextRef = useRef<HTMLParagraphElement | null>(null);

  const rotations = useRef<number[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    const countObj = { value: 0 };

    stackRef.current.forEach((el, i) => {
      const angle = gsap.utils.random(-6, 6);
      rotations.current[i] = angle;

      gsap.set(el, {
        y: 150,
        opacity: 0,
        rotate: angle - 15,
        zIndex: i,
      });

      tl.to(
        el,
        {
          y: 0,
          opacity: 1,
          rotate: angle,
          duration: 1,
          ease: "back.out(1.7)",
        },
        i * 0.6
      );
    });

    gsap.to([counterRef.current, loadingTextRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.to(loadingTextRef.current, {
      opacity: 0.5,
      scale: 1.03,
      yoyo: true,
      repeat: -1,
      duration: 1.8,
      ease: "sine.inOut",
    });

    gsap.to(countObj, {
      value: 100,
      duration: 3.5,
      ease: "power1.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(countObj.value)}%`;
        }
      },
      delay: 0.6,
    });

    tl.to(
      curtainRef.current,
      {
        xPercent: 100,
        duration: 3,
        ease: "power4.inOut",
        delay: 0.4,
        onComplete: () => {
          if (onComplete) onComplete();
        },
      },
      "+=1"
    );
  }, [onComplete]);

  return (
    <div
      ref={curtainRef}
      className="absolute inset-0 bg-black/80 z-50 flex flex-col justify-center items-center backdrop-blur-xs"
    >
      <div className="relative w-[320px] h-[210px] mb-4">
        {["/mountain.jpg", "/city-night.jpg", "/beach.jpg", "/desert.jpg"].map(
          (src, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) {
                  stackRef.current[i] = el;
                }
              }}
              className="absolute inset-0"
            >
              <Image
                src={`/img/loading${src}`}
                alt={`Image ${i}`}
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          )
        )}
      </div>

      <div className="relative w-[320px] flex items-center justify-center mb-2">
        <span
          ref={counterRef}
          className="absolute left-[-60px] text-white text-xl font-bold opacity-0 translate-y-10"
        >
          0%
        </span>
      </div>

      <p
        ref={loadingTextRef}
        className="text-white text-lg tracking-wider font-bold mt-2 uppercase opacity-0 translate-y-10"
      >
        Loading
      </p>
    </div>
  );
}
