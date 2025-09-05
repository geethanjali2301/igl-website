import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Music, Workflow, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: MapPin,
      title: "Travel Genie",
      description: "Intelligent travel planning powered by AI to create personalized itineraries, find the best deals, and optimize your journey from start to finish.",
      features: [
        "Smart itinerary generation",
        "Real-time price optimization",
        "Personalized recommendations",
        "Multi-language support"
      ]
    },
    {
      icon: Music,
      title: "Audio Genie",
      description: "Revolutionary audio management system that uses AI to organize, categorize, and enhance your audio content with intelligent search and discovery.",
      features: [
        "Automated audio categorization",
        "AI-powered search",
        "Quality enhancement",
        "Smart playlist creation"
      ]
    },
    {
      icon: Workflow,
      title: "Genie Workflow",
      description: "Streamline your business processes with AI-driven workflow automation that learns from your patterns and optimizes operations in real-time.",
      features: [
        "Process automation",
        "Intelligent routing",
        "Performance analytics",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our AI-Powered{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our suite of innovative AI applications designed to transform 
            how you work, travel, and manage digital content.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <product.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                 <Button 
                    className="w-full group-hover:shadow-glow transition-all duration-300"
                    variant="outline"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button> 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our AI Solutions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us to learn more about our products and how they can transform your business.
          </p>
          <Button size="lg" className="shadow-glow">
            Request Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;