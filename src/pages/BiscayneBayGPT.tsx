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
  Send
} from "lucide-react";

const BiscayneBayGPT = () => {
  const { bayMetrics, loading: metricsLoading } = useBayHealthData();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [aiResponse, setAiResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Fallback metrics if database is empty
  const defaultMetrics = [
    { label: "Water Quality Score", value: "Fair-Poor", trend: "down", color: "text-orange-500" },
    { label: "Seagrass Coverage", value: "Recovering", trend: "up", color: "text-green-500" },
    { label: "Nutrient Loading", value: "High", trend: "down", color: "text-red-500" },
    { label: "Species Count", value: "1,200+", trend: "stable", color: "text-blue-500" }
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
      color: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    { 
      name: "Seagrass Guardian", 
      amount: "$25", 
      description: "Help restore vital underwater forests",
      icon: <Leaf className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-500"
    },
    { 
      name: "Marine Champion", 
      amount: "$100", 
      description: "Support marine life conservation",
      icon: <Fish className="h-6 w-6" />,
      color: "bg-gradient-to-br from-cyan-400 to-blue-500"
    },
    { 
      name: "Ocean Ambassador", 
      amount: "$500", 
      description: "Lead the charge for ocean advocacy",
      icon: <Waves className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    }
  ];

  const bayMetricsToRemove = [
    { label: "Water Quality Score", value: "Fair-Poor", trend: "down", color: "text-orange-500" },
    { label: "Seagrass Coverage", value: "Recovering", trend: "up", color: "text-green-500" },
    { label: "Nutrient Loading", value: "High", trend: "down", color: "text-red-500" },
    { label: "Species Count", value: "1,200+", trend: "stable", color: "text-blue-500" }
  ];

  const keyFacts = [
    "Biscayne Bay spans 428 square miles and connects to the Everglades",
    "The bay supports over 1,200 species of marine life",
    "Connected to hundreds of miles of canal systems",
    "Generates $14+ billion annually for Miami-Dade's economy",
    "Provides critical carbon sequestration through seagrass and mangroves"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
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
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % aiQuestions.length);
      setIsTyping(true);
      setAiResponse("");
      
      setTimeout(() => {
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
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  const isVisible = (index: number) => visibleItems.includes(index);

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden" data-index="0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/8" />
        
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Droobi Character - Simplified */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
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

            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
              Meet <span className="text-primary">Droobi</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Your AI guide to understanding and protecting Biscayne Bay
            </p>
            
            {/* Droobi's Story - Simplified */}
            <div className="max-w-4xl mx-auto mb-12 bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border">
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Droobi is an AI-powered platform that makes complex environmental data accessible to everyone. 
                From real-time water quality metrics to restoration impact tracking, Droobi connects communities 
                with the data they need to protect Biscayne Bay.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-background/50 rounded-xl p-4 sm:p-6 border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Fish className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Ecosystem Monitor</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Real-time tracking of 1,200+ marine species</p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-4 sm:p-6 border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Data Intelligence</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Transforming complex data into insights</p>
                </div>
                
                <div className="bg-background/50 rounded-xl p-4 sm:p-6 border border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Community Voice</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Connecting citizens with decision-makers</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <Button size="lg" className="bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg active:scale-95 transition-all duration-300 min-h-[3rem]">
                <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Talk to Droobi
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[3rem]">
                <Play className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Bay Voices Podcast
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Simulation */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden" data-index="1">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background-deep" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-foreground mb-8 sm:mb-12">
              AI-Powered Bay Intelligence
            </h2>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="w-full bg-background-deep rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-6 shadow-2xl border border-border">
                  <div className="w-full bg-background rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 flex flex-col min-h-[500px] sm:min-h-[600px]">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
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
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden border border-primary/30">
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
                    
                    <div className="mt-4 sm:mt-6 flex items-center space-x-2">
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
      </section>

      {/* Bay Health Metrics */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden" data-index="2">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background-deep" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-foreground mb-8 sm:mb-12">
              Real-Time Bay Health Dashboard
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {displayMetrics.map((metric, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="pb-2 p-4 sm:p-6">
                    <CardTitle className="text-sm sm:text-base text-foreground flex items-center justify-between">
                      {metric.label}
                      {metric.trend === 'up' && <TrendingUp className="h-4 w-4 text-primary" />}
                      {metric.trend === 'down' && <TrendingDown className="h-4 w-4 text-muted-foreground" />}
                      {metric.trend === 'stable' && <BarChart3 className="h-4 w-4 text-primary" />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-lg sm:text-xl font-semibold text-primary">{metric.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg text-foreground flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    2025 Biscayne Bay Report Card
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/bd0213b1-a118-4041-841d-217655eabc29.png" 
                      alt="Biscayne Bay Report Card showing water quality and habitat indicators" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Most regions showing poor to fair conditions with elevated nutrient levels
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-1">
                        <span>Chlorophyll-a</span>
                        <span>High</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-1">
                        <span>Nitrogen</span>
                        <span>Elevated</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-1">
                        <span>Phosphorus</span>
                        <span>Concerning</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg text-foreground flex items-center">
                    <Leaf className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Ecosystem Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Seagrass showing signs of recovery in Julia Tuttle Basin
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-muted-foreground">Seagrass Coverage</span>
                      <Badge variant="outline" className="text-xs sm:text-sm border-primary/30 text-foreground">Improving</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-muted-foreground">Sponge Population</span>
                      <Badge variant="outline" className="text-xs sm:text-sm border-primary/30 text-foreground">Stable</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-muted-foreground">Invasive Species</span>
                      <Badge variant="outline" className="text-xs sm:text-sm border-primary/30 text-foreground">Monitored</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 sm:py-24 lg:py-32 px-4" data-index="3">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-foreground mb-8 sm:mb-12">
              Why Biscayne Bay Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {keyFacts.map((fact, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-muted-foreground">{fact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden" data-index="4">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background-deep" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-foreground mb-8 sm:mb-12">
              Economic & Environmental Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">Tourism Revenue</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">$14B+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Annual economic impact from bay-dependent tourism</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">Property Values</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">$200B+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Waterfront real estate market value</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border text-center">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <TreePine className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">Carbon Storage</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-2">50K+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Tons of CO2 sequestered annually</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support the Bay */}
      <section className="py-16 sm:py-24 lg:py-32 px-4" data-index="5">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Support the Bay
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Join the mission to restore and protect Biscayne Bay. Every contribution supports research, restoration, and community advocacy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {supportTiers.map((tier, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader className="text-center pb-4 p-4 sm:p-6">
                    <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      {tier.icon}
                    </div>
                    <CardTitle className="text-sm sm:text-base text-foreground font-bold">{tier.name}</CardTitle>
                    <div className="text-xl sm:text-2xl font-bold text-primary mt-2">
                      {tier.amount}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center p-4 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">{tier.description}</p>
                    <Button className="w-full bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 text-xs sm:text-sm active:scale-95 transition-all duration-300 min-h-[2.5rem]">
                      <Heart className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Support Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Your support helps fund research, restoration efforts, and AI-powered advocacy for Biscayne Bay
              </p>
              <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[3rem]">
                <Users className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Join the Bay Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Government Collaboration */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden" data-index="6">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background-deep" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible(6) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-foreground mb-8 sm:mb-12">
              Collaborative Government Partnership
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg text-foreground flex items-center">
                    <Building2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Community Feedback Loop
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    APAS Labs serves as the vital bridge between community voices and government action. Through Droobi, we collect, analyze, and synthesize public input to provide actionable insights to Miami-Dade County and state agencies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Weekly reports to Miami-Dade DERM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Real-time community sentiment analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">Policy recommendation framework</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg text-foreground flex items-center">
                    <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Recent Community Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4">
                    <div className="bg-background/50 rounded-lg p-3 sm:p-4 border-l-2 border-primary">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                        <strong className="text-foreground">Top Community Concern:</strong> Seagrass die-off in North Bay
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Status: Forwarded to DERM • Response pending
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 sm:p-4 border-l-2 border-primary">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                        <strong className="text-foreground">Success Story:</strong> Canal cleanup initiative approved
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Status: $2.3M funding secured • Implementation Q2 2025
                      </p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 sm:p-4 border-l-2 border-primary">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                        <strong className="text-foreground">Emerging Issue:</strong> Invasive species sightings increase
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Status: Task force assembled • Action plan in development
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Badge variant="outline" className="border-primary/30 px-4 py-2 text-xs sm:text-sm">
                Trusted Government Partner Since 2024
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Voices of the Bay Podcast */}
      <section className="py-16 sm:py-24 lg:py-32 px-4" data-index="7">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(7) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
                Voices of the Bay Podcast
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
                Bi-weekly episodes generated from community conversations with Droobi
              </p>
              <Badge variant="outline" className="border-primary/30 text-xs sm:text-sm">
                New Episode Every Two Weeks
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Episode 1 */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="relative mb-4">
                    <div className="w-full aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                          <img 
                            src="/lovable-uploads/e1a87cc1-b7f5-4782-b7e7-0321dadee653.png" 
                            alt="Droobi" 
                            className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded-full"
                          />
                        </div>
                        <Play className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-primary" />
                      </div>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-primary text-xs">LIVE</Badge>
                  </div>
                  <CardTitle className="text-sm sm:text-base text-foreground">
                    Episode 12: "The North Bay Crisis"
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                    Community voices share concerns about water quality degradation
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-4">
                    <span>Feb 15, 2025</span>
                    <span>23 min</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    "Through Droobi's voice, residents share firsthand experiences of the recent seagrass die-off..."
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 text-xs sm:text-sm min-h-[2.5rem]">
                    <Play className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>

              {/* Episode 2 */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="relative mb-4">
                    <div className="w-full aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                          <img 
                            src="/lovable-uploads/e1a87cc1-b7f5-4782-b7e7-0321dadee653.png" 
                            alt="Droobi" 
                            className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded-full"
                          />
                        </div>
                        <Play className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-sm sm:text-base text-foreground">
                    Episode 11: "Success Stories"
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                    Celebrating wins in bay restoration and community action
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-4">
                    <span>Feb 1, 2025</span>
                    <span>18 min</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    "Droobi highlights community victories - from successful coral restoration to new cleanup programs..."
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 text-xs sm:text-sm min-h-[2.5rem]">
                    <Play className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>

              {/* Episode 3 */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="relative mb-4">
                    <div className="w-full aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                          <img 
                            src="/lovable-uploads/e1a87cc1-b7f5-4782-b7e7-0321dadee653.png" 
                            alt="Droobi" 
                            className="w-8 h-8 sm:w-12 sm:h-12 object-cover rounded-full"
                          />
                        </div>
                        <Play className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-sm sm:text-base text-foreground">
                    Episode 10: "Youth Voices"
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                    Young environmentalists share their vision for the bay
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-4">
                    <span>Jan 15, 2025</span>
                    <span>25 min</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    "Students from local schools tell Droobi about their innovative ideas for protecting marine life..."
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 text-xs sm:text-sm min-h-[2.5rem]">
                    <Play className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[3rem]">
                <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                View All Episodes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden" data-index="8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/8" />
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible(8) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-8">
              Join the Mission
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto">
              Together, we can give Biscayne Bay the voice it deserves. Every conversation, every contribution brings us closer to a healthier, more resilient bay ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <Button size="lg" className="bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg active:scale-95 transition-all duration-300 min-h-[3rem]">
                <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Start Conversation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300 min-h-[3rem]">
                <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Leave Voicemail
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiscayneBayGPT;