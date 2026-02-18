import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Salt Flat Coffee",
  description:
    "Get in touch with Salt Flat Coffee. Visit us at 70 S Main, Tooele, Utah or send us a message.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Get In Touch</span>
            <h1 className={styles.heroTitle}>
              We'd Love to<br />
              <span className={styles.heroAccent}>Hear From You</span>
            </h1>
            <p className={styles.heroSub}>
              Whether you have a question, want to book the truck, or just want
              to say hello — we're here for it.
            </p>
          </div>
        </section>

        {/* Contact Grid: Form + Info */}
        <section className={`section ${styles.contact}`}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Left: Form */}
              <div className={styles.formWrap}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSub}>
                  Questions about our coffee, wholesale inquiries, or booking the
                  truck — drop us a line.
                </p>
                <ContactForm
                  className={styles.form}
                  groupClassName={styles.formGroup}
                  labelClassName={styles.label}
                  inputClassName={styles.input}
                  textareaClassName={styles.textarea}
                />
              </div>

              {/* Right: Info */}
              <div className={styles.info}>
                {/* Location */}
                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>Visit Us</h3>
                  <p className={styles.infoText}>
                    70 S Main<br />
                    Tooele, Utah 84074
                  </p>
                </div>

                {/* Hours */}
                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>Hours</h3>
                  <div className={styles.hours}>
                    <div className={styles.hoursRow}>
                      <span>Tuesday - Friday</span>
                      <span>7am - 2pm</span>
                    </div>
                    <div className={styles.hoursRow}>
                      <span>Saturday - Sunday</span>
                      <span>8am - 1pm</span>
                    </div>
                    <div className={`${styles.hoursRow} ${styles.hoursClosed}`}>
                      <span>Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className={styles.infoBlock}>
                  <h3 className={styles.infoLabel}>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    <a
                      href="https://facebook.com/saltflatcoffee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/saltflatcoffee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      Instagram
                    </a>
                    <a
                      href="https://pinterest.com/saltflatcoffee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      Pinterest
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className={styles.map}>
          <iframe 
            src="https://maps.google.com/maps?q=70+S+Main+St,+Tooele,+UT+84074&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy" 
            allowFullScreen 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
