import { BookOpen, Users, Video, Calendar, FileText, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AICapabilitiesSection = () => {
  const capabilities = [
    {
      icon: BookOpen,
      title: "Water Lexicon",
      description: "Stop searching through endless documents. Our AI-powered lexicon instantly translates technical jargon into plain language, with direct links to the regulations and standards that matter.",
      link: null
    },
    {
      icon: Users,
      title: "Partner Ecosystem",
      description: "No more vetting headaches. Connect with pre-verified vendors, consultants, and experts who actually understand your challenges—complete with portfolios and testimonials.",
      link: "/partnerships"
    },
    {
      icon: Video,
      title: "Droobi TV",
      description: "Learn from systems that actually work. Watch real case studies, technical walkthroughs, and earn certifications—all on your schedule, filtered by what matters to you.",
      link: null
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "You're not alone in this. Join live sessions with peers facing the same issues, share war stories, and build relationships that last beyond the conference room.",
      link: "/community"
    },
    {
      icon: FileText,
      title: "Blog & Insights",
      description: "Cut through the hype. Get practical insights on AI, digital transformation, and infrastructure innovation—written by engineers and operators, not marketers.",
      link: null
    },
    {
      icon: GraduationCap,
      title: "Academy",
      description: "Build skills that matter. Professional training on AI, data governance, and modern infrastructure systems—with certifications your organization will recognize.",
      link: null
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
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              Work Smarter
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From learning resources to expert networks—we've built the tools infrastructure leaders actually need to do their best work.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            
            const cardContent = (
              <>
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
              </>
            );
            
            return capability.link ? (
              <Link
                key={index}
                to={capability.link}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 block"
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                {cardContent}
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
