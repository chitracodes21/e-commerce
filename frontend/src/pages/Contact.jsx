import "../components/contact/contact.css";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactInfoGrid from "../components/contact/ContactInfoGrid";
import OfficeMapCard from "../components/contact/OfficeMapCard";
import {
  contactHeroLeftData,
  contactHeroRightData,
  contactHeroStats,
} from "../components/shared/hero/heroData";
import HeroLeftContent from "../components/shared/hero/HeroLeftContent";
import HeroRightContent from "../components/shared/hero/HeroRightContent";
import useInView from "../hooks/useInView";

function Contact() {
  const [ref, isVisible] = useInView(0.1);
  return (
    <>
      <section className="contact-hero">
        <div className="hero-split">
          <HeroLeftContent
            title={contactHeroLeftData.title}
            description={contactHeroLeftData.description}
            stats={contactHeroStats}
          />
          <HeroRightContent
            image={contactHeroRightData.image}
            alt={contactHeroRightData.alt}
            badge={contactHeroRightData.badge}
          />
        </div>
      </section>

      <div className="container">
        <ContactInfoGrid />
        <div
          ref={ref}
          className={`contact-form-section ${isVisible ? "motion-fade-up" : ""}`}
          style={{animationDelay:"0.4s"}}
        >
          <ContactFormSection />
          <OfficeMapCard />
        </div>

        {/* FAQ SECTION */}
        <div className="faq-section">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <span>How long does shipping take?</span>
              </div>
              <div className="faq-answer">
                Standard shipping takes 3-5 business days. Express shipping (1-2
                days) is available at checkout. International orders may take
                7-14 days.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>What's your return policy?</span>
              </div>
              <div className="faq-answer">
                We offer 30-day hassle-free returns on all unused items in
                original packaging. Free returns for defective products.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>Do you offer international shipping?</span>
              </div>
              <div className="faq-answer">
                Yes! We ship to over 120 countries worldwide.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>How can I track my order?</span>
              </div>
              <div className="faq-answer">
                You will receive a tracking number via email after shipment.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>What payment methods do you accept?</span>
              </div>
              <div className="faq-answer">
                Visa, Mastercard, PayPal, Apple Pay, Google Pay, and more.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <span>How do I change or cancel my order?</span>
              </div>
              <div className="faq-answer">
                Contact support within 1 hour of placing your order.
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="cta-section">
          <h2>Join the NovaMart Family</h2>
          <p>Subscribe to our newsletter for exclusive deals and updates.</p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              maxWidth: "500px",
              margin: "24px auto 0",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: "14px 20px",
                border: "none",
                outline: "none",
              }}
            />

            <button
              className="cta-btn"
              style={{
                margin: 0,
                background: "white",
                color: "#1e40af",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
