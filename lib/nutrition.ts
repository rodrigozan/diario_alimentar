export type MealType = "breakfast" | "lunch" | "dinner" | "snack";

export type MealLike = {
  _id?: string;
  type: MealType;
  name: string;
  calories: number;
  carbG: number;
  proteinG: number;
  fatG: number;
  photoUrl?: string | null;
  date: string;
};

export const MEAL_TYPE_LABEL: Record<MealType, string> = {
  breakfast: "Café da Manhã",
  lunch: "Almoço",
  dinner: "Jantar",
  snack: "Lanche",
};

export const MEAL_TYPE_ORDER: MealType[] = ["breakfast", "lunch", "dinner", "snack"];

export function sumMeals(meals: MealLike[]) {
  return meals.reduce(
    (acc, meal) => {
      acc.calories += meal.calories;
      acc.carbG += meal.carbG;
      acc.proteinG += meal.proteinG;
      acc.fatG += meal.fatG;
      return acc;
    },
    { calories: 0, carbG: 0, proteinG: 0, fatG: 0 }
  );
}

export function clampPercent(value: number, goal: number) {
  if (goal <= 0) return 0;
  return Math.max(0, Math.min(100, (value / goal) * 100));
}
