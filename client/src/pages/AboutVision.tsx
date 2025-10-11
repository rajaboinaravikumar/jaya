import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Eye, Target, Heart, Users } from "lucide-react";

export default function AboutVision() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">Vision & Mission</h1>
            <p className="text-xl opacity-90" data-testid="text-page-subtitle">Shaping the future of education and innovation</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold" data-testid="text-vision-title">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-vision-content">
                To be a globally recognized institution of excellence in technical education, research, and innovation, 
                producing world-class professionals who contribute significantly to society and drive technological advancement.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold" data-testid="text-mission-title">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-mission-content">
                To provide quality technical education through innovative teaching methodologies, foster research and 
                development, promote industry-academia collaboration, and nurture ethical values among students to 
                create responsible global citizens.
              </p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-core-values-title">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Excellence",
                  description: "Striving for the highest standards in education, research, and service"
                },
                {
                  icon: Users,
                  title: "Integrity",
                  description: "Upholding honesty, transparency, and ethical conduct in all endeavors"
                },
                {
                  icon: Target,
                  title: "Innovation",
                  description: "Encouraging creativity and pioneering solutions to complex challenges"
                },
                {
                  icon: Heart,
                  title: "Inclusivity",
                  description: "Fostering a diverse and welcoming environment for all stakeholders"
                }
              ].map((value, index) => (
                <Card key={index} className="p-6 text-center" data-testid={`card-value-${index}`}>
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`text-value-title-${index}`}>{value.title}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-value-desc-${index}`}>{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-primary/5">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-objectives-title">Strategic Objectives</h2>
            <ul className="space-y-4">
              {[
                "Enhance academic programs with industry-relevant curriculum and cutting-edge technologies",
                "Strengthen research capabilities through state-of-the-art infrastructure and collaborations",
                "Foster entrepreneurship and innovation among students and faculty",
                "Expand international partnerships and student exchange programs",
                "Promote sustainable development and social responsibility initiatives",
                "Continuously upgrade facilities and adopt best practices in teaching and administration"
              ].map((objective, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`text-objective-${index}`}>
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm">{index + 1}</span>
                  </div>
                  <p className="text-lg">{objective}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
