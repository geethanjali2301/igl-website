// src/pages/Capabilities.tsx
import { Card, CardContent } from "@/components/ui/card";
import ExpertiseTabs from "@/components/ExpertiseTabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// 👇 Import icons from lucide-react
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

const Capabilities = () => {
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

        <div className="grid md:grid-cols-3 gap-6">
          {/* Analytics Roadmap */}
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">AI & Analytics Roadmap</h3>
              <p className="text-muted-foreground">
                Chart your AI journey with clarity and confidence — from quick wins to enterprise transformation.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>AI & analytics maturity assessments</li>
                <li>Value-driven adoption roadmaps</li>
                <li>AI infusion into business strategy</li>
                <li>Measurable milestones & ROI tracking</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Strategy */}
          <Card>
            <CardContent className="p-6 text-center">
              <Database className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Build a Trusted AI-Ready Data Foundation</h3>
              <p className="text-muted-foreground">
                From governance to real-time pipelines — we make your data trustworthy, scalable, and ready for intelligence.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>AI-ready data strategy & semantic models</li>
                <li>Governance & compliance frameworks</li>
                <li>Data quality, lineage & observability</li>
                <li>Enterprise metadata management for discovery</li>
              </ul>
            </CardContent>
          </Card>

          {/* Platform Strategy */}
          <Card>
            <CardContent className="p-6 text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Design AI-Native Platforms</h3>
              <p className="text-muted-foreground">
                Scalable, cloud-agnostic ecosystems optimized for model training, deployment, and continuous learning.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>AI-native cloud architectures & lakehouse enablement</li>
                <li>MLOps & model lifecycle management</li>
                <li>Scalable inference & hybrid/multi-cloud options</li>
                <li>Platform cost/compute optimization for AI workloads</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
            {/* Responsible AI */}
            <Card>
              <CardContent className="p-6 text-center">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h3 className="text-xl font-semibold mb-2">Responsible AI & Ethics</h3>
                <p className="text-muted-foreground">
                  Ensure trust at scale by embedding fairness, transparency, and compliance across your AI footprint.
                </p>
                <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
                <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                  <li>Ethical AI frameworks & policy design</li>
                  <li>Bias monitoring and mitigation</li>
                  <li>Explainability & model interpretability</li>
                  <li>Governance-ready audits and compliance checks</li>
                </ul>
              </CardContent>
            </Card>

            {/* AI-Powered Decisioning */}
            <Card>
              <CardContent className="p-6 text-center">
                <BrainCircuit className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Decisioning</h3>
                <p className="text-muted-foreground">
                  Reimagine decisions with intelligence — from forecasting to autonomous decision systems.
                </p>
                <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
                <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                  <li>AI-driven forecasting & predictive insights</li>
                  <li>Personalization & recommendation engines</li>
                  <li>Intelligent automation & decisioning workflows</li>
                  <li>Embedded decision engines for real-time action</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

