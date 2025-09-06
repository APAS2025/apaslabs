import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building2, Users, Target, TrendingUp, Database, Shield, Network } from "lucide-react";

const Partnerships = () => {
  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    projectDescription: "",
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Partnership inquiry submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              Strategic Partnerships
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                AI-Ready Infrastructure
              </span>
              <br />
              <span className="text-foreground">
                Strategic Partnerships
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              APAS Labs, in strategic partnership with APAS.AI, extends transformative relationships to businesses and governments. 
              We're building the technical stacks, frameworks, and collaborative networks that make public infrastructure professionals AI-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
                Why Partner with 
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"> APAS Labs</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We cannot depend on others to become AI-ready. APAS Labs provides the mentoring, coaching, networks, 
                and technical frameworks that transform centuries of guild knowledge into participative leadership and 
                collaborative capacity for public infrastructure innovation.
              </p>
              <div className="space-y-4">
                {[
                  "Strategic partnership with APAS.AI for cutting-edge technical stacks",
                  "Proven frameworks for resiliency, metrics, and transparency",
                  "Collaborative ecosystem spanning academia, government, and industry",
                  "Data governance solutions tailored for public infrastructure",
                  "Participative leadership models that drive measurable outcomes"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-satoshi">Our Ecosystem</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, label: "Government Agencies", color: "text-blue-400" },
                    { icon: Users, label: "Academia & Students", color: "text-green-400" },
                    { icon: Target, label: "Consultants", color: "text-purple-400" },
                    { icon: Network, label: "Technology Vendors", color: "text-orange-400" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 rounded-lg border border-glass-border bg-background/20">
                      <item.icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                      <p className="text-sm font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic collaboration opportunities designed to deliver measurable ROI and transformative outcomes 
              in public infrastructure resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Data & Analytics Partnerships",
                description: "Joint development of data governance frameworks, predictive models, and transparency dashboards for public infrastructure projects.",
                outcomes: ["Enhanced decision-making", "Risk mitigation", "Performance optimization"]
              },
              {
                icon: Shield,
                title: "Resilience Solutions",
                description: "Collaborative resilience planning, climate adaptation strategies, and infrastructure hardening programs with measurable metrics.",
                outcomes: ["Reduced vulnerability", "Improved preparedness", "Cost-effective resilience"]
              },
              {
                icon: TrendingUp,
                title: "Technical Stack Development",
                description: "Co-development of AI-ready technical frameworks, guild knowledge systems, and scalable infrastructure solutions.",
                outcomes: ["Accelerated innovation", "Scalable solutions", "Competitive advantage"]
              }
            ].map((opportunity, index) => (
              <Card key={index} className="bg-gradient-glass border-glass-border backdrop-blur-xl hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <opportunity.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-satoshi">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{opportunity.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Outcomes:</p>
                    {opportunity.outcomes.map((outcome, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
              Connect with Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to explore partnership opportunities? Submit your inquiry and our team will connect with you 
              to discuss how we can create measurable value together.
            </p>
          </div>

          <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                      Organization *
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your organization name"
                      required
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
                      Contact Name *
                    </label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@organization.com"
                      required
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="bg-background/50 border-glass-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-medium text-foreground mb-2">
                    Partnership Interest *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-background/50 border border-glass-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select partnership type</option>
                    <option value="data-analytics">Data & Analytics Partnership</option>
                    <option value="resilience">Resilience Solutions</option>
                    <option value="technical-stack">Technical Stack Development</option>
                    <option value="consulting">Consulting & Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    placeholder="Describe your project, objectives, and how you envision partnering with APAS Labs..."
                    rows={5}
                    required
                    className="bg-background/50 border-glass-border"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                    Project Timeline
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    placeholder="e.g., Q2 2024, 6 months, Immediate"
                    className="bg-background/50 border-glass-border"
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                    Submit Partnership Inquiry
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Our team will review your inquiry and respond within 48 hours.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
            Ready to Build AI-Ready Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the ecosystem of forward-thinking organizations transforming public infrastructure 
            with AI-driven resilience, transparency, and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Download Partnership Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;