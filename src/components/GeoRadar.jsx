import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";

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

const CENTER = { x: 150, y: 150 };
const EDGE_MIN = 108; // signal's target radius range — near the r=130 boundary
const EDGE_MAX = 124;
const START_DURATION = 2.6; // seconds to travel from center to the edge
const MIN_DURATION = 0.95; // speed floor so it never becomes unclickable
const DURATION_STEP = 0.15; // gets this much faster per catch

function randomEdgePoint() {
  const angle = Math.random() * Math.PI * 2;
  const r = EDGE_MIN + Math.random() * (EDGE_MAX - EDGE_MIN);
  return {
    x: CENTER.x + Math.cos(angle) * r,
    y: CENTER.y + Math.sin(angle) * r,
  };
}

function readBestScore() {
  if (typeof window === "undefined") return 0;
  return Number(window.localStorage.getItem("geoRadarBest") || 0);
}

export default function GeoRadar() {
  const lat = useDriftingCoord(42.3149, 0.004);
  const lng = useDriftingCoord(-83.0364, 0.004);
  const [inBounds, setInBounds] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setInBounds((v) => (Math.random() > 0.15 ? true : v)), 1400);
    return () => clearInterval(id);
  }, []);

  // "idle" = default ambient motion (always running unless the game is on).
  // "game" = the catch-the-signal mini-game.
  const [mode, setMode] = useState("idle");
  const [phase, setPhase] = useState("playing"); // "playing" | "gameover" — only meaningful in game mode

  const [score, setScore] = useState(0);
  const [best, setBest] = useState(readBestScore);
  const [pings, setPings] = useState([]);
  const pingId = useRef(0);

  const cx = useMotionValue(CENTER.x);
  const cy = useMotionValue(CENTER.y);
  const [target, setTarget] = useState(randomEdgePoint);

  const duration = Math.max(MIN_DURATION, START_DURATION - score * DURATION_STEP);

  function handleEscape() {
    setPhase("gameover");
  }

  // Drives the game dot toward its target — only active in game mode.
  useEffect(() => {
    if (mode !== "game" || phase !== "playing") return;
    const controlsX = animate(cx, target.x, { duration, ease: "easeIn", onComplete: handleEscape });
    const controlsY = animate(cy, target.y, { duration, ease: "easeIn" });
    return () => {
      controlsX.stop();
      controlsY.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, mode, phase]);

  // After a game-over flash, reset and start a fresh round (still in game mode).
  useEffect(() => {
    if (mode !== "game" || phase !== "gameover") return;
    const t = setTimeout(() => {
      setScore(0);
      cx.set(CENTER.x);
      cy.set(CENTER.y);
      setTarget(randomEdgePoint());
      setPhase("playing");
    }, 1100);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, phase]);

  useEffect(() => {
    if (score > best) {
      setBest(score);
      window.localStorage.setItem("geoRadarBest", String(score));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  function handleCatch(e) {
    e.stopPropagation();
    if (mode !== "game" || phase !== "playing") return;

    const id = pingId.current++;
    setPings((p) => [...p, { id, x: cx.get(), y: cy.get() }]);
    setTimeout(() => setPings((p) => p.filter((ping) => ping.id !== id)), 550);

    cx.set(CENTER.x);
    cy.set(CENTER.y);
    setScore((s) => s + 1);
    setTarget(randomEdgePoint());
  }

  function handleStartGame() {
    setMode("game");
    setPhase("playing");
    setScore(0);
    cx.set(CENTER.x);
    cy.set(CENTER.y);
    setTarget(randomEdgePoint());
  }

  function handleEndGame() {
    setMode("idle");
    setPhase("playing");
    setScore(0);
  }

  const isGameOver = mode === "game" && phase === "gameover";

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
        <motion.circle
          cx="150"
          cy="150"
          r="130"
          fill="none"
          stroke="var(--coral)"
          animate={{ opacity: isGameOver ? 1 : 0.55, strokeWidth: isGameOver ? 2.5 : 1.5 }}
          transition={{ duration: 0.25 }}
        />

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

        {mode === "idle" ? (
          /* Ambient state — the original gentle wandering dot, non-interactive. */
          <motion.circle
            r="5"
            fill={inBounds ? "var(--mint)" : "var(--coral)"}
            animate={{
              cx: [150, 190, 130, 165, 150],
              cy: [110, 160, 175, 130, 110],
            }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          />
        ) : (
          <>
            {/* catch pings — brief expanding rings where a click landed */}
            <AnimatePresence>
              {pings.map((p) => (
                <motion.circle
                  key={p.id}
                  cx={p.x}
                  cy={p.y}
                  r={6}
                  fill="none"
                  stroke="var(--mint)"
                  strokeWidth={2}
                  initial={{ opacity: 1, r: 6 }}
                  animate={{ opacity: 0, r: 30 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  pointerEvents="none"
                />
              ))}
            </AnimatePresence>

            {/* the signal — races toward the boundary, clickable to "catch" it */}
            {!isGameOver && (
              <motion.circle
                cx={cx}
                cy={cy}
                r="16"
                fill="transparent"
                onClick={handleCatch}
                style={{ cursor: "pointer" }}
                data-cursor
              />
            )}
            <motion.circle
              cx={cx}
              cy={cy}
              r="6"
              fill={isGameOver ? "var(--coral)" : "var(--mint)"}
              pointerEvents="none"
            />
            {!isGameOver && (
              <motion.circle
                cx={cx}
                cy={cy}
                r="6"
                fill="none"
                stroke="var(--mint)"
                strokeWidth="1.5"
                pointerEvents="none"
                animate={{ r: [6, 14], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeOut" }}
              />
            )}
          </>
        )}

        <circle cx="150" cy="150" r="3" fill="var(--text-muted)" />
      </svg>

      <div
        className="mono"
        style={{
          position: "absolute",
          left: "50%",
          top: "100%",
          marginTop: "-14px",
          transform: "translateX(-50%)",
          fontSize: 11.5,
          color: "var(--text-muted)",
          textAlign: "center",
          whiteSpace: "nowrap",
          letterSpacing: "0.03em",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div>
          {lat.toFixed(4)}° N, {Math.abs(lng).toFixed(4)}° W
        </div>

        {mode === "idle" ? (
          <motion.button
            onClick={handleStartGame}
            data-cursor
            animate={{ scale: [1, 1.045, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: "var(--mint)",
              border: "1px solid rgba(47, 230, 160, 0.4)",
              background: "rgba(47, 230, 160, 0.06)",
              borderRadius: 999,
              padding: "7px 14px",
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            think you can catch the signal? →
          </motion.button>
        ) : (
          <>
            <div>
              <span style={{ color: "var(--mint)" }}>{String(score).padStart(2, "0")} caught</span>
              <span style={{ opacity: 0.5 }}> · best {String(best).padStart(2, "0")}</span>
            </div>
            {isGameOver ? (
              <div style={{ color: "var(--coral)" }}>signal lost — resetting…</div>
            ) : (
              score === 0 && <div style={{ opacity: 0.6 }}>catch it before it hits the boundary</div>
            )}
            <button
              onClick={handleEndGame}
              data-cursor
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-muted)",
                border: "1px solid var(--ink-line)",
                background: "transparent",
                borderRadius: 999,
                padding: "5px 12px",
                cursor: "pointer",
              }}
            >
              ✕ end game
            </button>
          </>
        )}
      </div>
    </div>
  );
}