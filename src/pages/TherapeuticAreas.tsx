import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Zap,
  Brain,
  Sparkles,
  Pill,
  Leaf,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const therapeuticAreas = [
  {
    icon: Heart,
    title: "Cardiology",
    products: 85,
    color: "#0a8987",
    description:
      "Our cardiovascular portfolio addresses hypertension, heart failure, arrhythmias, and lipid disorders. We offer branded and generic options including beta-blockers, ACE inhibitors, statins, and novel SGLT2 inhibitors.",
    highlights: [
      "Antihypertensives",
      "Anticoagulants",
      "Lipid-lowering agents",
      "Heart failure therapies",
      "Antiplatelet drugs",
    ],
    pipeline: 4,
  },
  {
    icon: Zap,
    title: "Oncology",
    products: 62,
    color: "#8b5cf6",
    description:
      "Our oncology division is committed to advancing cancer care through targeted therapies, immunotherapy, and precision medicine. We offer treatments for lung, breast, colorectal, haematological, and other cancers.",
    highlights: [
      "Tyrosine kinase inhibitors",
      "Monoclonal antibodies",
      "Chemotherapeutic agents",
      "Hormonal therapies",
      "Supportive care products",
    ],
    pipeline: 8,
  },
  {
    icon: Brain,
    title: "Neurology",
    products: 47,
    color: "#1253A1",
    description:
      "Addressing the growing burden of neurological disease with treatments for epilepsy, Parkinson's, Alzheimer's, multiple sclerosis, and neuropathic pain.",
    highlights: [
      "Anti-epileptics",
      "Dopaminergic agents",
      "Cholinesterase inhibitors",
      "Disease-modifying agents",
      "Neuropathic pain management",
    ],
    pipeline: 5,
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    products: 38,
    color: "#ec4899",
    description:
      "Comprehensive dermatological solutions for both chronic skin conditions and acute dermatoses. Our portfolio spans topical, oral, and biologic treatment options.",
    highlights: [
      "Corticosteroids",
      "Calcineurin inhibitors",
      "Biologics for psoriasis",
      "Acne treatments",
      "Antifungal therapies",
    ],
    pipeline: 3,
  },
  {
    icon: Pill,
    title: "Antibiotics & Anti-infectives",
    products: 55,
    color: "#2ecc71",
    description:
      "A broad anti-infective portfolio combating bacterial, fungal, and parasitic infections. We take antimicrobial stewardship seriously to help address the global challenge of drug resistance.",
    highlights: [
      "Penicillins & beta-lactams",
      "Fluoroquinolones",
      "Macrolides",
      "Antifungals",
      "Antiparasitic agents",
    ],
    pipeline: 6,
  },
  {
    icon: Leaf,
    title: "Nutraceuticals & Herbal Supplements",
    products: 90,
    color: "#f59e0b",
    description:
      "Evidence-based nutritional supplements and vitamins designed to bridge dietary gaps and support long-term health. All formulations use pharmaceutical-grade raw materials.",
    highlights: [
      "Fat-soluble vitamins (A, D, E, K)",
      "B-vitamin complex",
      "Omega-3 fatty acids",
      "Mineral supplements",
      "Probiotics & prebiotics",
    ],
    pipeline: 7,
  },
];

const TherapeuticAreas = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2347, #1253A1 50%, #2a5298)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Product Range</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Product Range
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Focused expertise across six critical therapeutic domains, backed
              by decades of research and clinical experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Our Focus Areas
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Where We Make a Difference
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Comprehensive therapeutic coverage ensuring patients receive the
                right treatment at the right time.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {therapeuticAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <FadeUp key={area.title} delay={i * 0.1}>
                  <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                    {/* Card header */}
                    <div className="p-7 pb-5">
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ background: `${area.color}15` }}
                        >
                          <Icon
                            className="w-7 h-7"
                            style={{ color: area.color }}
                          />
                        </div>
                        <div className="text-right">
                          <div
                            className="text-2xl font-extrabold"
                            style={{ color: area.color }}
                          >
                            {area.products}+
                          </div>
                          <div className="text-xs text-gray-400">Products</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#1253A1] mb-3">
                        {area.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="px-7 pb-5 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        Key Products
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {area.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: `${area.color}10`,
                              color: area.color,
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-7 py-4 bg-gray-50 flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-500">
                        <span className="font-semibold text-[#1253A1]">
                          {area.pipeline}
                        </span>{" "}
                        molecules in pipeline
                      </span>
                      <Link
                        to="/products"
                        className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                        style={{ color: area.color }}
                      >
                        View Products <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TherapeuticAreas;
