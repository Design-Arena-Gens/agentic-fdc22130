import { nutritionProfile } from "@/lib/data";

export function HydrationPanel() {
  const hydration = nutritionProfile.hydration;
  const volumePercent = Math.round((hydration.currentLiters / hydration.targetLiters) * 100);

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <span className="badge">Hydration strategy</span>
          <h2 style={{ marginTop: 12 }}>Fluid & electrolyte cadence</h2>
        </div>
        <div className="tag-muted">Auto-track via smart bottle sync</div>
      </div>
      <div className="grid-two">
        <div className="stat-card" style={{ background: "linear-gradient(160deg, rgba(224, 242, 254, 1) 0%, rgba(186, 230, 253, 0.7) 100%)" }}>
          <h3>Fluid volume</h3>
          <strong style={{ fontSize: "2.4rem", color: "#0369a1" }}>
            {hydration.currentLiters.toFixed(1)}L
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginLeft: 8 }}>
              / {hydration.targetLiters.toFixed(1)}L
            </span>
          </strong>
          <div className="progress-shell" style={{ marginTop: 16, height: 14 }}>
            <div
              className="progress-fill"
              style={{
                width: `${Math.min(volumePercent, 100)}%`,
                background: "linear-gradient(90deg, rgba(56, 189, 248, 1) 0%, rgba(14, 165, 233, 0.8) 100%)",
              }}
            />
          </div>
          <p style={{ marginTop: 18 }}>Add {hydration.targetLiters - hydration.currentLiters > 0 ? (hydration.targetLiters - hydration.currentLiters).toFixed(1) : 0}L to close today&apos;s loop.</p>
        </div>
        <div className="stat-card" style={{ background: "rgba(12, 74, 110, 0.08)" }}>
          <h3>Electrolyte rhythm</h3>
          <p style={{ fontSize: "0.9rem", marginBottom: 16 }}>
            Balance score {hydration.electrolyteScore}/100 — focus on potassium and sodium balance to protect HRV.
          </p>
          <div className="list-clean">
            {hydration.cues.map((cue) => (
              <div key={cue} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(148,163,184,0.12)" }}>
                <span style={{ width: 6, borderRadius: 999, background: "#0ea5e9" }} />
                <p style={{ margin: 0 }}>{cue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
