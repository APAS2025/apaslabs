import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background-deep via-background-deep to-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Leadership & Vision
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Meet the practitioners who have transformed complex infrastructure challenges into actionable solutions, bridging the gap between technology, policy, and community impact.
            </p>
          </div>

          {/* Detailed Founder Profiles */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Simi Anand - Detailed */}
            <Card className="group relative bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Avatar className="w-32 h-32 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src="/placeholder.svg" alt="Simi Anand" />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary/20 to-accent/20 text-white">SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Simi Anand</h2>
                    <h3 className="text-lg text-primary mb-4">Co-Founder & Systems Strategist</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Systems strategist and builder, focused on bridging knowledge, technology, and community. Simi brings a unique perspective on how complex systems can be simplified and made accessible to practitioners and communities alike.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2"><strong>Focus Areas:</strong> Systems Design, Community Engagement, Knowledge Networks</p>
                      <p><strong>Background:</strong> Technology Strategy, Public-Private Partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Hardeep Anand - Detailed */}
            <Card className="group relative bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Avatar className="w-32 h-32 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src="/placeholder.svg" alt="Hardeep Anand" />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary/20 to-accent/20 text-white">HA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Hardeep Anand</h2>
                    <h3 className="text-lg text-primary mb-4">Co-Founder & Infrastructure Leader</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Infrastructure leader and systems synthesist, with decades of experience overseeing complex public works and regulatory frameworks. Hardeep specializes in translating policy into actionable infrastructure solutions.
                    </p>
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-2"><strong>Focus Areas:</strong> Infrastructure Policy, Regulatory Frameworks, Public Works</p>
                      <p><strong>Background:</strong> Billion-Dollar Program Management, Government Relations</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Mission Statement */}
          <Card className="relative bg-white/5 border-white/10 backdrop-blur-md p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-lg" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To transform fragmented systems into connected solutions that serve practitioners, governments, and communities. We build tools that make complex decisions transparent, funding accountable, and knowledge accessible.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;