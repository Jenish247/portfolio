import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data/content";

// lucide-react dropped brand/logo icons; small inline glyphs instead.
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7 20.4H3.6V9H7v11.4Z" />
    </svg>
  );
}


export default function Contact() {
  return (
    <section id="contact" style={{ padding: "140px 0 60px" }}>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href={`mailto:${profile.email}`}
            data-cursor
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              marginTop: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 7vw, 5rem)",
                letterSpacing: "-0.02em",
                wordBreak: "break-word",
              }}
            >
              Let's build something.
            </h2>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            data-cursor
            className="mono"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 28,
              fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
              color: "var(--coral)",
            }}
          >
            {profile.email} <ArrowUpRight size={20} />
          </a>
        </Reveal>

        <Reveal delay={0.15} style={{ display: "flex", gap: 18, marginTop: 40, flexWrap: "wrap" }}>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" data-cursor style={pillStyle}>
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" data-cursor style={pillStyle}>
            <GithubIcon /> GitHub
          </a>
          <a href={`mailto:${profile.email}`} data-cursor style={pillStyle}>
            <Mail size={15} /> Email
          </a>
        </Reveal>

        <div
          style={{
            marginTop: 100,
            paddingTop: 24,
            borderTop: "1px solid var(--ink-line)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>
            {profile.name} — {profile.location}
          </span>
          <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>
            Built with React, Framer Motion & Lenis
          </span>
        </div>
      </div>
    </section>
  );
}

const pillStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  border: "1px solid var(--ink-line)",
  borderRadius: 999,
  padding: "10px 18px",
  fontFamily: "var(--font-mono)",
  fontSize: 13,
  color: "var(--text-muted)",
};
