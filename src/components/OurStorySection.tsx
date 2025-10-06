import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Globe, Zap, ArrowRight } from "lucide-react";

const OurStorySection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const storyItems = [
    {
      type: "milestone",
      year: "2016",
      title: "Resilient Utilities Coalition",
      description: "Brought together practitioners and experts, hosting our first global Resiliency Summit.",
      icon: Users,
      color: "from-blue-500 to-purple-600",
    },
    {
      type: "milestone",
      year: "2018",
      title: "One Water Academy",
      description: "Created webinars and training sessions, capturing lessons and building momentum.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-600",
    },
    {
      type: "milestone",
      year: "2019",
      title: "Future of Water Summit",
      description: "Launched our national Miami conference, putting resilience at the center of conversation.",
      icon: Globe,
      color: "from-pink-500 to-blue-600",
    },
    {
      type: "team",
      title: "The Builders",
      description: "Led by infrastructure veterans with decades managing $9B+ in public works programs across 35+ cities.",
      founders: [
        {
          name: "Simi Anand",
          initials: "SA",
          role: "Systems strategist and builder, focused on bridging knowledge, technology, and community.",
        },
        {
          name: "Hardeep Anand",
          initials: "HA",
          role: "Infrastructure leader and systems synthesist, with decades of experience overseeing complex public works.",
        },
      ],
    },
    {
      type: "milestone",
      year: "Today",
      title: "APAS Labs",
      description: "Evolved to meet the AI challenge with accountable, data-powered platforms transforming infrastructure decisions.",
      icon: Zap,
      color: "from-blue-400 to-purple-500",
      highlight: true,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-to-b from-background-deep via-background to-background-deep overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div
          data-index="0"
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            visibleItems.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From resilience pioneers to infrastructure innovators—building systems society can trust.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {storyItems.map((item, index) => {
              const isVisible = visibleItems.has(index + 1);
              const isActive = activeItem === index;
              const isLeft = index % 2 === 0;

              if (item.type === "milestone") {
                const Icon = item.icon!;
                return (
                  <div
                    key={index}
                    data-index={index + 1}
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} 
                      md:-translate-x-1/2 shadow-lg ring-4 ring-background transition-transform duration-300
                      ${isActive || item.highlight ? 'scale-150' : 'scale-100'}
                      ${item.highlight ? 'animate-pulse' : ''}`}
                    />

                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                      <div className={`group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8
                        transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20
                        ${isActive ? 'bg-white/10 scale-105 shadow-2xl shadow-primary/20' : ''}
                        ${item.highlight ? 'border-primary/40 bg-primary/5' : ''}`}
                      >
                        {/* Year Badge */}
                        <div className={`inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full 
                          bg-gradient-to-r ${item.color} text-white font-bold text-sm shadow-lg`}>
                          {item.year}
                        </div>

                        {/* Icon */}
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 w-fit mb-4
                          group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>

                        {/* Text Content */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Team Section
                return (
                  <div
                    key={index}
                    data-index={index + 1}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Timeline Dot - Special */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500
                      md:-translate-x-1/2 shadow-lg ring-4 ring-background scale-150 animate-pulse" />

                    {/* Full Width Team Card */}
                    <div className="ml-12 md:ml-0 md:px-12">
                      <div className="backdrop-blur-xl bg-gradient-to-br from-primary/10 via-white/5 to-accent/10 
                        border-2 border-primary/30 rounded-3xl p-6 md:p-10 shadow-2xl">
                        
                        {/* Header */}
                        <div className="text-center mb-8 md:mb-10">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 
                            px-4 py-2 rounded-full text-white font-bold text-sm mb-4 shadow-lg">
                            <Users className="w-4 h-4" />
                            <span>The Team</span>
                          </div>
                          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Founders Grid */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6">
                          {item.founders?.map((founder, fIndex) => (
                            <div
                              key={fIndex}
                              className="group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8
                                hover:bg-white/10 hover:scale-105 transition-all duration-300
                                hover:shadow-xl hover:shadow-primary/20"
                            >
                              <div className="flex flex-col items-center text-center space-y-4">
                                <Avatar className="w-20 h-20 md:w-24 md:h-24 ring-4 ring-primary/20 
                                  group-hover:ring-primary/40 transition-all duration-300">
                                  <AvatarImage src="/placeholder.svg" alt={founder.name} />
                                  <AvatarFallback className="text-xl md:text-2xl font-bold 
                                    bg-gradient-to-br from-primary/20 to-accent/20 text-white">
                                    {founder.initials}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{founder.name}</h4>
                                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {founder.role}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                          <Button
                            asChild
                            variant="hero"
                            size="lg"
                            className="group relative overflow-hidden"
                          >
                            <Link to="/about">
                              <span className="relative z-10">Learn More About the Team</span>
                              <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div
          data-index={storyItems.length + 1}
          className={`text-center mt-16 md:mt-24 transition-all duration-1000 ${
            visibleItems.has(storyItems.length + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10
            border-2 border-primary/20 rounded-2xl p-6 md:p-10 max-w-2xl mx-auto hover:bg-primary/15 transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary animate-pulse" />
              <p className="text-xl md:text-3xl font-bold text-white">
                And it's only the beginning.
              </p>
            </div>
            <p className="text-base md:text-xl text-muted-foreground">
              Join us as we transform infrastructure decisions in the age of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
