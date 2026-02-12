import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Salt Flat</span>
              <span className={styles.logoSub}>Coffee</span>
            </div>
            <p className={styles.tagline}>
              Premium small batch artisanal roast coffee from Tooele, Utah.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/shop" className={styles.link}>Shop</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>

          {/* Visit Us */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Visit Us</h4>
            <p className={styles.info}>70 S Main</p>
            <p className={styles.info}>Tooele, Utah 84074</p>
            <p className={styles.info}>Tue-Fri: 7am - 2pm</p>
            <p className={styles.info}>Sat-Sun: 8am - 1pm</p>
          </div>

          {/* Social */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Follow Us</h4>
            <a
              href="https://facebook.com/saltflatcoffee"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/saltflatcoffee"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com/saltflatcoffee"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Pinterest
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Salt Flat Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
