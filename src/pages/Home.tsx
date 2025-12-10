// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main id="main" className="min-h-screen bg-[hsl(var(--background))] pt-16">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[hsl(var(--foreground))] leading-tight max-w-3xl">
            Enterprise Digital Platforms for Content, Commerce & Data
          </h1>

          <p className="mt-6 text-lg text-[hsl(var(--muted))] max-w-2xl">
            iGenie Labs builds and operates secure, scalable platforms for content distribution,
            metadata systems, eCommerce, and enterprise cloud infrastructure.
          </p>

          <p className="mt-4 text-sm text-[hsl(var(--muted))]">
            DRM-compliant delivery • Audit-ready reporting • Publisher contract compliance
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center rounded-xl bg-[hsl(var(--primary))] text-white px-5 py-3 text-sm font-semibold shadow-glow">
              Explore Our Platforms
            </Link>

            <Link to="/publishers" className="inline-flex items-center rounded-xl border border-[hsl(var(--border))] bg-white px-5 py-3 text-sm font-medium">
              For Publishers
            </Link>

            <Link to="/contact" className="inline-flex items-center text-sm px-4 py-3">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* What we do — short */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">What we do</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card rounded-xl shadow-card border border-border p-6">
              <h3 className="font-semibold text-lg">Digital Content Platforms</h3>
              <p className="mt-2 text-sm text-muted-foreground">DRM-compliant delivery, controlled lending, and global content pipelines.</p>
            </div>
            <div className="bg-card rounded-xl shadow-card border border-border p-6">
              <h3 className="font-semibold text-lg">Metadata & Catalog Systems</h3>
              <p className="mt-2 text-sm text-muted-foreground">Publisher ingestion, metadata normalization, and catalog APIs.</p>
            </div>
            <div className="bg-card rounded-xl shadow-card border border-border p-6">
              <h3 className="font-semibold text-lg">Ordering & Commerce</h3>
              <p className="mt-2 text-sm text-muted-foreground">Order management, settlements, and audit-ready financial reporting.</p>
            </div>
            <div className="bg-card rounded-xl shadow-card border border-border p-6">
              <h3 className="font-semibold text-lg">Applied AI (Supporting)</h3>
              <p className="mt-2 text-sm text-muted-foreground">Search, metadata enrichment and operations automation as supporting capabilities.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

