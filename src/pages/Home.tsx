import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Brain,
  Sparkles,
  Leaf,
  CheckCircle,
  Lightbulb,
  Globe,
  ArrowRight,
  ShieldPlus,
  ShieldCheck,
  Microscope,
  Activity,
  Soup,
  Bone,
  Eye,
  Pill,
  Droplets,
  Wind,
  MapPin,
  Award,
  Compass,
  Target,
} from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import StatsCounter from "../components/StatsCounter";
import TestimonialCard from "../components/TestimonialCard";

// Fade-up animation wrapper
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 14 therapeutic segments straight from the Gamete Healthcare portfolio page.
const productCategories = [
  {
    icon: ShieldCheck,
    title: "Antiallergics & Immune System",
    desc: "Formulations that manage allergic conditions and support healthy immune function.",
    color: "#0ea5e9",
  },
  {
    icon: ShieldPlus,
    title: "Antibiotics & Anti-Infectives",
    desc: "Broad-spectrum antibiotics and anti-infectives for bacterial and other infections.",
    color: "#2ecc71",
  },
  {
    icon: Microscope,
    title: "Anti-Cancer",
    desc: "Oncology formulations developed under strict quality and safety protocols.",
    color: "#8b5cf6",
  },
  {
    icon: Activity,
    title: "Anti-Diabetic",
    desc: "Tablets and capsules for effective blood glucose control and diabetes management.",
    color: "#1253A1",
  },
  {
    icon: Heart,
    title: "Cardiovascular & Hematopoietic System",
    desc: "Medicines for hypertension, heart health, cholesterol and blood-related conditions.",
    color: "#ef4444",
  },
  {
    icon: Brain,
    title: "Central Nervous System",
    desc: "Therapies for neurological and psychiatric conditions.",
    color: "#8b5cf6",
  },
  {
    icon: Sparkles,
    title: "Dermatologicals",
    desc: "Topical formulations for a wide range of skin conditions.",
    color: "#22c55e",
  },
  {
    icon: Eye,
    title: "Eye, Ear & Nasal Preparations",
    desc: "Sterile ophthalmic, otic and nasal preparations for localized treatment.",
    color: "#06b6d4",
  },
  {
    icon: Soup,
    title: "Gastrointestinal System",
    desc: "Medicines for digestive health, acidity, ulcers and related disorders.",
    color: "#f97316",
  },
  {
    icon: Droplets,
    title: "Genito-Urinary System",
    desc: "Treatments addressing genito-urinary health and related conditions.",
    color: "#14b8a6",
  },
  {
    icon: Bone,
    title: "Musculo-Skeletal System",
    desc: "Pain management and anti-inflammatory medicines for muscles, joints and bones.",
    color: "#f43f5e",
  },
  {
    icon: Wind,
    title: "Respiratory System",
    desc: "Treatments for respiratory infections, asthma and cough-related conditions.",
    color: "#0284c7",
  },
  {
    icon: Pill,
    title: "Vitamins & Minerals",
    desc: "Essential vitamin and mineral supplements for nutritional support.",
    color: "#eab308",
  },
  {
    icon: Leaf,
    title: "Nutraceuticals",
    desc: "Evidence-based nutritional and herbal supplements supporting overall wellness.",
    color: "#f59e0b",
  },
];

// Six reasons pulled directly from the brochure's "Why Choose Gamete Healthcare" page.
const whyUsItems = [
  {
    icon: Award,
    title: "Established Since 1998",
    desc: "Trusted pharmaceutical expertise built over nearly three decades.",
    color: "#1253A1",
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    desc: "Products manufactured at WHO-GMP, ISO & GMP-certified facilities.",
    color: "#0a8987",
  },
  {
    icon: Leaf,
    title: "Comprehensive Product Portfolio",
    desc: "A wide range of pharmaceutical and nutraceutical products.",
    color: "#2ecc71",
  },
  {
    icon: MapPin,
    title: "Strong Market Presence",
    desc: "A well-established distribution network across key Indian markets.",
    color: "#f59e0b",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Helik Healthcare, our dedicated export division, serves international markets.",
    color: "#0ea5e9",
  },
  {
    icon: Lightbulb,
    title: "Trusted Partnership",
    desc: "Committed to quality, integrity, innovation and customer satisfaction.",
    color: "#8b5cf6",
  },
];

