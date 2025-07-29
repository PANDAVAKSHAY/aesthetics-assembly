import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "gold", label: "Gold" },
    { id: "rose", label: "Rose Gold" },
    { id: "white", label: "White Gold" },
    { id: "rendering", label: "Rendering" }
  ];

  const projects = [
    {
      id: 1,
      title: "Gold Diamond Ring Collection",
      category: "gold",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop&crop=center",
      description: "Photorealistic rendering of classic gold diamond rings with intricate detailing.",
      tags: ["3D Rendering", "Gold", "Diamond"]
    },
    {
      id: 2,
      title: "Rose Gold Engagement Set",
      category: "rose", 
      image: "https://images.unsplash.com/photo-1506629905607-d91bd7632de8?w=500&h=500&fit=crop&crop=center",
      description: "Elegant rose gold engagement ring and wedding band set with rose gold finish.",
      tags: ["Rose Gold", "Engagement", "Set"]
    },
    {
      id: 3,
      title: "White Gold Premium Collection",
      category: "white",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop&crop=center", 
      description: "Contemporary white gold jewelry pieces with geometric design and brushed finish.",
      tags: ["White Gold", "Contemporary", "Premium"]
    },
    {
      id: 4,
      title: "Custom Gold Bracelet",
      category: "gold",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop&crop=center",
      description: "Custom designed gold bracelet with perfectly aligned stones in gold setting.",
      tags: ["Gold", "Custom", "Bracelet"]
    },
    {
      id: 5,
      title: "Rose Gold Vintage Collection",
      category: "rose",
      image: "https://images.unsplash.com/photo-1584302179602-e4419e015c9f?w=500&h=500&fit=crop&crop=center",
      description: "Art deco inspired vintage rose gold designs with intricate metalwork.",
      tags: ["Rose Gold", "Vintage", "Collection"]
    },
    {
      id: 6,
      title: "White Gold Statement Pieces",
      category: "white",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop&crop=center",
      description: "Bold statement jewelry featuring white gold and precious gemstones.",
      tags: ["White Gold", "Statement", "Gemstones"]
    },
    {
      id: 7,
      title: "3D Rendering Showcase",
      category: "rendering",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=500&fit=crop&crop=center",
      description: "High-quality 3D rendered jewelry showcasing photorealistic materials and lighting.",
      tags: ["3D Rendering", "Showcase", "Professional"]
    },
    {
      id: 8,
      title: "CAD Design Collection",
      category: "rendering",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=500&fit=crop&crop=center",
      description: "Technical CAD designs converted to stunning photorealistic renderings.",
      tags: ["CAD", "Technical", "Design"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Our <span className="luxury-text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of stunning jewelry renderings and designs created for clients worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Rendering Images Description */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Rendering <span className="luxury-text-gradient">Images</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are your go to for transforming jewelry concepts into reality. Our expertise lies in top quality 
              Jewelry CAD Rendering services, ensuring precision and creativity in our metal tones, diamonds & 
              gemstone colors. Immerse yourself in our stunning Jewelry Renders, digitally crafted to capture 
              every little detail creating life like visuals. The state of the art technology used to create 
              these visualizations helps in bringing designs to life.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter and Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "luxury" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="group"
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 elegant-shadow hover:glow-effect smooth-transition hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-luxury-gradient opacity-0 group-hover:opacity-20 smooth-transition"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 smooth-transition">
                    <Button variant="luxury" size="icon" className="w-10 h-10">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              Load More Projects
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Jewelry Collection Categories */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="luxury-text-gradient">Collection</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Wearing jewelry is a way to express yourself without a word.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rings", count: "15+ Designs", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop" },
              { name: "Earrings", count: "12+ Designs", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop" },
              { name: "Bracelets", count: "8+ Designs", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop" },
              { name: "Necklaces", count: "20+ Designs", image: "https://images.unsplash.com/photo-1506629905607-d91bd7632de8?w=400&h=300&fit=crop" },
              { name: "Diamonds", count: "25+ Designs", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop" },
              { name: "Custom", count: "50+ Designs", image: "https://images.unsplash.com/photo-1584302179602-e4419e015c9f?w=400&h=300&fit=crop" }
            ].map((category, index) => (
              <div key={index} className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 elegant-shadow hover:glow-effect smooth-transition hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-luxury-gradient opacity-0 group-hover:opacity-30 smooth-transition"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Inspired by Our <span className="luxury-text-gradient">Work?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your jewelry vision to life? Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="luxury" size="lg" className="group">
                Start Your Project
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;