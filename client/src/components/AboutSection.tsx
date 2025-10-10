import { Card } from "@/components/ui/card";
import { Users, Building2, Trophy, TrendingUp } from "lucide-react";

const stats = [
  { label: "Students", value: "5000+", icon: Users, color: "text-blue-600 dark:text-blue-400" },
  { label: "Departments", value: "12", icon: Building2, color: "text-emerald-600 dark:text-emerald-400" },
  { label: "Placements", value: "100%", icon: Trophy, color: "text-amber-600 dark:text-amber-400" },
  { label: "Companies", value: "150+", icon: TrendingUp, color: "text-purple-600 dark:text-purple-400" },
];

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About JITS</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p>
                  To be a globally recognized center of excellence in technical education, research, and innovation, 
                  nurturing future leaders who contribute to society and industry.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <p>
                  To provide quality education with state-of-the-art infrastructure, experienced faculty, 
                  and industry partnerships that ensure holistic development and career success for our students.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Achievements</h3>
                <p>
                  NAAC A+ accredited institution with NBA accreditation for all programs. Ranked among 
                  the top engineering colleges with excellent placement records and research output.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
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
    </section>
  );
}
