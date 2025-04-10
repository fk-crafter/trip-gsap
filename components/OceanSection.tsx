"use client";

import DestinationSection from "@/components/DestinationSection";

const oceanDestinations = [
  {
    title: "Maldives",
    image: "/img/maldives.jpg",
    video: "/video/maldives.mp4",
    description: "Crystal-clear waters and overwater bungalows in paradise.",
  },
  {
    title: "Bora Bora",
    image: "/img/bora-bora.jpg",
    video: "/video/bora-bora.mp4",
    description: "Turquoise lagoons and tropical serenity in French Polynesia.",
  },
  {
    title: "Tulum",
    image: "/img/tulum.jpg",
    video: "/video/tulum.mp4",
    description: "Where ancient ruins meet dreamy white-sand beaches.",
  },
  {
    title: "Bali",
    image: "/img/bali.jpg",
    video: "/video/bali.mp4",
    description: "Lush island life and golden sunsets over the ocean.",
  },
];

export default function OceanSection() {
  return (
    <DestinationSection
      title="Ocean Vibes"
      description="Let the tide reset your soul and the sun warm your thoughts."
      themeColor="text-sky-700"
      textColor="text-sky-600"
      borderColor="border-gray-300"
      gradient="from-[#d4f1f9] to-[#fff5e1]"
      destinations={oceanDestinations}
      enableHoverPreview={true}
    />
  );
}
