import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { HeroSection } from "@/components/QuickLinks";
import { WhyJITSSection } from "@/components/AboutSection";
import { AnnouncementsCarousel } from "@/components/AnnouncementsCarousel";
import { EventsSection } from "@/components/EventsPreview";
import { Footer } from "@/components/Footer";
import { GalleryPage } from "@/components/Gallary";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <HeroSection />
        <WhyJITSSection />
        <AnnouncementsCarousel />
        <EventsSection />
        <GalleryPage />
    
      </main>
      <Footer />
    </div>
  );
}
