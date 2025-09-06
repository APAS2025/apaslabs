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
  Waves,
  Database,
  Globe,
  Smartphone,
  TrendingUp,
  Sparkles,
  Plus,
  Crown,
  Activity,
  Eye,
  DollarSign,
  Leaf,
  Heart
} from "lucide-react";
import heroBackground from "@/assets/hero-background-blue-pink.jpg";

const StormwaterWatershedGuild = () => {
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

  const fullQuestion = "How can we really clean up Biscayne Bay if hundreds of miles of upstream canals remain a water quality black box?";
  const fullAnswer = "You can't restore Biscayne Bay without first understanding the canals that feed it. Every one of Miami's 600+ miles of canals is a direct pipeline into the Bay, carrying runoff, nutrients, and contaminants.\n\nThe practical path forward is:\n\n1. Sensorize key canals — measure flow and water quality in real time.\n2. Predict patterns — use models to anticipate algae blooms, fish kills, and floods.\n3. Trace upstream sources — identify which sub-basins contribute the heaviest loads.\n4. Target interventions — invest in green infrastructure and funding reform where data shows the biggest return.\n\nCleaning the Bay is impossible if the canals stay a mystery. By turning the \"black box\" into a transparent, data-driven system, every dollar invested actually restores the Bay — because you're fixing the sources, not just the symptoms.";

  // Streaming animation for Q&A
  useEffect(() => {
    let questionTimeout: NodeJS.Timeout;
    let answerTimeout: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const typeQuestion = () => {
      setQuestionText("");
      setAnswerText("");
      setIsTypingQuestion(true);
      setIsTypingAnswer(false);
      
      let i = 0;
      const questionInterval = setInterval(() => {
        if (i < fullQuestion.length) {
          setQuestionText(fullQuestion.slice(0, i + 1));
          i++;
        } else {
          clearInterval(questionInterval);
          setIsTypingQuestion(false);
          
          answerTimeout = setTimeout(() => {
            typeAnswer();
          }, 1000);
        }
      }, 50);
    };

    const typeAnswer = () => {
      setIsTypingAnswer(true);
      let i = 0;
      const answerInterval = setInterval(() => {
        if (i < fullAnswer.length) {
          setAnswerText(fullAnswer.slice(0, i + 1));
          i++;
        } else {
          clearInterval(answerInterval);
          setIsTypingAnswer(false);
          
          resetTimeout = setTimeout(() => {
            typeQuestion();
          }, 5000);
        }
      }, 30);
    };

    typeQuestion();

    return () => {
      clearTimeout(questionTimeout);
      clearTimeout(answerTimeout);
      clearTimeout(resetTimeout);
    };
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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleGuildFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGuildFormSubmitted(true);
    setTimeout(() => {
      setShowGuildForm(false);
      setIsGuildFormSubmitted(false);
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
    }, 2000);
  };

  const handleGuildFormChange = (field: string, value: string) => {
    setGuildFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background-deep text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/20 via-transparent to-background-deep/40" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              visibleItems.has(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="0"
          >
            <div className="flex items-center justify-center mb-6">
              <Waves className="w-16 h-16 text-primary mr-4" />
              <Crown className="w-12 h-12 text-accent animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              The Stormwater & Watershed Guild
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Predicting Floods, Protecting Health, Powering Resilience
            </p>
            
            <p className="text-lg mb-12 text-foreground/70 max-w-3xl mx-auto">
              Powered by APAS.AI — uniting engineers, governments, funders, and communities to transform underfunded stormwater systems into predictive, transparent, and accountable engines of One Water resilience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                onClick={() => setShowGuildForm(true)}
              >
                <Plus className="mr-2 h-5 w-5" />
                Apply to Join the Guild
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Target className="mr-2 h-5 w-5" />
                View Our Solutions
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-primary rotate-90" />
        </div>
      </section>

      {/* What This Guild Is Section */}
      <section className="py-20 bg-gradient-to-b from-background-deep to-background-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className={`transform transition-all duration-1000 delay-200 ${
              visibleItems.has(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What This Guild Is
            </h2>
            
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-xl leading-relaxed">
                Stormwater is not a side utility. It is the bloodstream of a <strong className="text-primary">One Water system</strong> — flowing from streets and canals into impaired waters like Biscayne Bay, which directly impacts drinking water, aquifers, ecosystems, and human health.
              </p>
              
              <p className="text-lg leading-relaxed">
                In Miami, hundreds of miles of canals remain largely unsensored and underfunded. Stormwater utilities rely on outdated flat fees that fail to cover the true costs of resilience. The consequences are severe:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-12">
                <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:border-destructive/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Waves className="w-8 h-8 text-destructive mr-3" />
                      <h3 className="text-xl font-semibold text-destructive">Flooding</h3>
                    </div>
                    <p className="text-foreground/70">That damages property and disrupts lives.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:border-destructive/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
                      <h3 className="text-xl font-semibold text-destructive">Algae Blooms & Fish Kills</h3>
                    </div>
                    <p className="text-foreground/70">That devastate ecosystems and tourism.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:border-destructive/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Heart className="w-8 h-8 text-destructive mr-3" />
                      <h3 className="text-xl font-semibold text-destructive">Human Health Risks</h3>
                    </div>
                    <p className="text-foreground/70">From contaminated waters.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/20 hover:border-destructive/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-8 h-8 text-destructive mr-3" />
                      <h3 className="text-xl font-semibold text-destructive">Economic Decline</h3>
                    </div>
                    <p className="text-foreground/70">As property values, insurance, and public trust erode.</p>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-xl leading-relaxed bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg border border-primary/20">
                The Guild exists to change this by bringing <strong className="text-primary">predictive intelligence, transparent funding, and accountability</strong> into stormwater systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & iPhone Section */}
      <section className="py-20 bg-gradient-to-b from-background-subtle to-background-deep">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - How It Works */}
            <div 
              className={`transform transition-all duration-1000 delay-300 ${
                visibleItems.has(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                How It Works
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Bootstrapping the Stack</h3>
                    </div>
                    <p className="text-foreground/70">Powered by APAS.AI, integrating hydrologic data, fee models, and resilience frameworks.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Curating & Guardrailing</h3>
                    </div>
                    <p className="text-foreground/70">Validated by engineers, ecologists, and economists; outputs tied to metrics and ROI.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Brain className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Building the Application</h3>
                    </div>
                    <p className="text-foreground/70">Custom GPT app for stormwater utilities, with dashboards showing rainfall, canal levels, blooms, fees, and ROI.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Eye className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">Transparency & Progress</h3>
                    </div>
                    <p className="text-foreground/70">Milestones tracked; launch with fee-to-outcome dashboards.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Right Column - iPhone */}
            <div 
              className={`transform transition-all duration-1000 delay-500 ${
                visibleItems.has(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              data-index="3"
            >
              <div className="flex justify-center">
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="w-80 h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-background rounded-[2.5rem] relative overflow-hidden">
                      {/* iPhone Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10"></div>
                      
                      {/* Screen Content */}
                      <div className="p-6 pt-10 h-full flex flex-col">
                        {/* App Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                              <Waves className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-sm">APAS.AI</h3>
                              <p className="text-xs text-foreground/60">Stormwater Guild</p>
                            </div>
                          </div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Chat Interface */}
                        <div className="flex-1 space-y-4">
                          {/* User Question */}
                          <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                              <p className="text-sm font-medium">
                                {questionText}
                                {isTypingQuestion && <span className="animate-pulse">|</span>}
                              </p>
                            </div>
                          </div>
                          
                          {/* AI Response */}
                          {(answerText || isTypingAnswer) && (
                            <div className="flex justify-start">
                              <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
                                <div className="flex items-center mb-2">
                                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                                    <Brain className="w-3 h-3 text-white" />
                                  </div>
                                  <span className="text-xs font-medium text-primary">Expert AI</span>
                                </div>
                                <p className="text-sm text-foreground/80 whitespace-pre-line">
                                  {answerText}
                                  {isTypingAnswer && <span className="animate-pulse">|</span>}
                                </p>
                                {!isTypingAnswer && answerText && (
                                  <div className="mt-2 pt-2 border-t border-foreground/10">
                                    <p className="text-xs text-foreground/70">Based on watershed analysis</p>
                                  </div>
                                )}
                              </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Lab Section */}
      <section className="py-20 bg-gradient-to-b from-background-deep to-background-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className={`transform transition-all duration-1000 delay-400 ${
              visibleItems.has(4) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="4"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                A Living Lab
              </h2>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                This Guild is a <strong className="text-primary">living lab</strong> — continuously enriched with sensor data, predictive analytics, and ROI frameworks. Each new contribution makes the system smarter and more reliable. Over time, it becomes a <strong className="text-accent">replicable blueprint</strong> for stormwater utilities worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-foreground/70">Real-time data integration from sensors and models</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Database className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Smart Systems</h3>
                  <p className="text-foreground/70">Predictive analytics that improve with every input</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Global Blueprint</h3>
                  <p className="text-foreground/70">Replicable solutions for utilities worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations of Members */}
      <section className="py-20 bg-gradient-to-b from-background-subtle to-background-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className={`transform transition-all duration-1000 delay-500 ${
              visibleItems.has(5) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="5"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expectations of Members
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Engineers & Hydrologists</h3>
                  </div>
                  <p className="text-foreground/70">Monitoring models, field data</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-lg font-semibold">Governments & Utilities</h3>
                  </div>
                  <p className="text-foreground/70">Regulatory frameworks, fee structures</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Funders</h3>
                  </div>
                  <p className="text-foreground/70">Bridge gaps and scale pilots</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-lg font-semibold">Community Members</h3>
                  </div>
                  <p className="text-foreground/70">Flood, health, and equity input</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Leaf className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">Carbon/Green Infra Experts</h3>
                  </div>
                  <p className="text-foreground/70">Connect water quality to credits</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guild vs Business-as-Usual */}
      <section className="py-20 bg-gradient-to-b from-background-deep to-background-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className={`transform transition-all duration-1000 delay-600 ${
              visibleItems.has(6) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Guild vs Business-as-Usual
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* The Guild */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <Crown className="w-8 h-8 mr-3" />
                    The Guild (APAS.AI Stack)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <p>Sensorized canals + predictive monitoring</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <p>ROI-based stormwater utility fees</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <p>Dashboards showing impacts and outcomes</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <p>Carbon + green infrastructure integrated</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <p>Living lab that evolves continuously</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Business-as-Usual */}
              <Card className="bg-gradient-to-br from-destructive/10 to-muted/5 border-destructive/20 hover:border-destructive/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-destructive">
                    <AlertTriangle className="w-8 h-8 mr-3" />
                    Business-as-Usual
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <AlertTriangle className="w-6 h-6 text-destructive mr-3 flex-shrink-0" />
                    <p>Flat fees with no ROI clarity</p>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="w-6 h-6 text-destructive mr-3 flex-shrink-0" />
                    <p>Reactive response to floods and blooms</p>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="w-6 h-6 text-destructive mr-3 flex-shrink-0" />
                    <p>No transparency in spending</p>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="w-6 h-6 text-destructive mr-3 flex-shrink-0" />
                    <p>Missed opportunities for resilience and carbon</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gradient-to-b from-background-subtle to-background-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className={`transform transition-all duration-1000 delay-700 ${
              visibleItems.has(7) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="7"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Deliverables
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Custom GPT App</h3>
                  <p className="text-foreground/70">For stormwater planning and accountability</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Activity className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sensorization Framework</h3>
                  <p className="text-foreground/70">For canals and watersheds</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Predictive Models</h3>
                  <p className="text-foreground/70">For floods, blooms, fish kills</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <DollarSign className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">ROI-Based Funding</h3>
                  <p className="text-foreground/70">Models tied to resilience</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Eye className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Dashboards + KPIs</h3>
                  <p className="text-foreground/70">Linking fees, outcomes, and impacts</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 backdrop-blur-sm border-border/20 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <Leaf className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Carbon Pathway Models</h3>
                  <p className="text-foreground/70">Connecting stormwater to credits</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/20">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Disclaimer</h3>
              <p className="text-foreground/70 leading-relaxed">
                All models must be verified in local context. The Guild's distinction: outputs are based on <strong className="text-primary">trusted data, curated knowledge, and expert validation</strong> — not generic AI or assumptions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background-deep to-background-subtle">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className={`transform transition-all duration-1000 delay-800 ${
              visibleItems.has(8) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            data-index="8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join the Stormwater & Watershed Guild
            </h2>
            
            <p className="text-xl mb-12 text-foreground/80 leading-relaxed">
              Help transform stormwater from an underfunded utility into a predictive, accountable One Water system that protects communities, economies, and ecosystems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                onClick={() => setShowGuildForm(true)}
              >
                <Plus className="mr-2 h-5 w-5" />
                Apply to Join the Guild
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Users className="mr-2 h-5 w-5" />
                Contribute Knowledge
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Target className="mr-2 h-5 w-5" />
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guild Application Dialog */}
      <Dialog open={showGuildForm} onOpenChange={setShowGuildForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Apply to Join the Guild
            </DialogTitle>
            <DialogDescription>
              Share your expertise and help us build the future of stormwater management.
            </DialogDescription>
          </DialogHeader>
          
          {!isGuildFormSubmitted ? (
            <form onSubmit={handleGuildFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={guildFormData.name}
                    onChange={(e) => handleGuildFormChange('name', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={guildFormData.email}
                    onChange={(e) => handleGuildFormChange('email', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="organization">Organization/Affiliation</Label>
                <Input
                  id="organization"
                  value={guildFormData.organization}
                  onChange={(e) => handleGuildFormChange('organization', e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="guildTitle">Proposed Guild Title/Role</Label>
                <Input
                  id="guildTitle"
                  value={guildFormData.guildTitle}
                  onChange={(e) => handleGuildFormChange('guildTitle', e.target.value)}
                  placeholder="e.g., Senior Hydrologist, Water Quality Specialist"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="expertise">Your Expertise & Background *</Label>
                <Textarea
                  id="expertise"
                  value={guildFormData.expertise}
                  onChange={(e) => handleGuildFormChange('expertise', e.target.value)}
                  placeholder="Describe your relevant experience in stormwater, hydrology, water quality, or related fields..."
                  required
                  className="mt-1 min-h-[100px]"
                />
              </div>
              
              <div>
                <Label htmlFor="motivation">Why Join This Guild? *</Label>
                <Textarea
                  id="motivation"
                  value={guildFormData.motivation}
                  onChange={(e) => handleGuildFormChange('motivation', e.target.value)}
                  placeholder="What motivates you to contribute to stormwater system transformation?"
                  required
                  className="mt-1 min-h-[100px]"
                />
              </div>
              
              <div>
                <Label htmlFor="resources">Specific Contributions You Can Make</Label>
                <Textarea
                  id="resources"
                  value={guildFormData.resources}
                  onChange={(e) => handleGuildFormChange('resources', e.target.value)}
                  placeholder="Data, models, funding, regulatory expertise, community connections, etc."
                  className="mt-1 min-h-[100px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
                <Plus className="mr-2 h-4 w-4" />
                Submit Application
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
              <p className="text-foreground/70">
                Thank you for your interest in joining the Stormwater & Watershed Guild. We'll review your application and get back to you soon.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StormwaterWatershedGuild;