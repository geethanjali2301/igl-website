import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileText, ShoppingCart, Server, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      icon: Database,
      title: "Digital Content Platforms",
      description:
        "Enterprise-grade delivery platform for eBooks, audiobooks and digital media with DRM-compliant access, controlled lending and audit-ready distribution workflows.",
      features: [
        "DRM-compliant delivery & controlled lending controls",
        "Streaming + multi-format download support",
        "Entitlement, identity & access management",
        "Global CDN-optimized delivery and caching",
      ],
    },
    {
      icon: FileText,
      title: "Metadata & Catalog Systems",
      description:
        "High-integrity metadata infrastructure for publisher ingestion, enrichment, normalization and multi-channel distribution — built for accuracy and audit-ready compliance.",
      features: [
        "Publisher onboarding & ingestion pipelines",
        "Metadata normalization & automated enrichment",
        "Cover asset processing & quality validation",
        "Catalog feeds & APIs (ONIX, custom formats)",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Ordering & Commerce Platforms",
      description:
        "Secure, high-availability ordering and transaction processing with financial reporting, settlement workflows and full audit logging across publisher and library partners.",
      features: [
        "Order management & fulfillment automation",
        "EDI, API & FTP integrations for retail & libraries",
        "Audit-ready finance, settlement & ledger reports",
        "Pricing, promotions, subscriptions & bundles",
      ],
    },
    {
      icon: Server,
      title: "Cloud & Security Infrastructure",
      description:
        "Multi-region cloud platform with encryption, IAM, observability and disaster-recovery — architected for enterprise resilience, compliance and scale.",
      features: [
        "Azure / AWS multi-region deployments",
        "Identity & access management (IAM)",
        "Encryption at-rest, in-transit, key management",
        "Disaster recovery, HA & observability stack",
      ],
    },
    {
      icon: Cpu,
      title: "Applied AI (Supporting Capability)",
      description:
        "AI-supported enhancements for discovery, enrichment and operational intelligence — delivered as a supplemental capability within the trusted platform ecosystem.",
      features: [
        "Search relevance & discovery optimization",
        "Metadata enrichment & intelligent classification",
        "Operational automation & anomaly detection",
        "Recommendation models for discoverability",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28">

      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Platforms & Products for Content Distribution
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade platforms for secure content delivery, metadata management,
            commerce workflows and resilient cloud infrastructure — built for publishers,
            libraries and global content distributors.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Designed for DRM compliance • Audit-ready operations • Long-term platform stewardship
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/publishers">
              <Button>For Publishers</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Request Platform Overview</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="
                  bg-card rounded-xl shadow-card
                  border border-[hsl(var(--border))]
                  p-6 hover:shadow-glow
                  transition-[var(--transition-smooth)]
                "
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div
                      aria-hidden
                      className="p-3 rounded-lg bg-primary/10 border border-primary/20"
                    >
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <p className="text-md text-muted-foreground">{product.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground text-md">
                      Key Features
                    </h4>

                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us to Modernize Your Content Stack
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Get a technical overview and receive an audit-ready Due Diligence pack —
            including architecture diagrams, security controls, SLAs and integration guides.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="shadow-md">
                Request Platform Overview
              </Button>
            </Link>

            <Link to="/publishers">
              <Button size="lg" variant="outline">
                Get Publisher Due Diligence Pack
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
