export type FoodCategory =
  | "Carnes"
  | "Frango"
  | "Peixes"
  | "Ovos"
  | "Arroz e Grãos"
  | "Tubérculos"
  | "Pães"
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
  kcalPer100g: number;
  carbPer100gG: number;
  proteinPer100gG: number;
  fatPer100gG: number;
  units?: FoodUnit[];
};

export const FOODS: Food[] = [
  { id: "arroz-branco", name: "Arroz branco cozido", category: "Arroz e Grãos", kcalPer100g: 128, carbPer100gG: 28.1, proteinPer100gG: 2.5, fatPer100gG: 0.2, units: [{ label: "colher de sopa", grams: 25 }] },
  { id: "arroz-integral", name: "Arroz integral cozido", category: "Arroz e Grãos", kcalPer100g: 124, carbPer100gG: 25.8, proteinPer100gG: 2.6, fatPer100gG: 1, units: [{ label: "colher de sopa", grams: 25 }] },
  { id: "feijao-carioca", name: "Feijão carioca cozido", category: "Arroz e Grãos", kcalPer100g: 76, carbPer100gG: 13.6, proteinPer100gG: 4.8, fatPer100gG: 0.5, units: [{ label: "concha", grams: 80 }] },
  { id: "feijao-preto", name: "Feijão preto cozido", category: "Arroz e Grãos", kcalPer100g: 77, carbPer100gG: 14, proteinPer100gG: 4.5, fatPer100gG: 0.5, units: [{ label: "concha", grams: 80 }] },
  { id: "aveia-flocos", name: "Aveia em flocos", category: "Arroz e Grãos", kcalPer100g: 394, carbPer100gG: 66.6, proteinPer100gG: 13.9, fatPer100gG: 8.5, units: [{ label: "colher de sopa", grams: 15 }] },
  { id: "macarrao", name: "Macarrão cozido", category: "Arroz e Grãos", kcalPer100g: 158, carbPer100gG: 30.9, proteinPer100gG: 5.8, fatPer100gG: 0.9 },
  { id: "granola", name: "Granola", category: "Arroz e Grãos", kcalPer100g: 471, carbPer100gG: 64, proteinPer100gG: 10, fatPer100gG: 20, units: [{ label: "colher de sopa", grams: 15 }] },

  { id: "frango-peito-grelhado", name: "Peito de frango grelhado", category: "Frango", kcalPer100g: 159, carbPer100gG: 0, proteinPer100gG: 32, fatPer100gG: 2.5, units: [{ label: "filé", grams: 120 }] },
  { id: "frango-peito-empanado", name: "Peito de frango empanado (frito)", category: "Frango", kcalPer100g: 260, carbPer100gG: 12, proteinPer100gG: 17, fatPer100gG: 16, units: [{ label: "pedaço", grams: 100 }] },
  { id: "frango-coxa", name: "Coxa de frango assada", category: "Frango", kcalPer100g: 195, carbPer100gG: 0, proteinPer100gG: 26, fatPer100gG: 9.3, units: [{ label: "unidade", grams: 90 }] },
  { id: "frango-coxa-empanada", name: "Coxa de frango empanada (frita)", category: "Frango", kcalPer100g: 280, carbPer100gG: 11, proteinPer100gG: 18, fatPer100gG: 18, units: [{ label: "pedaço", grams: 100 }] },
  { id: "frango-nuggets", name: "Nuggets de frango", category: "Frango", kcalPer100g: 296, carbPer100gG: 15, proteinPer100gG: 15, fatPer100gG: 19, units: [{ label: "unidade", grams: 18 }] },
  { id: "frango-a-passarinho", name: "Frango a passarinho (frito)", category: "Frango", kcalPer100g: 275, carbPer100gG: 8, proteinPer100gG: 20, fatPer100gG: 18, units: [{ label: "pedaço", grams: 60 }] },

  { id: "carne-bovina-patinho", name: "Carne bovina (patinho) grelhada", category: "Carnes", kcalPer100g: 219, carbPer100gG: 0, proteinPer100gG: 35.9, fatPer100gG: 7.3, units: [{ label: "filé", grams: 120 }] },
  { id: "carne-moida", name: "Carne moída refogada", category: "Carnes", kcalPer100g: 212, carbPer100gG: 0, proteinPer100gG: 26.7, fatPer100gG: 11.2, units: [{ label: "colher de sopa", grams: 30 }] },

  { id: "ovo-cozido", name: "Ovo cozido", category: "Ovos", kcalPer100g: 146, carbPer100gG: 0.6, proteinPer100gG: 13.3, fatPer100gG: 9.5, units: [{ label: "unidade", grams: 50 }] },
  { id: "ovo-mexido", name: "Ovo mexido", category: "Ovos", kcalPer100g: 196, carbPer100gG: 1.2, proteinPer100gG: 13.6, fatPer100gG: 14.9, units: [{ label: "unidade", grams: 50 }] },

  { id: "tilapia-grelhada", name: "Tilápia grelhada", category: "Peixes", kcalPer100g: 128, carbPer100gG: 0, proteinPer100gG: 26, fatPer100gG: 2.7, units: [{ label: "filé", grams: 120 }] },
  { id: "salmao-grelhado", name: "Salmão grelhado", category: "Peixes", kcalPer100g: 208, carbPer100gG: 0, proteinPer100gG: 25.4, fatPer100gG: 11.4, units: [{ label: "filé", grams: 120 }] },

  { id: "batata-doce", name: "Batata-doce cozida", category: "Tubérculos", kcalPer100g: 77, carbPer100gG: 18.4, proteinPer100gG: 0.6, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 130 }] },
  { id: "batata-inglesa", name: "Batata inglesa cozida", category: "Tubérculos", kcalPer100g: 52, carbPer100gG: 11.9, proteinPer100gG: 1.2, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 130 }] },
  { id: "mandioca", name: "Mandioca cozida", category: "Tubérculos", kcalPer100g: 125, carbPer100gG: 30.1, proteinPer100gG: 0.6, fatPer100gG: 0.3, units: [{ label: "pedaço", grams: 100 }] },

  { id: "pao-frances", name: "Pão francês", category: "Pães", kcalPer100g: 300, carbPer100gG: 58.6, proteinPer100gG: 8, fatPer100gG: 3.1, units: [{ label: "unidade", grams: 50 }] },
  { id: "pao-integral", name: "Pão de forma integral", category: "Pães", kcalPer100g: 253, carbPer100gG: 43.5, proteinPer100gG: 9.4, fatPer100gG: 3.9, units: [{ label: "fatia", grams: 25 }] },
  { id: "tapioca", name: "Tapioca (goma hidratada)", category: "Pães", kcalPer100g: 143, carbPer100gG: 35, proteinPer100gG: 0.1, fatPer100gG: 0, units: [{ label: "unidade", grams: 80 }] },

  { id: "banana", name: "Banana", category: "Frutas", kcalPer100g: 89, carbPer100gG: 22.8, proteinPer100gG: 1.1, fatPer100gG: 0.3, units: [{ label: "unidade", grams: 100 }] },
  { id: "maca", name: "Maçã", category: "Frutas", kcalPer100g: 52, carbPer100gG: 13.8, proteinPer100gG: 0.3, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 130 }] },
  { id: "mamao", name: "Mamão", category: "Frutas", kcalPer100g: 43, carbPer100gG: 10.8, proteinPer100gG: 0.5, fatPer100gG: 0.3, units: [{ label: "fatia", grams: 160 }] },
  { id: "laranja", name: "Laranja", category: "Frutas", kcalPer100g: 47, carbPer100gG: 11.8, proteinPer100gG: 0.9, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 180 }] },
  { id: "morango", name: "Morango", category: "Frutas", kcalPer100g: 32, carbPer100gG: 7.7, proteinPer100gG: 0.7, fatPer100gG: 0.3, units: [{ label: "unidade", grams: 12 }] },
  { id: "abacate", name: "Abacate", category: "Frutas", kcalPer100g: 160, carbPer100gG: 8.5, proteinPer100gG: 2, fatPer100gG: 14.7, units: [{ label: "unidade", grams: 200 }] },

  { id: "iogurte-natural", name: "Iogurte natural", category: "Laticínios", kcalPer100g: 61, carbPer100gG: 4.7, proteinPer100gG: 3.5, fatPer100gG: 3.3, units: [{ label: "pote", grams: 170 }] },
  { id: "iogurte-grego", name: "Iogurte grego natural", category: "Laticínios", kcalPer100g: 97, carbPer100gG: 3.6, proteinPer100gG: 9, fatPer100gG: 5, units: [{ label: "pote", grams: 100 }] },
  { id: "leite-integral", name: "Leite integral", category: "Laticínios", kcalPer100g: 61, carbPer100gG: 4.7, proteinPer100gG: 3.2, fatPer100gG: 3.3, units: [{ label: "copo", grams: 200 }] },
  { id: "queijo-minas", name: "Queijo minas frescal", category: "Laticínios", kcalPer100g: 264, carbPer100gG: 3.2, proteinPer100gG: 17.4, fatPer100gG: 20.2, units: [{ label: "fatia", grams: 30 }] },
  { id: "requeijao", name: "Requeijão cremoso", category: "Laticínios", kcalPer100g: 257, carbPer100gG: 3, proteinPer100gG: 9.6, fatPer100gG: 23.3, units: [{ label: "colher de sopa", grams: 20 }] },

  { id: "whey-protein", name: "Whey protein (pó)", category: "Suplementos", kcalPer100g: 400, carbPer100gG: 7, proteinPer100gG: 80, fatPer100gG: 6.5, units: [{ label: "dose (scoop)", grams: 30 }] },

  { id: "pasta-amendoim", name: "Pasta de amendoim", category: "Oleaginosas e Gorduras", kcalPer100g: 588, carbPer100gG: 20, proteinPer100gG: 25, fatPer100gG: 50, units: [{ label: "colher de sopa", grams: 15 }] },
  { id: "castanha-para", name: "Castanha-do-pará", category: "Oleaginosas e Gorduras", kcalPer100g: 656, carbPer100gG: 12.8, proteinPer100gG: 14.5, fatPer100gG: 63.5, units: [{ label: "unidade", grams: 5 }] },
  { id: "amendoas", name: "Amêndoas", category: "Oleaginosas e Gorduras", kcalPer100g: 579, carbPer100gG: 21.6, proteinPer100gG: 21.2, fatPer100gG: 49.9, units: [{ label: "unidade", grams: 1.2 }] },
  { id: "azeite-oliva", name: "Azeite de oliva", category: "Oleaginosas e Gorduras", kcalPer100g: 884, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 100, units: [{ label: "colher de sopa", grams: 13 }] },

  { id: "brocolis", name: "Brócolis cozido", category: "Legumes e Verduras", kcalPer100g: 25, carbPer100gG: 4.4, proteinPer100gG: 2.1, fatPer100gG: 0.3, units: [{ label: "porção", grams: 90 }] },
  { id: "alface", name: "Alface", category: "Legumes e Verduras", kcalPer100g: 15, carbPer100gG: 2.9, proteinPer100gG: 1.4, fatPer100gG: 0.2, units: [{ label: "folha", grams: 10 }] },
  { id: "tomate", name: "Tomate", category: "Legumes e Verduras", kcalPer100g: 18, carbPer100gG: 3.9, proteinPer100gG: 0.9, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 120 }] },
  { id: "cenoura", name: "Cenoura crua", category: "Legumes e Verduras", kcalPer100g: 41, carbPer100gG: 9.6, proteinPer100gG: 0.9, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 80 }] },
];

export function getFoodById(id: string): Food | undefined {
  return FOODS.find((food) => food.id === id);
}

export function getFoodsByCategory(category: FoodCategory): Food[] {
  return FOODS.filter((food) => food.category === category);
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
