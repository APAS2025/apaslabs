import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background-deep">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-sm font-medium">
              APAS Labs Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                AI-Driven Solutions
              </span>
              <br />
              <span className="text-foreground">
                for Public Infrastructure
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Comprehensive solutions portfolio designed to transform public infrastructure 
              through AI readiness, data governance, and collaborative frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-glass border-glass-border backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-satoshi">Solutions Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive solutions portfolio is currently under development. 
                This page will showcase our AI-driven approaches to public infrastructure challenges.
              </p>
              <Button variant="outline" size="lg">
                Contact Us for More Information
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Solutions;