import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume";
import { OssAccordion } from "@/components/oss-accordion";

export const metadata: Metadata = {
  title: `Open Source Contributions | ${RESUME_DATA.name}`,
  description: "A record of my upstream contributions to open source projects.",
};

export default function OssPage() {
  return (
    <main className="container relative mx-auto p-4 md:p-8 print:p-6">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-background">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">
            All Open Source Contributions
          </h1>
          <p className="text-muted-foreground text-lg">
            Contributions, features, and fixes merged or proposed to open source repositories.
          </p>
        </div>

        {RESUME_DATA.openSource.length > 0 ? (
          <OssAccordion items={RESUME_DATA.openSource} />
        ) : (
          <div className="rounded-xl border border-dashed border-border/70 p-10 text-center text-sm text-muted-foreground">
            No contributions listed yet.
          </div>
        )}
      </section>
    </main>
  );
}
