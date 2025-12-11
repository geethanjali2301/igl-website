import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "AI Solutions" },
    { path: "/services", label: "Advisory" },
    { path: "/capabilities", label: "Capabilities" },
    { path: "/aboutus", label: "Company" },
  ];

  // outside click + escape close
  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // close when route changes
  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="iGenie Labs"
              className="h-16 md:h-36 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-underline text-base font-medium transition-colors ${
                  isActive(item.path) ? "active text-blue-600" : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((s) => !s)}
                className={`nav-underline text-base font-medium px-3 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  dropdownOpen ? "active text-blue-600" : "text-gray-700 hover:text-primary"
                }`}
              >
                Library Solutions
                <svg
                  className={`w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg transform transition-all duration-150 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto z-50"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="py-1">
                  <Link
                    to="/library-solutions/boundless"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Boundless
                  </Link>
                  <Link
                    to="/library-solutions/epopup"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Epopup
                  </Link>
                  <Link
                    to="/library-solutions/content-services"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Content Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right-side links */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/publishers" className="nav-underline text-sm font-medium text-gray-700 hover:text-primary">
                For Publishers
              </Link>
              <Link to="/login">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.path) ? "text-blue-600" : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Expand Dropdown */}
              <div className="border rounded-md bg-white">
                <button
                  onClick={() => setDropdownOpen((s) => !s)}
                  className="w-full text-left px-3 py-2 flex items-center justify-between"
                >
                  <span className="text-base font-medium">Library Solutions</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="pl-4 pb-2">
                    <Link
                      to="/library-solutions/boundless"
                      className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Boundless
                    </Link>
                    <Link
                      to="/library-solutions/epopup"
                      className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Epopup
                    </Link>
                    <Link
                      to="/library-solutions/content-services"
                      className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Content Services
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link to="/publishers" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-700 mb-2">
                  For Publishers
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


