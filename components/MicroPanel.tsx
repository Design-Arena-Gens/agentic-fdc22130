import { nutritionProfile } from "@/lib/data";

type StatusColor = "optimal" | "surplus" | "low" | "near";

const statusMap: Record<StatusColor, { label: string; bg: string; color: string }> = {
  optimal: { label: "Optimal", bg: "rgba(14, 116, 144, 0.12)", color: "#0e7490" },
  surplus: { label: "Surplus", bg: "rgba(234, 179, 8, 0.14)", color: "#d97706" },
  low: { label: "Low", bg: "rgba(220, 38, 38, 0.14)", color: "#b91c1c" },
  near: { label: "Near target", bg: "rgba(107, 114, 128, 0.14)", color: "#4b5563" },
};

export function MicroPanel() {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <span className="badge">Micronutrient watch</span>
          <h2 style={{ marginTop: 12 }}>Clinically-informed biomarkers</h2>
        </div>
        <div className="tag-muted">Updated 3 days ago</div>
      </div>
      <div className="grid-two">
        {nutritionProfile.microHighlights.map((nutrient) => {
          const config = statusMap[nutrient.status as StatusColor] ?? statusMap.optimal;
          return (
            <div key={nutrient.name} className="stat-card" style={{ background: "rgba(255,255,255,0.92)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3>{nutrient.name}</h3>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: config.bg,
                    color: config.color,
                    fontWeight: 600,
                    fontSize: "0.8rem",
                  }}
                >
                  {config.label}
                </span>
              </div>
              <p style={{ marginBottom: 18, marginTop: 6 }}>
                {nutrient.current}
                {nutrient.unit} · target {nutrient.target}
                {nutrient.unit}
              </p>
              <div className="progress-shell">
                <div
                  className="progress-fill"
                  style={{
                    width: `${Math.min(100, Math.round((nutrient.current / nutrient.target) * 100))}%`,
                    background: `linear-gradient(90deg, ${config.color} 0%, rgba(15,23,42,0.6) 100%)`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
