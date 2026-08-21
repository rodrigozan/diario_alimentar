"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input, Label } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconGoogle } from "@/components/icons";

export function LoginForm({ callbackUrl }: { callbackUrl: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      setError("E-mail ou senha incorretos.");
      return;
    }
    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <div>
      <h1 className="text-h1 text-text-primary">Bem-vindo de volta</h1>
      <p className="mt-1.5 text-body text-text-secondary">
        Entre para continuar registrando seu dia.
      </p>

      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl })}
        className="mt-6 flex h-11 w-full items-center justify-center gap-2.5 rounded-button border border-border bg-surface text-body font-medium text-text-primary transition-colors hover:border-text-secondary/50"
      >
        <IconGoogle className="h-[18px] w-[18px]" />
        Continuar com Google
      </button>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-caption text-text-secondary">ou</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        {error && <p className="mb-3.5 text-caption text-error">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
      </form>

      <p className="mt-5 text-center text-caption text-text-secondary">
        Ainda não tem conta?{" "}
        <Link href="/register" className="font-medium text-primary">
          Criar conta
        </Link>
      </p>
    </div>
  );
}
