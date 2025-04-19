"use client";

import DestinationSection from "@/components/DestinationSection";

const cityDestinations = [
  {
    title: "New York",
    image: "/img/new-york.jpg",
    video: "/video/new-york.mp4",
    description: "Skyscrapers, yellow cabs, and the rhythm of big city life.",
  },
  {
    title: "Tokyo",
    image: "/img/tokyo.jpg",
    video: "/video/tokyo.mp4",
    description: "Neon nights and high-speed culture in the heart of Japan.",
  },
  {
    title: "Paris",
    image: "/img/paris.jpg",
    video: "/video/paris.mp4",
    description: "Romantic streets and timeless elegance by the Seine.",
  },
  {
    title: "Sydney",
    image: "/img/sydney.jpg",
    video: "/video/sydney.mp4",
    description: "Harbor lights, iconic sails, and vibrant coastal life.",
  },
];

export default function CitySection() {
  return (
    <DestinationSection
      title="Urban Energy"
      description="Dive into the chaos, the lights, the pulse of cities that never sleep."
      themeColor="text-fuchsia-400"
      textColor="text-purple-200"
      borderColor="border-white/10"
      gradient="from-[#0f0c29] via-[#302b63] to-[#24243e]"
      overlayColor="#0f0c29"
      destinations={cityDestinations}
      enableHoverPreview={true}
    />
  );
}