const testimonials = [
  {
    name: "Mr. Sunil Kumar Singh",
    role: "Director",
    organization: "Shiva Sai Enterprises",
    quote:
      "Since 2020, Helik Healthcare has consistently delivered quality products with timely service, making them one of our most trusted pharmaceutical partners.",
    rating: 5,
    initial: "SK",
    country: "Nepal",
    color: "#1253A1",
  },
  {
    name: "Mr. Om Bahadur Khadka",
    role: "Director",
    organization: "Kamakhya Traders",
    quote:
      "Reliable product quality, prompt deliveries, and professional support have made Helik Healthcare a dependable business partner since 2023.",
    rating: 5,
    country: "Kathmandu",
    initial: "OB",
    color: "#0a8987",
  },
  {
    name: "Mr. Ahmed Al Mansoori",
    role: "Director",
    organization: "Al Noor Trading LLC",
    quote:
      "Helik Healthcare has consistently delivered high-quality pharmaceutical products with dependable service, making them a trusted business partner in the UAE.",
    rating: 5,
    country: "Dubai, UAE",
    initial: "AM",
    color: "#8b5cf6",
  },
  {
    name: "Mr. Spandan",
    role: "Director",
    organization: "Shiv Shakti Trading",
    quote:
      "Helik Healthcare's consistent quality and dependable supply chain have helped us serve our customers with confidence across Eastern Nepal.",
    rating: 5,
    country: "Itahari, Nepal",
    initial: "S",
    color: "#8b5cf6",
  },
  {
    name: "Mr. Krishna Adhikari",
    role: "Director",
    organization: "Blue Moon International",
    quote:
      "Efficient order management, secure packaging, and timely deliveries reflect Helik Healthcare's commitment to excellence.",
    rating: 5,
    initial: "KA",
    country: "Kathmandu, Nepal",
    color: "#8b5cf6",
  },
  {
    name: "Dr. Vijay",
    role: "Doctor",
    organization: "General Physician",
    quote:
      "Helik Healthcare delivers quality pharmaceutical products with reliable service, earning our trust as a dependable healthcare partner.",
    rating: 5,
    country: "Thimphu, Bhutan",
    initial: "V",
    color: "#8b5cf6",
  },
  {
    name: "Mr. Leki",
    role: "Owner",
    organization: "Kuenphen Supplies Bhutan",
    quote:
      "Consistent quality, timely deliveries, and professional support make Helik Healthcare a trusted pharmaceutical supplier in Bhutan.",
    rating: 5,
    country: "Thimphu, Bhutan",
    initial: "L",
    color: "#8b5cf6",
  },
];

// Global presence exactly as shown on the brochure's map page.
const globalPresence = [
  {
    country: "Nepal",
    flag: "🇳🇵",
    note: "Long-standing distributor network across Kathmandu and Eastern Nepal.",
  },
  {
    country: "Bhutan",
    flag: "🇧🇹",
    note: "Trusted supply partnerships serving Thimphu and beyond.",
  },
  {
    country: "Dubai, UAE",
    flag: "🇦🇪",
    note: "Regional office coordinating our growing Gulf presence.",
  },
];

// Hexagon molecule cluster — replaces the old spinning-ring visual with
// something drawn from the brochure's own hexagon/molecule artwork.
const hexPoints = "50 0, 100 25, 100 75, 50 100, 0 75, 0 25";
const moleculeNodes = [
  { x: 44, y: 8, size: 68, delay: 0 },
  { x: 6, y: 38, size: 56, delay: 0.15 },
  { x: 58, y: 42, size: 84, delay: 0.05 },
  { x: 18, y: 74, size: 60, delay: 0.25 },
  { x: 62, y: 78, size: 50, delay: 0.35 },
];

