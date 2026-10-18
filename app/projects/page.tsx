import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `Projects | ${RESUME_DATA.name}`,
  description: "A collection of projects I've worked on.",
};

export default function ProjectsPage() {
  return (
    <main className="container relative mx-auto p-4 md:p-8 print:p-6">
      <section className="mx-auto w-full max-w-3xl bg-background">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground">
              A collection of projects I&#x27;ve worked on.
            </p>
          </div>

          <div className="flex w-full flex-col divide-y divide-border">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
