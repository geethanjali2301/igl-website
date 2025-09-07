import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Hero Section */}
  <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-hero opacity-50" />
  <div className="relative max-w-7xl mx-auto text-center">
    <div className="mb-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
        Reimagine Your Business with{" "}
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          AI at the Core
        </span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
        We help enterprises go beyond digital transformation by embedding intelligence into every product, process, and experience. From strategy 
        to scalable AI platforms, we accelerate innovation and deliver measurable impact.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/products">
          <Button size="lg" className="group">
            Explore AI Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link to="/services">
          <Button variant="outline" size="lg">
            See How We Help
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
              Why iGenie Labs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-first expertise. Strategic vision. Real outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI-First Solutions</h3>
                <p className="text-muted-foreground">
                  We design solutions where AI is not an add-on but the foundation — creating smarter products, hyper-personalized experiences, and intelligent ecosystems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Rapid Delivery</h3>
                <p className="text-muted-foreground">
                  With our agile AI delivery model, you see working prototypes in weeks, not months. Speed to value without sacrificing scale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategic Advisory</h3>
                <p className="text-muted-foreground">
                  Our experts blend strategy and execution, ensuring AI investments deliver measurable ROI tied to your core business goals.
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
              We help businesses harness the full power of AI and data — building intelligent capabilities that drive measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Strategy & Advisory</h3>
              <p className="text-muted-foreground mb-4">
                Design AI roadmaps that connect vision to measurable business outcomes.
              </p>
              <Link to="/strategyadvisory">
                <Button variant="link" className="text-primary">
                  Learn more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Engineer Your Data</h3>
              <p className="text-muted-foreground mb-4">
                Build AI-ready data platforms with governance, scalability, and real-time access.
              </p>
              <Link to="/engineerdata">
                <Button variant="link" className="text-primary">
                  Learn more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Differentiate AI-ML</h3>
              <p className="text-muted-foreground mb-4">
                Create breakthrough products and services with AI/ML at the core.
              </p>
              <Link to="/DifferentiateAI">
                <Button variant="link" className="text-primary">
                  Learn more →
                </Button>
              </Link>
            </Card>

            <Card className="p-8 text-center shadow-card hover:shadow-glow transition-all">
              <h3 className="text-xl font-semibold mb-4">Operationalize Insights</h3>
              <p className="text-muted-foreground mb-4">
                Turn analytics into action by embedding AI into everyday decisions and workflows.
              </p>
              <Link to="/operationalizeinsights">
                <Button variant="link" className="text-primary">
                  Learn more →
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
                  Personalized travel powered by AI — plan smarter, save money, and unlock seamless journeys.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>AI-driven itinerary creation</li>
                  <li>Dynamic price intelligence</li>
                  <li>Personalized travel insights</li>
                  <li>Global multi-language support</li>
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
                  Turn chaos into clarity. AI organizes, enhances, and surfaces the right audio content instantly.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Automatic content tagging & categorization</li>
                  <li>Semantic AI-powered search</li>
                  <li>Studio-grade audio enhancement</li>
                  <li>Context-aware playlist generation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Workflow Genie */}
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
                  <h3 className="text-xl font-semibold">Workflow Genie</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Let AI handle the busy work. Automate, optimize, and scale business processes effortlessly.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>End-to-end process automation</li>
                  <li>Adaptive Intelligent routing</li>
                  <li>Real-time Performance insights</li>
                  <li>Seamless integrations with enterprise tools</li>
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
            Ready to Lead in the AI Economy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you’re just starting or scaling enterprise-wide, we partner with you to make AI your competitive edge.
          </p>
          <Link to="/contact">
            <Button size="lg" className="shadow-glow">
              Start Your AI Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
