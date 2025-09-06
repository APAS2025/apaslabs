import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  AlertTriangle, 
  CheckCircle,
  Mail,
  Calendar,
  FileText
} from "lucide-react";

const PrivacyPolicy = () => {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="text-foreground">Privacy </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Your privacy and data security are fundamental to our mission. This policy explains how we collect, use, and protect your information.
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
            
            {/* Introduction */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Our Commitment to Your Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  APAS Labs, Inc. ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our platforms.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-primary">
                    <strong>Important:</strong> By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, do not use our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-lg">1. Personal Information You Provide</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Account Information:</strong> Name, email address, phone number, organization, professional title, and credentials when you register for our services.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Communication Data:</strong> Messages, feedback, and correspondence you send to us.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Guild Participation:</strong> Professional expertise, experience level, contributions to knowledge bases, and collaborative content.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party payment processors).</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 text-lg">2. Information Collected Automatically</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Usage Data:</strong> Information about how you use our website and services, including pages visited, features used, and time spent.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers, and technical specifications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Location Data:</strong> General geographic location based on IP address (not precise location tracking).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Cookies and Tracking:</strong> We use cookies and similar technologies for authentication, preferences, analytics, and security.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">We use the information we collect for the following purposes:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Service Operations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Provide and maintain our services</li>
                      <li>• Process transactions and payments</li>
                      <li>• Authenticate users and prevent fraud</li>
                      <li>• Provide customer support</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Communication</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Send service-related notifications</li>
                      <li>• Respond to inquiries and requests</li>
                      <li>• Send newsletters (with consent)</li>
                      <li>• Notify about policy changes</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Improvement & Analytics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Analyze usage patterns and performance</li>
                      <li>• Improve our services and user experience</li>
                      <li>• Develop new features and capabilities</li>
                      <li>• Conduct research and analytics</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Legal & Security</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comply with legal obligations</li>
                      <li>• Enforce our terms of service</li>
                      <li>• Protect against security threats</li>
                      <li>• Prevent misuse of our services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-red-600">
                    <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
                  </p>
                </div>
                
                <p className="text-muted-foreground">We may share your information only in the following limited circumstances:</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">1. Service Providers</h4>
                    <p className="text-sm text-muted-foreground">We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, provided they agree to keep this information confidential.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">2. Legal Requirements</h4>
                    <p className="text-sm text-muted-foreground">We may disclose your information when required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">3. Business Transfers</h4>
                    <p className="text-sm text-muted-foreground">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to the same privacy protections.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">4. Guild Participation</h4>
                    <p className="text-sm text-muted-foreground">When you participate in guild activities, your professional contributions may be shared within the relevant guild community, but personal contact information remains private.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Depending on your location, you may have the following rights regarding your personal information:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Access</h4>
                        <p className="text-xs text-muted-foreground">Request a copy of your personal information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Correction</h4>
                        <p className="text-xs text-muted-foreground">Update or correct inaccurate information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Deletion</h4>
                        <p className="text-xs text-muted-foreground">Request deletion of your personal information</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Portability</h4>
                        <p className="text-xs text-muted-foreground">Receive your data in a portable format</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Opt-out</h4>
                        <p className="text-xs text-muted-foreground">Withdraw consent for marketing communications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sm">Restrict Processing</h4>
                        <p className="text-xs text-muted-foreground">Limit how we process your information</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>To exercise these rights,</strong> please contact us at <a href="mailto:privacy@apaslabs.org" className="text-primary hover:underline">privacy@apaslabs.org</a>. We will respond to your request within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Data Security and Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Security Measures</h4>
                  <p className="text-sm text-muted-foreground mb-3">We implement industry-standard security measures to protect your information:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• End-to-end encryption for data transmission</li>
                    <li>• Secure data storage with encryption at rest</li>
                    <li>• Regular security audits and vulnerability assessments</li>
                    <li>• Access controls and employee training</li>
                    <li>• Multi-factor authentication requirements</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Data Retention</h4>
                  <p className="text-sm text-muted-foreground">We retain your information only as long as necessary to provide our services and comply with legal obligations. Specific retention periods:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                    <li>• Account information: Until account closure + 7 years</li>
                    <li>• Usage data: 2 years from collection</li>
                    <li>• Communication records: 3 years</li>
                    <li>• Payment information: As required by law</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  International Data Transfers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Standard Contractual Clauses approved by regulatory authorities</li>
                  <li>• Adequacy decisions by relevant data protection authorities</li>
                  <li>• Privacy Shield frameworks where applicable</li>
                  <li>• Other appropriate safeguards as required by law</li>
                </ul>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our services are designed for professional use and are not intended for children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information immediately.</p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle>Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Posting the new Privacy Policy on this page</li>
                  <li>• Updating the "Last Updated" date</li>
                  <li>• Sending you an email notification for material changes</li>
                  <li>• Displaying a prominent notice on our website</li>
                </ul>
                <p className="text-sm text-muted-foreground">Your continued use of our services after any changes constitutes acceptance of the new Privacy Policy.</p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Privacy Officer</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Email: <a href="mailto:privacy@apaslabs.org" className="text-primary hover:underline">privacy@apaslabs.org</a></p>
                      <p>Phone: +1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Mailing Address</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>APAS Labs, Inc.</p>
                      <p>Privacy Department</p>
                      <p>Miami, FL 33101</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Response Time:</strong> We will respond to privacy-related inquiries within 72 hours and resolve issues within 30 days.
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

export default PrivacyPolicy;