import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // 👈 import Button
import { Link } from "react-router-dom";          // 👈 import Link

const DifferentiateAI = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Transform ideas into intelligent products with AI/ML
      </h1>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        AI isn’t just about algorithms — it’s about differentiation. At iGenieLabs, we help design, build, and scale AI solutions that create tangible business impact.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">Data Science</h3><p className="text-muted-foreground">Unlock patterns, predictions, and recommendations through advanced statistical and ML modeling.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">AI Engineering</h3><p className="text-muted-foreground">Develop production-grade AI systems with scalable deployment, monitoring, and governance.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">ML Products & Platforms</h3><p className="text-muted-foreground">Create reusable AI modules, APIs, and platforms that accelerate innovation across the enterprise.</p></CardContent></Card>
      </div>

      <p className="text-center text-lg mt-12 text-muted-foreground">
        Our AI-first approach ensures your business leads with innovation while staying grounded in measurable results.
      </p>
       <div className="flex justify-center mt-8">
      <Link to="/contact">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Schedule Consultation
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default DifferentiateAI;
