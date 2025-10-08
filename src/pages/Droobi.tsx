import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ArrowRight
} from "lucide-react";

const OraklesPage = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

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

  const isVisible = (index: number) => visibleItems.includes(index);

  const problems = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Regulatory Fragmentation",
      description: "Each utility has its own playbook, leaving engineers, regulators, and contractors translating rather than solving."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Chaos",
      stat: "Less than 10%",
      description: "of U.S. water utilities have structured, interoperable data systems; 70% still rely on PDF reports and unlinked spreadsheets."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Vendor Opacity",
      description: "Vendors can't prove what their 'smart' solutions actually do, and governments can't verify claims or performance."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Knowledge Silos",
      description: "Institutional knowledge retires with people instead of staying within systems."
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "The Living Lexicon",
      description: "A dynamic, API-ready dictionary of infrastructure—covering 40,000+ terms from codes, standards, and best practices across water, wastewater, stormwater, and environmental systems.",
      highlights: [
        "Linked to real code references (Chapter 24, FBC, EPA, FDEP)",
        "AI-curated and continuously updated",
        "Powers permitting agents to training platforms"
      ]
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Vendor Provenance Cards",
      description: "Every product, material, or service gets its own Provenance Sheet—a digital model card that certifies origin, compliance, and claims.",
      highlights: [
        "Linked to PIP (Public Infrastructure Protocol) certification",
        "Tracks data lineage and 'Made in America' credentials",
        "Environmental impact and AI model transparency"
      ]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Semantic Search & Discovery",
      description: "Built for both engineers and policymakers—find not just keywords, but meanings.",
      highlights: [
        "Ask: 'What are Florida-approved methods for stormwater retention testing?'",
        "Get: connected codes, certified vendors, and practical examples",
        "All in one intelligent interface"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Orakles Academy",
      description: "Micro-learning meets compliance. Each definition links to training cards, explainer videos, and quizzes.",
      highlights: [
        "Built for credentialing and onboarding",
        "Continual learning for engineers and city staff",
        "Learn the why behind every standard"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Integration with APAS OS",
      description: "Orakles is not a silo. It's the knowledge foundation for the APAS Operating System.",
      highlights: [
        "Feeds regulatory APIs for permitting and enforcement agents",
        "Powers contextual intelligence for digital twins",
        "Data governance backbone for AI-ready systems"
      ]
    }
  ];

  const moatPoints = [
    {
      title: "Domain Depth",
      description: "No other platform combines technical, regulatory, and semantic expertise at this depth. Built inside the system, not for it."
    },
    {
      title: "Knowledge Infrastructure",
      description: "While others build dashboards or chatbots, Orakles builds the grammar of governance—the structured ontology that makes interoperability and agentic AI possible."
    },
    {
      title: "Certification Trust Layer",
      description: "Through PIP, every definition and vendor card can be audited, certified, and monetized—creating an ecosystem of trusted data."
    },
    {
      title: "Multi-Stakeholder Design",
      description: "Bridges government, industry, academia, and community—creating a network effect no siloed vendor can replicate."
    }
  ];

  const proofPoints = [
    "Miami-Dade County's regulatory code translation into structured APIs (RegOS)",
    "Biscayne Bay restoration projects using multi-agency terminology alignment",
    "Opa-locka and Hollywood pilots linking permitting workflows to inspection data",
    "AI governance framework alignment with NIST and ISO 42001 standards"
  ];

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
              Knowledge Infrastructure Platform
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Orakles
              </span>
              <br />
              <span className="text-foreground">
                The Language of Infrastructure
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              The first AI-powered knowledge and vendor intelligence platform built exclusively for the public infrastructure ecosystem.
            </p>

            {/* Orakles Icon */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute -inset-4 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-primary/20 animate-ping animation-delay-0"></div>
                </div>
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl shadow-primary/40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Brain className="h-10 w-10 text-white animate-pulse" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 animate-bounce">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Request Early Access
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore the Lexicon
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
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-6">
                <span className="text-foreground">The </span>
                <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Problem
                </span>
              </h2>
              <p className="text-2xl text-foreground mb-8 font-semibold">
                Every utility speaks a different language—literally.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Across 50,000+ U.S. utilities, thousands of consultants, and multiple regulatory bodies, the same word—<span className="text-primary font-semibold">permit</span>, <span className="text-primary font-semibold">inspection</span>, <span className="text-primary font-semibold">compliance</span>, <span className="text-primary font-semibold">resilience</span>—means something different depending on who says it, which form they use, or what system they work in.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {problems.map((problem, index) => (
                <Card key={index} className="glass-card hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                        {problem.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-satoshi mb-2">{problem.title}</CardTitle>
                        {problem.stat && (
                          <Badge variant="destructive" className="mb-3">{problem.stat}</Badge>
                        )}
                        <CardDescription className="text-base leading-relaxed">
                          {problem.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-card p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For a sector facing <span className="text-primary font-bold">$1.3 trillion</span> in infrastructure needs and increasing climate shocks, this lack of shared language and intelligence is <span className="text-primary font-bold">the single biggest reason modernization stalls</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" data-index="2">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-8 text-center">
                <span className="text-foreground">The </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Origin
                </span>
              </h2>
              <div className="glass-card p-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Orakles was born out of <span className="text-foreground font-semibold">two decades of lived experience inside the system</span>—leading one of the largest water and sewer programs in the U.S., overseeing 40,000+ permits, and working across agencies that had the data but not the governance, the tools but not the translation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  It started with a simple realization: <span className="text-primary font-bold">you can't build AI for infrastructure until you build the ontology of infrastructure</span>.
                </p>
                <p className="text-xl text-foreground font-semibold text-center py-4">
                  You can't automate what you haven't defined.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 px-4" data-index="3">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-8">
                <span className="text-foreground">The </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Solution
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Orakles is the first AI-powered knowledge and vendor intelligence platform built exclusively for the public infrastructure ecosystem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It connects engineers, regulators, consultants, and vendors through a <span className="text-primary font-semibold">shared semantic layer</span>—a structured, queryable language that defines every concept, standard, and product in infrastructure.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="glass-card p-8 mb-8">
                <p className="text-xl text-center text-foreground font-semibold">
                  At its core, Orakles transforms the world's unstructured regulatory documents, technical specifications, and vendor catalogs into <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">living, intelligent definitions</span>.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5" data-index="4">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-12 text-center">
              <span className="text-foreground">Key Features & </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Modules
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="glass-card hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-satoshi mb-3">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
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

      {/* Our Moat Section */}
      <section className="py-16 px-4" data-index="5">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(5) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-12 text-center">
                <span className="text-foreground">Our </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Moat
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {moatPoints.map((point, index) => (
                  <Card key={index} className="glass-card hover:shadow-primary/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-satoshi mb-3 flex items-center space-x-2">
                        <Lock className="h-5 w-5 text-primary" />
                        <span>{point.title}</span>
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {point.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="glass-card p-8 mt-8">
                <p className="text-lg text-center text-foreground">
                  This creates a <span className="text-primary font-bold">network effect across sectors</span> that no siloed vendor or software provider can replicate.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Concept Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" data-index="6">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(6) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-8 text-center">
                <span className="text-foreground">Proof of </span>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Concept
                </span>
              </h2>
              <p className="text-lg text-center text-muted-foreground mb-10">
                The Orakles model has already been validated through real-world pain points:
              </p>

              <div className="space-y-4">
                {proofPoints.map((point, index) => (
                  <Card key={index} className="glass-card hover:shadow-primary/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-base text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="glass-card p-6 mt-8">
                <p className="text-lg text-center text-primary font-semibold">
                  These aren't prototypes—they're living labs feeding the Orakles knowledge base.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Future Section */}
      <section className="py-20 px-4" data-index="7">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(7) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-8">
                <span className="text-foreground">The </span>
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Future
                </span>
              </h2>
              
              <div className="glass-card p-10 space-y-6 mb-12">
                <p className="text-xl text-foreground font-semibold leading-relaxed">
                  With Orakles, APAS Labs is creating a new category: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Knowledge Infrastructure</span>.
                </p>
                
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p className="leading-relaxed">
                    It's not just defining terms—<span className="text-foreground font-semibold">it's defining trust</span>.
                  </p>
                  <p className="leading-relaxed">
                    Not just organizing data—<span className="text-foreground font-semibold">it's organizing how cities learn, decide, and act</span>.
                  </p>
                </div>

                <p className="text-2xl text-primary font-bold pt-6">
                  From the words we use to the systems we build, Orakles is turning infrastructure from paperwork into intelligence.
                </p>
              </div>

              {/* Taglines */}
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                <Card className="glass-card p-6 hover:shadow-primary/20 transition-all duration-300">
                  <p className="text-lg font-semibold text-foreground">The Language of Infrastructure</p>
                </Card>
                <Card className="glass-card p-6 hover:shadow-primary/20 transition-all duration-300">
                  <p className="text-lg font-semibold text-foreground">Turning Codes into Intelligence</p>
                </Card>
                <Card className="glass-card p-6 hover:shadow-primary/20 transition-all duration-300">
                  <p className="text-lg font-semibold text-foreground">Where Regulation Meets AI</p>
                </Card>
                <Card className="glass-card p-6 hover:shadow-primary/20 transition-all duration-300">
                  <p className="text-lg font-semibold text-foreground">Define. Certify. Connect.</p>
                </Card>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap justify-center gap-6">
                <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Join the Revolution
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
                  <Globe className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Context */}
      <section className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-xs border-primary/30 text-primary">
              Part of the APAS Labs Ecosystem
            </Badge>
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