"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, CircleSlash2, Bell, MessageCircle } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: Home, dot: true },
  { href: "/explore", label: "Search", icon: Search },
  { href: "/grok", label: "Grok", icon: CircleSlash2 },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/messages", label: "Chat", icon: MessageCircle },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex h-[53px] items-center justify-around border-t border-x-border bg-x-bg sm:hidden">
      {items.map(({ href, label, icon: Icon, dot }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className="relative flex h-full flex-1 items-center justify-center"
          >
            <Icon size={26} fill={active ? "currentColor" : "none"} strokeWidth={active ? 2.5 : 2} />
            {dot && <span className="absolute left-[54%] top-3 h-2 w-2 rounded-full bg-x-blue" />}
          </Link>
        );
      })}
    </nav>
  );
}