import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background-blue-pink.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-background-deep/60 z-10" />
      <div className="absolute inset-0 bg-gradient-hero z-20" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-glow z-30" />
      
      {/* Decorative Elements - Responsive */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-0 w-36 sm:w-54 lg:w-72 h-36 sm:h-54 lg:h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Headline */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-inter leading-tight mb-4 sm:mb-6">
            <span className="block bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
              Advancing the Future
            </span>
            <span className="block text-foreground drop-shadow-lg">
              of Infrastructure
            </span>
          </h1>
          
          {/* Accent line under headline */}
          <div className="mx-auto w-24 sm:w-32 h-1 bg-gradient-primary rounded-full shadow-glow mb-6 sm:mb-8" />
        </div>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-inter font-light max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4">
          Building AI powered solutions that governments, practitioners, citizens, and funders can trust.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <Button variant="hero" size="lg" className="group w-full sm:w-auto">
            <span>Explore the Labs</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          
          <Button variant="glass" size="lg" className="group w-full sm:w-auto">
            <span>Join the Community</span>
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </Button>
          
          <Button variant="glow" size="lg" className="group w-full sm:w-auto">
            <span>Support Biscayne Bay</span>
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative">
          <div className="absolute left-1/4 top-0 w-2 h-2 bg-primary rounded-full animate-ping" />
          <div className="absolute right-1/3 top-4 w-1 h-1 bg-secondary rounded-full animate-ping delay-700" />
          <div className="absolute left-1/3 top-8 w-1.5 h-1.5 bg-accent rounded-full animate-ping delay-1000" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  );
};

export default HeroSection;