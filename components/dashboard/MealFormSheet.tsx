"use client";

import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Label } from "@/components/ui/Card";
import { IconCamera, IconCoffee, IconCookie, IconMoon, IconSun, IconX } from "@/components/icons";
import {
  estimateProteinG,
  MEAL_TYPE_LABEL,
  MEAL_TYPE_ORDER,
  type MealLike,
  type MealType,
} from "@/lib/nutrition";
import {
  calculateMacrosFromFood,
  convertToGrams,
  FOOD_CATEGORY_ORDER,
  getFoodById,
  getFoodsByCategory,
  type FoodCategory,
} from "@/lib/foods";
import { cn } from "@/lib/cn";

const TYPE_ICON: Record<MealType, typeof IconCoffee> = {
  breakfast: IconCoffee,
  lunch: IconSun,
  dinner: IconMoon,
  snack: IconCookie,
};

export type MealFormValues = {
  type: MealType;
  name: string;
  calories: number;
  carbG: number;
  proteinG: number;
  fatG: number;
  photoUrl?: string | null;
};

type MealItem = {
  id: string;
  name: string;
  calories: number;
  carbG: number;
  proteinG: number;
  fatG: number;
};

function sumItems(items: MealItem[]) {
  return items.reduce(
    (acc, item) => {
      acc.calories += item.calories;
      acc.carbG += item.carbG;
      acc.proteinG += item.proteinG;
      acc.fatG += item.fatG;
      return acc;
    },
    { calories: 0, carbG: 0, proteinG: 0, fatG: 0 }
  );
}

/**
 * Mount this only while the sheet should be visible, with a `key` derived
 * from the meal being edited (or "new") — that remounts the form with fresh
 * defaults instead of syncing props into state via an effect.
 */
