import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience, education } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 0" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="The journey so far, and it's just getting started."
        />

        <div style={{ marginTop: 50, display: "flex", flexDirection: "column" }}>
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.06}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 28,
                  padding: "32px 0",
                  borderTop: "1px solid var(--ink-line)",
                }}
                className="timeline-row"
              >
                <div className="mono" style={{ fontSize: 13, color: "var(--coral)" }}>
                  {e.period}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19 }}>
                    {e.role}
                  </h3>
                  <p className="mono" style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>
                    {e.org} — {e.location}
                  </p>
                  <ul style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        style={{
                          fontSize: 14.5,
                          color: "var(--text-muted)",
                          lineHeight: 1.65,
                          paddingLeft: 18,
                          position: "relative",
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "var(--coral)" }}>—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} style={{ marginTop: 20 }}>
          <p className="eyebrow">Education</p>
        </Reveal>

        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {education.map((ed) => (
            <Reveal key={ed.degree}>
              <div style={{ border: "1px solid var(--ink-line)", borderRadius: 14, padding: "22px 24px" }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16.5 }}>
                  {ed.degree}
                </h4>
                <p className="mono" style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 8 }}>
                  {ed.org} — {ed.period}
                </p>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", marginTop: 10, lineHeight: 1.6 }}>
                  {ed.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
