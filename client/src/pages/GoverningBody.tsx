import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Mail, Phone } from "lucide-react";

export default function GoverningBody() {
  const members = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chairman",
      qualification: "Ph.D. (IIT Delhi)",
      image: "",
      email: "chairman@jits.edu.in",
      phone: "+91 98765 43210"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Vice Chairman",
      qualification: "Ph.D. (MIT, USA)",
      image: "",
      email: "vicechairman@jits.edu.in",
      phone: "+91 98765 43211"
    },
    {
      name: "Dr. Amit Patel",
      position: "Director",
      qualification: "Ph.D. (Stanford University)",
      image: "",
      email: "director@jits.edu.in",
      phone: "+91 98765 43212"
    },
    {
      name: "Shri Ravi Verma",
      position: "Secretary",
      qualification: "MBA, LLB",
      image: "",
      email: "secretary@jits.edu.in",
      phone: "+91 98765 43213"
    },
    {
      name: "Dr. Priya Singh",
      position: "Member - Academic Council",
      qualification: "Ph.D. (Cambridge)",
      image: "",
      email: "priya.singh@jits.edu.in",
      phone: "+91 98765 43214"
    },
    {
      name: "Mr. Vikram Malhotra",
      position: "Member - Industry Representative",
      qualification: "B.Tech, MBA",
      image: "",
      email: "vikram.malhotra@jits.edu.in",
      phone: "+91 98765 43215"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-title">Governing Body</h1>
            <p className="text-xl opacity-90" data-testid="text-page-subtitle">Leadership guiding our institution to excellence</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <Card className="p-8 mb-12 bg-primary/5">
            <div className="flex items-start gap-4">
              <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4" data-testid="text-about-title">About the Governing Body</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-about-content">
                  The Governing Body of JITS consists of eminent academicians, industry experts, and administrators 
                  who provide strategic direction and oversight to ensure the institution maintains the highest 
                  standards of education and research. The body meets regularly to review policies, approve major 
                  decisions, and guide the institution towards achieving its vision and mission.
                </p>
              </div>
            </div>
          </Card>

          <h2 className="text-3xl font-bold mb-8" data-testid="text-members-title">Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <Card key={index} className="p-6" data-testid={`card-member-${index}`}>
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1" data-testid={`text-member-name-${index}`}>{member.name}</h3>
                  <p className="text-primary font-semibold mb-2" data-testid={`text-member-position-${index}`}>{member.position}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-member-qualification-${index}`}>{member.qualification}</p>
                </div>
                <div className="space-y-2 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-foreground" data-testid={`link-member-email-${index}`}>
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${member.phone}`} className="text-muted-foreground hover:text-foreground" data-testid={`link-member-phone-${index}`}>
                      {member.phone}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
