import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  Shield, 
  Ban, 
  CreditCard,
  Users,
  Globe,
  Mail,
  Calendar,
  CheckCircle
} from "lucide-react";

const TermsOfService = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [lastUpdated] = useState("January 1, 2024");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (index: number) => visibleItems.includes(index);

  return (
    <div className="min-h-screen bg-background-deep pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" data-index="0">
        <div className="container mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
              <Scale className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="text-foreground">Terms of </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              These terms govern your use of APAS Labs services and establish the legal framework for our professional relationship.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4" data-index="1">
        <div className="container mx-auto max-w-4xl">
          <div className={`transform transition-all duration-1000 ${
            isVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Agreement */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("User" or "you") and APAS Labs, Inc. ("Company," "we," "our," or "us") regarding your use of our website, applications, and services (collectively, the "Services").
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-amber-600">
                    <strong>IMPORTANT:</strong> By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  These Terms apply to all users, including visitors, registered users, guild members, and premium subscribers.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Description of Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">APAS Labs provides innovative infrastructure solutions through:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Interactive Platforms</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Biscayne Bay GPT ecosystem analysis</li>
                      <li>• Droobi Language Infrastructure Lab</li>
                      <li>• AI-powered decision support tools</li>
                      <li>• Data visualization and analytics</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Professional Communities</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Guild-based expert networks</li>
                      <li>• Knowledge sharing platforms</li>
                      <li>• Collaborative research initiatives</li>
                      <li>• Professional development resources</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Service Evolution:</strong> We continuously improve our Services and may add, modify, or discontinue features. We will provide reasonable notice of material changes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Accounts */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  User Accounts and Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Account Requirements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• You must be at least 16 years old to create an account</li>
                    <li>• You must provide accurate and complete information</li>
                    <li>• You are responsible for maintaining account security</li>
                    <li>• One account per person or organization</li>
                    <li>• Professional credentials may be verified for guild participation</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Account Responsibilities</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium">You agree to:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Keep your login credentials secure</li>
                        <li>• Notify us of unauthorized access</li>
                        <li>• Update your information as needed</li>
                        <li>• Comply with all applicable laws</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium">You agree not to:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Share accounts with others</li>
                        <li>• Create false identities</li>
                        <li>• Impersonate others</li>
                        <li>• Use automated tools without permission</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Acceptable Use Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-green-600 mb-2">Permitted Uses</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Professional collaboration and knowledge sharing</li>
                    <li>• Educational and research purposes</li>
                    <li>• Infrastructure planning and decision support</li>
                    <li>• Community engagement and networking</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-red-600 mb-2">Prohibited Activities</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Harassment, abuse, or discrimination</li>
                      <li>• Unauthorized access or data scraping</li>
                      <li>• Malware, viruses, or malicious code</li>
                      <li>• False or misleading information</li>
                      <li>• Commercial use without authorization</li>
                    </ul>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Intellectual property infringement</li>
                      <li>• Spam or unsolicited communications</li>
                      <li>• Circumventing security measures</li>
                      <li>• Reverse engineering our systems</li>
                      <li>• Competition or market research</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Our Rights</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the compilation thereof (collectively, "Content") are owned by APAS Labs or our licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">User Content License</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    When you submit, post, or upload content to our Services ("User Content"), you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content in connection with our Services.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <p className="text-xs text-blue-600">
                      <strong>Retention of Rights:</strong> You retain all ownership rights in your User Content. This license allows us to provide and improve our Services while respecting your ownership.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">DMCA Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA). If you believe your work has been infringed, please contact us at <a href="mailto:legal@apaslabs.org" className="text-primary hover:underline">legal@apaslabs.org</a> with detailed information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Terms and Billing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Free and Paid Services</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We offer both free and paid services. Free services are provided "as-is" with no warranty. Paid services include additional features, support, and guarantees as specified in your subscription plan.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Billing Policies</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Subscription fees are billed in advance</li>
                      <li>• Payments are non-refundable except as required by law</li>
                      <li>• Prices may change with 30 days notice</li>
                      <li>• Failed payments may result in service suspension</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Cancellation</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Cancel anytime through your account settings</li>
                      <li>• Service continues until end of billing period</li>
                      <li>• No partial refunds for unused time</li>
                      <li>• Data export available for 30 days post-cancellation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy and Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Data Security</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Industry-standard encryption</li>
                      <li>• Regular security audits</li>
                      <li>• Access controls and monitoring</li>
                      <li>• Employee security training</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Your Rights</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Access your personal data</li>
                      <li>• Correct inaccurate information</li>
                      <li>• Request data deletion</li>
                      <li>• Data portability options</li>
                    </ul>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="/privacy-policy">Read Full Privacy Policy</a>
                </Button>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Disclaimers and Warranties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-amber-600 mb-2">Service Availability</h4>
                  <p className="text-sm text-muted-foreground">
                    Our Services are provided "as-is" and "as-available." We do not guarantee uninterrupted access or error-free operation. We may suspend or modify Services for maintenance, updates, or other operational reasons.
                  </p>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-red-600 mb-2">Professional Advice Disclaimer</h4>
                  <p className="text-sm text-muted-foreground">
                    Our Services provide information and tools for educational and decision-support purposes only. They do not constitute professional engineering, legal, financial, or regulatory advice. Always consult qualified professionals for specific project decisions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Third-Party Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Our Services may include content from third parties, including guild members and external data sources. We do not endorse or guarantee the accuracy of third-party content and are not responsible for any damages arising from its use.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-red-600 mb-2">
                    IMPORTANT LIMITATION
                  </p>
                  <p className="text-xs text-muted-foreground">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL APAS LABS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Damage Cap</h4>
                  <p className="text-sm text-muted-foreground">
                    Our total liability to you for all damages, losses, and causes of action shall not exceed the amount you have paid to us in the twelve (12) months preceding the claim, or $100, whichever is greater.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Exceptions</h4>
                  <p className="text-sm text-muted-foreground">
                    Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle>Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You agree to defend, indemnify, and hold harmless APAS Labs and its officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Your use or misuse of the Services</li>
                  <li>• Your violation of these Terms</li>
                  <li>• Your User Content or submissions</li>
                  <li>• Your violation of any third-party rights</li>
                  <li>• Any illegal or unauthorized activity</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ban className="h-5 w-5 text-primary" />
                  Termination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">By You</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Cancel your account anytime</li>
                      <li>• Delete your User Content</li>
                      <li>• Export your data within 30 days</li>
                      <li>• No termination fees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm">By Us</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Violation of these Terms</li>
                      <li>• Illegal or harmful activity</li>
                      <li>• Non-payment of fees</li>
                      <li>• At our discretion with notice</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-blue-600 mb-2">Effect of Termination</h4>
                  <p className="text-sm text-muted-foreground">
                    Upon termination, your right to use the Services will cease immediately. Provisions that by their nature should survive termination will remain in effect, including intellectual property rights, disclaimers, indemnification, and limitation of liability.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Governing Law and Dispute Resolution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Governing Law</h4>
                  <p className="text-sm text-muted-foreground">
                    These Terms and any disputes arising out of or related to them or the Services shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Dispute Resolution</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-medium">1. Informal Resolution</h5>
                      <p className="text-xs text-muted-foreground">Contact us first at <a href="mailto:legal@apaslabs.org" className="text-primary hover:underline">legal@apaslabs.org</a> to resolve disputes informally.</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">2. Mediation</h5>
                      <p className="text-xs text-muted-foreground">If informal resolution fails, disputes will be resolved through binding mediation in Miami, Florida.</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">3. Jurisdiction</h5>
                      <p className="text-xs text-muted-foreground">Any legal proceedings must be brought in the federal or state courts located in Miami-Dade County, Florida.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* General Provisions */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle>General Provisions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Entire Agreement</h4>
                      <p className="text-xs text-muted-foreground">These Terms constitute the entire agreement between you and us.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Severability</h4>
                      <p className="text-xs text-muted-foreground">If any provision is unenforceable, the remainder will remain in effect.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Waiver</h4>
                      <p className="text-xs text-muted-foreground">Our failure to enforce any right does not waive that right.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Assignment</h4>
                      <p className="text-xs text-muted-foreground">You may not assign these Terms; we may assign them without notice.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Force Majeure</h4>
                      <p className="text-xs text-muted-foreground">We're not liable for delays due to circumstances beyond our control.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Modifications</h4>
                      <p className="text-xs text-muted-foreground">We may modify these Terms with notice; continued use constitutes acceptance.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Legal Department</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Email: <a href="mailto:legal@apaslabs.org" className="text-primary hover:underline">legal@apaslabs.org</a></p>
                      <p>Phone: +1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Mailing Address</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>APAS Labs, Inc.</p>
                      <p>Legal Department</p>
                      <p>Miami, FL 33101</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Response Time:</strong> We will acknowledge legal inquiries within 72 hours and provide substantive responses within 10 business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;