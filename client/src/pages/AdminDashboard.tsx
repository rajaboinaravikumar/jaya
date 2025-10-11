import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, GraduationCap, Building, FileText, Calendar, 
  TrendingUp, Bell, Settings, Loader2 
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['/api/admin/stats'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center" data-testid="loading-admin-dashboard">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading admin dashboard...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const statsData = stats as any;
  
  const overviewStats = [
    {
      title: "Total Students",
      value: statsData?.totalStudents || "1,245",
      icon: GraduationCap,
      change: "+12%",
      trend: "up"
    },
    {
      title: "Faculty Members",
      value: statsData?.totalFaculty || "85",
      icon: Users,
      change: "+3",
      trend: "up"
    },
    {
      title: "Departments",
      value: statsData?.totalDepartments || "12",
      icon: Building,
      change: "0%",
      trend: "neutral"
    },
    {
      title: "Active Events",
      value: statsData?.activeEvents || "8",
      icon: Calendar,
      change: "+2",
      trend: "up"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2" data-testid="text-page-title">Admin Dashboard</h1>
              <p className="text-muted-foreground" data-testid="text-page-subtitle">Manage and monitor institutional operations</p>
            </div>
            <Button variant="outline" data-testid="button-settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {overviewStats.map((stat, index) => (
              <Card key={index} className="p-6" data-testid={`card-stat-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                  {stat.trend === "up" && (
                    <Badge variant="default" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change}
                    </Badge>
                  )}
                </div>
                <div className="text-3xl font-bold mb-1" data-testid={`text-stat-value-${index}`}>{stat.value}</div>
                <p className="text-sm text-muted-foreground" data-testid={`text-stat-title-${index}`}>{stat.title}</p>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="students" className="space-y-6">
            <TabsList data-testid="tabs-admin">
              <TabsTrigger value="students" data-testid="tab-students">Students</TabsTrigger>
              <TabsTrigger value="faculty" data-testid="tab-faculty">Faculty</TabsTrigger>
              <TabsTrigger value="admissions" data-testid="tab-admissions">Admissions</TabsTrigger>
              <TabsTrigger value="events" data-testid="tab-events">Events</TabsTrigger>
              <TabsTrigger value="announcements" data-testid="tab-announcements">Announcements</TabsTrigger>
            </TabsList>

            <TabsContent value="students" className="space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4" data-testid="text-students-title">Student Management</h2>
                <p className="text-muted-foreground mb-6">
                  Manage student records, enrollment, and academic performance.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start" data-testid="button-view-students">
                    <Users className="h-4 w-4 mr-2" />
                    View All Students
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-add-student">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Add New Student
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-student-reports">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Reports
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="faculty" className="space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4" data-testid="text-faculty-title">Faculty Management</h2>
                <p className="text-muted-foreground mb-6">
                  Manage faculty profiles, assignments, and performance metrics.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start" data-testid="button-view-faculty">
                    <Users className="h-4 w-4 mr-2" />
                    View All Faculty
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-add-faculty">
                    <Users className="h-4 w-4 mr-2" />
                    Add New Faculty
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-faculty-reports">
                    <FileText className="h-4 w-4 mr-2" />
                    Performance Reports
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="admissions" className="space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4" data-testid="text-admissions-title">Admission Applications</h2>
                <p className="text-muted-foreground mb-6">
                  Review and process admission applications from prospective students.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start" data-testid="button-pending-applications">
                    <FileText className="h-4 w-4 mr-2" />
                    Pending Applications
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-approved-applications">
                    <FileText className="h-4 w-4 mr-2" />
                    Approved Applications
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-admission-reports">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Admission Analytics
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4" data-testid="text-events-title">Events & Activities</h2>
                <p className="text-muted-foreground mb-6">
                  Create and manage campus events, workshops, and activities.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start" data-testid="button-upcoming-events">
                    <Calendar className="h-4 w-4 mr-2" />
                    Upcoming Events
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-create-event">
                    <Calendar className="h-4 w-4 mr-2" />
                    Create New Event
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-event-registrations">
                    <Users className="h-4 w-4 mr-2" />
                    View Registrations
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="announcements" className="space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4" data-testid="text-announcements-title">Announcements & Notifications</h2>
                <p className="text-muted-foreground mb-6">
                  Create and broadcast important announcements to students and faculty.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start" data-testid="button-active-announcements">
                    <Bell className="h-4 w-4 mr-2" />
                    Active Announcements
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-create-announcement">
                    <Bell className="h-4 w-4 mr-2" />
                    Create Announcement
                  </Button>
                  <Button variant="outline" className="justify-start" data-testid="button-notification-history">
                    <FileText className="h-4 w-4 mr-2" />
                    Notification History
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
