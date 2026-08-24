"use client";

import { useRef, useState } from "react";
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
  const [name, setName] = useState(initial?.name ?? "");
  const [calories, setCalories] = useState(initial?.calories?.toString() ?? "");
  const [carbG, setCarbG] = useState(initial?.carbG?.toString() ?? "");
  const [proteinG, setProteinG] = useState(initial?.proteinG?.toString() ?? "");
  const [fatG, setFatG] = useState(initial?.fatG?.toString() ?? "");
  const [photoUrl, setPhotoUrl] = useState<string | null>(initial?.photoUrl ?? null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

    const caloriesNum = Number(calories);
    if (!name.trim()) {
      setError("Dê um nome para a refeição.");
      return;
    }
    if (!calories || Number.isNaN(caloriesNum) || caloriesNum < 0) {
      setError("Informe as calorias.");
      return;
    }

    const carbNum = Number(carbG) || 0;
    const fatNum = Number(fatG) || 0;
    const proteinNum = proteinG.trim()
      ? Number(proteinG) || 0
      : estimateProteinG(caloriesNum, carbNum, fatNum);

    setSubmitting(true);
    try {
      await onSubmit({
        type,
        name: name.trim(),
        calories: caloriesNum,
        carbG: carbNum,
        proteinG: proteinNum,
        fatG: fatNum,
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

        <div className="mb-3">
          <Label htmlFor="meal-name">Nome</Label>
          <Input
            id="meal-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex.: Omelete com aveia"
            autoFocus
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="meal-calories">Calorias (kcal)</Label>
          <Input
            id="meal-calories"
            inputMode="numeric"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2.5">
          <div>
            <Label htmlFor="meal-carb" className="text-macro-carb">
              Carbo (g)
            </Label>
            <Input
              id="meal-carb"
              inputMode="numeric"
              value={carbG}
              onChange={(e) => setCarbG(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <Label htmlFor="meal-protein" className="text-macro-protein">
              Proteína (g)
            </Label>
            <Input
              id="meal-protein"
              inputMode="numeric"
              value={proteinG}
              onChange={(e) => setProteinG(e.target.value)}
              placeholder="Auto"
            />
          </div>
          <div>
            <Label htmlFor="meal-fat" className="text-macro-fat">
              Gordura (g)
            </Label>
            <Input
              id="meal-fat"
              inputMode="numeric"
              value={fatG}
              onChange={(e) => setFatG(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        {error && <p className="mb-3 text-caption text-error">{error}</p>}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Salvando..." : initial ? "Salvar alterações" : "Adicionar refeição"}
        </Button>
      </form>
    </div>
  );
}
