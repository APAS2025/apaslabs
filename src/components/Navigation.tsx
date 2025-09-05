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
            <div className="text-xl sm:text-2xl font-bold font-inter bg-gradient-primary bg-clip-text text-transparent">
              APAS Labs
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              About
            </a>
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
                href="#about" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About
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