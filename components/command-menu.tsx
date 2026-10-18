"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Home,
  FolderGit2,
  BookOpen,
  GitPullRequest,
  Hash,
  ExternalLink,
  Copy,
  Sun,
  Moon,
  Search,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

interface CommandMenuContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CommandMenuContext = React.createContext<CommandMenuContextType>({
  open: false,
  setOpen: () => {},
});

export const useCommandMenu = () => React.useContext(CommandMenuContext);

export function CommandMenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName))) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const copyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(RESUME_DATA.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleTheme = () => {
    const current = resolvedTheme || theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  const sections = [
    { id: "intro", label: "Intro" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "open-source", label: "Open Source" },
    { id: "activity", label: "Activity" },
    { id: "blogs", label: "Blogs" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in-0 duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/80 bg-popover text-popover-foreground shadow-2xl animate-in zoom-in-95 duration-200">
            <Command
              className="w-full flex flex-col"
              loop
            >
              <div className="flex items-center border-b border-border/60 px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                <Command.Input
                  autoFocus
                  placeholder="Search pages, posts and sections…"
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Command.List className="max-h-[360px] overflow-y-auto p-2 text-sm">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                {/* Go to */}
                <Command.Group
                  heading="Go to"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/"))}
                    className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-muted-foreground" />
                      <span>Home</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Go to page</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/projects"))}
                    className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                      <span>Projects</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Go to page</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/blogs"))}
                    className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>Blogs</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Go to page</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => router.push("/oss"))}
                    className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                      <span>Open Source</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Go to page</span>
                  </Command.Item>
                </Command.Group>

                {/* Jump to section */}
                <Command.Group
                  heading="Jump to section"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  {sections.map((section) => (
                    <Command.Item
                      key={section.id}
                      onSelect={() =>
                        runCommand(() => {
                          router.push(`/#${section.id}`);
                          const el = document.getElementById(section.id);
                          el?.scrollIntoView({ behavior: "smooth" });
                        })
                      }
                      className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-muted-foreground" />
                        <span>{section.label}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Jump to section</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Blog posts */}
                <Command.Group
                  heading="Blog posts"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  {RESUME_DATA.blogs.map((blog) => (
                    <Command.Item
                      key={blog.slug}
                      onSelect={() => runCommand(() => router.push(`/blogs/${blog.slug}`))}
                      className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="truncate">{blog.title}</span>
                      </div>
                      <span className="shrink-0 text-xs text-muted-foreground">Read post</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Elsewhere */}
                <Command.Group
                  heading="Elsewhere"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  {RESUME_DATA.contact.social.map((social) => (
                    <Command.Item
                      key={social.name}
                      onSelect={() =>
                        runCommand(() => {
                          if (social.url.startsWith("mailto:")) {
                            window.location.href = social.url;
                          } else {
                            window.open(social.url, "_blank", "noopener,noreferrer");
                          }
                        })
                      }
                      className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        <span>{social.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {social.url.startsWith("mailto:") ? "mail app" : "new tab"}
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Actions */}
                <Command.Group
                  heading="Actions"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
                >
                  <Command.Item
                    onSelect={() => runCommand(copyEmail)}
                    className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      <Copy className="h-4 w-4 text-muted-foreground" />
                      <span>{copied ? "Copied!" : "Copy email address"}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Copy</span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(toggleTheme)}
                    className="relative flex cursor-pointer select-none items-center justify-between rounded-lg px-2.5 py-2 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <div className="flex items-center gap-2">
                      {(resolvedTheme || theme) === "dark" ? (
                        <Sun className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Moon className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span>
                        {(resolvedTheme || theme) === "dark"
                          ? "Switch to light theme"
                          : "Switch to dark theme"}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">Switch theme</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="border-t border-border/60 px-3 py-2 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="font-mono lowercase tracking-wide">
                  {RESUME_DATA.name}
                </span>
                <span className="font-mono text-[10px]">esc to close</span>
              </div>
            </Command>
          </div>
        </div>
      )}
    </CommandMenuContext.Provider>
  );
}
