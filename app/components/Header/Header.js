"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const rafRef = useRef(null);

  // Scroll listener with rAF to avoid jank (per skill learnings)
  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 60;
        setScrolled(isScrolled);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial state
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerClasses = [
    styles.header,
    scrolled ? styles.headerScrolled : "",
    menuOpen ? styles.headerMenuOpen : "",
  ].filter(Boolean).join(" ");

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img
            src="/images/logo/Mountains_Logo_Black_Background.jpg"
            alt="Salt Flat Coffee"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/shop" className={styles.cta}>
            Order Now
          </Link>
        </nav>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileNavLinkActive : ""}`}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${0.1 + i * 0.06}s` : "0s" }}
            >
              <span className={styles.mobileNavLabel}>{link.label}</span>
            </Link>
          ))}
          <Link
            href="/shop"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${0.1 + NAV_LINKS.length * 0.06}s` : "0s" }}
          >
            Order Now
          </Link>
        </nav>

        <div className={styles.mobileOverlayFooter}>
          <p className={styles.mobileFooterText}>Tooele, Utah · Fresh Roasted</p>
        </div>
      </div>
    </header>
  );
}
