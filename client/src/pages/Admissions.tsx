import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Calendar, FileText, DollarSign } from "lucide-react";

export default function Admissions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Admissions Open 2026</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join JITS</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Shape your future with quality education and industry-ready skills
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-apply-now">
              Apply Now
            </Button>
          </div>
        </div>

        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Apply Online", desc: "Fill the application form with required details" },
                { step: "2", title: "Document Verification", desc: "Submit academic documents for verification" },
                { step: "3", title: "Entrance Test", desc: "Appear for entrance examination or use JEE/NEET scores" },
                { step: "4", title: "Admission Confirmation", desc: "Pay fees and confirm your admission" },
              ].map((item, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Eligibility Criteria</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">B.Tech Programs</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">10+2 with Physics, Chemistry, and Mathematics with minimum 60% marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Valid JEE Main score or State Entrance Exam score</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">M.Tech Programs</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">B.Tech/BE degree with minimum 60% marks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Valid GATE score required</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Important Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="font-semibold mb-2">Important Dates</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Application Start: Jan 15, 2026</p>
                  <p>Application End: May 31, 2026</p>
                  <p>Entrance Test: June 2026</p>
                  <p>Classes Start: August 2026</p>
                </div>
              </Card>
              <Card className="p-6">
                <FileText className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mb-4" />
                <h3 className="font-semibold mb-2">Required Documents</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>10th & 12th Marksheets</p>
                  <p>Transfer Certificate</p>
                  <p>Entrance Exam Score Card</p>
                  <p>ID Proof & Photographs</p>
                </div>
              </Card>
              <Card className="p-6">
                <DollarSign className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-4" />
                <h3 className="font-semibold mb-2">Fee Structure</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>B.Tech: ₹1,50,000/year</p>
                  <p>M.Tech: ₹1,00,000/year</p>
                  <p>Hostel: ₹60,000/year</p>
                  <p>Scholarships Available</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
