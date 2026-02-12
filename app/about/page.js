import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Salt Flat Coffee",
  description:
    "Premium small batch artisanal roast coffee from Tooele, Utah. Roasted without automation by artisan roasters.",
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — clean text, no image */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <ScrollReveal>
              <span className={styles.heroLabel}>About Salt Flat Coffee</span>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <h1 className={styles.heroTitle}>
                Life Caffeinated,
                <br />
                <span className={styles.heroAccent}>Coffee Elevated</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <p className={styles.heroSub}>
                Premium small batch artisanal roast coffee from Tooele, Utah.
                Roasted without automation, by artisan roasters who have a
                passion for good coffee.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Facts */}
        <section className={styles.facts}>
          <div className="container">
            <div className={styles.factsGrid}>
              <ScrollReveal className={styles.fact}>
                Roasted Without Automation
              </ScrollReveal>
              <ScrollReveal className={styles.fact} delay={100}>
                70 S Main, Tooele, UT
              </ScrollReveal>
              <ScrollReveal className={styles.fact} delay={200}>
                Ships Across America
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionDivider src="/svg/wave-dark-to-grey-3.svg" />

        {/* Our Process */}
        <section className={`section section--dark ${styles.process}`}>
          <div className="container">
            <div className={styles.processGrid}>
              <div className={styles.processText}>
                <ScrollReveal>
                  <span className="section-label">Small Batch Roasting</span>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <h2 className="section-title">
                    We Take Special Care to
                    <br />
                    Roast It Right
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={180}>
                  <p>
                    Every batch is roasted in small quantities, without
                    automation, by artisan roasters who have a passion for good
                    coffee. We roast it for people who know what good coffee is
                    and will accept nothing less.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={260}>
                  <p>
                    We source beans from Ethiopia, Kenya, Peru, Colombia, Mexico,
                    and Brazil — each origin chosen for its character and quality.
                    Available ground or whole bean, shipped anywhere in the United
                    States.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal className={styles.processImage} delay={150}>
                <img
                  src="/images/original/coffee-beans-from-above.jpg"
                  alt="Fresh roasted coffee beans"
                  className={styles.processImg}
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionDivider src="/svg/wave-grey-to-dark-3.svg" />

        {/* Testimonials */}
        <section className={`section section--dark ${styles.testimonials}`}>
          <div className="container">
            <div className={styles.testimonialContent}>
              <ScrollReveal>
                <span className="section-label">What People Say</span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="section-title">Hands Down the Best</h2>
              </ScrollReveal>
              <div className={styles.quoteGrid}>
                <ScrollReveal delay={200}>
                  <blockquote className={styles.quote}>
                    <p>
                      &ldquo;This is hands down the best coffee I have ever
                      tasted! I highly recommend the trip over to them,
                      it&rsquo;s worth it.&rdquo;
                    </p>
                    <cite>Wesley B.</cite>
                  </blockquote>
                </ScrollReveal>
                <ScrollReveal delay={320}>
                  <blockquote className={styles.quote}>
                    <p>
                      &ldquo;Finally decided to stop supporting the big coffee
                      companies and start supporting a local business.&rdquo;
                    </p>
                    <cite>Jordan R.</cite>
                  </blockquote>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`section section--dark ${styles.cta}`}>
          <div className="container">
            <ScrollReveal>
              <div className={styles.ctaContent}>
                <h2 className="section-title">Come Taste the Difference</h2>
                <p className={styles.ctaSub}>
                  Visit us at 70 S Main in Tooele, find our coffee truck around
                  town, or order online and we&rsquo;ll ship it to your door.
                </p>
                <div className={styles.ctaDetails}>
                  <div className={styles.ctaDetail}>
                    <h3>Hours</h3>
                    <p>
                      Tuesday – Friday: 7am – 2pm
                      <br />
                      Saturday – Sunday: 8am – 1pm
                    </p>
                  </div>
                  <div className={styles.ctaDetail}>
                    <h3>Location</h3>
                    <p>
                      70 South Main Street
                      <br />
                      Tooele, Utah 84074
                    </p>
                  </div>
                </div>
                <div className={styles.ctaButtons}>
                  <a href="/shop" className="btn btn--primary">
                    Shop Coffee
                  </a>
                  <a href="/contact" className="btn btn--gold">
                    Get In Touch
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
