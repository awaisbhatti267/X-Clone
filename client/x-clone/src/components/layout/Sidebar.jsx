"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Bell,
  UserPlus,
  MessageCircle,
  Phone,
  CircleSlash2,
  Ellipsis,
} from "lucide-react";
import MoreMenu from "./MoreMenu";

const links = [
  { href: "/", label: "Home", icon: Home, dot: true },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/follow", label: "Follow", icon: UserPlus },
  { href: "/messages", label: "Chat", icon: MessageCircle },
  { href: "/calls", label: "Calls", icon: Phone },
  { href: "/grok", label: "Grok", icon: CircleSlash2 },
];

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 hidden h-screen w-[88px] shrink-0 flex-col items-center px-2 py-1 sm:flex xl:w-[275px] xl:items-start">
      <Link href="/" className="rounded-full p-3 transition-colors hover:bg-x-hover">
        <XLogo />
      </Link>

      <nav className="flex flex-col gap-0.5">
        {links.map(({ href, label, icon: Icon, dot }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-5 rounded-full p-3 text-xl transition-colors hover:bg-x-hover"
            >
              <span className="relative">
                <Icon size={26} fill={active ? "currentColor" : "none"} strokeWidth={active ? 2.5 : 2} />
                {dot && (
                  <span className="absolute -right-0.5 top-0 h-2 w-2 rounded-full bg-x-blue" />
                )}
              </span>
              <span className={`hidden xl:inline ${active ? "font-bold" : ""}`}>{label}</span>
            </Link>
          );
        })}

        <MoreMenu />
      </nav>

      <button className="mt-4 w-12 rounded-full bg-x-white py-3 font-bold text-x-black transition-opacity hover:opacity-90 xl:w-[90%]">
        <span className="hidden xl:inline">Post</span>
        <span className="xl:hidden">+</span>
      </button>

      <button className="mt-auto mb-3 flex w-full items-center gap-3 rounded-full p-3 transition-colors hover:bg-x-hover xl:justify-between">
        <span className="flex items-center gap-3">
          <Image
            src="https://i.pravatar.cc/100?img=12"
            alt="Awais Bhatti"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="hidden text-left leading-5 xl:block">
            <span className="block text-[15px] font-bold">Awais Bhatti</span>
            <span className="block text-[15px] text-x-muted">@awais</span>
          </span>
        </span>
        <Ellipsis size={18} className="hidden xl:block" />
      </button>
    </header>
  );
}