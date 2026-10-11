import { Reveal } from './Reveal'

type HeroCard = {
  label: string
  title: string
  text: string
}

type HeroSpotlight = {
  label: string
  value: string
  text: string
}

type InnerPageHeroProps = {
  eyebrow: string
  title: string
  description: string
  backgroundImage: string
  backgroundAlt: string
  chips: string[]
  cards: HeroCard[]
  spotlight: HeroSpotlight
}

export function InnerPageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  backgroundAlt,
  chips,
  cards,
  spotlight,
}: InnerPageHeroProps) {
  return (
    <section className="page-hero-banner">
      <div className="page-hero-banner-media" aria-hidden="true">
        <img src={backgroundImage} alt={backgroundAlt} />
      </div>

      <div className="page-hero-banner-overlay"></div>

      <Reveal className="page-hero-banner-panel" direction="up">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="page-hero-chip-row">
          {chips.map((chip) => (
            <span key={chip} className="page-hero-chip">
              {chip}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="page-hero-spotlight" delay={0.1} direction="left">
        <span>{spotlight.label}</span>
        <strong>{spotlight.value}</strong>
        <p>{spotlight.text}</p>
      </Reveal>

      <div className="page-hero-card-grid">
        {cards.map((card, index) => (
          <Reveal
            key={card.title}
            className="page-hero-mini-card"
            delay={0.12 + index * 0.06}
            direction="up"
          >
            <span>{card.label}</span>
            <strong>{card.title}</strong>
            <p>{card.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}