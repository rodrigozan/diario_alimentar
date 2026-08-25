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
  { id: "lentilha", name: "Lentilha cozida", category: "Arroz e Grãos", kcalPer100g: 93, carbPer100gG: 16.3, proteinPer100gG: 6.3, fatPer100gG: 0.5, units: [{ label: "concha", grams: 80 }] },
  { id: "grao-de-bico", name: "Grão-de-bico cozido", category: "Arroz e Grãos", kcalPer100g: 121, carbPer100gG: 20.4, proteinPer100gG: 7, fatPer100gG: 1.9, units: [{ label: "concha", grams: 80 }] },
  { id: "ervilha", name: "Ervilha cozida", category: "Arroz e Grãos", kcalPer100g: 79, carbPer100gG: 14.2, proteinPer100gG: 5.4, fatPer100gG: 0.3, units: [{ label: "colher de sopa", grams: 25 }] },
  { id: "quinoa", name: "Quinoa cozida", category: "Arroz e Grãos", kcalPer100g: 120, carbPer100gG: 21.3, proteinPer100gG: 4.4, fatPer100gG: 1.9, units: [{ label: "colher de sopa", grams: 25 }] },
  { id: "aveia-flocos", name: "Aveia em flocos", category: "Arroz e Grãos", kcalPer100g: 394, carbPer100gG: 66.6, proteinPer100gG: 13.9, fatPer100gG: 8.5, units: [{ label: "colher de sopa", grams: 15 }] },
  { id: "macarrao", name: "Macarrão cozido", category: "Arroz e Grãos", kcalPer100g: 158, carbPer100gG: 30.9, proteinPer100gG: 5.8, fatPer100gG: 0.9 },
  { id: "macarrao-integral", name: "Macarrão integral cozido", category: "Arroz e Grãos", kcalPer100g: 124, carbPer100gG: 25.2, proteinPer100gG: 5.3, fatPer100gG: 0.9 },
  { id: "polenta", name: "Polenta cozida", category: "Arroz e Grãos", kcalPer100g: 62, carbPer100gG: 13.5, proteinPer100gG: 1.4, fatPer100gG: 0.3 },
  { id: "cuscuz", name: "Cuscuz de milho", category: "Arroz e Grãos", kcalPer100g: 112, carbPer100gG: 25, proteinPer100gG: 2.1, fatPer100gG: 0.2, units: [{ label: "fatia", grams: 100 }] },
  { id: "granola", name: "Granola", category: "Arroz e Grãos", kcalPer100g: 471, carbPer100gG: 64, proteinPer100gG: 10, fatPer100gG: 20, units: [{ label: "colher de sopa", grams: 15 }] },

  { id: "frango-peito-grelhado", name: "Peito de frango grelhado", category: "Frango", kcalPer100g: 159, carbPer100gG: 0, proteinPer100gG: 32, fatPer100gG: 2.5, units: [{ label: "filé", grams: 120 }] },
  { id: "frango-peito-empanado", name: "Peito de frango empanado (frito)", category: "Frango", kcalPer100g: 260, carbPer100gG: 12, proteinPer100gG: 17, fatPer100gG: 16, units: [{ label: "pedaço", grams: 100 }] },
  { id: "frango-coxa", name: "Coxa de frango assada", category: "Frango", kcalPer100g: 195, carbPer100gG: 0, proteinPer100gG: 26, fatPer100gG: 9.3, units: [{ label: "unidade", grams: 90 }] },
  { id: "frango-coxa-empanada", name: "Coxa de frango empanada (frita)", category: "Frango", kcalPer100g: 280, carbPer100gG: 11, proteinPer100gG: 18, fatPer100gG: 18, units: [{ label: "pedaço", grams: 100 }] },
  { id: "frango-sobrecoxa", name: "Sobrecoxa de frango assada", category: "Frango", kcalPer100g: 209, carbPer100gG: 0, proteinPer100gG: 24.4, fatPer100gG: 11.9, units: [{ label: "unidade", grams: 100 }] },
  { id: "frango-desfiado", name: "Frango desfiado cozido", category: "Frango", kcalPer100g: 163, carbPer100gG: 0, proteinPer100gG: 30, fatPer100gG: 4, units: [{ label: "colher de sopa", grams: 30 }] },
  { id: "frango-nuggets", name: "Nuggets de frango", category: "Frango", kcalPer100g: 296, carbPer100gG: 15, proteinPer100gG: 15, fatPer100gG: 19, units: [{ label: "unidade", grams: 18 }] },
  { id: "frango-a-passarinho", name: "Frango a passarinho (frito)", category: "Frango", kcalPer100g: 275, carbPer100gG: 8, proteinPer100gG: 20, fatPer100gG: 18, units: [{ label: "pedaço", grams: 60 }] },
  { id: "peru-peito", name: "Peito de peru defumado", category: "Frango", kcalPer100g: 111, carbPer100gG: 1.5, proteinPer100gG: 22, fatPer100gG: 1.7, units: [{ label: "fatia", grams: 20 }] },

  { id: "carne-bovina-patinho", name: "Carne bovina (patinho) grelhada", category: "Carnes", kcalPer100g: 219, carbPer100gG: 0, proteinPer100gG: 35.9, fatPer100gG: 7.3, units: [{ label: "filé", grams: 120 }, { label: "pedaço", grams: 100 }, { label: "porção", grams: 150 }] },
  { id: "carne-moida", name: "Carne moída refogada", category: "Carnes", kcalPer100g: 212, carbPer100gG: 0, proteinPer100gG: 26.7, fatPer100gG: 11.2, units: [{ label: "colher de sopa", grams: 30 }, { label: "porção", grams: 100 }] },
  { id: "carne-alcatra", name: "Alcatra grelhada", category: "Carnes", kcalPer100g: 196, carbPer100gG: 0, proteinPer100gG: 32.6, fatPer100gG: 6.6, units: [{ label: "filé", grams: 120 }, { label: "pedaço", grams: 100 }, { label: "porção", grams: 150 }] },
  { id: "carne-picanha", name: "Picanha grelhada", category: "Carnes", kcalPer100g: 289, carbPer100gG: 0, proteinPer100gG: 26.9, fatPer100gG: 19.6, units: [{ label: "fatia", grams: 100 }, { label: "pedaço", grams: 100 }, { label: "porção", grams: 150 }] },
  { id: "carne-costela", name: "Costela bovina assada", category: "Carnes", kcalPer100g: 270, carbPer100gG: 0, proteinPer100gG: 24.5, fatPer100gG: 18.7, units: [{ label: "pedaço", grams: 100 }, { label: "porção", grams: 150 }] },
  { id: "carne-seca", name: "Carne seca cozida", category: "Carnes", kcalPer100g: 250, carbPer100gG: 0, proteinPer100gG: 36, fatPer100gG: 11, units: [{ label: "pedaço", grams: 60 }, { label: "porção", grams: 80 }] },
  { id: "bacon", name: "Bacon frito", category: "Carnes", kcalPer100g: 541, carbPer100gG: 1.4, proteinPer100gG: 37, fatPer100gG: 42, units: [{ label: "fatia", grams: 8 }, { label: "porção", grams: 30 }] },
  { id: "linguica", name: "Linguiça toscana grelhada", category: "Carnes", kcalPer100g: 297, carbPer100gG: 1.5, proteinPer100gG: 15, fatPer100gG: 26, units: [{ label: "unidade", grams: 80 }, { label: "pedaço", grams: 50 }, { label: "porção", grams: 100 }] },
  { id: "calabresa", name: "Linguiça calabresa grelhada", category: "Carnes", kcalPer100g: 335, carbPer100gG: 1.6, proteinPer100gG: 15.4, fatPer100gG: 30, units: [{ label: "unidade", grams: 80 }, { label: "pedaço", grams: 50 }, { label: "porção", grams: 100 }] },
  { id: "presunto", name: "Presunto cozido", category: "Carnes", kcalPer100g: 106, carbPer100gG: 1.8, proteinPer100gG: 17.3, fatPer100gG: 3.2, units: [{ label: "fatia", grams: 15 }, { label: "porção", grams: 60 }] },
  { id: "carne-porco-lombo", name: "Lombo de porco assado", category: "Carnes", kcalPer100g: 210, carbPer100gG: 0, proteinPer100gG: 28.7, fatPer100gG: 10.1, units: [{ label: "fatia", grams: 100 }, { label: "pedaço", grams: 80 }, { label: "porção", grams: 150 }] },

  { id: "ovo-cozido", name: "Ovo cozido", category: "Ovos", kcalPer100g: 146, carbPer100gG: 0.6, proteinPer100gG: 13.3, fatPer100gG: 9.5, units: [{ label: "unidade", grams: 50 }] },
  { id: "ovo-mexido", name: "Ovo mexido", category: "Ovos", kcalPer100g: 196, carbPer100gG: 1.2, proteinPer100gG: 13.6, fatPer100gG: 14.9, units: [{ label: "unidade", grams: 50 }] },
  { id: "ovo-frito", name: "Ovo frito", category: "Ovos", kcalPer100g: 210, carbPer100gG: 0.9, proteinPer100gG: 13.6, fatPer100gG: 16.9, units: [{ label: "unidade", grams: 50 }] },
  { id: "ovo-clara", name: "Clara de ovo cozida", category: "Ovos", kcalPer100g: 52, carbPer100gG: 0.7, proteinPer100gG: 10.9, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 33 }] },
  { id: "omelete", name: "Omelete simples", category: "Ovos", kcalPer100g: 154, carbPer100gG: 1.5, proteinPer100gG: 11, fatPer100gG: 11.6, units: [{ label: "unidade", grams: 120 }] },

  { id: "tilapia-grelhada", name: "Tilápia grelhada", category: "Peixes", kcalPer100g: 128, carbPer100gG: 0, proteinPer100gG: 26, fatPer100gG: 2.7, units: [{ label: "filé", grams: 120 }] },
  { id: "salmao-grelhado", name: "Salmão grelhado", category: "Peixes", kcalPer100g: 208, carbPer100gG: 0, proteinPer100gG: 25.4, fatPer100gG: 11.4, units: [{ label: "filé", grams: 120 }] },
  { id: "atum-lata", name: "Atum em lata (óleo)", category: "Peixes", kcalPer100g: 189, carbPer100gG: 0, proteinPer100gG: 26.5, fatPer100gG: 8.6, units: [{ label: "lata", grams: 120 }] },
  { id: "atum-natural", name: "Atum em lata (natural)", category: "Peixes", kcalPer100g: 116, carbPer100gG: 0, proteinPer100gG: 25.5, fatPer100gG: 1, units: [{ label: "lata", grams: 120 }] },
  { id: "sardinha", name: "Sardinha grelhada", category: "Peixes", kcalPer100g: 168, carbPer100gG: 0, proteinPer100gG: 24.6, fatPer100gG: 7.4, units: [{ label: "unidade", grams: 50 }] },
  { id: "bacalhau", name: "Bacalhau dessalgado cozido", category: "Peixes", kcalPer100g: 105, carbPer100gG: 0, proteinPer100gG: 23, fatPer100gG: 0.9, units: [{ label: "posta", grams: 130 }] },
  { id: "camarao", name: "Camarão refogado", category: "Peixes", kcalPer100g: 106, carbPer100gG: 1.4, proteinPer100gG: 20.3, fatPer100gG: 1.7, units: [{ label: "porção", grams: 100 }] },

  { id: "batata-doce", name: "Batata-doce cozida", category: "Tubérculos", kcalPer100g: 77, carbPer100gG: 18.4, proteinPer100gG: 0.6, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 130 }] },
  { id: "batata-inglesa", name: "Batata inglesa cozida", category: "Tubérculos", kcalPer100g: 52, carbPer100gG: 11.9, proteinPer100gG: 1.2, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 130 }] },
  { id: "batata-frita", name: "Batata frita", category: "Tubérculos", kcalPer100g: 267, carbPer100gG: 35.5, proteinPer100gG: 4, fatPer100gG: 13.4, units: [{ label: "porção", grams: 100 }] },
  { id: "batata-pure", name: "Purê de batata", category: "Tubérculos", kcalPer100g: 78, carbPer100gG: 12.5, proteinPer100gG: 1.7, fatPer100gG: 2.5, units: [{ label: "colher de sopa", grams: 40 }] },
  { id: "mandioca", name: "Mandioca cozida", category: "Tubérculos", kcalPer100g: 125, carbPer100gG: 30.1, proteinPer100gG: 0.6, fatPer100gG: 0.3, units: [{ label: "pedaço", grams: 100 }] },
  { id: "mandioca-frita", name: "Mandioca frita", category: "Tubérculos", kcalPer100g: 273, carbPer100gG: 40, proteinPer100gG: 1.4, fatPer100gG: 11.5, units: [{ label: "porção", grams: 100 }] },
  { id: "inhame", name: "Inhame cozido", category: "Tubérculos", kcalPer100g: 97, carbPer100gG: 23.2, proteinPer100gG: 2, fatPer100gG: 0.1, units: [{ label: "pedaço", grams: 100 }] },
  { id: "cara", name: "Cará cozido", category: "Tubérculos", kcalPer100g: 98, carbPer100gG: 23.1, proteinPer100gG: 2.3, fatPer100gG: 0.2, units: [{ label: "pedaço", grams: 100 }] },

  { id: "pao-frances", name: "Pão francês", category: "Pães", kcalPer100g: 300, carbPer100gG: 58.6, proteinPer100gG: 8, fatPer100gG: 3.1, units: [{ label: "unidade", grams: 50 }] },
  { id: "pao-frances-fermentacao-natural", name: "Pão francês (fermentação natural)", category: "Pães", kcalPer100g: 255, carbPer100gG: 50, proteinPer100gG: 9.5, fatPer100gG: 1.5, units: [{ label: "unidade", grams: 50 }] },
  { id: "pao-integral", name: "Pão de forma integral", category: "Pães", kcalPer100g: 253, carbPer100gG: 43.5, proteinPer100gG: 9.4, fatPer100gG: 3.9, units: [{ label: "fatia", grams: 25 }] },
  { id: "pao-integral-fermentacao-natural", name: "Pão de forma integral (fermentação natural)", category: "Pães", kcalPer100g: 240, carbPer100gG: 42, proteinPer100gG: 10, fatPer100gG: 2.5, units: [{ label: "fatia", grams: 30 }] },
  { id: "pao-forma-branco", name: "Pão de forma branco", category: "Pães", kcalPer100g: 266, carbPer100gG: 50.6, proteinPer100gG: 8, fatPer100gG: 3.1, units: [{ label: "fatia", grams: 25 }] },
  { id: "pao-forma-branco-fermentacao-natural", name: "Pão de forma branco (fermentação natural)", category: "Pães", kcalPer100g: 250, carbPer100gG: 48, proteinPer100gG: 8.5, fatPer100gG: 1.8, units: [{ label: "fatia", grams: 30 }] },
  { id: "pao-de-queijo", name: "Pão de queijo", category: "Pães", kcalPer100g: 320, carbPer100gG: 30.6, proteinPer100gG: 6, fatPer100gG: 19.5, units: [{ label: "unidade", grams: 30 }] },
  { id: "tapioca", name: "Tapioca (goma hidratada)", category: "Pães", kcalPer100g: 143, carbPer100gG: 35, proteinPer100gG: 0.1, fatPer100gG: 0, units: [{ label: "unidade", grams: 80 }] },
  { id: "torrada", name: "Torrada integral", category: "Pães", kcalPer100g: 411, carbPer100gG: 74, proteinPer100gG: 12, fatPer100gG: 6, units: [{ label: "unidade", grams: 8 }] },
  { id: "biscoito-cream-cracker", name: "Biscoito cream cracker", category: "Pães", kcalPer100g: 432, carbPer100gG: 71.9, proteinPer100gG: 10.1, fatPer100gG: 11.9, units: [{ label: "unidade", grams: 7 }] },
  { id: "pao-hamburguer", name: "Pão de hambúrguer", category: "Pães", kcalPer100g: 280, carbPer100gG: 50, proteinPer100gG: 9, fatPer100gG: 4.5, units: [{ label: "unidade", grams: 60 }] },
  { id: "pao-hamburguer-fermentacao-natural", name: "Pão de hambúrguer (fermentação natural)", category: "Pães", kcalPer100g: 260, carbPer100gG: 47, proteinPer100gG: 9, fatPer100gG: 3, units: [{ label: "unidade", grams: 60 }] },
  { id: "brioche", name: "Brioche", category: "Pães", kcalPer100g: 375, carbPer100gG: 45, proteinPer100gG: 8, fatPer100gG: 18, units: [{ label: "unidade", grams: 50 }] },
  { id: "brioche-fermentacao-natural", name: "Brioche (fermentação natural)", category: "Pães", kcalPer100g: 340, carbPer100gG: 44, proteinPer100gG: 8.5, fatPer100gG: 14, units: [{ label: "unidade", grams: 50 }] },
  { id: "pao-caseiro", name: "Pão caseiro", category: "Pães", kcalPer100g: 280, carbPer100gG: 52, proteinPer100gG: 8, fatPer100gG: 4, units: [{ label: "fatia", grams: 50 }] },
  { id: "pao-caseiro-fermentacao-natural", name: "Pão caseiro (fermentação natural)", category: "Pães", kcalPer100g: 260, carbPer100gG: 49, proteinPer100gG: 9, fatPer100gG: 2, units: [{ label: "fatia", grams: 50 }] },

  { id: "cafe-coado", name: "Café coado", category: "Bebidas", kcalPer100g: 2, carbPer100gG: 0.3, proteinPer100gG: 0.1, fatPer100gG: 0, units: [{ label: "xícara", grams: 150 }, { label: "caneca", grams: 300 }] },
  { id: "cafe-expresso", name: "Café expresso", category: "Bebidas", kcalPer100g: 3, carbPer100gG: 0.5, proteinPer100gG: 0.1, fatPer100gG: 0.1, units: [{ label: "xícara", grams: 50 }] },
  { id: "cappuccino", name: "Cappuccino", category: "Bebidas", kcalPer100g: 45, carbPer100gG: 4, proteinPer100gG: 2.5, fatPer100gG: 2.2, units: [{ label: "xícara", grams: 150 }, { label: "caneca", grams: 300 }] },
  { id: "mochaccino", name: "Mochaccino", category: "Bebidas", kcalPer100g: 65, carbPer100gG: 8, proteinPer100gG: 2.5, fatPer100gG: 2.8, units: [{ label: "xícara", grams: 150 }, { label: "caneca", grams: 300 } ] },
  { id: "cafe-com-leite", name: "Café com leite (desnatado)", category: "Bebidas", kcalPer100g: 25, carbPer100gG: 3.5, proteinPer100gG: 1.8, fatPer100gG: 0.3, units: [{ label: "xícara", grams: 150 }, { label: "caneca", grams: 300 }] },
  { id: "cafe-com-leite-integral", name: "Café com leite (integral)", category: "Bebidas", kcalPer100g: 38, carbPer100gG: 3.4, proteinPer100gG: 1.8, fatPer100gG: 1.8, units: [{ label: "xícara", grams: 150 }, { label: "caneca", grams: 300 }] },
  { id: "refrigerante-cola", name: "Refrigerante de cola", category: "Bebidas", kcalPer100g: 42, carbPer100gG: 10.6, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "copo", grams: 200 }, { label: "lata", grams: 350 }, { label: "600ml", grams: 600 }] },
  { id: "refrigerante-cola-zero", name: "Refrigerante de cola zero", category: "Bebidas", kcalPer100g: 0.3, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "copo", grams: 200 }, { label: "lata", grams: 350 }, { label: "600ml", grams: 600 }] },
  { id: "refrigerante-guarana", name: "Refrigerante de guaraná", category: "Bebidas", kcalPer100g: 39, carbPer100gG: 10, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "copo", grams: 200 }, { label: "lata", grams: 350 }, { label: "600ml", grams: 600 }] },
  { id: "refrigerante-limao", name: "Refrigerante de limão", category: "Bebidas", kcalPer100g: 40, carbPer100gG: 10.5, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "copo", grams: 200 }, { label: "lata", grams: 350 }, { label: "600ml", grams: 600 }] },
  { id: "suco-laranja-natural", name: "Suco de laranja natural", category: "Bebidas", kcalPer100g: 45, carbPer100gG: 10.4, proteinPer100gG: 0.7, fatPer100gG: 0.2, units: [{ label: "copo", grams: 200 }, { label: "600ml", grams: 600 }] },
  { id: "suco-uva-integral", name: "Suco de uva integral", category: "Bebidas", kcalPer100g: 60, carbPer100gG: 15, proteinPer100gG: 0.4, fatPer100gG: 0, units: [{ label: "copo", grams: 200 }, { label: "600ml", grams: 600 }] },
  { id: "suco-caju", name: "Suco de caju", category: "Bebidas", kcalPer100g: 45, carbPer100gG: 11, proteinPer100gG: 0.2, fatPer100gG: 0.1, units: [{ label: "copo", grams: 200 }, { label: "600ml", grams: 600 }] },
  { id: "suco-caixinha", name: "Suco industrializado (caixinha)", category: "Bebidas", kcalPer100g: 48, carbPer100gG: 12, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "copo", grams: 200 }] },
  { id: "agua-com-gas", name: "Água com gás", category: "Bebidas", kcalPer100g: 0, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "copo", grams: 200 }, { label: "600ml", grams: 600 }] },
  { id: "energetico", name: "Energético", category: "Bebidas", kcalPer100g: 45, carbPer100gG: 11, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "lata", grams: 250 }, { label: "600ml", grams: 600 }] },

  { id: "banana", name: "Banana", category: "Frutas", kcalPer100g: 89, carbPer100gG: 22.8, proteinPer100gG: 1.1, fatPer100gG: 0.3, units: [{ label: "unidade", grams: 100 }] },
  { id: "maca", name: "Maçã", category: "Frutas", kcalPer100g: 52, carbPer100gG: 13.8, proteinPer100gG: 0.3, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 130 }] },
  { id: "mamao", name: "Mamão", category: "Frutas", kcalPer100g: 43, carbPer100gG: 10.8, proteinPer100gG: 0.5, fatPer100gG: 0.3, units: [{ label: "fatia", grams: 160 }] },
  { id: "laranja", name: "Laranja", category: "Frutas", kcalPer100g: 47, carbPer100gG: 11.8, proteinPer100gG: 0.9, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 180 }] },
  { id: "morango", name: "Morango", category: "Frutas", kcalPer100g: 32, carbPer100gG: 7.7, proteinPer100gG: 0.7, fatPer100gG: 0.3, units: [{ label: "unidade", grams: 12 }] },
  { id: "abacate", name: "Abacate", category: "Frutas", kcalPer100g: 160, carbPer100gG: 8.5, proteinPer100gG: 2, fatPer100gG: 14.7, units: [{ label: "unidade", grams: 200 }] },
  { id: "abacaxi", name: "Abacaxi", category: "Frutas", kcalPer100g: 48, carbPer100gG: 12.3, proteinPer100gG: 0.9, fatPer100gG: 0.1, units: [{ label: "fatia", grams: 80 }] },
  { id: "manga", name: "Manga", category: "Frutas", kcalPer100g: 60, carbPer100gG: 15, proteinPer100gG: 0.4, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 200 }] },
  { id: "uva", name: "Uva", category: "Frutas", kcalPer100g: 53, carbPer100gG: 13.3, proteinPer100gG: 0.6, fatPer100gG: 0.2, units: [{ label: "cacho pequeno", grams: 80 }] },
  { id: "melancia", name: "Melancia", category: "Frutas", kcalPer100g: 33, carbPer100gG: 8.1, proteinPer100gG: 0.6, fatPer100gG: 0.2, units: [{ label: "fatia", grams: 200 }] },
  { id: "melao", name: "Melão", category: "Frutas", kcalPer100g: 29, carbPer100gG: 7.5, proteinPer100gG: 0.7, fatPer100gG: 0.1, units: [{ label: "fatia", grams: 150 }] },
  { id: "pera", name: "Pera", category: "Frutas", kcalPer100g: 53, carbPer100gG: 14, proteinPer100gG: 0.4, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 130 }] },
  { id: "kiwi", name: "Kiwi", category: "Frutas", kcalPer100g: 51, carbPer100gG: 11.5, proteinPer100gG: 1.1, fatPer100gG: 0.5, units: [{ label: "unidade", grams: 70 }] },
  { id: "tangerina", name: "Tangerina", category: "Frutas", kcalPer100g: 43, carbPer100gG: 10.8, proteinPer100gG: 0.8, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 100 }] },
  { id: "goiaba", name: "Goiaba", category: "Frutas", kcalPer100g: 54, carbPer100gG: 12.4, proteinPer100gG: 1.1, fatPer100gG: 0.5, units: [{ label: "unidade", grams: 150 }] },
  { id: "maracuja", name: "Maracujá (polpa)", category: "Frutas", kcalPer100g: 68, carbPer100gG: 12, proteinPer100gG: 2, fatPer100gG: 2.1, units: [{ label: "unidade", grams: 80 }] },

  { id: "iogurte-natural", name: "Iogurte natural", category: "Laticínios", kcalPer100g: 61, carbPer100gG: 4.7, proteinPer100gG: 3.5, fatPer100gG: 3.3, units: [{ label: "pote", grams: 170 }] },
  { id: "iogurte-grego", name: "Iogurte grego natural", category: "Laticínios", kcalPer100g: 97, carbPer100gG: 3.6, proteinPer100gG: 9, fatPer100gG: 5, units: [{ label: "pote", grams: 100 }] },
  { id: "iogurte-desnatado", name: "Iogurte desnatado", category: "Laticínios", kcalPer100g: 41, carbPer100gG: 4.9, proteinPer100gG: 4.1, fatPer100gG: 0.2, units: [{ label: "pote", grams: 170 }] },
  { id: "leite-integral", name: "Leite integral", category: "Laticínios", kcalPer100g: 61, carbPer100gG: 4.7, proteinPer100gG: 3.2, fatPer100gG: 3.3, units: [{ label: "copo", grams: 200 }] },
  { id: "leite-desnatado", name: "Leite desnatado", category: "Laticínios", kcalPer100g: 35, carbPer100gG: 4.9, proteinPer100gG: 3.4, fatPer100gG: 0.2, units: [{ label: "copo", grams: 200 }] },
  { id: "queijo-minas", name: "Queijo minas frescal", category: "Laticínios", kcalPer100g: 264, carbPer100gG: 3.2, proteinPer100gG: 17.4, fatPer100gG: 20.2, units: [{ label: "fatia", grams: 30 }] },
  { id: "queijo-mussarela", name: "Queijo mussarela", category: "Laticínios", kcalPer100g: 330, carbPer100gG: 3.1, proteinPer100gG: 22.6, fatPer100gG: 25.2, units: [{ label: "fatia", grams: 20 }] },
  { id: "queijo-prato", name: "Queijo prato", category: "Laticínios", kcalPer100g: 360, carbPer100gG: 1.9, proteinPer100gG: 23.6, fatPer100gG: 29, units: [{ label: "fatia", grams: 20 }] },
  { id: "queijo-cottage", name: "Queijo cottage", category: "Laticínios", kcalPer100g: 98, carbPer100gG: 3.4, proteinPer100gG: 11.1, fatPer100gG: 4.3, units: [{ label: "colher de sopa", grams: 30 }] },
  { id: "requeijao", name: "Requeijão cremoso", category: "Laticínios", kcalPer100g: 257, carbPer100gG: 3, proteinPer100gG: 9.6, fatPer100gG: 23.3, units: [{ label: "colher de sopa", grams: 20 }] },
  { id: "manteiga", name: "Manteiga", category: "Laticínios", kcalPer100g: 717, carbPer100gG: 0.1, proteinPer100gG: 0.9, fatPer100gG: 81.1, units: [{ label: "colher de chá", grams: 5 }] },

  { id: "whey-protein", name: "Whey protein (pó)", category: "Suplementos", kcalPer100g: 400, carbPer100gG: 7, proteinPer100gG: 80, fatPer100gG: 6.5, units: [{ label: "dose (scoop)", grams: 30 }] },
  { id: "caseina", name: "Caseína (pó)", category: "Suplementos", kcalPer100g: 375, carbPer100gG: 6, proteinPer100gG: 75, fatPer100gG: 3.5, units: [{ label: "dose (scoop)", grams: 30 }] },
  { id: "albumina", name: "Albumina (pó)", category: "Suplementos", kcalPer100g: 380, carbPer100gG: 2, proteinPer100gG: 84, fatPer100gG: 2, units: [{ label: "dose (scoop)", grams: 30 }] },
  { id: "creatina", name: "Creatina (pó)", category: "Suplementos", kcalPer100g: 0, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "dose", grams: 5 }] },
  { id: "barra-proteina", name: "Barra de proteína", category: "Suplementos", kcalPer100g: 375, carbPer100gG: 35, proteinPer100gG: 30, fatPer100gG: 12, units: [{ label: "unidade", grams: 40 }] },
  { id: "bcaa", name: "BCAA (pó)", category: "Suplementos", kcalPer100g: 0, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 0, units: [{ label: "dose", grams: 10 }] },

  { id: "pasta-amendoim", name: "Pasta de amendoim", category: "Oleaginosas e Gorduras", kcalPer100g: 588, carbPer100gG: 20, proteinPer100gG: 25, fatPer100gG: 50, units: [{ label: "colher de sopa", grams: 15 }] },
  { id: "castanha-para", name: "Castanha-do-pará", category: "Oleaginosas e Gorduras", kcalPer100g: 656, carbPer100gG: 12.8, proteinPer100gG: 14.5, fatPer100gG: 63.5, units: [{ label: "unidade", grams: 5 }] },
  { id: "castanha-caju", name: "Castanha de caju", category: "Oleaginosas e Gorduras", kcalPer100g: 570, carbPer100gG: 29.1, proteinPer100gG: 18.5, fatPer100gG: 46.3, units: [{ label: "unidade", grams: 2 }] },
  { id: "amendoas", name: "Amêndoas", category: "Oleaginosas e Gorduras", kcalPer100g: 579, carbPer100gG: 21.6, proteinPer100gG: 21.2, fatPer100gG: 49.9, units: [{ label: "unidade", grams: 1.2 }] },
  { id: "nozes", name: "Nozes", category: "Oleaginosas e Gorduras", kcalPer100g: 654, carbPer100gG: 13.7, proteinPer100gG: 15.2, fatPer100gG: 65.2, units: [{ label: "unidade", grams: 5 }] },
  { id: "amendoim", name: "Amendoim torrado", category: "Oleaginosas e Gorduras", kcalPer100g: 544, carbPer100gG: 20.3, proteinPer100gG: 27.2, fatPer100gG: 43.9, units: [{ label: "colher de sopa", grams: 15 }] },
  { id: "azeite-oliva", name: "Azeite de oliva", category: "Oleaginosas e Gorduras", kcalPer100g: 884, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 100, units: [{ label: "colher de sopa", grams: 13 }] },
  { id: "oleo-coco", name: "Óleo de coco", category: "Oleaginosas e Gorduras", kcalPer100g: 862, carbPer100gG: 0, proteinPer100gG: 0, fatPer100gG: 100, units: [{ label: "colher de sopa", grams: 13 }] },
  { id: "chia", name: "Semente de chia", category: "Oleaginosas e Gorduras", kcalPer100g: 486, carbPer100gG: 42.1, proteinPer100gG: 16.5, fatPer100gG: 30.7, units: [{ label: "colher de sopa", grams: 12 }] },
  { id: "linhaca", name: "Semente de linhaça", category: "Oleaginosas e Gorduras", kcalPer100g: 495, carbPer100gG: 28.9, proteinPer100gG: 14.1, fatPer100gG: 32.3, units: [{ label: "colher de sopa", grams: 12 }] },

  { id: "brocolis", name: "Brócolis cozido", category: "Legumes e Verduras", kcalPer100g: 25, carbPer100gG: 4.4, proteinPer100gG: 2.1, fatPer100gG: 0.3, units: [{ label: "porção", grams: 90 }] },
  { id: "alface", name: "Alface", category: "Legumes e Verduras", kcalPer100g: 15, carbPer100gG: 2.9, proteinPer100gG: 1.4, fatPer100gG: 0.2, units: [{ label: "folha", grams: 10 }] },
  { id: "tomate", name: "Tomate", category: "Legumes e Verduras", kcalPer100g: 18, carbPer100gG: 3.9, proteinPer100gG: 0.9, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 120 }] },
  { id: "cenoura", name: "Cenoura crua", category: "Legumes e Verduras", kcalPer100g: 41, carbPer100gG: 9.6, proteinPer100gG: 0.9, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 80 }] },
  { id: "couve-flor", name: "Couve-flor cozida", category: "Legumes e Verduras", kcalPer100g: 22, carbPer100gG: 4.1, proteinPer100gG: 1.8, fatPer100gG: 0.3, units: [{ label: "porção", grams: 90 }] },
  { id: "couve-manteiga", name: "Couve refogada", category: "Legumes e Verduras", kcalPer100g: 39, carbPer100gG: 3.8, proteinPer100gG: 2.4, fatPer100gG: 1.8, units: [{ label: "colher de sopa", grams: 20 }] },
  { id: "espinafre", name: "Espinafre refogado", category: "Legumes e Verduras", kcalPer100g: 23, carbPer100gG: 2.1, proteinPer100gG: 2.6, fatPer100gG: 0.7, units: [{ label: "colher de sopa", grams: 20 }] },
  { id: "abobrinha", name: "Abobrinha refogada", category: "Legumes e Verduras", kcalPer100g: 21, carbPer100gG: 4.5, proteinPer100gG: 1.3, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 100 }] },
  { id: "abobora", name: "Abóbora cozida", category: "Legumes e Verduras", kcalPer100g: 40, carbPer100gG: 9.7, proteinPer100gG: 1, fatPer100gG: 0.1, units: [{ label: "pedaço", grams: 100 }] },
  { id: "berinjela", name: "Berinjela refogada", category: "Legumes e Verduras", kcalPer100g: 35, carbPer100gG: 8.3, proteinPer100gG: 0.8, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 100 }] },
  { id: "pepino", name: "Pepino", category: "Legumes e Verduras", kcalPer100g: 10, carbPer100gG: 2.1, proteinPer100gG: 0.7, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 150 }] },
  { id: "pimentao", name: "Pimentão", category: "Legumes e Verduras", kcalPer100g: 28, carbPer100gG: 6.3, proteinPer100gG: 1.1, fatPer100gG: 0.3, units: [{ label: "unidade", grams: 100 }] },
  { id: "cebola", name: "Cebola refogada", category: "Legumes e Verduras", kcalPer100g: 39, carbPer100gG: 8.9, proteinPer100gG: 1.2, fatPer100gG: 0.2, units: [{ label: "unidade", grams: 70 }] },
  { id: "vagem", name: "Vagem cozida", category: "Legumes e Verduras", kcalPer100g: 25, carbPer100gG: 5, proteinPer100gG: 1.7, fatPer100gG: 0.1, units: [{ label: "porção", grams: 90 }] },
  { id: "chuchu", name: "Chuchu cozido", category: "Legumes e Verduras", kcalPer100g: 19, carbPer100gG: 4.3, proteinPer100gG: 0.6, fatPer100gG: 0.1, units: [{ label: "porção", grams: 100 }] },
  { id: "beterraba", name: "Beterraba cozida", category: "Legumes e Verduras", kcalPer100g: 32, carbPer100gG: 7.3, proteinPer100gG: 1.3, fatPer100gG: 0.1, units: [{ label: "unidade", grams: 80 }] },
  { id: "rucula", name: "Rúcula", category: "Legumes e Verduras", kcalPer100g: 25, carbPer100gG: 3.6, proteinPer100gG: 2.6, fatPer100gG: 0.7, units: [{ label: "folha", grams: 5 }] },
  { id: "repolho", name: "Repolho cru", category: "Legumes e Verduras", kcalPer100g: 25, carbPer100gG: 5.5, proteinPer100gG: 1.2, fatPer100gG: 0.1, units: [{ label: "porção", grams: 80 }] },
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
