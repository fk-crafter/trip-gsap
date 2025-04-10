"use client";

import DestinationSection from "@/components/DestinationSection";

const natureDestinations = [
  {
    title: "Kyoto",
    image: "/img/kyoto.jpg",
    video: "/video/kyoto.mp4",
    description: "A spiritual journey through peaceful Zen temples.",
  },
  {
    title: "Swiss Alps",
    image: "/img/swiss-alps.jpg",
    video: "/video/swiss-alps.mp4",
    description: "Dive into alpine heights, where snow meets silence.",
  },
  {
    title: "Black Forest",
    image: "/img/black-forest.jpg",
    video: "/video/black-forest.mp4",
    description: "Mysteries and legends deep in the heart of the forest.",
  },
  {
    title: "Banff",
    image: "/img/banff.jpg",
    video: "/video/banff.mp4",
    description: "Turquoise lakes and majestic peaks in the Canadian Rockies.",
  },
];

export default function NatureSection() {
  return (
    <DestinationSection
      title="Nature Escapes"
      description="Reconnect with nature through landscapes that inspire peace and awe."
      themeColor="text-emerald-700"
      textColor="text-gray-600"
      borderColor="border-gray-300"
      gradient="from-[#e3f2f1] to-[#fef9f3]"
      destinations={natureDestinations}
    />
  );
}
