import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Calendar, Building } from "lucide-react";

export default function Accreditation() {
  const accreditations = [
    {
      body: "AICTE",
      fullName: "All India Council for Technical Education",
      status: "Approved",
      validUntil: "2026",
      programs: ["B.Tech", "M.Tech", "MBA"],
      icon: Award
    },
    {
      body: "NBA",
      fullName: "National Board of Accreditation",
      status: "Accredited",
      validUntil: "2025",
      programs: ["Computer Science", "Electronics", "Mechanical"],
      icon: Award
    },
    {
      body: "NAAC",
      fullName: "National Assessment and Accreditation Council",
      status: "A+ Grade",
      validUntil: "2027",
      programs: ["Institutional Accreditation"],
      icon: Award
    },
    {
      body: "UGC",
      fullName: "University Grants Commission",
      status: "Recognized",
      validUntil: "Permanent",
      programs: ["All Programs"],
      icon: Building
    }
  ];

  const achievements = [
    "Ranked among top 100 engineering colleges in India",
    "99% placement record for the past 5 years",
    "Over 50 MoUs with leading industries",
    "State-of-the-art research facilities",
    "Highly qualified faculty with 80% Ph.D. holders",
    "Active industry-academia collaborations"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">Accreditation & Recognition</h1>
            <p className="text-xl opacity-90" data-testid="text-page-subtitle">Certified excellence in technical education</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2" data-testid="text-accreditations-title">Our Accreditations</h2>
            <p className="text-muted-foreground mb-8" data-testid="text-accreditations-desc">
              JITS is recognized and accredited by premier national bodies, ensuring quality education and global recognition.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {accreditations.map((acc, index) => (
                <Card key={index} className="p-6" data-testid={`card-accreditation-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <acc.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold" data-testid={`text-acc-body-${index}`}>{acc.body}</h3>
                          <p className="text-sm text-muted-foreground" data-testid={`text-acc-fullname-${index}`}>{acc.fullName}</p>
                        </div>
                        <Badge variant="default" data-testid={`badge-acc-status-${index}`}>{acc.status}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span data-testid={`text-acc-validity-${index}`}>Valid until: {acc.validUntil}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Accredited Programs:</p>
                        <div className="flex flex-wrap gap-2">
                          {acc.programs.map((program, pIndex) => (
                            <Badge key={pIndex} variant="outline" data-testid={`badge-acc-program-${index}-${pIndex}`}>
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-primary/5">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-achievements-title">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`text-achievement-${index}`}>
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4" data-testid="text-quality-title">Quality Assurance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-quality-content">
              JITS is committed to maintaining the highest standards of quality in all aspects of education, research, 
              and administration. Our quality assurance mechanisms include:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="list-disc" data-testid="text-qa-item-0">Regular curriculum updates based on industry requirements and global trends</li>
              <li className="list-disc" data-testid="text-qa-item-1">Continuous faculty development programs and training</li>
              <li className="list-disc" data-testid="text-qa-item-2">Student feedback and grievance redressal mechanisms</li>
              <li className="list-disc" data-testid="text-qa-item-3">Internal quality audits and assessment systems</li>
              <li className="list-disc" data-testid="text-qa-item-4">Industry advisory board for program enhancement</li>
              <li className="list-disc" data-testid="text-qa-item-5">Regular infrastructure and facility upgrades</li>
            </ul>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
