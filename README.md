# Diário Alimentar

App de diário alimentar para registro de calorias, macronutrientes (carboidrato,
proteína, gordura) e consumo de água — mobile-first, com dark mode como padrão.
Construído em Next.js (App Router) + MongoDB, com autenticação via Google OAuth
e usuário/senha.

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS 3** com o design system do produto (`tailwind.config.ts`)
- **MongoDB / Mongoose** para persistência (usuários, refeições, registros de água)
- **Auth.js (NextAuth v5)** com provedores Google e Credentials (e-mail/senha)
- **Recharts** para o gráfico semanal de evolução

## Configuração

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie `.env.example` para `.env.local` e preencha as variáveis:

   ```bash
   cp .env.example .env.local
   ```

   - `MONGODB_URI`: string de conexão do MongoDB.
   - `AUTH_SECRET`: gere com `openssl rand -base64 32`.
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`: credenciais OAuth do
     [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
     (URI de redirecionamento: `<sua-url>/api/auth/callback/google`).

3. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/` — rotas (App Router): dashboard (`/`), histórico (`/history`), perfil
  (`/profile`), login/registro e API routes (`app/api/*`).
- `components/dashboard/` — componentes do design system: `CalorieRing`,
  `MacroBar`, `WaterWidget`, `MealCard`, `WeeklyChart`, `FloatingActionButton`.
- `components/layout/` — casca do app (sidebar no desktop, tab bar no mobile).
- `components/auth/` — telas de login/registro.
- `models/` — schemas Mongoose (`User`, `Meal`, `WaterLog`).
- `auth.ts` / `proxy.ts` — configuração do NextAuth e proteção de rotas.

## Design system

Paleta, tipografia (Inter), raios e escala de espaçamento seguem o PRD do
produto e estão centralizados em `tailwind.config.ts`. Cores de macro são
fixas em todo o app (carboidrato = âmbar, proteína = coral, gordura = azul,
água = ciano) para permitir leitura rápida dos gráficos.
