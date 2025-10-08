import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  return (
    <section className="py-32 bg-background-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background-deep" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/8" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
          Shape the Future of <span className="text-primary">Infrastructure</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Join the movement to preserve knowledge, accelerate learning, and build AI tools that serve humanity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto">
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-lg px-10 py-6 h-auto font-semibold bg-gradient-to-br from-primary to-blue-500 hover:from-primary-glow hover:to-blue-400 shadow-lg active:scale-95 transition-all duration-300"
            asChild
          >
            <Link to="/community">
              Join as an Expert <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-lg px-10 py-6 h-auto font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300"
            asChild
          >
            <Link to="/community">Join as a Participant</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-lg px-10 py-6 h-auto font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/10 active:scale-95 transition-all duration-300"
            asChild
          >
            <Link to="/support">Become a Founding Donor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};