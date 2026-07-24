import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, blurb, dark = true }) {
  return (
    <Reveal>
      <p className="eyebrow" style={{ color: dark ? "var(--text-muted)" : "var(--text-on-paper-muted)" }}>
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "clamp(1.8rem, 3.6vw, 2.7rem)",
          letterSpacing: "-0.01em",
          marginTop: 14,
          maxWidth: 640,
          color: dark ? "var(--text)" : "var(--text-on-paper)",
        }}
      >
        {title}
      </h2>
      {blurb && (
        <p
          style={{
            marginTop: 14,
            maxWidth: 560,
            color: dark ? "var(--text-muted)" : "var(--text-on-paper-muted)",
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          {blurb}
        </p>
      )}
    </Reveal>
  );
}
