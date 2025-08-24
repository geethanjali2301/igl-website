import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // 👈 import Button
import { Link } from "react-router-dom";          // 👈 import Link

const EngineerData = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
        Build modern data foundations that scale with your business
      </h1>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        AI innovation begins with the right data. We enable enterprises to modernize legacy environments, engineer reliable pipelines, and establish resilient data platforms.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">Data Modernization</h3><p className="text-muted-foreground">Upgrade legacy systems to cloud-native platforms for agility and cost-efficiency.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">Data Foundation</h3><p className="text-muted-foreground">Standardize data models, governance practices, and quality frameworks to support advanced analytics.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-semibold mb-2">Data Operations</h3><p className="text-muted-foreground">Automate pipelines and monitoring to ensure reliable, real-time, and scalable data flows.</p></CardContent></Card>
      </div>

      <p className="text-center text-lg mt-12 text-muted-foreground">
        With a strong data backbone, your organization is ready to power the next generation of AI-driven insights.
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

export default EngineerData;
