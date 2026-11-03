import Image from "next/image";
import { Search, BadgeCheck, Ellipsis } from "lucide-react";

const trends = [
  { id: 1, tag: "#BoothKoIzzatDo", meta: "Only on X · Trending" },
  { id: 2, tag: "#PakVsEng", meta: "Sports · Trending" },
  { id: 3, tag: "#BudgetDebate", meta: "Only on X · Trending" },
  { id: 4, tag: "#NextJS", meta: "Technology · Trending" },
];

const suggestions = [
  { id: 1, name: "Bangladesh Cricket", username: "BCBtigers", avatar: "https://i.pravatar.cc/100?img=15" },
  { id: 2, name: "Tehreek-e-Insaf", username: "InsafPK", avatar: "https://i.pravatar.cc/100?img=52" },
  { id: 3, name: "Babar Azam", username: "babarazam258", avatar: "https://i.pravatar.cc/100?img=60" },
];

const footerLinks = ["Terms", "Privacy", "Cookies", "Accessibility", "Ads Info", "More ···"];

function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-x-border">
      <h2 className="px-4 py-3 text-xl font-extrabold">{title}</h2>
      {children}
    </section>
  );
}

export default function RightPanel() {
  return (
    <aside className="sticky top-0 hidden max-h-screen w-[350px] shrink-0 flex-col gap-4 self-start overflow-y-auto px-6 pb-4 [scrollbar-width:none] lg:flex">
      {/* Search */}
      <div className="sticky top-0 z-10 bg-x-bg pb-1 pt-1">
        <label className="flex items-center gap-3 rounded-full border border-x-border px-4 py-3 text-x-muted focus-within:border-x-blue">
          <Search size={18} />
          <input
            placeholder="Search"
            className="w-full bg-transparent text-[15px] text-x-text outline-none placeholder:text-x-muted"
          />
        </label>
      </div>

      {/* Premium */}
      <section className="rounded-2xl border border-x-border p-4">
        <h2 className="mb-1 text-xl font-extrabold">Subscribe to Premium</h2>
        <p className="mb-3 text-[15px] leading-5">
          Get rid of ads, see your analytics, boost your replies and unlock 20+ features.
        </p>
        <button className="rounded-full bg-x-blue px-4 py-2 text-[15px] font-bold text-white transition-opacity hover:opacity-90">
          Subscribe
        </button>
      </section>

      {/* What's happening */}
      <Card title="What’s happening">
        {trends.map((t) => (
          <div key={t.id} className="flex cursor-pointer justify-between px-4 py-3 transition-colors hover:bg-white/[0.03]">
            <div>
              <p className="text-[13px] text-x-muted">{t.meta}</p>
              <p className="text-[15px] font-bold">{t.tag}</p>
            </div>
            <button className="h-fit text-x-muted hover:text-x-blue" aria-label="More">
              <Ellipsis size={18} />
            </button>
          </div>
        ))}
        <a href="#" className="block px-4 py-4 text-[15px] text-x-blue transition-colors hover:bg-white/[0.03]">
          Show more
        </a>
      </Card>

      {/* Who to follow */}
      <Card title="Who to follow">
        {suggestions.map((u) => (
          <div key={u.id} className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/[0.03]">
            <Image src={u.avatar} alt={u.name} width={40} height={40} className="h-10 w-10 shrink-0 rounded-full" />
            <div className="min-w-0 flex-1 leading-5">
              <p className="flex items-center gap-1 text-[15px] font-bold">
                <span className="truncate">{u.name}</span>
                <BadgeCheck size={18} className="shrink-0 fill-x-blue text-x-bg" />
              </p>
              <p className="truncate text-[15px] text-x-muted">@{u.username}</p>
            </div>
            <button className="rounded-full bg-x-white px-4 py-1.5 text-[14px] font-bold text-x-black transition-opacity hover:opacity-90">
              Follow
            </button>
          </div>
        ))}
        <a href="#" className="block px-4 py-4 text-[15px] text-x-blue transition-colors hover:bg-white/[0.03]">
          Show more
        </a>
      </Card>

      {/* Footer */}
      <footer className="flex flex-wrap gap-x-3 gap-y-1 px-4 text-[13px] text-x-muted">
        {footerLinks.map((l) => (
          <a key={l} href="#" className="hover:underline">{l}</a>
        ))}
        <span>© 2026 X Corp.</span>
      </footer>
    </aside>
  );
}