import { InnerPageHero } from "../components/InnerPageHero";
import { Reveal } from "../components/Reveal";
import type { Product } from "../App";
import { dosageForms } from "../siteData";
import { newLaunched } from "../data/NewLaunched";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProductModal from "../components/ProductModal";

export const FadeUp = ({
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

export function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <InnerPageHero
        eyebrow="Products"
        title={[
          "Quality Healthcare Products",
          "Built on Experience, Driven by Efficacy",
        ]}
        backgroundImage="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Pharmaceutical bottles and product packaging"
        spotlight={{
          value:
            "15+ therapeutic categories across diverse healthcare segments",
          text: "From antibiotics and cardiac care to nutrition and wellness, explore our broad range of therapeutic categories.",
        }}
        cards={[
          {
            title: "100+ Quality Products",
            text: "A diverse portfolio of healthcare products focused on quality, efficacy, and evolving healthcare needs.",
          },
          {
            title: "25 Years of Experience",
            text: "Built on 25 years of industry experience, with a continued commitment to quality and effective healthcare solutions.",
          },
          {
            title: "20+ Stockists | 500+ Retail Outlets",
            text: "A growing distribution network that expands product availability and strengthens our reach across the market.",
          },
        ]}
      />

      <section className="products-section">
        <div className="section-heading">
          <span className="eyebrow">Our Products</span>
          <h2>Diversified Portfolio</h2>
        </div>

        <div className="products-grid">
          {newLaunched.map((cat, i) => (
            <FadeUp key={cat.name} delay={i * 0.08}>
              <div className="bg-white border border-[#e1edf7] p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                <div className="flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="block h-full w-full object-contain"
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

      <section className="dosage-section">
        <div className="section-heading section-heading-wide">
          <div>
            <span className="eyebrow">Dosage forms</span>
            <h2>
              Discover our range of dosage forms and product presentations.
            </h2>
          </div>
        </div>
        <div className="dosage-grid">
          {dosageForms.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className="dosage-card"
              direction="up"
            >
              <div className="card-media-header card-media-header-dosage">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="flex items-center gap-2">
                <span className="category-index">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <ProductModal
          onClose={handleClose}
          open={open}
          product={selectedProduct}
        />
      </section>
    </>
  );
}
