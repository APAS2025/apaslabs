import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Beaker, Database, Shield, Droplets, TrendingUp, Brain } from "lucide-react";

const Labs = () => {
  const labs = [
    {
      icon: Droplets,
      title: "PFAS & Emerging Contaminants Lab",
      description: "Research and solutions for per- and polyfluoroalkyl substances and emerging contaminants in water systems.",
      status: "Active",
      link: "/guild/pfas"
    },
    {
      icon: Shield,
      title: "Climate & Resilience Lab",
      description: "Climate adaptation strategies and infrastructure resilience frameworks for sustainable communities.",
      status: "Active", 
      link: "/guild/climate-resilience"
    },
    {
      icon: TrendingUp,
      title: "Finance, Ratings & ROI Lab",
      description: "Financial modeling, credit ratings, and return on investment frameworks for infrastructure projects.",
      status: "Active",
      link: "/guild/finance-roi"
    },
    {
      icon: Brain,
      title: "AI, Data Governance & Transparency Lab",
      description: "Artificial intelligence applications, data governance frameworks, and transparency tools for public sector.",
      status: "Active",
      link: "/guild/ai-data-governance"
    },
    {
      icon: Database,
      title: "Stormwater & Watershed Lab", 
      description: "One Water systems, predictive monitoring, and watershed management for urban resilience.",
      status: "Active",
      link: "/guild/stormwater-watershed"
    }
  ];

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              APAS Labs Research
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Research Labs
              </span>
              <br />
              <span className="text-foreground">
                & Innovation Centers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Our research labs focus on critical public infrastructure challenges, 
              developing AI-ready solutions through collaborative guild networks.
            </p>
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab, index) => (
              <Card key={index} className="bg-gradient-glass border-glass-border backdrop-blur-xl hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <lab.icon className="h-12 w-12 text-primary" />
                    <Badge variant={lab.status === "Active" ? "default" : "secondary"}>
                      {lab.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-satoshi">{lab.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{lab.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={lab.link}>Explore Lab</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
            Join Our Research Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Collaborate with experts, contribute to cutting-edge research, and help shape 
            the future of AI-ready public infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Apply to Join Research
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn More About Labs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labs;