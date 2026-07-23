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
  TestTube2,
  Package,
  Hand,
  Syringe,
  Eye,
  Baby,
  FlaskConical,
  Bone,
  ShieldPlus,
  Activity,
  Soup,
  ZapIcon,
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

const productCategories = [
  {
    icon: Leaf,
    title: "Nutraceuticals & Herbal Supplements",
    desc: "Evidence-based nutritional and herbal supplements supporting overall health and wellness.",
    count: 90,
    color: "#f59e0b",
  },
  {
    icon: Heart,
    title: "Cardiovascular System",
    desc: "Medicines for hypertension, heart failure, cholesterol management, and other cardiovascular conditions.",
    count: 85,
    color: "#0a8987",
  },
  {
    icon: Brain,
    title: "Central Nervous System",
    desc: "Therapies for neurological and psychiatric disorders including epilepsy, anxiety, and depression.",
    count: 62,
    color: "#8b5cf6",
  },
  {
    icon: Activity,
    title: "Anti-diabetic",
    desc: "Tablets and capsules for effective blood glucose control and diabetes management.",
    count: 47,
    color: "#1253A1",
  },
  {
    icon: ShieldPlus,
    title: "Antibiotic & Anti-Infective",
    desc: "Broad-spectrum antibiotics and anti-infective medicines for bacterial and other infections.",
    count: 55,
    color: "#2ecc71",
  },
  {
    icon: Soup,
    title: "Alimentary System",
    desc: "Medicines for digestive health, acidity, ulcers, constipation, and gastrointestinal disorders.",
    count: 40,
    color: "#f97316",
  },
  {
    icon: Bone,
    title: "Analgesics & Musculo Skeletal Disorders",
    desc: "Pain management and anti-inflammatory medicines for muscles, joints, and bones.",
    count: 50,
    color: "#ef4444",
  },
  {
    icon: ZapIcon,
    title: "RI Tract & Anti-Allergic",
    desc: "Treatments for respiratory infections, allergies, asthma, and cough-related conditions.",
    count: 36,
    color: "#0ea5e9",
  },
  {
    icon: Sparkles,
    title: "Vitamins & Minerals",
    desc: "Essential vitamin and mineral supplements for nutritional support and deficiency management.",
    count: 44,
    color: "#eab308",
  },
  {
    icon: FlaskConical,
    title: "Other Formulations",
    desc: "A range of specialized pharmaceutical formulations for diverse therapeutic needs.",
    count: 28,
    color: "#64748b",
  },
  {
    icon: Baby,
    title: "Oral Dry Suspensions & Oral Liquids",
    desc: "Liquid formulations and suspensions designed for pediatric and adult patients.",
    count: 31,
    color: "#14b8a6",
  },
  {
    icon: Syringe,
    title: "General Injections",
    desc: "Injectable medicines for hospital, emergency, and clinical care applications.",
    count: 24,
    color: "#7c3aed",
  },
  {
    icon: Eye,
    title: "Eye, Ear & Nasal Drops",
    desc: "Sterile ophthalmic, otic, and nasal preparations for localized treatment.",
    count: 20,
    color: "#06b6d4",
  },
  {
    icon: Hand,
    title: "External Preparations",
    desc: "Topical solutions for skin care, wound management, and localized pain relief.",
    count: 29,
    color: "#84cc16",
  },
  {
    icon: Package,
    title: "Oral Powders (Sachet)",
    desc: "Convenient sachet formulations for nutritional support and therapeutic treatment.",
    count: 18,
    color: "#f43f5e",
  },
  {
    icon: TestTube2,
    title: "Products Under Development",
    desc: "Innovative pharmaceutical formulations currently under research and development.",
    count: 15,
    color: "#6366f1",
  },
  {
    icon: Sparkles,
    title: "Ointments, Creams, Gels, Lotions & Shampoo",
    desc: "Topical dermatological and personal care formulations for various skin and scalp conditions.",
    count: 35,
    color: "#22c55e",
  },
];

