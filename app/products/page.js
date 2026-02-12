import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import products from "../../lib/products.json";
import styles from "./page.module.css";

export default function ProductsPage() {
  const standard = products.filter((p) => p.id !== "shiner-barrel");
  const shiner = products.find((p) => p.id === "shiner-barrel");

  return (
    <>
      <Header />
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <img
            src="/images/original/coffee-beans.jpg"
            alt="Fresh coffee beans"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Salt Flat Coffee Company</span>
            <h1 className={styles.heroTitle}>Our Coffee</h1>
            <p className={styles.heroSub}>
              {products.length} small-batch roasts. Hand-dialed, never automated.
              Roasted in Tooele, Utah.
            </p>
          </div>
        </section>

        <SectionDivider src="/svg/wave-dark-to-grey-2.svg" />

        {/* Product Walkthrough */}
        <section className={styles.walkthrough}>
          <ScrollProgress />
          {standard.map((product, i) => (
            <div key={product.id}>
              <div
                className={`${styles.product} ${
                  i % 2 !== 0 ? styles.productReversed : ""
                }`}
              >
                <div className="container">
                  <div className={styles.productGrid}>
                    <div className={styles.productImageWrap}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={styles.productImage}
                      />
                      {product.labelImage && (
                        <img
                          src={product.labelImage}
                          alt={`${product.name} label`}
                          className={styles.productLabelImage}
                        />
                      )}
                    </div>
                    <div className={styles.productInfo}>
                      <div className={styles.productTags}>
                        {product.roast && (
                          <span className={styles.productBadge}>
                            {product.roast} Roast
                          </span>
                        )}
                        {product.origin && (
                          <span className={styles.productOrigin}>
                            {product.origin}
                          </span>
                        )}
                      </div>
                      <h2 className={styles.productName}>{product.name}</h2>
                      <p className={styles.productDesc}>
                        {product.description}
                      </p>
                      <div className={styles.productBottom}>
                        <div className={styles.productPricing}>
                          <span className={styles.productPrice}>
                            ${product.price.toFixed(2)}
                          </span>
                          {product.originalPrice && (
                            <span className={styles.productOriginal}>
                              ${product.originalPrice.toFixed(2)}
                            </span>
                          )}
                          <span className={styles.productWeight}>
                            / {product.weight}
                          </span>
                        </div>
                        {product.variants && (
                          <div className={styles.productVariants}>
                            {product.variants.map((v) => (
                              <span key={v} className={styles.variant}>
                                {v}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {i < standard.length - 1 && (
                <div className={styles.productDivider}>
                  <div className="container">
                    <hr className={styles.dividerLine} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <SectionDivider src="/svg/wave-grey-to-dark-2.svg" />

        {/* Featured: Shiner */}
        {shiner && (
          <section className={`section section--dark ${styles.featured}`}>
            <div className="container">
              <div className={styles.featuredInner}>
                <span className="section-label">Limited Batch</span>
                <div className={styles.featuredGrid}>
                  <div className={styles.featuredImageWrap}>
                    <img
                      src={shiner.image}
                      alt={shiner.name}
                      className={styles.featuredImage}
                    />
                    {shiner.labelImage && (
                      <img
                        src={shiner.labelImage}
                        alt={`${shiner.name} label`}
                        className={styles.featuredLabelImage}
                      />
                    )}
                  </div>
                  <div className={styles.featuredInfo}>
                    <span className={styles.featuredBadge}>
                      {shiner.roast}
                    </span>
                    <h2 className={styles.featuredName}>{shiner.name}</h2>
                    <p className={styles.featuredDesc}>
                      {shiner.description}
                    </p>
                    <div className={styles.featuredMeta}>
                      <span className={styles.featuredPrice}>
                        ${shiner.price.toFixed(2)}
                      </span>
                      <span className={styles.featuredWeight}>
                        / {shiner.weight}
                      </span>
                    </div>
                    <span className={styles.featuredVariant}>
                      {shiner.variants[0]} Only
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={`section section--dark ${styles.cta}`}>
          <div className="container">
            <div className={styles.ctaInner}>
              <span className="section-label">Visit Us</span>
              <h2 className={styles.ctaTitle}>
                Taste It <span className={styles.ctaAccent}>In Person</span>
              </h2>
              <p className={styles.ctaSub}>
                Stop by our shop at 70 S Main, Tooele. Open Tuesday through
                Sunday — fresh coffee waiting for you.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/contact" className="btn btn--primary">
                  Get Directions
                </a>
                <a href="/about" className="btn btn--secondary">
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
