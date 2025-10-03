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
      {/* Hero Section with Miami Vibes */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden" data-index="0">
        {/* Miami-inspired gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-primary/10" />
        
        {/* Animated water ripples */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
        
        {/* Miami location badge */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Miami, Florida</span>
          </div>
        </div>
        
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
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed mb-4">
              The world's first AI-powered voice for a vital water body
            </p>
            <p className="text-xs sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-12">
              428 square miles of Miami's lifeblood • $14B tourism economy • 1,200+ marine species • Where innovation meets accountability
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

      {/* The Stakes - Why This Matters */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 bg-background relative overflow-hidden" data-index="9">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background-deep" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-12 sm:mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 text-xs sm:text-sm">
                The First of Its Kind
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                This Isn't Just Another <span className="text-primary">Environmental Platform</span>
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
                Biscayne Bay powers Miami's economy, sustains marine ecosystems, and provides recreation for millions. 
                For the first time, we're making every decision, dollar, and data point visible to everyone.
              </p>
            </div>

            {/* Real Stakes - Visual Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500" />
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">For Families & Communities</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Know if it's safe for your kids to swim. Track water quality in real-time. See exactly where restoration dollars go.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span className="text-muted-foreground">Real-time safety alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span className="text-muted-foreground">Community voice platform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span className="text-muted-foreground">Progress tracking dashboard</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-primary" />
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">For Government Agencies</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Transparent data sharing. Automated community sentiment analysis. ROI tracking for every restoration project.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Automated reporting to DERM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Evidence-based policy recommendations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Public accountability dashboard</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-600" />
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-base sm:text-lg text-foreground">For Tourism & Business</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Protect property values. Ensure sustainable tourism. Access verified environmental data for investors.
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      <span className="text-muted-foreground">Environmental impact reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      <span className="text-muted-foreground">Tourism sustainability metrics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      <span className="text-muted-foreground">Property value tracking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* The Numbers That Matter */}
            <div className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
                The Stakes Are Real
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">2.7M</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Miami residents affected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">$14B+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Tourism revenue at risk</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">428</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Square miles to protect</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-primary mb-2">1,200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Marine species dependent</div>
                </div>
              </div>
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

      {/* Why Biscayne Bay Matters - Reimagined */}
      <section className="py-16 sm:py-24 lg:py-32 px-4" data-index="3">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Why Every Dollar, Every Decision, <span className="text-primary">Every Data Point Matters</span>
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
                Billions invested. Zero visibility. Until now.
              </p>
              <p className="text-xs sm:text-base text-muted-foreground/80 max-w-3xl mx-auto">
                Biscayne Bay receives massive restoration funding, but families can't see if it's safe for their kids to swim. 
                Businesses can't track ROI. Government agencies can't prove impact. We're changing that.
              </p>
            </div>

            {/* Stakeholder Connection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* For Parents & Families */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">For Your Family</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Is it safe for my kids to swim today?</strong> Real-time water quality data 
                    means you don't have to guess. Know which beaches are safe, track pollution sources near your neighborhood, 
                    and see exactly where restoration dollars are improving the waters your children play in.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      Impact: 2.7M residents deserve to know
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* For Real Estate & Property Values */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">For Property Owners</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">$200B+ in waterfront property at stake.</strong> Bay health directly impacts 
                    your property value. Get transparent environmental data for due diligence, track improvement projects in your area, 
                    and access verified restoration ROI that protects your investment.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      Impact: Transparent data protects investments
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* For Tourism & Hospitality */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-green-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">For Tourism Businesses</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">$14B tourism economy depends on bay health.</strong> When tourists ask 
                    "Is the water clean?", you'll have real answers. Track environmental metrics that affect bookings, prove your 
                    sustainability commitments, and access data that helps you market Miami's restored waters.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      Impact: Sustainable tourism needs verified data
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* For Environmental Advocates */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <TreePine className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">For Environmentalists</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">1,200+ species need advocates with data.</strong> No more guessing if 
                    restoration is working. Track seagrass recovery, monitor species populations, access historical trends, and 
                    prove impact with AI-analyzed data that governments can't ignore.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      Impact: Data-driven advocacy wins funding
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* For Government & Policy */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">For Agencies & Policymakers</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">Prove ROI to taxpayers and secure future funding.</strong> Consolidate 
                    scattered data sources into one platform. Auto-generate impact reports. Show constituents exactly how their 
                    tax dollars improve water quality, with AI-powered transparency that builds public trust.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      Impact: Accountability unlocks more funding
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* For Developers & Tech Community */}
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">For Tech Innovators</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    <strong className="text-foreground">The future of civic infrastructure is here.</strong> See how AI consolidates 
                    fragmented environmental data into accessible insights. This is the model for every watershed, every city, 
                    every public system that needs transparency. Miami leads, tech follows.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      Impact: Blueprint for global infrastructure
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* The Transparency Gap */}
            <div className="mt-12 sm:mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 sm:p-10">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  The Problem We're Solving: <span className="text-primary">The Transparency Gap</span>
                </h3>
                <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                  Biscayne Bay receives hundreds of millions in restoration funding from federal, state, and local sources. 
                  But data is scattered across agencies, reports sit in filing cabinets, and citizens have no way to track 
                  if their tax dollars are working.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border">
                    <div className="text-3xl sm:text-5xl font-bold text-primary mb-2">15+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Government agencies managing bay data</div>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border">
                    <div className="text-3xl sm:text-5xl font-bold text-primary mb-2">$500M+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Invested in restoration over 5 years</div>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border">
                    <div className="text-3xl sm:text-5xl font-bold text-primary mb-2">0</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Unified platforms tracking impact... until now</div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-foreground font-medium">
                  Droobi aggregates scattered data, tracks every restoration dollar, and makes ROI visible to everyone. 
                  This is infrastructure transparency powered by AI.
                </p>
              </div>
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

      {/* Community Conversations & Progress Tracking */}
      <section className="py-16 sm:py-24 lg:py-32 px-4" data-index="7">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(7) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
                Community Conversations
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
                Track real-time progress on community concerns and government responses
              </p>
              <Badge variant="outline" className="border-primary/30 text-xs sm:text-sm">
                Updated Every Two Weeks
              </Badge>
            </div>

            {/* Active Community Issues */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-base sm:text-lg text-foreground mb-2">
                        North Bay Seagrass Die-Off
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-orange-500/30 text-orange-500 text-xs">In Progress</Badge>
                        <span className="text-xs text-muted-foreground">324 community voices</span>
                      </div>
                    </div>
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Community Concern Raised</span>
                        <span>Jan 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs sm:text-sm text-foreground">Residents report widespread seagrass mortality</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>DERM Investigation Started</span>
                        <span>Jan 22, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs sm:text-sm text-foreground">Water quality testing initiated across affected zones</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Next Update Expected</span>
                        <span>Feb 12, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-xs sm:text-sm text-foreground">Preliminary findings and action plan</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="w-full border-primary/30 hover:border-primary hover:bg-primary/10">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Join Conversation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border border-green-500/20">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-base sm:text-lg text-foreground mb-2">
                        Canal Cleanup Initiative
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-green-500/30 text-green-500 text-xs">Approved</Badge>
                        <span className="text-xs text-muted-foreground">$2.3M secured</span>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Community Proposal</span>
                        <span>Nov 10, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs sm:text-sm text-foreground">187 residents sign petition for canal maintenance</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>County Board Approval</span>
                        <span>Dec 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs sm:text-sm text-foreground">$2.3M funding approved for implementation</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>Implementation Begins</span>
                        <span>Q2 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs sm:text-sm text-foreground">Contractor selection and planning phase</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Community Impact:</span>
                      <span className="text-foreground font-medium">Improved water flow to 12 neighborhoods</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How It Works */}
            <div className="bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
                How Community Conversations Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">1. Share Concerns</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Citizens voice issues through Droobi conversations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">2. AI Analysis</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Patterns identified and synthesized into reports</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">3. Government Action</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Agencies respond with plans and timelines</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">4. Track Progress</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Community sees real-time updates on outcomes</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button size="lg" className="bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg active:scale-95 transition-all duration-300 min-h-[3rem]">
                <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Share Your Concern with Droobi
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