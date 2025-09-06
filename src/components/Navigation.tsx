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
                  <a href="/guild/stormwater-watershed" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    Stormwater & Watershed
                  </a>
                </div>
              </div>
            </div>
            <a href="/biscayne-bay-gpt" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Biscayne Bay GPT
            </a>
            <a href="/community" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Community
            </a>
            <a href="/partnerships" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Partnerships
            </a>
            <Button 
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow" 
              size="sm" 
              asChild
            >
              <a href="/support">💚 Support</a>
            </Button>
            <Button variant="glass" size="sm" asChild>
              <a href="/contact">Contact</a>
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
                href="/guild/stormwater-watershed" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Stormwater & Watershed
              </a>
              <a 
                href="/biscayne-bay-gpt" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Biscayne Bay GPT
              </a>
              <a 
                href="/community" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a 
                href="/partnerships" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Partnerships
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-lg mb-2" 
                  size="sm" 
                  asChild
                >
                  <a href="/support" onClick={() => setIsMenuOpen(false)}>💚 Support</a>
                </Button>
                <Button variant="glass" size="sm" className="w-full" asChild>
                  <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
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