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

      {/* Why Choose iGenie Labs */}
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

      {/* Our Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We help businesses harness the power of AI across strategy, engineering, and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Strategy & Advisory</h3>
              <p className="text-muted-foreground mb-4">
                Analytics roadmap, Data & Platform strategy tailored for business outcomes.
              </p>
              <Link to="/services">
                <Button variant="link" className="text-primary">
                  Know more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Engineer Your Data</h3>
              <p className="text-muted-foreground mb-4">
                Data modernization, foundation, and operations to unlock value.
              </p>
              <Link to="/services">
                <Button variant="link" className="text-primary">
                  Know more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Differentiate with AI/ML</h3>
              <p className="text-muted-foreground mb-4">
                Data science, AI engineering, and ML platforms for innovation.
              </p>
              <Link to="/services">
                <Button variant="link" className="text-primary">
                  Know more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Operationalize Insights</h3>
              <p className="text-muted-foreground mb-4">
                Consulting, application engineering, BI, and MLOps for scale.
              </p>
              <Link to="/services">
                <Button variant="link" className="text-primary">
                  Know more →
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Products</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Explore our innovative AI-driven products designed to transform industries.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Travel Genie */}
      <Card className="shadow-card hover:shadow-glow transition-all">
        <CardContent className="p-6">
         <img
            src="/images/ai-travel-app.png"
            alt="Travel Genie"
            className="rounded-xl mb-6 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">AI Travel App</h3>
          <p className="text-muted-foreground mb-4">
            Intelligent travel planning with personalized recommendations, real-time updates, and seamless booking.
          </p>
          <ul className="text-muted-foreground list-disc list-inside mb-6">
            <li>Smart Itinerary Planning</li>
            <li>Real-time Recommendations</li>
            <li>Price Optimization</li>
            <li>Local Insights</li>
          </ul>
          <Link to="/products">
            <Button className="w-full">View Product</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Audio Genie */}
      <Card className="shadow-card hover:shadow-glow transition-all">
        <CardContent className="p-6">
          <img
            src="/images/ai-audio-library.png"
            alt="AI Audio Library"
            className="rounded-xl mb-6 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">AI Audio Library</h3>
          <p className="text-muted-foreground mb-4">
            Smart audio content management with real-time search, classification, and intelligent tagging.
          </p>
          <ul className="text-muted-foreground list-disc list-inside mb-6">
            <li>Content Recommendation</li>
            <li>Real-time Classification</li>
            <li>Intelligent Tagging</li>
            <li>Seamless Access</li>
          </ul>
          <Link to="/products">
            <Button className="w-full">View Product</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Genie Workflow */}
      <Card className="shadow-card hover:shadow-glow transition-all">
        <CardContent className="p-6">
          <img
            src="/images/ai-workflow-app.png"
            alt="AI Workflow App"
            className="rounded-xl mb-6 w-full h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-3">AI Workflow App</h3>
          <p className="text-muted-foreground mb-4">
            Streamline business processes with intelligent automation, predictive analysis, and adaptive workflows.
          </p>
          <ul className="text-muted-foreground list-disc list-inside mb-6">
            <li>Process Automation</li>
            <li>Predictive Analysis</li>
            <li>Smart Scheduling</li>
            <li>Performance Insights</li>
          </ul>
          <Link to="/products">
            <Button className="w-full">View Product</Button>
          </Link>
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
