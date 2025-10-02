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
        {/* Gradient background - minimalistic single color */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/8" />
        
        {/* Strategic accent glows - single color blue */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
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
              <Button size="lg" className="text-lg px-10 py-6 h-auto font-semibold bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105" asChild>
                <Link to="/partnerships">Partner With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105" asChild>
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

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Our Solution - What We Build */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background-deep" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Our Solution: <span className="text-primary">Living Labs</span> for Infrastructure
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We build AI-powered platforms that transform fragmented systems into connected, 
              transparent ecosystems where decisions are data-driven and outcomes are measurable.
            </p>
          </div>

          {/* Three Core Platforms */}
          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Orakles */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl">Orakles</CardTitle>
                <CardDescription className="text-lg">
                  The Infrastructure Knowledge Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Unifies language, connects vendors to decision-makers, proves ROI, and transforms 
                  training into daily practice through integrated learning pathways.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Standardized infrastructure lexicon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Vendor marketplace with verified case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Integrated LMS for continuous learning</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/lexicon">Explore Orakles</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Biscayne Bay GPT */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-5xl">🌊</span>
                </div>
                <CardTitle className="text-3xl">Biscayne Bay GPT</CardTitle>
                <CardDescription className="text-lg">
                  AI-Powered Ecosystem Guardian
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Brings transparency and accountability to environmental restoration through 
                  real-time data, citizen engagement, and Droobi, the Bay's AI advocate.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Live sensor data and historical analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Citizen voice portal for community feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">ROI tracking for restoration investments</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/biscayne-bay-gpt">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Practitioner GPTs */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl">Practitioner GPTs</CardTitle>
                <CardDescription className="text-lg">
                  Capturing Expert Knowledge at Scale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Specialized AI agents trained on decades of infrastructure expertise, 
                  preserving institutional knowledge before it walks out the door.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Guild-specific knowledge bases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">Expert-verified AI responses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base">24/7 access to critical expertise</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/community">Explore Guilds</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Orakles Interactive Demo */}
      <OraklesDemo />

      {/* Biscayne Bay GPT - Deep Dive */}
      <section className="py-32 bg-gradient-to-b from-background to-background-deep relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <span className="text-4xl">🌊</span>
                <span className="text-primary font-semibold">Environmental AI Guardian</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Biscayne Bay Has a Voice—<br />
                <span className="text-primary">And It's Powered by AI</span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                For decades, Biscayne Bay has been dying while millions in restoration funds vanished into reports nobody reads. 
                <strong className="text-foreground"> Droobi changes that.</strong>
              </p>

              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-10 space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">What Droobi Does</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Real-Time Environmental Intelligence</h4>
                      <p className="text-base text-muted-foreground">Live sensor data + decades of reports = instant answers on water quality, pollution sources, and ecosystem health</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Citizen Voice Portal</h4>
                      <p className="text-base text-muted-foreground">Anyone can ask Droobi about bay conditions, report issues, or track restoration progress—no PhD required</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Follow the Money Dashboards</h4>
                      <p className="text-base text-muted-foreground">Tracks every restoration dollar spent and ties it to measurable outcomes—because "trust us" isn't good enough</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">Early Warning System</h4>
                      <p className="text-base text-muted-foreground">Alerts regulators, businesses, and communities before the next fish kill or algae bloom makes headlines</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8 py-6 h-auto font-semibold bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105" asChild>
                <Link to="/biscayne-bay-gpt">
                  Meet Droobi & Explore the Bay <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Right: Interactive Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <Card className="relative bg-card/80 backdrop-blur-xl border-2 border-primary/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🌊</span>
                    <div>
                      <CardTitle className="text-2xl">Ask Droobi Anything</CardTitle>
                      <CardDescription>Real-time Bay intelligence at your fingertips</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl hover:bg-primary/20 transition-colors cursor-pointer group">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        "What's the current water quality near Virginia Key?"
                      </p>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/20 p-4 rounded-xl hover:bg-secondary/20 transition-colors cursor-pointer group">
                      <p className="text-sm font-medium group-hover:text-secondary transition-colors">
                        "Show me where restoration dollars were spent in 2024"
                      </p>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 p-4 rounded-xl hover:bg-accent/20 transition-colors cursor-pointer group">
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">
                        "What are the biggest threats to seagrass this season?"
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span>Live data from 12 monitoring stations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Track Record & Impact */}
      <section className="py-32 bg-background-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/12 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                Built by Infrastructure Veterans
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Proven at <span className="text-primary">Scale</span>
            </h2>
            <p className="text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-light mb-4">
              We don't just build platforms—we deliver systems that work in the real world.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Backed by decades of infrastructure leadership managing billions in public works programs.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="group text-center space-y-6 p-8 rounded-2xl border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300">
              <div className="text-7xl md:text-8xl font-bold text-primary transition-transform group-hover:scale-110">$9B+</div>
              <div className="space-y-2">
                <p className="text-xl text-foreground font-bold">Public Works Programs</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  End-to-end oversight from SCADA integration to financial systems—proven at municipal scale
                </p>
              </div>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-2xl border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300">
              <div className="text-7xl md:text-8xl font-bold text-primary transition-transform group-hover:scale-110">35+</div>
              <div className="space-y-2">
                <p className="text-xl text-foreground font-bold">Cities & Regions</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Delivered regional infrastructure strategy across South Florida's most complex systems
                </p>
              </div>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-2xl border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300">
              <div className="text-7xl md:text-8xl font-bold text-primary transition-transform group-hover:scale-110">Global</div>
              <div className="space-y-2">
                <p className="text-xl text-foreground font-bold">Leadership Recognition</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Featured at Singapore Water Week and Rockefeller Foundation's 100 Resilient Cities
                </p>
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border-2 border-primary/20 p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Built Complex Systems from Scratch</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team has integrated SCADA, finance, operations, and governance into unified frameworks 
                  for some of the largest municipal infrastructure programs in the country.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Resilience Under Pressure</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every system designed with accountability, measurable ROI, and governance as foundational 
                  principles—proven through decades of real-world execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Our Journey */}
      <JourneySection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Leadership Team */}
      <FoundersSection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Partner With Us */}
      <section className="py-32 bg-gradient-to-b from-background to-background-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Let's Build <span className="text-primary">Together</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Whether you're a vendor seeking to connect with decision-makers, a government looking 
              to modernize infrastructure, or a consultant ready to scale your expertise—we're here to collaborate.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 duration-500">
              <CardHeader className="text-center p-8">
                <Building className="h-20 w-20 text-primary mx-auto mb-6" />
                <CardTitle className="text-2xl md:text-3xl">For Vendors</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-8 pt-0">
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  Showcase your solutions where infrastructure leaders are making decisions
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 duration-500">
              <CardHeader className="text-center p-8">
                <Users className="h-20 w-20 text-primary mx-auto mb-6" />
                <CardTitle className="text-2xl md:text-3xl">For Consultants</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-8 pt-0">
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  Amplify your expertise through AI-powered knowledge systems
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/community">Join Our Community</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 duration-500">
              <CardHeader className="text-center p-8">
                <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
                <CardTitle className="text-2xl md:text-3xl">For Governments</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-8 pt-0">
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  Build transparent, accountable systems your communities can trust
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/partnerships">Explore Solutions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Contact Section */}
      <section className="py-32 bg-background-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Contact Info & Quick Actions */}
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Ready to transform infrastructure decision-making? Let's start the conversation.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-2">Email Us</p>
                    <p className="text-base text-muted-foreground">contact@apaslabs.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-2">Location</p>
                    <p className="text-base text-muted-foreground">Miami, FL | Serving Infrastructure Leaders Globally</p>
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
                    <Button className="flex-shrink-0 bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg hover:shadow-primary/50 transition-all duration-300">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Right: Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base text-foreground/80">
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

                <Button className="w-full bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105" size="lg">
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
