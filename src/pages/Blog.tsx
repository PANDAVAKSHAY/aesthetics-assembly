import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of 3D Jewelry Rendering in E-commerce",
      excerpt: "Discover how 3D jewelry rendering is revolutionizing the way customers shop for jewelry online, providing immersive experiences that drive sales.",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop",
      category: "Technology",
      author: "Metalonyx Team",
      date: "January 25, 2024",
      readTime: "5 min read",
      tags: ["3D Rendering", "E-commerce", "Technology"]
    },
    {
      id: 2,
      title: "CAD vs Traditional Jewelry Design: Which is Better?",
      excerpt: "Exploring the advantages and challenges of Computer-Aided Design (CAD) compared to traditional hand-drawing methods in jewelry design.",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=400&fit=crop",
      category: "Design",
      author: "Design Expert",
      date: "January 22, 2024",
      readTime: "7 min read",
      tags: ["CAD Design", "Traditional Design", "Jewelry"]
    },
    {
      id: 3,
      title: "How to Choose the Right Rendering Style for Your Jewelry",
      excerpt: "A comprehensive guide to selecting the perfect rendering style that matches your brand identity and appeals to your target audience.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop",
      category: "Tips & Guides",
      author: "Rendering Specialist",
      date: "January 20, 2024",
      readTime: "6 min read",
      tags: ["Rendering", "Style Guide", "Branding"]
    },
    {
      id: 4,
      title: "The Art of Photorealistic Gemstone Rendering",
      excerpt: "Learn the secrets behind creating stunning, photorealistic gemstone renders that capture every facet and sparkle with precision.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop",
      category: "Techniques",
      author: "3D Artist",
      date: "January 18, 2024",
      readTime: "8 min read",
      tags: ["Gemstones", "Photorealistic", "Rendering Techniques"]
    },
    {
      id: 5,
      title: "Jewelry Photography vs 3D Rendering: Cost Analysis",
      excerpt: "Compare the costs, benefits, and ROI of traditional jewelry photography versus modern 3D rendering for your business needs.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      category: "Business",
      author: "Business Analyst",
      date: "January 15, 2024",
      readTime: "10 min read",
      tags: ["Photography", "Cost Analysis", "Business"]
    },
    {
      id: 6,
      title: "Creating 360° Interactive Jewelry Experiences",
      excerpt: "Step into the world of interactive jewelry visualization and learn how 360° experiences are changing customer engagement.",
      image: "https://images.unsplash.com/photo-1506629905607-d91bd7632de8?w=600&h=400&fit=crop",
      category: "Innovation",
      author: "UX Designer",
      date: "January 12, 2024",
      readTime: "9 min read",
      tags: ["360 Animation", "Interactive", "User Experience"]
    }
  ];

  const categories = [
    "All Posts",
    "Technology",
    "Design", 
    "Tips & Guides",
    "Techniques",
    "Business",
    "Innovation"
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

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
              Blog & <span className="luxury-text-gradient">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, techniques, and insights in jewelry design and 3D rendering
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="luxury-text-gradient">Article</span>
            </h2>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow hover:glow-effect smooth-transition overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover hover:scale-105 smooth-transition"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge variant="outline">{featuredPost.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="luxury" className="w-fit group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Recent <span className="luxury-text-gradient">Posts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card 
                key={post.id}
                className="group bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow hover:glow-effect smooth-transition hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-luxury-gradient opacity-0 group-hover:opacity-20 smooth-transition"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 smooth-transition">
                    <Button variant="luxury" size="icon" className="w-8 h-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary smooth-transition line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary group">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              Load More Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 elegant-shadow p-8 max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Stay <span className="luxury-text-gradient">Updated</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Subscribe to our newsletter and get the latest insights delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-background/50 border border-input rounded-lg text-foreground placeholder:text-muted-foreground"
                />
                <Button variant="luxury" size="lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;