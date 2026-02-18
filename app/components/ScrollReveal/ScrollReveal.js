"use client";

import { useRef, useEffect } from "react";
import styles from "./ScrollReveal.module.css";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: show content after 2s if observer never fires
    const fallback = setTimeout(() => {
      el.classList.add(styles.visible);
    }, 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallback);
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
