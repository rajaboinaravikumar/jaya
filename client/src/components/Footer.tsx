import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">J</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-none">JITS</div>
                <div className="text-xs text-muted-foreground">Excellence in Education</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Jain Institute of Technology & Science - Shaping future leaders through quality education and innovation.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="button-social-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-youtube">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-social-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Admissions", "Academics", "Placements", "Alumni", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 College Road, Technology Park, Bangalore - 560001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 80 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@jits.edu.in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates about admissions, events, and news.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" data-testid="input-newsletter-email" />
              <Button data-testid="button-newsletter-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 JITS - Jain Institute of Technology & Science. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">
              <a className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-foreground transition-colors" data-testid="link-terms">Terms of Service</a>
            </Link>
            <Link href="/sitemap">
              <a className="hover:text-foreground transition-colors" data-testid="link-sitemap">Sitemap</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
