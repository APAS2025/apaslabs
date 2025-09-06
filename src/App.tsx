import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Guild from "./pages/Guild";
import PFASGuild from "./pages/PFASGuild";
import ClimateResilienceGuild from "./pages/ClimateResilienceGuild";
import FinanceROIGuild from "./pages/FinanceROIGuild";
import AIDataGovernanceGuild from "./pages/AIDataGovernanceGuild";
import StormwaterWatershedGuild from "./pages/StormwaterWatershedGuild";
import BiscayneBayGPT from "./pages/BiscayneBayGPT";
import DroobiLanguageLab from "./pages/Droobi";
import Partnerships from "./pages/Partnerships";
import Solutions from "./pages/Solutions";
import Labs from "./pages/Labs";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background-deep">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
        <Route path="/guild" element={<Guild />} />
        <Route path="/guild/pfas" element={<PFASGuild />} />
        <Route path="/guild/climate-resilience" element={<ClimateResilienceGuild />} />
        <Route path="/guild/finance-roi" element={<FinanceROIGuild />} />
        <Route path="/guild/ai-data-governance" element={<AIDataGovernanceGuild />} />
        <Route path="/guild/stormwater-watershed" element={<StormwaterWatershedGuild />} />
            <Route path="/biscayne-bay-gpt" element={<BiscayneBayGPT />} />
            <Route path="/droobi" element={<DroobiLanguageLab />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
