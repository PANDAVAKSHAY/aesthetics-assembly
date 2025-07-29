import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const achievements = [
    { icon: Award, label: "10+ Years Experience", value: "Industry Expertise" },
    { icon: Users, label: "1000+ Happy Clients", value: "Satisfied Customers" },
    { icon: Clock, label: "24-48 Hour", value: "Quick Turnaround" },
    { icon: CheckCircle, label: "500+ Projects", value: "Successfully Completed" }
  ];

  const features = [
    "Photorealistic 3D jewelry rendering",
    "Custom jewelry design and modeling",
    "High-resolution output for marketing",
    "Multiple format deliverables",
    "Competitive pricing and fast delivery",
    "Experienced professional team"
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
              About <span className="luxury-text-gradient">Metalonyx</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional jewelry rendering services in India provided by experienced professionals
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="luxury-text-gradient">Story</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Premium jewelry rendering services in India are provided by experienced professionals 
                  who specialize in creating highly realistic and detailed images of jewelry. These services 
                  are essential for businesses in the jewelry industry, including manufacturers, retailers, 
                  and designers, to showcase their products in the best possible light, especially for 
                  eCommerce platforms, catalogs, and digital shops.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team uses cutting-edge 3D modeling and rendering technology to transform your jewelry 
                  concepts into stunning photorealistic visualizations that captivate your audience and 
                  drive sales.
                </p>
              </div>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button variant="luxury" size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats and Achievements */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 elegant-shadow hover:glow-effect smooth-transition"
                    >
                      <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center mb-4 mx-auto">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-lg luxury-text-gradient mb-1">
                          {achievement.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {achievement.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Process Overview */}
              <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-bold mb-4 luxury-text-gradient">Our Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                    <span className="text-muted-foreground">Concept & Brief</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
                    <span className="text-muted-foreground">3D Modeling & CAD</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                    <span className="text-muted-foreground">Rendering & Review</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">4</div>
                    <span className="text-muted-foreground">Final Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Jewelry Rendering Services Work */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How Jewelry Rendering <span className="luxury-text-gradient">Services Work</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Jewelry rendering services are a digital process used to create photorealistic images or animations 
              of jewelry designs before they are physically produced. The process begins with the client providing 
              design input, which can include sketches, reference images, or detailed specifications such as the type 
              of metal, gemstone cuts, and overall dimensions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Using this information, a 3D artist builds a detailed computer aided design (CAD) model of the jewelry piece. 
              Once the 3D model is created, it is shared with the client for review. Any necessary revisions are made based 
              on the client's feedback. After final approval, the model is rendered using specialized software that simulates 
              realistic lighting, materials, and textures.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              This results in high quality, lifelike images or videos that showcase the jewelry as it would appear in real life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work <span className="luxury-text-gradient">With Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your jewelry design and rendering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button variant="luxury" size="lg" className="group">
                Our Services
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

export default About;