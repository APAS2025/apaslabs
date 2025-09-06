import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Accessibility as AccessibilityIcon, 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Mail,
  Calendar,
  Users,
  Settings
} from "lucide-react";

const Accessibility = () => {
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
              <AccessibilityIcon className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              <span className="text-foreground">Accessibility </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Statement
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              APAS Labs is committed to ensuring digital accessibility for all users, including people with disabilities. We strive to provide an inclusive experience that serves everyone in our professional community.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>WCAG 2.1 AA Compliant</span>
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
            
            {/* Our Commitment */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Our Accessibility Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  APAS Labs believes that access to information and technology is a fundamental right. We are committed to providing a website and digital services that are accessible to all users, regardless of their abilities or disabilities.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-primary">
                    <strong>Our Promise:</strong> We continuously work to improve the accessibility of our services and welcome feedback from our community to help us identify areas for improvement.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-sm">Inclusive Design</h4>
                    <p className="text-xs text-muted-foreground">Built with accessibility in mind from the ground up</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-sm">Continuous Improvement</h4>
                    <p className="text-xs text-muted-foreground">Regular audits and updates to enhance accessibility</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-sm">Community Feedback</h4>
                    <p className="text-xs text-muted-foreground">User input drives our accessibility improvements</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Standards Compliance */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Standards and Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Our accessibility efforts are guided by internationally recognized standards:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-green-600 mb-2">WCAG 2.1 Level AA</h4>
                      <p className="text-sm text-muted-foreground">
                        We conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, ensuring broad accessibility across different disabilities and technologies.
                      </p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-blue-600 mb-2">Section 508</h4>
                      <p className="text-sm text-muted-foreground">
                        Our services comply with Section 508 of the Rehabilitation Act, making them accessible to federal employees and members of the public with disabilities.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-purple-600 mb-2">ADA Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        We strive to meet the Americans with Disabilities Act (ADA) requirements for digital accessibility in places of public accommodation.
                      </p>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                      <h4 className="font-medium text-orange-600 mb-2">EN 301 549</h4>
                      <p className="text-sm text-muted-foreground">
                        Our European users benefit from compliance with EN 301 549, the European standard for ICT accessibility.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accessibility Features */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Accessibility Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div>
                  <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Visual Accessibility
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>High Contrast Support:</strong> Color schemes that meet WCAG contrast ratios (4.5:1 for normal text, 3:1 for large text)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Scalable Text:</strong> Text can be enlarged up to 200% without loss of functionality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Alternative Text:</strong> Descriptive alt text for all informative images and graphics</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Color Independence:</strong> Information is not conveyed by color alone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Focus Indicators:</strong> Clear visual focus indicators for keyboard navigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Readable Fonts:</strong> Clear, legible typography optimized for readability</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Keyboard className="h-5 w-5 text-primary" />
                    Keyboard and Motor Accessibility
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Full Keyboard Navigation:</strong> All functionality accessible via keyboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Skip Links:</strong> Shortcuts to main content and navigation areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Logical Tab Order:</strong> Intuitive keyboard navigation sequence</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>No Keyboard Traps:</strong> Users can navigate away from any element</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Timeout Controls:</strong> Users can extend or disable time limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Large Click Targets:</strong> Interactive elements meet minimum size requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Ear className="h-5 w-5 text-primary" />
                    Audio and Cognitive Accessibility
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Screen Reader Support:</strong> Compatible with JAWS, NVDA, VoiceOver, and TalkBack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Semantic HTML:</strong> Proper heading structure and landmarks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Descriptive Labels:</strong> Clear labels and instructions for form controls</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Error Prevention:</strong> Clear error messages and correction suggestions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Consistent Navigation:</strong> Predictable layout and navigation patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Plain Language:</strong> Clear, concise content written for accessibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Device Compatibility */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  Device and Technology Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Our services are designed to work across a wide range of devices and assistive technologies:</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2 text-sm">
                      <Monitor className="h-4 w-4 text-primary" />
                      Desktop & Laptops
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Windows 10+ with Chrome, Firefox, Edge</li>
                      <li>• macOS 10.15+ with Safari, Chrome, Firefox</li>
                      <li>• Linux with Chrome, Firefox</li>
                      <li>• Internet Explorer 11 (limited support)</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2 text-sm">
                      <Smartphone className="h-4 w-4 text-primary" />
                      Mobile Devices
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• iOS 12+ with Safari, Chrome</li>
                      <li>• Android 8.0+ with Chrome, Firefox</li>
                      <li>• Touch-friendly interface design</li>
                      <li>• Portrait and landscape orientations</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium flex items-center gap-2 text-sm">
                      <AccessibilityIcon className="h-4 w-4 text-primary" />
                      Assistive Technologies
                    </h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• JAWS 2019+ (Windows)</li>
                      <li>• NVDA 2019+ (Windows)</li>
                      <li>• VoiceOver (macOS/iOS)</li>
                      <li>• TalkBack (Android)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testing and Monitoring */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Testing and Continuous Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">We maintain accessibility through comprehensive testing and monitoring:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Automated Testing</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• axe-core accessibility testing in CI/CD pipeline</li>
                      <li>• WAVE Web Accessibility Evaluation Tool</li>
                      <li>• Lighthouse accessibility audits</li>
                      <li>• Pa11y automated testing suite</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Manual Testing</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Screen reader testing with NVDA and VoiceOver</li>
                      <li>• Keyboard-only navigation testing</li>
                      <li>• Color contrast verification</li>
                      <li>• User testing with disability community</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="font-medium text-blue-600 mb-2">Third-Party Audits</h4>
                  <p className="text-sm text-muted-foreground">
                    We engage certified accessibility professionals to conduct annual comprehensive audits of our services, ensuring ongoing compliance and identifying areas for improvement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Known Issues */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Known Accessibility Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">We are transparent about areas where our accessibility could be improved:</p>
                
                <div className="space-y-3">
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                    <h4 className="font-medium text-amber-600 mb-2">Complex Data Visualizations</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Some interactive charts and graphs in our labs may have limited screen reader support.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Workaround:</strong> Alternative data tables and textual descriptions are provided.
                      <br />
                      <strong>Timeline:</strong> Enhanced chart accessibility planned for Q2 2024.
                    </p>
                  </div>
                  
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                    <h4 className="font-medium text-amber-600 mb-2">PDF Documents</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Some legacy PDF documents may not be fully accessible.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Workaround:</strong> Contact us for alternative formats.
                      <br />
                      <strong>Timeline:</strong> All PDFs will be remediated by end of 2024.
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-sm text-green-600">
                    <strong>Progress Update:</strong> We regularly update this section as issues are resolved and new ones are identified.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feedback and Support */}
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Accessibility Feedback and Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We welcome feedback about the accessibility of our services. Your input helps us improve the experience for all users.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Report Accessibility Issues</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Email: <a href="mailto:accessibility@apaslabs.org" className="text-primary hover:underline">accessibility@apaslabs.org</a></p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Response time: Within 2 business days</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Request Alternative Formats</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>We can provide content in:</p>
                      <ul className="text-xs list-disc list-inside space-y-1 ml-2">
                        <li>Large print formats</li>
                        <li>Braille (contracted or uncontracted)</li>
                        <li>Audio recordings</li>
                        <li>Electronic text files</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium text-primary mb-2">When Reporting Issues, Please Include:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• The specific page or feature where you encountered the issue</li>
                    <li>• A description of the accessibility barrier</li>
                    <li>• The assistive technology you were using (if applicable)</li>
                    <li>• Your browser and operating system</li>
                    <li>• Any error messages you received</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Legal and Enforcement */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Legal Information and Enforcement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Formal Complaints</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you are not satisfied with our response to your accessibility concern, you may file a complaint with:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium">U.S. Department of Justice</h5>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>Civil Rights Division</p>
                        <p>950 Pennsylvania Avenue, NW</p>
                        <p>Washington, DC 20530-0001</p>
                        <p><a href="https://www.ada.gov" className="text-primary hover:underline">www.ada.gov</a></p>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Office for Civil Rights</h5>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>U.S. Department of Health and Human Services</p>
                        <p>200 Independence Avenue, SW</p>
                        <p>Washington, DC 20201</p>
                        <p><a href="https://www.hhs.gov/ocr" className="text-primary hover:underline">www.hhs.gov/ocr</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Disclaimer</h4>
                  <p className="text-sm text-muted-foreground">
                    While we strive to maintain the highest level of accessibility, the complex nature of some technical content may present challenges. We are committed to working with users to find suitable alternatives and continuously improving our accessibility standards.
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

export default Accessibility;