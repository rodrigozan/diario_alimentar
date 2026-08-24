"use client";

import { useMemo, useState } from "react";
import { signOut } from "next-auth/react";
import { Card, Input, Label } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/icons";
import { calculateBmi, classifyBmi } from "@/lib/nutrition";
import type { Goals } from "./DashboardClient";

export function ProfileClient({
  name,
  email,
  goals,
  heightCm,
  weightKg,
}: {
  name?: string | null;
  email?: string | null;
  goals: Goals;
  heightCm?: number | null;
  weightKg?: number | null;
}) {
  const [form, setForm] = useState({
    calories: String(goals.calories),
    carbG: String(goals.carbG),
    proteinG: String(goals.proteinG),
    fatG: String(goals.fatG),
    waterMl: String(goals.waterMl),
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [bodyForm, setBodyForm] = useState({
    heightCm: heightCm ? String(heightCm) : "",
    weightKg: weightKg ? String(weightKg) : "",
  });
  const [savingBody, setSavingBody] = useState(false);
  const [savedBody, setSavedBody] = useState(false);

  function set(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setSaved(false);
  }

  function setBody(key: keyof typeof bodyForm, value: string) {
    setBodyForm((f) => ({ ...f, [key]: value }));
    setSavedBody(false);
  }

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/goals", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          calories: Number(form.calories) || 0,
          carbG: Number(form.carbG) || 0,
          proteinG: Number(form.proteinG) || 0,
          fatG: Number(form.fatG) || 0,
          waterMl: Number(form.waterMl) || 0,
        }),
      });
      if (res.ok) setSaved(true);
    } finally {
      setSaving(false);
    }
  }

  async function handleSaveBody() {
    setSavingBody(true);
    setSavedBody(false);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heightCm: Number(bodyForm.heightCm) || 0,
          weightKg: Number(bodyForm.weightKg) || 0,
        }),
      });
      if (res.ok) setSavedBody(true);
    } finally {
      setSavingBody(false);
    }
  }

  const bmi = useMemo(() => {
    const h = Number(bodyForm.heightCm);
    const w = Number(bodyForm.weightKg);
    if (!h || !w) return 0;
    return calculateBmi(h, w);
  }, [bodyForm.heightCm, bodyForm.weightKg]);

  const initials = (name ?? email ?? "?").slice(0, 1).toUpperCase();

  return (
    <div className="animate-rise">
      <header className="mb-6">
        <p className="text-caption text-text-secondary">Sua conta</p>
        <h1 className="text-h1 text-text-primary">Perfil</h1>
      </header>

      <Card className="mb-4 flex items-center gap-3.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-h2 font-semibold text-primary">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-body font-medium text-text-primary">{name ?? "Você"}</p>
          <p className="truncate text-caption text-text-secondary">{email}</p>
        </div>
      </Card>

      <Card className="mb-4">
        <h2 className="mb-4 text-h2 text-text-primary">Dados físicos</h2>

        <div className="mb-3.5 grid grid-cols-2 gap-2.5">
          <div>
            <Label htmlFor="body-height">Altura (cm)</Label>
            <Input
              id="body-height"
              inputMode="numeric"
              value={bodyForm.heightCm}
              onChange={(e) => setBody("heightCm", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="body-weight">Peso (kg)</Label>
            <Input
              id="body-weight"
              inputMode="numeric"
              value={bodyForm.weightKg}
              onChange={(e) => setBody("weightKg", e.target.value)}
            />
          </div>
        </div>

        {bmi > 0 && (
          <div className="mb-4 rounded-button bg-primary/10 px-3.5 py-2.5">
            <p className="text-caption text-text-secondary">Seu IMC</p>
            <p className="text-h2 text-text-primary">
              {bmi.toFixed(1)}{" "}
              <span className="text-body font-normal text-text-secondary">
                {classifyBmi(bmi)}
              </span>
            </p>
          </div>
        )}

        <Button onClick={handleSaveBody} disabled={savingBody} className="w-full">
          {savedBody ? (
            <>
              <IconCheck className="h-4 w-4" /> Dados salvos
            </>
          ) : savingBody ? (
            "Salvando..."
          ) : (
            "Salvar dados físicos"
          )}
        </Button>
      </Card>

      <Card>
        <h2 className="mb-4 text-h2 text-text-primary">Metas diárias</h2>

        <div className="mb-3.5">
          <Label htmlFor="goal-calories">Calorias (kcal)</Label>
          <Input
            id="goal-calories"
            inputMode="numeric"
            value={form.calories}
            onChange={(e) => set("calories", e.target.value)}
          />
        </div>

        <div className="mb-3.5 grid grid-cols-3 gap-2.5">
          <div>
            <Label htmlFor="goal-carb" className="text-macro-carb">
              Carbo (g)
            </Label>
            <Input
              id="goal-carb"
              inputMode="numeric"
              value={form.carbG}
              onChange={(e) => set("carbG", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="goal-protein" className="text-macro-protein">
              Proteína (g)
            </Label>
            <Input
              id="goal-protein"
              inputMode="numeric"
              value={form.proteinG}
              onChange={(e) => set("proteinG", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="goal-fat" className="text-macro-fat">
              Gordura (g)
            </Label>
            <Input
              id="goal-fat"
              inputMode="numeric"
              value={form.fatG}
              onChange={(e) => set("fatG", e.target.value)}
            />
          </div>
        </div>

        <div className="mb-5">
          <Label htmlFor="goal-water" className="text-macro-water">
            Água (ml)
          </Label>
          <Input
            id="goal-water"
            inputMode="numeric"
            value={form.waterMl}
            onChange={(e) => set("waterMl", e.target.value)}
          />
        </div>

        <Button onClick={handleSave} disabled={saving} className="w-full">
          {saved ? (
            <>
              <IconCheck className="h-4 w-4" /> Metas salvas
            </>
          ) : saving ? (
            "Salvando..."
          ) : (
            "Salvar metas"
          )}
        </Button>
      </Card>

      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-4 w-full rounded-button border border-error/30 bg-error/10 py-3 text-body font-medium text-error md:hidden"
      >
        Sair da conta
      </button>
    </div>
  );
}
