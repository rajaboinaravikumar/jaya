import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Calendar, DollarSign, Users, FileText } from "lucide-react";

export default function AlumniDashboard() {
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
    queryKey: ["/api/alumni/dashboard"],
    enabled: isAuthenticated && user?.role === 'alumni',
  });

  if (authLoading || !isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (user?.role !== 'alumni') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Access Denied: Alumni access only</p>
      </div>
    );
  }

  const alumni = dashboardData?.alumni;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {alumni?.name || user.firstName || 'Alumni'}!</h1>
            <p className="text-muted-foreground">
              {alumni?.course} • {alumni?.department} • Class of {alumni?.graduationYear}
            </p>
            {alumni?.currentCompany && (
              <p className="text-muted-foreground">
                {alumni.currentPosition} at {alumni.currentCompany}
              </p>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Upcoming Alumni Events</h2>
              <div className="space-y-4">
                <div className="flex gap-3 pb-4 border-b">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="font-medium">Annual Alumni Meet 2026</h3>
                    <p className="text-sm text-muted-foreground">March 15, 2026</p>
                  </div>
                  <Button size="sm" variant="outline" data-testid="button-register-alumni-meet">Register</Button>
                </div>
                <div className="flex gap-3 pb-4 border-b">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="font-medium">Industry Connect Workshop</h3>
                    <p className="text-sm text-muted-foreground">April 20, 2026</p>
                  </div>
                  <Button size="sm" variant="outline" data-testid="button-register-workshop">Register</Button>
                </div>
                <div className="flex gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="font-medium">Homecoming Day</h3>
                    <p className="text-sm text-muted-foreground">December 10, 2026</p>
                  </div>
                  <Button size="sm" variant="outline" data-testid="button-register-homecoming">Register</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="grid gap-3">
                <Button variant="outline" className="justify-start" data-testid="button-update-profile">
                  <Users className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-view-directory">
                  <FileText className="h-4 w-4 mr-2" />
                  Alumni Directory
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-donate">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Make a Donation
                </Button>
                <Button variant="outline" className="justify-start" data-testid="button-mentorship">
                  <Users className="h-4 w-4 mr-2" />
                  Mentorship Program
                </Button>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Latest Alumni News</h2>
            <div className="space-y-4">
              <div className="flex gap-3 pb-4 border-b">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm">JITS alumni association raises ₹50 lakhs for scholarship fund</p>
                  <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
                </div>
              </div>
              <div className="flex gap-3 pb-4 border-b">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm">Alumni startup successfully exits with $10M valuation</p>
                  <p className="text-xs text-muted-foreground mt-1">1 month ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm">New mentorship program launched for current students</p>
                  <p className="text-xs text-muted-foreground mt-1">2 months ago</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
