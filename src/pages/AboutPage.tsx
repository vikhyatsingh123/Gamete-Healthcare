import { CountUpText } from '../components/CountUpText'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { InnerPageHero } from '../components/InnerPageHero'
import { Reveal } from '../components/Reveal'
import {
  aboutCapabilities,
  aboutTimeline,
  certifications,
  homeStats,
  qualitySystems,
} from '../siteData'

export function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="About us"
        title="Built for credibility, compliance, and long-term growth."
        description="Gamete Healthcare’s company profile should feel layered and credible, with more than a headline and one supporting image. This updated hero leans into trust, operating discipline, and long-term healthcare ambition."
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Modern healthcare facility corridor"
        chips={['Legacy-driven', 'Quality-led', 'Partner-trusted']}
        spotlight={{
          label: 'Operating confidence',
          value: '25+ years of industrial grounding',
          text: 'A stronger first impression built on operational trust, cleaner profile depth, and healthcare seriousness.',
        }}
        cards={[
          {
            label: 'Company profile',
            title: 'Credibility-first positioning',
            text: 'More structure for trust-building, capability framing, and institutional relevance.',
          },
          {
            label: 'Compliance view',
            title: 'Systems and quality language',
            text: 'A visible emphasis on process discipline and quality communication from the first scroll.',
          },
          {
            label: 'Brand direction',
            title: 'Future-facing healthcare identity',
            text: 'Sharper presentation for partners, buyers, and healthcare stakeholders evaluating the business.',
          },
        ]}
      />

      <section className="split-section split-section-image-left">
        <Reveal className="split-media">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80"
            alt="Modern healthcare facility corridor"
            label="Healthcare infrastructure"
            caption="Operational discipline supported by clean systems and structured execution"
          />
        </Reveal>
        <Reveal className="split-content" delay={0.08}>
          <span className="eyebrow">Who we are</span>
          <h2>A future-facing healthcare brand with operational discipline</h2>
          <p>
            This page is structured to read like a real company profile rather than a generic landing
            section. It supports brand storytelling, capability framing, and stronger buyer trust.
          </p>
          <div className="certification-strip">
            {certifications.map((item) => (
              <div key={item} className="certification-pill">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="trust-strip trust-strip-compact">
        {homeStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05} className="stat-card">
            <CountUpText as="strong" value={stat.value} />
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <span className="eyebrow">Core capabilities</span>
          <h2>What the brand can communicate more clearly now</h2>
        </div>

        <div className="capability-grid">
          {aboutCapabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="capability-card">
              <span className="info-card-chip">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <span className="eyebrow">Growth timeline</span>
          <h2>More narrative structure for a more credible company profile</h2>
        </div>
        <div className="timeline-grid">
          {aboutTimeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.07} className="timeline-card" direction="up">
              <div className="timeline-card-top">
                <CountUpText as="span" className="timeline-year" value={item.year} />
                <span className="info-card-chip">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-section split-section-image-right color-soft-section">
        <Reveal className="split-content" direction="left">
          <span className="eyebrow">Quality systems</span>
          <h2>Operational trust needs more than one paragraph</h2>
          <p>
            This added section creates a stronger healthcare-company feel by giving compliance,
            process, and commercial discipline their own visible space.
          </p>
          <ul className="quality-list">
            {qualitySystems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="split-media" delay={0.08} direction="right">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1583607264434-2d8e199b3a17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Laboratory scientist working with equipment"
            label="Quality assurance focus"
            caption="Process visibility, batch discipline, and stronger quality communication"
          />
        </Reveal>
      </section>
    </>
  )
}