const whyUsItems = [
  {
    icon: CheckCircle,
    title: "Wide Product Range & Accessibility",
    desc: "We offer a wide range of medicines and healthcare products to meet your medical needs. From prescription medications to over-the-counter remedies, we provide quality products from trusted brands, ensuring reliable care and convenience for every customer.",
    color: "#1253A1",
  },
  {
    icon: Lightbulb,
    title: "Quality & Compliance",
    desc: "We adhere to stringent quality systems, regulatory requirements, and international manufacturing standards to ensure safe, effective, and reliable healthcare products for global markets. Quality is embedded at every stage—from sourcing to final delivery.",
    color: "#0a8987",
  },
  {
    icon: Globe,
    title: "Global Partnerships & Reliability",
    desc: "We build long-term relationships through transparent communication, timely delivery, scalable manufacturing, and customized solutions that help partners grow confidently in international markets.",
    color: "#2ecc71",
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
    name: "Mr. Suprem Kumar Shrestha",
    role: "Director",
    organization: "Jakarta Traders & Suppliers Pvt. Ltd.",
    quote:
      "Helik Healthcare has consistently delivered high-quality pharmaceutical products with dependable service, making them a trusted and reliable business partner.",
    rating: 5,
    country: "Jakarta, Indonesia",
    initial: "SK",
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

const therapeuticAreaCards = [
  {
    icon: Leaf,
    title: "Nutraceuticals & Herbal Supplements",
    color: "#f59e0b",
  },
  {
    icon: Heart,
    title: "Cardiovascular System",
    color: "#ef4444",
  },
  {
    icon: Brain,
    title: "Central Nervous System",
    color: "#8b5cf6",
  },
  {
    icon: Activity,
    title: "Anti-diabetic",
    color: "#1253A1",
  },
  {
    icon: ShieldPlus,
    title: "Antibiotic & Anti-Infective",
    color: "#22c55e",
  },
  {
    icon: Soup,
    title: "Alimentary System",
    color: "#f97316",
  },
  {
    icon: Bone,
    title: "Analgesics & Musculo Skeletal Disorders",
    color: "#0ea5e9",
  },
  {
    icon: Heart,
    title: "RI Tract & Anti-Allergic",
    color: "#06b6d4",
  },
  {
    icon: Sparkles,
    title: "Vitamins & Minerals",
    color: "#eab308",
  },
  {
    icon: FlaskConical,
    title: "Other Formulations",
    color: "#64748b",
  },
  {
    icon: Baby,
    title: "Oral Dry Suspensions & Oral Liquids",
    color: "#14b8a6",
  },
  {
    icon: Syringe,
    title: "General Injections",
    color: "#dc2626",
  },
  {
    icon: Eye,
    title: "Eye, Ear & Nasal Drops",
    color: "#0284c7",
  },
  {
    icon: Hand,
    title: "External Preparations",
    color: "#84cc16",
  },
  {
    icon: Package,
    title: "Oral Powders (Sachet)",
    color: "#f43f5e",
  },
  {
    icon: TestTube2,
    title: "Products Under Development",
    color: "#6366f1",
  },
  {
    icon: Sparkles,
    title: "Ointments, Creams, Gels, Lotions & Shampoo",
    color: "#10b981",
  },
];

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
                  About Helik Healthcare
                </span>
                <h2 className="text-4xl font-bold text-[#1253A1] leading-tight mb-5">
                  A Legacy of Trust, A Future of Innovation
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Established in 2020, Helik Healthcare Pvt. Ltd. has solidified
                  its standing as an authoritative, high-integrity contract
                  manufacturing and marketing partner operating within India.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  While acting with the rapid flexibility of a modern
                  enterprise, Helik's operational foundation is built on more
                  than three decades of industrial experience through its core
                  northern associate corporation, Gamete Healthcare Pvt. Ltd.,
                  based in Delhi (North India).
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  As a fully integrated entity, Helik Healthcare masterfully
                  manages international market architecture, structural brand
                  registration, and large-scale logistical supply networks. We
                  focus entirely on driving maximum therapeutic efficacy and
                  distribution security for advanced nutraceutical product
                  suites and premium-grade herbal supplement systems across
                  demanding global territories.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["WHO Certified", "GMP Certified", "ISO 9001:2015"].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="flex items-center gap-1.5 text-sm font-medium text-[#1253A1] bg-blue-50 px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#2ecc71]" />
                        {badge}
                      </span>
                    )
                  )}
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
                {/* Main card */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1253A1, #2a5298)",
                  }}
                >
                  {/* Abstract medical visual */}
                  <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border border-white/10"
                        style={{
                          width: 150 + i * 100,
                          height: 150 + i * 100,
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{
                          duration: 15 + i * 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ))}
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Heart
                          className="w-10 h-10 text-white"
                          fill="white"
                          fillOpacity={0.3}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm italic">
                      "Our mission is to provide innovative, affordable
                      healthcare solutions that improve lives across the world."
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
                    <div className="text-xs text-gray-500">Quality Score</div>
                    <div className="font-bold text-[#1253A1]">99.8%</div>
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
                    <div className="text-xs text-gray-500">Global Reach</div>
                    <div className="font-bold text-[#1253A1]">
                      10+ Countries
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Our Portfolio
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Our Product Range
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A diversified portfolio spanning critical product range, backed
                by decades of research and clinical excellence.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <FadeUp key={cat.title} delay={i * 0.1}>
                  <Link to="/products">
                    <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                        style={{ background: `${cat.color}15` }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: cat.color }}
                        />
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-[#1253A1]">
                          {cat.title}
                        </h3>
                        <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full shrink-0">
                          {cat.count} Products
                        </span>
                      </div>
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

      {/* Product Range Horizontal Scroll */}
      <section className="py-16 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Product Range Expertise
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1]">
                Areas We Serve
              </h2>
            </div>
          </FadeUp>

          <div className="overflow-hidden w-full h-46">
            <motion.div
              className="flex gap-4 mt-2"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...therapeuticAreaCards, ...therapeuticAreaCards].map(
                (area, i) => {
                  const Icon = area.icon;

                  return (
                    <div key={`${area.title}-${i}`} className="shrink-0">
                      <Link to="/products">
                        <div className="w-44 h-40 bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-100">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ background: `${area.color}15` }}
                          >
                            <Icon
                              className="w-7 h-7"
                              style={{ color: area.color }}
                            />
                          </div>

                          <div className="text-sm h-[82px] flex items-center justify-center font-semibold text-[#1253A1] text-center">
                            {area.title}
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Why Helik
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                The Helik Difference
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Three core pillars that have made Helik Healthcare a trusted
                name in global pharmaceuticals.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.title} delay={i * 0.15}>
                  <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ background: `${item.color}15` }}
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
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/5"
              style={{
                width: 200 + i * 200,
                height: 200 + i * 200,
                left: `${20 + i * 15}%`,
                top: "50%",
                transform: "translateY(-50%)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 bg-white/10 px-4 py-1.5 rounded-full mb-4">
              Partnership Opportunities
            </span>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
              Ready to Partner with a Global
              <br />
              Pharmaceutical Leader?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a distributor, healthcare provider or investor —
              Helik Healthcare offers strategic partnership models tailored to
              your needs.
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
