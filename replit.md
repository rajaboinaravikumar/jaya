# JITS College Website

## Overview

JITS (Jain Institute of Technology & Science) is a modern college website built as a full-stack application. The platform serves as a comprehensive digital presence for an educational institution, providing portals for students, faculty, and alumni, along with public-facing pages for admissions, departments, placements, and events.

The application features role-based authentication, interactive dashboards, event management, admission tracking, and contact forms. It follows a hybrid design approach combining Material Design principles with marketing-focused UI elements to balance institutional credibility with user engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state and caching
- **UI Components**: Shadcn/ui (Radix UI primitives) with Tailwind CSS for styling
- **Design System**: 
  - Custom theme system with light/dark mode support
  - Material Design-inspired component library
  - Responsive layouts with mobile-first approach
  - Custom color palette defined in CSS variables (professional blue primary, teal accents)
  - Typography: Plus Jakarta Sans for headings, Inter for body text

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express-session with PostgreSQL session store (connect-pg-simple)
- **API Pattern**: RESTful endpoints with role-based access control
- **Development Setup**: 
  - Vite dev server in middleware mode for HMR
  - Separate development and production build processes
  - Custom logging middleware for API requests

### Database Architecture
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (via Neon serverless driver with WebSocket support)
- **Schema Design**:
  - Role-based user system (students, faculty, alumni, admin)
  - Separate tables for role-specific data (students, faculty, alumni)
  - Core entities: departments, announcements, events, placements, admissions
  - Supporting tables: event registrations, exam results, assignments, notifications, contact submissions
  - Session storage table for authentication
- **Data Validation**: Zod schemas generated from Drizzle schemas for runtime validation

### Authentication & Authorization
- **Method**: Replit Auth (OpenID Connect/OIDC)
- **Implementation**: 
  - Passport.js with OpenID Connect strategy
  - Session-based authentication with PostgreSQL storage
  - Role-based access control (RBAC) with middleware guards
  - User roles: student, faculty, alumni, admin
  - Separate login flows and dashboards per role
- **Session Configuration**:
  - 7-day session TTL
  - Secure, HTTP-only cookies
  - Session data persisted in PostgreSQL

### Route Structure
- **Public Routes**: Home, departments, placements, admissions, contact, events, results
- **Protected Routes**: 
  - Student dashboard (role: student)
  - Faculty dashboard (role: faculty)
  - Alumni dashboard (role: alumni)
- **Auth Routes**: Role-specific login pages, Replit OAuth callback handlers
- **API Routes**: RESTful endpoints under `/api` namespace with role-based access

## External Dependencies

### Third-Party Services
- **Replit Auth**: OAuth/OIDC authentication provider
  - Issuer URL: Configurable via environment variable (default: replit.com/oidc)
  - Client credentials via REPL_ID environment variable
  
- **Neon Database**: Serverless PostgreSQL database
  - Connection via DATABASE_URL environment variable
  - WebSocket-based connection for serverless compatibility

### Key Libraries & Frameworks
- **UI/Design**: 
  - Radix UI primitives for accessible components
  - Tailwind CSS for utility-first styling
  - Lucide React for icons
  - React Hook Form with Zod resolvers for form validation
  
- **Data & State**:
  - TanStack Query for async state management
  - Drizzle ORM for database operations
  - Zod for schema validation

- **Authentication**:
  - Passport.js for auth strategy
  - openid-client for OIDC integration
  - express-session for session management
  - connect-pg-simple for PostgreSQL session store

- **Development Tools**:
  - Vite for development server and builds
  - esbuild for server bundling
  - TypeScript for type safety
  - Replit-specific plugins for dev environment integration

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required)
- `SESSION_SECRET`: Secret key for session signing (required)
- `REPL_ID`: Replit application identifier for OAuth (required in Replit environment)
- `ISSUER_URL`: OIDC issuer URL (optional, defaults to Replit OIDC)
- `REPLIT_DOMAINS`: Allowed domains for Replit integration (required in Replit environment)
- `NODE_ENV`: Environment mode (development/production)