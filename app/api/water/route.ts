import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/db";
import { WaterLog } from "@/models/WaterLog";
import { waterSchema } from "@/lib/validation";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  await connectToDatabase();

  const query: Record<string, unknown> = { userId: session.user.id };
  if (date) query.date = date;
  else if (from && to) query.date = { $gte: from, $lte: to };

  const logs = await WaterLog.find(query).sort({ createdAt: 1 }).lean();
  return NextResponse.json({ logs });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = waterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dados inválidos." },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const log = await WaterLog.create({ ...parsed.data, userId: session.user.id });
  return NextResponse.json({ log }, { status: 201 });
}
