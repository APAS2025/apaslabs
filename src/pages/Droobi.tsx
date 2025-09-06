import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Droplets, 
  Waves, 
  Building2, 
  Filter,
  Wrench,
  Search,
  Users,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Book,
  Globe,
  Zap,
  Target,
  Network,
  Database,
  Phone,
  Smartphone
} from "lucide-react";

const DroobiLanguageLab = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeWordCard, setActiveWordCard] = useState<string | null>(null);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  // Interactive word cards data
  const wordCards = [
    {
      id: "potable",
      word: "Potable",
      category: "Water",
      englishDef: "Safe drinking water that meets health standards",
      technicalDef: "Water treated and tested to meet EPA drinking water standards under the Safe Drinking Water Act",
      etymology: "From Latin 'potare' meaning 'to drink'",
      vendors: ["Aqua Systems", "H2O Technologies", "PureFlow Inc."],
      icon: <Droplets className="h-6 w-6" />
    },
    {
      id: "bioswale",
      word: "Bioswale",
      category: "Stormwater",
      englishDef: "Landscaped depression that collects rainwater runoff from roads and parking lots",
      technicalDef: "Linear stormwater conveyance system designed to remove silt and pollution through vegetation, soil, and biological processes",
      etymology: "Bio (life) + Swale (low-lying wet ground)",
      vendors: ["GreenTech Solutions", "EcoFlow Systems", "BioStorm Inc."],
      icon: <Waves className="h-6 w-6" />
    },
    {
      id: "activated-sludge",
      word: "Activated Sludge",
      category: "Wastewater",
      englishDef: "Living bacteria mixture that eats pollution in wastewater treatment",
      technicalDef: "Biological flocs composed of bacteria and protozoa used in secondary treatment to remove dissolved organic matter",
      etymology: "Activated (made active) + Sludge (semi-solid waste)",
      vendors: ["BioTreat Corp", "Sludge Masters", "AquaBio Systems"],
      icon: <Filter className="h-6 w-6" />
    }
  ];

  // iPhone slider content for different demo scenarios
  const iphoneSlides = [
    {
      title: "Beautiful Web Interface",
      content: "Welcome to Droobi",
      description: "Clean, intuitive interface for exploring infrastructure language",
      mockupType: "interface"
    },
    {
      title: "Real-Time Questions",
      content: "What are bioswales and how do they prevent flooding?",
      description: "Users ask real questions about water infrastructure",
      mockupType: "question"
    },
    {
      title: "Vendor Connections",
      content: "Pipe Infrastructure Vendors",
      description: "Connect terms to real-world solution providers",
      mockupType: "vendors"
    },
    {
      title: "AI-Powered Drew",
      content: "Drew explains: Bioswales are...",
      description: "AI streams intelligent responses with vendor connections",
      mockupType: "ai-response"
    }
  ];

  // Drew's streaming response simulation
  const drewResponse = "Bioswales are engineered landscape features designed to remove silt and pollution from surface runoff water. They consist of a swaled drainage course with gently sloped sides and are filled with vegetation, compost and/or riprap. The water is ponded and treated through filtration, biological processes, and evapotranspiration. They're particularly effective for managing stormwater in urban areas and can reduce flooding while improving water quality.";

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

  // Auto-advance iPhone slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % iphoneSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Simulate Drew's streaming response
  useEffect(() => {
    if (currentSlide === 3) { // AI response slide
      setIsStreaming(true);
      setStreamingText("");
      let index = 0;
      const streamInterval = setInterval(() => {
        if (index < drewResponse.length) {
          setStreamingText(drewResponse.slice(0, index + 1));
          index += 2; // Stream faster
        } else {
          setIsStreaming(false);
          clearInterval(streamInterval);
        }
      }, 50);

      return () => clearInterval(streamInterval);
    }
  }, [currentSlide]);

  const isVisible = (index: number) => visibleItems.includes(index);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % iphoneSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + iphoneSlides.length) % iphoneSlides.length);
  };

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" data-index="0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        <div className="container mx-auto relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/30 text-primary">
              APAS Labs Signature Project
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Droobi
              </span>
              <br />
              <span className="text-foreground">
                Language Infrastructure Lab
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              The world's first living lab where language becomes infrastructure. 
              Every word is a dynamic, evolving knowledge card—standardized, humanized, and operationalized.
            </p>

            {/* Magical Droobi Character - smaller version */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute -inset-4 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-primary/20 animate-ping animation-delay-0"></div>
                </div>
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl shadow-primary/40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 animate-bounce">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="mr-2 h-5 w-5" />
                Try Droobi Beta
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                <Book className="mr-2 h-5 w-5" />
                Explore Language Cards
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4" data-index="1">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-8">
                <span className="text-foreground">Infrastructure Collapses First in </span>
                <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Language
                </span>
              </h2>
              <div className="glass-card p-8 text-left">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Resilience means different things to engineers, policymakers, and activists. 'Digital twin' is a simulation to one, a 3D model to another. Acronyms and jargon shut out citizens and elected officials.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This confusion wastes billions, slows innovation, and erodes trust. <strong className="text-primary">Language has become the hidden failure of infrastructure.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Word Cards Section */}
      <section className="py-16 px-4" data-index="2">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center font-satoshi mb-12">
              <span className="text-foreground">Interactive </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Language Cards
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {wordCards.map((card, index) => (
                <Card 
                  key={card.id}
                  className={`glass-card cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-primary/20 ${
                    activeWordCard === card.id ? 'border-primary shadow-primary/30' : ''
                  }`}
                  onClick={() => setActiveWordCard(activeWordCard === card.id ? null : card.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                        {card.icon}
                      </div>
                      <Badge variant="secondary">{card.category}</Badge>
                    </div>
                    <CardTitle className="text-xl font-satoshi">{card.word}</CardTitle>
                    <CardDescription className="text-sm">
                      {card.englishDef}
                    </CardDescription>
                  </CardHeader>
                  
                  {activeWordCard === card.id && (
                    <CardContent className="pt-0">
                      <div className="space-y-4 animate-fade-in">
                        <div className="p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-400/20">
                          <h4 className="font-semibold text-blue-400 mb-2">Technical Definition</h4>
                          <p className="text-sm text-muted-foreground">{card.technicalDef}</p>
                        </div>
                        
                        <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-400/20">
                          <h4 className="font-semibold text-purple-400 mb-2">Etymology</h4>
                          <p className="text-sm text-muted-foreground">{card.etymology}</p>
                        </div>
                        
                        <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-400/20">
                          <h4 className="font-semibold text-green-400 mb-2">Connected Vendors</h4>
                          <div className="flex flex-wrap gap-2">
                            {card.vendors.map((vendor, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs border-green-400/30">
                                {vendor}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button size="sm" variant="ghost" className="w-full text-primary hover:bg-primary/10">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Ask Drew About This
                        </Button>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Slider Interface Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" data-index="3">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-satoshi mb-6">
                <span className="text-foreground">Swipe. Learn. </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Connect.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience how Droobi transforms complex infrastructure language into intuitive, interactive conversations.
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* iPhone Slider Container */}
              <div className="flex justify-center items-center space-x-8">
                {/* Navigation Arrow Left */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="hover:bg-primary/10 text-primary"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                {/* iPhone Mockup */}
                <div className="relative">
                  <div className="w-80 h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                    {/* iPhone notch */}
                    <div className="bg-black w-32 h-6 rounded-full mx-auto mb-4"></div>
                    
                    {/* Screen content */}
                    <div className="h-full bg-gradient-to-b from-white to-gray-50 rounded-[2rem] p-6 overflow-hidden">
                      {/* Dynamic content based on current slide */}
                      {currentSlide === 0 && (
                        <div className="text-center h-full flex flex-col justify-center">
                          <div className="mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                              <Brain className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Droobi</h3>
                            <p className="text-gray-600 text-sm">Your AI guide to infrastructure language</p>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-200">
                              <p className="text-sm text-gray-700">Search any water term...</p>
                            </div>
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                              <p className="text-sm text-gray-700">Connect with vendors...</p>
                            </div>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
                              <p className="text-sm text-gray-700">Learn the science...</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentSlide === 1 && (
                        <div className="h-full flex flex-col">
                          <div className="bg-gray-100 rounded-lg p-3 mb-4">
                            <div className="flex items-center space-x-2">
                              <Search className="h-4 w-4 text-gray-500" />
                              <input 
                                type="text" 
                                placeholder="Ask about water infrastructure..."
                                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-500"
                                readOnly
                              />
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <Users className="h-4 w-4 text-white" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm text-gray-800 font-medium">Citizen Question</p>
                                <p className="text-sm text-gray-600 mt-1">
                                  "What are bioswales and how do they prevent flooding in our neighborhood?"
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <p className="text-sm text-green-700 font-medium">Drew is researching...</p>
                            </div>
                            <div className="space-y-1">
                              <div className="w-3/4 h-2 bg-green-200 rounded animate-pulse"></div>
                              <div className="w-1/2 h-2 bg-green-200 rounded animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentSlide === 2 && (
                        <div className="h-full flex flex-col">
                          <div className="text-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Pipe Infrastructure</h3>
                            <p className="text-sm text-gray-600">Connected Vendors & Solutions</p>
                          </div>
                          
                          <div className="space-y-3 flex-1 overflow-y-auto">
                            {["AquaTech Solutions", "PipeFlow Systems", "HydroMax Corp", "FlowGuard Pro", "AquaConnect Ltd"].map((vendor, idx) => (
                              <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium text-gray-800 text-sm">{vendor}</p>
                                    <p className="text-xs text-gray-500">Infrastructure Solutions</p>
                                  </div>
                                  <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <Button size="sm" className="w-full mt-4 bg-primary text-white">
                            <Network className="mr-2 h-4 w-4" />
                            Connect with Vendors
                          </Button>
                        </div>
                      )}

                      {currentSlide === 3 && (
                        <div className="h-full flex flex-col">
                          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg mb-4 border border-primary/20">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                <Brain className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">Drew AI</p>
                                <p className="text-xs text-gray-600">Infrastructure Expert</p>
                              </div>
                            </div>
                            
                            <div className="bg-white/70 p-3 rounded-lg">
                              <p className="text-sm text-gray-800 leading-relaxed">
                                {streamingText}
                                {isStreaming && <span className="animate-pulse">|</span>}
                              </p>
                            </div>
                          </div>

                          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                            <p className="text-xs text-green-700 font-medium mb-2">Related Vendors Streaming...</p>
                            <div className="space-y-2">
                              {["GreenTech Solutions", "EcoFlow Systems", "BioStorm Inc."].map((vendor, idx) => (
                                <div key={idx} className={`flex items-center space-x-2 ${idx <= Math.floor(streamingText.length / 50) ? 'opacity-100' : 'opacity-30'}`}>
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <p className="text-xs text-green-800">{vendor}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Slide indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {iphoneSlides.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentSlide ? 'bg-primary w-6' : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Navigation Arrow Right */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="hover:bg-primary/10 text-primary"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Slide Title */}
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {iphoneSlides[currentSlide].title}
                </h3>
                <p className="text-muted-foreground">
                  {iphoneSlides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Lab Model Section */}
      <section className="py-16 px-4" data-index="4">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold font-satoshi mb-6">
                <span className="text-foreground">Built as a </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Living Lab
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Droobi is not static. It is continuously updated, curated by experts, enriched by vendors, and informed by citizens. 
                Guardrails ensure accuracy while community feedback ensures the system evolves with the field.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Database className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-satoshi">Expert Curated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Technical definitions reviewed and approved by industry experts and practitioners.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-xl font-satoshi">Community Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Citizens and stakeholders contribute feedback, ensuring language serves everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Network className="h-8 w-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl font-satoshi">Vendor Connected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Direct connections to solution providers, making language actionable and practical.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" data-index="5">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold font-satoshi mb-6">
                <span className="text-foreground">Be Part of Building </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Droobi
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Droobi is a signature APAS Labs project, under active development. We are inviting early access partners, 
                practitioners, vendors, and citizens to shape its future. Your feedback, requirements, and contributions will be 
                recognized as part of the founding community.
              </p>

              <div className="glass-card p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="mb-4 bg-background/50 border-primary/30 focus:border-primary"
                    />
                    <Input 
                      placeholder="Email Address" 
                      type="email"
                      className="mb-4 bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 rounded-lg bg-background/50 border border-primary/30 text-foreground mb-4 focus:border-primary focus:outline-none">
                      <option>Select Your Role</option>
                      <option>Vendor/Solution Provider</option>
                      <option>Regulator/Government</option>
                      <option>Citizen/Community Member</option>
                      <option>Student/Researcher</option>
                      <option>Engineer/Practitioner</option>
                    </select>
                    <textarea 
                      placeholder="Optional: Share your thoughts on infrastructure language challenges..."
                      className="w-full p-3 rounded-lg bg-background/50 border border-primary/30 text-foreground resize-none focus:border-primary focus:outline-none"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 px-8">
                  <Target className="mr-2 h-5 w-5" />
                  Sign Up for Early Access
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8">
                  <Globe className="mr-2 h-5 w-5" />
                  Learn More About APAS Labs
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6 italic">
                Every contribution will be acknowledged. This is not just a product—it's a living lab, built with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Connection */}
      <section className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            <strong className="text-primary">Droobi</strong> — Where Words Become Infrastructure
          </p>
          <p className="text-sm text-muted-foreground">
            Part of the APAS Labs ecosystem alongside RegOS, PIP, Biscayne Bay GPT, and Carbon Visa
          </p>
        </div>
      </section>
    </div>
  );
};

export default DroobiLanguageLab;