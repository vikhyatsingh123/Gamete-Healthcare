import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaPath: string;
  accent: string;
  gradient: string;
}

// Content grounded in the Gamete/Helik Healthcare brochure: founded 1998,
// WHO-GMP/ISO/GMP certified manufacturing, export division reach across
// Nepal, Bhutan & the UAE with manufacturing capability serving 20+ countries.
const slides: Slide[] = [
  {
    id: 1,
    badge: "Trusted Since 1998",
    title: "Nearly Three\nDecades of\nPharma Trust",
    subtitle:
      "Gamete Healthcare has been delivering safe, effective and affordable pharmaceutical products across India since 1998 — quality which you can trust.",
    cta: "Explore Our Products",
    ctaPath: "/products",
    accent: "#0a8987",
    gradient: "linear-gradient(135deg, #0f2347 0%, #1253A1 45%, #2a5298 100%)",
  },
  {
    id: 2,
    badge: "Manufacturing Excellence",
    title: "WHO-GMP & ISO\nCertified\nFacilities",
    subtitle:
      "Every product is manufactured under WHO-GMP, GMP and ISO 9001:2015-certified quality systems, with multi-level checks for batch-to-batch consistency.",
    cta: "Our Product Range",
    ctaPath: "/products",
    accent: "#0a8987",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 45%, #1a5276 100%)",
  },
  {
    id: 3,
    badge: "Helik Healthcare — Export Division",
    title: "Reaching Nepal,\nBhutan &\nthe UAE",
    subtitle:
      "Our export division, Helik Healthcare, carries that same standard of care into Nepal, Bhutan and Dubai — with manufacturing capability serving 20+ countries and growing.",
    cta: "Partner With Us",
    ctaPath: "/contact",
    accent: "#0a8987",
    gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 45%, #1253A1 100%)",
  },
];

// Fixed node layout for the ambient "global network" graphic — a nod to the
// dotted world-map artwork on the brochure's contact page.
const networkNodes = [
  { x: 78, y: 22 }, // origin (India)
  { x: 92, y: 16 }, // Nepal
  { x: 96, y: 30 }, // Bhutan
  { x: 60, y: 44 }, // Dubai / UAE
  { x: 40, y: 20 },
  { x: 30, y: 52 },
];
const networkLinks = [
  [0, 1],
  [0, 2],
  [0, 3],
  [3, 4],
  [3, 5],
];

const NetworkGraphic = ({ accent }: { accent: string }) => (
  <svg
    viewBox="0 0 100 65"
    className="absolute right-0 top-0 h-full w-full md:w-2/3 opacity-90"
    preserveAspectRatio="xMaxYMid slice"
  >
    {networkLinks.map(([a, b], i) => {
      const from = networkNodes[a];
      const to = networkNodes[b];
      return (
        <motion.line
          key={`${a}-${b}`}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="white"
          strokeWidth={0.25}
          strokeOpacity={0.35}
          strokeDasharray="2 1.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: "easeOut" }}
        />
      );
    })}
    {networkNodes.map((n, i) => (
      <motion.circle
        key={i}
        cx={n.x}
        cy={n.y}
        r={i === 0 ? 1.6 : 1.1}
        fill={i === 0 ? accent : "white"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1], opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
      />
    ))}
    {networkNodes.map((n, i) => (
      <motion.circle
        key={`pulse-${i}`}
        cx={n.x}
        cy={n.y}
        r={1.1}
        fill="none"
        stroke={i === 0 ? accent : "white"}
        strokeWidth={0.3}
        initial={{ r: 1.1, opacity: 0.6 }}
        animate={{ r: [1.1, 5, 1.1], opacity: [0.6, 0, 0.6] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.2 + i * 0.4,
          ease: "easeOut",
        }}
      />
    ))}
  </svg>
);

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  const slide = slides[current];

  // Iris/wipe reveal instead of a horizontal slide-in.
  const wipeVariants = {
    enter: {
      clipPath: "circle(0% at 85% 15%)",
    },
    center: {
      clipPath: "circle(150% at 85% 15%)",
      transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
    >
      {/* Base layer always visible so the wipe reveals over a solid backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            slides[(current + slides.length - 1) % slides.length].gradient,
        }}
      />

      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          variants={wipeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{ background: slide.gradient }}
        >
          {/* Ambient network-map decoration, in place of the old rotating rings */}
          <div className="absolute inset-0 overflow-hidden">
            <NetworkGraphic accent={slide.accent} />
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: slide.accent }}
                  />
                  <span className="text-white/80 text-sm font-medium">
                    {slide.badge}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to={slide.ctaPath}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:shadow-xl hover:-translate-y-1"
                    style={{ background: slide.accent }}
                  >
                    {slide.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold border-2 border-white/30 hover:bg-white/10 transition-all"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
