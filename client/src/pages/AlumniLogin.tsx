import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function AlumniLogin() {
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    // Redirect to Replit Auth
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-12 bg-muted/30">
        <Card className="w-full max-w-md p-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">Alumni Portal</h1>
          <p className="text-center text-muted-foreground mb-8">Sign in with your Replit account</p>
          
          <Button onClick={handleLogin} className="w-full" data-testid="button-alumni-login-submit">
            Sign In with Replit
          </Button>
          
          <div className="mt-6 text-center space-y-2">
            <div className="flex gap-4 justify-center text-sm">
              <button onClick={() => setLocation("/student/login")} className="text-muted-foreground hover:text-foreground" data-testid="link-student-login">
                Student Login
              </button>
              <button onClick={() => setLocation("/faculty/login")} className="text-muted-foreground hover:text-foreground" data-testid="link-faculty-login">
                Faculty Login
              </button>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
