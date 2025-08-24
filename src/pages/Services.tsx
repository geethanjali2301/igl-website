import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Globe, Wrench, Rocket, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Advisory",
      description: "Strategic guidance on data architecture, governance, and analytics to unlock the full potential of your data assets.",
      offerings: [
        "Data strategy development",
        "Architecture design",
        "Governance frameworks",
        "Analytics implementation"
      ]
    },
    {
      icon: Globe,
      title: "Digital Advisory",
      description: "Comprehensive digital transformation consulting to modernize your technology stack and business processes.",
      offerings: [
        "Digital transformation roadmap",
        "Technology assessment",
        "Process optimization",
        "Change management"
      ]
    },
    {
      icon: Wrench,
      title: "Product Engineering Advisor",
      description: "Expert guidance on product development best practices, architecture decisions, and engineering excellence.",
      offerings: [
        "Technical architecture review",
        "Development process optimization",
        "Code quality assessment",
        "Team mentoring"
      ]
    },
    {
      icon: Rocket,
      title: "Rapid Release Management",
      description: "Accelerate your software delivery with optimized CI/CD pipelines and release automation strategies.",
      offerings: [
        "CI/CD pipeline setup",
        "Deployment automation",
        "Release strategy planning",
        "DevOps optimization"
      ]
    },
    {
      icon: Brain,
      title: "AI Advisor",
      description: "Navigate the AI landscape with expert guidance on implementation, ethics, and strategic AI adoption.",
      offerings: [
        "AI strategy development",
        "Implementation roadmap",
        "Ethics and compliance",
        "Model selection and training"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advisory{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with our experts to accelerate your digital transformation journey 
            with strategic guidance and hands-on support across technology, data, and AI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground text-sm">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, offeringIndex) => (
                        <li key={offeringIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* 👇 Updated button wrapped in Link */}
                  <Link to="/contact">
                  <Button 
                  className="w-full group-hover:shadow-glow transition-all duration-300"
                  variant="outline"
                  size="sm"
                  >
                  Get Consultation
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                  </Link>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Advisory Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering maximum value and measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Comprehensive analysis of your current state" },
              { step: "02", title: "Strategy", desc: "Custom roadmap aligned with your goals" },
              { step: "03", title: "Implementation", desc: "Hands-on support and execution" },
              { step: "04", title: "Optimization", desc: "Continuous improvement and refinement" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Transformation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your challenges and create a custom solution that drives real results.
          </p>
          <Button size="lg" className="shadow-glow">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
