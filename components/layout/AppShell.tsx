import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { Sidebar } from "./Sidebar";

export function AppShell({
  children,
  userName,
}: {
  children: ReactNode;
  userName?: string | null;
}) {
  return (
    <div className="min-h-full md:pl-60">
      <Sidebar userName={userName} />
      <main className="mx-auto min-h-full max-w-2xl px-4 pt-6 pb-28 md:px-8 md:pb-12">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
