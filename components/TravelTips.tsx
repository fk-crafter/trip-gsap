"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const tips = [
  {
    title: "Carry a pen",
    detail: "Useful for customs forms and spontaneous notes.",
  },
  {
    title: "Offline maps",
    detail: "No signal? No problem. Prep ahead of time.",
  },
  {
    title: "Backup documents",
    detail: "Cloud/email copies of passport & tickets.",
  },
  {
    title: "Universal adapter",
    detail: "Because sockets never match.",
  },
  {
    title: "Ask locals",
    detail: "The best places aren’t on Google.",
  },
  {
    title: "Snap receipts",
    detail: "Keep a record. Just in case.",
  },
];

export default function TravelTips() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useGSAP(() => {
    const items = containerRef.current?.querySelectorAll(".check-item");

    items?.forEach((item, i) => {
      const line = item.querySelector(".mask-line") as HTMLElement;
      const content = item.querySelector(".content") as HTMLElement;
      const check = item.querySelector(".check-icon") as HTMLElement;

      if (!line || !content || !check) return;

      gsap.set([line, content, check], { opacity: 0, x: 60 });

      ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        onEnter: () => {
          gsap.to(line, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to([content, check], {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1,
            onStart: () => setCurrentStep(i + 1),
          });
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full z-50 min-h-screen bg-[#f9fafb] text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 px-6 py-24 relative">
        <div className="md:col-span-2 sticky top-28 self-start">
          <p className="text-sm text-indigo-500 font-medium tracking-wider">
            STEP {currentStep}/{tips.length}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Preflight Checklist
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-sm">
            Simple reminders before your journey begins.
          </p>
        </div>

        <div className="md:col-span-3 mt-10 flex flex-col gap-20">
          {tips.map((tip, index) => (
            <div key={index} className="check-item relative">
              <div className="mask-line absolute left-0 top-2 w-1 h-10 bg-indigo-400 rounded opacity-0" />
              <div className="content pl-6 pr-10">
                <h3 className="text-xl font-semibold">{tip.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{tip.detail}</p>
              </div>
              <div className="check-icon absolute right-0 top-1 text-green-500">
                <CheckCircle size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
