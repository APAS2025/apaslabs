import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Users, 
  Beaker, 
  Building2,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Mail
} from "lucide-react";
import SearchButton from "@/components/SearchButton";

const FAQ = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions", icon: <HelpCircle className="h-4 w-4" /> },
    { id: "general", label: "General", icon: <Building2 className="h-4 w-4" /> },
    { id: "guilds", label: "Guilds", icon: <Users className="h-4 w-4" /> },
    { id: "labs", label: "Labs", icon: <Beaker className="h-4 w-4" /> },
    { id: "membership", label: "Membership", icon: <Shield className="h-4 w-4" /> },
    { id: "technical", label: "Technical", icon: <Zap className="h-4 w-4" /> }
  ];

  const faqData = [
    // General Questions
    {
      id: "what-is-apas",
      category: "general",
      question: "What is APAS Labs?",
      answer: "APAS Labs is a collaborative innovation hub focused on revolutionizing infrastructure through data-driven solutions, community engagement, and cutting-edge technology. We bring together professionals, researchers, and organizations to solve complex infrastructure challenges through our guild system and living labs approach."
    },
    {
      id: "mission",
      category: "general", 
      question: "What is APAS Labs' mission?",
      answer: "Our mission is to accelerate infrastructure innovation by creating collaborative ecosystems where experts, practitioners, and communities can work together to develop, test, and implement solutions that address real-world challenges in water management, climate resilience, and sustainable development."
    },
    {
      id: "how-it-works",
      category: "general",
      question: "How does APAS Labs work?",
      answer: "APAS Labs operates through two main components: Guilds (collaborative communities focused on specific challenges) and Labs (interactive tools and platforms for testing solutions). Our approach combines human expertise with AI-powered insights to create practical, scalable solutions."
    },

    // Guild Questions
    {
      id: "what-are-guilds",
      category: "guilds",
      question: "What are APAS Guilds?",
      answer: "APAS Guilds are specialized collaborative communities that focus on specific infrastructure challenges. Each guild brings together experts, practitioners, and stakeholders to share knowledge, develop solutions, and drive innovation in areas like PFAS remediation, climate resilience, finance optimization, AI governance, and stormwater management."
    },
    {
      id: "join-guild",
      category: "guilds",
      question: "How do I join a guild?",
      answer: "You can join any guild that aligns with your interests or expertise. Simply visit the guild page, review the focus areas and current initiatives, and click the 'Join Guild' button. Membership is open to professionals, researchers, students, and anyone passionate about infrastructure innovation."
    },
    {
      id: "guild-benefits",
      category: "guilds",
      question: "What are the benefits of joining a guild?",
      answer: "Guild members gain access to exclusive research, networking opportunities with industry experts, early access to new tools and technologies, collaborative project opportunities, professional development resources, and the chance to influence the future of infrastructure innovation."
    },
    {
      id: "pfas-guild",
      category: "guilds",
      question: "What does the PFAS Guild focus on?",
      answer: "The PFAS & Emerging Contaminants Guild addresses the challenge of 'forever chemicals' in water systems. We focus on detection methods, treatment technologies, regulatory compliance, risk assessment, and developing cost-effective solutions for PFAS remediation in drinking water and wastewater systems."
    },

    // Labs Questions
    {
      id: "what-are-labs",
      category: "labs",
      question: "What are APAS Labs' interactive tools?",
      answer: "Our Labs are interactive platforms and AI-powered tools designed to make complex infrastructure concepts accessible and actionable. This includes Biscayne Bay GPT for ecosystem insights, Droobi for language standardization, and other specialized tools for data analysis, modeling, and decision support."
    },
    {
      id: "biscayne-bay-gpt",
      category: "labs",
      question: "What is Biscayne Bay GPT?",
      answer: "Biscayne Bay GPT is an AI-powered tool that provides insights into the Biscayne Bay ecosystem, water quality trends, restoration strategies, and environmental management. It combines real-time data with machine learning to help researchers, policymakers, and communities make informed decisions about bay conservation."
    },
    {
      id: "droobi-lab",
      category: "labs",
      question: "What is Droobi and how does it work?",
      answer: "Droobi is the world's first Language Infrastructure Lab, designed to standardize technical terminology in the infrastructure sector. It transforms complex jargon into accessible language, connects terms to vendors and solutions, and creates a living dictionary that evolves with the field. Droobi helps bridge communication gaps between technical experts, policymakers, and the public."
    },

    // Membership Questions
    {
      id: "membership-cost",
      category: "membership",
      question: "Is there a cost to join APAS Labs?",
      answer: "Basic membership and guild participation are free. We believe in open collaboration and making infrastructure innovation accessible to all. Premium features, advanced tools, and exclusive events may have associated costs, but our core mission is to provide value to the entire infrastructure community."
    },
    {
      id: "who-can-join",
      category: "membership",
      question: "Who can join APAS Labs?",
      answer: "APAS Labs welcomes anyone interested in infrastructure innovation - from seasoned professionals and researchers to students and community advocates. Our diverse community includes engineers, policymakers, technologists, environmental scientists, finance experts, and citizens passionate about improving infrastructure systems."
    },
    {
      id: "partnership-opportunities",
      category: "membership",
      question: "How can organizations partner with APAS Labs?",
      answer: "Organizations can partner with us through guild sponsorship, collaborative research projects, technology integration, data sharing initiatives, or by providing expertise and resources. We work with utilities, technology companies, research institutions, government agencies, and non-profits to advance infrastructure innovation."
    },

    // Technical Questions
    {
      id: "data-privacy",
      category: "technical",
      question: "How does APAS Labs handle data privacy and security?",
      answer: "Data privacy and security are fundamental to our operations. We follow industry best practices for data protection, implement robust security measures, and maintain transparency about data usage. Our AI, Data Governance & Transparency Guild specifically focuses on ensuring ethical and secure data practices across all our initiatives."
    },
    {
      id: "ai-technology",
      category: "technical",
      question: "What AI technologies does APAS Labs use?",
      answer: "We leverage various AI technologies including natural language processing (for tools like Droobi), machine learning for data analysis and prediction, computer vision for infrastructure assessment, and large language models for knowledge synthesis. Our AI implementations prioritize accuracy, transparency, and practical utility."
    },
    {
      id: "open-source",
      category: "technical",
      question: "Are APAS Labs tools open source?",
      answer: "We embrace open collaboration and make many of our tools and methodologies publicly available. While some proprietary technologies remain closed for security or competitive reasons, we actively contribute to open-source projects and share our research findings with the broader infrastructure community."
    },

    // Additional Questions
    {
      id: "getting-started",
      category: "general",
      question: "How do I get started with APAS Labs?",
      answer: "Start by exploring our guilds to find communities that match your interests. Try our interactive labs like Biscayne Bay GPT or Droobi to experience our tools firsthand. Join our newsletter for updates, attend virtual events, or reach out directly to discuss collaboration opportunities. The best way to engage is to dive in and start participating!"
    },
    {
      id: "contact-support",
      category: "general",
      question: "How can I get support or ask questions?",
      answer: "You can reach out through our contact form, join our community discussions, or email us directly. Our team is responsive and committed to helping members get the most out of the APAS Labs experience. We also have active community forums where members help each other."
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

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

  return (
    <div className="min-h-screen bg-background-deep pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" data-index="0">
        <div className="container mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="text-foreground">Frequently Asked </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Find answers to common questions about APAS Labs, our guilds, interactive tools, and how to get involved in infrastructure innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SearchButton showText={true} />
              <Button variant="outline" asChild>
                <a href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ask a Question
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 border-b border-border/50" data-index="1">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {categories.map(category => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors px-4 py-2"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                </Badge>
              ))}
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4" data-index="2">
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="glass-card border border-border/50 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-start gap-4 w-full">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 mt-1">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg leading-tight">
                            {faq.question}
                          </h3>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {categories.find(c => c.id === faq.category)?.label || faq.category}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="ml-16 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No Questions Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or category filter.
                </p>
                <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" data-index="3">
        <div className="container mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold font-satoshi mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Can't find what you're looking for? Our team is here to help. Reach out and we'll get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/community">
                    <Users className="mr-2 h-5 w-5" />
                    Join Community
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 border-t border-border/50" data-index="4">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-center mb-8">Explore APAS Labs</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-6 text-center hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Join a Guild</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with experts in your field of interest
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/guild">
                    View Guilds <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="glass-card p-6 text-center hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <Beaker className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Try Our Labs</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore AI-powered tools and interactive platforms
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/droobi">
                    Explore Labs <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="glass-card p-6 text-center hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <Globe className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Learn More</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover our mission and approach to innovation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/about">
                    About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;