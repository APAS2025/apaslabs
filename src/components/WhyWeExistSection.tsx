import { useState, useEffect } from "react";
import { Database, AlertTriangle, Users, Wrench, ArrowRight, CheckCircle, Zap, Target } from "lucide-react";

const WhyWeExistSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      title: "Siloed Data Architecture",
      description: "$2.4B lost annually due to disconnected systems preventing coordinated infrastructure response.",
      icon: Database,
      color: "text-red-400",
      bgColor: "bg-red-400/10"
    },
    {
      title: "Zero Accountability Framework", 
      description: "92% of infrastructure projects exceed budget with no measurable ROI tracking systems.",
      icon: AlertTriangle,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10"
    },
    {
      title: "Broken Stakeholder Trust",
      description: "68% decline in citizen confidence as governments operate without transparency or clear metrics.",
      icon: Users,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      title: "Legacy Decision Systems",
      description: "Infrastructure decisions made on 20-year-old processes cost communities 40% more than necessary.",
      icon: Wrench,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    }
  ];

  return (
    <section className="relative -mt-16 pt-32 pb-20 lg:pb-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background-deep to-background z-0" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-3xl animate-pulse delay-500" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div 
            data-index="0"
            className={`transition-all duration-1000 ${
              visibleItems.includes(0) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-destructive/10 px-6 py-3 rounded-full border border-destructive/20 mb-8">
              <AlertTriangle size={20} className="text-destructive" />
              <span className="text-destructive font-semibold">Critical Infrastructure Crisis</span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-inter mb-8 leading-[0.9]">
              <span className="bg-gradient-to-r from-destructive via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Systems Are
              </span>
              <br />
              <span className="text-foreground">
                Failing Communities
              </span>
            </h2>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-destructive/50" />
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-destructive/50" />
            </div>
            
            <p className="text-2xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
              Critical decisions made in isolation, without data, accountability, or community voice—resulting in 
              <span className="text-destructive font-semibold"> billions wasted</span> and <span className="text-destructive font-semibold">trust eroded</span>.
            </p>
          </div>
        </div>

        {/* Enhanced Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                data-index={index + 1}
                className={`group transition-all duration-1000 delay-${index * 200} ${
                  visibleItems.includes(index + 1)
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-12'
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`glass-card p-8 h-full transition-all duration-500 hover:scale-[1.03] border border-white/10 relative overflow-hidden ${
                  activeCard === index ? 'shadow-elegant' : ''
                }`}>
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 ${problem.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className={`${problem.color} ${problem.bgColor} p-4 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <IconComponent size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {problem.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {problem.description}
                        </p>
                        
                        {/* Progress indicator */}
                        <div className="mt-6">
                          <div className="w-full bg-white/5 rounded-full h-1">
                            <div 
                              className={`h-1 rounded-full bg-gradient-to-r ${problem.color.replace('text-', 'from-')} to-transparent transition-all duration-1000 delay-300 ${
                                visibleItems.includes(index + 1) ? 'w-full' : 'w-0'
                              }`} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Solution Transition */}
        <div 
          data-index="5"
          className={`transition-all duration-1000 ${
            visibleItems.includes(5)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          {/* Transformation Arrow */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center gap-8">
              <div className="text-6xl">💥</div>
              <div className="flex flex-col items-center gap-4">
                <ArrowRight size={48} className="text-primary animate-pulse" />
                <span className="text-primary font-bold text-xl">SOLUTION</span>
              </div>
              <div className="text-6xl">✨</div>
            </div>
          </div>

          <div className="glass-card p-10 lg:p-16 border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float delay-1000" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-primary/20 px-6 py-3 rounded-full border border-primary/30 mb-8">
                  <Zap size={20} className="text-primary animate-pulse" />
                  <span className="text-primary font-bold">Living Labs Innovation</span>
                </div>
                
                <h3 className="text-4xl lg:text-6xl font-bold mb-8 leading-[0.9]">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Connected Systems,
                  </span>
                  <br />
                  <span className="text-foreground">
                    Empowered Communities
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: Database, title: "Integrated Data", description: "Real-time coordination across all systems" },
                  { icon: Target, title: "Clear Accountability", description: "Measurable ROI and transparent metrics" },
                  { icon: CheckCircle, title: "Community Trust", description: "Direct citizen involvement and feedback" }
                ].map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-primary/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                  Transform fragmented infrastructure decisions into 
                  <span className="text-primary font-semibold"> transparent, accountable, measurable outcomes</span> for communities.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  {["Real-time Data", "Clear Metrics", "Community Voice", "Transparent Funding"].map((tag, index) => (
                    <span key={index} className="bg-primary/20 text-primary px-6 py-3 rounded-full font-semibold border border-primary/30 hover:bg-primary/30 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;