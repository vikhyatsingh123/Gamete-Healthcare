import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navigation } from "../siteData";
import Footer from "./Footer";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="site-shell">
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <NavLink className="brand" to="/" aria-label="Gamete Healthcare home">
          <img src="/gamete_final.png" alt="logo" width={120} height={10} />
        </NavLink>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <NavLink className="button button-primary header-cta" to="/contact">
            Get in touch
          </NavLink>
        </motion.div>

        <button
          type="button"
          className={`mobile-menu-toggle${isMobileMenuOpen ? " active" : ""}`}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen ? (
            <motion.div
              id="mobile-navigation"
              className="mobile-nav-panel"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="mobile-nav-links" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "mobile-nav-link active" : "mobile-nav-link"
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </nav>

              <NavLink
                className="button button-primary mobile-nav-cta"
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in touch
              </NavLink>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.header>

      <main>{children}</main>
      <Footer />
    </div>
  );
}
