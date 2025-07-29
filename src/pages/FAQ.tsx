import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Users, Settings, FileText, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: FileText,
      faqs: [
        {
          question: "What is jewelry rendering?",
          answer: "Jewelry rendering is a digital process used to create photorealistic images or animations of jewelry designs before they are physically produced. It helps visualize the final product with realistic materials, lighting, and textures."
        },
        {
          question: "What services do you offer?",
          answer: "We offer 3D jewelry rendering, custom jewelry design, CAD design services, video animation, 360 interactive animations, and photo retouching services."
        },
        {
          question: "How experienced is your team?",
          answer: "Our team has over 10 years of experience in the jewelry industry, specializing in 3D modeling, CAD design, and photorealistic rendering."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: DollarSign,
      faqs: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing starts from ₹1,500 for basic photo retouching, ₹2,500 for 3D rendering, ₹3,000 for CAD design, and up to ₹6,000 for interactive animations. Contact us for detailed quotes."
        },
        {
          question: "Do you offer package deals?",
          answer: "Yes, we offer discounted package deals for multiple services or bulk orders. Contact us to discuss your specific requirements."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, UPI payments, and online payments. 50% advance payment is required to start the project."
        }
      ]
    },
    {
      title: "Timeline & Delivery",
      icon: Clock,
      faqs: [
        {
          question: "How long does rendering take?",
          answer: "Standard projects are delivered within 24-48 hours. Complex projects may take 3-5 days depending on the requirements."
        },
        {
          question: "Do you offer rush delivery?",
          answer: "Yes, we offer same-day delivery for urgent projects with additional charges. Contact us for rush order availability."
        },
        {
          question: "What file formats do you deliver?",
          answer: "We deliver high-resolution JPG, PNG images, and can provide 3D model files in various formats including OBJ, STL, and 3DM."
        }
      ]
    },
    {
      title: "Process & Quality",
      icon: Settings,
      faqs: [
        {
          question: "What do I need to provide to start?",
          answer: "You just need to send a photo or sketch of your jewelry design. Include any specific requirements for materials, colors, or angles."
        },
        {
          question: "Do you offer revisions?",
          answer: "Yes, we offer unlimited corrections and revisions without additional cost until you're completely satisfied with the result."
        },
        {
          question: "How do you ensure quality?",
          answer: "We have a dedicated quality assurance team that reviews every project before delivery. We use professional software and follow industry standards."
        }
      ]
    },
    {
      title: "Support & Communication",
      icon: Headphones,
      faqs: [
        {
          question: "Do you provide 24/7 support?",
          answer: "Yes, we provide 24/7 client support to answer your questions and provide updates on your projects."
        },
        {
          question: "How do you communicate project updates?",
          answer: "We provide regular updates via email and WhatsApp, including preview images and progress reports."
        },
        {
          question: "Can I speak with the designer directly?",
          answer: "Yes, you can communicate directly with our designers for technical discussions and specific requirements."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: Users,
      faqs: [
        {
          question: "What software do you use?",
          answer: "We use industry-standard software including Rhino 3D, KeyShot, V-Ray, and other professional 3D modeling and rendering tools."
        },
        {
          question: "Can you work with CAD files?",
          answer: "Yes, we can work with existing CAD files in various formats and can also create new CAD models from scratch."
        },
        {
          question: "Do you create 360-degree animations?",
          answer: "Yes, we create both 360-degree video animations and interactive 360-degree viewers for web and mobile platforms."
        }
      ]
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
              Frequently Asked <span className="luxury-text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our jewelry rendering and design services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="space-y-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold luxury-text-gradient">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <Card 
                        key={faqIndex}
                        className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow hover:glow-effect smooth-transition"
                      >
                        <CardHeader>
                          <CardTitle className="text-lg text-foreground">
                            {faq.question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Still Have <span className="luxury-text-gradient">Questions?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert team is here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow hover:glow-effect smooth-transition text-center p-6">
              <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground mb-4">Get instant answers to your questions</p>
              <p className="text-primary font-medium">+91 9898205078</p>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow hover:glow-effect smooth-transition text-center p-6">
              <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">Send us your detailed questions</p>
              <p className="text-primary font-medium text-sm">metalonyxjewellrydesign@gmail.com</p>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow hover:glow-effect smooth-transition text-center p-6">
              <div className="w-12 h-12 bg-luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
              <p className="text-muted-foreground mb-4">Schedule a call with our team</p>
              <Link to="/contact">
                <Button variant="outline" size="sm">
                  Book Call
                </Button>
              </Link>
            </Card>
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

export default FAQ;