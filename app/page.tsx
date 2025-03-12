import HeroSection from "@/components/HeroSection";
import ImageCollection from "@/components/ImageCollection";

export default function Home() {
  return (
    <div className="h-[300vh] flex flex-col bg-gradient-to-b from-[#1c1c1e] to-[#0a0a0b] text-gray-200">
      <HeroSection />
      <ImageCollection />
    </div>
  );
}
