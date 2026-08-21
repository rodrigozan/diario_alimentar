import type { CSSProperties } from "react";

const SIZE = 200;
const CENTER = SIZE / 2;
const STROKE = 13;
const RADIUS = CENTER - STROKE / 2 - 6;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const MAJOR_TICKS = 12;
const MINOR_PER_MAJOR = 5;

// Rounded to 2 decimals: Math.cos/sin can differ in their last bit between
// the server's V8 build and the browser's, which otherwise causes a
// hydration mismatch on these coordinates.
function round(value: number) {
  return Math.round(value * 100) / 100;
}

function polar(angleDeg: number, radius: number) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: round(CENTER + radius * Math.cos(angle)),
    y: round(CENTER + radius * Math.sin(angle)),
  };
}

function Ticks() {
  const ticks = [];
  const totalMinor = MAJOR_TICKS * MINOR_PER_MAJOR;
  for (let i = 0; i < totalMinor; i += 1) {
    const isMajor = i % MINOR_PER_MAJOR === 0;
    const angle = (360 / totalMinor) * i;
    const outer = RADIUS + STROKE / 2 + 5;
    const inner = outer + (isMajor ? 7 : 3.5);
    const p1 = polar(angle, inner);
    const p2 = polar(angle, outer);
    ticks.push(
      <line
        key={i}
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        stroke="#2A2E37"
        strokeWidth={isMajor ? 2 : 1.25}
        strokeLinecap="round"
        className={isMajor ? "opacity-90" : "opacity-45"}
      />
    );
  }
  return <>{ticks}</>;
}

export function CalorieRing({
  consumed,
  goal,
  size = 200,
}: {
  consumed: number;
  goal: number;
  size?: number;
}) {
  const percent = goal > 0 ? consumed / goal : 0;
  const clamped = Math.min(1, Math.max(0, percent));
  const overshoot = Math.max(0, percent - 1);
  const remaining = Math.max(0, goal - consumed);
  const isOver = consumed > goal;

  const mainOffset = CIRCUMFERENCE * (1 - clamped);

  const scale = size / SIZE;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${Math.round(consumed)} de ${Math.round(goal)} kcal consumidas`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="-rotate-0"
      >
        <Ticks />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#1A1D24"
          strokeWidth={STROKE}
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#2A2E37"
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={0}
          opacity={0.35}
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke={isOver ? "#EF4444" : "#22C55E"}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={mainOffset}
          transform={`rotate(-90 ${CENTER} ${CENTER})`}
          className="animate-ring-in"
          style={
            {
              "--ring-circumference": CIRCUMFERENCE,
              "--ring-offset": mainOffset,
            } as CSSProperties
          }
        />
        {overshoot > 0 && (
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS - STROKE - 4}
            fill="none"
            stroke="#EF4444"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * (RADIUS - STROKE - 4)}
            strokeDashoffset={
              2 * Math.PI * (RADIUS - STROKE - 4) * (1 - Math.min(1, overshoot))
            }
            transform={`rotate(-90 ${CENTER} ${CENTER})`}
            opacity={0.8}
          />
        )}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="nums text-display leading-none text-text-primary"
          style={{ fontSize: 40 * scale, lineHeight: `${44 * scale}px` }}
        >
          {Math.round(isOver ? consumed : remaining).toLocaleString("pt-BR")}
        </span>
        <span
          className="mt-1 text-caption uppercase tracking-wide text-text-secondary"
          style={{ fontSize: 12 * scale }}
        >
          {isOver ? "kcal consumidas" : "kcal restantes"}
        </span>
        <span
          className={`nums mt-2 rounded-pill px-2 py-0.5 text-caption ${
            isOver ? "bg-error/10 text-error" : "bg-background text-text-secondary"
          }`}
          style={{ fontSize: 11 * scale }}
        >
          {isOver
            ? `+${Math.round(consumed - goal).toLocaleString("pt-BR")} acima da meta`
            : `meta ${Math.round(goal).toLocaleString("pt-BR")} kcal`}
        </span>
      </div>
    </div>
  );
}