const MoleculeGraphic = () => (
  <div className="relative w-full h-full">
    {moleculeNodes.map((n, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${n.x}%`,
          top: `${n.y}%`,
          width: n.size,
          height: n.size,
        }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: n.delay, ease: "easeOut" }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            clipPath: `polygon(${hexPoints})`,
            background:
              i === 2 ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: n.delay,
          }}
        />
      </motion.div>
    ))}
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* Stats */}
      <StatsCounter />

      {/* About Snippet */}
      <section className="pt-20 pb-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <FadeUp>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-4">
                  About Gamete Healthcare
                </span>
                <h2 className="text-4xl font-bold text-[#1253A1] leading-tight mb-5">
                  Building Trust in Healthcare Since 1998
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 1998 and headquartered in Noida, Uttar Pradesh,
                  Gamete Healthcare Pvt. Ltd. is a trusted pharmaceutical
                  company committed to delivering high-quality healthcare
                  solutions across India.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Over the years we have built a strong distribution network
                  across East & Central Uttar Pradesh, Gujarat, Rajasthan and
                  West Madhya Pradesh. In 2020 we launched Helik Healthcare, a
                  dedicated export division that now carries the same standard
                  of care to healthcare partners in Nepal, Bhutan and the UAE —
                  with manufacturing capability serving 20+ countries.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 italic">
                  "Commitment to quality. Focused on life."
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "WHO Compliant",
                    "GMP Certified",
                    "ISO 9001:2015 Certified",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1.5 text-sm font-medium text-[#1253A1] bg-blue-50 px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#2ecc71]" />
                      {badge}
                    </span>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #1253A1, #2a5298)",
                  }}
                >
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeUp>
            </div>

            {/* Visual */}
            <FadeUp delay={0.2}>
              <div className="relative h-80 md:h-96">
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1253A1, #2a5298)",
                  }}
                >
                  <MoleculeGraphic />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm italic">
                      "To become a globally trusted healthcare company by
                      delivering quality, innovation, and excellence."
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#2ecc71]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Since</div>
                    <div className="font-bold text-[#1253A1]">1998</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#b5fbfa] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#0a8987]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">
                      Manufacturing Reach
                    </div>
                    <div className="font-bold text-[#1253A1]">
                      20+ Countries
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <FadeUp>
              <div className="h-full p-8 rounded-3xl bg-[#f8fafc] border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                  <Compass className="w-7 h-7 text-[#1253A1]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1253A1] mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a globally trusted healthcare company by delivering
                  quality, innovation, and excellence in pharmaceutical and
                  nutraceutical solutions.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="h-full p-8 rounded-3xl bg-[#f8fafc] border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-[#0a8987]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1253A1] mb-3">
                  Our Mission
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Deliver safe, effective, and high-quality healthcare products.",
                    "Uphold the highest standards of quality and ethics.",
                    "Build lasting partnerships through trust and customer satisfaction.",
                    "Drive continuous innovation to meet evolving healthcare needs.",
                    "Expand our global presence with excellence.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2ecc71] mt-1 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Our Portfolio
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Therapeutic Segments
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A diversified portfolio spanning fourteen therapeutic segments,
                manufactured at WHO-GMP certified facilities.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <FadeUp key={cat.title} delay={Math.min(i * 0.06, 0.4)}>
                  <Link to="/products">
                    <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full">
                      <div
                        className="w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                        style={{
                          background: `${cat.color}15`,
                          clipPath: `polygon(${hexPoints})`,
                        }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: cat.color }}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-[#1253A1] mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {cat.desc}
                      </p>
                      <div
                        className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
                        style={{ color: cat.color }}
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #1253A1, #2a5298)",
                }}
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Product Range — two counter-scrolling rows instead of one marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Segment Expertise
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1]">
                Areas We Serve
              </h2>
            </div>
          </FadeUp>

          {[0, 1].map((row) => {
            const half = Math.ceil(productCategories.length / 2);
            const items =
              row === 0
                ? productCategories.slice(0, half)
                : productCategories.slice(half);
            return (
              <div key={row} className="overflow-hidden w-full h-40 mb-2">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: row === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 22,
                    ease: "linear",
                  }}
                >
                  {[...items, ...items].map((area, i) => {
                    const Icon = area.icon;
                    return (
                      <div key={`${area.title}-${i}`} className="shrink-0">
                        <Link to="/products">
                          <div className="w-44 h-36 bg-[#f8fafc] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-100">
                            <div
                              className="w-12 h-12 flex items-center justify-center"
                              style={{
                                background: `${area.color}15`,
                                clipPath: `polygon(${hexPoints})`,
                              }}
                            >
                              <Icon
                                className="w-6 h-6"
                                style={{ color: area.color }}
                              />
                            </div>
                            <div className="text-xs h-[52px] flex items-center justify-center font-semibold text-[#1253A1] text-center">
                              {area.title}
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Helik Healthcare — Export Division
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Global Presence
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Established in 2020, Helik Healthcare carries our products to
                partners across Nepal, Bhutan and the UAE, with manufacturing
                capability serving 20+ countries and growing.
              </p>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-6">
            {globalPresence.map((g, i) => (
              <FadeUp key={g.country} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center h-full">
                  <div className="text-4xl mb-4">{g.flag}</div>
                  <h3 className="text-lg font-bold text-[#1253A1] mb-2">
                    {g.country}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {g.note}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Why Gamete Healthcare
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                The Gamete Difference
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Six reasons partners across India and abroad choose to work with
                us.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.title} delay={i * 0.1}>
                  <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group h-full">
                    <div
                      className="w-16 h-16 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{
                        background: `${item.color}15`,
                        clipPath: `polygon(${hexPoints})`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1253A1] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Testimonials
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Trusted by Healthcare Leaders
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                What doctors, distributors and healthcare professionals say
                about Helik Healthcare.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} isVisible={true} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2347, #1253A1 50%, #2a5298)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <MoleculeGraphic />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 bg-white/10 px-4 py-1.5 rounded-full mb-4">
              Partnership Opportunities
            </span>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
              Ready to Partner with a Trusted
              <br />
              Pharmaceutical Name?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a distributor, healthcare provider or investor —
              Gamete Healthcare and its export division, Helik Healthcare, offer
              partnership models tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ background: "#0a8987" }}
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Home;
