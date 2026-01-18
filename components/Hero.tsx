import { nutritionProfile } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Dietary operations center</span>
        <h1>{nutritionProfile.name}</h1>
        <p>{nutritionProfile.subtitle}</p>
        <p>{nutritionProfile.goal}</p>
        <div className="hero-metrics">
          <div className="metric">
            <span>Daily intake</span>
            <strong>{nutritionProfile.caloricIntake.toLocaleString()} kcal</strong>
          </div>
          <div className="metric">
            <span>Target</span>
            <strong>{nutritionProfile.caloricTarget.toLocaleString()} kcal</strong>
          </div>
          <div className="metric">
            <span>Consistency streak</span>
            <strong>12 days</strong>
          </div>
        </div>
        <div className="cta-pill">Review today&apos;s plan →</div>
      </div>
    </section>
  );
}
