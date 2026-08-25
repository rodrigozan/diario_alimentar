export type MealType = "breakfast" | "lunch" | "dinner" | "snack" | "drink";

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
  drink: "Bebida",
};

export const MEAL_TYPE_ORDER: MealType[] = ["breakfast", "lunch", "dinner", "snack", "drink"];

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

export function estimateProteinG(calories: number, carbG: number, fatG: number) {
  const remainingKcal = calories - carbG * 4 - fatG * 9;
  return Math.max(0, Math.round(remainingKcal / 4));
}

export function calculateBmi(heightCm: number, weightKg: number) {
  if (heightCm <= 0 || weightKg <= 0) return 0;
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

export function classifyBmi(bmi: number) {
  if (bmi <= 0) return "";
  if (bmi < 18.5) return "Abaixo do peso";
  if (bmi < 25) return "Peso normal";
  if (bmi < 30) return "Sobrepeso";
  if (bmi < 35) return "Obesidade grau I";
  if (bmi < 40) return "Obesidade grau II";
  return "Obesidade grau III";
}
