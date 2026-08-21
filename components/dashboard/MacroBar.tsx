import { cn } from "@/lib/cn";

const COLORS = {
  carb: { bar: "bg-macro-carb", text: "text-macro-carb", label: "Carboidrato" },
  protein: { bar: "bg-macro-protein", text: "text-macro-protein", label: "Proteína" },
  fat: { bar: "bg-macro-fat", text: "text-macro-fat", label: "Gordura" },
} as const;

export function MacroBar({
  macro,
  valueG,
  goalG,
  className,
}: {
  macro: keyof typeof COLORS;
  valueG: number;
  goalG: number;
  className?: string;
}) {
  const percent = goalG > 0 ? Math.min(100, (valueG / goalG) * 100) : 0;
  const over = valueG > goalG;
  const { bar, text, label } = COLORS[macro];

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="flex items-center gap-1.5 text-caption font-medium text-text-secondary">
          <span className={cn("h-1.5 w-1.5 rounded-full", bar)} />
          {label}
        </span>
        <span className="nums text-caption text-text-secondary">
          <span className={cn("font-semibold", over ? "text-error" : text)}>
            {Math.round(valueG)}
          </span>
          {" / "}
          {Math.round(goalG)}g
        </span>
      </div>
      <div
        className="relative h-2.5 w-full overflow-hidden rounded-pill bg-background"
        role="progressbar"
        aria-valuenow={Math.round(valueG)}
        aria-valuemin={0}
        aria-valuemax={Math.round(goalG)}
      >
        {/* graduated scale ticks beneath the fill, echoing the calorie gauge */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 9%, rgba(245,245,245,0.06) 9%, rgba(245,245,245,0.06) 10%)",
          }}
        />
        <div
          className={cn(
            "relative h-full rounded-pill transition-[width] duration-700 ease-out",
            over ? "bg-error" : bar
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
