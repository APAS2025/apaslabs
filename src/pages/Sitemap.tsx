import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Map, 
  Home, 
  Users, 
  Beaker, 
  FileText, 
  Building2, 
  Mail, 
  HelpCircle,
  ExternalLink,
  Search,
  Calendar,
  ArrowRight,
  Globe
} from "lucide-react";

const Sitemap = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [lastUpdated] = useState("January 1, 2024");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (index: number) => visibleItems.includes(index);

  const siteStructure = [
    {
      category: "Main Pages",
      icon: <Home className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-400",
      pages: [
        { name: "Home", url: "/", description: "Main landing page with overview of APAS Labs services and mission" },
        { name: "About Us", url: "/about", description: "Learn about our mission, vision, and team" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions about our services" }
      ]
    },
    {
      category: "Guild Communities",
      icon: <Users className="h-5 w-5" />,
      color: "from-green-500 to-emerald-400",
      pages: [
        { name: "All Guilds", url: "/guild", description: "Overview of our collaborative guild system" },
        { name: "PFAS & Emerging Contaminants Guild", url: "/guild/pfas", description: "Addressing forever chemicals and water contamination" },
        { name: "Climate & Resilience Guild", url: "/guild/climate-resilience", description: "Building climate-adaptive infrastructure" },
        { name: "Finance, Ratings & ROI Guild", url: "/guild/finance-roi", description: "Optimizing infrastructure investment strategies" },
        { name: "AI, Data Governance & Transparency Guild", url: "/guild/ai-data-governance", description: "Ethical AI and data governance frameworks" },
        { name: "Stormwater & Watershed Guild", url: "/guild/stormwater-watershed", description: "Managing stormwater and watershed protection" }
      ]
    },
    {
      category: "Interactive Labs",
      icon: <Beaker className="h-5 w-5" />,
      color: "from-purple-500 to-violet-400",
      pages: [
        { name: "Biscayne Bay GPT", url: "/biscayne-bay-gpt", description: "AI-powered ecosystem analysis and restoration insights" },
        { name: "Droobi Language Lab", url: "/droobi", description: "Interactive language infrastructure standardization platform" }
      ]
    },
    {
      category: "Community & Partnerships",
      icon: <Building2 className="h-5 w-5" />,
      color: "from-orange-500 to-red-400",
      pages: [
        { name: "Community", url: "/community", description: "Join our vibrant professional community" },
        { name: "Partnerships", url: "/partnerships", description: "Explore collaboration opportunities" },
        { name: "Support", url: "/support", description: "Support our mission and initiatives" }
      ]
    },
    {
      category: "Legal & Policies",
      icon: <FileText className="h-5 w-5" />,
      color: "from-amber-500 to-yellow-400",
      pages: [
        { name: "Privacy Policy", url: "/privacy-policy", description: "How we collect, use, and protect your information" },
        { name: "Terms of Service", url: "/terms-of-service", description: "Legal terms governing use of our services" },
        { name: "Accessibility Statement", url: "/accessibility", description: "Our commitment to digital accessibility" },
        { name: "Sitemap", url: "/sitemap", description: "Complete overview of website structure and pages" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Search", url: "#", description: "Use Cmd+K or Ctrl+K to search", icon: <Search className="h-4 w-4" /> },
    { name: "RSS Feed", url: "/rss.xml", description: "Subscribe to updates", icon: <ExternalLink className="h-4 w-4" /> },
    { name: "XML Sitemap", url: "/sitemap.xml", description: "For search engines", icon: <Globe className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-background-deep pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" data-index="0">
        <div className="container mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
              <Map className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="text-foreground">Site </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Map
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Navigate through all pages and services of APAS Labs. Find everything from our interactive labs to guild communities and support resources.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                <span>{siteStructure.reduce((total, section) => total + section.pages.length, 0)} Pages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 border-b border-border/50" data-index="1">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl font-bold text-center mb-6">Quick Navigation</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2 glass-card p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  {link.icon}
                  <div>
                    <a href={link.url} className="font-medium text-sm hover:text-primary transition-colors">
                      {link.name}
                    </a>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-12 px-4" data-index="2">
        <div className="container mx-auto max-w-6xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="space-y-8">
              {siteStructure.map((section, sectionIndex) => (
                <Card key={sectionIndex} className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                        {React.cloneElement(section.icon, { className: "h-5 w-5 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{section.category}</h3>
                        <p className="text-sm text-muted-foreground">{section.pages.length} pages</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.pages.map((page, pageIndex) => (
                        <div
                          key={pageIndex}
                          className="group p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                              <a href={page.url} className="flex items-center gap-2">
                                {page.name}
                                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            </h4>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {page.description}
                          </p>
                          <div className="mt-2">
                            <code className="text-xs bg-muted/50 px-2 py-1 rounded text-muted-foreground">
                              {page.url}
                            </code>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" data-index="3">
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Technical Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Website Technology</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Built with React + TypeScript</li>
                      <li>• Styled with Tailwind CSS</li>
                      <li>• Powered by modern web standards</li>
                      <li>• Mobile-responsive design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Performance</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Optimized for speed and accessibility</li>
                      <li>• CDN-powered global delivery</li>
                      <li>• Progressive web app features</li>
                      <li>• SSL/TLS encryption</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Can't Find Something?</h4>
                    <p className="text-xs text-muted-foreground mb-3">
                      If you can't locate the information you're looking for, we're here to help.
                    </p>
                    <div className="space-y-2">
                      <Button size="sm" variant="outline" asChild className="w-full justify-start">
                        <a href="/faq">
                          <HelpCircle className="mr-2 h-4 w-4" />
                          Check FAQ
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="w-full justify-start">
                        <a href="/contact">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search Tips */}
      <section className="py-12 px-4 border-t border-border/50" data-index="4">
        <div className="container mx-auto max-w-3xl">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-2xl font-bold mb-6">Search Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <Search className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-medium mb-2">Global Search</h3>
                <p className="text-sm text-muted-foreground">
                  Use <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘K</kbd> or <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+K</kbd> to search across all content
                </p>
              </div>
              <div className="glass-card p-6">
                <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-medium mb-2">Browse by Category</h3>
                <p className="text-sm text-muted-foreground">
                  Use the sections above to browse content by type and topic
                </p>
              </div>
              <div className="glass-card p-6">
                <HelpCircle className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-medium mb-2">Get Help</h3>
                <p className="text-sm text-muted-foreground">
                  Contact our team if you need assistance finding specific information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;