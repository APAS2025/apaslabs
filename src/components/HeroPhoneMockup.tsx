import { useState, useEffect } from 'react';
import { Brain, MessageSquare, TrendingUp, Droplets, BarChart3, MapPin } from 'lucide-react';

export const HeroPhoneMockup = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    {
      type: 'dashboard',
      title: 'Infrastructure Dashboard',
      metrics: [
        { label: 'Water Quality', value: '92%', trend: '+5%', icon: Droplets },
        { label: 'System Health', value: '87%', trend: '+12%', icon: TrendingUp },
        { label: 'ROI Tracking', value: '$2.4M', trend: '+23%', icon: BarChart3 },
      ]
    },
    {
      type: 'chat',
      question: 'What is the current water quality in Biscayne Bay?',
      response: 'Based on real-time monitoring, water quality shows healthy dissolved oxygen at 6.2 mg/L with improved seagrass coverage of 12% since last quarter...'
    },
    {
      type: 'map',
      title: 'Live Monitoring',
      stations: 47,
      location: 'Biscayne Bay Network'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentScreen = screens[activeScreen];

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-[320px] h-[640px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20" />
        
        <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="h-12 bg-background-deep flex items-center justify-between px-6 relative z-10">
            <span className="text-xs font-medium">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-1.5 bg-foreground rounded-sm" />
              <div className="w-6 h-1.5 bg-foreground rounded-sm" />
            </div>
          </div>

          {/* Content Area with Transitions */}
          <div className="p-4 h-[calc(100%-3rem)] flex flex-col">
            {currentScreen.type === 'dashboard' && (
              <div className="animate-fade-in space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Orakles AI</div>
                    <div className="text-xs text-muted-foreground">{currentScreen.title}</div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {currentScreen.metrics?.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-card border rounded-xl p-4 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground">{metric.label}</span>
                          </div>
                          <span className="text-xs text-green-500 font-medium">{metric.trend}</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span>Real-time monitoring active</span>
                  </div>
                </div>
              </div>
            )}

            {currentScreen.type === 'chat' && (
              <div className="animate-fade-in space-y-4 flex flex-col h-full">
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Orakles AI</div>
                    <div className="text-xs text-muted-foreground">Ask anything</div>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex justify-end animate-fade-in">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5 max-w-[240px] text-xs leading-relaxed">
                      {currentScreen.question}
                    </div>
                  </div>

                  <div className="flex justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-card border rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[240px]">
                      <div className="text-xs text-foreground/90 leading-relaxed">
                        {currentScreen.response}
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-[10px] text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Expert verified
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-card rounded-2xl border">
                  <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground flex-1">Type your question...</span>
                </div>
              </div>
            )}

            {currentScreen.type === 'map' && (
              <div className="animate-fade-in space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{currentScreen.title}</div>
                    <div className="text-xs text-muted-foreground">{currentScreen.location}</div>
                  </div>
                </div>

                <div className="relative h-[400px] bg-gradient-to-br from-blue-900/20 to-blue-600/20 rounded-xl overflow-hidden border border-border">
                  {/* Simulated map with monitoring points */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"
                          style={{
                            left: `${20 + (i % 4) * 20}%`,
                            top: `${20 + Math.floor(i / 4) * 25}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border rounded-lg p-3">
                    <div className="text-xs font-medium mb-1">Active Monitoring</div>
                    <div className="text-2xl font-bold text-primary">{currentScreen.stations} Stations</div>
                    <div className="text-[10px] text-muted-foreground mt-1">Real-time data collection</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-600/30 rounded-[3rem] blur-2xl -z-10 animate-pulse" />
    </div>
  );
};
