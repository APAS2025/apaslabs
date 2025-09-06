import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                About APAS Labs
              </span>
              <br />
              <span className="text-foreground">
                Transforming Infrastructure with AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Born from a vision to make public infrastructure AI-ready, APAS Labs represents the convergence 
              of decades of expertise, unwavering dedication to public service, and a bold commitment to 
              collaborative innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The visionaries behind APAS Labs bring together diverse expertise in technology, 
              public service, and transformational leadership.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hardeep Anand */}
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-2xl font-satoshi">Hardeep Anand</CardTitle>
                <p className="text-muted-foreground">Co-Founder & Infrastructure Visionary</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground italic">
                    "We cannot wait for someone else to make public infrastructure AI-ready. 
                    The time is now, and the responsibility is ours."
                  </p>
                </div>
                <p className="text-muted-foreground">
                  With decades of experience in billion-dollar program management and public works oversight, 
                  Hardeep recognized the critical gap between AI capabilities and real-world infrastructure 
                  challenges. His vision for APAS Labs emerged from years of witnessing how traditional 
                  approaches fall short in addressing modern infrastructure complexities.
                </p>
                <p className="text-muted-foreground">
                  As an infrastructure leader and systems synthesist, Hardeep specializes in translating 
                  policy into actionable solutions. His leadership philosophy centers on collaborative 
                  innovation—bringing together diverse stakeholders to create solutions that are not just 
                  technically sound, but practically implementable and socially responsible.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Focus Areas:</strong> Infrastructure Policy, Regulatory Frameworks, Public Works Management
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Simi Anand */}
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
              <CardHeader className="text-center">
                <div className="w-48 h-64 mx-auto mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 shadow-xl">
                  <img 
                    src="/lovable-uploads/9b81ccd7-084c-4892-a5ab-13ded32d06b1.png" 
                    alt="Simi Anand - Co-Founder & Impact Strategist" 
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
                <CardTitle className="text-2xl font-satoshi">Simi Anand</CardTitle>
                <p className="text-muted-foreground">Co-Founder & Impact Strategist</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground italic">
                    "True innovation happens when storytelling meets actionable impact. 
                    Every infrastructure project is a story of community resilience."
                  </p>
                </div>
                <p className="text-muted-foreground">
                  A TEDx speaker, creator, and podcaster with a 130K+ audience, Simi brings 
                  a unique blend of storytelling prowess and strategic thinking to APAS Labs. 
                  From founding a non-profit at 15 that impacted 500+ students to raising 
                  significant funds for girls' education in India, her journey has always 
                  been about creating meaningful change through purposeful action.
                </p>
                <p className="text-muted-foreground">
                  At APAS Labs, Simi focuses on systems design, community engagement, and 
                  translating complex AI and infrastructure concepts into compelling narratives 
                  that drive stakeholder engagement and community buy-in. Her approach bridges 
                  the gap between technical capabilities and human-centered solutions.
                </p>
                <div className="bg-purple-500/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Focus Areas:</strong> Systems Design, Community Engagement, Knowledge Networks, Impact Storytelling
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-satoshi text-center mb-4">
                How APAS Labs Came to Be
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground">
              <p>
                The story of APAS Labs began with a simple yet profound realization: while AI 
                technology was advancing at unprecedented speed, public infrastructure—the 
                backbone of our communities—was being left behind.
              </p>
              
              <p>
                Hardeep and Simi witnessed firsthand how traditional infrastructure management 
                approaches struggled with modern challenges like climate resilience, data 
                transparency, and predictive maintenance. They saw brilliant engineers, dedicated 
                public servants, and innovative technology vendors working in silos, each possessing 
                pieces of the solution but lacking a unified framework to bring it all together.
              </p>

              <p>
                The breakthrough moment came when they realized that the solution wasn't just about 
                technology—it was about education, collaboration, and building bridges between 
                diverse communities of practice. They envisioned an organization that would serve 
                as both a catalyst and a facilitator, helping public infrastructure professionals 
                become AI-ready through structured learning, peer collaboration, and practical 
                application.
              </p>

              <p>
                APAS Labs was founded on the principle that we cannot wait for someone else to 
                solve these challenges. The organization became a living laboratory where centuries 
                of infrastructure knowledge meets cutting-edge AI capabilities, all guided by the 
                belief that the best solutions emerge from collaborative effort rather than 
                isolated innovation.
              </p>

              <p>
                Today, through strategic partnerships with APAS.AI and recognition from organizations 
                like the Algorand Foundation, APAS Labs continues to pioneer new approaches to 
                infrastructure challenges, always with the mission of making AI capabilities 
                accessible and actionable for public infrastructure professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl font-satoshi">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make public infrastructure professionals AI-ready through comprehensive 
                  education, collaborative research, and practical application frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-xl font-satoshi">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where AI-driven public infrastructure delivers transparent, 
                  resilient, and accountable outcomes for every community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-xl font-satoshi">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaboration over competition, transparency over secrecy, 
                  practical impact over theoretical perfection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-8">
            Recognition & Milestones
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Algorand Foundation Grant</h3>
                <p className="text-muted-foreground">
                  Recognized with a grant award from the Algorand Foundation to support 
                  innovative work in digitizing water infrastructure on blockchain technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Educational Impact</h3>
                <p className="text-muted-foreground">
                  Through our guild system and training programs, we've engaged hundreds 
                  of infrastructure professionals across public and private sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to be part of the transformation? Whether you're a public infrastructure 
            professional, an elected official, or someone passionate about community resilience, 
            there's a place for you in the APAS Labs community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="/partnerships">Explore Partnerships</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;