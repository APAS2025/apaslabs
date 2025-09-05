import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Droplets, 
  Shield, 
  Brain, 
  Users,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Beaker,
  Database,
  Globe,
  Smartphone,
  Heart,
  Sparkles,
  Plus,
  Crown
} from "lucide-react";
import heroBackground from "@/assets/hero-background-blue-pink.jpg";

const PFASGuild = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [showGuildForm, setShowGuildForm] = useState(false);
  const [guildFormData, setGuildFormData] = useState({
    name: '',
    email: '',
    organization: '',
    guildTitle: '',
    description: '',
    expertise: '',
    motivation: '',
    resources: ''
  });
  const [isGuildFormSubmitted, setIsGuildFormSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleGuildFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGuildFormSubmitted(true);
    console.log('Guild form submitted:', guildFormData);
  };

  const resetGuildForm = () => {
    setGuildFormData({
      name: '',
      email: '',
      organization: '',
      guildTitle: '',
      description: '',
      expertise: '',
      motivation: '',
      resources: ''
    });
    setIsGuildFormSubmitted(false);
  };

  const closeGuildForm = () => {
    setShowGuildForm(false);
    resetGuildForm();
  };

  const features = [
    {
      icon: Database,
      title: "Curated Knowledge",
      description: "Expert-validated research and field data from trusted practitioners and institutions"
    },
    {
      icon: Shield,
      title: "Built-in Guardrails", 
      description: "AI safety protocols that prevent hallucinations and ensure reliable, verifiable outputs"
    },
    {
      icon: Globe,
      title: "Complete Transparency",
      description: "Open progress reporting, source validation, and community oversight at every step"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Direct access to leading scientists, regulators, and field practitioners worldwide"
    }
  ];

  const deliverables = [
    {
      title: "Custom PFAS GPT App",
      description: "AI-powered tool trained on curated, expert-validated PFAS knowledge",
      timeline: "Months 1-6"
    },
    {
      title: "Governance Framework", 
      description: "Documented guardrails and validation processes for reliable AI outputs",
      timeline: "Months 2-4"
    },
    {
      title: "Living Repository",
      description: "Continuously updated database of research, field data, and community insights",
      timeline: "Ongoing"
    },
    {
      title: "Progress Reports",
      description: "Regular updates shared openly with members, funders, and the public",
      timeline: "Monthly"
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Bootstrapping the Stack",
      description: "Powered by APAS.AI, experts, practitioners, and community members are invited to contribute"
    },
    {
      number: "02", 
      title: "Curating & Guardrailing",
      description: "Expert oversight ensures safe, validated knowledge with rigorous quality controls"
    },
    {
      number: "03",
      title: "Building the Application", 
      description: "Custom GPT trained specifically for PFAS and emerging contaminants challenges"
    },
    {
      number: "04",
      title: "Timeline & Transparency",
      description: "Milestones shared openly, app launched with continuous progress reporting"
    }
  ];

  return (
    <main className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background-deep/90 via-background/60 to-background-deep/90" />
        
        {/* Molecular Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-teal-400/30 rounded-full blur-xl animate-pulse delay-500" />
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-blue-500/30 rounded-full blur-lg animate-pulse delay-700" />
        </div>
        
        <div className="container relative z-10 text-center">
          <div 
            className={`transition-all duration-1000 ${visibleItems.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="0"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Droplets className="h-12 w-12 text-blue-400" />
              <Beaker className="h-10 w-10 text-cyan-400" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
              PFAS & Emerging Contaminants
            </h1>
            <p className="text-3xl md:text-4xl text-foreground/90 mb-8 max-w-4xl mx-auto leading-tight font-light">
              Setting the Standard Together
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-5xl mx-auto leading-relaxed">
              The first Guild powered by APAS.AI — where experts, practitioners, and communities unite to capture knowledge, 
              create guardrails, and build decision-ready tools for one of the most urgent challenges in water and health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" className="group">
                Apply to Join the Guild
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="glass">
                Contribute Knowledge
              </Button>
              <Button size="xl" variant="glow">
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What This Guild Is */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-deep to-background" />
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 delay-200 ${visibleItems.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="1"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              What This Guild Is
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-foreground/80 leading-relaxed space-y-6">
              <p>
                PFAS and other emerging contaminants are reshaping the way utilities, regulators, and communities think about 
                water safety, public health, and infrastructure investments. Yet knowledge is fragmented — scattered research, 
                inconsistent policies, and best practices locked inside organizations.
              </p>
              <p className="text-xl text-foreground/90 font-medium">
                The PFAS & Emerging Contaminants Guild changes that by:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-1000 ${visibleItems.has(2 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                data-index={2 + index}
              >
                <Card className="h-full glass-card hover:glow-primary transition-all duration-500 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Lab Section with Phone Animation */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background-deep via-background to-background-deep" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`transition-all duration-1000 ${visibleItems.has(6) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              data-index="6"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                A Living Lab
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  This Guild is not a one-time project. It is a <span className="text-primary font-semibold">living lab</span> — 
                  continuously enriched by new research, data, and field experience.
                </p>
                <p>
                  The longer it runs, the smarter, safer, and more reliable it becomes. Every new contribution strengthens 
                  the collective knowledge stack, making it a permanent resource for practitioners, governments, and citizens.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Knowledge Intelligence in Your Pocket
                  </h3>
                  <p className="text-foreground/90">
                    Access decades of collective expertise, real-time research updates, and field-tested solutions 
                    wherever critical decisions need to be made.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Mockup Animation */}
            <div 
              className={`relative transition-all duration-1000 delay-300 ${visibleItems.has(7) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              data-index="7"
            >
              <div className="relative mx-auto w-80 h-[640px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen */}
                    <div className="absolute inset-4 bg-gradient-to-br from-background-deep to-background rounded-3xl overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-4 text-xs text-foreground/60">
                        <span>9:41</span>
                        <span>PFAS Guild</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-foreground/60 rounded-sm">
                            <div className="w-3/4 h-full bg-green-400 rounded-sm" />
                          </div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="px-6 py-4 space-y-4">
                        <div className="bg-primary/20 border border-primary/30 rounded-lg p-4 animate-pulse">
                          <div className="flex items-center gap-2 mb-2">
                            <Droplets className="h-4 w-4 text-blue-400" />
                            <span className="text-sm font-medium">PFAS Treatment Query</span>
                          </div>
                          <p className="text-xs text-foreground/80">
                            "What's the best GAC configuration for 50,000 people?"
                          </p>
                        </div>
                        
                        <div className="bg-glass border border-glass-border rounded-lg p-4 animate-fade-in">
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-primary" />
                            <span className="text-xs font-medium">Expert Analysis</span>
                          </div>
                          <div className="space-y-2 text-xs text-foreground/80">
                            <p>Based on 200+ installations analyzed by Guild experts:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                              <li>12-15 GAC vessels in series</li>
                              <li>85-95% PFAS removal expected</li>
                              <li>$8-12M initial installation</li>
                              <li>Include RO as secondary barrier</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-accent/20 border border-accent/30 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-xs font-medium text-green-400">Verified by 12 experts</span>
                          </div>
                          <p className="text-xs text-foreground/70">Last updated: 2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${visibleItems.has(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="8"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={step.number}
                className={`transition-all duration-1000 ${visibleItems.has(9 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
                data-index={9 + index}
              >
                <div className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guild vs GPTs Comparison */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background-deep via-background to-background-deep" />
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${visibleItems.has(13) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="13"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              The Guild vs. Generic GPTs
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
              In high-stakes domains like PFAS, where decisions affect health and billions in spending, 
              relying on uncurated GPTs is reckless.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Guild */}
            <div 
              className={`transition-all duration-1000 ${visibleItems.has(14) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              data-index="14"
            >
              <Card className="h-full glass-card border-primary/30 hover:glow-primary transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">The Guild (APAS.AI Stack)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Built on our own stack</p>
                      <p className="text-sm text-foreground/70">No external lock-in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Cost control</p>
                      <p className="text-sm text-foreground/70">Infrastructure owned, not rented</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Curated knowledge</p>
                      <p className="text-sm text-foreground/70">Experts + practitioners + trusted sources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Guardrails against hallucination</p>
                      <p className="text-sm text-foreground/70">Validated, structured, transparent</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Living lab</p>
                      <p className="text-sm text-foreground/70">Continuously enriched, domain-specific</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Generic GPTs */}
            <div 
              className={`transition-all duration-1000 delay-300 ${visibleItems.has(15) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              data-index="15"
            >
              <Card className="h-full glass-card border-destructive/30 hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <CardTitle className="text-2xl text-destructive">Generic GPTs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Black box</p>
                      <p className="text-sm text-foreground/70">Unknown training data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">High hallucination risk</p>
                      <p className="text-sm text-foreground/70">False outputs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Generic</p>
                      <p className="text-sm text-foreground/70">Diluted by irrelevant sources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">External control</p>
                      <p className="text-sm text-foreground/70">Changing terms, costs, APIs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Biased information</p>
                      <p className="text-sm text-foreground/70">Outdated, contradictory sources</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background" />
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${visibleItems.has(16) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => (
              <div
                key={deliverable.title}
                className={`transition-all duration-1000 ${visibleItems.has(17 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
                data-index={17 + index}
              >
                <Card className="h-full glass-card hover:glow-accent transition-all duration-500">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground">{deliverable.title}</CardTitle>
                      <span className="text-sm text-accent bg-accent/20 px-3 py-1 rounded-full">
                        {deliverable.timeline}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {deliverable.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="relative py-16">
        <div className="container relative z-10">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleItems.has(21) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="21"
          >
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-amber-400 mb-4 flex items-center justify-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Important Disclaimer
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Outputs from the Guild should be verified against current regulations and context. The difference is that here, 
                knowledge comes from <span className="text-primary font-semibold">trusted experts and practitioners</span>, 
                curated and validated to reduce risk. <span className="text-accent font-semibold">Reliable, not reckless.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guild Leadership Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
        
        <div className="container relative z-10">
          <div 
            className={`text-center transition-all duration-1000 ${visibleItems.has(22) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="22"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Crown className="h-12 w-12 text-accent" />
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Want to Lead a Guild?
              </h2>
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Have expertise in a critical infrastructure domain? APAS Labs welcomes visionary leaders 
                to establish new Guilds that tackle humanity's most pressing challenges.
              </p>
              <Button 
                size="xl" 
                variant="glow" 
                className="group"
                onClick={() => setShowGuildForm(true)}
              >
                <Crown className="mr-2 h-5 w-5" />
                Propose a New Guild
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="container relative z-10">
          <div 
            className={`text-center transition-all duration-1000 ${visibleItems.has(23) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="23"
          >
            <h2 className="text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Join the PFAS & Emerging Contaminants Guild
            </h2>
            <p className="text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto">
              Help build the first AI-powered knowledge platform to tackle one of the greatest health and infrastructure challenges of our time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" variant="hero" className="group">
                Apply to Join the Guild
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="glass">
                Contribute Knowledge
              </Button>
              <Button size="xl" variant="glow">
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guild Leadership Form Dialog */}
      <Dialog open={showGuildForm} onOpenChange={setShowGuildForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
          <div className="p-1">
            {!isGuildFormSubmitted ? (
              <div>
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-2">
                    <Crown className="h-8 w-8 text-accent" />
                    Lead a New Guild
                  </DialogTitle>
                  <DialogDescription className="text-lg text-muted-foreground">
                    Propose a new Guild focused on critical infrastructure challenges. Help us expand the collective knowledge ecosystem.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleGuildFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guild-leader-name" className="text-foreground font-medium">Full Name</Label>
                      <Input
                        id="guild-leader-name"
                        value={guildFormData.name}
                        onChange={(e) => setGuildFormData(prev => ({...prev, name: e.target.value}))}
                        required
                        className="bg-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guild-leader-email" className="text-foreground font-medium">Email Address</Label>
                      <Input
                        id="guild-leader-email"
                        type="email"
                        value={guildFormData.email}
                        onChange={(e) => setGuildFormData(prev => ({...prev, email: e.target.value}))}
                        required
                        className="bg-input"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guild-organization" className="text-foreground font-medium">Organization/Institution</Label>
                    <Input
                      id="guild-organization"
                      value={guildFormData.organization}
                      onChange={(e) => setGuildFormData(prev => ({...prev, organization: e.target.value}))}
                      required
                      className="bg-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guild-title" className="text-foreground font-medium">Proposed Guild Title</Label>
                    <Input
                      id="guild-title"
                      value={guildFormData.guildTitle}
                      onChange={(e) => setGuildFormData(prev => ({...prev, guildTitle: e.target.value}))}
                      placeholder="e.g., Climate Resilience & Adaptation, AI Ethics in Public Sector"
                      required
                      className="bg-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guild-description" className="text-foreground font-medium">Guild Description & Mission</Label>
                    <Textarea
                      id="guild-description"
                      value={guildFormData.description}
                      onChange={(e) => setGuildFormData(prev => ({...prev, description: e.target.value}))}
                      placeholder="Describe the challenge this Guild would address and its potential impact..."
                      className="bg-input"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guild-expertise" className="text-foreground font-medium">Your Expertise & Qualifications</Label>
                    <Textarea
                      id="guild-expertise"
                      value={guildFormData.expertise}
                      onChange={(e) => setGuildFormData(prev => ({...prev, expertise: e.target.value}))}
                      placeholder="Share your background, experience, and why you're qualified to lead this Guild..."
                      className="bg-input"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guild-motivation" className="text-foreground font-medium">Why This Guild Matters Now</Label>
                    <Textarea
                      id="guild-motivation"
                      value={guildFormData.motivation}
                      onChange={(e) => setGuildFormData(prev => ({...prev, motivation: e.target.value}))}
                      placeholder="Explain the urgency and importance of this Guild's mission..."
                      className="bg-input"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guild-resources" className="text-foreground font-medium">Proposed Resources & Community</Label>
                    <Textarea
                      id="guild-resources"
                      value={guildFormData.resources}
                      onChange={(e) => setGuildFormData(prev => ({...prev, resources: e.target.value}))}
                      placeholder="What experts, data sources, or partnerships could this Guild leverage?"
                      className="bg-input"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" variant="glow" className="w-full">
                    <Crown className="mr-2 h-5 w-5" />
                    Submit Guild Proposal
                  </Button>
                </form>
              </div>
            ) : (
              <div className="text-center py-12">
                <Crown className="h-16 w-16 text-accent mx-auto mb-6 animate-pulse" />
                <DialogTitle className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Guild Proposal Received! 👑
                </DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Thank you for your visionary leadership! APAS Labs will review your proposal and reach out with next steps.
                </DialogDescription>
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-6 mb-6">
                  <p className="text-foreground/90">
                    🎯 <strong>What's Next:</strong><br/>
                    📧 Our team will review your proposal within 5 business days<br/>
                    📞 If accepted, we'll schedule a strategy session to plan your Guild<br/>
                    🚀 Join our exclusive Guild Leaders community with special access and support!
                  </p>
                </div>
                <Button onClick={closeGuildForm} variant="glass">
                  Continue Exploring
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default PFASGuild;