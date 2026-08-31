"use client";
import { useEffect, useState } from "react";

const lines = [
  {
    words: ["Stay", "ambitious."],
    style: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontStyle: "italic",
      color: "#1A1A1A",
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
    },
  },
  {
    words: ["Build", "bold.", "Launch", "fearlessly."],
    style: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
      color: "#E8641A",
      letterSpacing: "0.01em",
      lineHeight: 1.4,
    },
  },
  {
    words: ["We", "craft", "your", "vision", "into", "reality."],
    style: {
      fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
      color: "#9A9A8A",
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
      lineHeight: 1.6,
    },
  },
];

// flatten words into a single list to get global stagger index
const allWords = lines.flatMap((l) => l.words);
const DELAY_PER_WORD = 0.14; // seconds between each word
const TOTAL_DURATION = 5000; // ms before fade starts
const FADE_DURATION = 500; // ms for fade out

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem("lc_intro_seen")) {
      setHidden(true);
      return;
    }
    sessionStorage.setItem("lc_intro_seen", "1");

    const t1 = setTimeout(() => setFadeOut(true), TOTAL_DURATION - FADE_DURATION);
    const t2 = setTimeout(() => setHidden(true), TOTAL_DURATION);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  let globalIndex = 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#F9F7F4",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2rem",
        opacity: fadeOut ? 0 : 1,
        transition: `opacity ${FADE_DURATION}ms ease`,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Decorative top hairline */}
      <div
        style={{
          width: "32px",
          height: "1px",
          background: "#D8D5CF",
          marginBottom: "0.5rem",
        }}
      />

      {lines.map((line, li) => (
        <p key={li} style={{ margin: 0, textAlign: "center", ...line.style }}>
          {line.words.map((word) => {
            const idx = globalIndex++;
            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  opacity: 0,
                  animation: "wordReveal 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  animationDelay: `${idx * DELAY_PER_WORD}s`,
                  marginRight: "0.28em",
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      ))}

      {/* Decorative bottom hairline */}
      <div
        style={{
          width: "32px",
          height: "1px",
          background: "#D8D5CF",
          marginTop: "0.5rem",
        }}
      />
    </div>
  );
}
