import { useState, useEffect } from "react";
import { Database, AlertTriangle, Users, Wrench, ArrowRight } from "lucide-react";

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
      title: "Siloed Data Architecture",
      description: "$2.4B lost annually due to disconnected systems preventing coordinated infrastructure response.",
      icon: Database,
      color: "text-destructive"
    },
    {
      title: "Zero Accountability Framework", 
      description: "92% of infrastructure projects exceed budget with no measurable ROI tracking systems.",
      icon: AlertTriangle,
      color: "text-orange-400"
    },
    {
      title: "Broken Stakeholder Trust",
      description: "68% decline in citizen confidence as governments operate without transparency or clear metrics.",
      icon: Users,
      color: "text-yellow-400"
    },
    {
      title: "Legacy Decision Systems",
      description: "Infrastructure decisions made on 20-year-old processes cost communities 40% more than necessary.",
      icon: Wrench,
      color: "text-blue-400"
    }
  ];

  return (
    <section className="relative pt-0 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background z-0" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            data-index="0"
            className={`transition-all duration-1000 ${
              visibleItems.includes(0) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                The Infrastructure Crisis
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full shadow-glow mb-8" />
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Critical systems fail because decisions are made in isolation, without data, accountability, or community input.
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                data-index={index + 1}
                className={`group transition-all duration-1000 delay-${index * 150} ${
                  visibleItems.includes(index + 1)
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <div className="glass-card p-6 lg:p-8 h-full hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className={`${problem.color} bg-white/5 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Flow */}
        <div 
          data-index="5"
          className={`transition-all duration-1000 ${
            visibleItems.includes(5)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="glass-card p-8 lg:p-12 border border-primary/30 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Living Labs Solution
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Data-connected systems that transform fragmented infrastructure decisions into 
                  transparent, accountable, and measurable outcomes for communities.
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Real-time Data
                  </span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    Clear Metrics
                  </span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    Community Voice
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="bg-gradient-primary p-4 rounded-full shadow-glow">
                  <ArrowRight size={32} className="text-white" />
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