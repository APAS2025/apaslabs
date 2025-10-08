import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield,
  Search,
  Users,
  Sparkles,
  Building2,
  Database,
  BookOpen,
  CheckCircle2,
  Network,
  Globe,
  Zap,
  Target,
  GraduationCap,
  FileCheck,
  Lock,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Code2,
  Layers,
  Activity,
  Microscope,
  Trophy
} from "lucide-react";

const OraklesPage = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [utilitiesCount, setUtilitiesCount] = useState(0);
  const [termsCount, setTermsCount] = useState(0);
  const [investmentCount, setInvestmentCount] = useState(0);

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

  // Animated counters
  useEffect(() => {
    if (visibleItems.includes(1)) {
      const utilitiesTimer = setInterval(() => {
        setUtilitiesCount(prev => {
          if (prev >= 50000) {
            clearInterval(utilitiesTimer);
            return 50000;
          }
          return prev + 1000;
        });
      }, 20);

      const termsTimer = setInterval(() => {
        setTermsCount(prev => {
          if (prev >= 40000) {
            clearInterval(termsTimer);
            return 40000;
          }
          return prev + 800;
        });
      }, 20);

      const investmentTimer = setInterval(() => {
        setInvestmentCount(prev => {
          if (prev >= 1.3) {
            clearInterval(investmentTimer);
            return 1.3;
          }
          return prev + 0.1;
        });
      }, 100);

      return () => {
        clearInterval(utilitiesTimer);
        clearInterval(termsTimer);
        clearInterval(investmentTimer);
      };
    }
  }, [visibleItems]);

  const isVisible = (index: number) => visibleItems.includes(index);

  const problems = [
    {
      icon: <Network className="h-8 w-8" />,
      title: "Regulatory Fragmentation",
      stat: "50,000+",
      label: "U.S. Utilities",
      description: "Each utility has its own playbook, leaving engineers, regulators, and contractors translating rather than solving.",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Chaos",
      stat: "<10%",
      label: "Have Structured Data",
      description: "70% of water utilities still rely on PDF reports and unlinked spreadsheets.",
      color: "from-orange-500/20 to-yellow-500/20"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Vendor Opacity",
      stat: "0%",
      label: "Verified Performance",
      description: "Vendors can't prove what their 'smart' solutions actually do, and governments can't verify claims.",
      color: "from-yellow-500/20 to-red-500/20"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Knowledge Silos",
      stat: "Lost",
      label: "When People Retire",
      description: "Institutional knowledge retires with people instead of staying within systems.",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "The Living Lexicon",
      stat: "40,000+",
      label: "Defined Terms",
      description: "A dynamic, API-ready dictionary of infrastructure—covering terms from codes, standards, and best practices.",
      highlights: [
        "Linked to real code references (Chapter 24, FBC, EPA, FDEP)",
        "AI-curated and continuously updated",
        "Powers permitting agents to training platforms"
      ],
      color: "from-primary/20 to-blue-500/20"
    },
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: "Vendor Provenance Cards",
      stat: "100%",
      label: "Certified Products",
      description: "Every product gets a Provenance Sheet—a digital model card that certifies origin, compliance, and claims.",
      highlights: [
        "Linked to PIP certification",
        "Tracks 'Made in America' credentials",
        "AI model transparency"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "Semantic Search",
      stat: "Instant",
      label: "Discovery",
      description: "Find not just keywords, but meanings. Built for both engineers and policymakers.",
      highlights: [
        "Ask natural language questions",
        "Get connected codes and vendors",
        "Practical examples included"
      ],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Orakles Academy",
      stat: "24/7",
      label: "Learning",
      description: "Micro-learning meets compliance. Each definition links to training cards and quizzes.",
      highlights: [
        "Built for credentialing",
        "Continual learning pathways",
        "Learn the why behind every standard"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const moatPoints = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Domain Depth",
      description: "Built inside the system, not for it. Two decades of lived experience managing $9B+ in infrastructure programs.",
      color: "primary"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Knowledge Infrastructure",
      description: "The grammar of governance—the structured ontology that makes interoperability and agentic AI possible.",
      color: "secondary"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Certification Trust",
      description: "Every definition and vendor card can be audited, certified, and monetized through PIP.",
      color: "accent"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Multi-Stakeholder",
      description: "Bridges government, industry, academia, and community—creating an unstoppable network effect.",
      color: "primary"
    }
  ];

  const proofPoints = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Miami-Dade County",
      description: "Regulatory code translation into structured APIs (RegOS)"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Biscayne Bay",
      description: "Multi-agency terminology alignment for restoration"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Opa-locka & Hollywood",
      description: "Permitting workflows linked to inspection data"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "NIST & ISO 42001",
      description: "AI governance framework alignment"
    }
  ];

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section - High Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-index="0">
        {/* Gradient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/8" />
        
        {/* Animated glows */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[400px] bg-secondary/15 rounded-full blur-3xl float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="space-y-8 sm:space-y-12">
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/30 text-primary animate-fade-in">
              Knowledge Infrastructure Platform
            </Badge>
            
            {/* Main headline with animation */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-satoshi leading-tight animate-fade-in">
                <span className="block text-foreground mb-4">
                  Orakles
                </span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow">
                  The Language of Infrastructure
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.3s]">
                The first AI-powered knowledge and vendor intelligence platform built exclusively for the public infrastructure ecosystem.
              </p>
            </div>

            {/* Floating Orakles Icon */}
            <div className="flex justify-center my-12 animate-fade-in [animation-delay:0.5s]">
              <div className="relative float">
                <div className="absolute -inset-8 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full border-2 border-primary/20 animate-ping"></div>
                </div>
                <div className="absolute -inset-4 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-secondary/20 animate-ping animation-delay-500"></div>
                </div>
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl glow-primary">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Brain className="h-12 w-12 text-white animate-pulse" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-3 animate-bounce shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in [animation-delay:0.7s]">
              <Button size="lg" className="text-lg px-10 py-6 h-auto font-semibold bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg shadow-primary/25 active:scale-95 transition-all duration-300">
                <Zap className="mr-2 h-5 w-5" />
                Request Early Access
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore the Lexicon
              </Button>
            </div>

            {/* Trust indicators with CheckCircles */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in [animation-delay:0.9s]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>40,000+ Terms Defined</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Living Labs Validated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>NIST & ISO Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Animated Stats */}
      <section className="py-32 bg-background relative overflow-hidden" data-index="1">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Section Header */}
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-8">
                <span className="text-foreground">The </span>
                <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Problem
                </span>
              </h2>
              <p className="text-2xl sm:text-3xl text-foreground mb-6 font-semibold">
                Every utility speaks a different language—literally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Across <span className="text-primary font-bold">{utilitiesCount.toLocaleString()}+</span> U.S. utilities, thousands of consultants, and multiple regulatory bodies, the same words mean different things to different people.
              </p>
            </div>

            {/* Animated Problem Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
              {problems.map((problem, index) => (
                <Card 
                  key={index} 
                  className={`glass-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {problem.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">{problem.stat}</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">{problem.label}</div>
                    </div>
                    <CardTitle className="text-xl font-satoshi">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Impact Statement */}
            <div className="max-w-5xl mx-auto">
              <Card className="glass-card p-8 sm:p-12 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
                <div className="text-center space-y-4">
                  <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    ${investmentCount.toFixed(1)}T
                  </div>
                  <p className="text-xl sm:text-2xl text-foreground font-semibold">
                    Infrastructure Investment at Stake
                  </p>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    This lack of shared language and intelligence is <span className="text-primary font-bold">the single biggest reason modernization stalls</span>.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* The Origin Section */}
      <section className="py-32 bg-gradient-to-b from-background to-background-deep relative overflow-hidden" data-index="2">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl float-delayed" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-5xl mx-auto transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-12 text-center">
              <span className="text-foreground">The </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Origin
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="glass-card p-8 space-y-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Born from <span className="text-foreground font-semibold">two decades of lived experience</span> leading one of the largest water and sewer programs in the U.S.
                </p>
              </div>

              <div className="glass-card p-8 space-y-6 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-secondary/20">
                    <FileCheck className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">40,000+</div>
                    <div className="text-sm text-muted-foreground">Permits Managed</div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Working across agencies that had the <span className="text-foreground font-semibold">data but not the governance</span>, the tools but not the translation.
                </p>
              </div>
            </div>

            <Card className="glass-card p-10 mt-8 border-2 border-primary/20">
              <div className="text-center space-y-6">
                <p className="text-2xl text-foreground font-semibold leading-relaxed">
                  You can't build AI for infrastructure until you build the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ontology of infrastructure</span>.
                </p>
                <div className="pt-4">
                  <p className="text-3xl text-primary font-bold">
                    You can't automate what you haven't defined.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      {/* The Solution Section */}
      <section className="py-32 bg-background relative overflow-hidden" data-index="3">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/30 via-background to-background-deep/30" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-8">
                <span className="text-foreground">The </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Solution
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Orakles connects engineers, regulators, consultants, and vendors through a <span className="text-primary font-semibold">shared semantic layer</span>—a structured, queryable language that defines every concept, standard, and product in infrastructure.
              </p>
            </div>

            <Card className="glass-card p-12 max-w-6xl mx-auto mb-16 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Layers className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-2xl text-foreground font-semibold leading-relaxed">
                    Transforms the world's <span className="text-muted-foreground">unstructured regulatory documents</span>, <span className="text-muted-foreground">technical specifications</span>, and <span className="text-muted-foreground">vendor catalogs</span> into <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">living, intelligent definitions</span>.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section - Premium Cards */}
      <section className="py-32 bg-gradient-to-b from-background-deep to-background relative overflow-hidden" data-index="4">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-5xl sm:text-6xl font-bold font-satoshi mb-20 text-center">
              <span className="text-foreground">Key Features & </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Modules
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`glass-card group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-6 p-8">
                    <div className="flex items-start justify-between">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{feature.stat}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{feature.label}</div>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-satoshi mb-3">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Moat Section - Competitive Advantage */}
      <section className="py-32 bg-background relative overflow-hidden" data-index="5">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-deep" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl float" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-8">
                <span className="text-foreground">Our </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Moat
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Four layers of competitive advantage that no siloed vendor can replicate
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {moatPoints.map((point, index) => (
                <Card 
                  key={index} 
                  className={`glass-card group hover:shadow-2xl hover:shadow-${point.color}/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-4 p-8">
                    <div className={`p-4 rounded-xl bg-${point.color}/10 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      {point.icon}
                    </div>
                    <CardTitle className="text-2xl font-satoshi flex items-center space-x-2">
                      <Lock className={`h-5 w-5 text-${point.color}`} />
                      <span>{point.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-10 mt-12 max-w-4xl mx-auto border-2 border-primary/20">
              <p className="text-2xl text-center text-foreground font-semibold">
                Creating a <span className="text-primary">network effect across sectors</span> that compounds with every new stakeholder
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof of Concept Section */}
      <section className="py-32 bg-gradient-to-b from-background-deep to-background relative overflow-hidden" data-index="6">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(6) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-8">
                <span className="text-foreground">Proof of </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Concept
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Validated through real-world living labs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {proofPoints.map((point, index) => (
                <Card 
                  key={index} 
                  className={`glass-card group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {point.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg font-satoshi mb-2">{point.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {point.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-8 max-w-4xl mx-auto border-2 border-primary/20">
              <p className="text-xl text-center">
                <span className="text-primary font-bold">These aren't prototypes</span>
                <span className="text-foreground font-semibold">—they're </span>
                <span className="text-foreground font-semibold">living labs feeding the Orakles knowledge base</span>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Future Section - Grand Finale */}
      <section className="py-40 bg-background relative overflow-hidden" data-index="7">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible(7) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-satoshi mb-12">
              <span className="text-foreground">The </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Future
              </span>
            </h2>
            
            <div className="glass-card p-12 sm:p-16 space-y-10 mb-16 border-2 border-primary/20">
              <p className="text-3xl sm:text-4xl text-foreground font-bold leading-relaxed">
                Creating a new category: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Knowledge Infrastructure</span>
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Not just defining terms—<span className="text-foreground font-semibold">defining trust</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Not just organizing data—<span className="text-foreground font-semibold">organizing how cities learn</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Not just bridging systems—<span className="text-foreground font-semibold">bridging how people decide</span>
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Not just connecting vendors—<span className="text-foreground font-semibold">connecting how cities act</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-3xl sm:text-4xl text-primary font-bold leading-relaxed">
                  Turning infrastructure from paperwork into intelligence
                </p>
              </div>
            </div>

            {/* Taglines Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                "The Language of Infrastructure",
                "Turning Codes into Intelligence",
                "Where Regulation Meets AI",
                "Define. Certify. Connect."
              ].map((tagline, index) => (
                <Card 
                  key={index}
                  className={`glass-card p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-lg font-semibold text-foreground">{tagline}</p>
                </Card>
              ))}
            </div>

            {/* Final CTA */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="text-xl px-12 py-8 h-auto font-bold bg-gradient-to-br from-primary via-secondary to-accent hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all duration-300">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Join the Revolution
                </Button>
                <Button variant="outline" size="lg" className="text-xl px-12 py-8 h-auto font-bold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Schedule a Demo
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Part of the APAS Labs Ecosystem
                </Badge>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Context */}
      <section className="py-16 px-4 border-t border-border/50 bg-background-deep">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center space-x-6">
              <Link to="/labs">
                <Button variant="ghost" className="hover:text-primary">
                  <Globe className="mr-2 h-4 w-4" />
                  Explore Labs
                </Button>
              </Link>
              <Link to="/partnerships">
                <Button variant="ghost" className="hover:text-primary">
                  <Users className="mr-2 h-4 w-4" />
                  Partner With Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="hover:text-primary">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Orakles is the knowledge foundation powering APAS OS, Biscayne Bay GPT, and the next generation of intelligent infrastructure systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OraklesPage;