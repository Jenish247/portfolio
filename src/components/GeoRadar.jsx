import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// A small live-updating readout that mimics the lat/long boundary check
// from the GeoFence attendance system — the site's signature element.
function useDriftingCoord(base, range) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setVal(base + (Math.random() - 0.5) * range);
    }, 1400);
    return () => clearInterval(id);
  }, [base, range]);
  return val;
}

export default function GeoRadar() {
  const lat = useDriftingCoord(42.3149, 0.004);
  const lng = useDriftingCoord(-83.0364, 0.004);
  const [inBounds, setInBounds] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setInBounds((v) => (Math.random() > 0.15 ? true : v)), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: "min(340px, 70vw)", aspectRatio: "1 / 1" }}>
      <svg viewBox="0 0 300 300" width="100%" height="100%">
        {[130, 95, 60].map((r, i) => (
          <circle
            key={r}
            cx="150"
            cy="150"
            r={r}
            fill="none"
            stroke="var(--ink-line)"
            strokeWidth="1"
            strokeDasharray={i === 0 ? "0" : "4 6"}
          />
        ))}
        <circle cx="150" cy="150" r="130" fill="none" stroke="var(--coral)" strokeWidth="1.5" opacity="0.55" />

        {/* sweep */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{ transformOrigin: "150px 150px" }}
        >
          <path d="M150 150 L150 20 A130 130 0 0 1 245 65 Z" fill="url(#sweepGradient)" opacity="0.5" />
        </motion.g>
        <defs>
          <linearGradient id="sweepGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--coral)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--coral)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* pinging dot orbiting inside the bounds */}
        <motion.circle
          r="5"
          fill={inBounds ? "var(--mint)" : "var(--coral)"}
          animate={{
            cx: [150, 190, 130, 165, 150],
            cy: [110, 160, 175, 130, 110],
          }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        />
        <circle cx="150" cy="150" r="3" fill="var(--text-muted)" />
      </svg>

      <div
        className="mono"
        style={{
          position: "absolute",
          left: "50%",
          bottom: -8,
          transform: "translateX(-50%)",
          fontSize: 11.5,
          color: "var(--text-muted)",
          textAlign: "center",
          whiteSpace: "nowrap",
          letterSpacing: "0.03em",
        }}
      >
        <div>
          {lat.toFixed(4)}° N, {Math.abs(lng).toFixed(4)}° W
        </div>
        <div style={{ color: inBounds ? "var(--mint)" : "var(--coral)", marginTop: 4 }}>
          {inBounds ? "● within boundary" : "● re-acquiring"}
        </div>
      </div>
    </div>
  );
}
