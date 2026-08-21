"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/cn";
import { NAV_ITEMS } from "./nav-items";
import { IconFlame } from "@/components/icons";

export function Sidebar({ userName }: { userName?: string | null }) {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-border bg-surface md:flex">
      <div className="flex items-center gap-2 px-6 py-7">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
          <IconFlame className="h-[18px] w-[18px]" />
        </span>
        <span className="text-h2 font-semibold text-text-primary">Diário</span>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-3 rounded-button px-3 py-2.5 text-body font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-background hover:text-text-primary"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-border p-4">
        <p className="truncate px-2 text-caption text-text-secondary">{userName}</p>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-1 w-full rounded-button px-2 py-2 text-left text-caption text-text-secondary transition-colors hover:bg-background hover:text-error"
        >
          Sair da conta
        </button>
      </div>
    </aside>
  );
}
