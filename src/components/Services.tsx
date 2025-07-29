import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import renderingIcon from "@/assets/rendering-icon.jpg";
import designIcon from "@/assets/design-icon.jpg";
import consultationIcon from "@/assets/consultation-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "3D Jewelry Rendering",
      description: "Photorealistic 3D renderings that showcase your jewelry designs with stunning detail and accuracy.",
      image: renderingIcon,
      features: ["High-resolution renders", "Multiple viewing angles", "Various material finishes", "Quick turnaround"]
    },
    {
      title: "Custom Jewelry Design",
      description: "Bespoke jewelry design services from concept to creation, tailored to your unique vision.",
      image: designIcon,
      features: ["Concept development", "Technical drawings", "3D modeling", "Design iterations"]
    },
    {
      title: "Design Consultation",
      description: "Expert consultation services to help you bring your jewelry concepts to life with professional guidance.",
      image: consultationIcon,
      features: ["Design consultation", "Market analysis", "Technical feasibility", "Production guidance"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="luxury-text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional jewelry rendering and design services delivered by experienced specialists in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 smooth-transition elegant-shadow hover:glow-effect bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-luxury-gradient opacity-0 group-hover:opacity-20 smooth-transition"></div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              Ready to bring your <span className="luxury-text-gradient">vision to life?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get in touch with our expert team to discuss your jewelry design and rendering needs.
            </p>
            <Button variant="luxury" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;