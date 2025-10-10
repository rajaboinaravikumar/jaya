import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertCircle, Trophy, BookOpen } from "lucide-react";
import { Link } from "wouter";

const announcements = [
  {
    id: 1,
    category: "Admissions",
    title: "MBA Admissions 2026 - Apply Now",
    date: "2026-01-15",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    href: "/admissions/apply",
  },
  {
    id: 2,
    category: "Examinations",
    title: "Semester End Exams Timetable Released",
    date: "2026-01-12",
    icon: AlertCircle,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    href: "/examinations/timetable",
  },
  {
    id: 3,
    category: "Achievements",
    title: "Students Win National Hackathon 2026",
    date: "2026-01-10",
    icon: Trophy,
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    href: "/about/achievements",
  },
  {
    id: 4,
    category: "Events",
    title: "Tech Fest 2026 - Register Now",
    date: "2026-01-08",
    icon: Calendar,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    href: "/events",
  },
];

export function AnnouncementsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Announcements</h2>
          <p className="text-muted-foreground text-lg">Stay updated with important notices and events</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {announcements.map((announcement) => (
              <div key={announcement.id} className="w-full flex-shrink-0 px-2">
                <Link href={announcement.href}>
                  <a data-testid={`link-announcement-${announcement.id}`}>
                    <Card className="p-8 hover-elevate active-elevate-2 transition-all cursor-pointer">
                      <div className="flex items-start gap-6">
                        <div className={`${announcement.color} p-4 rounded-lg`}>
                          <announcement.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-3" variant="secondary">{announcement.category}</Badge>
                          <h3 className="text-2xl font-semibold mb-3">{announcement.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(announcement.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {announcements.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                onClick={() => setCurrent(index)}
                data-testid={`button-announcement-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
