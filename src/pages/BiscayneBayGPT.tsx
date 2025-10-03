import React, { useState, useEffect } from "react";
import { useBayHealthData } from "@/hooks/useBayHealthData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Waves,
  Fish,
  Leaf,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Heart,
  Mic,
  Play,
  MessageCircle,
  DollarSign,
  BarChart3,
  Users,
  Building2,
  TreePine,
  Droplets,
  Navigation,
  MapPin,
  Phone,
  Send,
  Briefcase,
  CheckCircle
} from "lucide-react";

const BiscayneBayGPT = () => {
  const { bayMetrics, loading: metricsLoading } = useBayHealthData();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [aiResponse, setAiResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Fallback metrics if database is empty
  const defaultMetrics = [
    { label: "Water Quality Score", value: "Fair-Poor", trend: "down", color: "text-primary" },
    { label: "Seagrass Coverage", value: "Recovering", trend: "up", color: "text-primary" },
    { label: "Nutrient Loading", value: "High", trend: "down", color: "text-primary" },
    { label: "Species Count", value: "1,200+", trend: "stable", color: "text-primary" }
  ];

  // Use database metrics if available, otherwise use defaults
  const displayMetrics = bayMetrics.length > 0 ? bayMetrics : defaultMetrics;

  const aiQuestions = [
    "What's the current health status of Biscayne Bay?",
    "How do canal systems affect water quality?",
    "What species are most at risk in the bay?",
    "How does pollution impact property values?"
  ];

  const aiAnswers = [
    "Based on the 2025 Biscayne Bay Report Card, most regions remain in 'poor' to 'fair' condition. Northern basins show concerning nutrient levels with chlorophyll-a, nitrogen, and phosphorus concentrations affecting bay resources. However, there's encouraging evidence of seagrass recovery in Julia Tuttle Basin.",
    "The extensive canal network connects Biscayne Bay to hundreds of miles of waterways. These canals carry nutrients and bacteria from the watershed into bay segments, significantly impacting water quality. This interconnected system means pollution from inland areas directly affects bay health.",
    "The bay supports millions of organisms including seagrass communities, sponges, fish species, and marine invertebrates. Recent threats include invasive species discoveries and ongoing macroalgal competition with native seagrass. The ecosystem's biodiversity makes it particularly vulnerable to water quality changes.",
    "Poor water quality directly impacts Miami-Dade's coastal property values, tourism revenue, and marine-dependent businesses. Clean bay waters are essential for the region's $14 billion tourism industry and waterfront real estate market valued in the hundreds of billions."
  ];

  const supportTiers = [
    { 
      name: "Bay Protector", 
      amount: "$5", 
      description: "Join Droobi in protecting our waters",
      icon: <Droplets className="h-6 w-6" />,
      color: "bg-gradient-to-br from-primary/90 to-primary"
    },
    { 
      name: "Seagrass Guardian", 
      amount: "$25", 
      description: "Help restore vital underwater forests",
      icon: <Leaf className="h-6 w-6" />,
      color: "bg-gradient-to-br from-primary/90 to-primary"
    },
    { 
      name: "Marine Champion", 
      amount: "$100", 
      description: "Support marine life conservation",
      icon: <Fish className="h-6 w-6" />,
      color: "bg-gradient-to-br from-primary/90 to-primary"
    },
    { 
      name: "Ocean Ambassador", 
      amount: "$500", 
      description: "Lead the charge for ocean advocacy",
      icon: <Waves className="h-6 w-6" />,
      color: "bg-gradient-to-br from-primary/90 to-primary"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsTyping(true);
    setAiResponse("");
    const answer = aiAnswers[currentQuestion];
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < answer.length) {
        setAiResponse(answer.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 30);

    const questionInterval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % aiQuestions.length);
    }, 8000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(questionInterval);
    };
  }, [currentQuestion]);

  const isVisible = (index: number) => visibleItems.includes(index);

  return (
    <div className="min-h-screen bg-background-deep relative overflow-hidden">
      {/* Subtle background gradient and glow effects */}
      <div className="fixed inset-0 bg-gradient-hero pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
      
      {/* Animated subtle background elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }} />
      </div>
      
      <div className="relative z-10">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden" data-index="0">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        
        {/* Animated water ripples */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        
        {/* Miami location badge */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Miami, Florida</span>
          </div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Text content */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-primary shadow-xl overflow-hidden border-2 border-primary/20">
                      <img 
                        src="/lovable-uploads/e1a87cc1-b7f5-4782-b7e7-0321dadee653.png" 
                        alt="Droobi - AI guardian of Biscayne Bay" 
                        className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 tracking-tight">
                  Meet{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Droobi
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light mb-6 leading-relaxed">
                  AI assistant for Biscayne Bay data
                </p>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
                  Get instant answers about water quality, marine life, and environmental trends with real-time AI analysis.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg active:scale-95 transition-all duration-300 min-h-[3rem]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Talk to Droobi
                  </Button>
                  <Button variant="outline" size="lg" className="border-border hover:bg-card active:scale-95 transition-all duration-300 min-h-[3rem]">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Right side - Phone animation */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  <div className="w-full bg-background-deep rounded-[2.5rem] p-4 sm:p-5 shadow-2xl border border-border">
                    <div className="w-full bg-background rounded-[2rem] p-4 sm:p-5 flex flex-col min-h-[550px] sm:min-h-[600px]">
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center space-x-2">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
                            <img 
                              src="/lovable-uploads/e1a87cc1-b7f5-4782-b7e7-0321dadee653.png" 
                              alt="Droobi" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-foreground font-medium text-sm sm:text-base">Droobi</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      
                      <div className="flex-1 overflow-hidden space-y-4">
                        <div className="bg-primary/10 rounded-2xl p-3 sm:p-4">
                          <p className="text-foreground text-xs sm:text-sm">
                            {aiQuestions[currentQuestion]}
                          </p>
                        </div>
                        
                        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-3 sm:p-4">
                          <div className="flex items-start space-x-2">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden border border-primary/30">
                              <img 
                                src="/lovable-uploads/e1a87cc1-b7f5-4782-b7e7-0321dadee653.png" 
                                alt="Droobi" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                {aiResponse}
                                {isTyping && <span className="animate-pulse text-primary">|</span>}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-5 flex items-center space-x-2">
                        <input 
                          type="text" 
                          placeholder="Ask Droobi about the bay..."
                          className="flex-1 bg-card border border-border text-foreground rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="bg-primary hover:bg-primary-glow rounded-full p-2 transition-colors">
                          <Send className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM - Transparency Gap */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background-deep relative overflow-hidden" data-index="2">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background-deep" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary text-xs sm:text-sm">
                The Problem
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Billions Invested. <span className="text-primary">Zero Visibility.</span>
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Biscayne Bay receives massive restoration funding, but nobody can track where the money goes or if it's working.
              </p>
            </div>

            {/* The Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="glass-card p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-6xl font-bold text-secondary mb-3">15+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Government agencies managing scattered bay data</div>
              </div>
              <div className="glass-card p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-6xl font-bold text-secondary mb-3">$500M+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Invested in restoration over 5 years</div>
              </div>
              <div className="glass-card p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-6xl font-bold text-primary mb-3">0</div>
                <div className="text-sm sm:text-base text-muted-foreground">Unified platforms tracking ROI... until now</div>
              </div>
            </div>

            {/* The Impact on People */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 sm:p-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Who This Affects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Parents & Families</h4>
                    <p className="text-sm text-muted-foreground">"Is it safe for my kids to swim today?" No way to know in real-time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Property Owners</h4>
                    <p className="text-sm text-muted-foreground">$200B+ in waterfront property with no transparency on environmental data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Tourism Businesses</h4>
                    <p className="text-sm text-muted-foreground">$14B industry depends on clean water, but can't access verified metrics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Government Agencies</h4>
                    <p className="text-sm text-muted-foreground">Struggle to prove ROI to taxpayers and secure future funding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE STAKES - What's at Risk */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background-deep" data-index="3">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              What’s at Risk if We Don’t Act
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card p-8 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Families</h3>
                <div className="text-2xl font-bold text-primary mb-2">2.7M</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Unsafe waters threaten health and recreation for Miami’s communities.
                </p>
              </div>
              <div className="glass-card p-8 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Property</h3>
                <div className="text-2xl font-bold text-primary mb-2">-15%</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Average property value decline in waterfront neighborhoods with documented water quality issues—erasing billions in homeowner equity. Coral Gables, Key Biscayne, and Miami Beach properties directly correlate to bay health.
                </p>
              </div>
              <div className="glass-card p-8 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300">
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Tourism</h3>
                <div className="text-2xl font-bold text-primary mb-2">$14B</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tourism economy at stake as visitors choose clearer waters elsewhere. One algal bloom closes beaches for weeks—costing millions daily. Dead zones mean dead zones for business.
                </p>
              </div>
              <div className="glass-card p-8 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300">
                <TreePine className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Environment</h3>
                <div className="text-2xl font-bold text-primary mb-2">1,200+</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Biodiversity loss threatens the bay’s delicate ecosystem balance.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <span className="text-foreground font-semibold">The correlation is clear:</span> Bay health directly impacts property values, tourism revenue, public health, and marine biodiversity. When one suffers, they all suffer. The question isn't if we can afford to act—it's whether we can afford not to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION - AI Chat Simulation */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background" data-index="4">
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              How Droobi Helps
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12 leading-relaxed">
              Droobi is your AI-powered guide to understanding Biscayne Bay's complex health data in real-time. No more searching through scattered reports or waiting weeks for answers. Ask questions in plain English, get instant insights backed by live data, and discover exactly where your action creates the most impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 hover:border-primary/40 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">Real-Time</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Live Bay Data</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Access current water quality metrics, pollution sources, and environmental trends as they happen—not weeks later in a dense government report.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:border-secondary/40 transition-all duration-300">
                <div className="text-3xl font-bold text-secondary mb-2">Instant</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Plain-English Answers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No PhD required. Ask complex questions about algal blooms, seagrass recovery, or pollution correlations and get clear, actionable answers in seconds.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:border-primary/40 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">Trackable</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Impact Transparency</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  See exactly how your support translates to bay health improvements. Track restoration progress, correlate funding to outcomes, hold everyone accountable.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 shadow-lg">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Try Droobi Now</h3>
                <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
                  Ask anything about Biscayne Bay's health. Watch how Droobi transforms complex environmental data into insights you can act on—whether you're a concerned resident, policymaker, or investor.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 min-h-[150px] text-foreground font-medium text-base leading-relaxed">
                {isTyping ? (
                  <span className="animate-pulse">Droobi is typing...</span>
                ) : (
                  <p>{aiResponse}</p>
                )}
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {aiQuestions.map((q, i) => (
                  <Button
                    key={i}
                    variant={currentQuestion === i ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentQuestion(i)}
                    className="min-w-[140px]"
                  >
                    {q.length > 25 ? q.slice(0, 22) + "..." : q}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF - Bay Health Metrics */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background-deep" data-index="4">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Bay Health Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {displayMetrics.map(({ label, value, trend, color }, idx) => (
                <Card key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 flex flex-col items-center text-center">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">{label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-3xl font-bold mb-2 ${color}`}>{value}</div>
                    <div className="flex justify-center items-center space-x-2 text-muted-foreground">
                      {trend === "up" && <TrendingUp className="h-5 w-5 text-primary" />}
                      {trend === "down" && <TrendingDown className="h-5 w-5 text-secondary" />}
                      {trend === "stable" && <AlertTriangle className="h-5 w-5 text-secondary" />}
                      <span className="text-sm capitalize">{trend}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACT - Economic Impact */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background" data-index="5">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Economic Impact
            </h2>
            <div className="glass-card p-12 text-center">
              <DollarSign className="mx-auto mb-6 h-12 w-12 text-primary" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto leading-relaxed">
                Biscayne Bay supports a $14 billion tourism economy and hundreds of billions in waterfront property value. Protecting water quality safeguards these vital economic assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS - Community Conversations */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background-deep" data-index="6">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(6) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Community Conversations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="glass-card p-6 flex flex-col items-center text-center">
                <Mic className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Listening Sessions</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Engaging local voices to understand concerns and priorities.
                </CardDescription>
              </Card>
              <Card className="glass-card p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Stakeholder Workshops</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Collaborating with agencies, businesses, and residents for solutions.
                </CardDescription>
              </Card>
              <Card className="glass-card p-6 flex flex-col items-center text-center">
                <Send className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-lg font-semibold mb-2">Transparent Reporting</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Sharing data openly to build trust and accountability.
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUST - Government Collaboration */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background" data-index="7">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(7) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Government Collaboration
            </h2>
            <div className="glass-card p-12 flex flex-col items-center text-center max-w-4xl mx-auto">
              <Briefcase className="h-12 w-12 text-primary mb-6" />
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                Partnering with 15+ government agencies to unify data, improve restoration efforts, and demonstrate clear ROI to taxpayers.
              </p>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg active:scale-95 transition-all duration-300 min-h-[3rem]">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION - Support the Bay */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background-deep" data-index="8">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(8) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Support the Bay
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {supportTiers.map(({ name, amount, description, icon, color }, idx) => (
                <Card key={idx} className={`rounded-2xl p-6 flex flex-col items-center text-center border-2 border-primary/20 glass-card ${color}`}>
                  <div className="mb-4 text-white">{icon}</div>
                  <CardTitle className="text-lg font-semibold mb-2 text-white">{name}</CardTitle>
                  <CardDescription className="text-white/80 mb-4">{description}</CardDescription>
                  <div className="text-2xl font-bold text-white">{amount}</div>
                  <Button size="sm" className="mt-6 w-full bg-white/90 text-primary hover:bg-white hover:text-primary transition-colors">
                    Donate
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background-deep" data-index="9">
        <div className="container mx-auto max-w-4xl text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible(9) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              Join Us in Protecting Biscayne Bay
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-muted-foreground">
              Every dollar, every decision, every data point matters. Together, we can ensure a healthier future for our bay and community.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg active:scale-95 transition-all duration-300 min-h-[3rem]">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
      
      </div>
    </div>
  );
};

export default BiscayneBayGPT;
