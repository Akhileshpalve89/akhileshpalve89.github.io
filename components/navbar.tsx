"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { useCommandMenu } from "./command-menu";

const NAV_ITEMS = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "blogs", href: "/blogs" },
  { name: "oss", href: "/oss" },
];

export function Navbar() {
  const pathname = usePathname();
  const { setOpen } = useCommandMenu();

  return (
    <nav className="sticky top-3 z-50 mx-auto mb-8 flex w-fit items-center gap-0.5 rounded-full border border-border/60 bg-background/80 p-1 backdrop-blur-sm sm:gap-1 sm:p-1.5">
      <div>
        <div
          role="tablist"
          className="inline-flex items-center rounded-full gap-0.5 bg-transparent p-0 sm:gap-1"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <div key={item.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-foreground"
                    style={{ borderRadius: 9999 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 inline-flex items-center justify-center whitespace-nowrap bg-transparent py-1.5 text-sm font-medium outline-none transition-colors rounded-full px-2 sm:px-3.5 ${
                    isActive
                      ? "text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-0.5 h-4 w-px bg-border sm:mx-1" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="hidden h-8 items-center gap-1 rounded-full px-2.5 font-mono text-[11px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
      >
        <span aria-hidden="true">⌘</span>K
      </button>
      <ThemeToggle />
    </nav>
  );
}
