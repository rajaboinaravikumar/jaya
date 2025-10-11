import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, FileText, Download, DollarSign, BookOpen, Bell, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";

export default function StudentDashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/student/dashboard'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center" data-testid="loading-dashboard">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center" data-testid="error-dashboard">
            <p className="text-destructive mb-4">Failed to load dashboard data</p>
            <p className="text-sm text-muted-foreground">Please try refreshing the page</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const student = data?.student as any;
  const notifications = (data?.notifications || []) as any[];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-student-name">Welcome back, {student?.name || 'Student'}!</h1>
            <p className="text-muted-foreground" data-testid="text-student-details">
              {student?.rollNumber} • {student?.program} • {student?.semester ? `Semester ${student.semester}` : ''}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6" data-testid="card-attendance">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Attendance</h3>
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2" data-testid="text-attendance">{student?.attendance || 0}%</div>
              <Progress value={student?.attendance || 0} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                {(student?.attendance || 0) >= 75 ? 'Good standing' : 'Below requirement'}
              </p>
            </Card>

            <Card className="p-6" data-testid="card-cgpa">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">CGPA</h3>
                <BookOpen className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-2" data-testid="text-cgpa">{student?.cgpa || 'N/A'}</div>
              <p className="text-sm text-muted-foreground">
                {student?.semester ? `Semester ${student.semester}` : 'Current semester'}
              </p>
            </Card>

            <Card className="p-6" data-testid="card-fee-status">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Fee Status</h3>
                <DollarSign className="h-5 w-5 text-muted-foreground" />
              </div>
              <Badge 
                variant={student?.feesPaid ? 'default' : 'destructive'} 
                className={student?.feesPaid ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : ''}
                data-testid="badge-fee-status"
              >
                {student?.feesPaid ? 'Paid' : 'Pending'}
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                {student?.feesPaid ? 'All clear for this semester' : 'Please clear pending fees'}
              </p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Notifications</h2>
                <Bell className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                {notifications.length > 0 ? (
                  notifications.slice(0, 5).map((notif: any) => (
                    <div key={notif.id} className="flex gap-3 pb-4 border-b last:border-0" data-testid={`notification-${notif.id}`}>
                      <div className={`h-2 w-2 rounded-full mt-2 flex-shrink-0 ${notif.isRead ? 'bg-muted' : 'bg-primary'}`} />
                      <div className="flex-1">
                        <p className="text-sm">{notif.message || notif.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notif.createdAt ? formatDistanceToNow(new Date(notif.createdAt), { addSuffix: true }) : 'Recently'}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">No new notifications</p>
                )}
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
