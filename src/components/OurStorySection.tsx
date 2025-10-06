import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Globe, Zap, ArrowRight, Sparkles } from "lucide-react";

const OurStorySection = () => {
  const [activeYear, setActiveYear] = useState<number>(3);

  const timeline = [
    { 
      year: "2016", 
      title: "Built Coalition", 
      icon: Users, 
      desc: "Brought together infrastructure practitioners from 15 countries at our first Resiliency Summit.",
      impact: "15 Countries"
    },
    { 
      year: "2018", 
      title: "Captured Knowledge", 
      icon: GraduationCap, 
      desc: "Launched One Water Academy to preserve institutional knowledge through structured training.",
      impact: "1000+ Trained"
    },
    { 
      year: "2019", 
      title: "Scaled Nationally", 
      icon: Globe, 
      desc: "Future of Water Summit became the go-to conference for utility executives across the country.",
      impact: "$50B+ Assets"
    },
    { 
      year: "Today", 
      title: "APAS Labs", 
      icon: Zap, 
      desc: "Building AI platforms that connect the people, systems, and decisions that shape infrastructure.",
      impact: "Active Now"
    },
  ];

  const founders = [
    {
      name: "Simi Anand",
      initials: "SA",
      role: "Led billion-dollar infrastructure programs",
      credentials: "$9B+ wastewater & stormwater programs • SCADA, finance, operations integration • Singapore Water Week speaker",
    },
    {
      name: "Hardeep Anand",
      initials: "HA",
      role: "Infrastructure strategy across 35+ cities",
      credentials: "Complex public works oversight • South Florida regional programs • Rockefeller 100 Resilient Cities",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-background-deep to-background overflow-hidden">
      {/* Background Effects - Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Trust-Building Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
            Built by People Who've Done This Before
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            $9B+ in programs managed. 35+ cities served. 30+ years in infrastructure.
          </p>
        </div>

        {/* Main Content Grid with iPhone */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Interactive Timeline */}
          <div className="lg:col-span-1 backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 hover:border-primary/30 transition-all duration-500">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  How We Got Here
                </h3>
                <p className="text-sm text-muted-foreground">A decade of building connections</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{timeline[activeYear].impact}</div>
                <div className="text-xs text-muted-foreground">Impact</div>
              </div>
            </div>
            
            {/* Horizontal Timeline */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between mb-6">
                {timeline.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeYear === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveYear(idx)}
                      className={`relative group transition-all duration-300 ${
                        isActive ? 'scale-110' : 'scale-100 hover:scale-105'
                      }`}
                    >
                      {/* Dot */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-r from-primary to-blue-500 shadow-lg shadow-primary/50' 
                          : 'bg-muted hover:bg-muted/80'
                        }`}
                      >
                        <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      
                      {/* Year Label */}
                      <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap
                        ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        {item.year}
                      </div>
                      
                      {/* Connector Line */}
                      {idx < timeline.length - 1 && (
                        <div className={`absolute top-1/2 left-full w-8 sm:w-12 md:w-16 h-0.5 -translate-y-1/2 transition-colors
                          ${idx < activeYear ? 'bg-primary' : 'bg-border'}`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Content */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 min-h-[160px]">
              <div className="flex items-start gap-4">
                {(() => {
                  const ActiveIcon = timeline[activeYear].icon;
                  return <ActiveIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />;
                })()}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold text-foreground">{timeline[activeYear].title}</h4>
                    {activeYear === timeline.length - 1 && (
                      <span className="inline-flex items-center gap-1 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">
                        <Zap className="w-3 h-3" />
                        Now
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{timeline[activeYear].desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: iPhone Mockup Animation */}
          <div className="lg:col-span-1 flex items-center justify-center py-8 lg:py-0">
            <div className="relative float">
              {/* iPhone Frame */}
              <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-card to-background-deep rounded-[3rem] border-8 border-muted shadow-2xl shadow-primary/20">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background-deep rounded-b-3xl z-10" />
                
                {/* Screen Content */}
                <div className="absolute inset-4 bg-background-deep rounded-[2.2rem] overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-primary/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">APAS Labs</div>
                        <div className="text-xs text-muted-foreground">Infrastructure Platform</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Cards */}
                  <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-5rem)]">
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-xl p-3 animate-pulse">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-xs font-semibold text-foreground">Live Projects</div>
                      </div>
                      <div className="text-xl font-bold text-primary">127</div>
                      <div className="text-xs text-muted-foreground">Active Infrastructure Programs</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <GraduationCap className="w-4 h-4 text-secondary" />
                        </div>
                        <div className="text-xs font-semibold text-foreground">Knowledge Base</div>
                      </div>
                      <div className="text-xl font-bold text-secondary">2,500+</div>
                      <div className="text-xs text-muted-foreground">Expert Resources</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-xl p-3 animate-pulse delay-1000">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                          <Globe className="w-4 h-4 text-accent" />
                        </div>
                        <div className="text-xs font-semibold text-foreground">Global Reach</div>
                      </div>
                      <div className="text-xl font-bold text-accent">35+</div>
                      <div className="text-xs text-muted-foreground">Cities Served</div>
                    </div>
                  </div>
                </div>

                {/* Side Buttons */}
                <div className="absolute right-0 top-24 w-1 h-12 bg-muted rounded-l" />
                <div className="absolute right-0 top-40 w-1 h-16 bg-muted rounded-l" />
                <div className="absolute right-0 top-60 w-1 h-16 bg-muted rounded-l" />
              </div>

              {/* Floating Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-[3rem] blur-2xl -z-10" />
            </div>
          </div>

          {/* Right: Team */}
          <div className="lg:col-span-1 backdrop-blur-xl bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 border-2 border-primary/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Leadership
              </h3>
              <p className="text-sm text-muted-foreground">The team behind the platforms</p>
            </div>
            
            <div className="space-y-5">
              {founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="group bg-card/50 border border-border rounded-2xl p-5 hover:bg-card/80 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <Avatar className="w-14 h-14 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 flex-shrink-0">
                      <AvatarImage src="/placeholder.svg" alt={founder.name} />
                      <AvatarFallback className="text-base font-bold bg-gradient-to-br from-primary/20 to-secondary/20 text-foreground">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {founder.name}
                      </h4>
                      <p className="text-sm text-primary/80 font-semibold">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-[4.5rem]">
                    {founder.credentials}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Proof + CTA */}
            <div className="mt-6 pt-6 border-t border-border space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-primary">$9B+</div>
                  <div className="text-xs text-muted-foreground">Managed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">35+</div>
                  <div className="text-xs text-muted-foreground">Cities</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary">30+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Link to="/about">
                  <span>Full Leadership Credentials</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-gradient-to-r from-primary/10 to-secondary/10 
            border border-primary/20 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300 cursor-default">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <p className="text-base md:text-lg font-semibold text-foreground">
              Infrastructure experience meets AI capability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
