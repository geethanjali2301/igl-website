import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Globe, Wrench, Rocket, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Advisory",
      description:
        "Build an AI-ready data foundation. From governance to real-time analytics, we design strategies that unlock insights and fuel intelligence across the enterprise.",
      offerings: [
        "AI-ready data strategy",
        "Intelligent architecture design",
        "Governance frameworks for trust",
        "Analytics for business impact",
      ],
    },
    {
      icon: Globe,
      title: "Digital Advisory",
      description:
        "Redefine digital through AI. We guide modernization of platforms and processes so that every transformation step is powered by intelligence, not just technology.",
      offerings: [
        "AI-infused transformation roadmaps",
        "Technology modernization assessments",
        "Process automation & optimization",
        "Change adoption at scale",
      ],
    },
    {
      icon: Wrench,
      title: "Product Engineering Advisor",
      description:
        "Engineer products with AI at the core. From architecture to agile practices, we ensure engineering excellence that accelerates innovation and market impact.",
      offerings: [
        "AI-first architecture reviews",
        "Development acceleration strategies",
        "Code & quality audits",
        "Team enablement for AI adoption",
      ],
    },
    {
      icon: Rocket,
      title: "Rapid Release Management",
      description:
        "Deliver AI-powered software at speed. We optimize release pipelines with automation and intelligence to achieve faster, safer, and smarter deployments.",
      offerings: [
        "Intelligent CI/CD pipelines",
        "Automated deployment orchestration",
        "AI-enhanced release strategies",
        "DevOps with continuous learning",
      ],
    },
    {
      icon: Brain,
      title: "AI Advisor",
      description:
        "Your trusted partner in AI adoption. From ethical frameworks to model deployment, we design strategies that ensure AI drives sustainable value at scale.",
      offerings: [
        "AI-first business strategy",
        "Implementation & scaling roadmap",
        "Responsible AI & compliance",
        "Model selection, training & tuning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-First{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Advisory Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help organizations embed AI into the heart of their strategy, data, and technology. 
            From vision to execution, our experts co-create solutions that accelerate transformation 
            and deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
<section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-center gap-8">
      {services.map((service, index) => (
        <Card
          key={index}
          className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 group w-full max-w-sm"
        >
          <CardHeader className="pb-4">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
            <p className="text-md text-muted-foreground">
              {service.description}
            </p>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-foreground text-md">
                What We Offer:
              </h4>
              <ul className="space-y-2">
                {service.offerings.map((offering, offeringIndex) => (
                  <li
                    key={offeringIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
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
              Our advisory process is iterative, AI-driven, and outcome-focused — ensuring every engagement creates measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Assess current state and opportunities for AI infusion",
              },
              {
                step: "02",
                title: "Design",
                desc: "Craft AI-first roadmaps aligned with vision & outcomes",
              },
              {
                step: "03",
                title: "Deploy",
                desc: "Execute with hands-on AI, data, and digital expertise",
              },
              {
                step: "04",
                title: "Evolve",
                desc: "Continuously optimize with learning systems and feedback loops",
              },
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
            Ready to Lead with AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            From strategy to execution, we co-create AI-first solutions that future-proof your business and accelerate growth.
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

export default Services;
