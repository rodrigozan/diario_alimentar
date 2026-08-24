import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AlertDialogProvider } from "@/components/ui/AlertDialog";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diário Alimentar",
  description: "Registre calorias, macros e água do seu dia.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0D1117",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} h-full`}>
      <body className="min-h-full font-sans text-body text-text-primary antialiased">
        <AlertDialogProvider>{children}</AlertDialogProvider>
      </body>
    </html>
  );
}
