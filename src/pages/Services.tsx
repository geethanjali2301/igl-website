import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Globe, Wrench, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Engineering & Governance",
      description:
        "Design and operate resilient data foundations for analytics, reporting, and secure content workflows. We focus on data quality, pipelines, and governance so your systems are reliable and audit-ready.",
      offerings: [
        "Data architecture & warehouse design",
        "Metadata pipelines & catalog integration",
        "Governance & access controls",
        "Real-time analytics & reporting",
      ],
    },
    {
      icon: Globe,
      title: "Cloud & Infrastructure",
      description:
        "Enterprise cloud architecture, multi-region deployments, and high-availability systems built on Azure and AWS. We deliver secure, scalable hosting and disaster recovery plans for publisher workloads.",
      offerings: [
        "Cloud-native architecture (Azure / AWS)",
        "High-availability & disaster recovery",
        "Storage, streaming & CDN strategy",
        "Infrastructure as code & cost optimization",
      ],
    },
    {
      icon: Wrench,
      title: "Product Engineering & Integration",
      description:
        "Build production-grade platforms for content ingestion, catalog management, and commerce. We deliver robust APIs, EDI/FTP integrations, and engineering practices that scale with your business.",
      offerings: [
        "Architecture reviews & platform design",
        "API & integration engineering (EDI, FTP, REST)",
        "Quality, testing & release practices",
        "Onboarding pipelines for publishers",
      ],
    },
    {
      icon: Rocket,
      title: "Release & Reliability Engineering",
      description:
        "Safe, repeatable delivery pipelines and operational practices to keep publisher services available and auditable. We combine CI/CD, observability, and SRE practices to reduce risk and downtime.",
      offerings: [
        "CI/CD & deployment automation",
        "Observability, logging & alerts",
        "Runbooks, SLAs & incident response",
        "Capacity planning & performance tuning",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Security, Compliance & DRM",
      description:
        "Security-first systems engineering for rights protection, privacy, and contract compliance. We implement DRM, encryption, identity controls, and audit-ready reporting for publisher workflows.",
      offerings: [
        "DRM implementation & enforcement",
        "Identity & access management",
        "Encryption & data protection",
        "Audit readiness & contractual compliance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technology & Infrastructure Advisory
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with publishers, libraries, and content platforms to design, build, and operate secure, compliant, and scalable systems — from cloud infrastructure and metadata pipelines to commerce and reporting.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Emphasis on enterprise-grade reliability, DRM and contract compliance, and long-term platform stewardship.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/publishers">
              <Button>For Publishers</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Partner With Us</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Request Platform Overview</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border bg-card shadow-card hover:shadow-lg transition-all duration-300 group w-full max-w-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div
                      aria-hidden
                      className="p-3 rounded-lg bg-primary/10 border border-primary/20"
                    >
                      <service.icon className="h-6 w-6 text-primary" />
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
                      Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, offeringIndex) => (
                        <li
                          key={offeringIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link to="/contact">
                      <Button size="sm">Request Overview</Button>
                    </Link>
                    <Link to="/publishers" className="ml-auto">
                      <Button size="sm" variant="ghost">
                        Publisher Inquiries
                      </Button>
                    </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Engagement Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A pragmatic, evidence-led approach to platform modernization — focused on risk reduction, compliance, and measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Assess current systems, security posture, and publisher requirements.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Architect secure, scalable solutions tailored to content & commerce needs.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Deliver production-ready platforms, integrations, and onboarding pipelines.",
              },
              {
                step: "04",
                title: "Operate",
                desc: "Run, monitor, and evolve platforms with SRE, compliance, and reporting.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to modernize your content infrastructure?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can secure, scale, and simplify your platform operations — with DRM, compliance, and publisher-grade reliability built in.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="shadow-md">Partner With Us</Button>
            </Link>
            <Link to="/publishers">
              <Button size="lg" variant="outline">Request Publisher Due Diligence Pack</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

