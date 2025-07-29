import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "rings", label: "Rings" },
    { id: "necklaces", label: "Necklaces" },
    { id: "earrings", label: "Earrings" },
    { id: "bracelets", label: "Bracelets" }
  ];

  const projects = [
    {
      id: 1,
      title: "Diamond Engagement Ring",
      category: "rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop&crop=center",
      description: "Photorealistic rendering of a classic solitaire diamond engagement ring with platinum band.",
      tags: ["3D Rendering", "Diamond", "Platinum"]
    },
    {
      id: 2,
      title: "Pearl Necklace Set",
      category: "necklaces", 
      image: "https://images.unsplash.com/photo-1506629905607-d91bd7632de8?w=500&h=500&fit=crop&crop=center",
      description: "Elegant pearl necklace with matching earrings, showcasing lustrous pearl finish.",
      tags: ["Pearl", "Set", "Elegant"]
    },
    {
      id: 3,
      title: "Gold Drop Earrings",
      category: "earrings",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop&crop=center", 
      description: "Contemporary gold drop earrings with geometric design and brushed finish.",
      tags: ["Gold", "Contemporary", "Geometric"]
    },
    {
      id: 4,
      title: "Tennis Bracelet",
      category: "bracelets",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop&crop=center",
      description: "Classic diamond tennis bracelet with perfectly aligned stones in white gold setting.",
      tags: ["Diamond", "Tennis", "White Gold"]
    },
    {
      id: 5,
      title: "Vintage Ring Collection",
      category: "rings",
      image: "https://images.unsplash.com/photo-1584302179602-e4419e015c9f?w=500&h=500&fit=crop&crop=center",
      description: "Art deco inspired vintage ring designs with intricate metalwork and gemstone settings.",
      tags: ["Vintage", "Art Deco", "Collection"]
    },
    {
      id: 6,
      title: "Statement Necklace",
      category: "necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop&crop=center",
      description: "Bold statement necklace featuring mixed metals and precious gemstones.",
      tags: ["Statement", "Mixed Metals", "Gemstones"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="luxury-text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of stunning jewelry renderings and designs created for clients worldwide
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
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
  );
};

export default Portfolio;