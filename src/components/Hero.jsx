import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import GeoRadar from "./GeoRadar";
import { profile } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: 100,
        paddingBottom: 60,
      }}
    >
      <div
        className="container hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          gap: 40,
          alignItems: "center",
          width: "100%",
        }}
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow" style={{ marginBottom: 22 }}>
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.6rem, 6.4vw, 5.4rem)",
              lineHeight: 1.03,
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={item}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(1.15rem, 2.4vw, 1.7rem)",
              color: "var(--text-muted)",
              marginTop: 14,
            }}
          >
            <span style={{ color: "var(--coral)" }}>Software Engineer</span> building at
            production scale &amp; <span style={{ color: "var(--violet)" }}>AI Researcher</span> publishing
            peer-reviewed systems work.
          </motion.h2>

          <motion.p
            variants={item}
            style={{
              marginTop: 28,
              maxWidth: 560,
              color: "var(--text-muted)",
              fontSize: 16.5,
              lineHeight: 1.7,
            }}
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
            <a
              href="#work"
              data-cursor
              style={{
                background: "var(--coral)",
                color: "var(--ink)",
                fontFamily: "var(--font-mono)",
                fontSize: 13.5,
                fontWeight: 600,
                padding: "14px 26px",
                borderRadius: 999,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              See the work
            </a>
            <a
              href="#contact"
              data-cursor
              style={{
                border: "1px solid var(--ink-line)",
                color: "var(--text)",
                fontFamily: "var(--font-mono)",
                fontSize: 13.5,
                padding: "14px 26px",
                borderRadius: 999,
              }}
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center" }}
          className="hero-radar"
        >
          <GeoRadar />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
        }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
