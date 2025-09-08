// src/pages/AboutUs.tsx
import { Card, CardContent } from "@/components/ui/card";
import hariImg from "@/assets/team/hari.jpg";
import manjuImg from "@/assets/team/manju.jpg";
import tejaImg from "@/assets/team/teja.jpg";
import praneelImg from "@/assets/team/praneel.jpg";
import soujanyaImg from "@/assets/team/soujanya.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About iGenie Labs:{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI at the Core of Everything We Do
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            We believe the future belongs to AI-first enterprises. Our mission is
            to help organizations reimagine strategy, data, and products by
            embedding intelligence at the foundation — creating growth, resilience,
            and impact at scale.
          </p>
        </div>
      </section>

      {/* Vision & Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To lead the AI-first movement worldwide — empowering enterprises
                of all sizes to transform products, processes, and customer
                experiences through intelligence at scale.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                We combine strategy, data, and engineering with an AI-first
                mindset. Every engagement starts with intelligence at the core —
                delivering tailored solutions that move fast, scale seamlessly,
                and drive measurable value.
              </p>
            </CardContent>
          </Card>

          {/* Core Values - centered */}
          <div className="md:col-span-2 flex justify-center">
            <Card className="shadow-card border-border bg-gradient-card inline-block max-w-xl w-full">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-6">Core Values</h2>
                <ul className="space-y-3 text-muted-foreground text-left">
                  <li className="whitespace-nowrap">
                    <strong>AI-First by Design</strong> → Intelligence is the
                    foundation, not an add-on.
                  </li>
                  <li className="whitespace-nowrap">
                    <strong>Speed with Purpose</strong> → Fast delivery,
                    measurable outcomes.
                  </li>
                  <li className="whitespace-nowrap">
                    <strong>Responsible AI</strong> → Ethical, transparent, and
                    compliant innovation.
                  </li>
                  <li className="whitespace-nowrap">
                    <strong>Partnership for Growth</strong> → Co-creating
                    solutions with our clients.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of AI innovators, product leaders, and technologists brings
            together expertise in data, machine learning, engineering, and
            operations. Together, we are shaping the future of AI adoption —
            responsibly, strategically, and at scale.
          </p>
        </div>

        {/* First Row: 3 Members */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <img
                src={hariImg}
                alt="Hari Katukota"
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Hari Katukota</h3>
              <p className="text-muted-foreground">Product Advisory</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <img
                src={manjuImg}
                alt="Manju Ratakonda"
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Manju Ratakonda</h3>
              <p className="text-muted-foreground">Technology Advisory</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <img
                src={tejaImg}
                alt="Teja Dandu"
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Teja Dandu</h3>
              <p className="text-muted-foreground">Data/ML Advisory</p>
            </CardContent>
          </Card>
        </div>

        {/* Second Row: 2 Members Centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <img
                src={praneelImg}
                alt="Praneel Peruru"
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Praneel Peruru</h3>
              <p className="text-muted-foreground">India Operations</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-border">
            <CardContent className="p-6 text-center">
              <img
                src={soujanyaImg}
                alt="Soujanya Suddapalli"
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Soujanya Suddapalli</h3>
              <p className="text-muted-foreground">US Operations</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With decades of combined experience across AI, data platforms, and
            enterprise transformation, our leadership team ensures every client
            engagement is outcome-driven and future-ready.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
