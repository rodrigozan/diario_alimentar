import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/db";
import { Food } from "@/models/Food";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  await connectToDatabase();
  const docs = await Food.find().sort({ category: 1, name: 1 }).lean();

  const foods = docs.map((doc) => ({
    id: doc.slug,
    name: doc.name,
    category: doc.category,
    mealTypes: doc.mealTypes,
    kcalPer100g: doc.kcalPer100g,
    carbPer100gG: doc.carbPer100gG,
    proteinPer100gG: doc.proteinPer100gG,
    fatPer100gG: doc.fatPer100gG,
    units: doc.units,
  }));

  return NextResponse.json({ foods });
}
