import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background-deep flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background-deep">
            {user && <Navigation />}
            <Routes>
              <Route path="/auth" element={user ? <><Navigation /><Index /></> : <Auth />} />
              <Route path="/admin" element={
                <ProtectedRoute requireAdmin={true}>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="/" element={user ? <Index /> : <Auth />} />
            <Route path="/about" element={user ? <About /> : <Auth />} />
              <Route path="/guild" element={user ? <Guild /> : <Auth />} />
              <Route path="/guild/pfas" element={user ? <PFASGuild /> : <Auth />} />
              <Route path="/guild/climate-resilience" element={user ? <ClimateResilienceGuild /> : <Auth />} />
              <Route path="/guild/finance-roi" element={user ? <FinanceROIGuild /> : <Auth />} />
              <Route path="/guild/ai-data-governance" element={user ? <AIDataGovernanceGuild /> : <Auth />} />
              <Route path="/guild/stormwater-watershed" element={user ? <StormwaterWatershedGuild /> : <Auth />} />
              <Route path="/biscayne-bay-gpt" element={user ? <BiscayneBayGPT /> : <Auth />} />
              <Route path="/droobi" element={user ? <DroobiLanguageLab /> : <Auth />} />
              <Route path="/partnerships" element={user ? <Partnerships /> : <Auth />} />
              <Route path="/solutions" element={user ? <Solutions /> : <Auth />} />
              <Route path="/labs" element={user ? <Labs /> : <Auth />} />
              <Route path="/community" element={user ? <Community /> : <Auth />} />
              <Route path="/support" element={user ? <Support /> : <Auth />} />
              <Route path="/contact" element={user ? <Contact /> : <Auth />} />
              <Route path="/faq" element={user ? <FAQ /> : <Auth />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/sitemap" element={<Sitemap />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {user && <Footer />}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
