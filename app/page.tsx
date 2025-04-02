import GallerySection from "@/components/GallerySection";
import GalleryTransition from "@/components/GalleryTransition";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="h-[300vh] flex flex-col text-gray-200">
      <HeroSection />
      <GalleryTransition />
      <GallerySection />
    </div>
  );
}