{/* ================= CTA Section ================= */}
      <section className="pt-28 pb-16 text-center">
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

        <div className="grid md:grid-cols-3 gap-6">
          {/* Data Modernization */}
          <Card>
            <CardContent className="p-6 text-center">
              <RefreshCcw className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Modernize Data for AI Agility</h3>
              <p className="text-muted-foreground">
                Transform legacy systems into AI-ready, cloud-native platforms for agility and efficient AI workloads.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>AI-native cloud migration strategies</li>
                <li>Data lakehouse & modern warehouse enablement</li>
                <li>Elastic architectures for training & inference</li>
                <li>Cost-efficient storage & compute optimization</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Foundation */}
          <Card>
            <CardContent className="p-6 text-center">
              <Layers className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Trusted AI-Ready Data Foundation</h3>
              <p className="text-muted-foreground">
                Lay the groundwork for intelligence with standardized models, governance, and quality frameworks.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>AI-quality data & semantic modeling</li>
                <li>Governance & compliance controls</li>
                <li>Data quality, lineage & observability</li>
                <li>Metadata & cataloging for reuse</li>
              </ul>
            </CardContent>
          </Card>

          {/* DataOps */}
          <Card>
            <CardContent className="p-6 text-center">
              <Settings className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Intelligent DataOps</h3>
              <p className="text-muted-foreground">
                Automate pipelines and monitoring with AI-driven DataOps practices to enable continuous learning systems.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>Self-healing, automated data pipelines</li>
                <li>ML-powered monitoring & anomaly detection</li>
                <li>Real-time streaming & event-driven processing</li>
                <li>Scalable DataOps frameworks for rapid AI adoption</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

    {/* ================= CTA Section ================= */}
      <section className="pt-28 pb-16 text-center">
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

        <div className="grid md:grid-cols-3 gap-6">
          {/* Data Science */}
          <Card>
            <CardContent className="p-6 text-center">
              <FlaskConical className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Data Science for Competitive Intelligence</h3>
              <p className="text-muted-foreground">
                Transform raw data into intelligence with predictive, prescriptive and personalization models.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>Predictive & prescriptive modeling for outcomes</li>
                <li>Recommendation engines & personalization</li>
                <li>Advanced statistical & ML techniques</li>
                <li>Experimentation & A/B frameworks for continuous improvement</li>
              </ul>
            </CardContent>
          </Card>

          {/* AI Engineering */}
          <Card>
            <CardContent className="p-6 text-center">
              <Cpu className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Engineer AI for Scale & Trust</h3>
              <p className="text-muted-foreground">
                Move models from prototype to production with reliability, governance, and observability built in.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>MLOps pipelines for CI/CD of models</li>
                <li>Model monitoring, drift detection & retraining</li>
                <li>Responsible AI guardrails & explainability</li>
                <li>Production-grade, high-availability AI architectures</li>
              </ul>
            </CardContent>
          </Card>

          {/* ML Products & Platforms */}
          <Card>
            <CardContent className="p-6 text-center">
              <Box className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Scale Innovation with ML Products & Platforms</h3>
              <p className="text-muted-foreground">
                Accelerate adoption by delivering reusable modules, APIs, and centralized platforms for self-service AI.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>Reusable AI modules & production-ready APIs</li>
                <li>Centralized ML platforms enabling self-service</li>
                <li>Enterprise marketplaces for AI components</li>
                <li>Scalable ecosystems to power multiple use cases</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="pt-28 pb-16 text-center">
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
          We move beyond dashboards. By operationalizing insights into AI-powered decision systems,
          we enable adaptive enterprises that learn and act in real time.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Experience Consulting */}
          <Card>
            <CardContent className="p-6 text-center">
              <UserCheck className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Reimagine Experiences with AI</h3>
              <p className="text-muted-foreground">
                Design AI-powered interactions that personalize journeys and make touchpoints adaptive.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>Personalized customer journeys powered by AI/LLMs</li>
                <li>Intelligent employee assistants & copilots</li>
                <li>Conversational AI: chatbots, voice & multimodal</li>
                <li>Experience analytics for continuous improvement</li>
              </ul>
            </CardContent>
          </Card>

          {/* Application Engineering */}
          <Card>
            <CardContent className="p-6 text-center">
              <AppWindow className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">Engineer Intelligent Applications</h3>
              <p className="text-muted-foreground">
                Build applications with AI at the core — making operations smarter, faster, and more seamless.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>AI-infused workflows & business apps</li>
                <li>Process automation & optimization with intelligence</li>
                <li>Embedded AI in enterprise SaaS & custom apps</li>
                <li>Low-code / no-code accelerators for rapid adoption</li>
              </ul>
            </CardContent>
          </Card>

          {/* Business Intelligence */}
          <Card>
            <CardContent className="p-6 text-center">
              <Activity className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Evolve from BI to AI-Powered Decisioning</h3>
              <p className="text-muted-foreground">
                Move beyond dashboards — operationalize insights into adaptive decision systems.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>AI-driven forecasting & prescriptive analytics</li>
                <li>Decision automation engines</li>
                <li>Real-time performance intelligence (KPIs & alerts)</li>
                <li>Closed-loop systems with learning feedback</li>
              </ul>
            </CardContent>
          </Card>

          {/* MLOps */}
          <Card>
            <CardContent className="p-6 text-center">
              <ServerCog className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2">Operationalize AI with MLOps</h3>
              <p className="text-muted-foreground">
                Automate the ML lifecycle so models remain reliable, ethical, and production-ready.
              </p>
              <h4 className="text-md font-semibold mt-4 mb-2 text-foreground text-left">Outcomes</h4>
              <ul className="text-muted-foreground text-left list-disc list-inside space-y-1">
                <li>Automated pipelines for training, testing & deployment</li>
                <li>Model monitoring, drift detection & retraining workflows</li>
                <li>Compliance-ready governance for AI at scale</li>
                <li>Continuous delivery of AI/ML in production environments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="pt-28 pb-16 text-center">
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
