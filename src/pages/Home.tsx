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
                  Build smarter products and experiences with AI.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Rapid Delivery</h3>
                <p className="text-muted-foreground">
                  Agile execution for faster time-to-market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategic Advisory</h3>
                <p className="text-muted-foreground">
                  Align AI with business outcomes.
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
              Explore how we help businesses harness AI and data.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Strategy & Advisory</h3>
              <p className="text-muted-foreground mb-4">
                Roadmaps & platform strategies.
              </p>
              <Link to="/strategyadvisory">
                <Button variant="link" className="text-primary">
                  Know more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Engineer Your Data</h3>
              <p className="text-muted-foreground mb-4">
                Modernize and scale your data.
              </p>
              <Link to="/engineerdata">
                <Button variant="link" className="text-primary">
                  Know more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Differentiate AI-ML</h3>
              <p className="text-muted-foreground mb-4">
                Create value with AI & ML.
              </p>
              <Link to="/DifferentiateAI">
                <Button variant="link" className="text-primary">
                  Know more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Operationalize Insights</h3>
              <p className="text-muted-foreground mb-4">
                Scale analytics & AI in workflows.
              </p>
              <Link to="/operationalizeinsights">
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
                <div className="flex items-center mb-4">
                  <span className="h-10 w-10 text-primary mr-3">
                    {/* Replace with icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2C8.134 2 5 5.134 5 9c0 4.418 7 13 7 13s7-8.582 7-13c0-3.866-3.134-7-7-7z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold">Travel Genie</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Intelligent travel planning powered by AI to create personalized itineraries, find the best deals, and optimize your journey.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Smart itinerary generation</li>
                  <li>Real-time price optimization</li>
                  <li>Personalized recommendations</li>
                  <li>Multi-language support</li>
                </ul>
              </CardContent>
            </Card>

            {/* Audio Genie */}
            <Card className="shadow-card hover:shadow-glow transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="h-10 w-10 text-primary mr-3">
                    {/* Replace with icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6h13M9 6L5 9m0 6l4 3"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold">Audio Genie</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Revolutionary audio management system that uses AI to organize, categorize, and enhance your audio content.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Automated audio categorization</li>
                  <li>AI-powered search</li>
                  <li>Quality enhancement</li>
                  <li>Smart playlist creation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Genie Workflow */}
            <Card className="shadow-card hover:shadow-glow transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="h-10 w-10 text-primary mr-3">
                    {/* Replace with icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-semibold">Genie Workflow</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Streamline your business processes with AI-driven workflow automation that learns from your patterns.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Process automation</li>
                  <li>Intelligent routing</li>
                  <li>Performance analytics</li>
                  <li>Custom integrations</li>
                </ul>
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
          <Link to="/contact">
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
