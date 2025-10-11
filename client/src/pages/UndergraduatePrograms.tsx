import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Award, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";

export default function UndergraduatePrograms() {
  const [, setLocation] = useLocation();

  const programs = [
    {
      name: "B.Tech in Computer Science & Engineering",
      duration: "4 Years",
      seats: 120,
      eligibility: "10+2 with Physics, Chemistry, Mathematics (Min. 60%)",
      highlights: ["AI & ML Specialization", "Industry Internships", "Research Projects"],
      accreditation: "NBA Accredited"
    },
    {
      name: "B.Tech in Electronics & Communication Engineering",
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with Physics, Chemistry, Mathematics (Min. 60%)",
      highlights: ["VLSI Design", "Embedded Systems", "IoT Applications"],
      accreditation: "NBA Accredited"
    },
    {
      name: "B.Tech in Mechanical Engineering",
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with Physics, Chemistry, Mathematics (Min. 60%)",
      highlights: ["CAD/CAM", "Robotics", "Thermal Systems"],
      accreditation: "NBA Accredited"
    },
    {
      name: "B.Tech in Civil Engineering",
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with Physics, Chemistry, Mathematics (Min. 60%)",
      highlights: ["Smart Construction", "Sustainable Design", "Infrastructure Planning"],
      accreditation: "NBA Accredited"
    },
    {
      name: "Bachelor of Science (Computer Science)",
      duration: "3 Years",
      seats: 40,
      eligibility: "10+2 with Mathematics/Computer Science (Min. 50%)",
      highlights: ["Data Science", "Web Development", "Cloud Computing"],
      accreditation: "NAAC A+ Grade"
    },
    {
      name: "Bachelor of Business Administration",
      duration: "3 Years",
      seats: 60,
      eligibility: "10+2 in any stream (Min. 50%)",
      highlights: ["Entrepreneurship", "Digital Marketing", "Business Analytics"],
      accreditation: "NAAC A+ Grade"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">Undergraduate Programs</h1>
            <p className="text-xl opacity-90" data-testid="text-page-subtitle">Build your career foundation with our comprehensive UG programs</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <Card className="p-8 mb-12 bg-primary/5">
            <h2 className="text-2xl font-bold mb-4" data-testid="text-about-title">About Our UG Programs</h2>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-about-content">
              Our undergraduate programs are designed to provide students with a strong foundation in their chosen field 
              while developing critical thinking, problem-solving, and leadership skills. With a perfect blend of theoretical 
              knowledge and practical experience, our programs prepare students for successful careers in industry, research, 
              and entrepreneurship.
            </p>
          </Card>

          <div className="grid gap-6 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className="p-6" data-testid={`card-program-${index}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2" data-testid={`text-program-name-${index}`}>{program.name}</h3>
                    <Badge variant="default" className="mb-4" data-testid={`badge-program-accreditation-${index}`}>{program.accreditation}</Badge>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-semibold" data-testid={`text-program-duration-${index}`}>{program.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Total Seats</p>
                          <p className="font-semibold" data-testid={`text-program-seats-${index}`}>{program.seats}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Eligibility</p>
                          <p className="font-semibold text-sm" data-testid={`text-program-eligibility-${index}`}>
                            {program.eligibility.split('(')[0]}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Program Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, hIndex) => (
                          <Badge key={hIndex} variant="outline" data-testid={`badge-program-highlight-${index}-${hIndex}`}>
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button onClick={() => setLocation('/admissions/apply')} className="flex-shrink-0" data-testid={`button-apply-${index}`}>
                    Apply Now
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" data-testid="text-curriculum-title">Modern Curriculum</h3>
                  <p className="text-muted-foreground" data-testid="text-curriculum-content">
                    Our curriculum is regularly updated to align with industry trends and includes hands-on projects, 
                    internships, and research opportunities.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" data-testid="text-faculty-title">Expert Faculty</h3>
                  <p className="text-muted-foreground" data-testid="text-faculty-content">
                    Learn from experienced faculty members with strong academic backgrounds and industry experience, 
                    dedicated to your success.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
