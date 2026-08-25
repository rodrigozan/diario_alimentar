import type { MealType } from "@/lib/nutrition";

export type FoodCategory =
  | "Carnes"
  | "Frango"
  | "Peixes"
  | "Ovos"
  | "Arroz e Grãos"
  | "Tubérculos"
  | "Pães"
  | "Bebidas"
  | "Frutas"
  | "Laticínios"
  | "Oleaginosas e Gorduras"
  | "Legumes e Verduras"
  | "Suplementos";

export const FOOD_CATEGORY_ORDER: FoodCategory[] = [
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
];

export type FoodUnit = {
  label: string;
  grams: number;
};

export type Food = {
  id: string;
  name: string;
  category: FoodCategory;
  mealTypes: MealType[];
  kcalPer100g: number;
  carbPer100gG: number;
  proteinPer100gG: number;
  fatPer100gG: number;
  units?: FoodUnit[];
};

export function getFoodById(foods: Food[], id: string): Food | undefined {
  return foods.find((food) => food.id === id);
}

export function getFoodsByCategory(
  foods: Food[],
  category: FoodCategory,
  mealType?: MealType
): Food[] {
  return foods.filter(
    (food) => food.category === category && (!mealType || food.mealTypes.includes(mealType))
  );
}

export function getCategoriesForMealType(foods: Food[], mealType: MealType): FoodCategory[] {
  const available = new Set(
    foods.filter((food) => food.mealTypes.includes(mealType)).map((food) => food.category)
  );
  return FOOD_CATEGORY_ORDER.filter((category) => available.has(category));
}

export function calculateMacrosFromFood(food: Food, quantityG: number) {
  const factor = quantityG / 100;
  return {
    calories: Math.round(food.kcalPer100g * factor),
    carbG: Math.round(food.carbPer100gG * factor * 10) / 10,
    proteinG: Math.round(food.proteinPer100gG * factor * 10) / 10,
    fatG: Math.round(food.fatPer100gG * factor * 10) / 10,
  };
}

export function convertToGrams(food: Food, quantity: number, unitLabel: string): number {
  if (unitLabel === "g") return quantity;
  const unit = food.units?.find((u) => u.label === unitLabel);
  return unit ? unit.grams * quantity : quantity;
}
