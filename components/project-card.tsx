"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ProjectItem } from "@/data/resume";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const springConfig = { stiffness: 250, damping: 25 };
  const rotateX = useSpring(rotateXRaw, springConfig);
  const rotateY = useSpring(rotateYRaw, springConfig);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotX}% ${spotY}%, var(--foreground), transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const intensity = 12; // tilt degrees
    rotateYRaw.set((x - 0.5) * intensity);
    rotateXRaw.set((0.5 - y) * intensity);
    spotX.set(x * 100);
    spotY.set(y * 100);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  return (
    <div className="relative py-5">
      <div className="relative z-10">
        <div className="flex flex-row items-center gap-3.5 sm:items-start sm:gap-5">
          {/* 3D Tilt Image Thumbnail */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform,
              transformStyle: "preserve-3d",
            }}
            className="overflow-hidden will-change-transform relative aspect-video w-24 shrink-0 rounded-md bg-muted sm:w-48 border border-border/40 shadow-xs group"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 640px) 12rem, 6rem"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Subtle mouse spotlight overlay */}
            <motion.div
              aria-hidden="true"
              style={{ background: spotlight }}
              className="pointer-events-none absolute inset-0 opacity-15"
            />
          </motion.div>

          {/* Details */}
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                {project.title}
              </h3>
              <div className="flex shrink-0 gap-3 text-[11px] text-muted-foreground sm:text-xs">
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    Live{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>{" "}
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              {project.description}
            </p>
            {project.techStack && project.techStack.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
