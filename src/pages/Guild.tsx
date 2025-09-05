import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Droplets, 
  Shield, 
  CloudRain, 
  Brain, 
  DollarSign,
  Users,
  BookOpen,
  Target,
  Zap,
  ArrowRight,
  MessageSquare,
  Smartphone
} from "lucide-react";
import heroBackground from "@/assets/hero-background-blue-pink.jpg";

const Guild = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [activeAnimation, setActiveAnimation] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [isAiResponding, setIsAiResponding] = useState(false);
  const [streamedResponse, setStreamedResponse] = useState("");
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [typedFollowUp, setTypedFollowUp] = useState("");
  const [isTypingFollowUp, setIsTypingFollowUp] = useState(false);
  const [streamedFollowUpResponse, setStreamedFollowUpResponse] = useState("");
  const [isAiRespondingFollowUp, setIsAiRespondingFollowUp] = useState(false);

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

  // Animation cycle effect
  useEffect(() => {
    const runAnimation = async () => {
      const currentQuestion = llmQuestions[activeAnimation];
      const currentAnswer = llmAnswers[activeAnimation];
      const currentFollowUp = followUpQuestions[activeAnimation];
      const currentFollowUpAnswer = followUpAnswers[activeAnimation];
      
      // Reset all states
      setTypedQuestion("");
      setStreamedResponse("");
      setIsTyping(false);
      setIsAiResponding(false);
      setShowTypingIndicator(false);
      setShowFollowUp(false);
      setTypedFollowUp("");
      setIsTypingFollowUp(false);
      setStreamedFollowUpResponse("");
      setIsAiRespondingFollowUp(false);
      
      // Wait a bit before starting
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Start typing the first question
      setIsTyping(true);
      for (let i = 0; i <= currentQuestion.length; i++) {
        setTypedQuestion(currentQuestion.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 30 + Math.random() * 30));
      }
      setIsTyping(false);
      
      // Wait a bit, then show typing indicator
      await new Promise(resolve => setTimeout(resolve, 300));
      setShowTypingIndicator(true);
      
      // Wait for AI "thinking" time
      await new Promise(resolve => setTimeout(resolve, 1200));
      setShowTypingIndicator(false);
      
      // Start streaming the first response
      setIsAiResponding(true);
      const words = currentAnswer.split(' ');
      let currentResponse = "";
      for (let i = 0; i <= words.length; i++) {
        currentResponse = words.slice(0, i).join(' ');
        setStreamedResponse(currentResponse);
        await new Promise(resolve => setTimeout(resolve, 60 + Math.random() * 40));
      }
      setIsAiResponding(false);
      
      // Wait before follow-up question
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show follow-up question
      setShowFollowUp(true);
      setIsTypingFollowUp(true);
      for (let i = 0; i <= currentFollowUp.length; i++) {
        setTypedFollowUp(currentFollowUp.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 40 + Math.random() * 40));
      }
      setIsTypingFollowUp(false);
      
      // Show typing indicator for follow-up
      await new Promise(resolve => setTimeout(resolve, 400));
      setShowTypingIndicator(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowTypingIndicator(false);
      
      // Stream follow-up response
      setIsAiRespondingFollowUp(true);
      const followUpWords = currentFollowUpAnswer.split(' ');
      let currentFollowUpResp = "";
      for (let i = 0; i <= followUpWords.length; i++) {
        currentFollowUpResp = followUpWords.slice(0, i).join(' ');
        setStreamedFollowUpResponse(currentFollowUpResp);
        await new Promise(resolve => setTimeout(resolve, 70 + Math.random() * 50));
      }
      setIsAiRespondingFollowUp(false);
    };

    runAnimation();
    
    const interval = setInterval(() => {
      setActiveAnimation(prev => {
        const next = (prev + 1) % 3;
        return next;
      });
    }, 18000); // Extended interval for full conversation
    
    return () => clearInterval(interval);
  }, [activeAnimation]);

  const guilds = [
    {
      id: "pfas",
      title: "PFAS & Emerging Contaminants",
      description: "Leading the fight against forever chemicals with cutting-edge treatment technologies and regulatory frameworks.",
      icon: Droplets,
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      experts: "Environmental Scientists, Regulators, Treatment Engineers",
      challenge: "PFAS contamination affects 200M+ Americans with fragmented treatment approaches"
    },
    {
      id: "microplastics",
      title: "Microplastics & Wastewater",
      description: "Revolutionizing wastewater treatment to combat microplastic pollution through innovative monitoring and removal technologies.",
      icon: Shield,
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      experts: "Wastewater Engineers, Environmental Chemists, Policy Leaders",
      challenge: "Microplastics in water systems require immediate comprehensive monitoring solutions"
    },
    {
      id: "climate-resilience",
      title: "Climate Resilience & Utilities",
      description: "Building adaptive infrastructure that withstands climate impacts through resilient design and smart adaptation strategies.",
      icon: CloudRain,
      color: "from-orange-500 to-red-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      experts: "Resilience Officers, City Planners, Infrastructure Engineers",
      challenge: "Climate threats require $2.6T in infrastructure adaptation by 2030"
    },
    {
      id: "ai-governance",
      title: "AI & Data Governance",
      description: "Establishing ethical AI frameworks and data governance standards for responsible innovation in public infrastructure.",
      icon: Brain,
      color: "from-purple-500 to-violet-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      experts: "AI Researchers, Data Security Professionals, Tech Regulators",
      challenge: "Public sector needs immediate AI ethics and governance frameworks"
    },
    {
      id: "infrastructure-finance",
      title: "Infrastructure Finance & ROI",
      description: "Transforming infrastructure funding through innovative financing models and clear ROI frameworks for sustainable development.",
      icon: DollarSign,
      color: "from-amber-500 to-yellow-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      experts: "Utility CFOs, Infrastructure Funders, PPP Specialists",
      challenge: "$2.6T infrastructure funding gap requires innovative financing solutions"
    }
  ];

  const problems = [
    {
      icon: Users,
      title: "Knowledge Exists in Silos",
      description: "Decades of expertise trapped in isolated systems, preventing collaborative innovation and solution-sharing."
    },
    {
      icon: BookOpen,
      title: "Brain Drain Crisis",
      description: "Centuries of collective wisdom disappearing as experienced professionals retire without knowledge transfer."
    },
    {
      icon: Target,
      title: "Workforce Learning Gap",
      description: "New professionals lack accelerated paths to master complex infrastructure challenges and industry expertise."
    },
    {
      icon: Zap,
      title: "Academia-Industry Disconnect",
      description: "Educational institutions operate separately from real-world practitioner challenges, limiting innovation potential."
    }
  ];

  const llmQuestions = [
    "How do I design a PFAS treatment system for 50,000 people?",
    "What's the ROI on climate resilience infrastructure?",
    "How do I implement AI governance in public utilities?"
  ];

  const llmAnswers = [
    "Based on current EPA guidelines and treatment data from 200+ installations, I recommend a multi-barrier approach: Start with granular activated carbon (GAC) as primary treatment - expect 85-95% PFAS removal. For your population size, you'll need approximately 12-15 GAC vessels in series. Include reverse osmosis as secondary barrier for 99%+ removal efficiency. Budget $8-12M for initial installation, $2-3M annually for media replacement. Critical: Implement real-time monitoring for breakthrough detection and ensure proper concentrate management through deep well injection or incineration.",
    "Climate adaptation investments typically yield 4:1 ROI through avoided damages and operational savings. For water utilities, key investments include: flood-resistant infrastructure ($2M investment prevents $8M in flood damage), smart grid integration (20% energy savings), and redundant treatment systems. Sea level rise protection shows highest returns - every $1 spent on coastal barriers saves $4-6 in avoided infrastructure damage. Include co-benefits: improved service reliability increases customer satisfaction 35%, reduced emergency repairs cut operational costs 25%. Federal funding through IIJA and IRA can cover 40-80% of initial costs.",
    "Start with data classification frameworks to identify sensitive information, then establish AI ethics committees with cross-departmental representation. Implement these key steps: 1) Create AI governance policy defining acceptable use cases, 2) Establish data privacy protocols following NIST framework, 3) Deploy AI monitoring tools for bias detection and performance tracking, 4) Train staff on responsible AI practices, 5) Implement vendor assessment procedures for AI procurement. Budget 6-12 months for full implementation. Critical success factors: executive sponsorship, clear accountability structures, and regular policy updates as technology evolves."
  ];

  const followUpQuestions = [
    "What about concentrate disposal costs and regulations?",
    "How do I calculate climate risk for my specific region?",
    "What AI monitoring tools do you recommend for utilities?"
  ];

  const followUpAnswers = [
    "PFAS concentrate disposal is indeed a major cost driver. Current options: Deep well injection costs $0.50-2.00 per gallon (requires Class I well permit). High-temperature incineration runs $3-8 per gallon but ensures complete destruction. Emerging technologies like PFAS destruction reactors show promise at $1-3 per gallon. Regulatory landscape is evolving rapidly - EPA's proposed PFAS disposal rules may limit injection wells by 2025. I recommend budgeting 15-25% of total treatment costs for concentrate management and building flexibility for technology changes.",
    "Use NOAA's Climate Explorer tool combined with local hydrologic modeling. Key metrics: 100-year flood elevation changes (typically +2-4 feet by 2050), temperature increases affecting treatment processes, and precipitation pattern shifts. Partner with regional climate science centers for downscaled projections. Conduct vulnerability assessments using CREAT tool from EPA. For coastal utilities, factor in 1-2 feet sea level rise by 2050. Critical: update risk assessments every 5 years as climate models improve and include compound events like heat waves during droughts.",
    "For utilities, I recommend: 1) Microsoft's Responsible AI dashboard for bias monitoring, 2) DataRobot for model performance tracking, 3) IBM Watson OpenScale for explainability, 4) Fiddler AI for continuous monitoring. Budget $50-200K annually depending on deployment scale. Key features needed: automated bias detection, performance drift alerts, audit trail capabilities, and integration with existing SCADA systems. Start with pilot deployment on non-critical systems like energy optimization before expanding to operational controls."
  ];

  return (
    <main className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background-deep/90 via-background/60 to-background-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.15),transparent_50%)]" />
        
        {/* Animated Ribbons */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -skew-y-1 animate-[wave_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-0 w-full h-3 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform skew-y-2 animate-[wave_10s_ease-in-out_infinite_reverse] opacity-60"></div>
          <div className="absolute bottom-60 left-0 w-full h-2 bg-gradient-to-r from-transparent via-secondary/25 to-transparent transform -skew-y-3 animate-[wave_12s_ease-in-out_infinite] opacity-70"></div>
          <div className="absolute bottom-32 right-0 w-full h-4 bg-gradient-to-r from-transparent via-primary/15 to-transparent transform skew-y-1 animate-[wave_9s_ease-in-out_infinite_reverse]"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <div 
            className={`transition-all duration-1000 ${visibleItems.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="0"
          >
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              The Guild
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Where Practitioners Power the AI Stack
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
              Expertise captured, curated, and advanced into tools for the workforce of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" className="group">
                Join The Guild
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="glass">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is The Guild */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-deep to-background" />
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 delay-200 ${visibleItems.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="1"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Modern Guilds for the AI Age
            </h2>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Just as historical guilds brought together skilled practitioners to set standards and train apprentices, 
              The Guild creates <span className="text-primary font-semibold">expert collectives</span> that curate knowledge into 
              <span className="text-accent font-semibold"> AI-powered models</span>, ensuring trusted expertise guides the future workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Problems We're Solving */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background-deep via-background to-background-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${visibleItems.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="2"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Crisis We're Solving
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Critical infrastructure knowledge is fragmenting, disappearing, and failing to reach the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`transition-all duration-1000 ${visibleItems.has(3 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                data-index={3 + index}
              >
                <Card className="h-full bg-card/50 border-destructive/20 backdrop-blur-sm hover:shadow-glow transition-all duration-500 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <problem.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <CardTitle className="text-lg text-destructive">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {problem.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Animation Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-deep to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
        
        {/* Flowing Ribbons */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent transform -skew-y-2 animate-[flow_15s_linear_infinite]"></div>
          <div className="absolute top-32 right-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/30 to-transparent transform skew-y-1 animate-[flow_18s_linear_infinite_reverse] opacity-70"></div>
          <div className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/35 to-transparent transform -skew-y-1 animate-[flow_20s_linear_infinite]"></div>
        </div>
        
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 delay-200 ${visibleItems.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="7"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              The Future of Expert Knowledge
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              AI-powered models trained by practitioners, for practitioners. Knowledge that never gets lost.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* iPhone Animation */}
            <div 
              className={`lg:w-1/2 flex justify-center transition-all duration-1000 delay-400 ${visibleItems.has(8) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              data-index="8"
            >
              <div className="relative">
                {/* iPhone Frame */}
                <div className="relative w-80 h-[640px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="h-12 bg-background-deep flex items-center justify-between px-6">
                      <span className="text-xs font-medium">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-foreground rounded-sm"></div>
                        <div className="w-6 h-2 bg-foreground rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Chat Interface */}
                    <div className="p-4 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Brain className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Guild AI Assistant</div>
                          <div className="text-xs text-foreground/60">Expert-trained knowledge</div>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4 max-h-[480px] overflow-y-auto scrollbar-thin">
                        {/* User Question */}
                        {(typedQuestion || isTyping) && (
                          <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-3 max-w-[280px] text-sm leading-relaxed">
                              {typedQuestion}
                              {isTyping && <span className="animate-pulse">|</span>}
                            </div>
                          </div>
                        )}
                        
                        {/* Typing Indicator */}
                        {showTypingIndicator && (
                          <div className="flex justify-start">
                            <div className="bg-card border rounded-2xl rounded-bl-md px-4 py-3">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* AI Response */}
                        {(streamedResponse || isAiResponding) && (
                          <div className="flex justify-start">
                            <div className="bg-card border rounded-2xl rounded-bl-md px-4 py-3 max-w-[280px]">
                              <div className="text-sm text-foreground/90 leading-relaxed">
                                {streamedResponse}
                                {isAiResponding && <span className="animate-pulse">|</span>}
                              </div>
                              {streamedResponse && !isAiResponding && (
                                <div className="flex items-center gap-2 mt-3 text-xs text-foreground/60">
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                  Verified by guild experts
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Follow-up Question */}
                        {(showFollowUp && (typedFollowUp || isTypingFollowUp)) && (
                          <div className="flex justify-end">
                            <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-3 max-w-[280px] text-sm leading-relaxed">
                              {typedFollowUp}
                              {isTypingFollowUp && <span className="animate-pulse">|</span>}
                            </div>
                          </div>
                        )}

                        {/* Follow-up AI Response */}
                        {(streamedFollowUpResponse || isAiRespondingFollowUp) && (
                          <div className="flex justify-start">
                            <div className="bg-card border rounded-2xl rounded-bl-md px-4 py-3 max-w-[280px]">
                              <div className="text-sm text-foreground/90 leading-relaxed">
                                {streamedFollowUpResponse}
                                {isAiRespondingFollowUp && <span className="animate-pulse">|</span>}
                              </div>
                              {streamedFollowUpResponse && !isAiRespondingFollowUp && (
                                <div className="flex items-center gap-2 mt-3 text-xs text-foreground/60">
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                  Verified by guild experts
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Input Area */}
                      <div className="mt-4 flex items-center gap-2 p-3 bg-card rounded-2xl border">
                        <MessageSquare className="h-4 w-4 text-foreground/40" />
                        <span className="text-sm text-foreground/40 flex-1">Ask the guild...</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-xl -z-10 animate-pulse-glow"></div>
              </div>
            </div>

            {/* Features */}
            <div 
              className={`lg:w-1/2 transition-all duration-1000 delay-600 ${visibleItems.has(9) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              data-index="9"
            >
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Guardrails</h3>
                    <p className="text-foreground/70">Every response verified by guild practitioners. No hallucinations, only trusted knowledge.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Living Knowledge Base</h3>
                    <p className="text-foreground/70">Continuously updated by active practitioners. Knowledge that evolves with the industry.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Expertise</h3>
                    <p className="text-foreground/70">Access decades of experience instantly. Accelerate learning and decision-making.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guilds */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background-deep via-background to-background-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Dynamic Wave Ribbons */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-0 w-full h-3 bg-gradient-to-r from-transparent via-primary/25 to-transparent transform rotate-1 animate-[wave_14s_ease-in-out_infinite]"></div>
          <div className="absolute top-80 right-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform -rotate-2 animate-[wave_16s_ease-in-out_infinite_reverse] opacity-80"></div>
          <div className="absolute bottom-40 left-0 w-full h-2 bg-gradient-to-r from-transparent via-secondary/30 to-transparent transform rotate-3 animate-[wave_11s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="container relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 delay-200 ${visibleItems.has(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="10"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              The Five Founding Guilds
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Critical domains where expert knowledge becomes AI-powered tools for the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {guilds.map((guild, index) => (
              <div
                key={guild.id}
                className={`transition-all duration-1000 ${visibleItems.has(11 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                data-index={11 + index}
              >
                <Card className={`h-full ${guild.bgColor} ${guild.borderColor} backdrop-blur-sm hover:shadow-glow transition-all duration-500 group cursor-pointer`}>
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${guild.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <guild.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{guild.title}</CardTitle>
                    <CardDescription className="text-foreground/70">
                      {guild.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-foreground/80 mb-1">Key Experts:</div>
                      <div className="text-xs text-foreground/60">{guild.experts}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-destructive mb-1">Critical Challenge:</div>
                      <div className="text-xs text-foreground/70">{guild.challenge}</div>
                    </div>
                    <div className="pt-2 space-y-2">
                      <Button className="w-full" variant="ghost" size="sm">
                        Learn More
                      </Button>
                      <Button className="w-full" size="sm">
                        Join Guild
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
        
        {/* Elegant Flowing Ribbons */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-0 w-full h-4 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -skew-y-1 animate-[elegantFlow_12s_ease-in-out_infinite] opacity-60"></div>
          <div className="absolute top-20 right-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/25 to-transparent transform skew-y-2 animate-[elegantFlow_15s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-16 left-0 w-full h-3 bg-gradient-to-r from-transparent via-secondary/20 to-transparent transform -skew-y-2 animate-[elegantFlow_18s_ease-in-out_infinite] opacity-70"></div>
          <div className="absolute bottom-4 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent transform skew-y-1 animate-[elegantFlow_10s_ease-in-out_infinite_reverse]"></div>
        </div>
        
        <div className="container relative z-10">
          <div 
            className={`text-center transition-all duration-1000 delay-200 ${visibleItems.has(16) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            data-index="16"
          >
            <h2 className="text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Shape the Future of Infrastructure
            </h2>
            <p className="text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto">
              Join the movement to preserve knowledge, accelerate learning, and build AI tools that serve humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="xl" variant="hero" className="group">
                Join as an Expert
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="glass">
                Join as a Participant
              </Button>
              <Button size="xl" variant="glow">
                Become a Founding Donor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Guild;