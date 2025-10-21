import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Award, Users, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-300 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Award className="h-4 w-4" />
                NAAC A+ Grade
              </div>
              <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <BookOpen className="h-4 w-4" />
                Autonomous
              </div>
              <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="h-4 w-4" />
                Since 2001
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                WELCOME TO{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  JAYAMUKHI
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Institute of Technological Sciences
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Sponsored by the <span className="font-semibold text-blue-600">Jayamukhi Educational Society</span>, 
                the Jayamukhi Institute of Technological Sciences came into being in 2001 to provide quality and 
                contemporary education with social relevance in the engineering faculty.
              </p>
              <p>
                With an ultimate vision to maintain global standards in higher learning and research. The Institute 
                has the approval of AICTE and recognized by the Government of Andhra Pradesh.
              </p>
              <p className="font-semibold text-gray-700">
                Permanently affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad
              </p>
              <p>
                The Institute is spread upon <span className="font-bold text-green-600">40 acres of green pastures in Narsampet</span>, 
                providing an ideal environment for academic excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">40</div>
                <div className="text-sm text-gray-600">Acres Campus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">200+</div>
                <div className="text-sm text-gray-600">Faculty</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
<div className="relative">
  {/* Main College Image */}
  <Card className="overflow-hidden shadow-2xl border-0">
    <div className="aspect-[4/3] relative">
      {/* Your College Image */}
      <img 
        src="public/jayalogo/OIP.webp" 
        alt="Jayamukhi Institute of Technological Sciences Campus"
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = 'none';
          const fallback = document.createElement('div');
          fallback.className = 'w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center';
          fallback.innerHTML = `
            <div class="text-center p-8">
              <div class="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 shadow-lg">
                JITS
              </div>
              <p class="text-gray-600 text-lg font-semibold">Campus View</p>
              <p class="text-gray-500 text-sm mt-2">Beautiful 40-acre campus in Narsampet</p>
            </div>
          `;
          e.currentTarget.parentNode.appendChild(fallback);
        }}
      />
    </div>
  </Card>

  {/* Floating Cards */}
  <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg border z-10">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <Users className="h-6 w-6 text-green-600" />
      </div>
      <div>
        <div className="font-bold text-gray-900">AICTE</div>
        <div className="text-sm text-gray-600">Approved</div>
      </div>
    </div>
  </div>

  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border z-10">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        <Award className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <div className="font-bold text-gray-900">JNTU</div>
        <div className="text-sm text-gray-600">Affiliated</div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
}