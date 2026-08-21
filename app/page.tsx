import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/db";
import { Meal } from "@/models/Meal";
import { WaterLog } from "@/models/WaterLog";
import { User } from "@/models/User";
import { todayKey, formatDayLabel } from "@/lib/date";
import { AppShell } from "@/components/layout/AppShell";
import { DashboardClient } from "@/components/dashboard/DashboardClient";
import type { MealLike } from "@/lib/nutrition";

export default async function HomePage() {
  const session = await auth();
  const dateKey = todayKey();

  await connectToDatabase();

  const [meals, waterLogs, user] = await Promise.all([
    Meal.find({ userId: session!.user.id, date: dateKey }).sort({ createdAt: 1 }).lean(),
    WaterLog.find({ userId: session!.user.id, date: dateKey }).lean(),
    User.findById(session!.user.id).lean(),
  ]);

  const initialMeals: MealLike[] = meals.map((m) => ({
    _id: String(m._id),
    type: m.type,
    name: m.name,
    calories: m.calories,
    carbG: m.carbG,
    proteinG: m.proteinG,
    fatG: m.fatG,
    photoUrl: m.photoUrl,
    date: m.date,
  }));

  const initialWaterMl = waterLogs.reduce((sum, log) => sum + log.amountMl, 0);

  const goals = user?.goals ?? {
    calories: 2000,
    carbG: 250,
    proteinG: 120,
    fatG: 65,
    waterMl: 2000,
  };

  return (
    <AppShell userName={session?.user?.name}>
      <DashboardClient
        dateKey={dateKey}
        dateLabel={formatDayLabel(dateKey)}
        goals={goals}
        initialMeals={initialMeals}
        initialWaterMl={initialWaterMl}
      />
    </AppShell>
  );
}
