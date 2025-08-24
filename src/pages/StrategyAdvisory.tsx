import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // 👈 import Button
import { Link } from "react-router-dom";          // 👈 import Link

const StrategyAdvisory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Unlock business value through data-driven strategy
      </h1>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        At iGenieLabs, we help organizations define where and how data, AI, and analytics can deliver real impact. Our advisory services align technology choices with business priorities, ensuring measurable value at every stage.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Analytics Roadmap</h3>
            <p className="text-muted-foreground">
              Craft a phased roadmap for AI and analytics adoption — from quick wins to enterprise-wide transformation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Data Strategy</h3>
            <p className="text-muted-foreground">
              Establish a trusted data foundation with governance, accessibility, and scalability at the core.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Platform Strategy</h3>
            <p className="text-muted-foreground">
              Design technology ecosystems that are flexible, cloud-ready, and optimized for AI/ML workloads.
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-lg mt-12 text-muted-foreground">
        We partner with you to shape a future-ready strategy where innovation meets execution.
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

export default StrategyAdvisory;
