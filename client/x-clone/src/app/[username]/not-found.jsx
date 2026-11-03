"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileNotFound() {
  const pathname = usePathname();
  const username = decodeURIComponent(pathname.slice(1));
  return (
    <div>
      <div className="h-[200px] bg-x-hover" />
      <div className="px-4 pb-8">
        <div className="-mt-16 h-32 w-32 rounded-full border-4 border-x-bg bg-x-border" />
        <p className="mt-3 text-xl font-extrabold">@{username}</p>

        <div className="mx-auto mt-16 max-w-[340px] text-center">
          <h2 className="text-[31px] font-extrabold leading-9">This account doesn’t exist</h2>
          <p className="mt-2 text-[15px] text-x-muted">Try searching for another.</p>
          <Link
            href="/explore"
            className="mt-6 inline-block rounded-full bg-x-blue px-5 py-2 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}