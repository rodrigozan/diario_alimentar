import { z } from "zod";
import { MEAL_TYPES } from "@/models/Meal";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo."),
  email: z.string().trim().email("E-mail inválido."),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
});

export const mealSchema = z.object({
  type: z.enum(MEAL_TYPES),
  name: z.string().trim().min(1, "Dê um nome para a refeição."),
  calories: z.number().min(0).max(10000),
  carbG: z.number().min(0).max(2000).default(0),
  proteinG: z.number().min(0).max(2000).default(0),
  fatG: z.number().min(0).max(2000).default(0),
  photoUrl: z.string().trim().optional().nullable(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data inválida."),
});

export const waterSchema = z.object({
  amountMl: z.number().min(1).max(5000),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data inválida."),
});

export const goalsSchema = z.object({
  calories: z.number().min(500).max(10000),
  carbG: z.number().min(0).max(2000),
  proteinG: z.number().min(0).max(2000),
  fatG: z.number().min(0).max(2000),
  waterMl: z.number().min(0).max(10000),
});

export const bodyMetricsSchema = z.object({
  heightCm: z.number().min(50).max(272),
  weightKg: z.number().min(20).max(500),
});
