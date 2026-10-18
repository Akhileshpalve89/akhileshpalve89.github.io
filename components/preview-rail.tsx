"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RailItem {
  id: string;
  label: string;
  description?: string;
}

const RAIL_ITEMS: RailItem[] = [
  { id: "intro", label: "Intro", description: "Personal introduction, summary, and links." },
  { id: "experience", label: "Experience", description: "Work history, engineering roles, and achievements." },
  { id: "projects", label: "Projects", description: "Featured applications, developer tools, and products." },
  { id: "open-source", label: "Open Source", description: "Contributions and merged pull requests to open source." },
  { id: "activity", label: "Activity", description: "Yearly GitHub activity and contribution timeline." },
  { id: "blogs", label: "Blogs", description: "Technical write-ups, architecture breakdowns, and thoughts." },
  { id: "skills", label: "Skills", description: "Core technologies, languages, frameworks, and tooling." },
];

export function PreviewRail() {
  const [activeId, setActiveId] = React.useState<string>("intro");
  const [hoveredItem, setHoveredItem] = React.useState<RailItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = RAIL_ITEMS.length - 1; i >= 0; i--) {
        const item = RAIL_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pointer-events-none fixed top-1/2 left-4 z-40 hidden w-[300px] -translate-y-1/2 xl:block 2xl:left-10">
      <div className="isolate relative flex w-full overflow-visible min-h-80">
        <nav
          aria-label="Jump to section"
          style={{ gridTemplateRows: `repeat(${RAIL_ITEMS.length}, 24px)` }}
          className="relative z-10 grid shrink-0 w-12 content-center pointer-events-auto"
        >
          {RAIL_ITEMS.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                data-slot="preview-rail-item"
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                style={{ height: "24px" }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
                onMouseEnter={() => {
                  setHoveredItem(item);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setHoveredIndex(null);
                }}
                className="relative flex text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background h-6 w-12 items-center cursor-pointer group"
              >
                <span
                  data-slot="preview-rail-tick"
                  aria-hidden="true"
                  className={`block bg-current h-0.5 origin-left transition-all duration-200 ${
                    isActive
                      ? "w-12 text-foreground font-semibold"
                      : "w-6 group-hover:w-10 text-muted-foreground/60 group-hover:text-foreground"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Floating preview card on hover */}
        <div
          aria-hidden="true"
          style={{ gridTemplateRows: `repeat(${RAIL_ITEMS.length}, 24px)` }}
          className="pointer-events-none absolute z-50 grid inset-y-0 right-4 left-16 content-center"
        >
          <AnimatePresence>
            {hoveredItem && hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, x: -8, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -8, scale: 0.96 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{
                  gridRowStart: hoveredIndex + 1,
                  alignSelf: "center",
                }}
                className="w-64 -translate-y-1/2 mt-3"
              >
                <div
                  data-slot="preview-rail-card"
                  className="rounded-2xl border border-border bg-card p-4 shadow-lg backdrop-blur-md"
                >
                  <p
                    data-slot="preview-rail-title"
                    className="font-medium text-card-foreground text-sm"
                  >
                    {hoveredItem.label}
                  </p>
                  {hoveredItem.description && (
                    <div
                      data-slot="preview-rail-description"
                      className="mt-1 text-xs leading-5 text-muted-foreground"
                    >
                      {hoveredItem.description}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
