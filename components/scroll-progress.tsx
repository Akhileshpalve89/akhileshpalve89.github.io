"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollProgressProps {
  sections: string[];
}

export function ScrollProgress({ sections }: { sections: string[] }) {
  const [progress, setProgress] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState(sections[0] || "");
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = Math.min(
          100,
          Math.max(0, (window.scrollY / totalScroll) * 100)
        );
        setProgress(current);
      }

      // Find current section
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionTitle = sections[i];
        const slug = sectionTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        const el = document.getElementById(slug);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionTitle);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Click outside to close
  React.useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const scrollToSection = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(title);
      setIsOpen(false);
    }
  };

  // Circular progress calculation
  const radius = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={containerRef}
      data-slot="scroll-progress"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 print:hidden"
    >
      <div className="relative">
        {/* Pill Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-full border border-border/70 bg-background/85 py-1.5 pl-2.5 pr-4 shadow-lg backdrop-blur-md transition-all hover:border-border hover:bg-background"
        >
          {/* Radial progress icon */}
          <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
            <svg className="h-5 w-5 -rotate-90 transform" viewBox="0 0 20 20">
              <circle
                cx="10"
                cy="10"
                r={radius}
                className="stroke-muted"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="10"
                cy="10"
                r={radius}
                className="stroke-foreground transition-all duration-100 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="min-w-0 max-w-[280px] sm:max-w-[400px] truncate text-sm font-medium leading-5 text-foreground">
            {activeSection || "Table of contents"}
          </span>
        </button>

        {/* Expandable Table of Contents popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[420px] max-h-[360px] overflow-y-auto rounded-2xl border border-border/70 bg-background/95 p-2 shadow-2xl backdrop-blur-md"
            >
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 mb-1">
                Sections
              </div>
              <ul className="flex flex-col gap-1">
                {sections.map((title) => {
                  const isActive = title === activeSection;
                  return (
                    <li key={title}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(title)}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          isActive
                            ? "bg-accent text-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            isActive ? "bg-foreground" : "bg-muted-foreground/40"
                          }`}
                        />
                        <span className="truncate">{title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
