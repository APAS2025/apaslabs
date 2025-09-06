import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Droplets, 
  Fish, 
  Leaf, 
  Waves,
  Users,
  Target,
  Star,
  Gift,
  Award,
  Crown,
  Sparkles
} from "lucide-react";

const Support = () => {
  const supportTiers = [
    { 
      name: "Bay Guardian", 
      amount: "$5", 
      description: "Join our community of bay protectors",
      icon: <Droplets className="h-6 w-6" />,
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      benefits: ["Monthly newsletter", "Community access", "Digital thank you"],
      badge: "🌊"
    },
    { 
      name: "Marine Protector", 
      amount: "$25", 
      description: "Help restore marine habitats",
      icon: <Fish className="h-6 w-6" />,
      color: "bg-gradient-to-br from-green-400 to-emerald-500",
      benefits: ["All Guardian benefits", "Quarterly impact reports", "Exclusive webinars"],
      badge: "🐠"
    },
    { 
      name: "Ocean Advocate", 
      amount: "$100", 
      description: "Champion comprehensive bay restoration",
      icon: <Waves className="h-6 w-6" />,
      color: "bg-gradient-to-br from-cyan-400 to-blue-500",
      benefits: ["All Protector benefits", "Annual appreciation event", "Direct updates from team"],
      badge: "🌊"
    },
    { 
      name: "Ecosystem Hero", 
      amount: "$500", 
      description: "Lead transformative environmental impact",
      icon: <Crown className="h-6 w-6" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      benefits: ["All Advocate benefits", "Advisory board invitation", "Co-branded recognition"],
      badge: "👑"
    }
  ];

  const impactStats = [
    { label: "Waters Protected", value: "428 sq mi", icon: <Waves className="h-5 w-5" /> },
    { label: "Species Supported", value: "1,200+", icon: <Fish className="h-5 w-5" /> },
    { label: "Community Members", value: "2,500+", icon: <Users className="h-5 w-5" /> },
    { label: "Research Projects", value: "12", icon: <Target className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-background-deep via-background-start to-background-end">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Badge variant="outline" className="text-green-500 border-green-500 mb-4">
              ✨ Make a Difference Today
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground-primary mb-6">
              Support the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500">Future</span> of Biscayne Bay
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
              Join APAS Labs in protecting Miami's most precious water resource. Every contribution helps us advance AI-powered environmental solutions, support marine life, and create a sustainable future for generations to come.
            </p>
          </div>

          {/* Quick Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {impactStats.map((stat, index) => (
              <Card key={index} className="glass-card border-0 text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2 text-green-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground-primary">{stat.value}</div>
                  <div className="text-sm text-foreground-muted">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground-primary mb-4">
              Choose Your Impact Level
            </h2>
            <p className="text-xl text-foreground-secondary">
              Every contribution makes a real difference in protecting Biscayne Bay's ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
              <Card key={index} className="glass-card border-0 hover:scale-105 transition-all duration-300 group hover:shadow-2xl relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full ${tier.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {tier.icon}
                    </div>
                  </div>
                  <div className="text-3xl mb-2">{tier.badge}</div>
                  <CardTitle className="text-foreground-primary font-bold">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                    {tier.amount}
                  </div>
                  <CardDescription className="text-foreground-muted">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center relative z-10">
                  <div className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-foreground-secondary">
                        <Star className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                    <Heart className="mr-2 h-4 w-4" />
                    Support Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-16 px-4 bg-gradient-to-r from-background-start/20 to-background-end/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground-primary mb-8">
            Your Support Creates Real Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-foreground-primary">Water Quality Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted">
                  Advanced AI systems continuously monitor bay health, detecting pollution sources and tracking ecosystem recovery in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-foreground-primary">Habitat Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted">
                  Supporting seagrass replanting, mangrove restoration, and coral conservation efforts throughout Biscayne Bay's 428 square miles.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-foreground-primary">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground-muted">
                  Educational programs, citizen science initiatives, and community advocacy that amplify voices for environmental protection.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-50/10 to-emerald-50/10 rounded-2xl p-8 backdrop-blur-sm border border-green-200/20">
            <Sparkles className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground-primary mb-4">
              Together, We're Making Waves
            </h3>
            <p className="text-lg text-foreground-secondary mb-6">
              Since 2024, our community has grown to over 2,500 passionate environmental advocates. Your support helps us continue groundbreaking research, innovative AI solutions, and collaborative partnerships with government agencies.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
              <Gift className="mr-2 h-5 w-5" />
              Make Your Impact Today
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <Award className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-foreground-primary mb-6">
            Be Part of Something Bigger
          </h2>
          <p className="text-xl text-foreground-secondary mb-8">
            Join thousands of environmental champions who believe in the power of technology, community, and conservation to create lasting change for Biscayne Bay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-green-500/25 transition-all duration-300">
              <Heart className="mr-2 h-5 w-5" />
              Start Supporting Today
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
              Learn More About Our Impact
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;