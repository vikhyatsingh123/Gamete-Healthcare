import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "../App";
import { CountUpText } from "../components/CountUpText";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Reveal } from "../components/Reveal";
import {
  exportModel,
  homeStats,
  manufacturingPillars,
  productCategories,
  storyHighlights,
  valuePillars,
} from "../siteData";
import { useState } from "react";
import ProductModal from "../components/ProductModal";
import { FadeUp } from "./ProductsPage";
import { newLaunched } from "../data/NewLaunched";

export function HomePage() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const heroSignals = [
    "Human-first healthcare storytelling",
    "Corporate pharma presentation",
    "Partner-ready product discovery",
  ];

  const heroInlineStats = homeStats.slice(0, 2);

  const heroBottomHighlights = [
    {
      label: "Trust signal",
      title: "Clinical credibility with softer brand warmth",
    },
    {
      label: "Digital clarity",
      title: "A cleaner path from homepage to products and business context",
    },
    {
      label: "Business value",
      title:
        "Built to speak to buyers, institutions, and channel partners faster",
    },
  ];

  return (
    <>
      <section className="hero-section page-hero-home">
        <div className="hero-background" aria-hidden="true">
          <div className="hero-home-backdrop">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
              alt=""
            />
          </div>
          <div className="hero-home-overlay"></div>
          <span className="hero-glow hero-glow-left"></span>
          <span className="hero-glow hero-glow-right"></span>
        </div>

        <Reveal className="hero-copy hero-home-copy">
          <span className="eyebrow">Innovation in healthcare</span>
          <h1>
            Pioneering pharmaceutical excellence with a more human visual
            language.
          </h1>
          <p>
            Gamete Healthcare combines clinical credibility with a modern
            portfolio story, helping distributors, institutions, and healthcare
            partners understand the brand fast.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/products">
              Explore our products
            </Link>
            <Link className="button button-ghost" to="/about">
              Learn more
            </Link>
          </div>

          <div className="hero-signal-list">
            {heroSignals.map((item) => (
              <span key={item} className="hero-signal-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-note">
            <span className="pulse-dot"></span>
            More movement, more imagery, and stronger page-to-page storytelling.
          </div>

          <div className="hero-inline-stats">
            {heroInlineStats.map((stat) => (
              <div key={stat.label} className="hero-inline-stat">
                <CountUpText as="strong" value={stat.value} />
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <motion.div
          className="hero-visual hero-home-collage"
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-home-figure hero-home-figure-primary"
            animate={{ y: [0, -8, 0], rotate: [0, -0.6, 0] }}
            transition={{
              duration: 7.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80"
              alt="Healthcare professional consulting with a patient"
            />
            <div className="hero-home-figure-caption">
              <span>Clinical care excellence</span>
              <strong>
                Trusted pharmaceutical communication with a stronger human
                connection
              </strong>
            </div>
          </motion.div>

          <motion.div
            className="hero-home-figure hero-home-figure-secondary"
            animate={{ y: [0, 10, 0], rotate: [0, 1.2, 0] }}
            transition={{
              duration: 8.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80"
              alt="Medical team collaborating in a modern clinical environment"
            />
          </motion.div>

          <motion.div
            className="hero-home-glass-card hero-home-glass-card-top"
            animate={{ y: [0, -12, 0], x: [0, 3, 0] }}
            transition={{
              duration: 5.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span>Quality score</span>
            <CountUpText as="strong" value="99.8%" />
            <p>
              Clean systems, disciplined communication, and stronger trust cues.
            </p>
          </motion.div>

          <motion.div
            className="hero-home-glass-card hero-home-glass-card-bottom"
            animate={{ y: [0, 14, 0], x: [0, -4, 0] }}
            transition={{
              duration: 5.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <span>Partner confidence</span>
            <strong>Responsive support and faster discovery</strong>
            <p>
              Built to help visitors understand the company and portfolio
              without friction.
            </p>
          </motion.div>
        </motion.div>

        <div className="hero-home-bottom-band">
          {heroBottomHighlights.map((item) => (
            <Reveal
              key={item.label}
              className="hero-home-band-card"
              delay={0.14}
              direction="up"
            >
              <span>{item.label}</span>
              <strong>{item.title}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="trust-strip">
        {homeStats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 0.06}
            className="stat-card"
            direction="up"
          >
            <CountUpText as="strong" value={stat.value} />
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </section>

      <section className="split-section split-section-image-left">
        <Reveal className="split-media">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
            alt="Healthcare professional reviewing medical information"
          />
        </Reveal>

        <Reveal className="split-content" delay={0.08}>
          <span className="eyebrow">About Gamete Healthcare</span>
          <h2>A legacy of trust, a clearer digital identity</h2>
          <p>
            Built with cues from Helik Healthcare and Mankind Pharma, the site
            now leans on structured corporate messaging, image-led storytelling,
            and stronger motion to feel less like a brochure and more like a
            pharmaceutical brand platform.
          </p>
          <div className="story-highlight-grid">
            {storyHighlights.map((item) => (
              <article key={item.title} className="story-highlight-card">
                <div className="card-media-header">
                  <img src={item.image} alt={item.title} />
                  <span className="card-mini-badge">{item.icon}</span>
                </div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="color-band-section color-band-blue">
        <div className="section-heading section-heading-centered section-heading-light">
          <span className="eyebrow eyebrow-light">Our export model</span>
          <h2>
            Built on operational clarity, consistency, and partner confidence
          </h2>
        </div>
        <div className="band-grid band-grid-three">
          {manufacturingPillars.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.07}
              className="band-card band-card-light"
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <span className="band-card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading section-heading-wide">
          <div>
            <span className="eyebrow">Our product range</span>
            <h2>Diversified healthcare categories built for scale</h2>
          </div>
          <p>
            Structured like a corporate pharma catalogue so visitors can quickly
            understand both therapy breadth and distribution relevance.
          </p>
        </div>

        <div className="categories-grid categories-grid-large">
          {productCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={index * 0.05}
              className="category-card"
            >
              <div className="category-card-media">
                <img src={category.image} alt={category.title} />
                <span className="category-index">{category.id}</span>
              </div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="insight-section">
        <div className="section-heading section-heading-wide">
          <div>
            <span className="eyebrow">Global opportunities</span>
            <h2>
              Healthcare communication that supports growth beyond one market
            </h2>
          </div>
          <p>
            The route-based structure now leaves room for commercial
            storytelling, export readiness, and partner support blocks that
            larger pharma businesses rely on.
          </p>
        </div>
        <div className="band-grid band-grid-three">
          {exportModel.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="insight-card"
              direction="up"
            >
              <span className="info-card-chip">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-section split-section-image-right">
        <Reveal className="split-content">
          <span className="eyebrow">Portfolio showcase</span>
          <h2>Visual storytelling that helps products feel premium</h2>
          <p>
            This section intentionally reserves image-first real estate similar
            to large pharma brands. Swap the placeholders with branded
            packshots, facility imagery, or doctor-led usage visuals when ready.
          </p>
          <div className="feature-rail">
            {valuePillars.map((item) => (
              <article key={item.title} className="feature-chip-card">
                <span className="info-card-chip">{item.icon}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="split-media" delay={0.08}>
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1400&q=80"
            alt="Pharmaceutical product and laboratory display"
          />
        </Reveal>
      </section>

      <section className="products-section">
        <div className="section-heading section-heading-wide">
          <div>
            <span className="eyebrow">Featured products</span>
            <h2>Click into the portfolio for deeper details</h2>
          </div>
          <p>
            The product cards now work across routes and open into a reusable
            modal for deeper formulation context.
          </p>
        </div>

        <div className="products-grid">
          {newLaunched.map((cat, i) => (
            <FadeUp key={cat.name} delay={i * 0.08}>
              <div className="bg-white border border-[#e1edf7] p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                <div className="flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full object-fill md:h-[222px]"
                  />
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#1a3a6b]">
                    {cat.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 truncate">
                  {cat.description}
                </p>

                <button
                  onClick={() => {
                    setSelectedProduct(cat);
                    setOpen(true);
                  }}
                  className="cursor-pointer w-full flex justify-center items-center gap-1 text-sm group-hover:gap-2 transition-all"
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #1a3a6b, #2a5298)",
                    }}
                    className="px-4 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Details
                  </div>
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <ProductModal
        onClose={handleClose}
        open={open}
        product={selectedProduct}
      />
    </>
  );
}
