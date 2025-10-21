import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Grid3X3, List, Upload, Image, X, Download } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Sample gallery images - replace with your uploaded images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "public/jayalogo/JITS_goutami.jpg",
      category: "campus",
      title: "Main Campus Building",
      description: "Beautiful view of our main academic block"
    },
    {
      id: 2,
      src: "public/jayalogo/JITS_jose_mary.jpg",
      category: "campus",
      title: "Library",
      description: "State-of-the-art digital library"
    },
    {
      id: 3,
      src: "/gallery/events-1.jpg",
      category: "events",
      title: "Tech Fest 2024",
      description: "Annual technical festival"
    },
    {
      id: 4,
      src: "/gallery/events-2.jpg",
      category: "events",
      title: "Cultural Night",
      description: "Students performing cultural programs"
    },
     
     
  ];

  const categories: Category[] = [
    { id: "all", name: "All Photos", count: galleryImages.length },
    { id: "campus", name: "Campus", count: galleryImages.filter(img => img.category === "campus").length },
    { id: "events", name: "Events", count: galleryImages.filter(img => img.category === "events").length },
    { id: "sports", name: "Sports", count: galleryImages.filter(img => img.category === "sports").length },
    { id: "labs", name: "Labs", count: galleryImages.filter(img => img.category === "labs").length },
    { id: "cultural", name: "Cultural", count: galleryImages.filter(img => img.category === "cultural").length },
    { id: "hostels", name: "Hostels", count: galleryImages.filter(img => img.category === "hostels").length }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Handle file upload logic here
      console.log("Files to upload:", files);
      // You can implement your upload logic here
      alert(`${files.length} file(s) selected for upload`);
    }
  };

  const handleDownload = (image: GalleryImage) => {
    // Implement download logic here
    console.log("Downloading:", image.title);
    // For actual download, you would create a download link
    alert(`Downloading ${image.title}`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
           
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Campus <span className="text-blue-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant life at Jayamukhi Institute through our photo collection
          </p>
        </div>

        {/* Controls Section */}
        

        {/* Gallery Grid */}
        <div className={
          viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "grid grid-cols-1 gap-6"
        }>
          {filteredImages.map((image: GalleryImage) => (
            <Card 
              key={image.id} 
              className="bg-white border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Image className="h-16 w-16 text-gray-400" />
                </div>
                {/* Actual image: <img src={image.src} alt={image.title} className="w-full h-full object-cover" /> */}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full capitalize">
                    {image.category}
                  </span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8"
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      handleDownload(image);
                    }}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <Image className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No photos found</h3>
            <p className="text-gray-600">Try changing your search or filter criteria</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              <div className="relative">
                {/* Modal Image */}
                <div className="max-h-96 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center p-8">
                  <Image className="h-24 w-24 text-gray-400" />
                  {/* Actual image: <img src={selectedImage.src} alt={selectedImage.title} className="max-h-96 w-auto object-contain" /> */}
                </div>
                
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 h-10 w-10 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Image Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleDownload(selectedImage)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button (Optional) */}
        {filteredImages.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Load More Photos
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}