import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Accelerate with{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          We’d love to connect and explore your AI journey.
        </p>

        {/* Layout with Cards + Map */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6 h-full">
            {/* Address */}
            <Card className="flex-1 shadow-card border-border bg-gradient-card">
              <CardContent className="p-8 text-center flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">📍 Address</h3>
                <p className="text-muted-foreground">
                  3540 Toringdon Way Suite 200 <br />
                  #1043, Charlotte NC 28277 <br />
                  USA
                </p>
              </CardContent>
            </Card>

            {/* Mobile Numbers */}
            <Card className="flex-1 shadow-card border-border bg-gradient-card">
              <CardContent className="p-8 text-center flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">📞 Mobile</h3>
                <p className="text-muted-foreground">
                  +1 704-703-8060
                  </p>
              </CardContent>
            </Card>

            {/* Email Addresses */}
            <Card className="flex-1 shadow-card border-border bg-gradient-card">
              <CardContent className="p-8 text-center flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">✉️ Email</h3>
                <p className="text-muted-foreground">
                  info@igenielabs.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-card border border-border h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d208816.08385325148!2d-80.8971405!3d35.1378791!3m2!1i1024!2i768!4f13.1!2m1!1s3540%20Toringdon%20Way%20Suite%20200%20%231043%20Charlotte%20NC%2028277%20iframe!5e0!3m2!1sen!2sin!4v1756052553146!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-xl shadow-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
