import { useState, useEffect } from "react";
import { Database, Users, Shield, ArrowRight } from "lucide-react";

export const DifferentiatorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const differentiators = [
    {
      icon: Database,
      title: "Living Knowledge Systems",
      description: "Our AI learns from real infrastructure experts and continuously evolves with new data, creating knowledge bases that improve over time—not static databases that become outdated."
    },
    {
      icon: Users,
      title: "Human-Centered Intelligence",
      description: "We don't replace experts—we amplify them. Our AI is trained by practitioners, validated by communities, and designed to make expertise accessible to everyone who needs it."
    },
    {
      icon: Shield,
      title: "Transparent & Accountable",
      description: "Every AI recommendation is traceable to its source. Track funding, verify outcomes, and hold systems accountable—because infrastructure decisions affect real communities."
    }
  ];

  // Auto-rotate through items every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % differentiators.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [differentiators.length]);

  return (
    <section className="py-32 bg-gradient-to-b from-background to-background-deep relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            What Makes Our <span className="text-primary">AI Different</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From automation to innovation, our cutting-edge AI solutions help infrastructure leaders work smarter, move faster, and build with confidence.
          </p>
        </div>

        {/* Three Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 items-start">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            const isPrevActive = activeIndex === index - 1;
            
            return (
              <div 
                key={index} 
                className="relative"
                onClick={() => setActiveIndex(index)}
              >
                {/* Connecting Arrow (hidden on mobile, shown between items on desktop) */}
                {index < differentiators.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-1">
                    <div className="relative w-full h-full">
                      {/* Base dotted line */}
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-dotted border-primary/30"></div>
                      </div>
                      
                      {/* Animated glowing line that lights up - ENHANCED */}
                      <div 
                        className={`absolute inset-0 flex items-center transition-opacity duration-700 ${
                          isPrevActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <div className="w-full h-1 bg-gradient-to-r from-primary via-primary to-transparent">
                          {/* Main solid line */}
                          <div className="w-full h-full bg-primary"></div>
                          {/* Outer glow */}
                          <div className="absolute inset-0 w-full h-2 -translate-y-1/4 bg-primary/50 blur-md"></div>
                          {/* Inner bright glow */}
                          <div className="absolute inset-0 w-full h-1 bg-primary shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                        </div>
                      </div>
                      
                      {/* Arrow - ENHANCED */}
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-500 ${
                        isPrevActive ? 'text-primary scale-150 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'text-primary/50 scale-100'
                      }`}>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`text-center space-y-6 transition-all duration-500 cursor-pointer ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}>
                  {/* Icon Container */}
                  <div className="flex justify-center">
                    <div className={`relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl border-2 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'border-primary shadow-2xl shadow-primary/30 scale-110 animate-float bg-gradient-to-br from-primary/20 via-card/50 to-blue-500/20' 
                        : 'border-primary/30 hover:border-primary/50 bg-card/50'
                    }`}>
                      {/* Pulsing glow ring when active */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 to-blue-500/40 blur-xl animate-pulse" />
                      )}
                      
                      {/* Icon with rotation animation when active */}
                      <Icon className={`relative z-10 h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 transition-all duration-500 ${
                        isActive ? 'text-primary scale-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'text-primary/70'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 px-2">
                    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-500 ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm mx-auto transition-all duration-500 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {differentiators.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeIndex === index 
                  ? 'w-12 bg-primary' 
                  : 'w-2 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};