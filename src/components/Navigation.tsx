import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-glass border-b border-glass-border backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold font-satoshi bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
              APAS Labs
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              About
            </a>
            <div className="relative group">
              <a href="/guild" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
                Guilds
              </a>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="/guild/pfas" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    PFAS & Emerging Contaminants
                  </a>
                  <a href="/guild/climate-resilience" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    Climate & Resilience
                  </a>
                  <a href="/guild/finance-roi" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    Finance, Ratings & ROI
                  </a>
                  <a href="/guild/ai-data-governance" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    AI, Data Governance & Transparency
                  </a>
                </div>
              </div>
            </div>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Solutions
            </a>
            <a href="#labs" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Labs
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Community
            </a>
            <Button variant="glass" size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-glass border-t border-glass-border backdrop-blur-xl">
              <a 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/guild" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                All Guilds
              </a>
              <a 
                href="/guild/pfas" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                PFAS & Emerging Contaminants
              </a>
              <a 
                href="/guild/climate-resilience" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Climate & Resilience
              </a>
              <a 
                href="/guild/finance-roi" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Finance, Ratings & ROI
              </a>
              <a 
                href="/guild/ai-data-governance" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                AI, Data Governance & Transparency
              </a>
              <a 
                href="#solutions" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#labs" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Labs
              </a>
              <a 
                href="#community" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <div className="px-3 py-2">
                <Button variant="glass" size="sm" className="w-full">
                  Contact
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