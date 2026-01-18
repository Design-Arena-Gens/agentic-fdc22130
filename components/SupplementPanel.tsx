import { nutritionProfile } from "@/lib/data";

export function SupplementPanel() {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <span className="badge">Supplement cadence</span>
          <h2 style={{ marginTop: 12 }}>Smart stack alignment</h2>
        </div>
        <div className="tag-muted">Adherence last 30 days · 94%</div>
      </div>
      <div className="supplement-grid">
        {nutritionProfile.supplements.map((supplement) => (
          <div key={supplement.name} className="supplement-card">
            <h3 style={{ fontSize: "1.05rem", marginBottom: 12 }}>{supplement.name}</h3>
            <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: 8 }}>{supplement.dosage}</p>
            <p style={{ fontSize: "0.85rem", marginBottom: 12 }}>Timing: {supplement.timing}</p>
            <p style={{ fontSize: "0.9rem" }}>{supplement.focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
