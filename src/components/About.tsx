import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Award, label: "5+ Years Experience", value: "Industry Expertise" },
    { icon: Users, label: "50+ Happy Clients", value: "Satisfied Customers" },
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
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="luxury-text-gradient">Metalonyx</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Premium jewelry rendering services in India are provided by experienced professionals 
                who specialize in creating highly realistic and detailed images of jewelry. These services 
                are essential for businesses in the jewelry industry, including manufacturers, retailers, 
                and designers, to showcase their products in the best possible light.
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

            <Button variant="luxury" size="lg" className="group">
              Learn More About Us
            </Button>
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
                  <span className="text-muted-foreground">3D Modeling</span>
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
  );
};

export default About;