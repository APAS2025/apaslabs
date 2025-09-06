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
import Partnerships from "./pages/Partnerships";
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
            <Route path="/partnerships" element={<Partnerships />} />
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
