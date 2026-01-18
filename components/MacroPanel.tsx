import { nutritionProfile } from "@/lib/data";

const macroEntries = Object.entries(nutritionProfile.macroSplit);

export function MacroPanel() {
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <span className="badge">Macro calibration</span>
          <h2 style={{ marginTop: 12 }}>Daily energy precision</h2>
        </div>
        <div className="tag-muted">
          {nutritionProfile.caloricIntake} / {nutritionProfile.caloricTarget} kcal
        </div>
      </div>
      <div className="grid-three">
        {macroEntries.map(([key, macro]) => {
          const ratio = Math.min(100, Math.round((macro.consumed / macro.target) * 100));
          return (
            <div key={key} className="stat-card">
              <h3>{macro.label}</h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <strong style={{ fontSize: "2rem", color: macro.color }}>
                  {macro.consumed}
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginLeft: 6 }}>{macro.unit}</span>
                </strong>
                <span className="tag-muted">Target {macro.target}{macro.unit}</span>
              </div>
              <div className="progress-shell" style={{ background: "rgba(148, 163, 184, 0.18)" }}>
                <div
                  className="progress-fill"
                  style={{
                    width: `${ratio}%`,
                    background: `linear-gradient(90deg, ${macro.color} 0%, rgba(30, 64, 175, 0.75) 100%)`,
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
