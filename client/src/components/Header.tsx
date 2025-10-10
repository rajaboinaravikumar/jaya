import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const megaMenuItems = [
    {
      title: "About Us",
      items: [
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Governing Body", href: "/about/governing-body" },
        { name: "Accreditation", href: "/about/accreditation" },
      ],
    },
    {
      title: "Academics",
      items: [
        { name: "Undergraduate Programs", href: "/academics/undergraduate" },
        { name: "Postgraduate Programs", href: "/academics/postgraduate" },
        { name: "Departments", href: "/academics/departments" },
        { name: "Syllabus", href: "/academics/syllabus" },
      ],
    },
    {
      title: "Admissions",
      items: [
        { name: "Apply Online", href: "/admissions/apply" },
        { name: "Eligibility", href: "/admissions/eligibility" },
        { name: "Fees", href: "/admissions/fees" },
        { name: "Admission Tracker", href: "/admissions/tracker" },
      ],
    },
    {
      title: "Examinations",
      items: [
        { name: "Results", href: "/examinations/results" },
        { name: "Timetable", href: "/examinations/timetable" },
        { name: "Hall Tickets", href: "/examinations/hall-tickets" },
      ],
    },
    {
      title: "Placements",
      items: [
        { name: "Placement Records", href: "/placements/records" },
        { name: "Companies", href: "/placements/companies" },
        { name: "Testimonials", href: "/placements/testimonials" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="link-home">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">J</span>
              </div>
              <div className="hidden md:block">
                <div className="font-heading font-bold text-lg leading-none">JITS</div>
                <div className="text-xs text-muted-foreground">Excellence in Education</div>
              </div>
            </a>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {megaMenuItems.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    <NavigationMenuTrigger data-testid={`button-menu-${menu.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        {menu.items.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link href={item.href}>
                                <a className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover-elevate active-elevate-2" data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                  <div className="text-sm font-medium leading-none">{item.name}</div>
                                </a>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-2 duration-200">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64"
                autoFocus
                data-testid="input-search"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(false)}
                data-testid="button-close-search"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex"
                data-testid="button-open-search"
              >
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Button variant="default" size="sm" className="hidden md:flex" asChild data-testid="button-student-login">
                <Link href="/student/login">Student Login</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden"
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-4 space-y-4">
            {megaMenuItems.map((menu) => (
              <div key={menu.title}>
                <div className="font-semibold mb-2">{menu.title}</div>
                <div className="space-y-1 ml-4">
                  {menu.items.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Button variant="default" className="w-full" asChild data-testid="button-mobile-student-login">
              <Link href="/student/login">Student Login</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
