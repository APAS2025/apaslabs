import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Globe, Zap, ArrowRight, Sparkles } from "lucide-react";

const OurStorySection = () => {
  const [activeYear, setActiveYear] = useState<number>(3);

  const timeline = [
    { year: "2016", title: "Coalition", icon: Users, desc: "Resilient Utilities Coalition" },
    { year: "2018", title: "Academy", icon: GraduationCap, desc: "One Water Academy" },
    { year: "2019", title: "Summit", icon: Globe, desc: "Future of Water Summit" },
    { year: "Today", title: "APAS Labs", icon: Zap, desc: "AI-Powered Infrastructure" },
  ];

  const founders = [
    {
      name: "Simi Anand",
      initials: "SA",
      role: "Systems strategist bridging knowledge, technology, and community.",
    },
    {
      name: "Hardeep Anand",
      initials: "HA",
      role: "Infrastructure leader with decades managing complex public works.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-background-deep via-background to-background-deep overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
            Built by Practitioners, Powered by AI
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            $9B+ programs managed • 35+ cities served • Decades of infrastructure leadership
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Interactive Timeline */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Evolution Timeline
            </h3>
            
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
                          : 'bg-white/10 hover:bg-white/20'
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
                          ${idx < activeYear ? 'bg-primary' : 'bg-white/20'}`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Content */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 min-h-[140px]">
              <div className="flex items-start gap-4">
                {(() => {
                  const ActiveIcon = timeline[activeYear].icon;
                  return <ActiveIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />;
                })()}
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{timeline[activeYear].title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">{timeline[activeYear].desc}</p>
                  {activeYear === timeline.length - 1 && (
                    <div className="mt-3 inline-flex items-center gap-2 text-sm text-primary font-semibold">
                      <Zap className="w-4 h-4 animate-pulse" />
                      <span>Current Focus</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Team */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-primary/10 via-white/5 to-accent/10 border-2 border-primary/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              The Builders
            </h3>
            
            <div className="space-y-6">
              {founders.map((founder, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 flex-shrink-0">
                      <AvatarImage src="/placeholder.svg" alt={founder.name} />
                      <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-primary/20 to-accent/20 text-white">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {founder.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Button
                asChild
                variant="outline"
                className="w-full group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Link to="/about">
                  <span>Meet the Full Team</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-gradient-to-r from-primary/10 to-accent/10 
            border border-primary/20 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <p className="text-lg font-semibold text-white">
              Transforming infrastructure decisions in the age of AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
