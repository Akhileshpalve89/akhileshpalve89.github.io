"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Penetration Tester",
  "VAPT Specialist",
  "SOC Analyst",
  "Security Researcher",
  "CTF Player",
];

const TYPING_SPEED = 70;   // ms per character typed
const DELETING_SPEED = 40; // ms per character deleted
const PAUSE_AFTER_TYPE = 1800; // ms to hold the completed word
const PAUSE_AFTER_DELETE = 400; // ms to pause before typing next

export function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isDeleting && displayed === current) {
      // Fully typed — pause, then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      // Fully deleted — pause, move to next role
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setDisplayed((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span className="text-emerald-400">{displayed}</span>
      <span
        className="inline-block w-[2px] h-[1.1em] bg-emerald-400 ml-0.5 align-middle animate-cursor-blink"
        aria-hidden="true"
      />
    </span>
  );
}

