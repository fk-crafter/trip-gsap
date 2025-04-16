"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReflectionsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const underline1Ref = useRef<HTMLDivElement | null>(null);
  const underline2Ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        once: true,
      },
    });

    tl.fromTo(
      line1Ref.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );

    tl.fromTo(
      line2Ref.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power4.out" },
      "-=0.6"
    );

    tl.fromTo(
      [underline1Ref.current, underline2Ref.current],
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "left center",
        stagger: 0.15,
      },
      "-=0.3"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] z-50 overflow-hidden flex flex-col items-center justify-center bg-sky text-black"
    >
      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center space-y-8">
        <div>
          <div
            ref={line1Ref}
            className="inline-block text-3xl md:text-5xl font-light"
          >
            The world is a book and those who do
          </div>
          <div
            ref={underline1Ref}
            className="h-[2px] bg-gray-500 mt-2 scale-x-0 mx-auto"
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <div
            ref={line2Ref}
            className="inline-block text-3xl md:text-5xl font-light"
          >
            not travel read only one page.
          </div>
          <div
            ref={underline2Ref}
            className="h-[2px] bg-gray-500 mt-2 scale-x-0 mx-auto"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
