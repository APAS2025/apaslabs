import { useState, useEffect } from "react";

const WhyWeExistSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

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
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      title: "Fragmented Systems",
      description: "Data lives in silos. Regulations, budgets, and knowledge systems don't connect.",
      icon: "🏗️"
    },
    {
      title: "Weak Accountability", 
      description: "Projects move forward without clear ROI or metrics. When disasters strike, blame games begin.",
      icon: "⚖️"
    },
    {
      title: "Eroding Trust",
      description: "Citizens, practitioners, and governments operate with uncertainty instead of clarity.",
      icon: "🤝"
    },
    {
      title: "Outdated Tools",
      description: "Critical decisions made using legacy systems increase costs and reduce progress.",
      icon: "🔧"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background z-0" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div 
            data-index="0"
            className={`transition-all duration-1000 ${
              visibleItems.includes(0) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Why We Exist
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full shadow-glow mb-8" />
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
              Today's infrastructure systems are broken. Communities suffer while bureaucrats shift blame.
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              data-index={index + 1}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                visibleItems.includes(index + 1)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="glass-card p-8 lg:p-10 h-full hover:shadow-elegant transition-all duration-500 hover:scale-105 border border-white/10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Result Section */}
        <div 
          data-index="5"
          className={`glass-surface p-8 lg:p-12 rounded-3xl border border-destructive/20 mb-20 transition-all duration-1000 ${
            visibleItems.includes(5)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h3 className="text-3xl lg:text-4xl font-bold text-destructive mb-6">
              The Result
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Consultants, utilities, and governments are forced to make critical decisions using 
              <span className="text-destructive font-semibold"> outdated systems, processes, and incomplete data</span>. 
              This increases costs, slows progress, and leaves communities without the transparency they deserve.
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div 
          data-index="6"
          className={`text-center transition-all duration-1000 ${
            visibleItems.includes(6)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="glass-card p-10 lg:p-16 border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
            <div className="text-6xl mb-8">🧪</div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Living Labs
              </span>
            </h3>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-8">
              APAS Labs created the concept of <span className="text-primary font-semibold">Living Labs</span> — 
              dynamic systems that capture knowledge before it's lost, transform fragmented information into 
              decision-ready tools, and create feedback loops connecting citizens, practitioners, funders, and governments.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="bg-primary/10 px-4 py-2 rounded-full">• Data-Powered Decisions</span>
              <span className="bg-secondary/10 px-4 py-2 rounded-full">• Transparent Funding</span>
              <span className="bg-accent/10 px-4 py-2 rounded-full">• Measurable Outcomes</span>
              <span className="bg-primary/10 px-4 py-2 rounded-full">• Community Accountability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;