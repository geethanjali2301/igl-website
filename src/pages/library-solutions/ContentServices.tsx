import { Link } from "react-router-dom";

const ContentServices = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pt-20 overflow-visible" aria-label="Content Services main">
        <div className="container mx-auto py-10 max-w-4xl px-4">
          {/* Breadcrumbs (with parent) */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/library-solutions" className="hover:text-foreground transition-colors">
              Library Solutions
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Digital Content</span>
          </nav>

          <h1 className="text-3xl font-bold mb-6 text-foreground">Digital Content</h1>

          <section aria-label="About Digital Content" className="mb-8">
            <p className="text-muted-foreground mb-6">
              <strong>LibraryOne</strong> offers a unified digital content platform for public libraries—supporting eBooks, audiobooks,
              magazines, newspapers, and more. Designed to simplify collection management and enhance patron experience, our platform
              provides seamless access on any device.
            </p>
          </section>

          <section aria-label="What We Offer" className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-3">What We Offer</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Extensive collection of eBooks across genres and age groups</li>
              <li>High-quality audiobooks with accessible playback features</li>
              <li>Global news and magazine access through select partners</li>
              <li>Smart recommendations and curated reading lists</li>
              <li>Flexible lending models to suit library budgets</li>
            </ul>
          </section>

          <section aria-label="Benefits for Libraries" className="mb-8">
            <h2 className="text-xl font-semibold mt-6 mb-3">Benefits for Libraries</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Lower operational overhead with automated workflows</li>
              <li>Real-time analytics for circulation and patron engagement</li>
              <li>Customizable content collections</li>
              <li>Accessible reading tools supporting diverse communities</li>
            </ul>
          </section>

          <section aria-label="Contact" className="mt-6">
            <p className="text-muted-foreground mb-4">
              To learn more or request a demo, contact:
              <br />
              <strong className="text-foreground">content@libraryone.com</strong>
            </p>

            <div className="flex flex-wrap gap-3 items-center mt-4">
              <a
                href="mailto:content@libraryone.com?subject=LibraryOne%20Demo%20Request"
                className="inline-block px-4 py-2 rounded-md border border-border bg-background text-sm font-medium hover:bg-gray-50"
                aria-label="Email content team"
              >
                Email Us
              </a>

              <Link
                to="/contact"
                className="inline-block px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:opacity-95"
                aria-label="Request a demo"
              >
                Request a Demo
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContentServices;
