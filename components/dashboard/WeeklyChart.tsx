"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export type DayPoint = {
  key: string;
  label: string;
  calories: number;
};

function ChartTooltip({
  active,
  payload,
  goal,
}: {
  active?: boolean;
  payload?: { payload: DayPoint }[];
  goal: number;
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  const over = point.calories > goal;
  return (
    <div className="rounded-button border border-border bg-surface px-3 py-2 text-caption shadow-card">
      <p className="text-text-secondary">{point.label}</p>
      <p className={`nums font-semibold ${over ? "text-error" : "text-primary"}`}>
        {Math.round(point.calories).toLocaleString("pt-BR")} kcal
      </p>
    </div>
  );
}

export function WeeklyChart({ data, goal }: { data: DayPoint[]; goal: number }) {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 4, left: 4, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#2A2E37" strokeDasharray="0" />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />
          <ReferenceLine y={goal} stroke="#22C55E" strokeDasharray="4 4" strokeOpacity={0.6} />
          <Tooltip
            cursor={{ fill: "rgba(245,245,245,0.04)" }}
            content={<ChartTooltip goal={goal} />}
          />
          <Bar dataKey="calories" radius={[6, 6, 6, 6]} maxBarSize={28}>
            {data.map((point) => (
              <Cell
                key={point.key}
                fill={point.calories > goal ? "#EF4444" : "#22C55E"}
                fillOpacity={point.calories === 0 ? 0.15 : 0.9}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
