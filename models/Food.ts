import { Schema, model, models, type InferSchemaType } from "mongoose";
import { MEAL_TYPES } from "./Meal";

export const FOOD_CATEGORIES = [
  "Carnes",
  "Frango",
  "Peixes",
  "Ovos",
  "Arroz e Grãos",
  "Tubérculos",
  "Pães",
  "Bebidas",
  "Frutas",
  "Laticínios",
  "Oleaginosas e Gorduras",
  "Legumes e Verduras",
  "Suplementos",
] as const;
export type FoodCategory = (typeof FOOD_CATEGORIES)[number];

const foodUnitSchema = new Schema(
  {
    label: { type: String, required: true },
    grams: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const foodSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true, trim: true },
    category: { type: String, enum: FOOD_CATEGORIES, required: true, index: true },
    // Which meal types this food is allowed for (e.g. Bebidas -> only "drink").
    mealTypes: { type: [String], enum: MEAL_TYPES, required: true },
    kcalPer100g: { type: Number, required: true, min: 0 },
    carbPer100gG: { type: Number, required: true, min: 0 },
    proteinPer100gG: { type: Number, required: true, min: 0 },
    fatPer100gG: { type: Number, required: true, min: 0 },
    units: { type: [foodUnitSchema], default: [] },
  },
  { timestamps: true }
);

export type FoodDoc = InferSchemaType<typeof foodSchema>;

export const Food = models.Food || model("Food", foodSchema);
