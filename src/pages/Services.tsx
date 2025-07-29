import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import renderingIcon from "@/assets/rendering-icon.jpg";
import designIcon from "@/assets/design-icon.jpg";
import consultationIcon from "@/assets/consultation-icon.jpg";

const Services = () => {
  const services = [
    {
      title: "3D Jewelry Rendering",
      description: "Photorealistic 3D renderings that showcase your jewelry designs with stunning detail and accuracy.",
      image: renderingIcon,
      features: ["High-resolution renders", "Multiple viewing angles", "Various material finishes", "Quick turnaround"],
      price: "Starting from ₹2,500"
    },
    {
      title: "Custom Jewelry Design",
      description: "Bespoke jewelry design services from concept to creation, tailored to your unique vision.",
      image: designIcon,
      features: ["Concept development", "Technical drawings", "3D modeling", "Design iterations"],
      price: "Starting from ₹5,000"
    },
    {
      title: "CAD Design Services",
      description: "Professional CAD modeling services for jewelry manufacturing and production.",
      image: consultationIcon,
      features: ["Technical CAD files", "Manufacturing ready", "Precise measurements", "Industry standards"],
      price: "Starting from ₹3,000"
    },
    {
      title: "Video Animation",
      description: "Transform 3D jewelry designs into 360 animations, providing a holistic view.",
      image: renderingIcon,
      features: ["360° rotation videos", "High-quality animation", "Multiple formats", "Custom duration"],
      price: "Starting from ₹4,000"
    },
    {
      title: "360 Interactive Animations",
      description: "Dive into a magical experience with our interactive animations, bringing your design to life.",
      image: designIcon,
      features: ["Interactive viewing", "Web compatible", "Mobile optimized", "Custom controls"],
      price: "Starting from ₹6,000"
    },
    {
      title: "Photo Retouching",
      description: "Professional photo editing and retouching services for existing jewelry photography.",
      image: consultationIcon,
      features: ["Color correction", "Background removal", "Enhancement", "Multiple formats"],
      price: "Starting from ₹1,500"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Give Your Design or Image",
      description: "You just need to send a photo of your jewelry. It's as simple as sending a picture.",
    },
    {
      step: "2", 
      title: "We Will Create CAD",
      description: "Our first step is to create a CAD of your jewelry which is 100% the same as your jewelry.",
    },
    {
      step: "3",
      title: "Get Rendering Images",
      description: "Second Step Now it's time to give a live look to your jewelry, according to your specifications.",
    }
  ];

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
              Our <span className="luxury-text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional jewelry rendering and design services delivered by experienced specialists
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How It <span className="luxury-text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple 3-step process to get your jewelry rendered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto luxury-shadow">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 luxury-text-gradient">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Service We <span className="luxury-text-gradient">Offer</span>
            </h2>
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
                  
                  <div className="text-lg font-bold luxury-text-gradient mb-4">
                    {service.price}
                  </div>
                  
                  <Link to="/contact">
                    <Button variant="outline" className="w-full group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Creative E-Commerce! Best <span className="luxury-text-gradient">Diamond Jewelry Rendering</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Metalonyx Rendering Services, is the most trusted company that provides diamond jewelry rendering, 
              photo retouching, image editing, CAD design, 3D product video, 360 turntable animation, 
              visualization and model retouch services Simply upload photos, write your requirements, 
              and we'll take care of the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⭐", title: "10+ Years Experience", desc: "More than 10 Years of experience! Expertise in the jewelry Industry" },
              { icon: "🎧", title: "24/7 Client Support", desc: "We make sure your questions are Answered in 24/7." },
              { icon: "⚡", title: "24 Hours Quick Turnaround", desc: "Get your images guaranteed deliver within 24 hours!" },
              { icon: "💰", title: "Budget Friendly", desc: "High quality photos and videos at competitive prices." },
              { icon: "🔄", title: "Unlimited Correction", desc: "Instant correction support without additional cost." },
              { icon: "✅", title: "Best Quality Assurance", desc: "High quality images and videos by professional experts" }
            ].map((feature, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 elegant-shadow hover:glow-effect smooth-transition text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 luxury-text-gradient">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your <span className="luxury-text-gradient">Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your jewelry design and rendering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="luxury" size="lg" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;