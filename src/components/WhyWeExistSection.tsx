import { Card, CardContent } from "@/components/ui/card";

const WhyWeExistSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-10 animate-float-delayed"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why We <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">Exist</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Problems Column */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8">The Problem</h3>
            
            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Today, the systems that govern infrastructure are <span className="text-primary font-medium">fragmented and opaque</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Data lives in silos. Regulations, budgets, and knowledge <span className="text-primary font-medium">don't connect</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Accountability is weak</span>. Projects move forward without clear ROI or metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Funding is limited</span>. Communities foot the bill while bureaucrats shift blame.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Trust is eroding</span>. Citizens, practitioners, and governments operate with uncertainty instead of clarity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Solution Column */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-8">Our Solution</h3>
            
            <Card className="glass-card border-secondary/20 glow-secondary">
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed mb-4">
                  <span className="text-secondary font-semibold">APAS Labs was created to close these gaps.</span> Each Lab is designed to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Capture and organize knowledge before it's lost.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transform fragmented information into decision-ready tools.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Create feedback loops that connect citizens, practitioners, funders, and governments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ensure every decision is guided by clarity, accountability, and measurable outcomes.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <Card className="glass-card border-accent/30 glow-accent max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Utilities, consultants, and governments are forced to make critical decisions using legacy systems, outdated processes, and incomplete data. The result: <span className="text-destructive font-medium">higher costs, slower progress, and communities left without the transparency they deserve.</span>
              </p>
              <div className="mt-8 pt-6 border-t border-accent/20">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  <span className="text-accent font-semibold">Incrementally, with each Lab</span>, we are advancing toward systems that work for everyone — practical, data-powered solutions that make decisions faster, funding more transparent, and results more accountable.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;