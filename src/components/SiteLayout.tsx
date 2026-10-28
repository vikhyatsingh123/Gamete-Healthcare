import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  footerGroups,
  navigation,
  productCategories,
  socialLinks,
} from "../siteData";

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
          <span className="brand-icon" aria-hidden="true">
            <motion.span className="brand-cross"></motion.span>
            <motion.span
              className="brand-orbit"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 16,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            ></motion.span>
          </span>
          <span className="brand-text">
            <strong>Gamete</strong>
            <small>Healthcare Pvt Ltd</small>
          </span>
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

      <footer className="footer-shell">
        <section className="site-footer">
          <div className="footer-brand-block">
            <div className="brand footer-brand">
              <span className="brand-icon" aria-hidden="true">
                <span className="brand-cross"></span>
                <span className="brand-orbit"></span>
              </span>
              <span className="brand-text">
                <strong>Gamete</strong>
                <small>Healthcare Pvt Ltd</small>
              </span>
            </div>
            <p>
              Advancing health through reliable formulations, better access, and
              a disciplined healthcare brand experience.
            </p>
            <div className="footer-socials">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  whileHover={{ y: -4, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {item.short}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links-grid">
            <div>
              <span className="footer-heading">Quick links</span>
              <div className="footer-links">
                {footerGroups.quickLinks.map((item) => (
                  <NavLink key={item.label} to={item.to}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <span className="footer-heading">Product range</span>
              <div className="footer-links">
                {productCategories.slice(0, 6).map((item) => (
                  <NavLink key={item.title} to="/products">
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <span className="footer-heading">Contact us</span>
              <div className="footer-contact">
                <p>87/3, Behind Heritage Housing, Bhagwanpur, Lanka</p>
                <a href="tel:+918840703781">+91 8840703781</a>
                <a href="mailto:info@gametehealthcare.com">
                  info@gametehealthcare.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <p>© 2026 Gamete Healthcare Pvt Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </div>
        </section>
      </footer>
    </div>
  );
}
