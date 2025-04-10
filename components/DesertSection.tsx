"use client";

import DestinationSection from "@/components/DestinationSection";

const desertDestinations = [
  {
    title: "Sahara",
    image: "/img/sahara.jpg",
    video: "/video/sahara.mp4",
    description: "Endless dunes and the golden silence of ancient sands.",
  },
  {
    title: "Atacama",
    image: "/img/atacama.jpg",
    video: "/video/atacama.mp4",
    description: "Earth's driest desert, rich in stars and surreal colors.",
  },
  {
    title: "Wadi Rum",
    image: "/img/wadi-rum.jpg",
    video: "/video/wadi-rum.mp4",
    description: "Canyons carved by time, under red Martian-like skies.",
  },
  {
    title: "Death Valley",
    image: "/img/death-valley.jpg",
    video: "/video/death-valley.mp4",
    description: "Extreme heat and iconic desertscapes in California.",
  },
];

export default function DesertSection() {
  return (
    <DestinationSection
      title="Desert Dreams"
      description="Embrace the vast silence and golden horizons."
      themeColor="text-[#4b1e08]"
      textColor="text-[#4b1e08]/70"
      borderColor="border-white/10"
      gradient="from-[#f7d199] via-[#f3b36b] to-[#d87c3a]"
      destinations={desertDestinations}
    />
  );
}
