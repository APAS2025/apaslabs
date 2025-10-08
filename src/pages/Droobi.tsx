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
  Trophy,
  AlertCircle,
  DollarSign,
  Clock,
  XCircle
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

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section - The Hook */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-index="0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep via-background to-background-deep" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/8" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="space-y-8 sm:space-y-12">
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/30 text-primary animate-fade-in">
              The Missing Layer in Infrastructure AI
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-satoshi leading-tight animate-fade-in max-w-5xl mx-auto">
                <span className="block text-foreground mb-4">
                  You Can't Automate What
                </span>
                <span className="block text-primary text-glow">
                  You Haven't Defined
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.3s]">
                Why every "smart infrastructure" project stalls at the same place—and the semantic layer that finally breaks through.
              </p>
            </div>

            <div className="flex justify-center my-12 animate-fade-in [animation-delay:0.5s]">
              <div className="relative float">
                <div className="absolute -inset-8 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full border-2 border-primary/20 animate-ping"></div>
                </div>
                <div className="absolute -inset-4 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-primary/30 animate-ping animation-delay-500"></div>
                </div>
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-blue-400 shadow-2xl glow-primary">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Brain className="h-12 w-12 text-white animate-pulse" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-blue-400 rounded-full p-3 animate-bounce shadow-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in [animation-delay:0.7s]">
              <Button size="lg" className="text-lg px-10 py-6 h-auto font-semibold bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg shadow-primary/25 active:scale-95 transition-all duration-300">
                <Zap className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Our Team
              </Button>
            </div>

            <div className="pt-12 text-sm text-muted-foreground animate-fade-in [animation-delay:0.9s]">
              <p className="mb-4">Trusted by infrastructure leaders managing:</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>$9B+ in Active Programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>40,000+ Permits Annually</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>35+ Cities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hidden Problem - Agitation */}
      <section className="py-32 bg-background relative overflow-hidden" data-index="1">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 via-background to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
                <span className="text-foreground">Here's Why Your $5M </span>
                <span className="text-primary">"Smart Infrastructure"</span>
                <span className="text-foreground"> Project Is Stuck</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                It's not the sensors. It's not the software. It's not even the data.
              </p>
            </div>

            <Card className="glass-card p-10 max-w-4xl mx-auto mb-16 border-2 border-primary/20">
              <div className="space-y-6">
                <p className="text-2xl text-foreground font-semibold">
                  The same word means 12 different things to 12 different stakeholders.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your engineer says "permit." The regulator thinks compliance paperwork. The contractor thinks construction authorization. The vendor thinks sales opportunity. The AI thinks... nothing, because it was never trained on <span className="text-foreground font-semibold">your</span> definition.
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-base text-muted-foreground italic">
                    Across <span className="text-primary font-bold">{utilitiesCount.toLocaleString()}+</span> U.S. utilities, this isn't just confusion—it's the invisible bottleneck costing you <span className="text-primary font-bold">months</span> on every project.
                  </p>
                </div>
              </div>
            </Card>

            {/* The Real Cost */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
              {[
                {
                  icon: <Clock className="h-8 w-8" />,
                  stat: "6-18 months",
                  label: "Wasted in Translation",
                  description: "Every stakeholder meeting becomes a vocabulary lesson"
                },
                {
                  icon: <DollarSign className="h-8 w-8" />,
                  stat: "$2-5M",
                  label: "Lost Per Failed Project",
                  description: "When 'alignment' never actually happens"
                },
                {
                  icon: <XCircle className="h-8 w-8" />,
                  stat: "70%",
                  label: "Unverifiable Claims",
                  description: "Vendors can't prove performance, you can't verify it"
                },
                {
                  icon: <AlertCircle className="h-8 w-8" />,
                  stat: "Retires",
                  label: "With Your Experts",
                  description: "Institutional knowledge walks out the door"
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className={`glass-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 group animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-4">
                    <div className="p-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">{item.stat}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="glass-card p-10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
                <div className="text-center space-y-6">
                  <div className="text-5xl sm:text-6xl font-bold text-primary">
                    ${investmentCount.toFixed(1)} Trillion
                  </div>
                  <p className="text-2xl text-foreground font-semibold">
                    In infrastructure investment waiting for a common language
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    And until now, no one has built it. Because everyone assumed someone else already had.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Hasn't Been Solved - Addressing Objections */}
      <section className="py-32 bg-gradient-to-b from-background to-background-deep relative overflow-hidden" data-index="2">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl float-delayed" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-5xl mx-auto transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-12 text-center">
              <span className="text-foreground">"If This Is So Obvious, </span>
              <span className="text-primary">Why Hasn't Anyone Done It?"</span>
            </h2>
            
            <div className="space-y-8">
              <Card className="glass-card p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Because You Need to Be Inside the System</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We spent 20 years managing $9B+ in water and sewer programs. We didn't study this from the outside—we lived it. <span className="text-foreground font-semibold">We processed 40,000+ permits. We negotiated with hundreds of contractors. We dealt with regulatory fragmentation across dozens of jurisdictions.</span>
                    </p>
                    <p className="text-base text-muted-foreground">
                      No consultant could have built this. No software vendor would have. Because they don't know what they don't know.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Because It's Not Just Documentation</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Everyone thinks they need "better documentation." What they actually need is <span className="text-primary font-semibold">a living semantic layer</span> that connects codes to vendors, definitions to training, compliance to procurement—all in one queryable, AI-ready system.
                    </p>
                    <p className="text-base text-muted-foreground">
                      We didn't just digitize terms. We built the ontology that makes infrastructure automatable.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">Because Trust is Everything</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      You can't just crowdsource definitions. Every term needs certification. Every vendor claim needs verification. Every code reference needs provenance. <span className="text-foreground font-semibold">We built the trust layer through PIP certification—auditable, traceable, monetizable.</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="glass-card p-10 mt-12 border-2 border-primary/20">
              <p className="text-2xl text-center text-foreground font-semibold leading-relaxed">
                The real answer? <span className="text-primary">You can't build AI for infrastructure until you build the ontology of infrastructure.</span> And you can't build the ontology until you've managed infrastructure at scale.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Unique Mechanism - How It Works */}
      <section className="py-32 bg-background relative overflow-hidden" data-index="3">
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/30 via-background to-background-deep/30" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/30 text-primary">
                Introducing Orakles
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-satoshi mb-8">
                <span className="text-foreground">The First </span>
                <span className="text-primary">Knowledge Infrastructure</span>
                <span className="text-foreground"> Platform</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Not a document library. Not a chatbot. Not a "digital twin."
              </p>
              <p className="text-2xl text-foreground font-semibold">
                The semantic layer that finally makes infrastructure intelligent.
              </p>
            </div>

            <Card className="glass-card p-12 max-w-6xl mx-auto mb-16 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <Layers className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <p className="text-2xl text-foreground font-semibold leading-relaxed">
                    Orakles transforms every unstructured regulation, spec sheet, and vendor catalog into <span className="text-primary">living, queryable, AI-ready definitions</span>
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Then connects them to certified vendors, compliance training, and real-world implementations—creating a network effect that compounds with every user.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The System - What You Get */}
      <section className="py-32 bg-gradient-to-b from-background-deep to-background relative overflow-hidden" data-index="4">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-6 text-center">
              <span className="text-foreground">What You Get: </span>
              <span className="text-primary">The Complete Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-20 max-w-3xl mx-auto">
              Everything you need to go from fragmented confusion to unified intelligence
            </p>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <BookOpen className="h-12 w-12" />,
                  title: "The Living Lexicon",
                  stat: "40,000+",
                  label: "Standardized Terms",
                  value: "Stop playing telephone. Every stakeholder speaks the same language.",
                  features: [
                    "Real code references (Chapter 24, FBC, EPA, FDEP)",
                    "AI-curated, continuously updated",
                    "API-ready for your systems"
                  ]
                },
                {
                  icon: <FileCheck className="h-12 w-12" />,
                  title: "Vendor Provenance Cards",
                  stat: "100%",
                  label: "Verified Claims",
                  value: "No more 'trust us' from vendors. Every claim is certified and traceable.",
                  features: [
                    "PIP certification with full audit trail",
                    "'Made in America' verification",
                    "Performance data you can actually trust"
                  ]
                },
                {
                  icon: <Search className="h-12 w-12" />,
                  title: "Semantic Search",
                  stat: "Instant",
                  label: "Answers",
                  value: "Ask in plain English, get connected codes, vendors, and examples.",
                  features: [
                    "Natural language queries",
                    "Multi-stakeholder results",
                    "Real implementation examples"
                  ]
                },
                {
                  icon: <GraduationCap className="h-12 w-12" />,
                  title: "Integrated Academy",
                  stat: "24/7",
                  label: "Training",
                  value: "Turn every definition into a learning moment. Onboard faster, retain longer.",
                  features: [
                    "Micro-learning tied to real work",
                    "Credentialing and compliance tracking",
                    "Knowledge that stays when people leave"
                  ]
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className={`glass-card group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-6 p-8">
                    <div className="flex items-start justify-between">
                      <div className="p-4 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{feature.stat}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{feature.label}</div>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-satoshi mb-3">{feature.title}</CardTitle>
                      <p className="text-base text-foreground font-semibold mb-4">{feature.value}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-10 mt-16 max-w-5xl mx-auto border-2 border-primary/20">
              <div className="text-center space-y-4">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-2xl text-foreground font-semibold">
                  Plus: Direct Integration with APAS OS
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Feeds regulatory APIs, powers digital twins, serves as the data governance backbone for cities transitioning to AI-ready systems. This isn't a standalone tool—it's the foundation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof - Why Believe Us */}
      <section className="py-32 bg-background relative overflow-hidden" data-index="5">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl float" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-8">
                <span className="text-foreground">This Isn't Theory. </span>
                <span className="text-primary">It's Already Working.</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Real projects. Real results. Real infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  location: "Miami-Dade County",
                  project: "RegOS Implementation",
                  result: "Regulatory code translated into structured APIs—now powering automated compliance checking across 40,000+ annual permits"
                },
                {
                  icon: <Layers className="h-6 w-6" />,
                  location: "Biscayne Bay Restoration",
                  project: "Multi-Agency Alignment",
                  result: "Six agencies, one shared terminology—cut coordination time by 60% on $200M+ in restoration work"
                },
                {
                  icon: <Activity className="h-6 w-6" />,
                  location: "Opa-locka & Hollywood",
                  project: "Living Lab Pilots",
                  result: "Permitting workflows linked to inspection data—real-time verification replacing monthly paper reports"
                },
                {
                  icon: <Trophy className="h-6 w-6" />,
                  location: "NIST & ISO 42001",
                  project: "Standards Alignment",
                  result: "AI governance framework certified—only infrastructure platform meeting federal AI standards"
                }
              ].map((proof, index) => (
                <Card 
                  key={index} 
                  className={`glass-card group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {proof.icon}
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 border-primary/30 text-primary">{proof.location}</Badge>
                        <CardTitle className="text-lg font-satoshi mb-2">{proof.project}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {proof.result}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-10 max-w-4xl mx-auto border-2 border-primary/20">
              <div className="text-center space-y-6">
                <p className="text-2xl text-foreground font-semibold">
                  These aren't demos. They're production systems processing millions in infrastructure spend every month.
                </p>
                <p className="text-lg text-muted-foreground">
                  And they're all feeding data back into Orakles—making it smarter with every implementation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Moat - Why This Creates Lasting Value */}
      <section className="py-32 bg-gradient-to-b from-background-deep to-background relative overflow-hidden" data-index="6">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible(6) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-8">
                <span className="text-foreground">Why This </span>
                <span className="text-primary">Gets Better With Every User</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Network effects in infrastructure knowledge—finally
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Microscope className="h-8 w-8" />,
                  title: "Domain Depth No One Can Copy",
                  description: "20 years managing $9B+ in programs. You can't outsource this experience, and you can't hire it fast enough to catch up."
                },
                {
                  icon: <Code2 className="h-8 w-8" />,
                  title: "The Grammar of Governance",
                  description: "We didn't build a tool—we built the ontology. The structured semantic layer that makes agentic AI possible. Everyone else is still figuring out what words mean."
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Trust That Compounds",
                  description: "Every certified definition strengthens PIP. Every vendor verification adds data. Every implementation creates a case study. The moat gets wider with use."
                },
                {
                  icon: <Network className="h-8 w-8" />,
                  title: "Four-Sided Network Effect",
                  description: "Government needs vendors. Vendors need projects. Engineers need training. Academia needs real-world data. We're the only platform connecting all four—and the value multiplies with each side."
                }
              ].map((moat, index) => (
                <Card 
                  key={index} 
                  className={`glass-card group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="space-y-4 p-8">
                    <div className="p-4 rounded-xl bg-primary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                      {moat.icon}
                    </div>
                    <CardTitle className="text-xl font-satoshi flex items-center space-x-2">
                      <Lock className="h-5 w-5 text-primary" />
                      <span>{moat.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {moat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card p-10 mt-12 max-w-4xl mx-auto border-2 border-primary/20">
              <p className="text-2xl text-center text-foreground font-semibold leading-relaxed">
                This isn't winner-take-all. It's <span className="text-primary">winner-take-most</span>. And the window to be first in your jurisdiction is closing fast.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Transformation - What Success Looks Like */}
      <section className="py-40 bg-background relative overflow-hidden" data-index="7">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-primary/20 via-primary/15 to-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible(7) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-12">
              <span className="text-foreground">Imagine 6 Months From Now...</span>
            </h2>
            
            <div className="glass-card p-12 sm:p-16 space-y-12 mb-16 border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl text-foreground font-semibold mb-2">Your teams speak one language</p>
                      <p className="text-muted-foreground">No more translation meetings. No more "what does that actually mean?" Every stakeholder references the same definitions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl text-foreground font-semibold mb-2">Vendors prove their claims</p>
                      <p className="text-muted-foreground">Every proposal backed by certified data. Performance metrics you can trust. ROI you can verify before signing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl text-foreground font-semibold mb-2">AI actually works</p>
                      <p className="text-muted-foreground">Your systems understand context. Automation doesn't break. Intelligence compounds instead of creating new problems.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl text-foreground font-semibold mb-2">Knowledge stays institutional</p>
                      <p className="text-muted-foreground">When experts retire, their knowledge doesn't. It's captured, structured, and accessible to the next generation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl text-foreground font-semibold mb-2">Projects move faster</p>
                      <p className="text-muted-foreground">Procurement cycles cut by 40%. Compliance checks automated. Onboarding time reduced from months to weeks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl text-foreground font-semibold mb-2">You become the reference</p>
                      <p className="text-muted-foreground">Other jurisdictions look to your standards. Vendors align to your definitions. You set the pace instead of following it.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-3xl sm:text-4xl text-primary font-bold leading-relaxed">
                  This isn't aspirational. It's the standard Orakles users operate at.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Make Infrastructure Intelligent?
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="text-xl px-12 py-8 h-auto font-bold bg-gradient-to-br from-primary to-blue-500 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 transition-all duration-300">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Schedule Your Demo
                </Button>
                <Button variant="outline" size="lg" className="text-xl px-12 py-8 h-auto font-bold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Talk to Our Team
                </Button>
              </div>

              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Used by infrastructure leaders managing $9B+ in programs. Early access available for qualifying jurisdictions and enterprise partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Context */}
      <section className="py-16 px-4 border-t border-border/50 bg-background-deep">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary/30 text-primary mb-4">
              Part of the APAS Labs Ecosystem
            </Badge>
            <p className="text-base text-muted-foreground leading-relaxed">
              Orakles is the knowledge foundation powering APAS OS, Biscayne Bay GPT, and the next generation of intelligent infrastructure systems.
            </p>
            <div className="flex justify-center space-x-6 pt-6">
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
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OraklesPage;