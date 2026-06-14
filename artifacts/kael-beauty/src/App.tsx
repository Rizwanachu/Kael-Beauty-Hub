import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { PageTransition } from "@/components/layout/PageTransition";

import NotFound from "@/pages/not-found";
// Assume pages exist, we will create them
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Reviews from "@/pages/Reviews";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-[72px]">
                <Router />
              </main>
              <Footer />
              <WhatsAppButton />
              <ScrollToTopButton />
            </div>
          </WouterRouter>
          <Toaster position="top-right" />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
