import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, MapPin, Star, BookOpen, Code, Sprout } from "lucide-react";

export function EventsSection() {
  const events = [
    {
      title: "Empower Your STEM Journey with Python & R",
      date: "April 14th to 25th, 2025",
      time: "10:00 AM - 4:00 PM Daily",
      location: "Computer Lab Block",
      description: "Hands-on program focusing on Python for STEM, practical applications, and sensor programming",
      highlights: [
        "Python for STEM Applications",
        "Practical Data Analysis", 
        "Hands-on Sensor Programming",
        "Certificate on successful completion"
      ],
      organizer: "School of Computer Science & AI",
      image: "/events/stem-python.jpg",
      status: "upcoming",
      icon: Code,
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      title: "Participatory Rural Appraisal (PRA) Program",
      date: "19th September, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Rural Development Center",
      description: "School of Agriculture students conducted rural appraisal program with community engagement",
      organizer: "School of Agriculture",
      chiefGuest: "Brig. Bhopal Raj (Dean, School of Agriculture)",
      image: "/events/pra-program.jpg",
      status: "completed",
      icon: Sprout,
      bgColor: "from-green-500 to-green-600"
    },
    {
      title: "Programming Hackathon 2024",
      date: "27th April, 2024",
      time: "8:00 AM - 8:00 PM",
      location: "Innovation Center",
      description: "12-hour intensive coding competition for 1st & 3rd year students focusing on real-world problems",
      duration: "12 Hours Marathon",
      organizer: "School of Computer Science & AI",
      image: "/events/hackathon.jpg",
      status: "completed",
      icon: Code,
      bgColor: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-4 shadow-lg">
            UPCOMING EVENTS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Campus Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for workshops, seminars, hackathons and cultural activities that enhance learning beyond classrooms
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              
              {/* Event Header with Gradient */}
              <div className={`h-4 bg-gradient-to-r ${event.bgColor}`}></div>
              
              <div className="p-6">
                {/* Status Badge and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className={
                    event.status === 'upcoming' 
                      ? 'bg-green-100 text-green-800 border-green-200' 
                      : 'bg-blue-100 text-blue-800 border-blue-200'
                  }>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </Badge>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${event.bgColor} text-white`}>
                    <event.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                {event.highlights && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Program Highlights:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Organizer */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Users className="h-3 w-3" />
                  <span>Organized by: <strong>{event.organizer}</strong></span>
                </div>

                {/* Chief Guest */}
                {event.chiefGuest && (
                  <div className="text-xs text-gray-500 mb-4 p-3 bg-gray-50 rounded-lg">
                    <strong>Chief Guest:</strong> {event.chiefGuest}
                  </div>
                )}

                {/* Duration */}
                {event.duration && (
                  <div className="text-xs text-gray-500 mb-4">
                    <strong>Duration:</strong> {event.duration}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    {event.status === 'upcoming' ? 'Register Now' : 'View Photos'}
                  </Button>
                  <Button variant="outline" className="text-sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3"
          >
            View All Events
          </Button>
        </div>

      </div>
    </section>
  );
}