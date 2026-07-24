import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects, categories } from "../data/content";

const colorMap = {
  enterprise: "var(--coral)",
  research: "var(--violet)",
  data: "var(--mint)",
};

function ProjectCard({ p }) {
  const accent = colorMap[p.category];
  const Wrapper = p.href ? "a" : "div";
  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
      <Wrapper
        href={p.href}
        target={p.href ? "_blank" : undefined}
        rel={p.href ? "noopener noreferrer" : undefined}
        data-cursor
        style={{
          display: "block",
          height: "100%",
          background: "var(--ink-soft)",
          border: "1px solid var(--ink-line)",
          borderRadius: 18,
          padding: "28px 26px",
          transition: "border-color 0.3s ease, transform 0.3s ease",
        }}
        className="project-card"
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <span
            className="mono"
            style={{
              fontSize: 11.5,
              color: accent,
              border: `1px solid ${accent}`,
              borderRadius: 999,
              padding: "4px 10px",
              opacity: 0.9,
            }}
          >
            {p.metric}
          </span>
          {p.href && <ArrowUpRight size={18} color="var(--text-muted)" />}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 20,
            marginTop: 20,
            lineHeight: 1.3,
          }}
        >
          {p.title}
        </h3>
        <p className="mono" style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>
          {p.period}
        </p>
        <p style={{ marginTop: 14, color: "var(--text-muted)", fontSize: 14.5, lineHeight: 1.65 }}>
          {p.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
          {p.stack.map((s) => (
            <span
              key={s}
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--text-muted)",
                background: "rgba(255,255,255,0.04)",
                padding: "5px 9px",
                borderRadius: 6,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function Work() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" style={{ padding: "120px 0 100px" }}>
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems that run at scale, and the research behind them."
          blurb="A mix of production government platforms, applied AI research, and full-stack side projects."
        />

        <Reveal delay={0.1} style={{ display: "flex", gap: 10, marginTop: 44, flexWrap: "wrap" }}>
          {categories.map((c) => (
            <button
              key={c.id}
              data-cursor
              onClick={() => setActive(c.id)}
              className="mono"
              style={{
                fontSize: 12.5,
                padding: "9px 16px",
                borderRadius: 999,
                border: `1px solid ${active === c.id ? "var(--coral)" : "var(--ink-line)"}`,
                color: active === c.id ? "var(--coral)" : "var(--text-muted)",
                transition: "all 0.25s ease",
              }}
            >
              {c.label}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
            marginTop: 36,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
