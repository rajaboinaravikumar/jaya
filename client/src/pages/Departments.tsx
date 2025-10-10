import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Building2, FlaskConical, Zap, Atom, Cog } from "lucide-react";

// todo: remove mock functionality
const departments = [
  {
    name: "Computer Science & Engineering",
    icon: Cpu,
    students: "850+",
    faculty: "45",
    programs: ["B.Tech", "M.Tech", "PhD"],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    name: "Electronics & Communication",
    icon: Zap,
    students: "720+",
    faculty: "38",
    programs: ["B.Tech", "M.Tech"],
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    name: "Mechanical Engineering",
    icon: Cog,
    students: "680+",
    faculty: "42",
    programs: ["B.Tech", "M.Tech", "PhD"],
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    name: "Civil Engineering",
    icon: Building2,
    students: "520+",
    faculty: "32",
    programs: ["B.Tech", "M.Tech"],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    name: "Chemical Engineering",
    icon: FlaskConical,
    students: "380+",
    faculty: "28",
    programs: ["B.Tech", "M.Tech"],
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    name: "Applied Sciences",
    icon: Atom,
    students: "450+",
    faculty: "35",
    programs: ["BSc", "MSc", "PhD"],
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
  },
];

export default function Departments() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              JITS offers comprehensive programs across multiple engineering and science disciplines with 
              state-of-the-art facilities and experienced faculty.
            </p>
          </div>
        </div>

        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-department-${index}`}>
                  <div className={`${dept.bgColor} ${dept.color} p-4 rounded-lg inline-flex mb-4`}>
                    <dept.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span className="font-medium text-foreground">{dept.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Faculty:</span>
                      <span className="font-medium text-foreground">{dept.faculty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Programs:</span>
                      <span className="font-medium text-foreground">{dept.programs.join(", ")}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" data-testid={`button-view-department-${index}`}>
                    View Details
                  </Button>
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
