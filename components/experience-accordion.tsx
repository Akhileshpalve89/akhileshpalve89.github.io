"use client";

import * as React from "react";
import Image from "next/image";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { WorkExperience } from "@/data/resume";

export function ExperienceAccordion({ work }: { work: WorkExperience[] }) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue="item-0"
      className="w-full space-y-2"
    >
      {work.map((item, index) => {
        const value = `item-${index}`;
        return (
          <AccordionPrimitive.Item
            key={item.company}
            value={value}
            className="border-b last:border-b-0"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="group flex min-w-0 flex-1 items-center justify-between font-medium -mx-2 rounded-lg px-2 py-3 transition-[background-color,box-shadow,transform] duration-300 ease-out hover:bg-muted/35 hover:no-underline focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&[data-state=open]_.accordion-icon]:rotate-180">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full pr-2 gap-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="relative flex overflow-hidden rounded-full h-8 w-8 border shrink-0 bg-muted">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        fill
                        sizes="2rem"
                        className="object-cover"
                      />
                    </span>
                    <div className="flex items-center gap-x-1.5 overflow-hidden min-w-0 flex-1 sm:justify-between">
                      <span className="font-semibold text-base whitespace-nowrap truncate">
                        {item.company}
                      </span>
                      <span className="text-muted-foreground text-xs font-mono sm:text-sm whitespace-nowrap truncate shrink-0">
                        <span aria-hidden="true">/ </span>
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground tabular-nums whitespace-nowrap pl-10 sm:pl-0">
                    {item.start} - {item.end}
                  </div>
                </div>
                <div className="shrink-0 transition-transform duration-200">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-transparent text-muted-foreground transition-[background-color,border-color,color,transform] duration-300 ease-out group-hover:border-border/70 group-hover:bg-background group-data-[state=open]:border-border group-data-[state=open]:bg-muted/70 group-data-[state=open]:text-foreground">
                    <ChevronDown className="accordion-icon h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
                  </div>
                </div>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="pb-4 pt-0">
                <div className="flex flex-col gap-2 pl-2 text-sm text-muted-foreground">
                  {item.badges && item.badges.length > 0 && (
                    <div className="flex sm:hidden gap-1 mb-2">
                      {item.badges.map((badge) => (
                        <div
                          key={badge}
                          className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold border-transparent bg-muted text-foreground text-[10px]"
                        >
                          {badge}
                        </div>
                      ))}
                    </div>
                  )}
                  <ul className="list-disc pl-4 space-y-1.5">
                    {item.description.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed text-foreground/80">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        );
      })}
    </AccordionPrimitive.Root>
  );
}
