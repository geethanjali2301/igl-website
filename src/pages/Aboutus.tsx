import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            iGenie Labs
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          At iGenie Labs, we are passionate about helping organizations embrace
          the future with AI-driven innovation and digital transformation. Our
          mission is to empower businesses with cutting-edge solutions,
          strategic advisory, and rapid product development to unlock new growth
          opportunities.
        </p>

        {/* Vision & Approach */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be a global leader in AI innovation and digital
                transformation, enabling businesses of all sizes to thrive in
                the new era of technology.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                We combine deep technical expertise, strategic advisory, and
                agile execution to deliver tailored solutions that create real
                business value.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of innovators, strategists, and engineers is
            dedicated to shaping the future of AI and digital transformation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Hari Katukota</h3>
              <p className="text-muted-foreground">Product Advisory</p>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Manju Ratakonda</h3>
              <p className="text-muted-foreground">Technology Advisory</p>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Teja Dandu</h3>
              <p className="text-muted-foreground">Data/ML Advisory</p>
            </CardContent>
          </Card>

          {/* Team Member 4 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Praneel Peruru</h3>
              <p className="text-muted-foreground">India Operations</p>
            </CardContent>
          </Card>

          {/* Team Member 5 */}
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-primary" />
              <h3 className="text-xl font-semibold">Soujanya Suddapalli</h3>
              <p className="text-muted-foreground">US Operations</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
