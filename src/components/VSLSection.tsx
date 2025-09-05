import { useEffect, useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

const VSLSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Here you would trigger actual video playback
    console.log("Playing VSL video");
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-gradient-to-b from-background via-background to-background-deep overflow-hidden"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        {/* Headline */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-satoshi mb-4">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
              See How We&apos;re Redefining
            </span>
            <br />
            <span className="text-foreground">
              Public Infrastructure
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full shadow-glow" />
        </div>

        {/* Video Player */}
        <div 
          className={`relative mb-8 transition-all duration-1200 delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <div className="relative aspect-video max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 bg-gradient-to-br from-background-deep via-background to-background-deep">
              
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-deep to-accent/20 flex items-center justify-center">
                    {/* Minimalist Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-xl" />
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-xl" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/30 rounded-full blur-2xl" />
                    </div>
                    
                    {/* Founder Silhouette or Brand Logo Area */}
                    <div className="relative z-10 text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-xl">
                          <Volume2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <p className="text-white/80 font-space text-sm">
                        Founder Story • 2:30
                      </p>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div 
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  >
                    <div className="relative">
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
                      <div className="absolute inset-2 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-300" />
                      
                      {/* Play Button */}
                      <div className="relative w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        <Play className="w-8 h-8 text-background-deep ml-1 fill-current" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Placeholder for actual video */
                <div className="absolute inset-0 bg-background-deep flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground font-space">Loading video...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-50" />
          </div>
        </div>

        {/* Caption */}
        <div 
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-muted-foreground font-space font-light max-w-2xl mx-auto leading-relaxed">
            Watch a 2-minute overview of our mission, vision, and system shift.
          </p>
          
          {/* Subtle Call-to-Action Hint */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-muted-foreground/70">
            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
            <span className="font-space">No email required • Full story in 2:30</span>
            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;