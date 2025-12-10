// src/components/ExpertiseTabs.tsx
import { useEffect, useState } from "react";

const tabs = [
  { id: "strategyadvisory", label: "Strategy Advisory" },
  { id: "engineerdata", label: "Engineer Data" },
  { id: "differentiateai", label: "Differentiate AI" },
  { id: "operationalizeinsights", label: "Operationalize Insights" },
];

const ExpertiseTabs = () => {
  const [active, setActive] = useState<string>(tabs[0].id);

  // Smooth scroll to section and update active tab
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // update active immediately for UX
    setActive(id);
    // update URL hash without jumping
    history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    // Observe sections to update active tab on manual scroll
    const sectionIds = tabs.map((t) => t.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with largest intersectionRatio (most visible)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: `-120px 0px -60% 0px`, // offsets to account for fixed nav + sticky tabs
        threshold: [0.15, 0.4, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    // sticky under navbar: top-28 matches your nav height (h-28)
    <div className="sticky top-28 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Expertise tabs"
          className="flex justify-center"
        >
          <ul className="inline-flex items-center gap-4 py-3">
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <li key={tab.id}>
                  <a
                    href={`#${tab.id}`}
                    onClick={(e) => handleClick(e, tab.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all
                      ${isActive ? "bg-blue-50 text-blue-600 shadow-sm" : "text-gray-600 hover:text-blue-600"}
                      `}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {tab.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ExpertiseTabs;
