import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, MessageCircle, Calendar, Award, Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Community = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            organization: formData.organization,
            subject: `Community Interest: ${formData.interest}`,
            message: formData.message,
            category: "Community"
          }
        ]);

      if (error) throw error;

      toast({
        title: "Welcome to the community!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });

      setFormData({
        name: "",
        email: "",
        organization: "",
        interest: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              APAS Labs Community
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Join Our Community
              </span>
              <br />
              <span className="text-foreground">
                of Infrastructure Innovators
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Connect with public infrastructure professionals, researchers, and innovators 
              working together to build AI-ready communities.
            </p>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Professional Network",
                description: "Connect with infrastructure professionals across public and private sectors."
              },
              {
                icon: MessageCircle,
                title: "Discussion Forums",
                description: "Engage in meaningful discussions about AI applications in infrastructure."
              },
              {
                icon: Calendar,
                title: "Events & Workshops",
                description: "Join regular events, workshops, and training sessions."
              },
              {
                icon: Award,
                title: "Recognition Program",
                description: "Get recognized for your contributions to the infrastructure community."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-satoshi">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about yourself and how you'd like to contribute to the future of infrastructure.
            </p>
          </div>

          <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-satoshi text-center">Community Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="organization" className="text-white">Organization</Label>
                  <Input
                    id="organization"
                    placeholder="Your organization or company"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="text-white">Primary Interest *</Label>
                  <Select onValueChange={(value) => handleInputChange('interest', value)} required>
                    <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white focus:border-primary">
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="Water & Wastewater">Water & Wastewater Management</SelectItem>
                      <SelectItem value="AI & Technology">AI & Technology Innovation</SelectItem>
                      <SelectItem value="Policy & Governance">Policy & Governance</SelectItem>
                      <SelectItem value="Research & Development">Research & Development</SelectItem>
                      <SelectItem value="Community Advocacy">Community Advocacy</SelectItem>
                      <SelectItem value="Funding & Investment">Funding & Investment</SelectItem>
                      <SelectItem value="Professional Networking">Professional Networking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Tell Us About Yourself</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your background, expertise, and how you'd like to contribute to our community..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-glow text-white group"
                  disabled={isLoading}
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  {isLoading ? "Joining..." : "Join Community"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-satoshi text-center">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Our Values</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Collaborative problem-solving</li>
                    <li>• Transparent knowledge sharing</li>
                    <li>• Inclusive innovation</li>
                    <li>• Sustainable solutions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">What We Expect</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Professional respectful dialogue</li>
                    <li>• Evidence-based discussions</li>
                    <li>• Active community engagement</li>
                    <li>• Commitment to positive impact</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Community;