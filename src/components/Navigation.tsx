import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, isAdmin, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-glass border-b border-glass-border backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl sm:text-2xl font-bold font-satoshi bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              APAS Labs
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="relative group">
              <Link to="/guild" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
                Our Labs
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-lg border border-border/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/guild/pfas" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    PFAS & Emerging Contaminants
                  </Link>
                  <Link to="/guild/climate-resilience" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    Climate & Resilience
                  </Link>
                  <Link to="/guild/finance-roi" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    Finance, Ratings & ROI
                  </Link>
                  <Link to="/guild/ai-data-governance" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    AI, Data Governance & Transparency
                  </Link>
                  <Link to="/guild/stormwater-watershed" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors">
                    Stormwater & Watershed
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/biscayne-bay-gpt" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Biscayne Bay GPT
            </Link>
            <Link to="/droobi" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Droobi Lab
            </Link>
            <Link to="/community" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Community
            </Link>
            <Link to="/partnerships" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              Partnerships
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth text-sm lg:text-base">
              About Us
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-primary hover:text-primary-dark transition-smooth text-sm lg:text-base flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Admin
              </Link>
            )}
            <SearchButton variant="ghost" showText={false} />
            <Button
              className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow" 
              size="sm" 
              asChild
            >
              <Link to="/support">💚 Support</Link>
            </Button>
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border/20">
              <span className="text-sm text-muted-foreground">
                {profile?.full_name || user?.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
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
                Our Labs
              </Link>
              <Link 
                to="/guild/pfas" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                PFAS & Emerging Contaminants
              </Link>
              <Link 
                to="/guild/climate-resilience" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Climate & Resilience
              </Link>
              <Link 
                to="/guild/finance-roi" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Finance, Ratings & ROI
              </Link>
              <Link 
                to="/guild/ai-data-governance" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                AI, Data Governance & Transparency
              </Link>
              <Link 
                to="/guild/stormwater-watershed" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Stormwater & Watershed
              </Link>
              <Link 
                to="/biscayne-bay-gpt" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Biscayne Bay GPT
              </Link>
              <Link 
                to="/droobi" 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Droobi Lab
              </Link>
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
              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="block px-3 py-2 text-base font-medium text-primary hover:text-primary-dark transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Admin Dashboard
                  </div>
                </Link>
              )}
              <div className="px-3 py-2 border-t border-border/20 mt-2">
                <div className="mb-2 text-sm text-muted-foreground">
                  {profile?.full_name || user?.email}
                </div>
                <SearchButton variant="outline" className="w-full mb-2" />
              </div>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-lg mb-2" 
                  size="sm" 
                  asChild
                >
                  <Link to="/support" onClick={() => setIsMenuOpen(false)}>💚 Support</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
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