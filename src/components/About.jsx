import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function About() {
  return (
    <section
      style={{
        background: "var(--paper)",
        color: "var(--text-on-paper)",
        padding: "110px 0",
      }}
    >
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 60 }} className="about-grid">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-on-paper-muted)" }}>
              About
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)",
                marginTop: 14,
                letterSpacing: "-0.01em",
              }}
            >
              From government systems to published research.
            </h2>
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--text-on-paper)" }}>
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={0.15} style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="mono"
                    style={{ fontSize: 26, fontWeight: 600, color: "var(--coral)" }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13.5, color: "var(--text-on-paper-muted)", marginTop: 4, maxWidth: 160 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
