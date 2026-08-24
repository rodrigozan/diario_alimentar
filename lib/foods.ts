export type Food = {
  id: string;
  name: string;
  kcalPer100g: number;
  carbPer100gG: number;
  proteinPer100gG: number;
  fatPer100gG: number;
};

export const FOODS: Food[] = [
  { id: "arroz-branco", name: "Arroz branco cozido", kcalPer100g: 128, carbPer100gG: 28.1, proteinPer100gG: 2.5, fatPer100gG: 0.2 },
  { id: "arroz-integral", name: "Arroz integral cozido", kcalPer100g: 124, carbPer100gG: 25.8, proteinPer100gG: 2.6, fatPer100gG: 1 },
  { id: "feijao-carioca", name: "Feijão carioca cozido", kcalPer100g: 76, carbPer100gG: 13.6, proteinPer100gG: 4.8, fatPer100gG: 0.5 },
  { id: "feijao-preto", name: "Feijão preto cozido", kcalPer100g: 77, carbPer100gG: 14, proteinPer100gG: 4.5, fatPer100gG: 0.5 },
  { id: "frango-peito-grelhado", name: "Peito de frango grelhado", kcalPer100g: 159, carbPer100gG: 0, proteinPer100gG: 32, fatPer100gG: 2.5 },
  { id: "frango-coxa", name: "Coxa de frango assada", kcalPer100g: 195, carbPer100gG: 0, proteinPer100gG: 26, fatPer100gG: 9.3 },
  { id: "carne-bovina-patinho", name: "Carne bovina (patinho) grelhada", kcalPer100g: 219, carbPer100gG: 0, proteinPer100gG: 35.9, fatPer100gG: 7.3 },
  { id: "carne-moida", name: "Carne moída refogada", kcalPer100g: 212, carbPer100gG: 0, proteinPer100gG: 26.7, fatPer100gG: 11.2 },
  { id: "ovo-cozido", name: "Ovo cozido", kcalPer100g: 146, carbPer100gG: 0.6, proteinPer100gG: 13.3, fatPer100gG: 9.5 },
  { id: "ovo-mexido", name: "Ovo mexido", kcalPer100g: 196, carbPer100gG: 1.2, proteinPer100gG: 13.6, fatPer100gG: 14.9 },
  { id: "tilapia-grelhada", name: "Tilápia grelhada", kcalPer100g: 128, carbPer100gG: 0, proteinPer100gG: 26, fatPer100gG: 2.7 },
  { id: "salmao-grelhado", name: "Salmão grelhado", kcalPer100g: 208, carbPer100gG: 0, proteinPer100gG: 25.4, fatPer100gG: 11.4 },
  { id: "batata-doce", name: "Batata-doce cozida", kcalPer100g: 77, carbPer100gG: 18.4, proteinPer100gG: 0.6, fatPer100gG: 0.1 },
  { id: "batata-inglesa", name: "Batata inglesa cozida", kcalPer100g: 52, carbPer100gG: 11.9, proteinPer100gG: 1.2, fatPer100gG: 0.1 },
  { id: "mandioca", name: "Mandioca cozida", kcalPer100g: 125, carbPer100gG: 30.1, proteinPer100gG: 0.6, fatPer100gG: 0.3 },
  { id: "pao-frances", name: "Pão francês", kcalPer100g: 300, carbPer100gG: 58.6, proteinPer100gG: 8, fatPer100gG: 3.1 },
  { id: "pao-integral", name: "Pão de forma integral", kcalPer100g: 253, carbPer100gG: 43.5, proteinPer100gG: 9.4, fatPer100gG: 3.9 },
  { id: "aveia-flocos", name: "Aveia em flocos", kcalPer100g: 394, carbPer100gG: 66.6, proteinPer100gG: 13.9, fatPer100gG: 8.5 },
  { id: "tapioca", name: "Tapioca (goma hidratada)", kcalPer100g: 143, carbPer100gG: 35, proteinPer100gG: 0.1, fatPer100gG: 0 },
  { id: "banana", name: "Banana", kcalPer100g: 89, carbPer100gG: 22.8, proteinPer100gG: 1.1, fatPer100gG: 0.3 },
  { id: "maca", name: "Maçã", kcalPer100g: 52, carbPer100gG: 13.8, proteinPer100gG: 0.3, fatPer100gG: 0.2 },
  { id: "mamao", name: "Mamão", kcalPer100g: 43, carbPer100gG: 10.8, proteinPer100gG: 0.5, fatPer100gG: 0.3 },
  { id: "laranja", name: "Laranja", kcalPer100g: 47, carbPer100gG: 11.8, proteinPer100gG: 0.9, fatPer100gG: 0.1 },
  { id: "morango", name: "Morango", kcalPer100g: 32, carbPer100gG: 7.7, proteinPer100gG: 0.7, fatPer100gG: 0.3 },
  { id: "abacate", name: "Abacate", kcalPer100g: 160, carbPer100gG: 8.5, proteinPer100gG: 2, fatPer100gG: 14.7 },
  { id: "iogurte-natural", name: "Iogurte natural", kcalPer100g: 61, carbPer100gG: 4.7, proteinPer100gG: 3.5, fatPer100gG: 3.3 },
  { id: "iogurte-grego", name: "Iogurte grego natural", kcalPer100g: 97, carbPer100gG: 3.6, proteinPer100gG: 9, fatPer100gG: 5 },
  { id: "leite-integral", name: "Leite integral", kcalPer100g: 61, carbPer100gG: 4.7, proteinPer100gG: 3.2, fatPer100gG: 3.3 },
  { id: "queijo-minas", name: "Queijo minas frescal", kcalPer100g: 264, carbPer100gG: 3.2, proteinPer100gG: 17.4, fatPer100gG: 20.2 },
  { id: "requeijao", name: "Requeijão cremoso", kcalPer100g: 257, carbPer100gG: 3, proteinPer100gG: 9.6, fatPer100gG: 23.3 },
  { id: "whey-protein", name: "Whey protein (pó)", kcalPer100g: 400, carbPer100gG: 7, proteinPer100gG: 80, fatPer100gG: 6.5 },
  { id: "pasta-amendoim", name: "Pasta de amendoim", kcalPer100g: 588, carbPer100gG: 20, proteinPer100gG: 25, fatPer100gG: 50 },
  { id: "castanha-para", name: "Castanha-do-pará", kcalPer100g: 656, carbPer100gG: 12.8, proteinPer100gG: 14.5, fatPer100gG: 63.5 },
  { id: "amendoas", name: "Amêndoas", kcalPer100g: 579, carbPer100gG: 21.6, proteinPer100gG: 21.2, fatPer100gG: 49.9 },
  { id: "brocolis", name: "Brócolis cozido", kcalPer100g: 25, carbPer100gG: 4.4, proteinPer100gG: 2.1, fatPer100gG: 0.3 },
  { id: "alface", name: "Alface", kcalPer100g: 15, carbPer100gG: 2.9, proteinPer100gG: 1.4, fatPer100gG: 0.2 },
  { id: "tomate", name: "Tomate", kcalPer100g: 18, carbPer100gG: 3.9, proteinPer100gG: 0.9, fatPer100gG: 0.2 },
  { id: "cenoura", name: "Cenoura crua", kcalPer100g: 41, carbPer100gG: 9.6, proteinPer100gG: 0.9, fatPer100gG: 0.2 },
  { id: "macarrao", name: "Macarrão cozido", kcalPer100g: 158, carbPer100gG: 30.9, proteinPer100gG: 5.8, fatPer100gG: 0.9 },
  { id: "azeite-oliva", name: "Azeite de oliva", kcalPer100g: 884, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 100 },
  { id: "granola", name: "Granola", kcalPer100g: 471, carbPer100gG: 64, proteinPer100gG: 10, fatPer100gG: 20 },
];

export function getFoodById(id: string): Food | undefined {
  return FOODS.find((food) => food.id === id);
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
