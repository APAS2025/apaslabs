import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const FoundersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log("FoundersSection: Setting up intersection observer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("FoundersSection: Element intersecting, adding animation");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    console.log("FoundersSection: Found elements to observe:", elements?.length);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-background-deep via-background-deep to-slate-900/50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            The Builders Behind the Labs
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            APAS Labs is led by practitioners who have managed billion-dollar infrastructure programs and pioneered new ways to connect systems, people, and technology.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Simi Anand */}
          <Card className="animate-on-scroll opacity-0 group relative bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <Avatar className="w-24 h-24 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <AvatarImage src="/placeholder.svg" alt="Simi Anand" />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary/20 to-accent/20 text-white">SA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Simi Anand</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Systems strategist and builder, focused on bridging knowledge, technology, and community.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Hardeep Anand */}
          <Card className="animate-on-scroll opacity-0 group relative bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 p-8" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <Avatar className="w-24 h-24 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <AvatarImage src="/placeholder.svg" alt="Hardeep Anand" />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary/20 to-accent/20 text-white">HA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Hardeep Anand</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Infrastructure leader and systems synthesist, with decades of experience overseeing complex public works and regulatory frameworks.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center animate-on-scroll opacity-0" style={{ animationDelay: "0.4s" }}>
          <Button 
            asChild
            variant="hero"
            size="lg"
            className="group relative overflow-hidden"
          >
            <Link to="/about">
              <span className="relative z-10">Meet the Founders →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;