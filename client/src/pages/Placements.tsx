import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building2, Users, Award } from "lucide-react";

// todo: remove mock functionality
const stats = [
  { label: "Placement Rate", value: "100%", icon: TrendingUp, color: "text-emerald-600 dark:text-emerald-400" },
  { label: "Companies Visited", value: "150+", icon: Building2, color: "text-blue-600 dark:text-blue-400" },
  { label: "Students Placed", value: "1200+", icon: Users, color: "text-purple-600 dark:text-purple-400" },
  { label: "Highest Package", value: "₹45 LPA", icon: Award, color: "text-amber-600 dark:text-amber-400" },
];

const topRecruiters = [
  "Microsoft", "Google", "Amazon", "Infosys", "TCS", "Wipro", 
  "Cognizant", "Accenture", "IBM", "Oracle", "Adobe", "SAP"
];

const testimonials = [
  {
    name: "Priya Sharma",
    company: "Microsoft",
    package: "₹38 LPA",
    text: "JITS provided excellent training and placement support. The faculty guidance and industry exposure helped me secure my dream job.",
  },
  {
    name: "Arjun Patel",
    company: "Google",
    package: "₹42 LPA",
    text: "The placement cell worked tirelessly to bring top companies. The technical training sessions were invaluable for interview preparation.",
  },
  {
    name: "Ananya Reddy",
    company: "Amazon",
    package: "₹35 LPA",
    text: "From mock interviews to resume building, JITS placement team supported us at every step. Grateful for the opportunity!",
  },
];

export default function Placements() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Placements</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Proud legacy of 100% placement record with top companies recruiting our talented students
            </p>
          </div>
        </div>

        <div className="px-6 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className={`${stat.color} flex justify-center mb-3`}>
                    <stat.icon className="h-10 w-10" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Top Recruiters</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topRecruiters.map((company, index) => (
                <Card key={index} className="p-6 text-center hover-elevate transition-all">
                  <p className="font-semibold">{company}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Student Testimonials</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Hear from our successful alumni about their placement journey
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <Badge>{testimonial.package}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
