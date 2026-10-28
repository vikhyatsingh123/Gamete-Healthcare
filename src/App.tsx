import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { AboutPage } from "./pages/AboutPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";

import "./site.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import TermsOfUse from "./pages/TermsOfUse";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: any;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isLoading) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loader-screen"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.55, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="loader-mark"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.92, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="loader-signature-shell"
                animate={{ y: [0, -5, 0], scale: [1, 1.01, 1] }}
                transition={{
                  duration: 2.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="loader-signature"
                  viewBox="0 0 840 220"
                  role="presentation"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="loaderSignatureGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0f58b3" />
                      <stop offset="58%" stopColor="#0d72ca" />
                      <stop offset="100%" stopColor="#17b5b8" />
                    </linearGradient>
                  </defs>

                  <text className="loader-signature-stroke" x="56" y="166">
                    Gamete
                  </text>
                  <text
                    className="loader-signature-fill"
                    x="56"
                    y="166"
                    fill="url(#loaderSignatureGradient)"
                  >
                    Gamete
                  </text>

                  <g className="loader-signature-accent">
                    <circle
                      className="loader-signature-orbit"
                      cx="666"
                      cy="109"
                      r="36"
                    />
                    <circle
                      className="loader-signature-orbit-secondary"
                      cx="666"
                      cy="109"
                      r="25"
                    />
                    <polygon
                      className="loader-signature-star"
                      points="705,60 710,75 726,75 713,84 718,99 705,89 692,99 697,84 684,75 700,75"
                    />
                  </g>
                </svg>

                <span className="loader-signature-sub">Healthcare Pvt Ltd</span>
              </motion.div>
            </motion.div>

            <div className="loader-progress" aria-hidden="true">
              <motion.span
                className="loader-progress-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.55,
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Number.POSITIVE_INFINITY,
                }}
              ></motion.span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading ? (
        <SiteLayout>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{
                opacity: 0,
                y: 36,
                scale: 0.985,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -28, scale: 0.992, filter: "blur(8px)" }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </SiteLayout>
      ) : null}
    </>
  );
}

export default App;
