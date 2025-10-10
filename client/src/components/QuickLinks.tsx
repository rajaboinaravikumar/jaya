import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { GraduationCap, User, Users, FileText, Download, Award } from "lucide-react";

const links = [
  {
    title: "Student Portal",
    description: "Access attendance, results & assignments",
    icon: GraduationCap,
    href: "/student/login",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Faculty Portal",
    description: "Manage grades, attendance & notices",
    icon: User,
    href: "/faculty/login",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Alumni Portal",
    description: "Connect with alumni network",
    icon: Users,
    href: "/alumni/login",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Exam Results",
    description: "Check latest examination results",
    icon: FileText,
    href: "/examinations/results",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    title: "Downloads",
    description: "Forms, syllabus & documents",
    icon: Download,
    href: "/downloads",
    color: "text-rose-600 dark:text-rose-400",
  },
  {
    title: "Achievements",
    description: "Awards & recognitions",
    icon: Award,
    href: "/about/achievements",
    color: "text-indigo-600 dark:text-indigo-400",
  },
];

export function QuickLinks() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Links</h2>
          <p className="text-muted-foreground text-lg">Access essential services and information</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link 
              key={link.title} 
              href={link.href}
              data-testid={`link-quick-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Card className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer h-full">
                <div className="flex items-start gap-4">
                  <div className={`${link.color}`}>
                    <link.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
