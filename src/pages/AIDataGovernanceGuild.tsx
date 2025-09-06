import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { CheckCircle, Shield, Database, Lock, GitBranch, Users, BarChart3, FileText, ExternalLink, Smartphone, Brain } from "lucide-react";

const AIDataGovernanceGuild = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [isTypingQuestion, setIsTypingQuestion] = useState(true);
  const [isTypingAnswer, setIsTypingAnswer] = useState(false);

  const fullQuestion = "How do we make fragmented legacy systems interoperable without costly overhauls?";
  const fullAnswer = "Legacy system integration requires API standardization:\n• Implement RESTful middleware layers\n• Use data mapping protocols (JSON/XML)\n• Deploy event-driven architecture\n• Establish blockchain audit trails";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    // Reset animation cycle every 20 seconds
    const resetCycle = setInterval(() => {
      setQuestionText("");
      setAnswerText("");
      setIsTypingQuestion(true);
      setIsTypingAnswer(false);
    }, 20000);

    return () => clearInterval(resetCycle);
  }, []);

  const steps = [
    { icon: <Database className="w-6 h-6" />, title: "Bootstrapping the Stack", desc: "Powered by APAS.AI on independent infrastructure" },
    { icon: <Shield className="w-6 h-6" />, title: "Curating & Guardrailing", desc: "Validated frameworks with blockchain auditability" },
    { icon: <GitBranch className="w-6 h-6" />, title: "Building the Application", desc: "Custom GPT with governance and compliance built-in" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Transparency & Progress", desc: "Clear timelines with blockchain-backed accountability" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-deep via-background to-background-deep">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 bg-indigo-500/10 backdrop-blur-sm px-6 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              AI, Data Governance & Transparency Guild
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Building Trust Into the Stack
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Powered by APAS.AI — where experts, practitioners, and technologists tackle data fragmentation, governance gaps, and blockchain-backed transparency to make AI in infrastructure safe, reliable, and accountable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg">
                Apply to Join the Guild
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-400/30 text-indigo-300 hover:bg-indigo-400/10 px-8 py-6 text-lg">
                Contribute Knowledge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What This Guild Is */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What This Guild Is
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI is moving faster than governance. In infrastructure, the risks are amplified: fragmented legacy systems, data obesity (too much of the wrong data, not enough of the right), and a lack of standards make AI unreliable.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Without integrity, AI becomes a liability. Without governance, funding dries up. Without transparency, communities lose trust.
              </p>
              
              <p className="text-lg font-semibold text-foreground">
                The AI, Data Governance & Transparency Guild exists to change that.
              </p>
              
              <div className="grid gap-4 mt-8">
                {[
                  "Define data integrity and fabrics that make infrastructure AI-ready",
                  "Create governance standards and guardrails to minimize hallucination risk", 
                  "Apply blockchain for transparency, auditability, and accountability",
                  "Develop metrics and dashboards that governments and funders can trust",
                  "Ensure AI in infrastructure strengthens — not erodes — public confidence"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border-indigo-500/20 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">A Living Lab</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  This Guild is a <strong>living lab</strong> — continuously enriched with governance frameworks, blockchain applications, and real-world data integrity practices. Each new contribution reduces risk and raises trust.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Over time, it becomes the <strong>critical trust layer</strong> underpinning all other Labs — from PFAS, to Climate, to Finance. Without governance, none of them can scale.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* A Living Lab */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-deep to-background" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="transition-all duration-1000 delay-200 opacity-100 translate-y-0">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                A Living Lab
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  This Guild is not a one-time project. It is a <span className="text-primary font-semibold">living lab</span> — 
                  continuously enriched by new governance frameworks, blockchain applications, and real-world data integrity practices.
                </p>
                <p>
                  Each new contribution reduces risk and raises trust. Over time, it becomes the 
                  <span className="text-primary font-semibold"> critical trust layer</span> underpinning all other Labs — from PFAS, to Climate, to Finance. 
                  Without governance, none of them can scale.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Governance Intelligence in Your Pocket
                  </h3>
                  <p className="text-foreground/90">
                    Access blockchain-verified frameworks, audit trails, and compliance standards 
                    wherever critical governance decisions need to be made.
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Mockup Animation */}
            <div className="relative transition-all duration-1000 delay-300 opacity-100 translate-x-0">
              <div className="relative mx-auto w-80 h-[640px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen */}
                    <div className="absolute inset-4 bg-gradient-to-br from-background-deep to-background rounded-3xl overflow-hidden">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 py-4 text-xs text-foreground/60">
                        <span>9:41</span>
                        <span>AI Governance Guild</span>
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
                            <Shield className="h-4 w-4 text-indigo-400" />
                            <span className="text-sm font-medium">Interoperability Query</span>
                          </div>
                          <p className="text-xs text-foreground/80 min-h-[2.5rem]">
                            {questionText}
                            {isTypingQuestion && <span className="animate-pulse">|</span>}
                          </p>
                        </div>
                        
                        {answerText && (
                          <div className="bg-glass border border-glass-border rounded-lg p-4 animate-fade-in">
                            <div className="flex items-center gap-2 mb-2">
                              <Brain className="h-4 w-4 text-primary" />
                              <span className="text-xs font-medium">Expert Analysis</span>
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
                              <span className="text-xs font-medium text-green-400">Verified by 15 experts</span>
                            </div>
                            <p className="text-xs text-foreground/70">Last updated: 3 days ago</p>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className={`p-6 transition-all duration-500 cursor-pointer ${
                  currentStep === index 
                    ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30 scale-105' 
                    : 'bg-card/50 border-border/50 hover:border-indigo-500/20'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                    currentStep === index 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  
                  <div className="text-xs text-indigo-400 font-medium">
                    Step {index + 1}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations of Members */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expectations of Members
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Experts",
                desc: "Define standards, fabrics, and integrity rules"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Practitioners", 
                desc: "Expose pain points from fragmented legacy systems"
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Blockchain Technologists",
                desc: "Bring traceability and auditability"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Funders & Governments",
                desc: "Validate standards, align with compliance, and support adoption"
              }
            ].map((member, index) => (
              <Card key={index} className="p-6 bg-card/50 border-border/50 hover:border-indigo-500/20 transition-colors">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                    {member.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.title}</h3>
                  <p className="text-sm text-muted-foreground">{member.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-foreground">
              Together, members build the <span className="text-indigo-400">trusted foundation for AI in infrastructure.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Guild vs Generic GPTs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Guild vs Generic GPTs
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">The Guild (APAS.AI Stack)</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Independent infrastructure → no vendor control",
                    "Governance-first frameworks for data integrity", 
                    "Blockchain-backed transparency and auditability",
                    "Handles data obesity by curating what matters most",
                    "Continuously enriched → living lab",
                    "Purpose-built for infrastructure"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-card/30 border-destructive/30">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Generic GPTs</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Black box → no traceable sources",
                    "High hallucination risk → unreliable in critical systems",
                    "No governance, no standards, no accountability", 
                    "Bloated with irrelevant or biased data",
                    "Unverifiable → can't meet compliance or audit requirements"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-destructive rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground italic">
              In infrastructure, where trust is non-negotiable, generic GPTs fail. The Guild is curated, governed, and blockchain-backed.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Deliverables
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Custom GPT App",
                desc: "For governance and compliance with blockchain audit trails"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Governance Framework", 
                desc: "Defining data fabrics, standards, and metrics"
              },
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Blockchain Audit Tools",
                desc: "For transparency and trust in all transactions"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Dashboards & KPIs",
                desc: "Linking data quality to funding outcomes"
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Case Study Repository", 
                desc: "Real-world governance implementation examples"
              },
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: "Progress Reports",
                desc: "Regular transparent updates on development and outcomes"
              }
            ].map((deliverable, index) => (
              <Card key={index} className="p-6 bg-card/50 border-border/50 hover:border-indigo-500/20 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                    {deliverable.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{deliverable.title}</h3>
                  <p className="text-sm text-muted-foreground">{deliverable.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-card/30 border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h3>
            <p className="text-muted-foreground leading-relaxed">
              All AI outputs should be verified in context. The Guild's distinction is that it is <strong>built on governed, curated, blockchain-audited data</strong>, validated by experts and practitioners. This makes it far more reliable than generic AI, while still requiring professional oversight in critical decisions.
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Join the AI, Data Governance & Transparency Guild
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Help build the first AI-powered and blockchain-backed platform that fixes data fragmentation, enforces governance standards, and delivers transparent, accountable tools for infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg">
                Apply to Join the Guild
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-400/30 text-indigo-300 hover:bg-indigo-400/10 px-8 py-6 text-lg">
                Contribute Knowledge
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-400/30 text-indigo-300 hover:bg-indigo-400/10 px-8 py-6 text-lg">
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDataGovernanceGuild;