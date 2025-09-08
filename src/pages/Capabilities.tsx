// src/pages/Capabilities.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExpertiseTabs from "@/components/ExpertiseTabs";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
// lucide icons
import {
  BarChart3,
  Database,
  Cloud,
  ShieldCheck,
  BrainCircuit,
  RefreshCcw,
  Layers,
  Settings,
  FlaskConical,
  Cpu,
  Box,
  UserCheck,
  AppWindow,
  Activity,
  ServerCog,
} from "lucide-react";

const FeatureList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2 mt-4">
    {items.map((it, i) => (
      <li key={i} className="flex items-center text-sm text-muted-foreground">
        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const Capabilities = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Tabs at the top */}
      <ExpertiseTabs />

      {/* ================= Strategy Advisory ================= */}
      <section id="strategyadvisory" className="scroll-mt-28 py-20">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          AI-First Capabilities to Power Intelligent Enterprises
        </h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          From data to platforms, our capabilities are built AI-first — enabling you to
          design, build, and scale intelligent ecosystems that deliver measurable business
          outcomes.
        </p>

        {/* three-up grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Analytics Roadmap */}
          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">AI & Analytics Roadmap</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Chart your AI journey with clarity and confidence — from quick wins to enterprise transformation.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "AI & analytics maturity assessments",
                "Value-driven adoption roadmaps",
                "AI infusion into business strategy",
                "Measurable milestones & ROI tracking",
              ]} />
            </CardContent>
          </Card>

          {/* Data Strategy */}
          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Database className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Build AI-Ready Data Foundation</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                From governance to real-time pipelines — we make your data trustworthy, scalable, and ready for intelligence.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "AI-ready data strategy & semantic models",
                "Governance & compliance frameworks",
                "Data quality, lineage & observability",
                "Enterprise metadata management for discovery",
              ]} />
            </CardContent>
          </Card>

          {/* Platform Strategy */}
          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Design AI-Native Platforms</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Scalable, cloud-agnostic ecosystems optimized for model training, deployment, and continuous learning.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "AI-native cloud architectures & lakehouse enablement",
                "MLOps & model lifecycle management",
                "Scalable inference & hybrid/multi-cloud options",
                "Platform cost/compute optimization for AI workloads",
              ]} />
            </CardContent>
          </Card>
        </div>

        {/* centered 2-up row */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4 justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2 text-center">Responsible AI & Ethics</CardTitle>
                <p className="text-md text-muted-foreground text-center">
                  Ensure trust at scale by embedding transparency, and compliance across your AI footprint.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <FeatureList items={[
                  "Ethical AI frameworks & policy design",
                  "Bias monitoring and mitigation",
                  "Explainability & model interpretability",
                  "Governance-ready audits and compliance checks",
                ]} />
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4 justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2 text-center">AI-Powered Decisioning</CardTitle>
                <p className="text-md text-muted-foreground text-center">
                  Reimagine decisions with intelligence — from forecasting to autonomous decision systems.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <FeatureList items={[
                  "AI-driven forecasting & predictive insights",
                  "Personalization & recommendation engines",
                  "Intelligent automation & decisioning workflows",
                  "Embedded decision engines for real-time action",
                ]} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-12 pb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Shape Your AI-First Strategy
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Partner with us to design a clear, outcome-driven roadmap that aligns AI investments with business vision.
        </p>
        <Link to="/contact">
          <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
            Define My AI Roadmap
          </Button>
        </Link>
      </section>

      {/* ================= Engineer Data ================= */}
      <section id="engineerdata" className="pt-28 pb-16 scroll-mt-28">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Engineer Data for AI-Readiness
        </h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Your AI is only as strong as your data. We build intelligent, real-time, and
          governed data foundations that fuel trustworthy AI and enterprise-scale insights.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <RefreshCcw className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Modernize Data for AI Agility</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Transform legacy systems into AI-ready, cloud-native platforms for agility and efficient AI workloads.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "AI-native cloud migration strategies",
                "Data lakehouse & modern warehouse enablement",
                "Elastic architectures for training & inference",
                "Cost-efficient storage & compute optimization",
              ]} />
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">AI-Ready Data Foundation</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Lay the groundwork for intelligence with standardized models, governance, and quality frameworks.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "AI-quality data & semantic modeling",
                "Governance & compliance controls",
                "Data quality, lineage & observability",
                "Metadata & cataloging for reuse",
              ]} />
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Intelligent DataOps</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Automate pipelines and monitoring with AI-driven DataOps practices to enable continuous learning systems.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "Self-healing, automated data pipelines",
                "ML-powered monitoring & anomaly detection",
                "Real-time streaming & event-driven processing",
                "Scalable DataOps frameworks for rapid AI adoption",
              ]} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Engineer CTA */}
      <section className="pt-12 pb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Unlock Data Agility and Trust
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We design secure, real-time data ecosystems that accelerate AI adoption and deliver reliable insights at scale.
        </p>
        <Link to="/contact">
          <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
            Engineer My Data for AI
          </Button>
        </Link>
      </section>

      {/* ================= Differentiate AI ================= */}
      <section id="differentiateai" className="pt-28 pb-16 scroll-mt-28">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Differentiate with AI/ML at the Core
        </h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          We don’t just implement models — we help you create competitive advantage by
          embedding intelligence into products, platforms, and decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <FlaskConical className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Data Science for Competitive Intelligence</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Transform raw data into intelligence with predictive, prescriptive and personalization models.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "Predictive & prescriptive modeling for outcomes",
                "Recommendation engines & personalization",
                "Advanced statistical & ML techniques",
                "Experimentation & A/B frameworks",
              ]} />
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Engineer AI for Scale & Trust</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Move models from prototype to production with reliability, governance, and observability built in.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "MLOps pipelines for CI/CD of models",
                "Model monitoring, drift detection & retraining",
                "Responsible AI guardrails & explainability",
                "Production-grade, high-availability AI architectures",
              ]} />
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Box className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Scale Innovation with ML Products & Platforms</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Accelerate adoption by delivering reusable modules, APIs, and centralized platforms for self-service AI.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "Reusable AI modules & production-ready APIs",
                "Centralized ML platforms enabling self-service",
                "Enterprise marketplaces for AI components",
                "Scalable ecosystems to power multiple use cases",
              ]} />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Differentiate CTA */}
      <section className="pt-12 pb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Scale AI from Pilot to Enterprise
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We help you move beyond prototypes — building production-ready AI/ML systems that deliver measurable outcomes at scale.
        </p>
        <Link to="/contact">
          <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
            Scale My AI
          </Button>
        </Link>
      </section>

      {/* ================= Operationalize Insights ================= */}
      <section id="operationalizeinsights" className="pt-28 pb-16 scroll-mt-28">
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Operationalize Insights into Intelligent Action
        </h1>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          We move beyond dashboards. By operationalizing insights into AI-powered decision systems, we enable adaptive enterprises that learn and act in real time.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Reimagine Experiences with AI</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Design AI-powered interactions that personalize journeys and make touchpoints adaptive.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "Personalized customer journeys with AI/LLMs",
                "Intelligent employee assistants & copilots",
                "Conversational AI: chatbots, voice & multimodal",
                "Experience analytics for continuous improvement",
              ]} />
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <AppWindow className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Engineer Intelligent Apps</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Build applications with AI at the core — making operations smarter, faster, and more seamless.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "AI-infused workflows & business apps",
                "Process automation & optimization with intelligence",
                "Embedded AI in SaaS & custom applications",
                "Low-code / no-code accelerators for rapid adoption",
              ]} />
            </CardContent>
          </Card>

          <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4 justify-center">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl mb-2 text-center">Evolve from BI to AI-Powered Decisioning</CardTitle>
              <p className="text-md text-muted-foreground text-center">
                Move beyond dashboards — operationalize insights into adaptive decision systems.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <FeatureList items={[
                "AI-driven forecasting & prescriptive analytics",
                "Decision automation engines",
                "Real-time KPI monitoring & performance alerts",
                "Closed-loop systems with learning feedback",
              ]} />
            </CardContent>
          </Card>
        </div>

        {/* single centered card below */}
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-1/3">
            <Card className="border-border bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4 justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <ServerCog className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2 text-center">Operationalize AI with MLOps</CardTitle>
                <p className="text-md text-muted-foreground text-center">
                  Automate the ML lifecycle so models remain reliable, ethical, and production-ready.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <FeatureList items={[
                  "Automated pipelines for training, testing & deployment",
                  "Model monitoring, drift detection & retraining workflows",
                  "Compliance-ready governance for AI at scale",
                  "Continuous delivery of AI/ML in production",
                ]} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* final CTA */}
      <section className="pt-12 pb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Turn Insights into Intelligent Action
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We embed AI-powered decision systems that adapt, learn, and drive outcomes across your enterprise.
        </p>
        <Link to="/contact">
          <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">
            Operationalize My Insights
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Capabilities;
