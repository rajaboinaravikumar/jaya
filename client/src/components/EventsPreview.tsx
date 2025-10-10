import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

const events = [
  {
    id: 1,
    title: "Annual Tech Fest 2026",
    date: "2026-02-15",
    time: "9:00 AM - 6:00 PM",
    location: "Main Auditorium",
    category: "Cultural",
    bgGradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Industry Expert Workshop",
    date: "2026-02-20",
    time: "2:00 PM - 5:00 PM",
    location: "Seminar Hall A",
    category: "Workshop",
    bgGradient: "from-emerald-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Career Guidance Seminar",
    date: "2026-02-25",
    time: "10:00 AM - 1:00 PM",
    location: "Conference Room",
    category: "Seminar",
    bgGradient: "from-purple-500 to-purple-600",
  },
];

export function EventsPreview() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Join us for workshops, seminars, and cultural activities</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex" data-testid="button-view-all-events">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-event-${event.id}`}>
              <div className={`h-32 bg-gradient-to-r ${event.bgGradient} relative`}>
                <div className="absolute top-4 right-4 bg-white dark:bg-card text-foreground px-3 py-1 rounded-md text-sm font-semibold">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-4">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" data-testid={`button-register-event-${event.id}`}>
                  Register Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" asChild data-testid="button-view-all-events-mobile">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
