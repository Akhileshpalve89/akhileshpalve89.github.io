import React from "react";

export function SocialIcon({ name }: { name: string }) {
  const iconName = name.toLowerCase();

  if (iconName === "x" || iconName === "twitter") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-10 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-foreground group-focus-visible:text-foreground h-[18px] w-[18px]"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    );
  }

  if (iconName === "linkedin") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-10 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-foreground group-focus-visible:text-foreground h-[18px] w-[18px]"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zm1.782 13.019H3.555V9h3.564v11.452z"></path>
      </svg>
    );
  }

  if (iconName === "github") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="relative z-10 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-foreground group-focus-visible:text-foreground h-[18px] w-[18px]"
        fill="currentColor"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
      </svg>
    );
  }

  if (iconName === "email" || iconName === "mail") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-10 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-foreground group-focus-visible:text-foreground h-[18px] w-[18px]"
      >
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
      </svg>
    );
  }

  if (iconName === "medium") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-10 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-foreground group-focus-visible:text-foreground h-[18px] w-[18px]"
      >
        <path d="M13.54 12a6.77 6.77 0 11-13.54 0 6.77 6.77 0 0113.54 0zM20.96 12c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"></path>
      </svg>
    );
  }

  if (iconName === "pexels") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        className="relative z-10 text-muted-foreground transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-foreground group-focus-visible:text-foreground h-[18px] w-[18px]"
      >
        <path d="M5 2.6h7.8a6.2 6.2 0 010 12.4H9.6v6.4H5V2.6zm4.6 4h3.2a2.2 2.2 0 010 4.4H9.6V6.6z"></path>
      </svg>
    );
  }

  return null;
}

export function SocialButton({
  name,
  url,
}: {
  name: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target={url.startsWith("mailto:") ? "_self" : "_blank"}
      rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group relative flex h-9 w-9 items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="sr-only">{name}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 scale-90 rounded-lg bg-foreground/[0.08] opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
      ></span>
      <SocialIcon name={name} />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-7 left-1/2 z-20 -translate-x-1/2 -translate-y-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium leading-none text-background opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 print:hidden"
      >
        {name}
        <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-foreground"></span>
      </span>
    </a>
  );
}
