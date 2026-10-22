import { InnerPageHero } from "../components/InnerPageHero";
import { Reveal } from "../components/Reveal";
import type { Product } from "../App";
import {
  dosageForms,
  productCategories,
  productPrograms,
  products,
} from "../siteData";

type ProductsPageProps = {
  onOpenProduct: (product: Product) => void;
};

export function ProductsPage({ onOpenProduct }: ProductsPageProps) {
  return (
    <>
      <InnerPageHero
        eyebrow="Products"
        title={[
          "A structured catalogue that can scale with your real portfolio.",
        ]}
        backgroundImage="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Pharmaceutical bottles and product packaging"
        spotlight={{
          value: "8 categories and multiple dosage pathways",
          text: "A cleaner catalogue introduction for retail, institutional, and export-facing conversations.",
        }}
        cards={[
          {
            title: "Therapeutic range overview",
            text: "Visitors understand breadth faster through structured category framing.",
          },
          {
            title: "Modal-driven product context",
            text: "Each product opens into a deeper layer without leaving the catalogue flow.",
          },
          {
            title: "Dosage and pack storytelling",
            text: "Supports a more complete pharma portfolio presentation from the first screen.",
          },
        ]}
      />

      <section className="categories-section">
        <div className="section-heading">
          <span className="eyebrow">Therapeutic categories</span>
          <h2>Portfolio breadth that feels enterprise-ready</h2>
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

      <section className="products-section">
        <div className="products-grid">
          {products.map((product, index) => (
            <Reveal
              key={product.name}
              delay={index * 0.05}
              className={`product-card product-card-${product.accent}`}
            >
              <div className="product-card-media">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-chip-row">
                <span className="product-chip">{product.category}</span>
                <span className="product-form">{product.form}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <button
                type="button"
                className="text-link"
                onClick={() => onOpenProduct(product)}
              >
                View details
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="color-band-section color-band-teal">
        <div className="section-heading section-heading-centered section-heading-light">
          <span className="eyebrow eyebrow-light">Product programs</span>
          <h2>More structure for how the catalogue should be understood</h2>
        </div>
        <div className="band-grid band-grid-three">
          {productPrograms.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="band-card"
              direction="up"
            >
              <span className="band-card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dosage-section">
        <div className="section-heading section-heading-wide">
          <div>
            <span className="eyebrow">Dosage forms</span>
            <h2>
              Presentation depth that feels closer to a real pharma catalogue
            </h2>
          </div>
          <p>
            A wider product website usually communicates not just brands, but
            also formats, packs, and portfolio capabilities.
          </p>
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
              <span className="category-index">
                {`${index + 1}`.padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
