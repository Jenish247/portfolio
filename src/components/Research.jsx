import { ArrowUpRight, FileText } from "lucide-react";
import Reveal from "./Reveal";
import { research } from "../data/content";

export default function Research() {
  return (
    <section
      id="research"
      style={{
        background:
          "linear-gradient(180deg, var(--ink) 0%, rgba(255, 201, 77, 0.06) 50%, var(--ink) 100%)",
        padding: "110px 0",
        borderTop: "1px solid var(--ink-line)",
        borderBottom: "1px solid var(--ink-line)",
      }}
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--amber)" }}>
            Published research
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "flex-end", marginTop: 16 }} className="research-head">
          <Reveal delay={0.05}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(1.6rem, 3.2vw, 2.3rem)",
                lineHeight: 1.3,
                maxWidth: 680,
              }}
            >
              {research.title}
            </h2>
            <p className="mono" style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 14 }}>
              {research.venue}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={research.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid var(--amber)",
                color: "var(--amber)",
                borderRadius: 999,
                padding: "12px 20px",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                whiteSpace: "nowrap",
              }}
            >
              <FileText size={15} /> Read on IEEE Xplore <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 48 }}>
          {research.points.map((point, i) => (
            <Reveal key={point} delay={0.06 * i}>
              <div
                style={{
                  border: "1px solid var(--ink-line)",
                  borderRadius: 14,
                  padding: "20px 22px",
                  height: "100%",
                  background: "rgba(255, 201, 77, 0.03)",
                }}
              >
                <span className="mono" style={{ color: "var(--amber)", fontSize: 12 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65, color: "var(--text-muted)" }}>
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
