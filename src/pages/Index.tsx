import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-jewelry.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="luxury-text-gradient">3D Jewelry</span>
                  <br />
                  <span className="text-foreground">Designing</span>
                  <br />
                  <span className="luxury-text-gradient">& Rendering</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Premium jewelry rendering services in India offered by experienced professionals. 
                  Transform your concepts into stunning photorealistic visualizations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button variant="hero" size="lg" className="group">
                    View Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="group">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Portfolio
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold luxury-text-gradient">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold luxury-text-gradient">24hr</div>
                  <div className="text-sm text-muted-foreground">Quick Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold luxury-text-gradient">24/7</div>
                  <div className="text-sm text-muted-foreground">Client Support</div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Luxury Diamond Ring"
                  className="w-full h-auto rounded-2xl luxury-shadow animate-float"
                />
                <div className="absolute inset-0 bg-luxury-gradient opacity-20 rounded-2xl"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How <span className="luxury-text-gradient">It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple 3-step process to get your jewelry rendered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-bold">Give Your Design</h3>
              <p className="text-muted-foreground">Send us a photo of your jewelry. It's as simple as sending a picture.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-bold">We Create CAD</h3>
              <p className="text-muted-foreground">Our first step is to create a CAD of your jewelry which is 100% the same as your design.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto luxury-shadow">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-bold">Get Rendering</h3>
              <p className="text-muted-foreground">Now it's time to bring your jewelry to life, according to your specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why <span className="luxury-text-gradient">Choose Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⭐", title: "10+ Years Experience", desc: "Expertise in the jewelry industry" },
              { icon: "🕐", title: "24/7 Client Support", desc: "We make sure your questions are answered 24/7" },
              { icon: "⚡", title: "24 Hours Quick Turnaround", desc: "Get your images guaranteed delivered within 24 hours" },
              { icon: "💰", title: "Budget Friendly", desc: "High quality photos and videos at competitive prices" },
              { icon: "🔄", title: "Unlimited Correction", desc: "Instant correction support without additional cost" },
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What <span className="luxury-text-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jonny", text: "It's good to start early when buying jewelry pieces. They are classic, timeless, and something that you pass on - it's a memory, it's an heirloom." },
              { name: "Ayushi", text: "I want to design jewelry for girls and guys... I'ma spread it out, but I'ma design, probably when I'm just designing furniture and buildings." },
              { name: "Himanshu", text: "I've stood around wearing half a million dollars' worth of jewelry, thinking how much more beautiful the designs could be with proper rendering." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 elegant-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold luxury-text-gradient">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="luxury-text-gradient">Jewelry Ideas?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your jewelry design and rendering needs.
          </p>
          <Link to="/contact">
            <Button variant="luxury" size="lg" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
