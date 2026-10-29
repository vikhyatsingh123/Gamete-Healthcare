import { AnimatePresence, motion } from "framer-motion";
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
} from "../siteData";

import { useState } from "react";
import ProductModal from "../components/ProductModal";
import { FadeUp } from "./ProductsPage";
import { newLaunched } from "../data/NewLaunched";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/home-img/image1.png";
import image2 from "../assets/home-img/image2.png";

export function HomePage() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(newLaunched.length / cardsPerPage);

  const visibleProducts = newLaunched.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
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

      <section className="split-section split-section-image-left mb-6">
        <Reveal className="split-media">
          <ImagePlaceholder
            src={image1}
            alt="Healthcare professional reviewing medical information"
          />
        </Reveal>

        <Reveal className="split-content" delay={0.08}>
          <span className="eyebrow">About Gamete Healthcare</span>
          <h2> Building Trust in Healthcare Since 1998</h2>
          <p>
            Founded in 1998, Gamete Healthcare is a trusted pharmaceutical
            company committed to delivering high-quality healthcare solutions
            across India. With nearly three decades of experience, we have built
            a strong reputation for providing reliable, effective, and
            affordable pharmaceutical products while upholding the highest
            standards of quality, integrity, and ethical business practices.
            <br />
            <br />
            Over the years, we have established a strong distribution network
            across East & Central Uttar Pradesh, followed by Gujarat, Rajasthan,
            and West Madhya Pradesh, ensuring the timely availability of quality
            pharmaceutical products and dependable service to healthcare
            professionals, distributors, and business partners. Driven by
            innovation and customer satisfaction, Gamete Healthcare continues to
            strengthen its position as a reliable name in the pharmaceutical
            industry.
          </p>
          <div className="story-highlight-grid"></div>
        </Reveal>
      </section>

      <section className="products-section">
        <div className="section-heading section-heading-wide">
          <div>
            <span className="eyebrow">Featured products</span>
            <h2>Click into the portfolio for deeper details</h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative px-8 sm:px-10 lg:px-12">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 sm:w-11 sm:h-11
              rounded-full flex items-center justify-center
              bg-white border border-[#d8e8f5]
              shadow-md
              transition-all duration-300
              ${
                currentPage === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#1a3a6b] hover:text-white hover:scale-110 cursor-pointer"
              }`}
            aria-label="Previous products"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -50,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleProducts.map((cat, i) => (
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

                      <p className="text-gray-600 text-sm leading-relaxed mb-4! truncate">
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
                            background:
                              "linear-gradient(135deg, #1a3a6b, #2a5298)",
                          }}
                          className="px-4 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                          View Details
                        </div>
                      </button>
                    </div>
                  </FadeUp>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 sm:w-11 sm:h-11
              rounded-full flex items-center justify-center
              bg-white border border-[#d8e8f5]
              shadow-md
              transition-all duration-300
              ${
                currentPage === totalPages - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#1a3a6b] hover:text-white hover:scale-110 cursor-pointer"
              }`}
            aria-label="Next products"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-7 bg-[#1a3a6b]"
                    : "w-2 bg-[#b9d2e7] hover:bg-[#7fa8c7]"
                }`}
                aria-label={`Go to product page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      <section className="color-band-section color-band-blue rounded-3xl">
        <div className="section-heading section-heading-centered section-heading-light">
          <span className="eyebrow eyebrow-light">Our export model</span>
          <h2>
            Built on experience, strengthened by partnerships, driven by trust
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
          <span className="eyebrow">OUR EXPORT DIVISION</span>
          <h2>Your Trusted Partner in Global Healthcare</h2>
          <p>
            Helik Healthcare Pvt. Ltd. is the international export division of
            Gamete Healthcare, bringing over 30 years of pharmaceutical industry
            experience to global markets through its associated company, Gamete
            Healthcare Pvt. Ltd., established in 1998.
            <br />
            <br />
            Today, Helik Healthcare serves 20+ international clients across 4
            countries, building lasting partnerships through quality-focused
            pharmaceutical solutions, reliable supply networks, and a strong
            understanding of evolving market needs. We are committed to
            expanding our global reach and delivering value through trusted
            partnerships and a shared focus on better healthcare.
          </p>
        </Reveal>

        <Reveal className="split-media" delay={0.08}>
          <ImagePlaceholder
            src={image2}
            alt="Pharmaceutical product and laboratory display"
          />
        </Reveal>
      </section>

      <ProductModal
        onClose={handleClose}
        open={open}
        product={selectedProduct}
      />
    </>
  );
}
