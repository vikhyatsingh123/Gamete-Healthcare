import { CountUpText } from "../components/CountUpText";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { InnerPageHero } from "../components/InnerPageHero";
import { Reveal } from "../components/Reveal";
import { cultureStats, hiringSteps, openRoles } from "../siteData";

export function CareersPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Careers"
        title={["Grow Your Career With Us", "Join our team"]}
        backgroundImage="https://images.unsplash.com/photo-1573497491765-cf4147f7f6c7?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Healthcare team collaborating in a professional workspace"
        spotlight={{
          value: "People, quality, and progress",
          text: "Join a team focused on quality, accountability, and long-term growth.",
        }}
        cards={[
          {
            title: "Workplace",
            text: "Develop your skills and build your career with us.",
          },
          {
            title: "Opportunities",
            text: "Explore roles that match your skills and experience.",
          },
          {
            title: "Team culture",
            text: "Collaborate with colleagues to achieve shared goals.",
          },
        ]}
      />

      <section className="split-section split-section-image-right color-soft-section">
        <Reveal className="split-content" direction="left">
          <span className="eyebrow">Workplace culture</span>
          <h2>Driven by People, United by Quality</h2>
          <p>
            At Gamete Healthcare, we believe in teamwork, accountability, and
            continuous improvement. Together, we work toward quality,
            efficiency, and shared business goals.
          </p>
          <ul className="quality-list">
            <li>Teamwork: Collaborating across departments.</li>
            <li>Accountability: Taking ownership and delivering results.</li>
            <li>Continuous Growth: Learning and improving every day.</li>
          </ul>
        </Reveal>

        <Reveal className="split-media" delay={0.08} direction="right">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="Collaborative healthcare and workplace team discussion"
          />
        </Reveal>
      </section>

      <section className="trust-strip trust-strip-compact">
        {cultureStats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.05}
            className="stat-card"
            direction="up"
          >
            <CountUpText as="strong" value={stat.value} />
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </section>

      <section className="openings-section">
        <div className="section-heading">
          <span className="eyebrow">Open positions</span>
          <h2>Current Opportunities</h2>
        </div>
        <div className="openings-grid">
          {openRoles.map((role, index) => (
            <Reveal
              key={role.title}
              delay={index * 0.05}
              className="opening-card"
            >
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
              <a
                className="text-link"
                href="mailto:careers@gametehealthcare.com"
              >
                Apply now
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="timeline-section color-soft-section">
        <div className="section-heading">
          <span className="eyebrow">Hiring process</span>
          <h2>Your Journey to Joining Gamete Healthcare</h2>
        </div>
        <div className="timeline-grid">
          {hiringSteps.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="timeline-card"
              direction="up"
            >
              <div className="card-media-header">
                <img src={item.image} alt={item.title} />
                <span className="card-mini-badge">{item.icon}</span>
              </div>
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
