import { nutritionProfile } from "@/lib/data";

export function MealPlan() {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <span className="badge">Precision meal flow</span>
          <h2 style={{ marginTop: 12 }}>Today&apos;s nourishment sprints</h2>
        </div>
        <div className="tag-muted">Auto-sync with calendar · 2 reminders queued</div>
      </div>
      <div className="table-grid">
        <div className="table-row" style={{ background: "rgba(15, 23, 42, 0.82)", color: "rgba(248, 250, 252, 0.95)" }}>
          <strong>Meal</strong>
          <span>Energy</span>
          <span>Protocol Notes</span>
        </div>
        {nutritionProfile.mealPlan.map((meal) => (
          <div key={meal.name} className="table-row">
            <div>
              <strong>{meal.name}</strong>
              <p style={{ marginTop: 6, fontSize: "0.88rem" }}>
                {meal.time} · {meal.items.length} components
              </p>
              <ul className="list-clean" style={{ marginTop: 12 }}>
                {meal.items.map((item) => (
                  <li key={item.food} style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <span>{item.food}</span>
                    <span style={{ fontWeight: 600 }}>{item.macros}</span>
                  </li>
                ))}
              </ul>
            </div>
            <span style={{ fontWeight: 700 }}>{meal.calories} kcal</span>
            <p style={{ fontSize: "0.9rem" }}>{meal.notes}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
