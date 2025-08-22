import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Business with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 
              iGenieLabs empowers organizations with cutting-edge AI solutions, 

              iGenie Labs empowers organizations with cutting-edge AI solutions, 
 
              strategic advisory services, and rapid product development to drive 
              digital transformation and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="group">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose iGenie Labs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine deep technical expertise with strategic vision to deliver 
              transformative AI solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI-First Solutions</h3>
                <p className="text-muted-foreground">
                  Revolutionary AI applications that streamline workflows and enhance user experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Rapid Delivery</h3>
                <p className="text-muted-foreground">
                  Fast-track your digital transformation with our agile development and release management.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategic Advisory</h3>
                <p className="text-muted-foreground">
                  Expert guidance on data strategy, digital transformation, and AI implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our AI solutions and advisory services can accelerate your growth.
          </p>
          <Link to="/login">
            <Button size="lg" className="shadow-glow">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;