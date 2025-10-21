import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "public/jayalogo/DDE04.jpg",
  },
  {
    image: "public/jayalogo/de_02.jpg"
  },
  {
    image: "public/jayalogo/JITS_goutami.jpg",
  },
  {
    image: "public/jayalogo/JITS_jose_mary.jpg",
  },
  {
    image: "public/jayalogo/mamaidala_javahar.webp",
  },
  {
    image: "public/jayalogo/nss-unit.webp",
  },
  {
    image: "public/jayalogo/unolo_banner_img.jpg",
  },
  {
    image: "public/jayalogo/02 banner.jpg",
  },
  {
    image: "public/jayalogo/03.jpg",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Faster rotation for image-only slides
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={`JITS Campus ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.target.style.display = 'none';
              }}
            />
            {/* Fallback Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-20" />
          </div>

          {/* Dark Overlay for Better Contrast */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/50 hover:bg-black/70 text-white backdrop-blur-md border border-white/30 rounded-full hover:scale-110 transition-all duration-300"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/50 hover:bg-black/70 text-white backdrop-blur-md border border-white/30 rounded-full hover:scale-110 transition-all duration-300"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators - Minimal */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex gap-2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-white scale-125" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter - Minimal */}
      <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md rounded-full px-3 py-2 border border-white/20">
        <span className="text-white text-sm font-medium">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}