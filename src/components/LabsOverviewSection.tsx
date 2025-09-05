import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Users, 
  Waves, 
  BookOpen, 
  Brain, 
  CircleDot,
  ArrowRight,
  Heart,
  Mic
} from "lucide-react";

const LabsOverviewSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const labs = [
    {
      id: "guild",
      title: "The Guild",
      tagline: "Where Practitioners Power the AI Stack",
      description: "Practitioner-led cohorts capture and curate expertise into custom GPTs, turning field knowledge into usable intelligence. The Guild prevents knowledge loss and accelerates learning across sectors.",
      icon: Users,
      cta: "Join a Guild →",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20"
    },
    {
      id: "biscayne",
      title: "Biscayne Bay Lab",
      subtitle: "(Signature Project)",
      tagline: "Giving a Voice to the Bay",
      description: "Droobi, the Bay's first AI-powered voice, connects citizens and practitioners directly to decision-makers. This Lab makes funding priorities transparent and accountable — and secures the Bay's future.",
      icon: Waves,
      primaryCta: "Support Biscayne Bay →",
      secondaryCta: "Voice the Bay →",
      color: "from-blue-600/30 to-teal-600/30",
      borderColor: "border-teal-500/40",
      glowColor: "shadow-teal-500/30",
      isSignature: true
    },
    {
      id: "oracles",
      title: "Oracles",
      tagline: "Knowledge Without Borders",
      description: "Oracles delivers micro-learning and practical training in AI, data, and systems — equipping consultants, vendors, governments, and students to operate at market speed.",
      icon: BookOpen,
      cta: "Explore Oracles →",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
      glowColor: "shadow-green-500/20"
    },
    {
      id: "droobi",
      title: "Droobi (Lexicon of Water)",
      tagline: "Language Made Operable",
      description: "From jargon to clarity: Droobi standardizes technical terms, connects vendors, and hosts knowledge in one place. Free to governments and students, funded by vendors, it makes language usable.",
      icon: Brain,
      cta: "Explore Droobi →",
      color: "from-purple-500/20 to-blue-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20"
    },
    {
      id: "community",
      title: "Community (Circle)",
      tagline: "A Circle That Connects All Labs",
      description: "The Circle is where governments, practitioners, citizens, and funders come together. A shared space that keeps every Lab adaptive, accountable, and connected.",
      icon: CircleDot,
      cta: "Join the Community →",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/20",
      isFullWidth: true
    }
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep z-0" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Block */}
        <div className="text-center mb-16">
          <div 
            data-index="0"
            className={`transition-all duration-1000 ease-out ${
              visibleItems.includes(0) 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-12 scale-95'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                From Fragmentation to Clarity: The Power of Five Labs
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full shadow-glow mb-8" />
            <p className="text-xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed mb-8">
              Each Lab tackles a critical gap — together they create accountable, data-powered platforms for governments, practitioners, citizens, and funders.
            </p>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              APAS Labs are not reports or conferences. They are practical solutions designed to fix what's broken: fragmented data, opaque decisions, and wasted resources. Each Lab addresses a specific domain — from practitioner knowledge to citizen voice — and delivers tools that make decisions clearer, funding more transparent, and accountability measurable.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {labs.filter(lab => !lab.isFullWidth).map((lab, index) => {
            const IconComponent = lab.icon;
            const isSignature = lab.isSignature;
            
            return (
              <div
                key={lab.id}
                data-index={index + 1}
                className={`${isSignature ? 'lg:col-span-2' : ''} transition-all duration-1000 ease-out ${
                  visibleItems.includes(index + 1)
                    ? 'opacity-100 transform translate-y-0 scale-100'
                    : 'opacity-0 transform translate-y-16 scale-90'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <Card className={`h-full glass-card ${lab.borderColor} hover:${lab.glowColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group transform-gpu ${isSignature ? 'bg-gradient-to-br from-background/90 to-background/80' : 'bg-background/60'} backdrop-blur-xl border-opacity-50`}>
                  <CardHeader className={isSignature ? "pb-6" : "pb-4"}>
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${lab.color} p-4 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg border border-white/10 ${isSignature ? 'animate-pulse' : ''}`}>
                        <IconComponent size={isSignature ? 36 : 28} className="text-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`${isSignature ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'} group-hover:text-primary transition-colors duration-300`}>
                          {lab.title}
                          {lab.subtitle && <span className="text-primary text-base block">{lab.subtitle}</span>}
                        </CardTitle>
                        <p className={`${isSignature ? 'text-base' : 'text-sm'} font-medium text-primary mt-2`}>
                          {lab.tagline}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className={`text-muted-foreground leading-relaxed mb-6 ${isSignature ? 'text-base lg:text-lg' : 'text-sm'}`}>
                      {lab.description}
                    </CardDescription>
                    
                    {/* CTAs */}
                    {isSignature ? (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="group flex-1">
                          <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          {lab.primaryCta}
                        </Button>
                        <Button variant="glass" size="lg" className="group flex-1">
                          <Mic className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                          {lab.secondaryCta}
                        </Button>
                      </div>
                    ) : (
                      <Button variant="ghost" className="group w-full justify-between hover:bg-white/10">
                        {lab.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Community Card - Full Width */}
        {labs.filter(lab => lab.isFullWidth).map((lab, index) => {
          const IconComponent = lab.icon;
          return (
            <div
              key={lab.id}
              data-index={5}
              className={`transition-all duration-1000 ease-out ${
                visibleItems.includes(5)
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : 'opacity-0 transform translate-y-16 scale-90'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <Card className={`glass-card ${lab.borderColor} hover:${lab.glowColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group transform-gpu bg-background/60 backdrop-blur-xl border-opacity-50 max-w-2xl mx-auto`}>
                <CardHeader className="pb-4 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <div className={`bg-gradient-to-br ${lab.color} p-4 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg border border-white/10`}>
                      <IconComponent size={32} className="text-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl group-hover:text-primary transition-colors duration-300">
                        {lab.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-primary mt-2">
                        {lab.tagline}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed mb-6 text-base">
                    {lab.description}
                  </CardDescription>
                  <Button variant="ghost" className="group">
                    {lab.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LabsOverviewSection;
