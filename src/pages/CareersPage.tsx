import { CountUpText } from '../components/CountUpText'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { InnerPageHero } from '../components/InnerPageHero'
import { Reveal } from '../components/Reveal'
import { careerBenefits, cultureStats, hiringSteps, openRoles } from '../siteData'

export function CareersPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Careers"
        title="Join a healthcare team built around quality and momentum."
        description="The careers page should feel like an employer brand, not a hiring notice. This updated hero makes the page more people-led, more energetic, and more useful before visitors scroll into the openings."
        backgroundImage="https://images.unsplash.com/photo-1573497491765-cf4147f7f6c7?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Healthcare team collaborating in a professional workspace"
        chips={['Growth culture', 'Meaningful work', 'Cross-functional teams']}
        spotlight={{
          label: 'Career lens',
          value: 'People, quality, and visible impact',
          text: 'A more ambitious employer-facing introduction for talent evaluating the company quickly.',
        }}
        cards={[
          {
            label: 'Workplace',
            title: 'Growth-oriented environment',
            text: 'A stronger first signal for candidates looking for long-term momentum and ownership.',
          },
          {
            label: 'Role clarity',
            title: 'Structured hiring path',
            text: 'The page sets expectations clearly around openings, process, and next steps.',
          },
          {
            label: 'Team value',
            title: 'Cross-functional exposure',
            text: 'Shows how careers connect across quality, operations, and commercial execution.',
          },
        ]}
      />

      <section className="split-section split-section-image-right color-soft-section">
        <Reveal className="split-content" direction="left">
          <span className="eyebrow">Workplace culture</span>
          <h2>A more human view of the team behind the healthcare brand</h2>
          <p>
            Careers pages feel stronger when visitors can picture the environment, not just read
            role summaries. This section adds a more people-first layer around collaboration,
            mentoring, and day-to-day ownership.
          </p>
          <ul className="quality-list">
            <li>Cross-functional collaboration across healthcare operations, brand, and quality.</li>
            <li>Visible ownership for people who want meaningful contribution, not just tasks.</li>
            <li>Workplace momentum built around learning, communication, and practical execution.</li>
          </ul>
        </Reveal>

        <Reveal className="split-media" delay={0.08} direction="right">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="Collaborative healthcare and workplace team discussion"
            label="People-first workplace"
            caption="Team energy, collaboration, and clearer ownership across the business"
          />
        </Reveal>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <span className="eyebrow">Why join us</span>
          <h2>Career messaging with more ambition</h2>
        </div>
        <div className="capability-grid">
          {careerBenefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="capability-card">
              <div className="card-media-header">
                <img src={item.image} alt={item.title} />
                <span className="card-mini-badge">{item.icon}</span>
              </div>
              <span className="info-card-chip">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="trust-strip trust-strip-compact">
        {cultureStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05} className="stat-card" direction="up">
            <CountUpText as="strong" value={stat.value} />
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </section>

      <section className="openings-section">
        <div className="section-heading">
          <span className="eyebrow">Open positions</span>
          <h2>Example roles you can replace with real openings</h2>
        </div>
        <div className="openings-grid">
          {openRoles.map((role, index) => (
            <Reveal key={role.title} delay={index * 0.05} className="opening-card">
              <div className="card-media-header">
                <img src={role.image} alt={role.title} />
                <span className="card-mini-badge">{role.icon}</span>
              </div>
              <div>
                <span className="info-card-chip">{role.icon}</span>
                <span className="product-chip">{role.type}</span>
                <h3>{role.title}</h3>
                <p>{role.location}</p>
              </div>
              <a className="text-link" href="mailto:careers@gametehealthcare.com">
                Apply now
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="timeline-section color-soft-section">
        <div className="section-heading">
          <span className="eyebrow">Hiring process</span>
          <h2>A fuller careers route with clearer next steps</h2>
        </div>
        <div className="timeline-grid">
          {hiringSteps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="timeline-card" direction="up">
              <div className="card-media-header">
                <img src={item.image} alt={item.title} />
                <span className="card-mini-badge">{item.icon}</span>
              </div>
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
