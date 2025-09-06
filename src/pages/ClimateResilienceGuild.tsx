import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  CloudRain, 
  Shield, 
  Brain, 
  Users,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Database,
  Globe,
  Smartphone,
  Heart,
  Sparkles,
  Plus,
  Crown,
  TrendingUp,
  Waves,
  Thermometer
} from "lucide-react";
import heroBackground from "@/assets/hero-background-blue-pink.jpg";

const ClimateResilienceGuild = () => {
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
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [isTypingQuestion, setIsTypingQuestion] = useState(true);
  const [isTypingAnswer, setIsTypingAnswer] = useState(false);

  const fullQuestion = "What is the definition of resiliency as defined by chapter 24 of the code of Miami-Dade County?";
  const fullAnswer = "There is NO definition of resiliency in Chapter 24 of the Miami-Dade County Code.\n\nThis gap represents exactly why the Climate Guild exists - to identify and address missing frameworks that leave communities vulnerable.";

  useEffect(() => {
    let questionTimeout: NodeJS.Timeout;
    let answerTimeout: NodeJS.Timeout;
    
    // Start typing question after 2 seconds
    const startQuestion = setTimeout(() => {
      setIsTypingQuestion(true);
      let questionIndex = 0;
      
      const typeQuestion = () => {
        if (questionIndex <= fullQuestion.length) {
          setQuestionText(fullQuestion.slice(0, questionIndex));
          questionIndex++;
          questionTimeout = setTimeout(typeQuestion, 50);
        } else {
          setIsTypingQuestion(false);
          // Start typing answer after question is complete
          setTimeout(() => {
            setIsTypingAnswer(true);
            let answerIndex = 0;
            
            const typeAnswer = () => {
              if (answerIndex <= fullAnswer.length) {
                setAnswerText(fullAnswer.slice(0, answerIndex));
                answerIndex++;
                answerTimeout = setTimeout(typeAnswer, 30);
              } else {
                setIsTypingAnswer(false);
                // Reset after 5 seconds
                setTimeout(() => {
                  setQuestionText("");
                  setAnswerText("");
                  setIsTypingQuestion(true);
                }, 5000);
              }
            };
            typeAnswer();
          }, 500);
        }
      };
      typeQuestion();
    }, 2000);

    return () => {
      clearTimeout(startQuestion);
      clearTimeout(questionTimeout);
      clearTimeout(answerTimeout);
    };
  }, []);

  useEffect(() => {
    // Reset animation cycle every 25 seconds
    const resetCycle = setInterval(() => {
      setQuestionText("");
      setAnswerText("");
      setIsTypingQuestion(true);
      setIsTypingAnswer(false);
    }, 25000);

    return () => clearInterval(resetCycle);
  }, []);

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
      title: "Resilience Frameworks",
      description: "Curated definitions and methodologies for measuring and building climate resilience"
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
      description: "Direct access to climate scientists, urban planners, and resilience practitioners worldwide"
    }
  ];

  const deliverables = [
    {
      title: "Custom Climate Resilience GPT App",
      description: "AI-powered tool trained on curated, expert-validated climate resilience knowledge",
      timeline: "Months 1-6"
    },
    {
      title: "Governance Framework", 
      description: "Documented guardrails and validation processes for reliable AI outputs",
      timeline: "Months 2-4"
    },
    {
      title: "Living Repository",
      description: "Continuously updated database of resilience frameworks, field data, and community insights",
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
      description: "Custom GPT trained specifically for climate resilience and adaptation challenges"
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
        
        {/* Climate Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-red-400/30 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-yellow-400/30 rounded-full blur-xl animate-pulse delay-500" />
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-orange-500/30 rounded-full blur-lg animate-pulse delay-700" />
        </div>
        
        <div className="container relative z-10 text-center">
          <div 
            className={`transition-all duration-1000 ${visibleItems.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="0"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <CloudRain className="h-12 w-12 text-orange-400" />
              <Thermometer className="h-10 w-10 text-red-400" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              Climate & Resilience
            </h1>
            <p className="text-3xl md:text-4xl text-foreground/90 mb-8 max-w-4xl mx-auto leading-tight font-light">
              Preparing Systems for What's Next
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-5xl mx-auto leading-relaxed">
              Powered by APAS.AI — where experts, practitioners, and communities unite to define resilience, 
              close knowledge gaps, and create decision-ready tools for climate impact.
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
                Climate change is no longer abstract. Its impacts are being felt first <strong>through the lens of water</strong> — 
                sea-level rise, floods, droughts, and storms that overwhelm infrastructure and expose systemic gaps. 
                Utilities, governments, and communities face cascading risks, yet the frameworks for defining resilience 
                remain inconsistent, fragmented, and often disconnected from measurable outcomes.
              </p>
              <p className="text-xl text-foreground/90 font-medium">
                The Climate & Resilience Guild exists to change this by:
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
                  continuously enriched by climate science, resilience frameworks, community experiences, and field data.
                </p>
                <p>
                  The longer it runs, the smarter, safer, and more reliable it becomes. Every new contribution strengthens 
                  the collective knowledge stack, ensuring resilience knowledge is not lost but continuously improved and made usable.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Resilience Intelligence in Your Pocket
                  </h3>
                  <p className="text-foreground/90">
                    Access decades of collective expertise, real-time climate data, and field-tested adaptation solutions 
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
                        <span>Climate Guild</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-foreground/60 rounded-sm">
                            <div className="w-3/4 h-full bg-green-400 rounded-sm" />
                          </div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="px-6 py-4 space-y-4">
                        <div className="bg-primary/20 border border-primary/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CloudRain className="h-4 w-4 text-orange-400" />
                            <span className="text-sm font-medium">Resilience Query</span>
                          </div>
                          <p className="text-xs text-foreground/80 min-h-[2.5rem]">
                            {questionText}
                            {isTypingQuestion && <span className="animate-pulse">|</span>}
                          </p>
                        </div>
                        
                        {answerText && (
                          <div className="bg-glass border border-glass-border rounded-lg p-4 animate-fade-in">
                            <div className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="h-4 w-4 text-red-500" />
                              <span className="text-xs font-medium text-red-600">Critical Gap Identified</span>
                            </div>
                            <div className="space-y-2 text-xs text-foreground/80">
                              <div className="whitespace-pre-line min-h-[4rem]">
                                {answerText}
                                {isTypingAnswer && <span className="animate-pulse">|</span>}
                              </div>
                            </div>
                          </div>
                        )}

                        {answerText && !isTypingAnswer && (
                          <div className="bg-accent/20 border border-accent/30 rounded-lg p-3 animate-fade-in">
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle className="h-3 w-3 text-green-400" />
                              <span className="text-xs font-medium text-green-400">Verified by 8 experts</span>
                            </div>
                            <p className="text-xs text-foreground/70">Last updated: 1 day ago</p>
                          </div>
                        )}
                      </div>
                    
                      {/* Bottom Footer */}
                      <div className="absolute bottom-2 left-0 right-0 px-6">
                        <div className="text-center py-2 border-t border-foreground/10">
                          <p className="text-xs text-foreground/40 font-light">
                            Powered by <span className="font-medium text-primary/60">APAS.AI</span>
                          </p>
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

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Bootstrapping the Stack</h3>
                  <p className="text-sm text-muted-foreground">
                    Powered by APAS.AI, the Guild captures and curates resilience knowledge on our own infrastructure. 
                    Experts bring frameworks and methodologies; practitioners and communities add local insight.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Curating & Guardrailing</h3>
                  <p className="text-sm text-muted-foreground">
                    Contributions are validated, structured, and stress-tested against real-world scenarios. 
                    Guardrails prevent false or impractical AI outputs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-glow to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Building the Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Knowledge is embedded into a custom GPT app designed for climate and resilience. 
                    The app supports utilities, governments, and funders with decision-ready insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Transparency & Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    A development timeline is set and updated openly. Milestones are shared with the community, 
                    ensuring accountability. The application will launch with clear reporting of outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Guild */}
            <div 
              className={`transition-all duration-1000 ${visibleItems.has(14) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              data-index="14"
            >
              <Card className="h-full glass-card border-primary/30 hover:border-primary/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Crown className="h-6 w-6" />
                    The Guild (APAS.AI Stack)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Built on our own infrastructure → no dependency on external vendors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cost control → scale without runaway API fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Validated content curated by experts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Guardrails against hallucination → reliable knowledge, not risky guesses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Domain-specific → purpose-built for climate resilience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Living lab → continuously enriched, never static</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Generic GPTs */}
            <div 
              className={`transition-all duration-1000 delay-200 ${visibleItems.has(15) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              data-index="15"
            >
              <Card className="h-full glass-card border-destructive/30 hover:border-destructive/50 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl text-destructive flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    Generic GPTs (OpenAI / open-source)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Black box → sources unknown, cannot be traced</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>High hallucination risk → confident but false outputs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Generic knowledge → diluted by irrelevant internet data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Pricing and policy outside your control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Contradictions and bias common in open-source content</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div 
            className={`text-center mt-12 transition-all duration-1000 delay-400 ${visibleItems.has(16) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="16"
          >
            <p className="text-lg text-foreground/80 italic max-w-4xl mx-auto">
              In resilience planning, where wrong answers risk billions in damages and countless lives, 
              generic GPTs are reckless. The Guild is curated, accountable, and purpose-built — 
              designed to eliminate uncertainty where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${visibleItems.has(17) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="17"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((deliverable, index) => (
              <div
                key={deliverable.title}
                className={`transition-all duration-1000 ${visibleItems.has(18 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                data-index={18 + index}
              >
                <Card className="h-full glass-card hover:glow-primary transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-foreground">{deliverable.title}</CardTitle>
                      <span className="text-sm text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                        {deliverable.timeline}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background-deep via-background to-background-deep" />
        <div className="container relative z-10">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${visibleItems.has(22) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="22"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Disclaimer
            </h2>
            <Card className="max-w-4xl mx-auto glass-card">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  Outputs from the Guild should be verified against current regulations and context. 
                  The difference is that here, knowledge comes from <strong>trusted experts and practitioners</strong>, 
                  curated and validated to reduce risk. Reliable, not reckless.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background" />
        <div className="container relative z-10">
          <div 
            className={`text-center transition-all duration-1000 ${visibleItems.has(23) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="23"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Join the Climate & Resilience Guild
            </h2>
            <p className="text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
              Help define resilience, close accountability gaps, and build the first AI-powered knowledge platform 
              that prepares cities, utilities, and communities for climate change.
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

      {/* Lead a Guild Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_70%)]" />
        <div className="container relative z-10">
          <div 
            className={`text-center transition-all duration-1000 ${visibleItems.has(24) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="24"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Plus className="h-8 w-8 text-primary" />
              <Sparkles className="h-6 w-6 text-primary-glow" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Want to Lead Your Own Guild?</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              APAS Labs welcomes new guild proposals. Share your vision for a knowledge domain that needs 
              expert curation and AI-powered tools.
            </p>
            <Dialog open={showGuildForm} onOpenChange={setShowGuildForm}>
              <Button 
                size="lg" 
                variant="glow"
                className="group"
                onClick={() => setShowGuildForm(true)}
              >
                Propose a New Guild
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass-dialog">
                {!isGuildFormSubmitted ? (
                  <div>
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent flex items-center gap-2">
                        <Plus className="h-8 w-8 text-primary" />
                        Propose a New Guild
                      </DialogTitle>
                      <DialogDescription className="text-lg text-foreground/70">
                        Share your vision for creating a new knowledge guild. We'll review your proposal 
                        and guide you through the next steps.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleGuildFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="guild-name" className="text-foreground font-medium">Your Name</Label>
                          <Input
                            id="guild-name"
                            value={guildFormData.name}
                            onChange={(e) => setGuildFormData(prev => ({...prev, name: e.target.value}))}
                            required
                            className="bg-input"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guild-email" className="text-foreground font-medium">Email Address</Label>
                          <Input
                            id="guild-email"
                            type="email"
                            value={guildFormData.email}
                            onChange={(e) => setGuildFormData(prev => ({...prev, email: e.target.value}))}
                            required
                            className="bg-input"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="guild-org" className="text-foreground font-medium">Organization</Label>
                        <Input
                          id="guild-org"
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
                          placeholder="e.g., Digital Infrastructure & Cybersecurity Guild"
                          required
                          className="bg-input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guild-desc" className="text-foreground font-medium">Guild Description & Vision</Label>
                        <Textarea
                          id="guild-desc"
                          value={guildFormData.description}
                          onChange={(e) => setGuildFormData(prev => ({...prev, description: e.target.value}))}
                          placeholder="Describe the knowledge domain, target audience, and why this guild is needed..."
                          rows={4}
                          required
                          className="bg-input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guild-expertise" className="text-foreground font-medium">Your Expertise & Background</Label>
                        <Textarea
                          id="guild-expertise"
                          value={guildFormData.expertise}
                          onChange={(e) => setGuildFormData(prev => ({...prev, expertise: e.target.value}))}
                          placeholder="Share your relevant experience and qualifications to lead this guild..."
                          rows={3}
                          required
                          className="bg-input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guild-motivation" className="text-foreground font-medium">Expected Impact</Label>
                        <Textarea
                          id="guild-motivation"
                          value={guildFormData.motivation}
                          onChange={(e) => setGuildFormData(prev => ({...prev, motivation: e.target.value}))}
                          placeholder="What problems would this guild solve? Who would benefit from it?"
                          rows={3}
                          required
                          className="bg-input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guild-resources" className="text-foreground font-medium">Available Resources</Label>
                        <Textarea
                          id="guild-resources"
                          value={guildFormData.resources}
                          onChange={(e) => setGuildFormData(prev => ({...prev, resources: e.target.value}))}
                          placeholder="What resources, expertise, or support can you provide to establish this guild?"
                          rows={3}
                          required
                          className="bg-input"
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button type="submit" className="flex-1">Submit Guild Proposal</Button>
                        <Button type="button" variant="outline" onClick={closeGuildForm}>Cancel</Button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Guild Proposal Submitted!</h3>
                    <p className="text-foreground/70 mb-6">
                      Thank you for your proposal. Our team will review it and contact you within 5-7 business days 
                      with next steps and guidance.
                    </p>
                    <Button onClick={closeGuildForm}>Close</Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClimateResilienceGuild;