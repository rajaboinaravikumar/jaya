import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users, Award, ChevronRight, BookOpen } from "lucide-react";
import { useLocation } from "wouter";

export default function PostgraduatePrograms() {
  const [, setLocation] = useLocation();

  const programs = [
    {
      name: "M.Tech in Computer Science & Engineering",
      specializations: ["Artificial Intelligence", "Data Science", "Cyber Security", "Cloud Computing"],
      duration: "2 Years",
      seats: 30,
      eligibility: "B.Tech/B.E. in relevant field (Min. 60%)",
      accreditation: "AICTE Approved",
      features: ["Research Focus", "Industry Projects", "Thesis Work"]
    },
    {
      name: "M.Tech in VLSI Design",
      specializations: ["Digital VLSI", "Analog VLSI", "Mixed Signal Design"],
      duration: "2 Years",
      seats: 18,
      eligibility: "B.Tech/B.E. in ECE/EEE (Min. 60%)",
      accreditation: "AICTE Approved",
      features: ["Advanced Labs", "Industry Tie-ups", "Research Publications"]
    },
    {
      name: "M.Tech in Structural Engineering",
      specializations: ["Earthquake Engineering", "Advanced Concrete", "Pre-stressed Concrete"],
      duration: "2 Years",
      seats: 18,
      eligibility: "B.Tech/B.E. in Civil (Min. 60%)",
      accreditation: "AICTE Approved",
      features: ["Simulation Tools", "Field Projects", "Consultancy Work"]
    },
    {
      name: "Master of Business Administration (MBA)",
      specializations: ["Marketing", "Finance", "Human Resources", "Operations", "Digital Business"],
      duration: "2 Years",
      seats: 120,
      eligibility: "Graduation in any discipline (Min. 50%)",
      accreditation: "AICTE Approved",
      features: ["Industry Internships", "Live Projects", "Global Exposure"]
    },
    {
      name: "M.Sc. in Data Science",
      specializations: ["Machine Learning", "Big Data Analytics", "Business Intelligence"],
      duration: "2 Years",
      seats: 40,
      eligibility: "B.Sc./B.Tech in relevant field (Min. 55%)",
      accreditation: "NAAC A+ Grade",
      features: ["Practical Training", "Industry Certifications", "Capstone Projects"]
    },
    {
      name: "M.Sc. in Applied Mathematics",
      specializations: ["Computational Mathematics", "Operations Research", "Mathematical Modeling"],
      duration: "2 Years",
      seats: 30,
      eligibility: "B.Sc. with Mathematics (Min. 55%)",
      accreditation: "NAAC A+ Grade",
      features: ["Research Oriented", "Seminar Series", "Publication Support"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">Postgraduate Programs</h1>
            <p className="text-xl opacity-90" data-testid="text-page-subtitle">Advance your expertise with specialized PG programs</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <Card className="p-8 mb-12 bg-primary/5">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4" data-testid="text-about-title">About Our PG Programs</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-about-content">
                  Our postgraduate programs are designed for students seeking advanced knowledge and specialized skills in their 
                  chosen domain. With a strong emphasis on research, innovation, and industry collaboration, our PG programs 
                  prepare graduates for leadership roles in academia, industry, and entrepreneurial ventures. Students benefit 
                  from state-of-the-art facilities, expert faculty guidance, and opportunities for national and international 
                  collaborations.
                </p>
              </div>
            </div>
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

                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.specializations.map((spec, sIndex) => (
                          <Badge key={sIndex} variant="outline" data-testid={`badge-program-spec-${index}-${sIndex}`}>
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2">Program Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, fIndex) => (
                          <Badge key={fIndex} variant="secondary" data-testid={`badge-program-feature-${index}-${fIndex}`}>
                            {feature}
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

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" data-testid="text-research-title">Research Focus</h3>
                  <p className="text-muted-foreground" data-testid="text-research-content">
                    Engage in cutting-edge research with access to advanced labs and facilities.
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
                  <h3 className="text-xl font-bold mb-2" data-testid="text-industry-title">Industry Connect</h3>
                  <p className="text-muted-foreground" data-testid="text-industry-content">
                    Collaborate with leading industries through projects and internships.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" data-testid="text-placement-title">Career Growth</h3>
                  <p className="text-muted-foreground" data-testid="text-placement-content">
                    Excellent placement opportunities with top companies and research institutions.
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
