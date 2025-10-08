import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import OraklesDemo from "@/components/OraklesDemo";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import OurStorySection from "@/components/OurStorySection";
import { RotatingText } from "@/components/RotatingText";
import { FinalCTA } from "@/components/FinalCTA";
import { GetInTouchSection } from "@/components/GetInTouchSection";
import { DifferentiatorSection } from "@/components/DifferentiatorSection";
import { AICapabilitiesSection } from "@/components/AICapabilitiesSection";
import {
  ArrowRight,
  DollarSign,
  Building,
  BookOpen,
  CheckCircle,
  Users
} from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1a2332] via-[#0f1825] to-[#0a0f1a]">
        {/* Animated Blue Glow Effects */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-float" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary-glow/20 rounded-full blur-[100px] animate-float-delayed" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex items-center min-h-screen">
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Eyebrow Text */}
            <div className="inline-block">
              <p className="text-primary text-sm sm:text-base font-space tracking-wider uppercase mb-2 animate-fade-in">
                Trusted Infrastructure Partner
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-satoshi leading-[0.95] tracking-tight animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
                <span className="block text-foreground/90">
                  Building the
                </span>
                <span className="block text-primary text-glow mt-2">
                  Operating System
                </span>
                <span className="block text-foreground/90 mt-2">
                  for Public Infrastructure
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-primary-glow mb-6" />
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/90 font-space font-light leading-relaxed">
                Building AI powered solutions that governments, practitioners, citizens, and funders can trust.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button 
                size="lg" 
                className="group text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-6 h-auto font-semibold bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg hover:shadow-glow active:scale-95 transition-all duration-300 min-h-[3rem]" 
                asChild
              >
                <Link to="/partnerships">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-6 h-auto font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[3rem]" 
                asChild
              >
                <Link to="/labs">Explore Our Labs</Link>
              </Button>
            </div>

            {/* Services List - Mobile */}
            <div className="lg:hidden pt-8 space-y-3 text-left animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-foreground/80 text-base sm:text-lg font-space tracking-wide hover:text-primary transition-colors cursor-pointer">
                AI Governance
              </div>
              <div className="text-foreground/80 text-base sm:text-lg font-space tracking-wide hover:text-primary transition-colors cursor-pointer">
                Climate Resilience
              </div>
              <div className="text-foreground/80 text-base sm:text-lg font-space tracking-wide hover:text-primary transition-colors cursor-pointer">
                Infrastructure Intelligence
              </div>
            </div>
          </div>

          {/* Right Side Services - Desktop Only */}
          <div className="hidden lg:flex lg:w-1/3 flex-col items-end justify-center space-y-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-foreground/80 text-xl font-space tracking-wide hover:text-primary transition-colors cursor-pointer hover:translate-x-[-4px] duration-300">
              AI Governance
            </div>
            <div className="text-foreground/80 text-xl font-space tracking-wide hover:text-primary transition-colors cursor-pointer hover:translate-x-[-4px] duration-300">
              Climate Resilience
            </div>
            <div className="text-foreground/80 text-xl font-space tracking-wide hover:text-primary transition-colors cursor-pointer hover:translate-x-[-4px] duration-300">
              Infrastructure Intelligence
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
        
        {/* Subtle Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary-glow/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
              Our Solution: <span className="text-primary">Living Labs</span> for Infrastructure
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We build AI-powered platforms that transform fragmented systems into connected, 
              transparent ecosystems where decisions are data-driven and outcomes are measurable.
            </p>
          </div>

          {/* Core Platforms */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {/* Orakles */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl sm:text-4xl">Orakles</CardTitle>
                <CardDescription className="text-lg sm:text-xl">
                  The Infrastructure Knowledge Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Unifies language, connects vendors to decision-makers, proves ROI, and transforms 
                  training into daily practice through integrated learning pathways.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Standardized infrastructure lexicon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Vendor marketplace with verified case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Integrated LMS for continuous learning</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <a href="https://orakles.lovable.app/" target="_blank" rel="noopener noreferrer">Explore Orakles</a>
                </Button>
              </CardContent>
            </Card>

            {/* Biscayne Bay GPT */}
            <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader className="space-y-6 p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="text-5xl">🌊</span>
                </div>
                <CardTitle className="text-3xl sm:text-4xl">Biscayne Bay GPT</CardTitle>
                <CardDescription className="text-lg sm:text-xl">
                  AI-Powered Ecosystem Guardian
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8 pt-0">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Brings transparency and accountability to environmental restoration through 
                  real-time data, citizen engagement, and Droobi, the Bay's AI advocate.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Live sensor data and historical analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg">Citizen voice portal for community feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg">ROI tracking for restoration investments</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300" asChild>
                  <Link to="/biscayne-bay-gpt">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* What Makes Us Different */}
      <DifferentiatorSection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* AI Capabilities */}
      <AICapabilitiesSection />

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
                <span className="text-primary font-semibold text-sm md:text-base">Environmental AI Guardian</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                Biscayne Bay Has a Voice—<br />
                <span className="text-primary">And It's Powered by AI</span>
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                For decades, Biscayne Bay has been dying while millions in restoration funds vanished into reports nobody reads. 
                <strong className="text-foreground"> Droobi changes that.</strong>
              </p>

              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-10 space-y-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">What Droobi Does</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Real-Time Environmental Intelligence</h4>
                      <p className="text-base text-muted-foreground">Live sensor data + decades of reports = instant answers on water quality, pollution sources, and ecosystem health</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Citizen Voice Portal</h4>
                      <p className="text-base text-muted-foreground">Anyone can ask Droobi about bay conditions, report issues, or track restoration progress—no PhD required</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Follow the Money Dashboards</h4>
                      <p className="text-base text-muted-foreground">Tracks every restoration dollar spent and ties it to measurable outcomes—because "trust us" isn't good enough</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Early Warning System</h4>
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
              <span className="text-sm md:text-base font-semibold tracking-wider text-primary uppercase px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                Built by Infrastructure Veterans
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
              Proven at <span className="text-primary">Scale</span>
            </h2>
            <p className="text-xl sm:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed font-light mb-4">
              We don't just build platforms—we deliver systems that work in the real world.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Backed by decades of infrastructure leadership managing billions in public works programs.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="group text-center space-y-6 p-8 rounded-2xl border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary transition-transform group-hover:scale-110">$9B+</div>
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl text-foreground font-bold">Public Works Programs</p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  End-to-end oversight from SCADA integration to financial systems—proven at municipal scale
                </p>
              </div>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-2xl border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary transition-transform group-hover:scale-110">35+</div>
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl text-foreground font-bold">Cities & Regions</p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Delivered regional infrastructure strategy across South Florida's most complex systems
                </p>
              </div>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-2xl border border-border hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary transition-transform group-hover:scale-110">Global</div>
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl text-foreground font-bold">Leadership Recognition</p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Built Complex Systems from Scratch</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Our team has integrated SCADA, finance, operations, and governance into unified frameworks 
                  for some of the largest municipal infrastructure programs in the country.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Resilience Under Pressure</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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

      {/* Our Story - Journey & Team */}
      <OurStorySection />

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Partner With Us */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-background-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-[1.1] px-2">
              Let's Build <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
              Whether you're a vendor seeking to connect with decision-makers, a government looking 
              to modernize infrastructure, or a consultant ready to scale your expertise—we're here to collaborate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border active:border-primary/50 transition-all active:scale-95 duration-300">
              <CardHeader className="text-center p-6 sm:p-8">
                <Building className="h-14 w-14 sm:h-20 sm:w-20 text-primary mx-auto mb-4 sm:mb-6" />
                <CardTitle className="text-2xl sm:text-3xl">For Vendors</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6 sm:p-8 pt-0">
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Showcase your solutions where infrastructure leaders are making decisions
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[2.75rem]" asChild>
                  <Link to="/partnerships">Partner With Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border active:border-primary/50 transition-all active:scale-95 duration-300">
              <CardHeader className="text-center p-6 sm:p-8">
                <Users className="h-14 w-14 sm:h-20 sm:w-20 text-primary mx-auto mb-4 sm:mb-6" />
                <CardTitle className="text-2xl sm:text-3xl">For Consultants</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6 sm:p-8 pt-0">
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Amplify your expertise through AI-powered knowledge systems
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[2.75rem]" asChild>
                  <Link to="/community">Join Our Community</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border active:border-primary/50 transition-all active:scale-95 duration-300 sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center p-6 sm:p-8">
                <CheckCircle className="h-14 w-14 sm:h-20 sm:w-20 text-primary mx-auto mb-4 sm:mb-6" />
                <CardTitle className="text-2xl sm:text-3xl">For Governments</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-6 sm:p-8 pt-0">
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Build transparent, accountable systems your communities can trust
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[2.75rem]" asChild>
                  <Link to="/partnerships">Explore Solutions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Get in Touch Section */}
      <GetInTouchSection />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
};

export default Index;
