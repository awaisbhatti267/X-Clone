import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center px-8 pt-24 text-center">
      <p className="text-[15px] text-x-muted">
        Hmm...this page doesn’t exist. Try searching for something else.
      </p>
      <Link
        href="/explore"
        className="mt-7 rounded-full bg-x-blue px-5 py-2 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
      >
        Search
      </Link>
    </div>
  );
}