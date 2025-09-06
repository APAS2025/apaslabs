import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Calendar, Award } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              APAS Labs Community
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Join Our Community
              </span>
              <br />
              <span className="text-foreground">
                of Infrastructure Innovators
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Connect with public infrastructure professionals, researchers, and innovators 
              working together to build AI-ready communities.
            </p>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Professional Network",
                description: "Connect with infrastructure professionals across public and private sectors."
              },
              {
                icon: MessageCircle,
                title: "Discussion Forums",
                description: "Engage in meaningful discussions about AI applications in infrastructure."
              },
              {
                icon: Calendar,
                title: "Events & Workshops",
                description: "Join regular events, workshops, and training sessions."
              },
              {
                icon: Award,
                title: "Recognition Program",
                description: "Get recognized for your contributions to the infrastructure community."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-glass border-glass-border backdrop-blur-xl text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-satoshi">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-satoshi">Community Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive community platform is launching soon. Stay tuned for updates 
                on how to join our growing network of infrastructure professionals.
              </p>
              <Button variant="outline" size="lg">
                Get Notified When We Launch
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Community;