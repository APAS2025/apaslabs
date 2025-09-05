import { useEffect, useRef, useState } from "react";
import { ArrowRight, Users, GraduationCap, Globe, Zap } from "lucide-react";

const JourneySection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
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
      { threshold: 0.3 }
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
      color: "from-blue-500 to-purple-600"
    },
    {
      year: "2018", 
      title: "One Water Academy",
      description: "Created webinars and training sessions, capturing lessons and building momentum.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "2019",
      title: "Future of Water Summit",
      description: "Launched our national Miami conference, putting resilience at the center of conversation.",
      icon: Globe,
      color: "from-pink-500 to-blue-600"
    },
    {
      year: "Today",
      title: "APAS Labs",
      description: "Evolved to meet the AI challenge with accountable, data-powered platforms.",
      icon: Zap,
      color: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-background-deep via-background-deep/95 to-background-deep overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div 
          data-index="0"
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleItems.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From resilience, to knowledge, to collaboration, to innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
          
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(index + 1);
            
            return (
              <div
                key={milestone.year}
                data-index={index + 1}
                className={`relative mb-16 transition-all duration-1000 delay-${index * 200} ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 z-20">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-full md:w-5/12 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                    <div className="relative">
                      {/* Glassmorphic Card */}
                      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl hover:bg-white/10 transition-all duration-500 group">
                        {/* Year Badge */}
                        <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm mb-3`}>
                          {milestone.year}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-foreground/80 leading-relaxed text-sm">
                          {milestone.description}
                        </p>
                        
                        {/* Connecting Arrow */}
                        <div className={`absolute top-6 ${isLeft ? '-right-6' : '-left-6'} w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                          <ArrowRight className={`w-3 h-3 text-white ${isLeft ? 'rotate-0' : 'rotate-180'}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div 
          data-index={milestones.length + 1}
          className={`text-center mt-12 transition-all duration-1000 ${
            visibleItems.has(milestones.length + 1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 max-w-xl mx-auto">
            <p className="text-lg text-foreground/90 font-medium mb-3">
              And it's only the beginning.
            </p>
            <p className="text-sm text-foreground/70">
              Join us as we transform infrastructure decisions in the age of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;