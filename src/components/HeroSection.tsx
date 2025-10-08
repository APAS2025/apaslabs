import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1a2332] via-[#0f1825] to-[#0a0f1a]">
      {/* Animated Blue Glow Effects */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-40 left-1/3 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-float" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary-glow/20 rounded-full blur-[100px] animate-float-delayed" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 flex items-center min-h-screen">
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Eyebrow Text */}
          <div className="inline-block">
            <p className="text-primary text-sm sm:text-base font-space tracking-wider uppercase mb-2 animate-fade-in">
              Trusted Infrastructure Partner
            </p>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-satoshi leading-[0.95] tracking-tight animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
              <span className="block text-foreground/90">
                Building the
              </span>
              <span className="block text-primary text-glow mt-2">
                Operating System
              </span>
              <span className="block text-foreground/90 mt-2">
                for Public Infrastructure
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-primary-glow mb-6" />
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/90 font-space font-light leading-relaxed">
              Building AI powered solutions that governments, practitioners, citizens, and funders can trust.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group transition-all hover:scale-105 hover:shadow-glow" 
              asChild
            >
              <Link to="/guild">
                <span>Explore the Labs</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="group transition-all hover:scale-105" 
              asChild
            >
              <Link to="/community">
                <span>Join the Community</span>
                <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </Link>
            </Button>
          </div>

          {/* Services List - Mobile */}
          <div className="lg:hidden pt-8 space-y-3 text-left animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-foreground/80 text-base sm:text-lg font-space tracking-wide hover:text-primary transition-colors cursor-pointer">
              AI Governance
            </div>
            <div className="text-foreground/80 text-base sm:text-lg font-space tracking-wide hover:text-primary transition-colors cursor-pointer">
              Climate Resilience
            </div>
            <div className="text-foreground/80 text-base sm:text-lg font-space tracking-wide hover:text-primary transition-colors cursor-pointer">
              Infrastructure Intelligence
            </div>
          </div>
        </div>

        {/* Right Side Services - Desktop Only */}
        <div className="hidden lg:flex lg:w-1/3 flex-col items-end justify-center space-y-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="text-foreground/80 text-xl font-space tracking-wide hover:text-primary transition-colors cursor-pointer hover:translate-x-[-4px] duration-300">
            AI Governance
          </div>
          <div className="text-foreground/80 text-xl font-space tracking-wide hover:text-primary transition-colors cursor-pointer hover:translate-x-[-4px] duration-300">
            Climate Resilience
          </div>
          <div className="text-foreground/80 text-xl font-space tracking-wide hover:text-primary transition-colors cursor-pointer hover:translate-x-[-4px] duration-300">
            Infrastructure Intelligence
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
      
      {/* Subtle Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
      <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary-glow/40 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
