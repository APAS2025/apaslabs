import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  FileText, 
  Handshake, 
  Users, 
  Newspaper, 
  Briefcase,
  Send,
  ExternalLink
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

export const GetInTouchSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("General Inquiry");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const categories = [
    { id: "General Inquiry", label: "General Inquiry", icon: MessageCircle },
    { id: "Research Collaboration", label: "Research Collaboration", icon: FileText },
    { id: "Partnership", label: "Partnership", icon: Handshake },
    { id: "Join Community", label: "Join Community", icon: Users },
    { id: "Media & Press", label: "Media & Press", icon: Newspaper },
    { id: "Careers", label: "Careers", icon: Briefcase }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          category: selectedCategory,
          message: formData.message.trim()
        });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setSelectedCategory("General Inquiry");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email: newsletterEmail.trim() });

      if (error) throw error;

      toast({
        title: "Subscribed!",
        description: "You'll receive our latest updates.",
      });

      setNewsletterEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-32 bg-background-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background-deep" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/8" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, have questions about our research, or want to join our community? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      What's this about?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.id}
                            type="button"
                            onClick={() => setSelectedCategory(category.id)}
                            className={`p-3 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 text-sm ${
                              selectedCategory === category.id
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border bg-card/30 text-muted-foreground hover:border-primary/50'
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="text-xs">{category.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name
                      </label>
                      <Input
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="bg-card/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-card/30"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      placeholder="Brief subject line"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-card/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="bg-card/30 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Info & Quick Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Multiple ways to reach our team
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:contact@apaslabs.org" className="text-primary hover:underline">
                      contact@apaslabs.org
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      General inquiries and information
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Business hours: 9 AM - 6 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-primary">123 Research Drive, Innovation District</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Miami, FL 33101, United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl">Quick Links</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Direct access to our platforms
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link 
                  to="/community" 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    Join Circle Community
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link 
                  to="/partnerships" 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    Research Collaboration
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
                <Link 
                  to="/partnerships" 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    Partnership Opportunities
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-xl">Stay Updated</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for the latest research updates and announcements.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="bg-card/30"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Subscribe
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Get updates on research and new lab developments
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};