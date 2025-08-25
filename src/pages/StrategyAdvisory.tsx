import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useScrollFade from "@/hooks/useScrollFade";

// 👇 Import icons from lucide-react
import { BarChart3, Database, Cloud } from "lucide-react";

const StrategyAdvisory = () => {
  const fadeHeading = useScrollFade(0);
  const fadeSub = useScrollFade(200);
  const fadeCard1 = useScrollFade(200);
  const fadeCard2 = useScrollFade(400);
  const fadeCard3 = useScrollFade(600);
  const fadeBottomText = useScrollFade(800);
  const fadeButton = useScrollFade(1000);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <h1
        ref={fadeHeading.ref}
        style={fadeHeading.style}
        className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent"
      >
        Unlock business value through data-driven strategy
      </h1>

      <p
        ref={fadeSub.ref}
        style={fadeSub.style}
        className="text-center text-muted-foreground max-w-3xl mx-auto mb-12"
      >
        At iGenieLabs, we help organizations define where and how data, AI, and
        analytics can deliver real impact. Our advisory services align
        technology choices with business priorities, ensuring measurable value
        at every stage.
      </p>

      {/* Cards with Icons */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card ref={fadeCard1.ref} style={fadeCard1.style}>
          <CardContent className="p-6 text-center">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">Analytics Roadmap</h3>
            <p className="text-muted-foreground">
              Craft a phased roadmap for AI and analytics adoption — from quick
              wins to enterprise-wide transformation.
            </p>
          </CardContent>
        </Card>

        <Card ref={fadeCard2.ref} style={fadeCard2.style}>
          <CardContent className="p-6 text-center">
            <Database className="w-12 h-12 mx-auto mb-4 text-green-600 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">Data Strategy</h3>
            <p className="text-muted-foreground">
              Establish a trusted data foundation with governance,
              accessibility, and scalability at the core.
            </p>
          </CardContent>
        </Card>

        <Card ref={fadeCard3.ref} style={fadeCard3.style}>
          <CardContent className="p-6 text-center">
            <Cloud className="w-12 h-12 mx-auto mb-4 text-purple-600 animate-spin-slow" />
            <h3 className="text-xl font-semibold mb-2">Platform Strategy</h3>
            <p className="text-muted-foreground">
              Design technology ecosystems that are flexible, cloud-ready, and
              optimized for AI/ML workloads.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom text */}
      <p
        ref={fadeBottomText.ref}
        style={fadeBottomText.style}
        className="text-center text-lg mt-12 text-muted-foreground"
      >
        We partner with you to shape a future-ready strategy where innovation
        meets execution.
      </p>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <Link to="/contact">
          <Button
            ref={fadeButton.ref}
            style={fadeButton.style}
            className="bg-blue-600 hover:bg-blue-700 text-white transform transition-transform hover:scale-105"
          >
            Schedule Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StrategyAdvisory;