import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-glass/95 border-b border-glass-border/50 backdrop-blur-2xl shadow-elegant' 
        : 'bg-gradient-glass/80 border-b border-glass-border/30 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="text-2xl sm:text-3xl font-bold font-inter bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                APAS Labs
              </div>
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-primary transition-all duration-500 rounded-full" />
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {['About', 'Solutions', 'Labs', 'Community'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="group relative text-muted-foreground hover:text-foreground transition-all duration-300 text-base lg:text-lg font-medium"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300 -z-0" />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-6 h-0.5 bg-gradient-primary transition-all duration-300 rounded-full" />
              </a>
            ))}
            <Button variant="hero" size="lg" className="group shadow-glow hover:shadow-glow-intense">
              <span>Contact</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="glass" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
              {isMenuOpen ? <X className="h-6 w-6 relative z-10" /> : <Menu className="h-6 w-6 relative z-10" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-4 pb-6 space-y-3 bg-gradient-glass/95 border-t border-glass-border/50 backdrop-blur-2xl">
              {['About', 'Solutions', 'Labs', 'Community'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-primary/10 group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item}</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button variant="hero" size="lg" className="w-full shadow-glow animate-scale-in" style={{ animationDelay: '400ms' }}>
                  <span>Contact</span>
                  <ChevronRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;