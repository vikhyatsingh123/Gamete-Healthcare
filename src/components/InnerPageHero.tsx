import { Reveal } from "./Reveal";

type HeroCard = {
  title: string;
  text: string;
};

type HeroSpotlight = {
  value: string;
  text: string;
};

type InnerPageHeroProps = {
  eyebrow: string;
  title: string[];
  backgroundImage: string;
  backgroundAlt: string;
  cards: HeroCard[];
  spotlight: HeroSpotlight;
};

export function InnerPageHero({
  eyebrow,
  title,
  backgroundImage,
  backgroundAlt,
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
        <h1>{title[0]}</h1>
        <h1
          style={{
            color: "#17b5b8",
          }}
        >
          {title[1]}
        </h1>
      </Reveal>

      <Reveal className="page-hero-spotlight" delay={0.1} direction="left">
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
            <strong>{card.title}</strong>
            <p>{card.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
