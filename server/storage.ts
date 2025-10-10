import { db } from "./db";
import { 
  users, students, faculty, alumni, departments, announcements, events, 
  eventRegistrations, placements, admissions, examResults, assignments, 
  notifications, contactSubmissions,
  type User, type UpsertUser, type InsertUser, type Student, type InsertStudent,
  type Faculty, type InsertFaculty, type Alumni, type InsertAlumni,
  type Department, type InsertDepartment, type Announcement, type InsertAnnouncement,
  type Event, type InsertEvent, type EventRegistration, type InsertEventRegistration,
  type Placement, type InsertPlacement, type Admission, type InsertAdmission,
  type ExamResult, type InsertExamResult, type Assignment, type InsertAssignment,
  type Notification, type InsertNotification, type ContactSubmission, type InsertContactSubmission
} from "@shared/schema";
import { eq, desc, and, sql } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  createUser(user: InsertUser): Promise<User>;
  
  // Student operations
  getStudent(userId: string): Promise<Student | undefined>;
  getStudentByRollNumber(rollNumber: string): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;
  updateStudentAttendance(id: string, attendance: number): Promise<void>;
  
  // Faculty operations
  getFaculty(userId: string): Promise<Faculty | undefined>;
  getFacultyByEmployeeId(employeeId: string): Promise<Faculty | undefined>;
  createFaculty(faculty: InsertFaculty): Promise<Faculty>;
  
  // Alumni operations
  getAlumni(userId: string): Promise<Alumni | undefined>;
  createAlumni(alumni: InsertAlumni): Promise<Alumni>;
  
  // Department operations
  getAllDepartments(): Promise<Department[]>;
  getDepartment(id: string): Promise<Department | undefined>;
  createDepartment(department: InsertDepartment): Promise<Department>;
  
  // Announcement operations
  getActiveAnnouncements(): Promise<Announcement[]>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
  
  // Event operations
  getActiveEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration>;
  
  // Placement operations
  getRecentPlacements(limit?: number): Promise<Placement[]>;
  createPlacement(placement: InsertPlacement): Promise<Placement>;
  
  // Admission operations
  createAdmission(admission: InsertAdmission): Promise<Admission>;
  getAllAdmissions(): Promise<Admission[]>;
  updateAdmissionStatus(id: string, status: string, reviewedBy: string): Promise<void>;
  
  // Exam results operations
  getStudentResults(studentId: string): Promise<ExamResult[]>;
  createExamResult(result: InsertExamResult): Promise<ExamResult>;
  
  // Assignment operations
  getAssignmentsByDepartment(department: string, semester: number): Promise<Assignment[]>;
  createAssignment(assignment: InsertAssignment): Promise<Assignment>;
  
  // Notification operations
  getUserNotifications(userId: string): Promise<Notification[]>;
  createNotification(notification: InsertNotification): Promise<Notification>;
  markNotificationAsRead(id: string): Promise<void>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class PostgresStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Student operations
  async getStudent(userId: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.userId, userId));
    return student;
  }

  async getStudentByRollNumber(rollNumber: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.rollNumber, rollNumber));
    return student;
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const [student] = await db.insert(students).values(insertStudent).returning();
    return student;
  }

  async updateStudentAttendance(id: string, attendance: number): Promise<void> {
    await db.update(students).set({ attendance }).where(eq(students.id, id));
  }

  // Faculty operations
  async getFaculty(userId: string): Promise<Faculty | undefined> {
    const [facultyMember] = await db.select().from(faculty).where(eq(faculty.userId, userId));
    return facultyMember;
  }

  async getFacultyByEmployeeId(employeeId: string): Promise<Faculty | undefined> {
    const [facultyMember] = await db.select().from(faculty).where(eq(faculty.employeeId, employeeId));
    return facultyMember;
  }

  async createFaculty(insertFaculty: InsertFaculty): Promise<Faculty> {
    const [facultyMember] = await db.insert(faculty).values(insertFaculty).returning();
    return facultyMember;
  }

  // Alumni operations
  async getAlumni(userId: string): Promise<Alumni | undefined> {
    const [alumniMember] = await db.select().from(alumni).where(eq(alumni.userId, userId));
    return alumniMember;
  }

  async createAlumni(insertAlumni: InsertAlumni): Promise<Alumni> {
    const [alumniMember] = await db.insert(alumni).values(insertAlumni).returning();
    return alumniMember;
  }

  // Department operations
  async getAllDepartments(): Promise<Department[]> {
    return db.select().from(departments);
  }

  async getDepartment(id: string): Promise<Department | undefined> {
    const [department] = await db.select().from(departments).where(eq(departments.id, id));
    return department;
  }

  async createDepartment(insertDepartment: InsertDepartment): Promise<Department> {
    const [department] = await db.insert(departments).values([insertDepartment]).returning();
    return department;
  }

  // Announcement operations
  async getActiveAnnouncements(): Promise<Announcement[]> {
    return db.select().from(announcements)
      .where(eq(announcements.isActive, true))
      .orderBy(desc(announcements.publishedAt))
      .limit(10);
  }

  async createAnnouncement(insertAnnouncement: InsertAnnouncement): Promise<Announcement> {
    const [announcement] = await db.insert(announcements).values(insertAnnouncement).returning();
    return announcement;
  }

  // Event operations
  async getActiveEvents(): Promise<Event[]> {
    return db.select().from(events)
      .where(eq(events.isActive, true))
      .orderBy(events.eventDate);
  }

  async getEvent(id: string): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db.insert(events).values(insertEvent).returning();
    return event;
  }

  async registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration> {
    const [eventRegistration] = await db.insert(eventRegistrations).values(registration).returning();
    
    // Increment current registrations count
    await db.update(events)
      .set({ currentRegistrations: sql`${events.currentRegistrations} + 1` })
      .where(eq(events.id, registration.eventId));
    
    return eventRegistration;
  }

  // Placement operations
  async getRecentPlacements(limit: number = 20): Promise<Placement[]> {
    return db.select().from(placements)
      .orderBy(desc(placements.placementDate))
      .limit(limit);
  }

  async createPlacement(insertPlacement: InsertPlacement): Promise<Placement> {
    const [placement] = await db.insert(placements).values(insertPlacement).returning();
    return placement;
  }

  // Admission operations
  async createAdmission(insertAdmission: InsertAdmission): Promise<Admission> {
    const [admission] = await db.insert(admissions).values(insertAdmission).returning();
    return admission;
  }

  async getAllAdmissions(): Promise<Admission[]> {
    return db.select().from(admissions).orderBy(desc(admissions.applicationDate));
  }

  async updateAdmissionStatus(id: string, status: string, reviewedBy: string): Promise<void> {
    await db.update(admissions)
      .set({ status, reviewedBy, reviewedAt: new Date() })
      .where(eq(admissions.id, id));
  }

  // Exam results operations
  async getStudentResults(studentId: string): Promise<ExamResult[]> {
    return db.select().from(examResults)
      .where(eq(examResults.studentId, studentId))
      .orderBy(desc(examResults.examDate));
  }

  async createExamResult(insertResult: InsertExamResult): Promise<ExamResult> {
    const [result] = await db.insert(examResults).values(insertResult).returning();
    return result;
  }

  // Assignment operations
  async getAssignmentsByDepartment(department: string, semester: number): Promise<Assignment[]> {
    return db.select().from(assignments)
      .where(and(
        eq(assignments.department, department),
        eq(assignments.semester, semester)
      ))
      .orderBy(desc(assignments.dueDate));
  }

  async createAssignment(insertAssignment: InsertAssignment): Promise<Assignment> {
    const [assignment] = await db.insert(assignments).values(insertAssignment).returning();
    return assignment;
  }

  // Notification operations
  async getUserNotifications(userId: string): Promise<Notification[]> {
    return db.select().from(notifications)
      .where(eq(notifications.userId, userId))
      .orderBy(desc(notifications.createdAt))
      .limit(20);
  }

  async createNotification(insertNotification: InsertNotification): Promise<Notification> {
    const [notification] = await db.insert(notifications).values(insertNotification).returning();
    return notification;
  }

  async markNotificationAsRead(id: string): Promise<void> {
    await db.update(notifications).set({ isRead: true }).where(eq(notifications.id, id));
  }

  // Contact submissions
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(insertSubmission).returning();
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.submittedAt));
  }
}

export const storage = new PostgresStorage();
