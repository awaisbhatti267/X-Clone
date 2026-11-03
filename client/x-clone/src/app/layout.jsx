import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import RightPanel from "@/components/layout/RightPanel";
import MobileNav from "@/components/layout/MobileNav";

export const metadata = {
  title: "X Clone",
  description: "X clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex min-h-screen max-w-[1280px] justify-center">
          <Sidebar />
          <main className="min-h-screen w-full max-w-[600px] border-x border-x-border pb-16 sm:pb-0">
            {children}
          </main>
          <RightPanel />
        </div>
        <MobileNav />
      </body>
    </html>
  );
}