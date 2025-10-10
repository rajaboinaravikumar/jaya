import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import StudentLogin from "@/pages/StudentLogin";
import StudentDashboard from "@/pages/StudentDashboard";
import FacultyLogin from "@/pages/FacultyLogin";
import FacultyDashboard from "@/pages/FacultyDashboard";
import AlumniLogin from "@/pages/AlumniLogin";
import AlumniDashboard from "@/pages/AlumniDashboard";
import Departments from "@/pages/Departments";
import Placements from "@/pages/Placements";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";
import Results from "@/pages/Results";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Student routes */}
      <Route path="/student/login" component={StudentLogin} />
      <Route path="/student/dashboard" component={StudentDashboard} />
      
      {/* Faculty routes */}
      <Route path="/faculty/login" component={FacultyLogin} />
      <Route path="/faculty/dashboard" component={FacultyDashboard} />
      
      {/* Alumni routes */}
      <Route path="/alumni/login" component={AlumniLogin} />
      <Route path="/alumni/dashboard" component={AlumniDashboard} />
      
      {/* Public pages */}
      <Route path="/academics/departments" component={Departments} />
      <Route path="/placements/records" component={Placements} />
      <Route path="/placements/companies" component={Placements} />
      <Route path="/placements/testimonials" component={Placements} />
      <Route path="/admissions/apply" component={Admissions} />
      <Route path="/admissions/eligibility" component={Admissions} />
      <Route path="/admissions/fees" component={Admissions} />
      <Route path="/contact" component={Contact} />
      <Route path="/events" component={Events} />
      <Route path="/examinations/results" component={Results} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
