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
    <section className="relative py-32 bg-gradient-to-b from-background via-background-deep to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
            Built by People Who've Done This Before
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            $9B+ managed • 35+ cities • 30+ years in infrastructure
          </p>
        </div>

        {/* Main Content Grid with iPhone */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Timeline */}
          <div className="lg:col-span-1 backdrop-blur-xl bg-card/30 border border-border rounded-2xl p-6 transition-all duration-300 hover:bg-card/50">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Journey</h3>
              <p className="text-sm text-muted-foreground">Click to explore each milestone</p>
            </div>
            
            {/* Timeline Dots */}
            <div className="space-y-6 mb-8">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeYear === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveYear(idx)}
                    className={`w-full text-left transition-all duration-300 ${
                      isActive ? '' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-br from-primary to-blue-500 shadow-lg shadow-primary/30' 
                          : 'bg-muted'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold mb-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                          {item.year}
                        </div>
                        <div className={`text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {item.title}
                        </div>
                      </div>

                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Details */}
            <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="px-3 py-1 bg-primary/10 rounded-full">
                  <div className="text-lg font-bold text-primary">{timeline[activeYear].impact}</div>
                </div>
                {activeYear === timeline.length - 1 && (
                  <span className="text-xs text-muted-foreground">Current Focus</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {timeline[activeYear].desc}
              </p>
            </div>
          </div>

          {/* Center: iPhone */}
          <div className="lg:col-span-1 flex items-center justify-center py-12 lg:py-0">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative w-[260px] h-[520px] bg-gradient-to-b from-card to-background-deep rounded-[2.5rem] border-[6px] border-muted/50 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-background-deep rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="absolute inset-3 bg-gradient-to-b from-background-deep to-background rounded-[2rem] overflow-hidden">
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    
                    {/* Year */}
                    <div className="mb-6 px-5 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                      <div className="text-3xl font-bold text-primary">{timeline[activeYear].year}</div>
                    </div>

                    {/* Icon */}
                    {(() => {
                      const ActiveIcon = timeline[activeYear].icon;
                      return (
                        <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-lg transition-all duration-500">
                          <ActiveIcon className="w-8 h-8 text-white" />
                        </div>
                      );
                    })()}

                    {/* Title */}
                    <div className="mb-3">
                      <div className="text-xl font-bold text-foreground mb-2">{timeline[activeYear].title}</div>
                      <div className="text-sm font-semibold text-primary">{timeline[activeYear].impact}</div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mb-6">
                      {timeline[activeYear].desc}
                    </p>

                    {/* Progress Dots */}
                    <div className="flex items-center justify-center gap-1.5">
                      {timeline.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === activeYear
                              ? 'w-6 bg-primary'
                              : idx < activeYear
                              ? 'w-1.5 bg-primary/50'
                              : 'w-1.5 bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Side Buttons */}
                <div className="absolute right-0 top-20 w-0.5 h-10 bg-muted/50 rounded-l" />
                <div className="absolute right-0 top-36 w-0.5 h-12 bg-muted/50 rounded-l" />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-3xl -z-10" />
            </div>
          </div>

          {/* Right: Team */}
          <div className="lg:col-span-1 backdrop-blur-xl bg-gradient-to-br from-primary/5 via-card/30 to-secondary/5 border border-primary/20 rounded-2xl p-6 transition-all duration-300 hover:bg-card/50">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Leadership</h3>
              <p className="text-sm text-muted-foreground">Decades of infrastructure experience</p>
            </div>
            
            <div className="space-y-4">
              {founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="group bg-card/30 border border-border rounded-xl p-4 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <Avatar className="w-12 h-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all flex-shrink-0">
                      <AvatarImage src="/placeholder.svg" alt={founder.name} />
                      <AvatarFallback className="text-sm font-bold bg-gradient-to-br from-primary/20 to-secondary/20 text-foreground">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                        {founder.name}
                      </h4>
                      <p className="text-xs text-primary/70 font-medium">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {founder.credentials}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats + CTA */}
            <div className="mt-5 pt-5 border-t border-border/50 space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-primary/5 rounded-lg p-2">
                  <div className="text-base font-bold text-primary">$9B+</div>
                  <div className="text-xs text-muted-foreground">Managed</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-2">
                  <div className="text-base font-bold text-primary">35+</div>
                  <div className="text-xs text-muted-foreground">Cities</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-2">
                  <div className="text-base font-bold text-primary">30+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full group border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Link to="/about">
                  <span className="text-sm">View Full Team</span>
                  <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Infrastructure experience meets AI capability
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
