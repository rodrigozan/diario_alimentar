import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/db";
import { Meal } from "@/models/Meal";
import { mealSchema } from "@/lib/validation";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json().catch(() => null);
  const parsed = mealSchema.partial().safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dados inválidos." },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const meal = await Meal.findOneAndUpdate(
    { _id: id, userId: session.user.id },
    parsed.data,
    { new: true }
  );

  if (!meal) {
    return NextResponse.json({ error: "Refeição não encontrada." }, { status: 404 });
  }

  return NextResponse.json({ meal });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { id } = await params;
  await connectToDatabase();
  const result = await Meal.findOneAndDelete({ _id: id, userId: session.user.id });

  if (!result) {
    return NextResponse.json({ error: "Refeição não encontrada." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
