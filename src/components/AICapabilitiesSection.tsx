import { BookOpen, Users, Video, Calendar, FileText, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AICapabilitiesSection = () => {
  const capabilities = [
    {
      icon: BookOpen,
      title: "Water Lexicon",
      description: "The language of infrastructure, made simple. 500+ curated definitions with AI-enhanced semantic search, connected to standards, SOPs, and permitting workflows—so you spend less time translating jargon.",
      link: null
    },
    {
      icon: Users,
      title: "Partner Ecosystem",
      description: "The LinkedIn of Infrastructure. Discover verified vendors, consultants, and academic collaborators with one-click profiles showing specializations, regions, and proven ROI through real case studies.",
      link: "/partnerships"
    },
    {
      icon: Video,
      title: "Droobi TV",
      description: "Learn from real systems. On-demand technical learning, case studies, and webinars filtered by category—earn certifications and shareable learning badges on your schedule.",
      link: null
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "Stay connected. Live and virtual events from across the world. RSVP, add to calendar, or rewatch on-demand recordings—build relationships with peers facing the same challenges.",
      link: "/community"
    },
    {
      icon: FileText,
      title: "APAS News",
      description: "Systems thinking meets infrastructure. Deep-dive insights on AI, blockchain, governance, and digital transformation—authored by engineers and operators, not marketers.",
      link: null
    },
    {
      icon: GraduationCap,
      title: "Orakles Academy",
      description: "Certified training & upskilling. Professional development programs on AI, data governance, and One Water systems—earn recognized certifications that advance your career.",
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
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-semibold text-base md:text-lg uppercase tracking-wider">Orakles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              Work Smarter
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From learning resources to expert networks—we've built the tools infrastructure leaders actually need to do their best work.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            
            const cardContent = (
              <>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Connecting line visualization */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{ 
                         animation: 'shimmer 2s infinite',
                         animationDelay: `${index * 0.2}s`
                       }} 
                  />
                </div>
                
                <div className="relative z-10 space-y-5">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {capability.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
