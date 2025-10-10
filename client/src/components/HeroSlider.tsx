import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const slides = [
  {
    title: "Admissions Open 2026",
    subtitle: "Join India's Leading Institute of Technology & Science",
    cta1: { text: "Apply Now", href: "/admissions/apply" },
    cta2: { text: "Visit Campus", href: "/contact" },
    bgGradient: "from-blue-600 via-blue-700 to-blue-800",
  },
  {
    title: "100% Placement Record",
    subtitle: "Top Companies Visit Our Campus Every Year",
    cta1: { text: "View Placements", href: "/placements/records" },
    cta2: { text: "Contact Us", href: "/contact" },
    bgGradient: "from-emerald-600 via-emerald-700 to-emerald-800",
  },
  {
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Labs, Library & Sports Complex",
    cta1: { text: "Explore Campus", href: "/about/vision" },
    cta2: { text: "Learn More", href: "/about/vision" },
    bgGradient: "from-purple-600 via-purple-700 to-purple-800",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}>
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-5xl mx-auto px-6 text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-white"
                  asChild
                  data-testid={`button-hero-${slide.cta1.text.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Link href={slide.cta1.href}>{slide.cta1.text}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-md"
                  asChild
                  data-testid={`button-hero-${slide.cta2.text.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Link href={slide.cta2.href}>{slide.cta2.text}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
        onClick={prev}
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
        onClick={next}
        data-testid="button-hero-next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
            data-testid={`button-hero-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
