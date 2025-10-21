import { Card } from "@/components/ui/card";
import { Users, Trophy, GraduationCap, Building2, Globe, Rocket, BookOpen, Award } from "lucide-react";

export function WhyJITSSection() {
  const stats = [
    { 
      value: "50+", 
      label: "Sponsored Research Projects", 
      icon: BookOpen,
      color: "text-blue-600"
    },
    { 
      value: "95%", 
      label: "Campus Placements", 
      icon: Trophy,
      color: "text-green-600"
    },
    { 
      value: "200+", 
      label: "Faculty Members", 
      icon: Users,
      color: "text-purple-600"
    },
    { 
      value: "20+", 
      label: "International Partners", 
      icon: Globe,
      color: "text-orange-600"
    },
    { 
      value: "10,000+", 
      label: "Alumni", 
      icon: GraduationCap,
      color: "text-red-600"
    },
    { 
      value: "5,000+", 
      label: "Students", 
      icon: Users,
      color: "text-teal-600"
    },
    { 
      value: "50+", 
      label: "Patents", 
      icon: Award,
      color: "text-indigo-600"
    },
    { 
      value: "25+", 
      label: "Startups", 
      icon: Rocket,
      color: "text-pink-600"
    },
  ];

  const academicCollaborators = [
    "JNTU Hyderabad",
    "IIT Hyderabad", 
    "NIT Warangal",
    "International Universities",
    "Research Institutions"
  ];

  const industryCollaborators = [
    "TCS", "Infosys", "Wipro", "Amazon",
    "Microsoft", "Google", "IBM", "Accenture",
    "Cognizant", "Capgemini", "Tech Mahindra", "HCL"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            WHY <span className="text-blue-600">JITS</span>
          </h1>
          <div className="flex justify-center items-center gap-4 mb-8">
          
          </div>
        </div>

        {/* 50 Years Excellence Banner */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 mb-16 text-center shadow-2xl border-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            21+ Years of Academic Excellence
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Established in 2001, JITS has been a pioneer in quality technical education, 
            nurturing future leaders and innovators.
          </p>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`${stat.color} flex justify-center mb-4`}>
                <stat.icon className="h-12 w-12" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

         


        {/* Additional Info */}
         
      </div>
    </section>
  );
}