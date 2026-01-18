import { nutritionProfile } from "@/lib/data";

export function LogisticsPanel() {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <span className="badge">Logistics</span>
          <h2 style={{ marginTop: 12 }}>Grocery intelligence & quick wins</h2>
        </div>
        <div className="tag-muted">Auto-synced with pantry inventory</div>
      </div>
      <div className="grid-two">
        <div className="stat-card" style={{ background: "rgba(250, 250, 250, 0.92)" }}>
          <h3>Fresh procurement</h3>
          <ul className="list-clean" style={{ marginTop: 12 }}>
            {nutritionProfile.groceryList.map((group) => (
              <li key={group.category} style={{ padding: "12px 0" }}>
                <strong>{group.category}</strong>
                <div className="chip-group" style={{ marginTop: 10 }}>
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="stat-card" style={{ background: "linear-gradient(145deg, rgba(251, 191, 36, 0.16) 0%, rgba(243, 244, 246, 0.9) 100%)" }}>
          <h3>Momentum boosts</h3>
          <ul className="list-clean" style={{ marginTop: 12 }}>
            {nutritionProfile.quickWins.map((tip) => (
              <li key={tip} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ width: 6, borderRadius: 999, background: "#f59e0b", marginTop: 8 }} />
                <p style={{ margin: 0 }}>{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
