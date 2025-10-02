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
                We're Not Waiting
              </span>
              <br />
              <span className="text-foreground">
                For Someone Else to Fix This
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              The infrastructure keeping our cities alive is drowning in data it can't use. 
              We're building the tools to change that—not someday, but right now.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-satoshi mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Two people who got tired of watching billion-dollar infrastructure programs 
              struggle with problems AI could actually solve.
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
                <p className="text-muted-foreground">Co-Founder</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground italic">
                    "After managing $9 billion in infrastructure programs, I realized we're asking the wrong questions. 
                    It's not 'Can AI help?' It's 'Why are we still doing this without AI?'"
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Hardeep spent decades in the trenches—managing massive stormwater programs, dealing with regulatory 
                  nightmares, watching smart people waste months on problems that pattern recognition could solve in minutes. 
                  He got tired of being the person who knew what needed to change but had no platform to actually change it.
                </p>
                <p className="text-muted-foreground">
                  So he built one. Not to "disrupt" anything (that word is overused anyway), but to give infrastructure 
                  professionals the tools they deserve. The kind that don't require a CS degree to use. The kind that 
                  actually understand how messy real-world data is.
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
                <p className="text-muted-foreground">Co-Founder</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 mb-4">
                  <Quote className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground italic">
                    "Nobody cares about your AI model until you show them what problem it actually solves. 
                    That's where the story comes in."
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Simi built a 130K+ audience by talking about things that matter. Started a nonprofit at 15. 
                  Gave TEDx talks. Raised money for girls' education in India. But when she looked at infrastructure, 
                  she saw the same problem everywhere: brilliant technology that nobody could explain in a way 
                  that made people actually care.
                </p>
                <p className="text-muted-foreground">
                  At APAS Labs, she's the translator. She turns "machine learning algorithms for predictive maintenance" 
                  into "here's how we stop your pipes from exploding." She designs systems that humans actually want to use. 
                  And she makes sure every tool we build tells a story worth paying attention to.
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
                The Real Origin Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground">
              <p>
                Here's the thing nobody talks about: AI was supposed to revolutionize everything. 
                But somehow, the systems keeping our cities running—water, stormwater, sewers, the stuff 
                people literally can't live without—were stuck using the same spreadsheets from 2005.
              </p>
              
              <p>
                Hardeep was managing multi-billion dollar programs and watching engineers manually 
                comb through decades of inspection reports. Simi was building tech communities and seeing 
                how excited people got about AI... until you mentioned "municipal infrastructure" and their 
                eyes glazed over.
              </p>

              <p>
                The breaking point? Watching a room full of brilliant people—engineers, city officials, 
                tech vendors—all trying to solve the same problem from different angles, speaking different 
                languages, and getting nowhere.
              </p>

              <p>
                So we built APAS Labs. Not as a consulting firm (the world has enough of those). Not as a 
                SaaS company (ditto). But as an actual laboratory—a place where you can experiment with AI 
                on real infrastructure problems, learn from people who've been in your shoes, and build 
                tools that don't require a PhD to understand.
              </p>

              <p>
                We're here because nobody else was doing this. Because the gap between what AI can do and 
                what infrastructure professionals can access is ridiculous. And because waiting for some 
                big tech company or government agency to solve this felt like watching paint dry—while 
                pipes were literally bursting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8 Years of Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/30 text-primary">
              Since 2016
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold font-satoshi mb-6">
              <span className="text-foreground">8 Years of </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Proven Impact
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              We've been at this since 2016. Here's what we've actually built (not just talked about).
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              <div className="space-y-16">
                {/* 2016 - Foundation */}
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-gradient-glass border-glass-border backdrop-blur-xl p-6 rounded-lg inline-block max-w-md">
                      <h3 className="text-lg font-semibold mb-2">Year One</h3>
                      <p className="text-sm text-muted-foreground">Started in a living room with a crazy idea: what if infrastructure professionals could actually use AI?</p>
                      <span className="text-xs text-primary font-medium">2016</span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* 2018-2020 - Growing Network */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gradient-glass border-glass-border backdrop-blur-xl p-6 rounded-lg inline-block max-w-md">
                      <h3 className="text-lg font-semibold mb-2">Building the Network</h3>
                      <p className="text-sm text-muted-foreground">Connected utilities, cities, and tech folks who all wanted the same thing but didn't know each other existed</p>
                      <span className="text-xs text-secondary font-medium">2018-2020</span>
                    </div>
                  </div>
                </div>

                {/* 2021-2022 - Future of Water Summit */}
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 backdrop-blur-xl p-8 rounded-lg inline-block max-w-lg shadow-glow">
                      <div className="flex items-center justify-end mb-3">
                        <Award className="h-6 w-6 text-accent mr-2" />
                        <h3 className="text-xl font-bold text-accent">Future of Water Summit</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        <strong>The Big One:</strong> Pulled off a summit with 500+ water professionals, got the Mayor to keynote, 
                        and proved that people actually care about making infrastructure smarter.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-end text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          <span>500+ Industry Attendees</span>
                        </div>
                        <div className="flex items-center justify-end text-muted-foreground">
                          <Target className="h-4 w-4 mr-2" />
                          <span>Mayoral Keynote Address</span>
                        </div>
                        <div className="flex items-center justify-end text-muted-foreground">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          <span>25+ Expert Speakers</span>
                        </div>
                      </div>
                      <span className="text-sm text-accent font-medium">2021-2022</span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* 2023 - Recognition */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-background"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gradient-glass border-glass-border backdrop-blur-xl p-6 rounded-lg inline-block max-w-md">
                      <h3 className="text-lg font-semibold mb-2">Getting Noticed</h3>
                      <p className="text-sm text-muted-foreground">Algorand Foundation backed us. Started building guild networks where people actually help each other instead of just networking.</p>
                      <span className="text-xs text-green-500 font-medium">2023</span>
                    </div>
                  </div>
                </div>

                {/* 2024 - APAS Labs Evolution */}
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-gradient-glass border-glass-border backdrop-blur-xl p-6 rounded-lg inline-block max-w-md">
                      <h3 className="text-lg font-semibold mb-2">Now</h3>
                      <p className="text-sm text-muted-foreground">Live labs. Real AI tools. A community that's actually doing the work. This is what we built it all for.</p>
                      <span className="text-xs text-primary font-medium">2024</span>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="mb-20">
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-satoshi mb-4">
                  See It in Action
                </CardTitle>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Three minutes that show what happens when you bring the right people together around the right problems. 
                  No fluff, just infrastructure professionals getting stuff done.
                </p>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {/* Placeholder for video - will be replaced with actual embed */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Resilient Utility Coalition Video</strong><br />
                      [Video embed placeholder - replace with Vimeo/YouTube link]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery from Future of Water Summit */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold font-satoshi mb-4">
                Future of Water Summit Highlights
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A visual journey through our flagship event that brought together water industry leaders, 
                featuring the Mayor's keynote and breakthrough discussions on infrastructure innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder images */}
              <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Mayor's Keynote Address</p>
                    <p className="text-xs">[Photo placeholder]</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Lightbulb className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Panel Discussions</p>
                    <p className="text-xs">[Photo placeholder]</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Target className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Networking & Innovation</p>
                    <p className="text-xs">[Photo placeholder]</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Award className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Industry Recognition</p>
                    <p className="text-xs">[Photo placeholder]</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Expert Speakers</p>
                    <p className="text-xs">[Photo placeholder]</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Heart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Community Impact</p>
                    <p className="text-xs">[Photo placeholder]</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years of Innovation</div>
            </Card>
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center p-6">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Summit Attendees</div>
            </Card>
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center p-6">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Expert Speakers</div>
            </Card>
            <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Partner Organizations</div>
            </Card>
          </div>

          {/* Testimonial/Quote */}
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-xl">
            <CardContent className="p-8 text-center">
              <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
              <blockquote className="text-xl italic text-muted-foreground mb-6 max-w-4xl mx-auto">
                "The Future of Water Summit demonstrated APAS Labs' unique ability to convene diverse 
                stakeholders around critical infrastructure challenges. Their vision for collaborative 
                innovation is exactly what our industry needs."
              </blockquote>
              <div className="text-sm text-muted-foreground">
                <strong>Industry Leader</strong><br />
                Future of Water Summit Participant
              </div>
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