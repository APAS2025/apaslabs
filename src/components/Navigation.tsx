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
    <nav className="fixed top-0 w-full z-50 bg-gradient-glass border-b border-glass-border/30 backdrop-blur-xl shadow-glass">
      <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="hover:scale-105 transition-all duration-300 ease-out group"
            >
              <img 
                src="/lovable-uploads/f5cd0ce7-8b1c-47a9-9817-5e0ffcd12eec.png" 
                alt="APAS Labs" 
                className="h-8 lg:h-10 w-auto drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="relative group">
              <Link 
                to="/guild" 
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-smooth text-base font-medium rounded-lg hover:bg-primary/5 group relative overflow-hidden"
              >
                <span className="relative z-10">Our Labs</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-lg"></div>
              </Link>
              <div className="absolute top-full left-0 mt-3 w-80 bg-card/95 backdrop-blur-xl border border-glass-border/50 rounded-xl shadow-elevation opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-3 space-y-1">
                  <Link to="/guild/pfas" className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group/item">
                    <div className="font-medium group-hover/item:text-primary">PFAS & Emerging Contaminants</div>
                    <div className="text-xs opacity-70 mt-1">Advanced water treatment solutions</div>
                  </Link>
                  <Link to="/guild/climate-resilience" className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group/item">
                    <div className="font-medium group-hover/item:text-primary">Climate & Resilience</div>
                    <div className="text-xs opacity-70 mt-1">Sustainable environmental strategies</div>
                  </Link>
                  <Link to="/guild/finance-roi" className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group/item">
                    <div className="font-medium group-hover/item:text-primary">Finance, Ratings & ROI</div>
                    <div className="text-xs opacity-70 mt-1">Investment and impact analysis</div>
                  </Link>
                  <Link to="/guild/ai-data-governance" className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group/item">
                    <div className="font-medium group-hover/item:text-primary">AI, Data Governance & Transparency</div>
                    <div className="text-xs opacity-70 mt-1">Ethical AI and data management</div>
                  </Link>
                  <Link to="/guild/stormwater-watershed" className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group/item">
                    <div className="font-medium group-hover/item:text-primary">Stormwater & Watershed</div>
                    <div className="text-xs opacity-70 mt-1">Water management and conservation</div>
                  </Link>
                </div>
              </div>
            </div>
            {[
              { to: '/biscayne-bay-gpt', label: 'Bay GPT' },
              { to: '/droobi', label: 'Droobi Lab' },
              { to: '/community', label: 'Community' },
              { to: '/partnerships', label: 'Partners' },
              { to: '/about', label: 'About' },
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-smooth text-base font-medium rounded-lg hover:bg-primary/5 group relative overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-lg"></div>
              </Link>
            ))}
            {isAdmin && (
              <Link 
                to="/admin" 
                className="px-4 py-2 text-primary hover:text-primary-glow transition-smooth text-base font-medium rounded-lg hover:bg-primary/10 flex items-center gap-2 group relative overflow-hidden"
              >
                <Settings className="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="relative z-10">Admin</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-15 transition-all duration-300 rounded-lg"></div>
              </Link>
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <SearchButton variant="ghost" showText={false} className="hover:bg-primary/5 hover:text-primary" />
            <Button
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 font-medium px-6 rounded-xl" 
              size="sm" 
              asChild
            >
              <Link to="/support" className="flex items-center gap-2">
                <span>💚</span>
                <span>Support</span>
              </Link>
            </Button>
            <div className="flex items-center gap-3 ml-3 pl-6 border-l border-glass-border/40">
              <div className="text-sm">
                <div className="font-medium text-foreground">{profile?.full_name || 'User'}</div>
                <div className="text-xs text-muted-foreground truncate max-w-32">{user?.email}</div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSignOut}
                className="hover:bg-primary/5 hover:text-primary transition-all duration-200 rounded-lg"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <SearchButton variant="ghost" showText={false} className="hover:bg-primary/5 hover:text-primary" />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200 rounded-lg group"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-glass-border/30 shadow-elevation animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {/* Main Navigation */}
              <div className="space-y-2">
                <Link 
                  to="/guild" 
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Our Labs</span>
                    <div className="h-px flex-1 bg-gradient-primary opacity-20 mx-4"></div>
                  </div>
                </Link>
                
                {/* Sub-labs */}
                <div className="ml-6 space-y-1">
                  {[
                    { to: '/guild/pfas', label: 'PFAS & Emerging Contaminants', desc: 'Water treatment solutions' },
                    { to: '/guild/climate-resilience', label: 'Climate & Resilience', desc: 'Environmental strategies' },
                    { to: '/guild/finance-roi', label: 'Finance, Ratings & ROI', desc: 'Impact analysis' },
                    { to: '/guild/ai-data-governance', label: 'AI & Data Governance', desc: 'Ethical AI solutions' },
                    { to: '/guild/stormwater-watershed', label: 'Stormwater & Watershed', desc: 'Water management' },
                  ].map((item) => (
                    <Link 
                      key={item.to}
                      to={item.to} 
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="group-hover:translate-x-1 transition-transform duration-200">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs opacity-60 mt-1">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Other main links */}
                {[
                  { to: '/biscayne-bay-gpt', label: 'Biscayne Bay GPT' },
                  { to: '/droobi', label: 'Droobi Lab' },
                  { to: '/community', label: 'Community' },
                  { to: '/partnerships', label: 'Partnerships' },
                  { to: '/about', label: 'About Us' },
                ].map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.label}</span>
                      <div className="h-px flex-1 bg-gradient-primary opacity-20 mx-4"></div>
                    </div>
                  </Link>
                ))}
                
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className="block px-4 py-3 text-base font-medium text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-200 rounded-lg group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <Settings className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">Admin Dashboard</span>
                    </div>
                  </Link>
                )}
              </div>

              {/* User Section */}
              <div className="border-t border-glass-border/30 pt-4 space-y-4">
                <div className="px-4 py-3 bg-glass/30 rounded-lg">
                  <div className="font-medium text-foreground mb-1">{profile?.full_name || 'User'}</div>
                  <div className="text-sm text-muted-foreground">{user?.email}</div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg font-medium rounded-xl" 
                    size="sm" 
                    asChild
                  >
                    <Link to="/support" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2">
                      <span>💚</span>
                      <span>Support APAS Labs</span>
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-glass-border hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-200 rounded-lg"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;