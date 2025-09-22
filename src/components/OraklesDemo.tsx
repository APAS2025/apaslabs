import { useState, useEffect } from "react";
import { Brain, MessageSquare, Shield, Database, Zap } from "lucide-react";

const OraklesDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [streamedResponse, setStreamedResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [isAiResponding, setIsAiResponding] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [typedFollowUp, setTypedFollowUp] = useState("");
  const [streamedFollowUpResponse, setStreamedFollowUpResponse] = useState("");
  const [isTypingFollowUp, setIsTypingFollowUp] = useState(false);
  const [isAiRespondingFollowUp, setIsAiRespondingFollowUp] = useState(false);

  const questions = [
    "What's the current water quality status in Biscayne Bay?",
    "How can we improve stormwater management infrastructure ROI?",
    "What are the latest PFAS treatment recommendations for utilities?"
  ];

  const responses = [
    "Based on real-time monitoring from 47 stations across Biscayne Bay, current conditions show: Dissolved oxygen levels at 6.2 mg/L (healthy range), nitrogen levels elevated in northern sectors due to urban runoff. Seagrass coverage has improved 12% since last quarter thanks to restoration efforts. Key concern areas: Turkey Point vicinity and Oleta River mouth show continued nutrient loading. Recommended actions: Enhanced stormwater treatment in Aventura and Sunny Isles corridors, expanded living shoreline installations.",
    "Infrastructure ROI optimization requires integrated data analysis across asset lifecycles. Our Orakles platform shows utilities achieving 23% cost savings through: Predictive maintenance reducing emergency repairs by 40%, smart sensor networks preventing $2.8M in flood damage annually, and automated reporting cutting compliance costs 60%. Key insight: Every $1 invested in resilient infrastructure delivers $4-7 in avoided damages. Focus areas: Green infrastructure, redundant systems, and real-time monitoring integration.",
    "Latest EPA guidance emphasizes multi-barrier approaches: Granular Activated Carbon (GAC) achieving 85-95% removal for most PFAS compounds. For your service population, recommend 8-12 GAC vessels in series, with reverse osmosis backup for 99%+ efficiency. Critical: Proper concentrate management through deep well injection ($0.50-2.00/gallon) or thermal destruction. Budget $6-10M initial installation, $1.5-2.5M annual media replacement. Monitor breakthrough every 2 weeks during initial months."
  ];

  const followUpQuestions = [
    "What specific actions should we prioritize for northern Biscayne Bay?",
    "Can you show me case studies of successful implementations?",
    "What about emerging PFAS destruction technologies?"
  ];

  const followUpResponses = [
    "Northern Bay priority actions: 1) Implement enhanced nutrient removal at Aventura WRF ($12M upgrade, 80% phosphorus reduction), 2) Install 15 bioswales along Biscayne Boulevard corridor, 3) Restore 200 acres of mangrove buffer zones. Timeline: 18-month implementation. Expected outcome: 35% reduction in nitrogen loading, improved dissolved oxygen levels to 7+ mg/L. Federal funding available through IIJA Water Infrastructure program.",
    "Miami-Dade's success: $180M resilience investment delivered $420M in avoided damages during Hurricane season. Key components: Smart pump stations with AI prediction reduced flooding 67%, redundant treatment systems maintained 99.8% uptime during Irma. Broward County: Green infrastructure program generated 4.2:1 ROI through reduced stormwater management costs and property value increases. Similar results in Norfolk, Virginia and Charleston, South Carolina.",
    "Emerging PFAS destruction: Plasma arc technology showing 99.9% destruction at $1-3/gallon concentrate treatment. Supercritical water oxidation pilots achieving complete mineralization. Timeline: Commercial availability 2024-2025. Current recommendation: Design systems with technology flexibility - modular approach allows future upgrades. Focus on immediate GAC implementation while monitoring emerging solutions for long-term concentrate management."
  ];

  // Animation logic
  useEffect(() => {
    const typeQuestion = () => {
      setIsTyping(true);
      const question = questions[currentStep];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        setTypedQuestion(question.substring(0, index + 1));
        index++;
        
        if (index >= question.length) {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => setShowTypingIndicator(true), 500);
        }
      }, 50);
    };

    const streamResponse = () => {
      setShowTypingIndicator(false);
      setIsAiResponding(true);
      const response = responses[currentStep];
      let index = 0;
      
      const streamInterval = setInterval(() => {
        setStreamedResponse(response.substring(0, index + 1));
        index++;
        
        if (index >= response.length) {
          clearInterval(streamInterval);
          setIsAiResponding(false);
          setTimeout(() => setShowFollowUp(true), 1000);
        }
      }, 30);
    };

    const typeFollowUpQuestion = () => {
      setIsTypingFollowUp(true);
      const question = followUpQuestions[currentStep];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        setTypedFollowUp(question.substring(0, index + 1));
        index++;
        
        if (index >= question.length) {
          clearInterval(typeInterval);
          setIsTypingFollowUp(false);
          setTimeout(() => setIsAiRespondingFollowUp(true), 500);
        }
      }, 50);
    };

    const streamFollowUpResponse = () => {
      const response = followUpResponses[currentStep];
      let index = 0;
      
      const streamInterval = setInterval(() => {
        setStreamedFollowUpResponse(response.substring(0, index + 1));
        index++;
        
        if (index >= response.length) {
          clearInterval(streamInterval);
          setIsAiRespondingFollowUp(false);
          
          // Reset and cycle to next step after completion
          setTimeout(() => {
            setCurrentStep((prev) => (prev + 1) % questions.length);
            setTypedQuestion("");
            setStreamedResponse("");
            setTypedFollowUp("");
            setStreamedFollowUpResponse("");
            setShowFollowUp(false);
          }, 3000);
        }
      }, 25);
    };

    // Start animation sequence
    const timer1 = setTimeout(typeQuestion, 1000);
    const timer2 = setTimeout(streamResponse, 4000);
    const timer3 = setTimeout(typeFollowUpQuestion, 8000);
    const timer4 = setTimeout(streamFollowUpResponse, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [currentStep]);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-deep to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
            The Future of Infrastructure Intelligence
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            AI-powered solutions trained by practitioners, for practitioners. Real-time insights that drive better decisions for our communities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* iPhone Animation */}
          <div className="lg:w-1/2 flex justify-center">
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
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                        <Brain className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Orakles AI</div>
                        <div className="text-xs text-foreground/60">Infrastructure Intelligence</div>
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
                                Verified by experts
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
                                Verified by experts
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Input Area */}
                    <div className="mt-4 flex items-center gap-2 p-3 bg-card rounded-2xl border">
                      <MessageSquare className="h-4 w-4 text-foreground/40" />
                      <span className="text-sm text-foreground/40 flex-1">Ask about infrastructure...</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[3rem] blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:w-1/2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Validation</h3>
                  <p className="text-foreground/70">Every response backed by practitioner expertise and real-world data. No hallucinations, only trusted insights.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Intelligence</h3>
                  <p className="text-foreground/70">Live data integration from monitoring stations, sensors, and government databases. Always current, always accurate.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
                  <p className="text-foreground/70">From problem identification to solution implementation. Get specific recommendations with ROI projections and timelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OraklesDemo;