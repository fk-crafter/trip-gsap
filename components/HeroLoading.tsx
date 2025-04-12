"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

type Props = {
  onComplete?: () => void;
};

export default function HeroLoading({ onComplete }: Props) {
  const logoRef = useRef(null);
  const loadingRef = useRef(null);
  const counterRef = useRef(null);
  const curtainRef = useRef(null);

  useGSAP(() => {
    const countObj = { value: 0 };

    // Apparition du logo + compteur
    gsap.to([logoRef.current, counterRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    // Apparition du texte "Loading"
    gsap.to(loadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
    });

    // Nouveau loop sur le logo : rotation lente + léger scale
    gsap.to(logoRef.current, {
      rotate: 2,
      scale: 1.02,
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "sine.inOut",
    });

    // Nouveau loop sur le texte "Loading" : pulsation douce
    gsap.to(loadingRef.current, {
      opacity: 0.5,
      scale: 1.03,
      yoyo: true,
      repeat: -1,
      duration: 1.8,
      ease: "sine.inOut",
    });

    // Compteur de 0 à 100%
    gsap.to(countObj, {
      value: 100,
      duration: 3.5,
      ease: "power1.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          (counterRef.current as HTMLElement).textContent = `${Math.round(
            countObj.value
          )}%`;
        }
      },
      delay: 0.6,
    });

    // Fermeture du loader
    gsap.to(curtainRef.current, {
      xPercent: 100,
      duration: 3,
      ease: "power4.inOut",
      delay: 4.4,
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });
  }, [onComplete]);

  return (
    <div
      ref={curtainRef}
      className="absolute inset-0 bg-black/80 z-50 flex flex-col justify-center items-center backdrop-blur-xs"
    >
      <div className="relative w-[320px] flex items-center justify-center mb-4">
        <span
          ref={counterRef}
          className="absolute left-[-60px] text-white text-xl font-bold opacity-0 translate-y-10"
        >
          0%
        </span>
        <Image
          ref={logoRef}
          src="/logo.png"
          alt="Logo"
          className="w-96 h-72 hero-logo opacity-0 translate-y-10"
          width={300}
          height={300}
        />
      </div>

      <p
        ref={loadingRef}
        className="text-white text-lg tracking-wider font-bold mt-2 uppercase opacity-0 translate-y-10"
      >
        Loading
      </p>
    </div>
  );
}
