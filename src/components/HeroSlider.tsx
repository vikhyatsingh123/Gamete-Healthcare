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

const slides: Slide[] = [
  {
    id: 1,
    badge: "Innovation in Healthcare",
    title: "Pioneering\nPharmaceutical\nExcellence",
    subtitle:
      "Developing life-changing medications that improve health outcomes for millions of patients across 10+ countries worldwide.",
    cta: "Explore Our Products",
    ctaPath: "/products",
    accent: "#0a8987",
    gradient: "linear-gradient(135deg, #0f2347 0%, #1253A1 45%, #2a5298 100%)",
  },
  {
    id: 2,
    badge: "Research & Development",
    title: "Science-Driven\nSolutions for\nBetter Health",
    subtitle:
      "Our state-of-the-art R&D facilities drive innovation in therapeutics, creating treatments that address the most critical healthcare challenges.",
    cta: "Our Product Range",
    ctaPath: "/products",
    accent: "#0a8987",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 45%, #1a5276 100%)",
  },
  {
    id: 3,
    badge: "Global Reach",
    title: "Delivering Health\nAcross Every\nContinent",
    subtitle:
      "With a robust distribution network spanning 10+ countries, we ensure our life-saving medicines reach patients wherever they are.",
    cta: "Partner With Us",
    ctaPath: "/contact",
    accent: "#0a8987",
    gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 45%, #1253A1 100%)",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
    >
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
          style={{ background: slide.gradient }}
        >
          {/* Decorative background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large circle top-right */}
            <motion.div
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
              style={{ border: "2px solid white" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            {/* Medium circle */}
            <motion.div
              className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full opacity-5"
              style={{ background: "white" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Molecule dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/20"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Abstract DNA shape right side */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pr-16">
              <motion.div
                className="relative w-72 h-72"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Hexagon grid */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-lg opacity-20"
                    style={{
                      width: 40 + (i % 3) * 10,
                      height: 40 + (i % 3) * 10,
                      background: i % 2 === 0 ? "white" : slide.accent,
                      left: `${(i % 4) * 25}%`,
                      top: `${Math.floor(i / 4) * 33}%`,
                      borderRadius: i % 3 === 0 ? "50%" : "8px",
                    }}
                    animate={{ opacity: [0.1, 0.25, 0.1] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
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

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
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
