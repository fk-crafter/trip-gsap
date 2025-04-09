"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (
      !sectionRef.current ||
      !leftRef.current ||
      !rightRef.current ||
      !scrollableRef.current
    )
      return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${scrollableRef.current!.scrollHeight}`,
      pin: leftRef.current,
      pinSpacing: false,
      scrub: false,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${scrollableRef.current!.scrollHeight}`,
      pin: rightRef.current,
      pinSpacing: false,
      scrub: false,
    });

    gsap.to(scrollableRef.current, {
      yPercent: -105,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollableRef.current!.scrollHeight}`,
        scrub: true,
      },
    });

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    itemRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full z-50 py-12 bg-blue-50/50 pt-52 px-4 text-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-[140vh]">
        <div ref={leftRef} className="relative">
          <div className="sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why travel is important
            </h2>
            <p className="text-gray-400">
              Traveling is more than just visiting places — it&apos;s a powerful
              way to grow as a person.
            </p>
          </div>
        </div>

        <div
          ref={rightRef}
          className="relative h-[290vh] overflow-hidden rounded-lg p-6"
        >
          <div ref={scrollableRef} className="space-y-48">
            {[
              {
                title: "1. Broadens Perspective",
                text: "Seeing how others live opens your mind and helps you understand different cultures and lifestyles.",
              },
              {
                title: "2. Builds Confidence",
                text: "Navigating new environments boosts independence and problem-solving skills.",
              },
              {
                title: "3. Creates Memories",
                text: "The experiences you gain while traveling often become the most cherished memories of your life.",
              },
              {
                title: "4. Sparks Creativity",
                text: "New places and experiences can fuel your imagination and inspire fresh ideas in unexpected ways.",
              },
              {
                title: "5. Connects You With Locals",
                text: "Sharing everyday moments with people from different backgrounds helps you feel the heartbeat of a place beyond tourism.",
              },
              {
                title: "6. Breaks Routine",
                text: "Stepping out of your daily patterns refreshes your mind and resets your perspective on life.",
              },
              {
                title: "7. Connects You With History",
                text: "Every place has a story — walking through ancient streets or visiting historical landmarks helps you feel the weight of time and culture.",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
