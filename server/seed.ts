import { db } from "./db";
import { 
  departments, 
  announcements, 
  events
} from "../shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Seed departments
  const deptData = [
    {
      name: "Computer Science & Engineering",
      code: "CSE",
      description: "Leading-edge curriculum in software development, AI, and data science",
      programs: ["B.Tech", "M.Tech"],
    },
    {
      name: "Electronics & Communication",
      code: "ECE",
      description: "Innovative programs in VLSI, embedded systems, and communication technologies",
      programs: ["B.Tech", "M.Tech"],
    },
    {
      name: "Mechanical Engineering",
      code: "ME",
      description: "Industry-oriented programs in design, manufacturing, and automation",
      programs: ["B.Tech", "M.Tech"],
    },
    {
      name: "Civil Engineering",
      code: "CE",
      description: "Comprehensive training in structural design and construction management",
      programs: ["B.Tech"],
    },
    {
      name: "Chemical Engineering",
      code: "CHE",
      description: "Advanced programs in process engineering and sustainable technologies",
      programs: ["B.Tech", "M.Tech"],
    },
    {
      name: "Applied Sciences",
      code: "AS",
      description: "Strong foundation in physics, chemistry, and mathematics",
      programs: ["BSc", "MSc"],
    },
  ];

  for (const dept of deptData) {
    await db.insert(departments).values(dept).onConflictDoNothing();
  }

  // Seed announcements
  const announcementData = [
    {
      title: "Semester Exam Schedule Released",
      content: "The examination schedule for the current semester has been published. Students can check the schedule on the student portal.",
      category: "academic" as const,
      priority: "high" as const,
      publishDate: new Date(),
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
    {
      title: "Annual Tech Fest Registration Open",
      content: "Register now for TechVista 2026, our annual technical and cultural fest. Exciting prizes and competitions await!",
      category: "event" as const,
      priority: "medium" as const,
      publishDate: new Date(),
      expiryDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
    },
    {
      title: "Placement Drive - Tech Giants",
      content: "Google, Microsoft, and Amazon will be visiting campus next month for recruitment. Eligible students should register immediately.",
      category: "placement" as const,
      priority: "high" as const,
      publishDate: new Date(),
      expiryDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    },
    {
      title: "Library Extended Hours",
      content: "During exam week, the library will remain open 24/7 for student convenience.",
      category: "general" as const,
      priority: "low" as const,
      publishDate: new Date(),
      expiryDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
  ];

  for (const announcement of announcementData) {
    await db.insert(announcements).values(announcement).onConflictDoNothing();
  }

  // Seed events
  const eventData = [
    {
      title: "AI & Machine Learning Workshop",
      description: "Hands-on workshop covering the fundamentals of AI and ML with industry experts",
      category: "workshop" as const,
      eventDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      startTime: "10:00 AM",
      endTime: "04:00 PM",
      location: "Seminar Hall A",
      maxRegistrations: 100,
      currentRegistrations: 45,
    },
    {
      title: "Annual Cultural Fest - Rangmanch",
      description: "Join us for three days of music, dance, drama, and cultural celebrations",
      category: "cultural" as const,
      eventDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      startTime: "09:00 AM",
      endTime: "08:00 PM",
      location: "Main Auditorium",
      maxRegistrations: 500,
      currentRegistrations: 320,
    },
    {
      title: "Industry Connect Seminar",
      description: "CEOs and CTOs from leading companies share insights on industry trends",
      category: "seminar" as const,
      eventDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
      startTime: "02:00 PM",
      endTime: "05:00 PM",
      location: "Conference Hall",
      maxRegistrations: 200,
      currentRegistrations: 150,
    },
    {
      title: "Inter-College Sports Meet",
      description: "Annual sports competition featuring cricket, football, basketball, and athletics",
      category: "sports" as const,
      eventDate: new Date(Date.now() + 40 * 24 * 60 * 60 * 1000),
      startTime: "08:00 AM",
      endTime: "06:00 PM",
      location: "Sports Complex",
      maxRegistrations: 300,
      currentRegistrations: 180,
    },
  ];

  for (const event of eventData) {
    await db.insert(events).values(event).onConflictDoNothing();
  }

  console.log("Database seeded successfully!");
}

seed().catch(console.error);
