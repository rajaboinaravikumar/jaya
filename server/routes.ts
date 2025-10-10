import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { 
  insertStudentSchema, insertAdmissionSchema, insertEventRegistrationSchema, 
  insertContactSubmissionSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Get role-specific data
      let roleData = null;
      if (user.role === 'student') {
        roleData = await storage.getStudent(userId);
      } else if (user.role === 'faculty') {
        roleData = await storage.getFaculty(userId);
      } else if (user.role === 'alumni') {
        roleData = await storage.getAlumni(userId);
      }
      
      res.json({ ...user, roleData });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Public routes

  // Get all departments
  app.get('/api/departments', async (req, res) => {
    try {
      const departments = await storage.getAllDepartments();
      res.json(departments);
    } catch (error) {
      console.error("Error fetching departments:", error);
      res.status(500).json({ message: "Failed to fetch departments" });
    }
  });

  // Get active announcements
  app.get('/api/announcements', async (req, res) => {
    try {
      const announcements = await storage.getActiveAnnouncements();
      res.json(announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      res.status(500).json({ message: "Failed to fetch announcements" });
    }
  });

  // Get active events
  app.get('/api/events', async (req, res) => {
    try {
      const events = await storage.getActiveEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  // Get recent placements
  app.get('/api/placements', async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
      const placements = await storage.getRecentPlacements(limit);
      res.json(placements);
    } catch (error) {
      console.error("Error fetching placements:", error);
      res.status(500).json({ message: "Failed to fetch placements" });
    }
  });

  // Submit admission application
  app.post('/api/admissions', async (req, res) => {
    try {
      const validatedData = insertAdmissionSchema.parse(req.body);
      const admission = await storage.createAdmission(validatedData);
      res.status(201).json(admission);
    } catch (error: any) {
      console.error("Error creating admission:", error);
      res.status(400).json({ message: error.message || "Failed to create admission" });
    }
  });

  // Submit contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json(submission);
    } catch (error: any) {
      console.error("Error creating contact submission:", error);
      res.status(400).json({ message: error.message || "Failed to submit contact form" });
    }
  });

  // Protected student routes
  
  // Get student dashboard data
  app.get('/api/student/dashboard', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user || user.role !== 'student') {
        return res.status(403).json({ message: "Forbidden: Student access only" });
      }
      
      const student = await storage.getStudent(userId);
      if (!student) {
        return res.status(404).json({ message: "Student profile not found" });
      }
      
      const notifications = await storage.getUserNotifications(userId);
      const results = await storage.getStudentResults(student.id);
      const assignments = await storage.getAssignmentsByDepartment(student.department, student.semester);
      
      res.json({
        student,
        notifications,
        results,
        assignments,
      });
    } catch (error) {
      console.error("Error fetching student dashboard:", error);
      res.status(500).json({ message: "Failed to fetch dashboard data" });
    }
  });

  // Get student results
  app.get('/api/student/results', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const student = await storage.getStudent(userId);
      
      if (!student) {
        return res.status(404).json({ message: "Student profile not found" });
      }
      
      const results = await storage.getStudentResults(student.id);
      res.json(results);
    } catch (error) {
      console.error("Error fetching student results:", error);
      res.status(500).json({ message: "Failed to fetch results" });
    }
  });

  // Get student notifications
  app.get('/api/student/notifications', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const notifications = await storage.getUserNotifications(userId);
      res.json(notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });

  // Mark notification as read
  app.patch('/api/notifications/:id/read', isAuthenticated, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.markNotificationAsRead(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ message: "Failed to update notification" });
    }
  });

  // Register for event
  app.post('/api/events/register', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { eventId } = req.body;
      
      if (!eventId) {
        return res.status(400).json({ message: "Event ID is required" });
      }
      
      const event = await storage.getEvent(eventId);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      if (event.maxRegistrations && (event.currentRegistrations || 0) >= event.maxRegistrations) {
        return res.status(400).json({ message: "Event is full" });
      }
      
      const registration = await storage.registerForEvent({ eventId, userId });
      res.status(201).json(registration);
    } catch (error: any) {
      console.error("Error registering for event:", error);
      res.status(400).json({ message: error.message || "Failed to register for event" });
    }
  });

  // Protected faculty routes
  
  // Get faculty dashboard
  app.get('/api/faculty/dashboard', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user || user.role !== 'faculty') {
        return res.status(403).json({ message: "Forbidden: Faculty access only" });
      }
      
      const faculty = await storage.getFaculty(userId);
      if (!faculty) {
        return res.status(404).json({ message: "Faculty profile not found" });
      }
      
      res.json({ faculty });
    } catch (error) {
      console.error("Error fetching faculty dashboard:", error);
      res.status(500).json({ message: "Failed to fetch dashboard data" });
    }
  });

  // Protected alumni routes
  
  // Get alumni dashboard
  app.get('/api/alumni/dashboard', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user || user.role !== 'alumni') {
        return res.status(403).json({ message: "Forbidden: Alumni access only" });
      }
      
      const alumni = await storage.getAlumni(userId);
      if (!alumni) {
        return res.status(404).json({ message: "Alumni profile not found" });
      }
      
      res.json({ alumni });
    } catch (error) {
      console.error("Error fetching alumni dashboard:", error);
      res.status(500).json({ message: "Failed to fetch dashboard data" });
    }
  });

  // Protected admin routes
  
  // Get all admissions (admin only)
  app.get('/api/admin/admissions', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: "Forbidden: Admin access only" });
      }
      
      const admissions = await storage.getAllAdmissions();
      res.json(admissions);
    } catch (error) {
      console.error("Error fetching admissions:", error);
      res.status(500).json({ message: "Failed to fetch admissions" });
    }
  });

  // Update admission status (admin only)
  app.patch('/api/admin/admissions/:id/status', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: "Forbidden: Admin access only" });
      }
      
      const { id } = req.params;
      const { status } = req.body;
      
      if (!status || !['pending', 'approved', 'rejected'].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }
      
      await storage.updateAdmissionStatus(id, status, userId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating admission status:", error);
      res.status(500).json({ message: "Failed to update admission status" });
    }
  });

  // Get all contact submissions (admin only)
  app.get('/api/admin/contact-submissions', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      
      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: "Forbidden: Admin access only" });
      }
      
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
