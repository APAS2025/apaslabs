import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin,
  Users,
  FileText,
  Handshake,
  MessageCircle,
  Newspaper,
  Briefcase,
  ArrowRight,
  DollarSign,
  Building,
  BookOpen,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const [selectedInquiry, setSelectedInquiry] = useState("General Inquiry");
  const [email, setEmail] = useState("");

  const inquiryTypes = [
    { id: "General Inquiry", label: "General Inquiry", icon: MessageCircle },
    { id: "Research Collaboration", label: "Research Collaboration", icon: FileText },
    { id: "Partnership", label: "Partnership", icon: Handshake },
    { id: "Join Community", label: "Join Community", icon: Users },
    { id: "Media & Press", label: "Media & Press", icon: Newspaper },
    { id: "Careers", label: "Careers", icon: Briefcase }
  ];

  return (
    <main className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-deep to-secondary/10" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                APAS Labs
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                The Operating System for Public Works Infrastructure
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Orakles: The Living Knowledge System for Infrastructure
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Public works is breaking under fragmentation, inefficiency, and wasted dollars. 
                Orakles fixes it by turning scattered knowledge into a connected, AI-powered system 
                that vendors, consultants, and governments can trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/lexicon">Explore Orakles <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Subscribe Now
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Free for students and academia. Subscription for vendors, consultants, and governments.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Why Infrastructure Feels Broken
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              If you work in public works, you already know the frustrations:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-destructive/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-destructive">Fragmented Language</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Everyone uses different definitions. "Resilience," "digital twin," "compliance"—ten people, 
                  ten meanings. Misalignment creates wasted meetings, slow adoption, and failed projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <Building className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-destructive">Disconnected Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your manuals, cut-sheets, and case studies sit on isolated websites or PDFs. 
                  They rarely reach the decision-makers who need them most, when they need them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-destructive">Lost ROI & Accountability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dollars are spent on new technology, yet vendors struggle to prove ROI. 
                  Cities can't connect spending to outcomes. This weakens budgets and erodes trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/20 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-destructive mb-4" />
                <CardTitle className="text-destructive">Training That Doesn't Stick</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professionals learn in silos—through scattered courses, conferences, and manuals 
                  that aren't connected to daily practice or real-time decisions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-destructive font-semibold">
              These gaps aren't minor—they are costing billions and delaying critical upgrades 
              in water, wastewater, and stormwater infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* The Orakles Solution Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              From Lexicon to Living System
            </h2>
            <p className="text-xl text-primary font-semibold max-w-3xl mx-auto">
              Orakles was built to fix those exact gaps. It began as a digital lexicon, 
              but evolved into something far greater: a living infrastructure knowledge system 
              that connects language, vendors, ROI, and learning into one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Unifies Language → Action</h3>
                  <p className="text-muted-foreground">
                    Orakles standardizes key infrastructure terms—but it doesn't stop there. 
                    Each term becomes a hub, connected to vendor solutions, case studies, ROI proof, 
                    and regulatory context. The result: clarity that accelerates decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Turns Vendors Into Partners, Not PDFs</h3>
                  <p className="text-muted-foreground">
                    Instead of burying manuals and cut-sheets on your own site, vendors showcase 
                    their products inside Orakles, directly tied to the concepts buyers are searching. 
                    This transforms visibility into measurable leads.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Restores ROI & Trust</h3>
                  <p className="text-muted-foreground">
                    Orakles links solutions to real-world metrics: case studies, cost-benefit analysis, 
                    compliance outcomes, and user feedback. Vendors finally get a stage to prove value; 
                    cities get transparency to defend budgets.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Transforms Training Into Daily Practice</h3>
                  <p className="text-muted-foreground">
                    Through a built-in LMS powered by Articulate, Orakles hosts micro-learning, 
                    long-form courses, and personalized learning pathways. Professionals learn 
                    in the same environment where they work, creating stickiness that conferences can't deliver.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link to="/lexicon">Join Orakles Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Biscayne Bay GPT Section */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🌊</div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              The Voice of Biscayne Bay
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Biscayne Bay is collapsing under pollution, saltwater intrusion, and wasted budgets. 
              Decades of reports have failed to deliver clarity or accountability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Biscayne Bay GPT changes that.
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Powered by <strong>Droobi</strong>, the Bay's AI mascot, it brings transparency, 
                accountability, and real-time engagement to one of America's most fragile ecosystems.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Living GPT trained on historical and live sensor data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Citizen voice portal: anyone can query conditions or submit feedback</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Dashboards that tie funding to measurable results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Tools for regulators, businesses, and communities to act before the next crisis</span>
                </div>
              </div>

              <Button size="lg" variant="outline" asChild>
                <Link to="/biscayne-bay-gpt">Explore Biscayne Bay GPT <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              <Card className="relative bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Real-Time Bay Intelligence</CardTitle>
                  <CardDescription>
                    Ask Droobi anything about Biscayne Bay's health, funding, or environmental status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm font-medium">"What's the current water quality near Key Biscayne?"</p>
                    </div>
                    <div className="p-4 bg-secondary/10 rounded-lg">
                      <p className="text-sm font-medium">"Show me how restoration funding has been allocated this year"</p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <p className="text-sm font-medium">"What are the biggest threats to seagrass beds right now?"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Labs Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Four Living Labs. One Mission: Reinvent Public Works.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practitioner-led GPTs capturing expert knowledge before it disappears
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Biscayne Bay GPT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Humanizing and safeguarding Biscayne Bay with data + Droobi
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Orakles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The flagship infrastructure knowledge and learning platform
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Droobi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The citizen-facing AI agent bridging people, ecosystems, and accountability
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Execution That Proves Itself
            </h2>
            <p className="text-xl text-muted-foreground">
              We don't sell hype—we deliver systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">$9B</div>
              <p className="text-lg text-muted-foreground">Public works programs overseen</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">35</div>
              <p className="text-lg text-muted-foreground">Cities - Regional infrastructure strategy delivered across South Florida</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">Global</div>
              <p className="text-lg text-muted-foreground">Leadership - Featured at Singapore Water Conference and Rockefeller's 100 Resilient Cities</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">End-to-End Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From SCADA to finance, building systems where none existed
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Resilience as Core Principle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every initiative designed with governance, accountability, and measurable ROI
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/partnerships">Partner with APAS Labs <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why APAS Labs Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Fixing the Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Aging pipes, fragmented data, vanishing ROI, and weak accountability aren't isolated problems. 
              They're system failures.
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-2xl font-bold text-primary mb-8">
              APAS Labs exists to reset the operating system for public works infrastructure—with AI and transparency at the core.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-background/80 backdrop-blur-sm text-center">
              <CardHeader>
                <Building className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">For Vendors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Finally connect solutions to the exact problems decision-makers are searching
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm text-center">
              <CardHeader>
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">For Consultants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Elevate expertise by embedding knowledge where it's most needed
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm text-center">
              <CardHeader>
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">For Governments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tie spending to measurable outcomes and restore public trust
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground italic border-l-4 border-primary pl-6 max-w-4xl mx-auto">
              "Infrastructure is the backbone of communities. Orakles is the backbone of infrastructure."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-background-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate, have questions about our research, or want to join our community? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">What's this about?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <button
                            key={type.id}
                            onClick={() => setSelectedInquiry(type.id)}
                            className={`p-3 rounded-lg border text-sm font-medium transition-colors flex flex-col items-center space-y-2 ${
                              selectedInquiry === type.id
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-background/50 text-muted-foreground border-border hover:border-primary/50'
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="text-xs text-center leading-tight">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                      <Input placeholder="Your full name" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                      <Input placeholder="your.email@example.com" className="bg-background/50" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                    <Input placeholder="Brief subject line" className="bg-background/50" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      className="bg-background/50 min-h-32"
                    />
                  </div>

                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Quick Links */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>Multiple ways to reach our team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">contact@apaslabs.org</p>
                      <p className="text-xs text-muted-foreground">General inquiries and information</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Business hours: 9 AM - 6 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">123 Research Drive, Innovation District</p>
                      <p className="text-xs text-muted-foreground">Miami, FL 33101, United States</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                  <CardDescription>Direct access to our platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link 
                    to="/community" 
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Join Circle Community</span>
                  </Link>
                  <Link 
                    to="/partnerships" 
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    <span className="text-sm">Research Collaboration</span>
                  </Link>
                  <Link 
                    to="/partnerships" 
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Handshake className="h-4 w-4" />
                    <span className="text-sm">Partnership Opportunities</span>
                  </Link>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Stay Updated</CardTitle>
                  <CardDescription>
                    Subscribe to our newsletter for the latest research updates and announcements.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                    />
                    <Button>Subscribe</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Get updates on research and new lab developments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
