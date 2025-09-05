import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Zap, Globe, HandCoins, UserCheck, Building2, Database, Shield, TrendingUp, Clock, ArrowRight } from "lucide-react";

const GetInvolvedSection = () => {
  const participationPaths = [
    {
      icon: HandCoins,
      title: "Founding Donors",
      description: "Join our founding donor circle and help us build the financial foundation for revolutionary public infrastructure.",
      cta: "Become a Founding Donor",
      gradient: "from-accent-warm to-accent",
      highlight: true
    },
    {
      icon: Users,
      title: "Industry Practitioners",
      description: "Water, wastewater, and public works professionals - your expertise is crucial for breaking traditional barriers.",
      cta: "Join the Guild",
      gradient: "from-primary to-primary-bright"
    },
    {
      icon: Building2,
      title: "Cross-Sector Experts",
      description: "Procurement, policy makers, bureaucrats - we need diverse perspectives to transform infrastructure.",
      cta: "Get Connected",
      gradient: "from-secondary to-secondary-bright"
    },
    {
      icon: Database,
      title: "Tech Innovators",
      description: "AI, blockchain, data scientists - help us harness cutting-edge technology for public good.",
      cta: "Join the Innovation",
      gradient: "from-accent to-accent-bright"
    },
    {
      icon: Shield,
      title: "Financial & Risk Experts",
      description: "Insurance, rating agencies, financial analysts - help us build sustainable economic models.",
      cta: "Shape the Future",
      gradient: "from-primary-dark to-primary"
    },
    {
      icon: Globe,
      title: "Everyone Else",
      description: "Water belongs to everybody. Whether you're a citizen, student, or changemaker - we need you.",
      cta: "Get Involved",
      gradient: "from-secondary-dark to-secondary"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-deep via-background to-background-deep" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent-rgb),0.1),transparent_50%)]" />
      
      <div className="container relative z-10">
        {/* Urgent Call Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              The Time is Now
            </span>
            <Clock className="w-6 h-6 text-accent animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            Get Involved Now
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed">
              AI is reshaping everything. We can either adapt and lead, or watch from the sidelines. 
              This is our moment to revolutionize public infrastructure.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Water belongs to everyone. Success requires breaking barriers between sectors and bringing together 
              diverse expertise. From practitioners to policymakers, from donors to data scientists - we need all hands on deck.
            </p>
          </div>

          {/* Urgency Banner */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">
              AI waits for no one. Join us before the opportunity passes.
            </span>
          </div>
        </div>

        {/* Participation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {participationPaths.map((path, index) => {
            const Icon = path.icon;
            return (
              <Card 
                key={index}
                className={`group relative overflow-hidden backdrop-blur-xl border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${path.highlight ? 'ring-2 ring-accent/50' : ''}`}
                data-index={index}
              >
                <CardContent className="p-8 relative z-10">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${path.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    variant={path.highlight ? "default" : "outline"}
                    className={`w-full group-hover:scale-105 transition-transform duration-200 ${path.highlight ? 'bg-gradient-to-r from-accent to-primary hover:opacity-90' : ''}`}
                  >
                    <span>{path.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Highlight Border for Founding Donors */}
                {path.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-20 rounded-lg animate-pulse" />
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center space-y-8">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Shape the Future of Public Infrastructure?
            </h3>
            <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
              Whether you're contributing resources, expertise, or passion - every voice matters. 
              Join our community of changemakers building resilient, AI-powered infrastructure for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white font-semibold px-8 py-4">
                <Heart className="w-5 h-5 mr-2" />
                Become a Founding Donor
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Stats or Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-foreground-muted">Experts Needed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">$10M</div>
              <div className="text-sm text-foreground-muted">Funding Goal</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">3</div>
              <div className="text-sm text-foreground-muted">Active Labs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-foreground-muted">Impact Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60" />
      <div className="absolute bottom-1/3 right-16 w-6 h-6 bg-primary rounded-full animate-float-delayed opacity-40" />
      <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" />
    </section>
  );
};

export default GetInvolvedSection;