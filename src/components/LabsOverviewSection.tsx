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
  Mic,
  ExternalLink
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
            }, index * 100); // Staggered timing for better effect
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger animation slightly before element is fully visible
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
      description: "The Guild is a network of practitioner-led cohorts, each building custom GPTs powered by APAS technology. Experts curate real-world knowledge, preventing its loss and accelerating learning. Each Guild becomes a living Lab, continuously enriched with lessons from the field.",
      icon: Users,
      cta: "Join a Guild",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: "oracles",
      title: "Oracles",
      tagline: "Knowledge Without Borders",
      description: "Oracles tackles knowledge fragmentation in infrastructure. It delivers micro-learning and professional training across AI, data, and systems, while capturing expert insights and skills like communication and strategy. Oracles prepares consultants, vendors, governments, and students for an AI-driven future.",
      icon: BookOpen,
      cta: "Explore Oracles",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: "droobi",
      title: "Droobi (Lexicon of Water)",
      tagline: "Standardizing the Language of Infrastructure",
      description: "Droobi began as a lexicon to standardize technical terms like \"digital twin\" or \"resilience.\" It has grown into a vendor-connected knowledge hub with microsites, manuals, and webinars — powered by the Droobi AI mascot. Free for students and governments, funded by vendors and consultants, Droobi makes technical language accessible and usable across the sector.",
      icon: Brain,
      cta: "Explore Droobi",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: "community",
      title: "Community Lab (Circle)",
      tagline: "A Circle That Connects All Labs",
      description: "All APAS Labs converge in a shared Circle community, where practitioners, students, vendors, funders, and citizens exchange insights and co-create solutions. This keeps every Lab alive, adaptive, and accountable.",
      icon: CircleDot,
      cta: "Join the Community",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep z-0" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                The Labs Overview
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full shadow-glow mb-8" />
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Living laboratories where practitioners, citizens, and governments collaborate to build AI-powered infrastructure solutions.
            </p>
          </div>
        </div>

        {/* Biscayne Bay Lab - Signature Featured Section */}
        <div 
          data-index="1"
          className={`mb-20 transition-all duration-1200 ease-out delay-200 ${
            visibleItems.includes(1)
              ? 'opacity-100 transform translate-y-0 scale-100 rotate-0'
              : 'opacity-0 transform translate-y-16 scale-95 -rotate-1'
          }`}
        >
          <div className="glass-card border border-primary/30 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Waves size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Biscayne Bay Lab
                      </h3>
                      <p className="text-lg text-primary font-medium">Signature Project</p>
                    </div>
                  </div>
                  
                  <p className="text-xl font-semibold text-secondary mb-4">
                    Giving a Voice to the Bay
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 lg:text-lg">
                    Biscayne Bay is our signature Lab. It is a living ecosystem under strain from neglect and mismanagement. 
                    This Lab humanizes the Bay through Droobi, the Bay's first AI-powered voice, and builds a feedback loop between citizens, 
                    practitioners, and government. For the first time, the Bay itself can be heard, and priorities for funding can be set openly and clearly.
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">$2.4B</div>
                      <div className="text-sm text-muted-foreground">Property Values</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">15K</div>
                      <div className="text-sm text-muted-foreground">Jobs Connected</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-accent">92%</div>
                      <div className="text-sm text-muted-foreground">Accountability Gap</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-orange-400">68%</div>
                      <div className="text-sm text-muted-foreground">Trust Decline</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group">
                      <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Support Biscayne Bay Lab
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="glass" size="lg" className="group">
                      <Mic className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Voice the Bay
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex-shrink-0 lg:w-96">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                          <Waves size={32} className="text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-2">Droobi AI</h4>
                        <p className="text-sm text-muted-foreground">The Bay's Voice</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground italic">
                          "Every contribution amplifies the Bay's voice, strengthens accountability, 
                          and ensures funding aligns with measurable outcomes."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Funding CTA Strip */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 border-t border-white/10">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  <strong>Your support keeps this Lab alive.</strong> Whether you are a citizen contributing $1, 
                  a business stepping up to lead, or a sector partner investing in long-term resilience, 
                  every contribution ensures the Bay's voice shapes tomorrow's priorities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="hero" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Support Bay Lab
                  </Button>
                  <Button variant="glass" size="sm">
                    <Mic className="w-4 h-4 mr-2" />
                    Voice the Bay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Labs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {labs.map((lab, index) => {
            const IconComponent = lab.icon;
            return (
              <div
                key={lab.id}
                data-index={index + 2}
                className={`transition-all duration-1000 ease-out ${
                  visibleItems.includes(index + 2)
                    ? `opacity-100 transform translate-y-0 scale-100 ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-0'}`
                    : `opacity-0 transform translate-y-12 scale-90 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <Card className={`h-full glass-card ${lab.borderColor} hover:shadow-elegant transition-all duration-500 hover:scale-105 hover:-translate-y-2 group transform-gpu`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${lab.color} p-3 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent size={28} className="text-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl lg:text-2xl group-hover:text-primary transition-colors duration-300">
                          {lab.title}
                        </CardTitle>
                        <p className="text-sm font-medium text-primary mt-1">
                          {lab.tagline}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                      {lab.description}
                    </CardDescription>
                    <Button variant="ghost" className="group w-full justify-between">
                      {lab.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabsOverviewSection;
