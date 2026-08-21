"use client";

import { Card } from "@/components/ui/Card";
import { WeeklyChart } from "./WeeklyChart";
import { IconDroplet } from "@/components/icons";
import { formatDayLabel, shortWeekday } from "@/lib/date";
import { cn } from "@/lib/cn";
import type { Goals } from "./DashboardClient";

export type DaySummary = {
  key: string;
  calories: number;
  carbG: number;
  proteinG: number;
  fatG: number;
  waterMl: number;
  mealCount: number;
};

export function HistoryClient({ days, goals }: { days: DaySummary[]; goals: Goals }) {
  const activeDays = days.filter((d) => d.mealCount > 0);
  const avgCalories =
    activeDays.length > 0
      ? activeDays.reduce((s, d) => s + d.calories, 0) / activeDays.length
      : 0;
  const avgWater =
    activeDays.length > 0
      ? activeDays.reduce((s, d) => s + d.waterMl, 0) / activeDays.length
      : 0;

  const chartData = days.map((d) => ({
    key: d.key,
    label: shortWeekday(d.key),
    calories: d.calories,
  }));

  return (
    <div className="animate-rise">
      <header className="mb-6">
        <p className="text-caption text-text-secondary">Últimos 7 dias</p>
        <h1 className="text-h1 text-text-primary">Histórico</h1>
      </header>

      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-h2 text-text-primary">Calorias por dia</h2>
          <span className="flex items-center gap-1.5 text-caption text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> meta
          </span>
        </div>
        <WeeklyChart data={chartData} goal={goals.calories} />
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Card className="text-center">
          <p className="text-caption text-text-secondary">Média de calorias</p>
          <p className="nums mt-1 text-h1 text-text-primary">
            {Math.round(avgCalories).toLocaleString("pt-BR")}
          </p>
          <p className="text-caption text-text-secondary">kcal/dia</p>
        </Card>
        <Card className="text-center">
          <p className="text-caption text-text-secondary">Média de água</p>
          <p className="nums mt-1 text-h1 text-macro-water">
            {(avgWater / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}
          </p>
          <p className="text-caption text-text-secondary">L/dia</p>
        </Card>
      </div>

      <div className="mt-7">
        <h2 className="mb-3 text-h2 text-text-primary">Dia a dia</h2>
        <div className="space-y-2">
          {[...days].reverse().map((day) => {
            const over = day.calories > goals.calories;
            const percent = goals.calories > 0 ? Math.min(100, (day.calories / goals.calories) * 100) : 0;
            return (
              <div
                key={day.key}
                className="flex items-center gap-3 rounded-card border border-border bg-surface p-3.5"
              >
                <div className="w-16 shrink-0">
                  <p className="text-body font-medium text-text-primary">
                    {formatDayLabel(day.key)}
                  </p>
                  <p className="text-caption text-text-secondary">
                    {day.mealCount} {day.mealCount === 1 ? "refeição" : "refeições"}
                  </p>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="h-2 w-full overflow-hidden rounded-pill bg-background">
                    <div
                      className={cn(
                        "h-full rounded-pill transition-[width]",
                        over ? "bg-error" : "bg-primary"
                      )}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>

                <p
                  className={cn(
                    "nums w-20 shrink-0 text-right text-body font-semibold",
                    over ? "text-error" : "text-text-primary"
                  )}
                >
                  {Math.round(day.calories).toLocaleString("pt-BR")}
                  <span className="ml-0.5 text-caption font-normal text-text-secondary">kcal</span>
                </p>

                <p className="flex w-16 shrink-0 items-center justify-end gap-1 text-caption text-macro-water">
                  <IconDroplet className="h-3.5 w-3.5" />
                  <span className="nums">{(day.waterMl / 1000).toFixed(1)}L</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
