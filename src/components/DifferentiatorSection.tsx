import { Database, Users, Shield, ArrowRight } from "lucide-react";

export const DifferentiatorSection = () => {
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

  return (
    <section className="py-32 bg-gradient-to-b from-background to-background-deep relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
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
            return (
              <div key={index} className="relative">
                {/* Connecting Arrow (hidden on mobile, shown between items on desktop) */}
                {index < differentiators.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5">
                    <div className="relative w-full h-full">
                      {/* Dotted line */}
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-dotted border-primary/30"></div>
                      </div>
                      {/* Arrow */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <ArrowRight className="h-4 w-4 text-primary/50" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className="text-center space-y-6">
                  {/* Icon Container */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm flex items-center justify-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105">
                      <Icon className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 px-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};