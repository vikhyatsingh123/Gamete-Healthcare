import { CountUpText } from '../components/CountUpText'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { InnerPageHero } from '../components/InnerPageHero'
import { Reveal } from '../components/Reveal'
import { contactCards, regionalPresence, responseSteps } from '../siteData'

const contactCardMeta: Record<
  string,
  { icon: string; label: string; action: string; href: string; external?: boolean }
> = {
  'Call us': {
    icon: '01',
    label: 'Direct support line',
    action: 'Call the business desk',
    href: 'tel:+9199999999999',
  },
  'Email us': {
    icon: '02',
    label: 'Business communication',
    action: 'Write to our team',
    href: 'mailto:info@gametehealthcare.com',
  },
  'Visit us': {
    icon: '03',
    label: 'Office and meetings',
    action: 'Open location view',
    href: 'https://maps.google.com/?q=Noida%20Sector-44%20Uttar%20Pradesh',
    external: true,
  },
}

export function ContactPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Contact us"
        title="Great healthcare partnerships begin with one conversation."
        description="The contact page should immediately feel responsive and action-oriented. This hero shifts the focus from one static image to a more useful first view with contact intent, access routes, and practical support cues."
        backgroundImage="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Professional healthcare building exterior"
        chips={['Fast response', 'Partner support', 'Direct access']}
        spotlight={{
          label: 'Support promise',
          value: 'Business, products, and partner inquiries routed clearly',
          text: 'A stronger first impression for distributors, institutions, and prospects trying to reach the right team fast.',
        }}
        cards={[
          {
            label: 'Call route',
            title: 'Direct business support',
            text: 'Phone-first access for urgent questions, introductions, and commercial coordination.',
          },
          {
            label: 'Mail route',
            title: 'Clear inquiry handling',
            text: 'Structured email contact for product, partnership, and corporate communication.',
          },
          {
            label: 'Visit route',
            title: 'Office and meeting context',
            text: 'Location visibility and practical context for in-person conversations and follow-ups.',
          },
        ]}
      />

      <section className="contact-page-grid">
        <div className="contact-card-grid">
          <Reveal className="contact-card-intro" direction="left">
            <span className="eyebrow">Connect faster</span>
            <h2>Choose the quickest route to reach the right team.</h2>
            <p>
              Product discussions, distribution inquiries, and corporate conversations often move
              faster when visitors know exactly where to start.
            </p>
          </Reveal>

          {contactCards.map((card, index) => (
            <Reveal key={card.title} delay={0.06 + index * 0.05} className="contact-info-card">
              <div className="contact-card-top">
                <span className="contact-card-icon" aria-hidden="true">
                  {contactCardMeta[card.title]?.icon ?? '0X'}
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
                href={contactCardMeta[card.title]?.href ?? '#'}
                target={contactCardMeta[card.title]?.external ? '_blank' : undefined}
                rel={contactCardMeta[card.title]?.external ? 'noreferrer' : undefined}
              >
                {contactCardMeta[card.title]?.action ?? 'Learn more'}
              </a>
            </Reveal>
          ))}
        </div>

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
              <input type="text" placeholder="Distribution, products, manufacturing, careers" />
            </label>
            <label>
              <span>Message</span>
              <textarea rows={5} placeholder="Tell us about your requirement"></textarea>
            </label>
            <button type="button" className="button button-primary">
              Send inquiry
            </button>
          </form>
        </Reveal>
      </section>

      <section className="split-section split-section-image-left color-soft-section">
        <Reveal className="split-media" direction="left">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
            alt="Business handshake representing healthcare partnership"
            label="Partner engagement"
            caption="Regional coordination, responsive support, and practical business alignment"
          />
        </Reveal>
        <Reveal className="split-content" delay={0.08} direction="right">
          <span className="eyebrow">Our presence</span>
          <h2>More depth for visitors who want practical contact context</h2>
          <p>
            A stronger contact page should explain not only how to reach the business, but how the
            team handles partner requests and where support is concentrated.
          </p>
          <ul className="quality-list">
            {regionalPresence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <span className="eyebrow">Response process</span>
          <h2>What happens after a new inquiry reaches the team</h2>
        </div>
        <div className="timeline-grid">
          {responseSteps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="timeline-card" direction="up">
              <div className="timeline-card-top">
                <CountUpText as="span" className="timeline-year" value={`0${index + 1}`} />
                <span className="info-card-chip">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
