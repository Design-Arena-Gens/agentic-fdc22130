import { nutritionProfile } from "@/lib/data";

export function WeeklyPanel() {
  const averageCalories = Math.round(
    nutritionProfile.weeklyTrend.reduce((acc, entry) => acc + entry.calories, 0) /
      nutritionProfile.weeklyTrend.length
  );

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <span className="badge">Readiness telemetry</span>
          <h2 style={{ marginTop: 12 }}>Adaptive weekly overview</h2>
        </div>
        <div className="tag-muted">Avg intake {averageCalories} kcal</div>
      </div>
      <div className="weekly-grid">
        {nutritionProfile.weeklyTrend.map((entry) => (
          <div key={entry.day} className="weekly-card">
            <h4>{entry.day}</h4>
            <p>Energy: {entry.calories} kcal</p>
            <p>Readiness: {entry.readiness.toFixed(1)}/10</p>
            <p>Wt: {entry.weight.toFixed(1)} kg</p>
          </div>
        ))}
      </div>
    </section>
  );
}
