import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-glass border-b border-glass-border backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-satoshi bg-gradient-to-r from-primary via-blue-400 to-primary-glow bg-clip-text text-transparent hover:opacity-90 transition-all duration-300 hover:scale-105">
              APAS Labs
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/guild" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Initiatives
            </Link>
            <Link to="/biscayne-bay-gpt" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Biscayne Bay GPT
            </Link>
            <a href="https://orakles.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Orakles
            </a>
            <Link to="/community" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Community
            </Link>
            <Link to="/partnerships" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Partnerships
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              About Us
            </Link>
            <SearchButton variant="ghost" showText={false} />
            <Button
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow" 
              size="sm" 
              asChild
            >
              <Link to="/support">💚 Support</Link>
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
              <Link 
                to="/guild" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Initiatives
              </Link>
              <Link 
                to="/biscayne-bay-gpt" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Biscayne Bay GPT
              </Link>
              <a 
                href="https://orakles.lovable.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Orakles
              </a>
              <Link 
                to="/community"
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/partnerships" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Partnerships
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="px-3 py-2 border-t border-border/20 mt-2">
                <SearchButton variant="outline" className="w-full mb-2" />
              </div>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-lg" 
                  size="sm" 
                  asChild
                >
                  <Link to="/support" onClick={() => setIsMenuOpen(false)}>💚 Support</Link>
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