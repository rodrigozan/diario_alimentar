import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { bodyMetricsSchema } from "@/lib/validation";

export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = bodyMetricsSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dados inválidos." },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const user = await User.findByIdAndUpdate(
    session.user.id,
    { heightCm: parsed.data.heightCm, weightKg: parsed.data.weightKg },
    { new: true }
  );

  if (!user) {
    return NextResponse.json({ error: "Usuário não encontrado." }, { status: 404 });
  }

  return NextResponse.json({ heightCm: user.heightCm, weightKg: user.weightKg });
}
