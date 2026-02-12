import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewsletterForm from "./components/NewsletterForm";
import SectionDivider from "./components/SectionDivider/SectionDivider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <img
            src="/images/original/Camp_side_pic_4100x.jpg"
            alt="Salt Flat Coffee outdoors by the river"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Tooele, Utah</span>
            <h1 className={styles.heroTitle}>
              Small Batch, Artisan
              <br />
              <span className={styles.heroAccent}>Roasted Coffee</span>
            </h1>
            <p className={styles.heroSub}>
              Fresh roasted in Tooele, Utah. Ground or whole bean, shipped across
              the United States.
            </p>
            <div className={styles.heroCtas}>
              <a href="/shop" className="btn btn--primary">
                Shop Coffee
              </a>
              <a
                href="/contact"
                className="btn btn--secondary"
                style={{ borderColor: "rgba(255,255,255,0.35)", color: "#faf8f5" }}
              >
                Visit Us
              </a>
            </div>
          </div>
        </section>

        <section className={styles.facts}>
          <div className="container">
            <div className={styles.factsGrid}>
              <div className={styles.fact}>Small-batch roasted in Tooele</div>
              <div className={styles.fact}>High-caffeine blends available</div>
              <div className={styles.fact}>Ships across the United States</div>
            </div>
          </div>
        </section>

        <SectionDivider src="/svg/wave-dark-to-grey-1.svg" />

        <section className={`section section--dark ${styles.intro}`}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introText}>
                <span className="section-label">Our Process</span>
                <h2 className="section-title">
                  Coffee First.
                  <br />
                  No Shortcuts.
                </h2>
                <p>
                  We roast in small quantities so each batch can be dialed in by hand.
                  That means better consistency, fresher flavor, and coffee that
                  tastes intentional from first sip to last.
                </p>
                <div className={styles.introActions}>
                  <a href="/about" className="btn btn--gold">
                    Learn More
                  </a>
                  <a href="/shop" className="btn btn--secondary">
                    Browse Roasts
                  </a>
                </div>
              </div>
              <div className={styles.introImage}>
                <img
                  src="/images/original/making-coffee.jpg"
                  alt="Fresh coffee being poured"
                  className={styles.introImg}
                />
              </div>
            </div>
          </div>
        </section>

        <SectionDivider src="/svg/wave-grey-to-dark-1.svg" />

        <section className={`section section--dark ${styles.shopCta}`}>
          <div className="container">
            <div className={styles.shopCtaInner}>
              <span className="section-label">Our Coffee</span>
              <h2 className={styles.shopCtaTitle}>
                Fresh Roasted,<br />
                <span className={styles.shopCtaAccent}>Ready to Ship</span>
              </h2>
              <p className={styles.shopCtaSub}>
                Small-batch roasts crafted in Tooele, Utah. Whole bean or ground,
                delivered to your door.
              </p>
              <a href="/shop" className="btn btn--primary btn--lg">
                Shop Now
              </a>
            </div>
          </div>
        </section>

        <SectionDivider src="/svg/wave-dark-to-grey-2.svg" />

        <section className={`section section--dark ${styles.spotlight}`}>
          <div className="container">
            <div className={styles.spotlightGrid}>
              <div className={styles.spotlightImage}>
                <img
                  src="/images/original/ShinerTable_1200x1200.jpg"
                  alt="Salt Flat Shiner cask coffee bottle"
                  className={styles.spotlightImg}
                />
              </div>
              <div className={styles.spotlightText}>
                <span className="section-label">Limited Batch</span>
                <h2 className="section-title">
                  Salt Flat Shiner
                  <br />
                  Cask Coffee
                </h2>
                <p>
                  Dry barrel-aged whole bean coffee with oak, vanilla, and caramel
                  notes. Small runs, bold profile, and built for serious coffee
                  drinkers.
                </p>
                <a href="/shop" className="btn btn--gold" style={{ marginTop: "1.5rem" }}>
                  Shop Limited Roast
                </a>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider src="/svg/wave-grey-to-dark-2.svg" />

        <section className={`section section--dark ${styles.action}`}>
          <div className="container">
            <div className={styles.actionGrid}>
              <div className={styles.visitCard}>
                <span className="section-label">Visit Us</span>
                <h2 className="section-title">70 S Main, Tooele</h2>
                <div className={styles.locationDetails}>
                  <div className={styles.locationItem}>
                    <h3>Hours</h3>
                    <p>
                      Tuesday - Friday: 7am - 2pm
                      <br />
                      Saturday - Sunday: 8am - 1pm
                    </p>
                  </div>
                  <div className={styles.locationItem}>
                    <h3>Need Shipping?</h3>
                    <p>Order online and we will ship anywhere in the United States.</p>
                  </div>
                </div>
                <a href="/contact" className="btn btn--secondary" style={{ marginTop: "1.5rem" }}>
                  Contact Us
                </a>
              </div>
              <div className={styles.newsletterCard}>
                <img
                  src="/images/original/SaltFlatShieldEagle_WoodFlagBG_1200x1200.jpg"
                  alt="Salt Flat Coffee Eagle Shield design"
                  className={styles.actionImg}
                />
                <h3 className={styles.newsTitle}>Get Offers First</h3>
                <p className={styles.newsSub}>
                  New drops, small-batch alerts, and member-only discounts.
                </p>
                <NewsletterForm
                  className={styles.newsletterForm}
                  inputClassName={styles.newsletterInput}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
