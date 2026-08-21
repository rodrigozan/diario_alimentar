import type { ReactNode } from "react";
import { CalorieRing } from "@/components/dashboard/CalorieRing";
import { MacroBar } from "@/components/dashboard/MacroBar";
import { IconFlame } from "@/components/icons";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-full md:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-surface p-12 md:flex">
        <div className="tick-rule absolute inset-x-0 top-0" />
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
            <IconFlame className="h-[18px] w-[18px]" />
          </span>
          <span className="text-h2 font-semibold text-text-primary">Diário Alimentar</span>
        </div>

        <div className="flex flex-col items-center gap-6">
          <CalorieRing consumed={1450} goal={2000} size={220} />
          <div className="w-full max-w-[280px] space-y-3.5">
            <MacroBar macro="carb" valueG={140} goalG={250} />
            <MacroBar macro="protein" valueG={78} goalG={120} />
            <MacroBar macro="fat" valueG={40} goalG={65} />
          </div>
        </div>

        <p className="max-w-xs text-body text-text-secondary">
          Registre calorias, macros e água em segundos e acompanhe sua evolução semana a semana.
        </p>
      </div>

      <div className="flex items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
