import { useState, useEffect } from "react";
import { Database, AlertTriangle, Users, Wrench, ArrowRight, Droplets, TrendingDown, XCircle, Clock } from "lucide-react";

const WhyWeExistSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      title: "When Your Water Bill Funds a Mystery",
      description: "Miami-Dade spent $500M on infrastructure upgrades last year. Ask anyone where the money went—crickets. No dashboards. No metrics. Just hope and a promise that pipes underground got fixed. Your tax dollars deserve better.",
      statistic: "$2.4B",
      statLabel: "wasted annually on disconnected systems",
      icon: Droplets,
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "The 'Trust Me, It'll Work' Budget", 
      description: "A city council approves a $50M stormwater project. Two years later: 92% over budget, delayed by 18 months, and no clear evidence it solved the flooding. But hey, at least someone got paid. This isn't accountability—it's expensive theater.",
      statistic: "92%",
      statLabel: "of projects exceed budget with zero ROI tracking",
      icon: TrendingDown,
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "When Citizens Give Up Asking",
      description: "Your neighbor stopped going to town halls because 'nothing ever changes.' She asked about water quality three times—got three different answers. Trust isn't just broken; it's buried under decades of opaque operations and missing answers.",
      statistic: "68%",
      statLabel: "decline in citizen trust due to zero transparency",
      icon: XCircle,
      color: "text-red-400",
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "Decision-Making Stuck in 2004",
      description: "Infrastructure decisions rely on spreadsheets older than the iPhone, paper reports nobody reads, and tribal knowledge from staff about to retire. Meanwhile, Miami floods during high tide. Outdated systems don't just cost money—they cost lives.",
      statistic: "40%",
      statLabel: "higher costs from 20-year-old decision processes",
      icon: Clock,
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-amber-500/20"
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background-deep via-background to-background-deep">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            data-index="0"
            className={`transition-all duration-1000 ease-out ${
              visibleItems.includes(0) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                The Infrastructure Crisis<br />Nobody Talks About
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-blue-400 to-blue-600 mx-auto rounded-full shadow-glow mb-8" />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              These aren't abstract problems—they're your money, your safety, and your community's future.
            </p>
          </div>
        </div>

        {/* Problems Grid - Staggered Layout */}
        <div className="space-y-8 mb-20">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                data-index={index + 1}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`transition-all duration-1000 ease-out ${
                  visibleItems.includes(index + 1)
                    ? 'opacity-100 transform translate-y-0 translate-x-0'
                    : `opacity-0 transform translate-y-16 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`relative group ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  {/* Connecting line for desktop */}
                  <div className={`hidden lg:block absolute top-1/2 ${isEven ? 'right-0' : 'left-0'} w-12 h-0.5 bg-gradient-to-r ${isEven ? 'from-primary/50 to-transparent' : 'from-transparent to-primary/50'}`} />
                  
                  <div className={`relative glass-card p-8 lg:p-10 border-2 transition-all duration-500 
                    ${hoveredCard === index ? 'border-primary/50 shadow-2xl shadow-primary/20 scale-[1.02]' : 'border-border hover:border-primary/30'}
                    bg-gradient-to-br ${problem.gradient}`}
                  >
                    {/* Animated background glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`} />
                    
                    <div className="relative">
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`${problem.color} bg-background-deep/50 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl flex-shrink-0`}>
                          <IconComponent size={32} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {problem.title}
                          </h3>
                          <div className="flex items-baseline gap-3 mb-4">
                            <span className={`text-4xl font-bold ${problem.color}`}>{problem.statistic}</span>
                            <span className="text-sm text-muted-foreground">{problem.statLabel}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>

                    {/* Pulse indicator */}
                    <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${problem.color} opacity-75 animate-ping`} />
                    <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${problem.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution CTA */}
        <div 
          data-index="5"
          className={`transition-all duration-1200 ease-out ${
            visibleItems.includes(5)
              ? 'opacity-100 transform translate-y-0 scale-100'
              : 'opacity-0 transform translate-y-16 scale-95'
          }`}
        >
          <div className="relative group glass-card p-10 lg:p-16 border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 hover:border-primary/50 transition-all duration-500">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                    We're Building the Fix
                  </span>
                </h3>
                <p className="text-xl text-foreground leading-relaxed mb-8">
                  AI-powered platforms that turn chaos into clarity. Real-time data. Proven ROI. 
                  Community voice. And accountability that actually means something.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <span className="bg-primary/20 text-primary px-5 py-2 rounded-full text-base font-semibold border border-primary/30 hover:bg-primary/30 transition-colors">
                    Real-time Intelligence
                  </span>
                  <span className="bg-secondary/20 text-secondary px-5 py-2 rounded-full text-base font-semibold border border-secondary/30 hover:bg-secondary/30 transition-colors">
                    Measurable Outcomes
                  </span>
                  <span className="bg-accent/20 text-accent px-5 py-2 rounded-full text-base font-semibold border border-accent/30 hover:bg-accent/30 transition-colors">
                    Citizen Transparency
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                <div className="relative bg-gradient-primary p-6 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <ArrowRight size={40} className="text-white" />
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