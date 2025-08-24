import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // 👈 import Button
import { Link } from "react-router-dom";          // 👈 import Link

const OperationalizeInsights = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Turn insights into action across the enterprise
      </h1>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Analytics delivers value only when it’s embedded in decisions and workflows. We bring together design thinking, engineering, and automation to operationalize intelligence.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">Experience Consulting</h3><p className="text-muted-foreground">Design intuitive, AI-powered experiences that improve customer and employee engagement.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">Application Engineering</h3><p className="text-muted-foreground">Build intelligent apps that combine AI with business processes for seamless operations.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">Business Intelligence</h3><p className="text-muted-foreground">Enable real-time dashboards, KPIs, and reporting systems that support everyday decision-making.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">ML Ops</h3><p className="text-muted-foreground">Automate the lifecycle of machine learning models — from training to monitoring — to keep insights production-ready.</p></CardContent></Card>
      </div>

      <p className="text-center text-lg mt-12 text-muted-foreground">
        By embedding intelligence into core operations, we help organizations move from insight to impact at scale.
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

export default OperationalizeInsights;
