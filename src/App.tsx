import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop"; // 👈 Import

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Contact from "./pages/Contact"; 
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

import Publishers from "./pages/Publishers";

import Boundless from "./pages/library-solutions/Boundless";
import Epopup from "./pages/library-solutions/Epopup";
import ContentServices from "./pages/library-solutions/ContentServices";

// 👇 Import the new Capabilities page
import Capabilities from "./pages/Capabilities";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/publishers" element={<Publishers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/capabilities" element={<Capabilities />} />

              {/* library solutions routes — must come BEFORE the catch-all */}
              <Route path="/library-solutions/boundless" element={<Boundless />} />
              <Route path="/library-solutions/epopup" element={<Epopup />} />
              <Route path="/library-solutions/content-services" element={<ContentServices />} />

              {/* Catch-all at the very end */}
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
