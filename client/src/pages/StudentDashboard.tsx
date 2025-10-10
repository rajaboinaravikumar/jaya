import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, FileText, Download, DollarSign, BookOpen, Bell } from "lucide-react";

// todo: remove mock functionality
const mockStudent = {
  name: "Rajesh Kumar",
  id: "JITS2024CS001",
  course: "B.Tech Computer Science",
  semester: "6th Semester",
  attendance: 87,
  cgpa: 8.5,
};

const mockNotifications = [
  { id: 1, text: "Semester exams start from March 1st", time: "2 hours ago" },
  { id: 2, text: "Assignment submission deadline: Feb 28", time: "1 day ago" },
  { id: 3, text: "New study material uploaded for Database Systems", time: "2 days ago" },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {mockStudent.name}!</h1>
            <p className="text-muted-foreground">{mockStudent.id} • {mockStudent.course}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Attendance</h3>
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">{mockStudent.attendance}%</div>
              <Progress value={mockStudent.attendance} className="mb-2" />
              <p className="text-sm text-muted-foreground">Good standing</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">CGPA</h3>
                <BookOpen className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">{mockStudent.cgpa}</div>
              <p className="text-sm text-muted-foreground">{mockStudent.semester}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Fee Status</h3>
                <DollarSign className="h-5 w-5 text-muted-foreground" />
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Paid</Badge>
              <p className="text-sm text-muted-foreground mt-2">All clear for this semester</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Notifications</h2>
                <Bell className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                {mockNotifications.map((notif) => (
                  <div key={notif.id} className="flex gap-3 pb-4 border-b last:border-0">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm">{notif.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="grid gap-3">
                <Button variant="outline" className="justify-start" data-testid="button-view-timetable">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Exam Timetable
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-check-results">
                  <FileText className="h-4 w-4 mr-2" />
                  Check Results
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-download-hall-ticket">
                  <Download className="h-4 w-4 mr-2" />
                  Download Hall Ticket
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-view-assignments">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Assignments
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
