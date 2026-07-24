import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section style={{ padding: "100px 0", background: "var(--ink-soft)" }}>
      <div className="container">
        <SectionHeader eyebrow="Toolkit" title="What I build with." />

        <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <p className="mono" style={{ fontSize: 12.5, color: `var(--${group.color})`, marginBottom: 14, letterSpacing: "0.04em" }}>
                {group.group.toUpperCase()}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="mono"
                    style={{
                      fontSize: 12.5,
                      padding: "7px 12px",
                      borderRadius: 8,
                      border: "1px solid var(--ink-line)",
                      color: "var(--text)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