export function MealFormSheet({
  onClose,
  onSubmit,
  initial,
  defaultType = "breakfast",
  dateLabel,
}: {
  onClose: () => void;
  onSubmit: (values: MealFormValues) => Promise<void>;
  initial?: MealLike | null;
  defaultType?: MealType;
  dateLabel: string;
}) {
  const [type, setType] = useState<MealType>(initial?.type ?? defaultType);
  const [mealName, setMealName] = useState(initial?.name ?? "");
  const [items, setItems] = useState<MealItem[]>(
    initial
      ? [
          {
            id: "initial",
            name: initial.name,
            calories: initial.calories,
            carbG: initial.carbG,
            proteinG: initial.proteinG,
            fatG: initial.fatG,
          },
        ]
      : []
  );

  const [category, setCategory] = useState<FoodCategory | "">("");
  const [foodId, setFoodId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("g");
  const [itemName, setItemName] = useState("");
  const [calories, setCalories] = useState("");
  const [carbG, setCarbG] = useState("");
  const [proteinG, setProteinG] = useState("");
  const [fatG, setFatG] = useState("");

  const [photoUrl, setPhotoUrl] = useState<string | null>(initial?.photoUrl ?? null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedFood = getFoodById(foodId);

  const totals = useMemo(() => sumItems(items), [items]);

  function applyFoodCalc(nextFoodId: string, nextQuantity: string, nextUnit: string) {
    const food = getFoodById(nextFoodId);
    const quantityNum = Number(nextQuantity);
    if (!food || !nextQuantity || Number.isNaN(quantityNum) || quantityNum <= 0) return;

    const quantityG = convertToGrams(food, quantityNum, nextUnit);
    const macros = calculateMacrosFromFood(food, quantityG);
    setCalories(macros.calories.toString());
    setCarbG(macros.carbG.toString());
    setProteinG(macros.proteinG.toString());
    setFatG(macros.fatG.toString());
  }

  function handleCategoryChange(nextCategory: FoodCategory | "") {
    setCategory(nextCategory);
    setFoodId("");
    setUnit("g");
  }

  function handleFoodChange(nextFoodId: string) {
    setFoodId(nextFoodId);
    const food = getFoodById(nextFoodId);
    const defaultUnit = food?.units?.[0]?.label ?? "g";
    setUnit(defaultUnit);
    if (food && !itemName.trim()) setItemName(food.name);
    applyFoodCalc(nextFoodId, quantity, defaultUnit);
  }

  function handleUnitChange(nextUnit: string) {
    setUnit(nextUnit);
    applyFoodCalc(foodId, quantity, nextUnit);
  }

  function handleQuantityChange(nextQuantity: string) {
    setQuantity(nextQuantity);
    applyFoodCalc(foodId, nextQuantity, unit);
  }

  function resetDraft() {
    setCategory("");
    setFoodId("");
    setQuantity("");
    setUnit("g");
    setItemName("");
    setCalories("");
    setCarbG("");
    setProteinG("");
    setFatG("");
  }

  function buildDraftItem(): MealItem | null {
    const caloriesNum = Number(calories);
    if (!itemName.trim() || !calories || Number.isNaN(caloriesNum) || caloriesNum < 0) {
      return null;
    }
    const carbNum = Number(carbG) || 0;
    const fatNum = Number(fatG) || 0;
    const proteinNum = proteinG.trim()
      ? Number(proteinG) || 0
      : estimateProteinG(caloriesNum, carbNum, fatNum);

    return {
      id: crypto.randomUUID(),
      name: itemName.trim(),
      calories: caloriesNum,
      carbG: carbNum,
      proteinG: proteinNum,
      fatG: fatNum,
    };
  }

  function handleAddItem() {
    const item = buildDraftItem();
    if (!item) {
      setError("Preencha o nome e as calorias do alimento antes de adicionar.");
      return;
    }
    setError(null);
    setItems((prev) => [...prev, item]);
    resetDraft();
  }

  function handleRemoveItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhotoUrl(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    let finalItems = items;
    const draftItem = buildDraftItem();
    if (draftItem) {
      finalItems = [...items, draftItem];
    }

    if (finalItems.length === 0) {
      setError("Adicione ao menos um alimento a essa refeição.");
      return;
    }

    const finalTotals = sumItems(finalItems);
    const finalName = mealName.trim() || finalItems.map((item) => item.name).join(", ");

    setSubmitting(true);
    try {
      await onSubmit({
        type,
        name: finalName,
        calories: finalTotals.calories,
        carbG: finalTotals.carbG,
        proteinG: finalTotals.proteinG,
        fatG: finalTotals.fatG,
        photoUrl,
      });
    } catch {
      setError("Não foi possível salvar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-card border-t border-border bg-surface p-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-card sm:max-w-md sm:rounded-card sm:border"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-pill bg-border sm:hidden" />

        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-h2 text-text-primary">
              {initial ? "Editar refeição" : "Nova refeição"}
            </h2>
            <p className="text-caption text-text-secondary">{dateLabel}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-9 w-9 items-center justify-center rounded-button text-text-secondary hover:bg-background hover:text-text-primary"
          >
            <IconX className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4 grid grid-cols-4 gap-2">
          {MEAL_TYPE_ORDER.map((t) => {
            const Icon = TYPE_ICON[t];
            const active = type === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-button border py-2.5 text-caption transition-colors",
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-text-secondary hover:border-text-secondary/40"
                )}
              >
                <Icon className="h-4 w-4" />
                {MEAL_TYPE_LABEL[t]}
              </button>
            );
          })}
        </div>

        <div className="mb-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-border bg-background text-text-secondary"
          >
            {photoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photoUrl} alt="" className="h-full w-full object-cover" />
            ) : (
              <IconCamera className="h-5 w-5" />
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhoto}
            className="hidden"
          />
          <div className="text-caption text-text-secondary">
            Foto do prato <span className="text-text-secondary/70">(opcional)</span>
          </div>
        </div>

        {items.length > 0 && (
          <div className="mb-4 space-y-1.5">
            <p className="text-caption text-text-secondary">
              Itens desta refeição ({items.length})
            </p>
            <div className="space-y-1.5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-button border border-border bg-background px-3 py-2"
                >
                  <div>
                    <p className="text-body text-text-primary">{item.name}</p>
                    <p className="nums text-caption text-text-secondary">
                      {item.calories} kcal · C {item.carbG}g · P {item.proteinG}g · G {item.fatG}g
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                    aria-label={`Remover ${item.name}`}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-button text-text-secondary hover:bg-surface hover:text-error"
                  >
                    <IconX className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between px-1 pt-1">
              <span className="text-caption text-text-secondary">Total</span>
              <span className="nums text-caption font-semibold text-text-primary">
                {totals.calories} kcal · C {totals.carbG}g · P {totals.proteinG}g · G {totals.fatG}g
              </span>
            </div>
          </div>
        )}

        <div className="mb-3">
          <Label htmlFor="meal-name">Nome da refeição (opcional)</Label>
          <Input
            id="meal-name"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="Ex.: Almoço no restaurante"
          />
        </div>

        <div className="mb-3 rounded-card border border-border p-3">
          <p className="mb-2.5 text-caption font-semibold text-text-secondary">
            Adicionar alimento
          </p>

          <div className="mb-2.5 grid grid-cols-2 gap-2.5">
            <div>
              <Label htmlFor="meal-category">Tipo de alimento</Label>
              <select
                id="meal-category"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value as FoodCategory | "")}
                className="h-11 w-full rounded-button border border-border bg-background px-3.5 text-body text-text-primary outline-none transition-colors focus:border-primary"
              >
                <option value="">Selecionar (opcional)</option>
                {FOOD_CATEGORY_ORDER.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="meal-food">Alimento</Label>
              <select
                id="meal-food"
                value={foodId}
                onChange={(e) => handleFoodChange(e.target.value)}
                disabled={!category}
                className="h-11 w-full rounded-button border border-border bg-background px-3.5 text-body text-text-primary outline-none transition-colors focus:border-primary disabled:opacity-50"
              >
                <option value="">Selecionar</option>
                {category &&
                  getFoodsByCategory(category).map((food) => (
                    <option key={food.id} value={food.id}>
                      {food.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mb-2.5 grid grid-cols-2 gap-2.5">
            <div>
              <Label htmlFor="meal-quantity">Quantidade</Label>
              <Input
                id="meal-quantity"
                inputMode="numeric"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="meal-unit">Unidade</Label>
              <select
                id="meal-unit"
                value={unit}
                onChange={(e) => handleUnitChange(e.target.value)}
                className="h-11 w-full rounded-button border border-border bg-background px-3.5 text-body text-text-primary outline-none transition-colors focus:border-primary"
              >
                <option value="g">Grama (g)</option>
                {selectedFood?.units?.map((u) => (
                  <option key={u.label} value={u.label}>
                    {u.label.charAt(0).toUpperCase() + u.label.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-2.5">
            <Label htmlFor="item-name">Nome do alimento</Label>
            <Input
              id="item-name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Ex.: Peito de frango empanado"
            />
          </div>

          <div className="mb-2.5">
            <Label htmlFor="item-calories">Calorias (kcal)</Label>
            <Input
              id="item-calories"
              inputMode="numeric"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="0"
            />
          </div>

          <div className="mb-3 grid grid-cols-3 gap-2.5">
            <div>
              <Label htmlFor="item-carb" className="text-macro-carb">
                Carbo (g)
              </Label>
              <Input
                id="item-carb"
                inputMode="numeric"
                value={carbG}
                onChange={(e) => setCarbG(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="item-protein" className="text-macro-protein">
                Proteína (g)
              </Label>
              <Input
                id="item-protein"
                inputMode="numeric"
                value={proteinG}
                onChange={(e) => setProteinG(e.target.value)}
                placeholder="Auto"
              />
            </div>
            <div>
              <Label htmlFor="item-fat" className="text-macro-fat">
                Gordura (g)
              </Label>
              <Input
                id="item-fat"
                inputMode="numeric"
                value={fatG}
                onChange={(e) => setFatG(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>

          <Button type="button" variant="secondary" className="w-full" onClick={handleAddItem}>
            + Adicionar item à refeição
          </Button>
        </div>

        {error && <p className="mb-3 text-caption text-error">{error}</p>}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Salvando..." : initial ? "Salvar alterações" : "Adicionar refeição"}
        </Button>
      </form>
    </div>
  );
}
