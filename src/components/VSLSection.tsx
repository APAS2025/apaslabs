import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const VSLSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-secondary rounded-full blur-3xl opacity-10 animate-float"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            A Message from Our <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">Founder</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the vision behind APAS Labs and how we're revolutionizing infrastructure decision-making
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="glass-card border-primary/20 glow-primary overflow-hidden">
            <CardContent className="p-0">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-subtle flex items-center justify-center group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]"></div>
                
                {/* Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 glow-primary">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                      Watch the Vision
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Click to play • 5:32 minutes
                    </p>
                  </div>
                </div>

                {/* Founder Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-surface rounded-lg p-4 border border-white/10">
                    <div className="flex items-center gap-4">
                      {/* Avatar Placeholder */}
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-primary border-2 border-primary/30 flex items-center justify-center">
                        <span className="text-lg md:text-xl font-bold text-white">F</span>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground text-sm md:text-base">Founder & CEO</h4>
                        <p className="text-muted-foreground text-xs md:text-sm">APAS Labs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Full Message
            </Button>
            <p className="text-muted-foreground mt-4 text-sm">
              Learn how APAS Labs is transforming infrastructure decision-making
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;