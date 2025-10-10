import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Users, FileText, Bell } from "lucide-react";

export default function FacultyDashboard() {
  const { user, isLoading: authLoading, isAuthenticated } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [isAuthenticated, authLoading, toast]);

  const { data: dashboardData } = useQuery({
    queryKey: ["/api/faculty/dashboard"],
    enabled: isAuthenticated && user?.role === 'faculty',
  });

  if (authLoading || !isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (user?.role !== 'faculty') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Access Denied: Faculty access only</p>
      </div>
    );
  }

  const faculty = dashboardData?.faculty;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {faculty?.name || user.firstName || 'Faculty'}!</h1>
            <p className="text-muted-foreground">{faculty?.employeeId} • {faculty?.department} • {faculty?.designation}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Courses</h3>
                <BookOpen className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">6</div>
              <p className="text-sm text-muted-foreground">Active courses this semester</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Students</h3>
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">180</div>
              <p className="text-sm text-muted-foreground">Enrolled students</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Assignments</h3>
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2">12</div>
              <p className="text-sm text-muted-foreground">Pending evaluations</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="grid gap-3">
                <Button variant="outline" className="justify-start" data-testid="button-upload-grades">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Grades
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-create-assignment">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Create Assignment
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-mark-attendance">
                  <Users className="h-4 w-4 mr-2" />
                  Mark Attendance
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-send-notice">
                  <Bell className="h-4 w-4 mr-2" />
                  Send Notice
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex gap-3 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">Assignment submitted by 45 students</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3 pb-4 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">New query from student in Database Systems</p>
                    <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">Semester exam schedule published</p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
