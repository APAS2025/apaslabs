import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-background-deep via-background to-background-deep border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold font-inter bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
                APAS Labs
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transforming fragmented systems into connected solutions that serve practitioners, governments, and communities through practical tools and transparent decision-making.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-primary/20 border border-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-primary/20 border border-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-primary/20 border border-white/10">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Labs & Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Labs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#guild" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  The Guild
                </a>
              </li>
              <li>
                <a href="#biscayne-bay" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Biscayne Bay Lab
                </a>
              </li>
              <li>
                <a href="#oracles" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Oracles
                </a>
              </li>
              <li>
                <a href="#droobi" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Droobi
                </a>
              </li>
              <li>
                <a href="#community" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Community Circle
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#journey" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#research" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Research
                </a>
              </li>
              <li>
                <a href="#partnerships" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@apaslabs.org" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@apaslabs.org
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Miami, FL</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-white text-sm font-medium mb-3">Newsletter</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary text-sm"
                />
                <Button size="sm" className="bg-primary hover:bg-primary-glow shrink-0">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get updates on research and new lab developments
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center space-x-6 text-sm text-muted-foreground">
            <p>&copy; 2024 APAS Labs. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </a>
            <a href="#sitemap" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1">
              <span>Sitemap</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="text-center">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              APAS Labs is committed to building transparent, accountable systems that bridge the gap between practitioners, 
              governments, and communities. Our work spans from AI-powered environmental advocacy to practitioner-led knowledge networks, 
              all designed to make complex decisions clearer and more accessible.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;