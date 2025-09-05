import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Users, Target, Zap, Shield, Globe, Droplets, TrendingUp } from 'lucide-react';

const ClimateResilienceGuild = () => {
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    organization: '',
    expertise: '',
    contribution: ''
  });

  const [contributeForm, setContributeForm] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    type: ''
  });

  const [partnerForm, setPartnerForm] = useState({
    name: '',
    email: '',
    organization: '',
    partnership: '',
    resources: ''
  });

  const [guildForm, setGuildForm] = useState({
    name: '',
    email: '',
    guildTitle: '',
    description: '',
    background: '',
    impact: ''
  });

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Join form submitted:', joinForm);
  };

  const handleContributeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contribute form submitted:', contributeForm);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner form submitted:', partnerForm);
  };

  const handleGuildSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Guild form submitted:', guildForm);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.2),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent animate-fade-in">
              Climate & Resilience: Preparing Systems for What's Next
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Powered by APAS.AI — where experts, practitioners, and communities unite to define resilience, 
              close knowledge gaps, and create decision-ready tools for climate impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 shadow-glow">
                    Apply to Join the Guild
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-lg border border-border/50">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Join the Climate & Resilience Guild</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleJoinSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="join-name">Full Name</Label>
                      <Input
                        id="join-name"
                        value={joinForm.name}
                        onChange={(e) => setJoinForm({...joinForm, name: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="join-email">Email</Label>
                      <Input
                        id="join-email"
                        type="email"
                        value={joinForm.email}
                        onChange={(e) => setJoinForm({...joinForm, email: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="join-org">Organization</Label>
                      <Input
                        id="join-org"
                        value={joinForm.organization}
                        onChange={(e) => setJoinForm({...joinForm, organization: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="join-expertise">Area of Expertise</Label>
                      <Input
                        id="join-expertise"
                        value={joinForm.expertise}
                        onChange={(e) => setJoinForm({...joinForm, expertise: e.target.value})}
                        className="bg-background/50"
                        placeholder="e.g., Climate Science, Water Management, Urban Planning"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="join-contribution">How will you contribute?</Label>
                      <Textarea
                        id="join-contribution"
                        value={joinForm.contribution}
                        onChange={(e) => setJoinForm({...joinForm, contribution: e.target.value})}
                        className="bg-background/50"
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Submit Application</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/40 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary-glow/50 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      </section>

      {/* What This Guild Is */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">What This Guild Is</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Climate change is no longer abstract. Its impacts are being felt first <strong>through the lens of water</strong> — 
                sea-level rise, floods, droughts, and storms that overwhelm infrastructure and expose systemic gaps. 
                Utilities, governments, and communities face cascading risks, yet the frameworks for defining resilience 
                remain inconsistent, fragmented, and often disconnected from measurable outcomes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The Climate & Resilience Guild exists to change this.
              </p>
              <p className="text-lg leading-relaxed">
                It is a <strong>collective of experts, practitioners, and communities</strong> working to:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Define and standardize what resilience means in practice</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Curate frameworks that help measure and advance resilience with clarity</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Identify gaps and accountability points (CAPs) in planning and funding</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Build trusted, AI-powered tools that prepare decision-makers to act with confidence</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Phone Demo */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Resilience Intelligence in Your Pocket</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Watch how the Guild transforms fragmented knowledge into actionable insights. 
                This living encyclopedia grows smarter with every contribution, forever.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              {/* Phone Mockup */}
              <div className="relative">
                <div className="w-80 h-[640px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] p-3 shadow-2xl">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="h-8 bg-black flex items-center justify-between px-6 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white rounded-sm" />
                        <div className="w-4 h-2 bg-white rounded-sm" />
                        <div className="w-4 h-2 bg-white rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="h-full bg-gradient-to-b from-blue-50 to-white p-4">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6 pt-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Droplets className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Climate Guild AI</h3>
                          <p className="text-sm text-gray-600">Resilience Expert</p>
                        </div>
                      </div>
                      
                      {/* Chat Messages */}
                      <div className="space-y-4">
                        {/* User Message */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-tr-lg max-w-xs text-sm">
                            What is the definition of resiliency as defined by chapter 24 of the code of Miami-Dade County?
                          </div>
                        </div>
                        
                        {/* AI Response */}
                        <div className="flex justify-start">
                          <div className="bg-gray-100 text-gray-900 p-3 rounded-2xl rounded-tl-lg max-w-xs text-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="w-4 h-4 text-red-500" />
                              <span className="font-semibold text-red-600">Critical Gap Identified</span>
                            </div>
                            <p className="mb-2">
                              <strong>There is NO definition of resiliency in Chapter 24 of the Miami-Dade County Code.</strong>
                            </p>
                            <p className="text-xs text-gray-600">
                              This gap represents exactly why the Climate Guild exists - to identify and address missing frameworks that leave communities vulnerable.
                            </p>
                          </div>
                        </div>
                        
                        {/* Follow-up suggestion */}
                        <div className="flex justify-start">
                          <div className="bg-green-50 border border-green-200 text-gray-900 p-3 rounded-2xl rounded-tl-lg max-w-xs text-sm">
                            <p className="font-semibold text-green-700 mb-1">Guild Insight:</p>
                            <p className="text-xs">Would you like me to show you resilience frameworks from other jurisdictions that could inform Miami-Dade's policy development?</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Input Area */}
                      <div className="absolute bottom-6 left-4 right-4">
                        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
                          <input 
                            type="text" 
                            placeholder="Ask about resilience frameworks..." 
                            className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
                            disabled
                          />
                          <div className="w-6 h-6 bg-blue-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
                </div>

                {/* Floating Knowledge Points */}
                <div className="absolute -top-8 -left-12 bg-primary/20 backdrop-blur-sm rounded-lg p-3 text-sm max-w-48 animate-pulse">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="font-semibold">Living Knowledge</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Continuously updated with expert contributions</p>
                </div>

                <div className="absolute -bottom-8 -right-12 bg-secondary/20 backdrop-blur-sm rounded-lg p-3 text-sm max-w-48 animate-pulse" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span className="font-semibold">Validated Insights</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Expert-curated, hallucination-resistant</p>
                </div>

                <div className="absolute top-1/2 -right-16 bg-primary-glow/20 backdrop-blur-sm rounded-lg p-3 text-sm max-w-44 animate-pulse" style={{animationDelay: '2s'}}>
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-primary-glow" />
                    <span className="font-semibold">Forever Value</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Each contribution enhances the collective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Living Lab */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">A Living Lab</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This Guild is a <strong>living lab</strong> — continuously enriched by climate science, resilience frameworks, 
              community experiences, and field data. The more it lives, the richer it becomes. Each new contribution 
              strengthens the collective knowledge stack, ensuring resilience knowledge is not lost but continuously 
              improved and made usable.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Bootstrapping the Stack</h3>
                  <p className="text-sm text-muted-foreground">
                    Powered by APAS.AI, the Guild captures and curates resilience knowledge on our own infrastructure. 
                    Experts bring frameworks and methodologies; practitioners and communities add local insight.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Curating & Guardrailing</h3>
                  <p className="text-sm text-muted-foreground">
                    Contributions are validated, structured, and stress-tested against real-world scenarios. 
                    Guardrails prevent false or impractical AI outputs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-glow to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Building the Application</h3>
                  <p className="text-sm text-muted-foreground">
                    Knowledge is embedded into a custom GPT app designed for climate and resilience. 
                    The app supports utilities, governments, and funders with decision-ready insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Transparency & Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    A development timeline is set and updated openly. Milestones are shared with the community, 
                    ensuring accountability. The application will launch with clear reporting of outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations of Members */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Expectations of Members</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-primary">Experts</h3>
                  <p className="text-muted-foreground">
                    Contribute resilience definitions, models, and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-secondary">Practitioners</h3>
                  <p className="text-muted-foreground">
                    Add operational data from utilities, cities, and field projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-primary-glow">Community Members</h3>
                  <p className="text-muted-foreground">
                    Bring local knowledge and adaptation experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4 text-primary">Funders and Partners</h3>
                  <p className="text-muted-foreground">
                    Enable pilots and scalable adoption.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-xl text-muted-foreground mt-12">
              Every contribution — from a dataset to a framework — helps shape{" "}
              <strong className="text-primary">a collective standard for resilience.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* The Guild vs. Generic GPTs */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">The Guild vs. Generic GPTs</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* The Guild */}
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:from-primary/15 hover:to-primary/10 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">The Guild (APAS.AI Stack)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Built on our own infrastructure → no dependency on external vendors.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cost control → scale without runaway API fees.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Validated content curated by experts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Guardrails against hallucination → resilient knowledge, not risky guesses.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Domain-specific → purpose-built for climate and resilience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Living lab → continuously enriched, never static.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Generic GPTs */}
              <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-destructive">Generic GPTs (OpenAI / open-source)</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Black box → sources unknown, cannot be traced.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>High hallucination risk → confident but false outputs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Generic knowledge → diluted by irrelevant internet data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Pricing and policy outside your control.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                      <span>Contradictions and bias common in open-source content.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground italic max-w-4xl mx-auto">
                In resilience, where wrong answers risk billions and lives, generic GPTs are not enough. 
                The Guild is curated, accountable, and purpose-built to eliminate uncertainty where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Deliverables</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Custom GPT App</h3>
                  <p className="text-sm text-muted-foreground">
                    A custom GPT app trained on resilience knowledge and frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Governance Framework</h3>
                  <p className="text-sm text-muted-foreground">
                    A governance framework that defines resilience and sets guardrails.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-glow to-secondary rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Living Repository</h3>
                  <p className="text-sm text-muted-foreground">
                    A living repository of resilience definitions, frameworks, and CAPs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Progress Reporting</h3>
                  <p className="text-sm text-muted-foreground">
                    Progress reporting shared openly with the community and funders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Launch Milestone</h3>
                  <p className="text-sm text-muted-foreground">
                    A launch milestone where the resilience app goes live for governments, practitioners, and citizens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Disclaimer</h2>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  Outputs from the Guild should be verified against local regulations and context. 
                  The difference is that here, knowledge comes from <strong>trusted experts and practitioners</strong> — 
                  curated, validated, and continuously enriched. That makes the Guild far more reliable than generic AI, 
                  while still encouraging human oversight where decisions carry weight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Climate & Resilience Guild</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Help define resilience, close accountability gaps, and build the first AI-powered knowledge platform 
              that prepares cities, utilities, and communities for climate change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transition-all duration-300 shadow-glow">
                    Apply to Join the Guild
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-lg border border-border/50">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Join the Climate & Resilience Guild</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleJoinSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="cta-join-name">Full Name</Label>
                      <Input
                        id="cta-join-name"
                        value={joinForm.name}
                        onChange={(e) => setJoinForm({...joinForm, name: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-join-email">Email</Label>
                      <Input
                        id="cta-join-email"
                        type="email"
                        value={joinForm.email}
                        onChange={(e) => setJoinForm({...joinForm, email: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-join-org">Organization</Label>
                      <Input
                        id="cta-join-org"
                        value={joinForm.organization}
                        onChange={(e) => setJoinForm({...joinForm, organization: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-join-expertise">Area of Expertise</Label>
                      <Input
                        id="cta-join-expertise"
                        value={joinForm.expertise}
                        onChange={(e) => setJoinForm({...joinForm, expertise: e.target.value})}
                        className="bg-background/50"
                        placeholder="e.g., Climate Science, Water Management, Urban Planning"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-join-contribution">How will you contribute?</Label>
                      <Textarea
                        id="cta-join-contribution"
                        value={joinForm.contribution}
                        onChange={(e) => setJoinForm({...joinForm, contribution: e.target.value})}
                        className="bg-background/50"
                        rows={3}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Submit Application</Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                    Contribute Knowledge
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-lg border border-border/50">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Contribute Knowledge</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleContributeSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="contribute-name">Full Name</Label>
                      <Input
                        id="contribute-name"
                        value={contributeForm.name}
                        onChange={(e) => setContributeForm({...contributeForm, name: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contribute-email">Email</Label>
                      <Input
                        id="contribute-email"
                        type="email"
                        value={contributeForm.email}
                        onChange={(e) => setContributeForm({...contributeForm, email: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contribute-title">Knowledge Title</Label>
                      <Input
                        id="contribute-title"
                        value={contributeForm.title}
                        onChange={(e) => setContributeForm({...contributeForm, title: e.target.value})}
                        className="bg-background/50"
                        placeholder="e.g., Resilience Framework for Coastal Communities"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contribute-type">Type of Contribution</Label>
                      <Input
                        id="contribute-type"
                        value={contributeForm.type}
                        onChange={(e) => setContributeForm({...contributeForm, type: e.target.value})}
                        className="bg-background/50"
                        placeholder="e.g., Research Paper, Case Study, Framework"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contribute-description">Description</Label>
                      <Textarea
                        id="contribute-description"
                        value={contributeForm.description}
                        onChange={(e) => setContributeForm({...contributeForm, description: e.target.value})}
                        className="bg-background/50"
                        rows={3}
                        placeholder="Describe your knowledge contribution and its relevance to climate resilience..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Submit Contribution</Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-secondary/50 hover:bg-secondary/10">
                    Partner with Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-lg border border-border/50">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Partner with Us</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="partner-name">Full Name</Label>
                      <Input
                        id="partner-name"
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({...partnerForm, name: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner-email">Email</Label>
                      <Input
                        id="partner-email"
                        type="email"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner-organization">Organization</Label>
                      <Input
                        id="partner-organization"
                        value={partnerForm.organization}
                        onChange={(e) => setPartnerForm({...partnerForm, organization: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner-partnership">Partnership Type</Label>
                      <Input
                        id="partner-partnership"
                        value={partnerForm.partnership}
                        onChange={(e) => setPartnerForm({...partnerForm, partnership: e.target.value})}
                        className="bg-background/50"
                        placeholder="e.g., Funding, Data Sharing, Pilot Implementation"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner-resources">Available Resources</Label>
                      <Textarea
                        id="partner-resources"
                        value={partnerForm.resources}
                        onChange={(e) => setPartnerForm({...partnerForm, resources: e.target.value})}
                        className="bg-background/50"
                        rows={3}
                        placeholder="Describe the resources, expertise, or support your organization can provide..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Submit Partnership Inquiry</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Lead a Guild Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-primary-glow/20 to-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Want to Lead Your Own Guild?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              APAS Labs welcomes new guild proposals. Share your vision for a knowledge domain that needs 
              expert curation and AI-powered tools.
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary transition-all duration-300">
                  Propose a New Guild
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg bg-card/95 backdrop-blur-lg border border-border/50">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">Propose a New Guild</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleGuildSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="guild-name">Your Name</Label>
                    <Input
                      id="guild-name"
                      value={guildForm.name}
                      onChange={(e) => setGuildForm({...guildForm, name: e.target.value})}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guild-email">Email</Label>
                    <Input
                      id="guild-email"
                      type="email"
                      value={guildForm.email}
                      onChange={(e) => setGuildForm({...guildForm, email: e.target.value})}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guild-title">Proposed Guild Title</Label>
                    <Input
                      id="guild-title"
                      value={guildForm.guildTitle}
                      onChange={(e) => setGuildForm({...guildForm, guildTitle: e.target.value})}
                      className="bg-background/50"
                      placeholder="e.g., Digital Infrastructure & Cybersecurity Guild"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guild-description">Guild Description & Vision</Label>
                    <Textarea
                      id="guild-description"
                      value={guildForm.description}
                      onChange={(e) => setGuildForm({...guildForm, description: e.target.value})}
                      className="bg-background/50"
                      rows={4}
                      placeholder="Describe the knowledge domain, target audience, and why this guild is needed..."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guild-background">Your Background & Expertise</Label>
                    <Textarea
                      id="guild-background"
                      value={guildForm.background}
                      onChange={(e) => setGuildForm({...guildForm, background: e.target.value})}
                      className="bg-background/50"
                      rows={3}
                      placeholder="Share your relevant experience and qualifications to lead this guild..."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guild-impact">Expected Impact</Label>
                    <Textarea
                      id="guild-impact"
                      value={guildForm.impact}
                      onChange={(e) => setGuildForm({...guildForm, impact: e.target.value})}
                      className="bg-background/50"
                      rows={3}
                      placeholder="What problems would this guild solve? Who would benefit?"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Submit Guild Proposal</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateResilienceGuild;