"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { Button } from "@/components/ui/Button";

type DialogOptions = {
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "default" | "danger";
};

type DialogState =
  | (DialogOptions & {
      mode: "alert" | "confirm";
      resolve: (value: boolean) => void;
    })
  | null;

type AlertDialogContextValue = {
  confirm: (options: DialogOptions) => Promise<boolean>;
  alert: (options: DialogOptions) => Promise<void>;
};

const AlertDialogContext = createContext<AlertDialogContextValue | null>(null);

export function AlertDialogProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DialogState>(null);

  const confirm = useCallback((options: DialogOptions) => {
    return new Promise<boolean>((resolve) => {
      setState({ ...options, mode: "confirm", resolve });
    });
  }, []);

  const alert = useCallback((options: DialogOptions) => {
    return new Promise<boolean>((resolve) => {
      setState({ ...options, mode: "alert", resolve });
    }).then(() => undefined);
  }, []);

  function handleResult(value: boolean) {
    state?.resolve(value);
    setState(null);
  }

  return (
    <AlertDialogContext.Provider value={{ confirm, alert }}>
      {children}
      {state && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => handleResult(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-sm rounded-card border border-border bg-surface p-5 shadow-card animate-rise">
            <h2 className="text-h2 text-text-primary">{state.title}</h2>
            {state.description && (
              <p className="mt-1.5 text-body text-text-secondary">{state.description}</p>
            )}
            <div className="mt-5 flex justify-end gap-2">
              {state.mode === "confirm" && (
                <Button variant="secondary" size="sm" onClick={() => handleResult(false)}>
                  {state.cancelLabel ?? "Cancelar"}
                </Button>
              )}
              <Button
                variant={state.variant === "danger" ? "danger" : "primary"}
                size="sm"
                onClick={() => handleResult(true)}
              >
                {state.confirmLabel ?? "OK"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </AlertDialogContext.Provider>
  );
}

export function useAlertDialog() {
  const ctx = useContext(AlertDialogContext);
  if (!ctx) {
    throw new Error("useAlertDialog deve ser usado dentro de AlertDialogProvider");
  }
  return ctx;
}
