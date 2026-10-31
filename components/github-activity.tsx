"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DayContribution {
  date: string;
  count: number;
  level: number;
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Clean monochrome / grayscale levels with high-contrast visible inactive cells
const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-neutral-200 dark:bg-neutral-800",
  1: "bg-neutral-400 dark:bg-[#484848]",
  2: "bg-neutral-600 dark:bg-[#787878]",
  3: "bg-neutral-800 dark:bg-[#b0b0b0]",
  4: "bg-neutral-950 dark:bg-white",
};

const CELL_SIZE = 11;
const GAP = Math.max(2, Math.round(CELL_SIZE / 4)); // 3
const EASE_BEZIER = [0.22, 1, 0.36, 1] as const;
const TRANSITION_CELL = { duration: 0.2, ease: EASE_BEZIER };
const TRANSITION_TOOLTIP = { duration: 0.14, ease: EASE_BEZIER };
const TRANSITION_MONTHS = { duration: 0.45, ease: EASE_BEZIER };

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function formatDate(dateStr: string) {
  try {
    return DATE_FORMATTER.format(new Date(`${dateStr}T00:00:00`));
  } catch {
    return dateStr;
  }
}

let cachedContributions: {
  username: string;
  contributions: DayContribution[];
} | null = null;

function generateSkeleton(weeksCount: number = 53): DayContribution[] {
  const totalDays = weeksCount * 7;
  const now = new Date();
  return Array.from({ length: totalDays }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (totalDays - 1 - i));
    return {
      date: d.toISOString().slice(0, 10),
      count: 0,
      level: 0,
    };
  });
}

async function fetchContributions(username: string): Promise<DayContribution[] | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
    if (!res.ok) return null;
    const data = await res.json();
    const raw = data?.contributions ?? [];
    if (!raw.length) return null;

    const firstSunday = raw.findIndex(
      (item: DayContribution) => new Date(`${item.date}T00:00:00Z`).getUTCDay() === 0
    );
    const sliced = raw.slice(firstSunday < 0 ? 0 : firstSunday);
    return sliced.map((item: any) => ({
      date: item.date,
      count: item.count,
      level: Math.min(4, Math.max(0, item.level)),
    }));
  } catch {
    return null;
  }
}

