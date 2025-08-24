import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Contact from "./pages/Contact"; 
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

// 👇 Import the new service pages
import StrategyAdvisory from "./pages/StrategyAdvisory";
import EngineerData from "./pages/EngineerData";
import DifferentiateAI from "./pages/DifferentiateAI";
import OperationalizeInsights from "./pages/OperationalizeInsights";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />

              {/* 👇 Add service routes here */}
              <Route path="/strategyadvisory" element={<StrategyAdvisory />} />
              <Route path="/engineerdata" element={<EngineerData />} />
              <Route path="/differentiateai" element={<DifferentiateAI />} />
              <Route path="/operationalizeinsights" element={<OperationalizeInsights />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
