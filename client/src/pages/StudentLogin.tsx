import { useState } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";

export default function StudentLogin() {
  const [, setLocation] = useLocation();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student login attempted:", credentials);
    // todo: remove mock functionality
    setLocation("/student/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-12 bg-muted/30">
        <Card className="w-full max-w-md p-8">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">Student Portal</h1>
          <p className="text-center text-muted-foreground mb-8">Sign in to access your dashboard</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username">Student ID / Roll Number</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your student ID"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                data-testid="input-student-username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                data-testid="input-student-password"
              />
            </div>
            <Button type="submit" className="w-full" data-testid="button-student-login-submit">
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center space-y-2">
            <button className="text-sm text-primary hover:underline" data-testid="link-forgot-password">
              Forgot Password?
            </button>
            <div className="flex gap-4 justify-center text-sm">
              <button onClick={() => setLocation("/faculty/login")} className="text-muted-foreground hover:text-foreground" data-testid="link-faculty-login">
                Faculty Login
              </button>
              <button onClick={() => setLocation("/alumni/login")} className="text-muted-foreground hover:text-foreground" data-testid="link-alumni-login">
                Alumni Login
              </button>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
