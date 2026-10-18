"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { GitPullRequest, GitMerge, ChevronDown, ExternalLink } from "lucide-react";
import { OpenSourceItem } from "@/data/resume";

export function OssAccordion({ items }: { items: OpenSourceItem[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full">
      <div className="flex flex-col w-full">
        {items.map((item, index) => {
          const value = `oss-${index}`;
          const isMerged = item.status === "merged";

          return (
            <AccordionPrimitive.Item
              key={item.prUrl || index}
              value={value}
              className="border-b relative"
            >
              <div className="relative z-10">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex min-w-0 flex-1 items-center justify-between font-medium transition-all [&[data-state=open]_.accordion-icon]:rotate-180 hover:no-underline py-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-left w-full min-w-0 pr-2">
                      <div className="flex min-w-0 shrink-0 items-center gap-2 sm:max-w-[45%]">
                        {isMerged ? (
                          <GitMerge className="h-4 w-4 shrink-0 text-purple-600 dark:text-purple-400" />
                        ) : (
                          <GitPullRequest className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                        )}
                        <span className="sr-only">
                          {isMerged ? "Merged" : "Open"} pull request
                        </span>
                        <span className="truncate font-mono text-sm">{item.repo}</span>
                      </div>
                      <span className="min-w-0 truncate text-sm text-muted-foreground sm:ml-auto md:ml-0">
                        {item.prTitle}
                      </span>
                    </div>
                    <ChevronDown className="accordion-icon h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-4 pt-1 pl-6 pr-2 text-muted-foreground">
                    <p className="text-sm leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="font-mono text-muted-foreground tabular-nums">
                        {item.date}
                      </span>
                      <a
                        href={item.prUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-foreground hover:underline"
                      >
                        View pull request <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </div>
            </AccordionPrimitive.Item>
          );
        })}
      </div>
    </AccordionPrimitive.Root>
  );
}
