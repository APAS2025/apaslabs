import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import OraklesDemo from "@/components/OraklesDemo";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import FoundersSection from "@/components/FoundersSection";
import JourneySection from "@/components/JourneySection";
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
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep" />
        
        {/* Strategic accent glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Main headline */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
                Building the Operating System<br />
                <span className="text-primary">for Public Infrastructure</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
                AI-powered platforms that connect communities, regulators, and innovators—creating transparent, 
                accountable systems society can trust.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="text-lg px-10 py-6 h-auto font-semibold" asChild>
                <Link to="/partnerships">Partner With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto font-semibold border-2" asChild>
                <Link to="/labs">Explore Our Labs</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>$9B+ Programs Managed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>35+ Cities Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Global Infrastructure Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist - The Challenge */}
      <WhyWeExistSection />

      {/* Our Solution - What We Build */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Solution: Living Labs for Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We build AI-powered platforms that transform fragmented systems into connected, 
              transparent ecosystems where decisions are data-driven and outcomes are measurable.
            </p>
          </div>

          {/* Three Core Platforms */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Orakles */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Orakles</CardTitle>
                <CardDescription className="text-base">
                  The Infrastructure Knowledge Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Unifies language, connects vendors to decision-makers, proves ROI, and transforms 
                  training into daily practice through integrated learning pathways.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Standardized infrastructure lexicon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Vendor marketplace with verified case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Integrated LMS for continuous learning</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/lexicon">Explore Orakles</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Biscayne Bay GPT */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-3xl">🌊</span>
                </div>
                <CardTitle className="text-2xl">Biscayne Bay GPT</CardTitle>
                <CardDescription className="text-base">
                  AI-Powered Ecosystem Guardian
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Brings transparency and accountability to environmental restoration through 
                  real-time data, citizen engagement, and Droobi, the Bay's AI advocate.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Live sensor data and historical analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Citizen voice portal for community feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">ROI tracking for restoration investments</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/biscayne-bay-gpt">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Practitioner GPTs */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Practitioner GPTs</CardTitle>
                <CardDescription className="text-base">
                  Capturing Expert Knowledge at Scale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Specialized AI agents trained on decades of infrastructure expertise, 
                  preserving institutional knowledge before it walks out the door.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Guild-specific knowledge bases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Expert-verified AI responses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24/7 access to critical expertise</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/community">Explore Guilds</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Orakles Interactive Demo */}
      <OraklesDemo />

      {/* Track Record & Impact */}
      <section className="py-32 bg-background-deep relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Proven at Scale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build platforms—we deliver systems that work in the real world, 
              backed by decades of infrastructure leadership.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">$9B+</div>
              <p className="text-lg text-foreground font-semibold">Public Works Programs Managed</p>
              <p className="text-muted-foreground">End-to-end oversight from SCADA integration to financial systems</p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">35+</div>
              <p className="text-lg text-foreground font-semibold">Cities & Regions Served</p>
              <p className="text-muted-foreground">Regional infrastructure strategy delivered across South Florida</p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-primary">Global</div>
              <p className="text-lg text-foreground font-semibold">Infrastructure Leadership</p>
              <p className="text-muted-foreground">Featured at Singapore Water Week and Rockefeller's 100 Resilient Cities</p>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Systems Integration Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  From SCADA to finance, we build cohesive infrastructure where none existed—connecting 
                  technology, governance, and operations into unified frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Resilience by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Every initiative built with governance, accountability, and measurable ROI as core 
                  principles—not afterthoughts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <JourneySection />

      {/* Leadership Team */}
      <FoundersSection />

      {/* Partner With Us */}
      <section className="py-32 bg-gradient-to-b from-background to-background-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're a vendor seeking to connect with decision-makers, a government looking 
              to modernize infrastructure, or a consultant ready to scale your expertise—we're here to collaborate.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <CardHeader className="text-center">
                <Building className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">For Vendors</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Showcase your solutions where infrastructure leaders are making decisions
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">For Consultants</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Amplify your expertise through AI-powered knowledge systems
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/community">Join Our Community</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <CardHeader className="text-center">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">For Governments</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Build transparent, accountable systems your communities can trust
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/partnerships">Explore Solutions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-background-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Info & Quick Actions */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to transform infrastructure decision-making? Let's start the conversation.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email Us</p>
                    <p className="text-muted-foreground">contact@apaslabs.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-muted-foreground">Miami, FL | Serving Infrastructure Leaders Globally</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 pt-8 border-t border-border">
                <p className="font-semibold text-foreground mb-4">Quick Access</p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link to="/community">
                      <Users className="h-4 w-4 mr-2" />
                      Join Community
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link to="/partnerships">
                      <Handshake className="h-4 w-4 mr-2" />
                      Partnerships
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Newsletter */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Stay Informed</CardTitle>
                  <CardDescription>
                    Get updates on infrastructure innovation and new platform releases
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                    />
                    <Button className="flex-shrink-0">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Tell us about your infrastructure challenges and goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">I'm interested in:</label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedInquiry(type.id)}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all flex flex-col items-center gap-2 ${
                            selectedInquiry === type.id
                              ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                              : 'bg-background/50 text-muted-foreground border-border hover:border-primary/50 hover:bg-background/80'
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
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <Input placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input placeholder="your@email.com" className="bg-background/50" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your infrastructure challenges or partnership interests..." 
                    className="bg-background/50 min-h-32"
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
