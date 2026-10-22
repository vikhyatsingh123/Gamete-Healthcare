import { MapPin } from "lucide-react";
import { CountUpText } from "../components/CountUpText";
import { InnerPageHero } from "../components/InnerPageHero";
import { Reveal } from "../components/Reveal";
import { contactCards, contactCards2, responseSteps } from "../siteData";

const contactCardMeta: Record<
  string,
  {
    icon: string;
    label: string;
    action: string;
    href: string;
    external?: boolean;
  }
> = {
  "Call us": {
    icon: "01",
    label: "Direct support line",
    action: "Call the business desk",
    href: "tel:+918840703781",
  },
  "Email us": {
    icon: "02",
    label: "Business communication",
    action: "Write to our team",
    href: "mailto:info@gametehealthcare.com",
  },
};

const contactCardMeta2: Record<
  string,
  {
    icon: string;
    label: string;
    action: string;
    href: string;
    external?: boolean;
  }
> = {
  "Visit us": {
    icon: "01",
    label: "Office and meetings",
    action: "Open location view",
    href: "https://maps.google.com/?q=Noida%20Sector-44%20Uttar%20Pradesh",
    external: true,
  },
};

export function ContactPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Contact us"
        title={["Get in touch", "Reach out to our expert team"]}
        backgroundImage="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Professional healthcare building exterior"
        spotlight={{
          value: "Your Business, Our Support",
          text: "Contact us for product details, partnerships, and business support.",
        }}
        cards={[
          {
            title: "Direct Business Support",
            text: "Get assistance with product inquiries and business opportunities.",
          },
          {
            title: "Business Inquiries",
            text: "Contact us for partnerships and product information.",
          },
          {
            title: "Meet Our Team",
            text: "Arrange a meeting to explore business opportunities.",
          },
        ]}
      />

      <section className="contact-page-grid">
        <div className="contact-card-grid">
          <Reveal className="contact-card-intro" direction="left">
            <span className="eyebrow">Connect faster</span>
            <h2>Let’s Connect</h2>
            <p>
              Contact us for product inquiries, distribution opportunities, and
              business partnerships.
            </p>
          </Reveal>

          {contactCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={0.06 + index * 0.05}
              className="contact-info-card"
            >
              <div className="contact-card-top">
                <span className="contact-card-icon" aria-hidden="true">
                  {contactCardMeta[card.title]?.icon ?? "0X"}
                </span>
                <span className="contact-card-label">
                  {contactCardMeta[card.title]?.label ?? card.title}
                </span>
              </div>

              <div className="contact-card-copy">
                <span className="contact-card-title">{card.title}</span>
                <strong>{card.primary}</strong>
                <p>{card.secondary}</p>
              </div>

              <a
                className="contact-card-action"
                href={contactCardMeta[card.title]?.href ?? "#"}
                target={
                  contactCardMeta[card.title]?.external ? "_blank" : undefined
                }
                rel={
                  contactCardMeta[card.title]?.external
                    ? "noreferrer"
                    : undefined
                }
              >
                {contactCardMeta[card.title]?.action ?? "Learn more"}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="h-full min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d342.9733147322053!2d83.00537458081355!3d25.273213521905756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1792681861878!5m2!1sen!2sin"
              className="w-[400px] md:w-[600px] rounded-2xl"
              height="350"
              allowFullScreen
              title="location"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

            <div className="mt-4 flex items-start gap-3 p-4 bg-blue-50 rounded-2xl w-[84%]">
              <MapPin className="w-5 h-5 text-[#1a3a6b] mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-[#1a3a6b] text-sm mb-0.5">
                  Gamete Healthcare
                </div>
                <div className="text-gray-600 text-sm">
                  87/3, Behind Heritage Housing, Bhagwanpur, Lanka
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="contact-page-grid grid-cols-3!">
        {contactCards2.map((card, index) => (
          <Reveal
            key={card.title}
            delay={0.06 + index * 0.05}
            className="contact-info-card"
          >
            <div className="contact-card-top">
              <span className="contact-card-icon" aria-hidden="true">
                {index === 0 ? "01" : index === 1 ? "02" : "03"}
              </span>
              <span className="contact-card-label">
                {contactCardMeta2[card.title]?.label ?? card.title}
              </span>
            </div>

            <div className="contact-card-copy">
              <span className="contact-card-title">{card.title}</span>
              <strong>{card.primary}</strong>

              <p>{card.secondary}</p>
            </div>

            <a
              className="contact-card-action"
              href={contactCardMeta2[card.title]?.href ?? "#"}
              target={
                contactCardMeta2[card.title]?.external ? "_blank" : undefined
              }
              rel={
                contactCardMeta2[card.title]?.external
                  ? "noreferrer"
                  : undefined
              }
            >
              {contactCardMeta2[card.title]?.action ?? "Learn more"}
            </a>
          </Reveal>
        ))}
      </section>

      <section className="timeline-section">
        <Reveal className="contact-form-card" delay={0.12}>
          <span className="eyebrow">Inquiry form</span>
          <h2>Tell us what you need</h2>
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your full name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@company.com" />
            </label>
            <label>
              <span>Requirement</span>
              <input
                type="text"
                placeholder="Distribution, products, manufacturing, careers"
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                rows={5}
                placeholder="Tell us about your requirement"
              ></textarea>
            </label>
            <button type="button" className="button button-primary">
              Send inquiry
            </button>
          </form>
        </Reveal>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <span className="eyebrow">Response process</span>
          <h2>What happens after a new inquiry reaches the team</h2>
        </div>
        <div className="timeline-grid">
          {responseSteps.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="timeline-card"
              direction="up"
            >
              <div className="timeline-card-top">
                <CountUpText
                  as="span"
                  className="timeline-year"
                  value={`0${index + 1}`}
                />
                <span className="info-card-chip">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
