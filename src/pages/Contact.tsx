import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Get in{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Touch
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Reach out to us through any of the following channels. 
          We’d love to hear from you!
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
                  iGenie Labs <br />
                  Hyderabad, Telangana <br />
                  India
                </p>
              </CardContent>
            </Card>

            {/* Mobile Numbers */}
            <Card className="flex-1 shadow-card border-border bg-gradient-card">
              <CardContent className="p-8 text-center flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">📞 Mobile</h3>
                <p className="text-muted-foreground">
                  +91-9876543210 <br />
                  +91-9123456780
                </p>
              </CardContent>
            </Card>

            {/* Email Addresses */}
            <Card className="flex-1 shadow-card border-border bg-gradient-card">
              <CardContent className="p-8 text-center flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3">✉️ Email</h3>
                <p className="text-muted-foreground">
                  contact@igenielabs.com <br />
                  support@igenielabs.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-card border border-border h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.56413992804!2d78.382267!3d17.447753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7ef1e5d11%3A0xdda52bcd3f3d2d0!2sHitech%20City%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1674748162359!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
