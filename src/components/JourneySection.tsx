import { useEffect, useRef, useState } from "react";
import { ArrowRight, Users, GraduationCap, Globe, Zap, CheckCircle2 } from "lucide-react";

const JourneySection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: "2016",
      title: "Resilient Utilities Coalition",
      description: "Brought together practitioners and experts, hosting our first global Resiliency Summit.",
      icon: Users,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      year: "2018", 
      title: "One Water Academy",
      description: "Created webinars and training sessions, capturing lessons and building momentum.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      year: "2019",
      title: "Future of Water Summit",
      description: "Launched our national Miami conference, putting resilience at the center of conversation.",
      icon: Globe,
      color: "from-pink-500 to-blue-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30"
    },
    {
      year: "Today",
      title: "APAS Labs",
      description: "Evolved to meet the AI challenge with accountable, data-powered platforms.",
      icon: Zap,
      color: "from-blue-400 to-purple-500",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-background-deep via-background to-background-deep overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div 
          data-index="0"
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleItems.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From resilience, to knowledge, to collaboration, to innovation.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isVisible = visibleItems.has(index + 1);
            const isActive = activeCard === index;
            
            return (
              <div
                key={milestone.year}
                data-index={index + 1}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group transition-all duration-700 cursor-pointer ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Milestone Card */}
                <div className={`relative h-full backdrop-blur-xl bg-white/5 border ${milestone.borderColor} rounded-2xl p-8
                  transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20
                  ${isActive ? 'bg-white/10 scale-105 -translate-y-2 shadow-2xl shadow-primary/20' : ''}
                `}>
                  
                  {/* Year Badge */}
                  <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} 
                    flex items-center justify-center shadow-xl border-2 border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-base">{milestone.year.slice(-2)}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`${milestone.bgColor} ${milestone.borderColor} border rounded-xl p-4 mb-6 w-fit
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                      {milestone.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Progress Connector */}
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                      <ArrowRight className="w-5 h-5 text-primary/50 absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1" />
                    </div>
                  )}
                  
                  {/* Completion Checkmark for all except last */}
                  {index < milestones.length - 1 && (
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div 
          data-index={milestones.length + 1}
          className={`transition-all duration-1000 mb-12 ${
            visibleItems.has(milestones.length + 1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center space-x-3">
            {milestones.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index < milestones.length - 1 
                    ? 'bg-green-500 shadow-lg shadow-green-500/30' 
                    : 'bg-primary shadow-lg shadow-primary/30 animate-pulse'
                }`} />
                {index < milestones.length - 1 && (
                  <div className="w-12 h-0.5 bg-gradient-to-r from-green-500/50 to-primary/50 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          data-index={milestones.length + 2}
          className={`text-center transition-all duration-1000 ${
            visibleItems.has(milestones.length + 2) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 
            border-2 border-primary/20 rounded-2xl p-10 max-w-3xl mx-auto hover:bg-primary/15 transition-all duration-500">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Zap className="w-8 h-8 text-primary animate-pulse" />
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                And it's only the beginning.
              </p>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join us as we transform infrastructure decisions in the age of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;