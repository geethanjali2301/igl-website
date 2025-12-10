import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Publishers = () => {
  return (
    <main
      // add top padding so fixed header does not cover content
      // pt-20 for small screens, pt-28 for md+ (matches header height)
      className="container mx-auto px-6 pt-20 md:pt-28 pb-12"
      aria-label="Publishers page"
    >
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">For Publishers</h1>
      <p className="text-muted-foreground mb-6">
        iGenie Labs provides publisher-grade infrastructure: DRM-compliant delivery, metadata systems,
        secure onboarding pipelines, and audit-ready reporting built for enterprise distribution.
      </p>

      {/* Feature Grid */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="p-6 bg-card rounded-md border border-border shadow-card">
          <h3 className="font-semibold">Secure Digital Delivery</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Enterprise DRM, controlled access models, entitlements, and global distribution with CDN acceleration.
          </p>
        </div>

        <div className="p-6 bg-card rounded-md border border-border shadow-card">
          <h3 className="font-semibold">Metadata & Catalog Systems</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Publisher ingestion pipelines, metadata enrichment, and guaranteed catalog delivery to library & retail partners.
          </p>
        </div>

        <div className="p-6 bg-card rounded-md border border-border shadow-card">
          <h3 className="font-semibold">Reporting & Settlement</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Audit-ready settlements, financial reconciliation, usage reports, and compliance-based retention.
          </p>
        </div>

        <div className="p-6 bg-card rounded-md border border-border shadow-card">
          <h3 className="font-semibold">Integration & Interoperability</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Partner feeds (ONIX, FTP, API), EDI flows, and real-time catalog sync with library & retail ecosystems.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>DRM &amp; Rights Protection</AccordionTrigger>
            <AccordionContent>
              We support Adobe DRM, LCP, and enforce publisher-defined entitlements. 
              All access events include audit logs retained according to contractual terms.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Data Privacy &amp; Security</AccordionTrigger>
            <AccordionContent>
              Full encryption at rest &amp; in transit, IAM with least-privilege roles, 
              periodic penetration testing, and continuous compliance monitoring.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>SLA &amp; Reporting</AccordionTrigger>
            <AccordionContent>
              99.9% uptime SLA, operational dashboards, monthly reconciliation, 
              and audit-ready financial &amp; usage settlement reporting.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <div className="mt-10">
        <Link to="/contact">
          <Button>Request Publisher Due Diligence Pack</Button>
        </Link>
        <Link to="/contact" className="ml-4">
          <Button variant="outline">Publisher &amp; Library Inquiries</Button>
        </Link>
      </div>
    </main>
  );
};

export default Publishers;
