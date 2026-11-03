"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  CircleEllipsis,
  NotepadText,
  Users,
  BadgeCheck,
  Bookmark,
  Rocket,
  Zap,
  SquareArrowOutUpRight,
  AudioLines,
  Settings,
} from "lucide-react";

const items = [
  { label: "Lists", icon: NotepadText, href: "/lists" },
  { label: "Communities", icon: Users, href: "/communities" },
  { label: "Premium", icon: BadgeCheck, href: "/premium" },
  { label: "History", icon: Bookmark, href: "/bookmarks" },
  { label: "Creator Studio", icon: Rocket, href: "/creator-studio" },
  { label: "Business", icon: Zap, href: "/business" },
  { label: "Ads", icon: SquareArrowOutUpRight, href: "/ads" },
  { label: "Create your Space", icon: AudioLines, href: "/spaces" },
  { label: "Settings and privacy", icon: Settings, href: "/settings" },
];

export default function MoreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-5 rounded-full p-3 text-xl transition-colors hover:bg-x-hover"
      >
        <CircleEllipsis size={26} strokeWidth={open ? 2.5 : 2} />
        <span className={`hidden xl:inline ${open ? "font-bold" : ""}`}>More</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-0 left-0 z-30 w-[300px] overflow-hidden rounded-2xl bg-x-bg py-3 shadow-[0_0_15px_rgba(255,255,255,0.2),0_0_3px_1px_rgba(255,255,255,0.15)]"
        >
          {items.map(({ label, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 px-4 py-3 text-[15px] font-bold transition-colors hover:bg-x-hover"
            >
              <Icon size={20} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}