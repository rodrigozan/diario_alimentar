"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { IconDroplet } from "@/components/icons";
import { cn } from "@/lib/cn";

const QUICK_AMOUNTS = [250, 500];

export function WaterWidget({
  valueMl,
  goalMl,
  onAdd,
}: {
  valueMl: number;
  goalMl: number;
  onAdd: (amountMl: number) => Promise<void> | void;
}) {
  const [pending, setPending] = useState<number | null>(null);
  const percent = goalMl > 0 ? Math.min(100, (valueMl / goalMl) * 100) : 0;
  const met = valueMl >= goalMl;

  async function handleAdd(amount: number) {
    setPending(amount);
    try {
      await onAdd(amount);
    } finally {
      setPending(null);
    }
  }

  return (
    <Card className="flex items-center gap-4">
      <div className="relative h-24 w-14 shrink-0">
        <svg viewBox="0 0 56 96" className="h-full w-full">
          <defs>
            <clipPath id="bottle-clip">
              <path d="M18 4h20a3 3 0 0 1 3 3v6.5c0 1.8.6 3 1.8 4.6 2 2.6 3.2 5.4 3.2 9.9v58a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6v-58c0-4.5 1.2-7.3 3.2-9.9C14.4 16.5 15 15.3 15 13.5V7a3 3 0 0 1 3-3Z" />
            </clipPath>
            <linearGradient id="water-fill" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </linearGradient>
          </defs>

          <path
            d="M18 4h20a3 3 0 0 1 3 3v6.5c0 1.8.6 3 1.8 4.6 2 2.6 3.2 5.4 3.2 9.9v58a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6v-58c0-4.5 1.2-7.3 3.2-9.9C14.4 16.5 15 15.3 15 13.5V7a3 3 0 0 1 3-3Z"
            fill="#0D1117"
            stroke="#2A2E37"
            strokeWidth={1.5}
          />

          <g clipPath="url(#bottle-clip)">
            <rect
              x="0"
              y={96 - (percent / 100) * 96}
              width="56"
              height="96"
              fill="url(#water-fill)"
              className="transition-all duration-700 ease-out"
            />
          </g>

          {/* graduation ticks, the same "measured" language as the calorie gauge */}
          {[0.25, 0.5, 0.75].map((mark) => (
            <line
              key={mark}
              x1={10}
              x2={15}
              y1={92 - mark * 80}
              y2={92 - mark * 80}
              stroke="#9CA3AF"
              strokeWidth={1}
              opacity={0.5}
            />
          ))}

          <path
            d="M18 4h20a3 3 0 0 1 3 3v6.5c0 1.8.6 3 1.8 4.6 2 2.6 3.2 5.4 3.2 9.9v58a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6v-58c0-4.5 1.2-7.3 3.2-9.9C14.4 16.5 15 15.3 15 13.5V7a3 3 0 0 1 3-3Z"
            fill="none"
            stroke="#2A2E37"
            strokeWidth={1.5}
          />
        </svg>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-caption font-medium text-text-secondary">
          <IconDroplet className="h-3.5 w-3.5 text-macro-water" />
          Água
        </div>
        <div className="nums mt-0.5 text-h2 text-text-primary">
          {(valueMl / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
          <span className="text-caption font-normal text-text-secondary">
            {" "}
            / {(goalMl / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} L
          </span>
        </div>
        {met && (
          <p className="mt-0.5 text-caption text-primary">Meta batida hoje 🎉</p>
        )}

        <div className="mt-3 flex gap-2">
          {QUICK_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAdd(amount)}
              disabled={pending !== null}
              className={cn(
                "flex-1 rounded-button border border-border bg-background py-2 text-caption font-medium text-macro-water transition-colors",
                "hover:border-macro-water/50 disabled:opacity-50"
              )}
            >
              {pending === amount ? "..." : `+${amount}ml`}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
