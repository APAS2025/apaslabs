import { useState, useEffect } from "react";

const WhyWeExistSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const elements = document.querySelectorAll("[data-index]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      stat: "$2.4B",
      label: "Lost annually",
      problem: "Disconnected Systems",
      detail: "Cities spend billions on infrastructure upgrades. No one can tell you what actually got fixed or if it made any difference."
    },
    {
      stat: "92%",
      label: "Over budget",
      problem: "Zero Accountability",
      detail: "Projects routinely exceed budgets by double or triple. No tracking, no consequences, no answers."
    },
    {
      stat: "68%",
      label: "Trust decline",
      problem: "Broken Transparency",
      detail: "Citizens ask basic questions about their water, their roads, their safety. They get silence or conflicting answers."
    },
    {
      stat: "40%",
      label: "Overspending",
      problem: "Legacy Processes",
      detail: "Decisions made with outdated tools, paper reports, and institutional knowledge walking out the door."
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background-deep/50 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          data-index="0"
          className={`mb-24 transition-all duration-700 ${
            visibleItems.includes(0) 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            The Problem<br />
            <span className="text-primary">Is Simple</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Infrastructure spending happens in a black box. No visibility, no accountability, no trust.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {problems.map((item, index) => (
            <div
              key={index}
              data-index={index + 1}
              className={`transition-all duration-700 ${
                visibleItems.includes(index + 1)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
                <div className="space-y-4">
                  <div>
                    <div className="text-6xl font-bold text-primary mb-2">{item.stat}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
                  </div>
                  
                  <div className="h-px bg-border group-hover:bg-primary/20 transition-colors" />
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.problem}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div 
          data-index="5"
          className={`transition-all duration-700 ${
            visibleItems.includes(5)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-12">
            <div className="max-w-3xl">
              <h3 className="text-4xl font-bold text-foreground mb-6">
                We Build Systems That Work
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Real-time data platforms that connect the dots. Show where money goes. 
                Track what actually gets done. Give communities a voice that gets heard.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                  Live Data
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                  Clear Metrics
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20">
                  Public Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;