import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { isUnauthorizedError } from "@/lib/authUtils";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function Events() {
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: events = [] } = useQuery({
    queryKey: ["/api/events"],
  });

  const registerMutation = useMutation({
    mutationFn: async (eventId: string) => {
      await apiRequest("/api/events/register", "POST", { eventId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      toast({
        title: "Success",
        description: "Successfully registered for the event!",
      });
    },
    onError: (error: Error) => {
      if (isUnauthorizedError(error)) {
        toast({
          title: "Unauthorized",
          description: "You are logged out. Logging in again...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: error.message || "Failed to register for event",
        variant: "destructive",
      });
    },
  });

  const categories = ["all", "cultural", "workshop", "seminar", "sports"];
  const filteredEvents = selectedCategory === "all" 
    ? events 
    : events.filter((e: any) => e.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Activities</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover and register for upcoming workshops, seminars, cultural events, and more
            </p>
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                  data-testid={`button-category-${category}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event: any) => (
                <Card key={event.id} className="overflow-hidden hover-elevate transition-all" data-testid={`card-event-${event.id}`}>
                  <div className={`h-32 bg-gradient-to-r ${
                    event.category === 'cultural' ? 'from-blue-500 to-blue-600' :
                    event.category === 'workshop' ? 'from-emerald-500 to-emerald-600' :
                    event.category === 'seminar' ? 'from-purple-500 to-purple-600' :
                    'from-amber-500 to-amber-600'
                  } relative`}>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white dark:bg-card text-foreground capitalize">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-4">{event.title}</h3>
                    {event.description && (
                      <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                    )}
                    <div className="space-y-2 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.eventDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.startTime} - {event.endTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      {event.maxRegistrations && (
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{event.currentRegistrations || 0} / {event.maxRegistrations} registered</span>
                        </div>
                      )}
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => registerMutation.mutate(event.id)}
                      disabled={!isAuthenticated || registerMutation.isPending || 
                        (event.maxRegistrations && event.currentRegistrations >= event.maxRegistrations)}
                      data-testid={`button-register-${event.id}`}
                    >
                      {!isAuthenticated ? "Login to Register" : 
                       registerMutation.isPending ? "Registering..." : 
                       (event.maxRegistrations && event.currentRegistrations >= event.maxRegistrations) ? "Event Full" :
                       "Register Now"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found in this category</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
