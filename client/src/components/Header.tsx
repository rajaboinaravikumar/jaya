import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Navigation structure
  const navigation = [
    { name: "Home", href: "/" },
    { 
      name: "About JITS", 
      href: "/about",
      submenu: [
        { name: "About JITS", href: "/about/jits" },
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Route Map", href: "/about/route-map" },
        { name: "Mile Stones", href: "/about/milestones" },
        { name: "Service Rules", href: "/about/service-rules" },
        { name: "Society Members", href: "/about/society-members" },
        { name: "Board Of Governors", href: "/about/governors" },
        { name: "College Academic Council", href: "/about/academic-council" },
        { name: "Chairman Message", href: "/about/chairman" },
        { name: "Secretary Message", href: "/about/secretary" },
        { name: "Joint Secretary Message", href: "/about/joint-secretary" },
        { name: "Principal Message", href: "/about/principal" },
        { name: "Strategic Plan", href: "/about/strategic-plan" }
      ]
    },
    { 
      name: "IDEA Lab", 
      href: "/idea-lab",
      submenu: [
        { name: "School of Engineering", href: "/schools/engineering" },
        { name: "School of Agriculture", href: "/schools/agriculture" },
        { name: "School of Healthcare", href: "/schools/healthcare" },
        { name: "School of Management", href: "/schools/management" },
        { name: "School of Sciences", href: "/schools/sciences" }
      ]
    },
    { 
      name: "Academics", 
      href: "/academics",
      submenu: [
        { name: "Academic Calendars", href: "/academics/calendars" },
        { name: "Regulations & Syllabus", href: "/academics/regulations" },
        { name: "B.Tech", href: "/academics/btech" },
        { name: "M.Tech", href: "/academics/mtech" },
        { name: "MBA", href: "/academics/mba" },
        { name: "Departments", href: "/academics/departments" },
        { name: "Faculty", href: "/academics/faculty" },
        { name: "Course Structure", href: "/academics/course-structure" }
      ]
    },
    { 
      name: "Examinations", 
      href: "/examinations",
      submenu: [
        { name: "Exam Notifications", href: "/examinations/notifications" },
        { name: "Results", href: "/examinations/results" },
        { name: "Schedules", href: "/examinations/schedules" },
        { name: "Hall Tickets", href: "/examinations/hall-tickets" },
        { name: "Downloads", href: "/examinations/downloads" }
      ]
    },
    { 
      name: "Facilities", 
      href: "/facilities",
      submenu: [
        { name: "Hostels", href: "/facilities/hostels" },
        { name: "Library", href: "/facilities/library" },
        { name: "Laboratories", href: "/facilities/laboratories" },
        { name: "Sports", href: "/facilities/sports" },
        { name: "Transport", href: "/facilities/transport" },
        { name: "Virtual Tour", href: "/facilities/virtual-tour" }
      ]
    },
    { 
      name: "Admissions", 
      href: "/admissions",
      submenu: [
        { name: "Apply Online", href: "/admissions/apply" },
        { name: "Fee Structure", href: "/admissions/fee-structure" },
        { name: "Scholarships", href: "/admissions/scholarships" },
        { name: "Eligibility", href: "/admissions/eligibility" }
      ]
    },
    { name: "Placements", href: "/placements" },
    { name: "Alumni", href: "/alumni" },
    { name: "NAAC", href: "/naac" },
    { name: "Contact", href: "/contact" }
  ];

  const handleNavigation = (href: string) => {
    setLocation(href);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg border-b">
      {/* Top Bar - All Three Login Buttons */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Institute Name - Left */}
          <div className="text-left">
            <div className="text-lg font-bold tracking-tight">JAYAMUKHI INSTITUTE OF TECHNOLOGICAL SCIENCES</div>
            <div className="text-xs opacity-90 mt-1">Autonomous | NAAC A+ Grade</div>
          </div>

          {/* All Three Login Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 text-xs h-8 px-3 font-medium hidden sm:flex"
              onClick={() => handleNavigation("/student-login")}
            >
              <User className="h-3 w-3 mr-1" />
              Student
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 text-xs h-8 px-3 font-medium hidden sm:flex"
              onClick={() => handleNavigation("/faculty-login")}
            >
              <User className="h-3 w-3 mr-1" />
              Faculty
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 text-xs h-8 px-3 font-medium hidden sm:flex"
              onClick={() => handleNavigation("/alumni")}
            >
              <User className="h-3 w-3 mr-1" />
              Alumni
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Single Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => handleNavigation("/")}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="h-12 w-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  JITS
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !item.submenu && handleNavigation(item.href)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      activeDropdown === item.name
                        ? "text-white bg-red-600 shadow-md"
                        : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <span className="ml-1 text-xs">▾</span>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && item.submenu && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl border rounded-lg py-2 z-50 animate-in fade-in">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavigation(subItem.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Apply Now Button */}
              <Button 
                className="ml-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 text-sm shadow-lg"
                onClick={() => handleNavigation("/admissions/apply")}
              >
                Apply Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-red-600 hover:bg-red-50"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-inner animate-in slide-in-from-top">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* All Three Login Buttons - Mobile */}
            <div className="flex flex-col gap-2 mb-4">
              <Button 
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 justify-start"
                onClick={() => handleNavigation("/student-login")}
              >
                <User className="h-4 w-4 mr-2" />
                Student Login
              </Button>
              <Button 
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 justify-start"
                onClick={() => handleNavigation("/faculty-login")}
              >
                <User className="h-4 w-4 mr-2" />
                Faculty Login
              </Button>
              <Button 
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 justify-start"
                onClick={() => handleNavigation("/alumni")}
              >
                <User className="h-4 w-4 mr-2" />
                Alumni Login
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      if (item.submenu) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      } else {
                        handleNavigation(item.href);
                      }
                    }}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                  >
                    {item.name}
                    {item.submenu && (
                      <span className={`transform transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}>
                        ▾
                      </span>
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {activeDropdown === item.name && item.submenu && (
                    <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-lg p-2">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => handleNavigation(subItem.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-red-100 hover:text-red-600 rounded transition-colors"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Apply Now Button - Mobile */}
            <div className="mt-6 pt-4 border-t">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-base shadow-lg"
                onClick={() => handleNavigation("/admissions/apply")}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}