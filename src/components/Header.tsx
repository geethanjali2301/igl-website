import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * src/components/Header.tsx
 * - Library Solutions dropdown (Boundless, Epopup, Content Services)
 * - Click-to-toggle, closes on outside click / Escape
 * - Desktop + mobile behavior
 * - TypeScript-ready
 */

export default function Header(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const navClass = (isActive: boolean) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "text-white bg-indigo-600" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-indigo-700">
              iGenie Labs
            </Link>

            <nav className="hidden md:flex ml-8 space-x-1 items-center">
              <NavLink to="/" className={({ isActive }) => navClass(isActive)}>
                Home
              </NavLink>

              {/* Library Solutions dropdown (desktop) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((s) => !s)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Library Solutions
                  <svg
                    className={`w-4 h-4 transition-transform ${dropdownOpen ? "transform rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown panel: always in DOM, visibility toggled with classes */}
                <div
                  role="menu"
                  aria-hidden={!dropdownOpen}
                  className={`absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg transform transition-all duration-150
                    ${dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto z-50" : "opacity-0 -translate-y-1 pointer-events-none"}`}
                >
                  <div className="py-1">
                    <NavLink
                      to="/library-solutions/boundless"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"}`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      Boundless
                    </NavLink>

                    <NavLink
                      to="/library-solutions/epopup"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"}`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      Epopup
                    </NavLink>

                    <NavLink
                      to="/library-solutions/content-services"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-700 hover:bg-gray-50"}`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      Content Services
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to="/products" className={({ isActive }) => navClass(isActive)}>
                Products
              </NavLink>

              <NavLink to="/resources" className={({ isActive }) => navClass(isActive)}>
                Resources
              </NavLink>
            </nav>
          </div>

          {/* Right side - simple Login button */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link
                to="/login"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label="Toggle menu"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "block px-3 py-2 rounded-md text-white bg-indigo-600" : "block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
              }
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            {/* Mobile: Library Solutions expandable */}
            <div className="border rounded-md bg-white">
              <button
                onClick={() => setDropdownOpen((s) => !s)}
                className="w-full text-left px-3 py-2 flex items-center justify-between"
                type="button"
              >
                <span>Library Solutions</span>
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="pl-4 pb-2">
                  <NavLink
                    to="/library-solutions/boundless"
                    className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    Boundless
                  </NavLink>
                  <NavLink
                    to="/library-solutions/epopup"
                    className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    Epopup
                  </NavLink>
                  <NavLink
                    to="/library-solutions/content-services"
                    className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    Content Services
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "block px-3 py-2 rounded-md text-white bg-indigo-600" : "block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50")}
              onClick={() => setMobileOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) => (isActive ? "block px-3 py-2 rounded-md text-white bg-indigo-600" : "block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50")}
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </NavLink>

            <Link to="/login" className="block px-3 py-2 rounded-md text-sm text-indigo-600 border border-indigo-600 text-center" onClick={() => setMobileOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
