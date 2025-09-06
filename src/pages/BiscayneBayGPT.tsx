import React, { useState, useEffect } from "react";
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
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [aiResponse, setAiResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
      description: "Join Droobi's mission to protect our waters",
      icon: <Droplets className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    { 
      name: "Seagrass Guardian", 
      amount: "$25", 
      description: "Help restore vital underwater forests",
      icon: <Leaf className="h-6 w-6" />,
      color: "bg-green-500"
    },
    { 
      name: "Ecosystem Champion", 
      amount: "$100", 
      description: "Support comprehensive bay restoration",
      icon: <Fish className="h-6 w-6" />,
      color: "bg-cyan-500"
    },
    { 
      name: "Bay Ambassador", 
      amount: "$500", 
      description: "Lead the charge for bay advocacy",
      icon: <Waves className="h-6 w-6" />,
      color: "bg-blue-600"
    }
  ];

  const bayMetrics = [
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
    <div className="min-h-screen bg-gradient-to-br from-background-deep via-background-start to-background-end">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" data-index="0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        <div className="container mx-auto relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Waves className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-6xl font-bold text-foreground-primary mb-6">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Droobi</span>
            </h1>
            <p className="text-2xl text-foreground-secondary mb-4">
              The Voice of Biscayne Bay
            </p>
            <p className="text-xl text-foreground-muted max-w-4xl mx-auto mb-8">
              Our signature AI project humanizes Miami-Dade's most vital water body, giving voice to the millions of species that call Biscayne Bay home. Through advanced AI and data modeling, we're creating transparency, accountability, and action for bay restoration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <Mic className="mr-2 h-5 w-5" />
                Talk to Droobi
              </Button>
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                <Play className="mr-2 h-5 w-5" />
                Bay Voices Podcast
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Simulation */}
      <section className="py-16 px-4" data-index="1">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center text-foreground-primary mb-12">
              AI-Powered Bay Intelligence
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-[2rem] p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                            <Waves className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-white font-medium">Droobi</span>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 overflow-hidden">
                        <div className="bg-blue-600/20 rounded-2xl p-4 mb-4">
                          <p className="text-blue-200 text-sm">
                            {aiQuestions[currentQuestion]}
                          </p>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-2xl p-4">
                          <div className="flex items-start space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                              <Waves className="h-3 w-3 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 text-sm leading-relaxed">
                                {aiResponse}
                                {isTyping && <span className="animate-pulse">|</span>}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex items-center space-x-2">
                        <input 
                          type="text" 
                          placeholder="Ask Droobi about the bay..."
                          className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm"
                        />
                        <button className="bg-blue-500 rounded-full p-2">
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

      {/* Bay Health Metrics */}
      <section className="py-16 px-4 bg-gradient-to-r from-background-start/50 to-background-end/50" data-index="2">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center text-foreground-primary mb-12">
              Real-Time Bay Health Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bayMetrics.map((metric, index) => (
                <Card key={index} className="glass-card border-0 hover:scale-105 transition-transform duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-foreground-primary flex items-center justify-between">
                      {metric.label}
                      {metric.trend === 'up' && <TrendingUp className="h-5 w-5 text-green-500" />}
                      {metric.trend === 'down' && <TrendingDown className="h-5 w-5 text-red-500" />}
                      {metric.trend === 'stable' && <BarChart3 className="h-5 w-5 text-blue-500" />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-foreground-primary flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-orange-500" />
                    2025 Biscayne Bay Report Card
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/bd0213b1-a118-4041-841d-217655eabc29.png" 
                      alt="Biscayne Bay Report Card showing water quality and habitat indicators" 
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  <p className="text-foreground-secondary mb-4">
                    Most regions showing poor to fair conditions with elevated nutrient levels
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-foreground-muted mb-1">
                        <span>Chlorophyll-a</span>
                        <span>High</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-foreground-muted mb-1">
                        <span>Nitrogen</span>
                        <span>Elevated</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-foreground-muted mb-1">
                        <span>Phosphorus</span>
                        <span>Concerning</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-foreground-primary flex items-center">
                    <Leaf className="mr-2 h-5 w-5 text-green-500" />
                    Ecosystem Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-secondary mb-4">
                    Seagrass showing signs of recovery in Julia Tuttle Basin
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-muted">Seagrass Coverage</span>
                      <Badge variant="outline" className="text-green-500 border-green-500">Improving</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-muted">Sponge Population</span>
                      <Badge variant="outline" className="text-blue-500 border-blue-500">Stable</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-muted">Invasive Species</span>
                      <Badge variant="outline" className="text-red-500 border-red-500">Monitored</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 px-4" data-index="3">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center text-foreground-primary mb-12">
              Why Biscayne Bay Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFacts.map((fact, index) => (
                <Card key={index} className="glass-card border-0 hover:glow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mt-2 flex-shrink-0" />
                      <p className="text-foreground-secondary">{fact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16 px-4 bg-gradient-to-r from-background-start/30 to-background-end/30" data-index="4">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center text-foreground-primary mb-12">
              Economic & Environmental Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card border-0 text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground-primary">Tourism Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-500 mb-2">$14B+</p>
                  <p className="text-foreground-muted">Annual economic impact from bay-dependent tourism</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground-primary">Property Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-500 mb-2">$200B+</p>
                  <p className="text-foreground-muted">Waterfront real estate market value</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4">
                    <TreePine className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground-primary">Carbon Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-cyan-500 mb-2">50K+</p>
                  <p className="text-foreground-muted">Tons of CO2 sequestered annually</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support the Bay */}
      <section className="py-20 px-4" data-index="5">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-foreground-primary mb-6">
                Support the Bay
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Join Droobi's mission to restore and protect Biscayne Bay. Every contribution helps give voice to the millions of species that call our bay home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {supportTiers.map((tier, index) => (
                <Card key={index} className="glass-card border-0 hover:scale-105 transition-all duration-300 group">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-16 h-16 rounded-full ${tier.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {tier.icon}
                    </div>
                    <CardTitle className="text-foreground-primary">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                      {tier.amount}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-foreground-muted mb-6">{tier.description}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                      <Heart className="mr-2 h-4 w-4" />
                      Support Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-foreground-muted mb-6">
                Your support helps fund research, restoration efforts, and AI-powered advocacy for Biscayne Bay
              </p>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                <Users className="mr-2 h-5 w-5" />
                Join the Bay Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20" data-index="6">
        <div className="container mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible(6) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-foreground-primary mb-6">
              Ready to Make Waves?
            </h2>
            <p className="text-xl text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Join the AI-powered movement to restore Biscayne Bay. Talk to Droobi, support restoration efforts, and help create a sustainable future for our most precious water resource.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Conversation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                <Phone className="mr-2 h-5 w-5" />
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