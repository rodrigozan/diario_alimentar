import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/db";
import { Meal } from "@/models/Meal";
import { WaterLog } from "@/models/WaterLog";
import { User } from "@/models/User";
import { lastNDayKeys } from "@/lib/date";
import { AppShell } from "@/components/layout/AppShell";
import { HistoryClient, type DaySummary } from "@/components/dashboard/HistoryClient";

export default async function HistoryPage() {
  const session = await auth();
  const days = lastNDayKeys(7);

  await connectToDatabase();

  const [meals, waterLogs, user] = await Promise.all([
    Meal.find({ userId: session!.user.id, date: { $gte: days[0], $lte: days[6] } }).lean(),
    WaterLog.find({ userId: session!.user.id, date: { $gte: days[0], $lte: days[6] } }).lean(),
    User.findById(session!.user.id).lean(),
  ]);

  const goals = user?.goals ?? {
    calories: 2000,
    carbG: 250,
    proteinG: 120,
    fatG: 65,
    waterMl: 2000,
  };

  const summaries: DaySummary[] = days.map((key) => {
    const dayMeals = meals.filter((m) => m.date === key);
    const dayWater = waterLogs.filter((w) => w.date === key);
    return {
      key,
      calories: dayMeals.reduce((s, m) => s + m.calories, 0),
      carbG: dayMeals.reduce((s, m) => s + m.carbG, 0),
      proteinG: dayMeals.reduce((s, m) => s + m.proteinG, 0),
      fatG: dayMeals.reduce((s, m) => s + m.fatG, 0),
      waterMl: dayWater.reduce((s, w) => s + w.amountMl, 0),
      mealCount: dayMeals.length,
    };
  });

  return (
    <AppShell userName={session?.user?.name}>
      <HistoryClient days={summaries} goals={goals} />
    </AppShell>
  );
}
