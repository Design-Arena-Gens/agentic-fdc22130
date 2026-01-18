import { Hero } from "@/components/Hero";
import { MacroPanel } from "@/components/MacroPanel";
import { MicroPanel } from "@/components/MicroPanel";
import { MealPlan } from "@/components/MealPlan";
import { HydrationPanel } from "@/components/HydrationPanel";
import { SupplementPanel } from "@/components/SupplementPanel";
import { WeeklyPanel } from "@/components/WeeklyPanel";
import { LogisticsPanel } from "@/components/LogisticsPanel";

export default function Page() {
  return (
    <main>
      <Hero />
      <MacroPanel />
      <MicroPanel />
      <MealPlan />
      <HydrationPanel />
      <SupplementPanel />
      <WeeklyPanel />
      <LogisticsPanel />
    </main>
  );
}
