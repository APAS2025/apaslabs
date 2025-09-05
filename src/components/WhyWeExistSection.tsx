import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, ArrowRight, CheckCircle, Target, Users, Zap } from "lucide-react";

const WhyWeExistSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Fragmented & Opaque",
      description: "Today, the systems that govern infrastructure are fragmented and opaque.",
      highlight: "fragmented and opaque"
    },
    {
      icon: AlertTriangle,
      title: "Disconnected Data",
      description: "Data lives in silos. Regulations, budgets, and knowledge don't connect.",
      highlight: "don't connect"
    },
    {
      icon: AlertTriangle,
      title: "Weak Accountability",
      description: "Accountability is weak. Projects move forward without clear ROI or metrics.",
      highlight: "Accountability is weak"
    },
    {
      icon: AlertTriangle,
      title: "Limited Funding",
      description: "Funding is limited. Communities foot the bill while bureaucrats shift blame.",
      highlight: "Funding is limited"
    },
    {
      icon: AlertTriangle,
      title: "Eroding Trust",
      description: "Trust is eroding. Citizens, practitioners, and governments operate with uncertainty instead of clarity.",
      highlight: "Trust is eroding"
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Capture Knowledge",
      description: "Capture and organize knowledge before it's lost."
    },
    {
      icon: Zap,
      title: "Transform Information",
      description: "Transform fragmented information into decision-ready tools."
    },
    {
      icon: Users,
      title: "Create Connections",
      description: "Create feedback loops that connect citizens, practitioners, funders, and governments."
    },
    {
      icon: CheckCircle,
      title: "Ensure Clarity",
      description: "Ensure every decision is guided by clarity, accountability, and measurable outcomes."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-background-deep/50 to-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--secondary)/0.1)_0%,_transparent_50%)]"></div>
      </div>
      
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-accent rounded-full blur-3xl opacity-5"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-4 rounded-2xl glass-surface mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              Why We <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">Exist</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The infrastructure systems that shape our world are broken. We're here to fix them.
          </p>
        </div>

        {/* Problems vs Solutions Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Problems Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="text-destructive font-semibold text-lg">Current Problems</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card 
                  key={index}
                  className="glass-card border-destructive/20 hover:border-destructive/40 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-elegant"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 group-hover:bg-destructive/20 transition-colors">
                        <problem.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 text-lg">{problem.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {problem.description.split(problem.highlight).map((part, i) => 
                            i === 0 ? part : (
                              <span key={i}>
                                <span className="text-destructive font-medium">{problem.highlight}</span>
                                {part}
                              </span>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-3 mb-6">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold text-lg">Our Solution</span>
              </div>
            </div>

            {/* APAS Labs Introduction */}
            <Card className="glass-card border-secondary/20 glow-secondary hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                    APAS Labs was created to close these gaps
                  </h3>
                  <p className="text-muted-foreground text-lg">Each Lab is designed to:</p>
                </div>
                
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg glass-surface border border-secondary/10 hover:border-secondary/20 transition-all duration-200 group">
                      <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                        <solution.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                        <p className="text-muted-foreground text-sm">{solution.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <Card className="glass-card border-accent/30 glow-accent max-w-5xl mx-auto hover:scale-[1.01] transition-all duration-500">
            <CardContent className="p-8 md:p-12 lg:p-16">
              <div className="space-y-8">
                <div className="p-6 rounded-2xl glass-surface border border-destructive/20">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                    Utilities, consultants, and governments are forced to make critical decisions using 
                    <span className="text-destructive font-semibold mx-2">legacy systems, outdated processes, and incomplete data</span>. 
                    The result: higher costs, slower progress, and communities left without the transparency they deserve.
                  </p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-16 h-0.5 bg-gradient-primary"></div>
                  <ArrowRight className="w-8 h-8 text-accent mx-4" />
                  <div className="w-16 h-0.5 bg-gradient-primary"></div>
                </div>
                
                <div className="p-6 rounded-2xl glass-surface border border-accent/20 glow-accent">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                    <span className="text-accent font-bold text-2xl md:text-3xl">Incrementally, with each Lab</span>, 
                    we are advancing toward systems that work for everyone — practical, data-powered solutions 
                    that make decisions faster, funding more transparent, and results more accountable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;