import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X, ChevronRight } from "lucide-react";
import { tabsConfig } from "../data/productsTabsConfig";
import productsOtherData from "../data/productsOtherData.ts";
import NutraAndHerbalData from "../data/NutraAndHerbalData.ts";
// import ProductsOtherTable from "../components/ProductsOtherTable";
// import NutraAndHerbalTable from "../components/NutraAndHerbalTable.tsx";

const Products = () => {
  const [activeTabId, setActiveTabId] = useState(tabsConfig[0].id);
  const activeTab = tabsConfig.find((t) => t.id === activeTabId)!;

  const [activeSubTabId, setActiveSubTabId] = useState(
    activeTab.subTabs ? activeTab.subTabs[0].id : ""
  );
  const [search, setSearch] = useState("");

  const handleTabClick = (tabId: string) => {
    const tab = tabsConfig.find((t) => t.id === tabId)!;
    setActiveTabId(tabId);
    setSearch("");
    setActiveSubTabId(tab.subTabs ? tab.subTabs[0].id : "");
  };

  const handleSubTabClick = (subTabId: string) => {
    setActiveSubTabId(subTabId);
    setSearch("");
  };

  const activeFilter = useMemo(() => {
    if (activeTab.subTabs) {
      const sub = activeTab.subTabs.find((s) => s.id === activeSubTabId)!;
      return { tabName: sub.tabName, subcategory: sub.subcategory };
    }
    return { tabName: activeTab.tabName!, subcategory: null };
  }, [activeTab, activeSubTabId]);

  const baseData = useMemo(() => {
    let data: Record<string, any>;
    if (activeTabId === "Nutraceuticals & Herbal Supplements") {
      data = NutraAndHerbalData;
    } else {
      data = productsOtherData;
    }
    return data[activeSubTabId ? activeSubTabId : activeTabId].filter(
      (p: any) => {
        const matchesCategory = p.tabName === activeFilter.tabName;
        const matchesSub = activeFilter.subcategory
          ? p.subcategory === activeFilter.subcategory
          : true;
        return matchesCategory && matchesSub;
      }
    );
  }, [activeFilter]);

  const filteredData = useMemo(() => {
    if (!search.trim()) return baseData;
    const q = search.toLowerCase();
    if (activeTabId === "Nutraceuticals & Herbal Supplements") {
      return baseData.filter(
        (p: any) =>
          p.category.toLowerCase().includes(q) ||
          p.productComposition.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q)
      );
    }

    return baseData.filter(
      (p: any) =>
        p.productName.toLowerCase().includes(q) ||
        p.formulation.toLowerCase().includes(q) ||
        p.dosageForm.toLowerCase().includes(q)
    );
  }, [baseData, search]);

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
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
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Products</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Products for Export
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Explore our comprehensive pharmaceutical portfolio spanning
              critical product range.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main tabs */}
      <section className="bg-white border-b border-gray-100 top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap py-3 gap-1">
            {tabsConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "text-white shadow-md"
                      : "text-gray-600 bg-gray-50 hover:bg-gray-100"
                  }`}
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(135deg, ${tab.color}, ${tab.color}cc)`,
                        }
                      : {}
                  }
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#f8fafc] min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sub tabs */}
          {activeTab.subTabs && (
            <div className="flex gap-2 mb-6">
              {activeTab.subTabs.map((sub) => {
                const isActive = activeSubTabId === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => handleSubTabClick(sub.id)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      isActive
                        ? "border-transparent text-white"
                        : "border-gray-200 text-gray-600 bg-white hover:bg-gray-50"
                    }`}
                    style={isActive ? { background: activeTab.color } : {}}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Per-tab filter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Filter by name, dosage form, or indication..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full pl-10 pr-9 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1253A1]/40"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(26, 58, 107), rgb(42, 82, 152))",
                }}
              >
                <a href="/Helik_demo.pdf" download>
                  Download Nutra
                </a>
              </button>
              <button
                className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(26, 58, 107), rgb(42, 82, 152))",
                }}
              >
                <a href="/Product List Export Drug.pdf" download>
                  Download Drug
                </a>
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Showing{" "}
              <span className="font-semibold text-[#1253A1]">
                {filteredData.length}
              </span>{" "}
              products
            </p>
          </div>

          {activeTabId === "Nutraceuticals & Herbal Supplements" ? (
            <NutraAndHerbalTable
              data={filteredData}
              accentColor={activeTab.color}
            />
          ) : (
            <ProductsOtherTable
              data={filteredData}
              accentColor={activeTab.color}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
