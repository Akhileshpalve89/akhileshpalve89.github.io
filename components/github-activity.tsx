"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DayContribution {
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

const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-foreground/[0.08] dark:bg-foreground/[0.08]",
  1: "bg-emerald-300 dark:bg-emerald-900",
  2: "bg-emerald-400 dark:bg-emerald-700",
  3: "bg-emerald-500 dark:bg-emerald-500",
  4: "bg-emerald-600 dark:bg-emerald-400",
};

export function GitHubActivity({ username }: { username: string }) {
  const [contributions, setContributions] = React.useState<DayContribution[]>([]);
  const [totalCount, setTotalCount] = React.useState<number>(1455);
  const [hoveredDay, setHoveredDay] = React.useState<{
    day: DayContribution;
    x: number;
    y: number;
  } | null>(null);

  React.useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.contributions) {
          setContributions(data.contributions);
          const total =
            data.total?.lastYear ||
            data.contributions.reduce((acc: number, cur: DayContribution) => acc + cur.count, 0);
          setTotalCount(total);
        }
      })
      .catch(() => {
        // Fallback: Generate mock days for display if offline
        const mock: DayContribution[] = [];
        const now = new Date();
        for (let i = 364; i >= 0; i--) {
          const d = new Date(now);
          d.setDate(d.getDate() - i);
          const count = Math.floor(Math.random() * 6);
          const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4;
          mock.push({
            date: d.toISOString().split("T")[0],
            count,
            level,
          });
        }
        setContributions(mock);
      });
  }, [username]);

  // Group contributions into weeks (columns of 7)
  const weeks: DayContribution[][] = React.useMemo(() => {
    if (!contributions.length) return [];
    const result: DayContribution[][] = [];
    let currentWeek: DayContribution[] = [];

    contributions.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      result.push(currentWeek);
    }
    return result;
  }, [contributions]);

  // Derive month labels
  const monthLabels = React.useMemo(() => {
    if (!weeks.length) return [];
    const labels: (string | null)[] = weeks.map(() => null);
    let lastMonth = -1;

    weeks.forEach((week, wIdx) => {
      const firstDay = week[0];
      if (firstDay) {
        const month = parseInt(firstDay.date.split("-")[1], 10) - 1;
        if (month !== lastMonth) {
          labels[wIdx] = MONTH_NAMES[month];
          lastMonth = month;
        }
      }
    });

    return labels;
  }, [weeks]);

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div
      data-slot="github-activity"
      className="relative max-w-full overflow-hidden p-4 rounded-2xl border border-border/60 bg-transparent dark:bg-transparent"
      style={{ width: "100%" }}
    >
      <p className="mb-4 text-base font-medium text-foreground px-1.5">
        {totalCount} contributions in the last year
      </p>

      <div
        data-slot="github-activity-grid"
        role="img"
        aria-label={`${totalCount} contributions`}
        className="relative overflow-x-auto pb-2"
      >
        {/* Months header */}
        <div className="flex justify-center" style={{ gap: 3, marginBottom: 4 }}>
          {monthLabels.map((month, idx) => (
            <div key={idx} className="relative h-3 shrink-0" style={{ width: 11 }}>
              {month && (
                <span className="absolute left-0 top-0 text-[10px] leading-none text-foreground/40 whitespace-nowrap">
                  {month}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Contribution weeks */}
        <div
          className="flex justify-center"
          style={{ gap: 3 }}
          onPointerLeave={() => setHoveredDay(null)}
        >
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col" style={{ gap: 3 }}>
              {week.map((day) => (
                <motion.div
                  key={day.date}
                  onPointerEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredDay({
                      day,
                      x: rect.left + rect.width / 2,
                      y: rect.top,
                    });
                  }}
                  className={`shrink-0 rounded-[2.5px] cursor-pointer transition-transform hover:scale-125 ${
                    LEVEL_CLASSES[day.level] || LEVEL_CLASSES[0]
                  }`}
                  style={{ width: 11, height: 11 }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoveredDay && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              style={{
                position: "fixed",
                left: hoveredDay.x,
                top: hoveredDay.y - 36,
                transform: "translateX(-50%)",
                pointerEvents: "none",
                zIndex: 60,
              }}
              className="rounded-md bg-foreground px-2.5 py-1 text-[11px] font-medium leading-none text-background shadow-md whitespace-nowrap"
            >
              {hoveredDay.day.count === 0
                ? "No contributions"
                : `${hoveredDay.day.count} contribution${
                    hoveredDay.day.count > 1 ? "s" : ""
                  }`}{" "}
              on {formatDate(hoveredDay.day.date)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
