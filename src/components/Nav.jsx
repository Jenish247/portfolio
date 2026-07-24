import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(13, 12, 29, 0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--ink-line)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <a href="#top" data-cursor className="mono" style={{ fontSize: 15, fontWeight: 600, letterSpacing: "0.02em" }}>
          JM<span style={{ color: "var(--coral)" }}>.</span>
        </a>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor
              className="mono"
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              {l.label}
            </a>
          ))}
          <span
            className="mono status-pill"
            style={{
              fontSize: 11.5,
              color: "var(--mint)",
              border: "1px solid rgba(47, 230, 160, 0.3)",
              borderRadius: 999,
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--mint)",
                display: "inline-block",
              }}
            />
            open to opportunities
          </span>
        </nav>
      </div>
    </header>
  );
}
