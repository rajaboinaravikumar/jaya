import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { QuickLinks } from "@/components/QuickLinks";
import { AboutSection } from "@/components/AboutSection";
import { AnnouncementsCarousel } from "@/components/AnnouncementsCarousel";
import { EventsPreview } from "@/components/EventsPreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <QuickLinks />
        <AboutSection />
        <AnnouncementsCarousel />
        <EventsPreview />
      </main>
      <Footer />
    </div>
  );
}
