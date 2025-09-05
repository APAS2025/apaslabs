import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowRight, Users, Heart, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background-blue-pink.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.05)`
        }}
      />
      
      {/* Dynamic Overlay Gradients */}
      <div className="absolute inset-0 bg-background-deep/60 z-10" />
      <div className="absolute inset-0 bg-gradient-hero z-20" />
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-glow z-30 transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" 
           style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }} />
      <div className="absolute bottom-20 right-4 sm:right-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"
           style={{ transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)` }} />
      <div className="absolute top-1/2 left-0 w-36 sm:w-54 lg:w-72 h-36 sm:h-54 lg:h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"
           style={{ transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)` }} />

      {/* Main Content */}
      <div className={`relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Enhanced Hero Headline */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-glass-surface px-6 py-3 rounded-full border border-glass-border mb-8 animate-fade-in">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <span className="text-muted-foreground font-medium">Revolutionizing Infrastructure Systems</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-inter leading-[0.9] mb-6 sm:mb-8">
            <div className="relative">
              <span className="block bg-gradient-primary bg-clip-text text-transparent drop-shadow-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
                Advancing the Future
              </span>
              <span className="block text-foreground drop-shadow-2xl animate-fade-in" style={{ animationDelay: '400ms' }}>
                of Infrastructure
              </span>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full blur-sm animate-float delay-1000" />
            </div>
          </h1>
          
          {/* Enhanced accent line */}
          <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
            <div className="w-16 h-px bg-gradient-primary/50" />
            <div className="w-32 h-1 bg-gradient-primary rounded-full shadow-glow animate-shimmer" />
            <div className="w-16 h-px bg-gradient-primary/50" />
          </div>
        </div>

        {/* Enhanced Subheading */}
        <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-inter font-light max-w-5xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4 animate-fade-in`} 
           style={{ animationDelay: '600ms' }}>
          Building <span className="text-primary font-medium">AI-powered solutions</span> that governments, practitioners, citizens, and funders can trust.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center px-4 mb-16 animate-fade-in`}
             style={{ animationDelay: '800ms' }}>
          <Button variant="hero" size="xl" className="group w-full sm:w-auto shadow-glow hover:shadow-glow-intense transform hover:scale-105 transition-all duration-300">
            <span className="text-lg font-semibold">Explore the Labs</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          
          <Button variant="glass" size="xl" className="group w-full sm:w-auto hover:scale-105 transition-all duration-300">
            <Users size={20} />
            <span className="text-lg font-semibold">Join the Community</span>
            <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg" />
          </Button>
          
          <Button variant="glow" size="xl" className="group w-full sm:w-auto hover:scale-105 transition-all duration-300">
            <Heart size={20} className="group-hover:text-red-400 transition-colors duration-300" />
            <span className="text-lg font-semibold">Support Biscayne Bay</span>
          </Button>
        </div>

        {/* Enhanced Stats or Features */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in`}
             style={{ animationDelay: '1000ms' }}>
          {[
            { number: "2.4B", label: "Annual Infrastructure Losses Prevented", icon: "💰" },
            { number: "92%", label: "Projects Lack Proper ROI Tracking", icon: "📊" },
            { number: "68%", label: "Decline in Citizen Trust", icon: "🤝" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 hover:shadow-elegant transition-all duration-500 hover:scale-105 group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 z-35">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/60 rounded-full animate-ping" style={{ animationDelay: '700ms' }} />
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-ping" style={{ animationDelay: '1400ms' }} />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '2100ms' }} />
      </div>

      {/* Seamless bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-35" />
    </section>
  );
};

export default HeroSection;