function Tooltip({
  hovered,
  reduceMotion,
}: {
  hovered: { day: DayContribution; x: number; y: number };
  reduceMotion: boolean;
}) {
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const [left, setLeft] = React.useState(hovered.x);

  React.useEffect(() => {
    const halfWidth = (tooltipRef.current?.offsetWidth ?? 0) / 2;
    const padding = 8 + halfWidth;
    setLeft(Math.min(Math.max(hovered.x, padding), window.innerWidth - padding));
  }, [hovered]);

  return createPortal(
    <div
      className="pointer-events-none fixed z-50"
      style={{
        left,
        top: hovered.y,
        transform: "translate(-50%, calc(-100% - 8px))",
      }}
    >
      <motion.div
        ref={tooltipRef}
        className="whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-[11px] font-medium text-background shadow-md"
        initial={!reduceMotion && { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
        transition={reduceMotion ? { duration: 0 } : TRANSITION_TOOLTIP}
      >
        {hovered.day.count === 0
          ? "No contributions"
          : `${hovered.day.count} ${
              hovered.day.count === 1 ? "contribution" : "contributions"
            }`}{" "}
        on {formatDate(hovered.day.date)}
      </motion.div>
    </div>,
    document.body
  );
}

export function GitHubActivity({
  username,
  className,
}: {
  username: string;
  className?: string;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const [mounted, setMounted] = React.useState(false);
  const [contributions, setContributions] = React.useState<DayContribution[]>(() => {
    if (cachedContributions?.username === username) {
      return cachedContributions.contributions;
    }
    return generateSkeleton(53);
  });
  const [hovered, setHovered] = React.useState<{
    day: DayContribution;
    x: number;
    y: number;
  } | null>(null);

  const gridRef = React.useRef<HTMLDivElement>(null);
  const [visibleWeeksCount, setVisibleWeeksCount] = React.useState<number>();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!username) return;
    if (cachedContributions?.username === username) {
      setContributions(cachedContributions.contributions);
      return;
    }

    let isMounted = true;
    fetchContributions(username).then((data) => {
      if (isMounted && data && data.length > 0) {
        cachedContributions = {
          username,
          contributions: data,
        };
        setContributions(data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [username]);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const update = () => {
      setVisibleWeeksCount(Math.max(1, Math.floor((el.clientWidth + GAP) / (CELL_SIZE + GAP))));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const weeks = React.useMemo(() => {
    const result: DayContribution[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
      result.push(contributions.slice(i, i + 7));
    }
    return result;
  }, [contributions]);

  const maxWeeks = 53;
  const totalWeeks = Math.min(weeks.length, maxWeeks);
  const visibleWeeks = React.useMemo(() => {
    return weeks.slice(-Math.min(totalWeeks, visibleWeeksCount ?? totalWeeks));
  }, [weeks, totalWeeks, visibleWeeksCount]);

  const monthLabels = React.useMemo(() => {
    const labels: (string | null)[] = visibleWeeks.map(() => null);
    const getMonthStr = (idx: number) => visibleWeeks[idx]?.[0]?.date.slice(5, 7);
    let startIdx = 0;
    for (let i = 1; i <= visibleWeeks.length; i++) {
      if (i === visibleWeeks.length || getMonthStr(i) !== getMonthStr(startIdx)) {
        if (i - startIdx >= 3) {
          const monthNum = Number(getMonthStr(startIdx)) - 1;
          labels[startIdx] = MONTH_NAMES[monthNum] ?? null;
        }
        startIdx = i;
      }
    }
    return labels;
  }, [visibleWeeks]);

  const totalCount = React.useMemo(
    () => contributions.reduce((acc, cur) => acc + cur.count, 0),
    [contributions]
  );
  const lastYear = Number(contributions.at(-1)?.date.slice(0, 4));
  const year = Number.isFinite(lastYear) ? lastYear : new Date().getFullYear();
  const label = `${totalCount} contributions in ${year}`;

  const monthsDelay = reduceMotion
    ? 0
    : (visibleWeeks.length - 1) * 0.012 + TRANSITION_CELL.duration;

  return (
    <div
      data-slot="github-activity"
      className={cn(
        "relative max-w-full overflow-hidden rounded-2xl border border-border/60 bg-transparent dark:bg-transparent p-4",
        className
      )}
      style={{ width: "100%" }}
    >
      <p className="mb-4 text-base font-medium text-foreground px-1.5">{label}</p>

      <div
        ref={gridRef}
        data-slot="github-activity-grid"
        role="img"
        aria-label={label}
        className="relative"
      >
        {/* Months header */}
        <motion.div
          className="flex justify-center"
          style={{ gap: GAP, marginBottom: GAP }}
          initial={!reduceMotion && { opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ ...TRANSITION_MONTHS, delay: monthsDelay }}
        >
          {monthLabels.map((month, idx) => (
            <div key={idx} className="relative h-3 shrink-0" style={{ width: CELL_SIZE }}>
              {month && (
                <span className="absolute left-0 top-0 text-[10px] leading-none text-muted-foreground whitespace-nowrap">
                  {month}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contribution weeks */}
        <div
          className="flex justify-center overflow-hidden"
          style={{ gap: GAP }}
          onPointerLeave={() => setHovered(null)}
        >
          {visibleWeeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col" style={{ gap: GAP }}>
              {week.map((day) => (
                <motion.div
                  key={day.date}
                  onPointerEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHovered({
                      day,
                      x: rect.left + rect.width / 2,
                      y: rect.top,
                    });
                  }}
                  className={cn(
                    "shrink-0 rounded-[3px] transition-transform hover:scale-125 cursor-pointer",
                    LEVEL_CLASSES[day.level] || LEVEL_CLASSES[0]
                  )}
                  style={{ width: CELL_SIZE, height: CELL_SIZE }}
                  initial={!reduceMotion && { opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    ...TRANSITION_CELL,
                    delay: reduceMotion ? 0 : 0.012 * wIdx,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tooltip Portal */}
        <AnimatePresence>
          {hovered && mounted && (
            <Tooltip key="tooltip" hovered={hovered} reduceMotion={reduceMotion} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
