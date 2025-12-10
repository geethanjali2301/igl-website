import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="iGenie Labs — Enterprise Digital Platforms"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground">
              iGenie Labs builds and operates secure, scalable platforms for
              content distribution, metadata systems, commerce and enterprise
              cloud infrastructure — trusted by publishers and libraries.
            </p>

            <div className="mt-4 text-sm text-muted-foreground">
              <div>DRM • Data Privacy • Contract Compliance • Audit-Ready Reporting</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary">
                  Platforms & Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  Technology & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/publishers" className="hover:text-primary">
                  For Publishers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@igenielabs.com" className="hover:text-primary">
                  info@igenielabs.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+17047038060" className="hover:text-primary">
                  +1 704-703-8060
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  3540 Toringdon Way Suite 200 #1043, Charlotte, NC 28277
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <Link to="/publishers" className="text-sm inline-block hover:text-primary">
                Request Publisher Due Diligence Pack
              </Link>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow & Legal</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="iGenie Labs on LinkedIn"
                className="hover:text-primary transition"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground" />
              </a>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <Link to="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link to="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <div>© {new Date().getFullYear()} iGenie Labs. All rights reserved.</div>
          <div className="mt-2">
            Serving publishers, libraries, and digital content organizations with enterprise-grade platforms, security, and compliance.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
