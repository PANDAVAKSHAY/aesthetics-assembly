import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "metalonyxjewellrydesign@gmail.com",
      description: "Send us your project details"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9898205078 / +91 9898205178",
      description: "Speak with our experts"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "2nd Floor, krushna jivan nager soc-5 Nr Singanpor Circle, Singanpor Rd, Katargam, Surat, Gujarat 395004",
      description: "Visit our design studio"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9AM - 6PM",
      description: "Ready to assist you"
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
              Contact <span className="luxury-text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your jewelry designs to life? Contact our expert team for a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Start Your <span className="luxury-text-gradient">Project</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input placeholder="John" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="bg-background/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 bg-background/50 border border-input rounded-md text-foreground">
                      <option>3D Jewelry Rendering</option>
                      <option>Custom Jewelry Design</option>
                      <option>CAD Design Services</option>
                      <option>Video Animation</option>
                      <option>360 Interactive Animation</option>
                      <option>Photo Retouching</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your jewelry design project..."
                      className="bg-background/50 min-h-32"
                      maxLength={180}
                    />
                    <div className="text-right text-xs text-muted-foreground mt-1">0 / 180</div>
                  </div>
                  
                  <Button variant="luxury" size="lg" className="w-full group">
                    Submit
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow hover:glow-effect smooth-transition p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                          <p className="text-primary font-medium text-sm mb-1">{info.content}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* FAQ Section */}
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Quick <span className="luxury-text-gradient">FAQ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">How long does rendering take?</h4>
                    <p className="text-muted-foreground text-sm">
                      Typically 24-48 hours for standard projects, depending on complexity.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">What file formats do you deliver?</h4>
                    <p className="text-muted-foreground text-sm">
                      High-resolution JPG, PNG, and 3D model files in various formats.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Do you offer revisions?</h4>
                    <p className="text-muted-foreground text-sm">
                      Yes, we offer unlimited corrections without additional cost.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">What's your pricing?</h4>
                    <p className="text-muted-foreground text-sm">
                      Starting from ₹1,500 for basic services. Contact us for detailed quotes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Visit Our <span className="luxury-text-gradient">Studio</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in Surat, Gujarat - India's Diamond City
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 elegant-shadow">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Studio Location</h3>
                <p className="text-muted-foreground max-w-md">
                  2nd Floor, krushna jivan nager soc-5 Nr Singanpor Circle, 
                  Singanpor Rd, Katargam, Surat, Gujarat 395004
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;