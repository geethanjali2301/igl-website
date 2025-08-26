import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-foreground py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/src/assets/logo.png"
                alt="iGenieLabs logo"
                className="h-16 w-auto"
              />
              
            </Link>
            <p className="text-muted-foreground">
              Empowering organizations with AI innovation, strategic advisory,
              and rapid product development to accelerate digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/aboutus" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/login" className="hover:text-primary">Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" /> info@igenielabs.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" /> +1 704-703-8060
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> 3540 Toringdon Way Suite 200 #1043, Charlotte NC 28277
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-border pt-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} iGenieLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
