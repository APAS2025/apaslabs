import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Users, FileText, Briefcase, MessageCircle, Camera, Building } from "lucide-react";

const ContactSection = () => {
  console.log("ContactSection: Component rendering");
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("General Inquiry");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: ""
  });

  useEffect(() => {
    console.log("ContactSection: Component mounted, setting up intersection observer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("ContactSection: Element intersecting, adding animation");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    console.log("ContactSection: Found elements to observe:", elements?.length);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: "General Inquiry", icon: MessageCircle },
    { name: "Research Collaboration", icon: FileText },
    { name: "Partnership", icon: Briefcase },
    { name: "Join Community", icon: Users },
    { name: "Media & Press", icon: Camera },
    { name: "Careers", icon: Building }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, category: selectedCategory });
    // Add form submission logic here
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-6 bg-gradient-to-b from-slate-900/50 via-background-deep to-background-deep relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl font-bold font-satoshi mb-6">
            Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-space">
            Ready to collaborate, have questions about our research, or want to join our community? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-on-scroll opacity-0" style={{ animationDelay: "0.2s" }}>
            <Card className="relative bg-white/5 border-white/10 backdrop-blur-md p-8">
              <CardHeader className="px-0 pt-0">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              
              <CardContent className="px-0 pb-0 space-y-6">
                {/* Category Selection */}
                <div>
                  <Label className="text-white mb-3 block">What's this about?</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`p-3 rounded-lg border transition-all duration-300 flex flex-col items-center text-center space-y-2 ${
                            selectedCategory === category.name
                              ? "bg-primary/20 border-primary text-white"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-xs font-medium">{category.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-white">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief subject line"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-glow text-white group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Links */}
          <div className="space-y-6 animate-on-scroll opacity-0" style={{ animationDelay: "0.4s" }}>
            {/* Contact Information */}
            <Card className="relative bg-white/5 border-white/10 backdrop-blur-md p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-muted-foreground text-sm mb-6">Multiple ways to reach our team</p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:contact@apaslabs.org" className="text-primary hover:text-primary-glow transition-colors">
                      contact@apaslabs.org
                    </a>
                    <p className="text-xs text-muted-foreground">General inquiries and information</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+15551234567" className="text-primary hover:text-primary-glow transition-colors">
                      +1 (555) 123-4567
                    </a>
                    <p className="text-xs text-muted-foreground">Business hours: 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-primary">123 Research Drive, Innovation District</p>
                    <p className="text-xs text-muted-foreground">Miami, FL 33101, United States</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="relative bg-white/5 border-white/10 backdrop-blur-md p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <p className="text-muted-foreground text-sm mb-6">Direct access to our platforms</p>
              
              <div className="space-y-3">
                <a href="#community" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Join Circle Community</span>
                </a>
                <a href="#research" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group">
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Research Collaboration</span>
                </a>
                <a href="#partnership" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Partnership Opportunities</span>
                </a>
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="relative bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 backdrop-blur-md p-6">
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for the latest research updates and announcements.
              </p>
              
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  value={formData.newsletter}
                  onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.value }))}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary"
                />
                <Button size="sm" className="bg-primary hover:bg-primary-glow shrink-0">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;