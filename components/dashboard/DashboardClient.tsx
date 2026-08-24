"use client";

import { useMemo, useState } from "react";
import { CalorieRing } from "./CalorieRing";
import { MacroBar } from "./MacroBar";
import { WaterWidget } from "./WaterWidget";
import { MealCard } from "./MealCard";
import { FloatingActionButton } from "./FloatingActionButton";
import { MealFormSheet, type MealFormValues } from "./MealFormSheet";
import { useAlertDialog } from "@/components/ui/AlertDialog";
import {
  MEAL_TYPE_LABEL,
  MEAL_TYPE_ORDER,
  sumMeals,
  type MealLike,
  type MealType,
} from "@/lib/nutrition";

export type Goals = {
  calories: number;
  carbG: number;
  proteinG: number;
  fatG: number;
  waterMl: number;
};

function guessMealType(): MealType {
  const hour = new Date().getHours();
  if (hour < 10) return "breakfast";
  if (hour < 15) return "lunch";
  if (hour < 19) return "snack";
  return "dinner";
}

export function DashboardClient({
  dateKey,
  dateLabel,
  goals,
  initialMeals,
  initialWaterMl,
}: {
  dateKey: string;
  dateLabel: string;
  goals: Goals;
  initialMeals: MealLike[];
  initialWaterMl: number;
}) {
  const [meals, setMeals] = useState<MealLike[]>(initialMeals);
  const [waterMl, setWaterMl] = useState(initialWaterMl);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editingMeal, setEditingMeal] = useState<MealLike | null>(null);
  const { confirm } = useAlertDialog();

  const totals = useMemo(() => sumMeals(meals), [meals]);

  const grouped = useMemo(() => {
    const map = new Map<MealType, MealLike[]>();
    for (const type of MEAL_TYPE_ORDER) map.set(type, []);
    for (const meal of meals) map.get(meal.type)?.push(meal);
    return map;
  }, [meals]);

  async function handleAddWater(amountMl: number) {
    setWaterMl((v) => v + amountMl);
    const res = await fetch("/api/water", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amountMl, date: dateKey }),
    });
    if (!res.ok) setWaterMl((v) => v - amountMl);
  }

  function openCreate() {
    setEditingMeal(null);
    setSheetOpen(true);
  }

  function openEdit(meal: MealLike) {
    setEditingMeal(meal);
    setSheetOpen(true);
  }

  async function handleSubmitMeal(values: MealFormValues) {
    if (editingMeal?._id) {
      const res = await fetch(`/api/meals/${editingMeal._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("failed");
      const { meal } = await res.json();
      setMeals((prev) => prev.map((m) => (m._id === meal._id ? meal : m)));
    } else {
      const res = await fetch("/api/meals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, date: dateKey }),
      });
      if (!res.ok) throw new Error("failed");
      const { meal } = await res.json();
      setMeals((prev) => [...prev, meal]);
    }
    setSheetOpen(false);
  }

  async function handleDeleteMeal(meal: MealLike) {
    if (!meal._id) return;
    const confirmed = await confirm({
      title: "Remover refeição",
      description: `Remover "${meal.name}"?`,
      confirmLabel: "Remover",
      variant: "danger",
    });
    if (!confirmed) return;
    setMeals((prev) => prev.filter((m) => m._id !== meal._id));
    await fetch(`/api/meals/${meal._id}`, { method: "DELETE" });
  }

  return (
    <div className="animate-rise">
      <header className="mb-6">
        <p className="text-caption text-text-secondary">{dateLabel}</p>
        <h1 className="text-h1 text-text-primary">Seu dia</h1>
      </header>

      <div className="flex flex-col items-center gap-5 rounded-card border border-border bg-surface p-card shadow-card md:flex-row md:items-center md:gap-8">
        <CalorieRing consumed={totals.calories} goal={goals.calories} />
        <div className="flex w-full flex-col gap-3.5 md:flex-1 md:justify-center">
          <MacroBar macro="carb" valueG={totals.carbG} goalG={goals.carbG} />
          <MacroBar macro="protein" valueG={totals.proteinG} goalG={goals.proteinG} />
          <MacroBar macro="fat" valueG={totals.fatG} goalG={goals.fatG} />
        </div>
      </div>

      <div className="mt-4">
        <WaterWidget valueMl={waterMl} goalMl={goals.waterMl} onAdd={handleAddWater} />
      </div>

      <div className="mt-7">
        <h2 className="mb-3 text-h2 text-text-primary">Refeições</h2>
        <div className="space-y-5">
          {MEAL_TYPE_ORDER.map((type) => {
            const list = grouped.get(type) ?? [];
            return (
              <div key={type}>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-caption font-semibold uppercase tracking-wide text-text-secondary">
                    {MEAL_TYPE_LABEL[type]}
                  </h3>
                  {list.length > 0 && (
                    <span className="nums text-caption text-text-secondary">
                      {Math.round(list.reduce((s, m) => s + m.calories, 0))} kcal
                    </span>
                  )}
                </div>
                {list.length === 0 ? (
                  <div className="tick-rule" />
                ) : (
                  <div className="space-y-2">
                    {list.map((meal) => (
                      <MealCard
                        key={meal._id}
                        meal={meal}
                        onEdit={() => openEdit(meal)}
                        onDelete={() => handleDeleteMeal(meal)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <FloatingActionButton onClick={openCreate} />

      {sheetOpen && (
        <MealFormSheet
          key={editingMeal?._id ?? "new"}
          onClose={() => setSheetOpen(false)}
          onSubmit={handleSubmitMeal}
          initial={editingMeal}
          defaultType={guessMealType()}
          dateLabel={dateLabel}
        />
      )}
    </div>
  );
}
