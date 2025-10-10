import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, jsonb, decimal, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table - Required for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Users table - for Replit Auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  role: text("role").default("student"), // student, faculty, alumni, admin
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Students table
export const students = pgTable("students", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull().unique(),
  rollNumber: text("roll_number").notNull().unique(),
  name: text("name").notNull(),
  course: text("course").notNull(),
  department: text("department").notNull(),
  semester: integer("semester").notNull(),
  cgpa: decimal("cgpa", { precision: 3, scale: 2 }),
  attendance: integer("attendance").default(0),
  feeStatus: text("fee_status").default("pending"), // paid, pending, overdue
  phone: text("phone"),
  address: text("address"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Faculty table
export const faculty = pgTable("faculty", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull().unique(),
  employeeId: text("employee_id").notNull().unique(),
  name: text("name").notNull(),
  department: text("department").notNull(),
  designation: text("designation").notNull(),
  specialization: text("specialization"),
  phone: text("phone"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Alumni table
export const alumni = pgTable("alumni", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull().unique(),
  name: text("name").notNull(),
  graduationYear: integer("graduation_year").notNull(),
  course: text("course").notNull(),
  department: text("department").notNull(),
  currentCompany: text("current_company"),
  currentPosition: text("current_position"),
  phone: text("phone"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Departments table
export const departments = pgTable("departments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  code: text("code").notNull().unique(),
  description: text("description"),
  headOfDepartment: text("head_of_department"),
  studentCount: integer("student_count").default(0),
  facultyCount: integer("faculty_count").default(0),
  programs: jsonb("programs").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Announcements table
export const announcements = pgTable("announcements", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  category: text("category").notNull(), // admissions, examinations, achievements, events
  content: text("content").notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at"),
  isActive: boolean("is_active").default(true),
  createdBy: varchar("created_by").references(() => users.id),
});

// Events table
export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(), // cultural, workshop, seminar, sports
  eventDate: timestamp("event_date").notNull(),
  startTime: text("start_time").notNull(),
  endTime: text("end_time").notNull(),
  location: text("location").notNull(),
  maxRegistrations: integer("max_registrations"),
  currentRegistrations: integer("current_registrations").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Event Registrations table
export const eventRegistrations = pgTable("event_registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  eventId: varchar("event_id").references(() => events.id).notNull(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  registeredAt: timestamp("registered_at").defaultNow().notNull(),
});

// Placements table
export const placements = pgTable("placements", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  studentId: varchar("student_id").references(() => students.id).notNull(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  packageAmount: decimal("package_amount", { precision: 10, scale: 2 }).notNull(),
  placementYear: integer("placement_year").notNull(),
  placementDate: timestamp("placement_date").defaultNow().notNull(),
});

// Admissions table
export const admissions = pgTable("admissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  program: text("program").notNull(),
  department: text("department").notNull(),
  academicRecords: jsonb("academic_records").$type<any>(),
  status: text("status").default("pending"), // pending, approved, rejected
  applicationDate: timestamp("application_date").defaultNow().notNull(),
  reviewedBy: varchar("reviewed_by").references(() => users.id),
  reviewedAt: timestamp("reviewed_at"),
});

// Exam Results table
export const examResults = pgTable("exam_results", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  studentId: varchar("student_id").references(() => students.id).notNull(),
  semester: integer("semester").notNull(),
  subject: text("subject").notNull(),
  marks: integer("marks").notNull(),
  maxMarks: integer("max_marks").notNull(),
  grade: text("grade"),
  examDate: timestamp("exam_date").notNull(),
  publishedAt: timestamp("published_at").defaultNow().notNull(),
});

// Assignments table
export const assignments = pgTable("assignments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  subject: text("subject").notNull(),
  department: text("department").notNull(),
  semester: integer("semester").notNull(),
  dueDate: timestamp("due_date").notNull(),
  createdBy: varchar("created_by").references(() => faculty.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Notifications table
export const notifications = pgTable("notifications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id).notNull(),
  title: text("title").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Contact submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").default("new"), // new, responded, closed
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

// Insert schemas
export const upsertUserSchema = createInsertSchema(users).omit({ createdAt: true, updatedAt: true });
export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true, updatedAt: true });
export const insertStudentSchema = createInsertSchema(students).omit({ id: true, createdAt: true });
export const insertFacultySchema = createInsertSchema(faculty).omit({ id: true, createdAt: true });
export const insertAlumniSchema = createInsertSchema(alumni).omit({ id: true, createdAt: true });
export const insertDepartmentSchema = createInsertSchema(departments).omit({ id: true, createdAt: true });
export const insertAnnouncementSchema = createInsertSchema(announcements).omit({ id: true, publishedAt: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true, createdAt: true });
export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).omit({ id: true, registeredAt: true });
export const insertPlacementSchema = createInsertSchema(placements).omit({ id: true, placementDate: true });
export const insertAdmissionSchema = createInsertSchema(admissions).omit({ id: true, applicationDate: true, reviewedBy: true, reviewedAt: true });
export const insertExamResultSchema = createInsertSchema(examResults).omit({ id: true, publishedAt: true });
export const insertAssignmentSchema = createInsertSchema(assignments).omit({ id: true, createdAt: true });
export const insertNotificationSchema = createInsertSchema(notifications).omit({ id: true, createdAt: true });
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({ id: true, submittedAt: true });

// Types
export type User = typeof users.$inferSelect;
export type UpsertUser = z.infer<typeof upsertUserSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Student = typeof students.$inferSelect;
export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Faculty = typeof faculty.$inferSelect;
export type InsertFaculty = z.infer<typeof insertFacultySchema>;
export type Alumni = typeof alumni.$inferSelect;
export type InsertAlumni = z.infer<typeof insertAlumniSchema>;
export type Department = typeof departments.$inferSelect;
export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;
export type Announcement = typeof announcements.$inferSelect;
export type InsertAnnouncement = z.infer<typeof insertAnnouncementSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;
export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type Placement = typeof placements.$inferSelect;
export type InsertPlacement = z.infer<typeof insertPlacementSchema>;
export type Admission = typeof admissions.$inferSelect;
export type InsertAdmission = z.infer<typeof insertAdmissionSchema>;
export type ExamResult = typeof examResults.$inferSelect;
export type InsertExamResult = z.infer<typeof insertExamResultSchema>;
export type Assignment = typeof assignments.$inferSelect;
export type InsertAssignment = z.infer<typeof insertAssignmentSchema>;
export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = z.infer<typeof insertNotificationSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
