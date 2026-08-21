import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { AppShell } from "@/components/layout/AppShell";
import { ProfileClient } from "@/components/dashboard/ProfileClient";

export default async function ProfilePage() {
  const session = await auth();

  await connectToDatabase();
  const user = await User.findById(session!.user.id).lean();

  const goals = user?.goals ?? {
    calories: 2000,
    carbG: 250,
    proteinG: 120,
    fatG: 65,
    waterMl: 2000,
  };

  return (
    <AppShell userName={session?.user?.name}>
      <ProfileClient name={session?.user?.name} email={session?.user?.email} goals={goals} />
    </AppShell>
  );
}
