import { Brain, Activity, Droplets, Users, Database, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const AICapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Infrastructure Intelligence",
      description: "Turn complex infrastructure data into actionable insights using machine learning and predictive analytics for smarter decision-making."
    },
    {
      icon: Activity,
      title: "Predictive Maintenance",
      description: "Forecast infrastructure needs before failures occur, reducing costs and preventing disruptions through AI-powered monitoring."
    },
    {
      icon: Droplets,
      title: "Environmental Monitoring",
      description: "Real-time tracking of water quality, stormwater systems, and environmental data with AI-driven anomaly detection."
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Enable public participation with conversational AI that understands local context and connects communities to infrastructure decisions."
    },
    {
      icon: Database,
      title: "Data Integration Hub",
      description: "Seamlessly connect multiple data sources—GIS, sensors, historical records—into a unified AI-powered knowledge base."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Automated compliance tracking and reporting for EPA standards, ensuring your infrastructure meets all regulatory requirements."
    }
  ];

  return (
    <section className="py-32 bg-background-deep relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-[700px] h-[700px] bg-gradient-to-br from-primary/10 via-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/10 via-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transforming Infrastructure{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              with Intelligence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From automation to innovation, our cutting-edge AI solutions help infrastructure leaders work smarter, move faster, and build with confidence.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};
