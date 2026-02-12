"use client";

import { useRef, useEffect, useCallback } from "react";
import lineData from "../../../lib/progress-line-data.json";
import styles from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const ghostRef = useRef(null);
  const pathRef = useRef(null);
  const endRef = useRef(null);
  const lenRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    lenRef.current = len;
    pathRef.current.style.strokeDasharray = len;
    pathRef.current.style.strokeDashoffset = len;
  }, []);

  const onScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const len = lenRef.current;
      if (!len || !pathRef.current) return;

      const rail = pathRef.current.closest("." + styles.rail);
      const section = rail?.parentElement;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const wh = window.innerHeight;
      const scrolled = wh - rect.top;
      const total = rect.height + wh * 0.35;
      const p = Math.max(0, Math.min(1, scrolled / total));

      pathRef.current.style.strokeDashoffset = len * (1 - p);

      if (endRef.current) {
        endRef.current.style.opacity = p > 0.92 ? "0.4" : "0";
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll]);

  return (
    <div className={styles.rail}>
      <svg
        className={styles.svg}
        viewBox={lineData.viewBox}
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Ghost: faint track showing the full path */}
        <path
          ref={ghostRef}
          d={lineData.mainPath}
          stroke="#c5b783"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.05"
        />

        {/* The line */}
        <path
          ref={pathRef}
          d={lineData.mainPath}
          stroke="#c5b783"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.15"
        />
      </svg>

      {/* Endpoint check */}
      <div ref={endRef} className={styles.endpoint}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 13l4 4 8-9"
            stroke="#c5b783"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
