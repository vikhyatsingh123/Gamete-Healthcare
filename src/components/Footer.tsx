import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: TwitterIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: YoutubeIcon,
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

const productLinks = [
  "Tablets",
  "Capsules",
  "Syrups",
  "Injectables",
  "Healthcare Products",
  "Our Complete Portfolio",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#f2f9fc]">
      {/* MAIN FOOTER */}
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* CTA BANNER */}

        {/* FOOTER CONTENT */}
        <div
          className="
          grid grid-cols-2
          lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.25fr]
          gap-10 lg:gap-12
          py-14 sm:py-16
          border-b border-t border-[#d8e8ef]
        "
        >
          {/* BRAND COLUMN */}
          <div>
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-2/3 h-10 rounded-xl flex items-center justify-center">
                <img src="/gamete_logo.png" alt="logo" />
              </div>
            </Link>

            <p
              className="
              mt-6!
              text-[13px]
              leading-[1.8]
              text-[#000]
              max-w-[300px]
            "
            >
              Advancing health through reliable pharmaceutical brands, trusted
              manufacturing partnerships, better access, and a commitment to
              healthier tomorrows.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6">
              <p
                className="
                text-[11px]
                uppercase
                tracking-[1.5px]
                font-bold
                text-[#233d57]
                mb-3
              "
              >
                Follow Us
              </p>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.94 }}
                      className="
                        w-10 h-10
                        rounded-full
                        bg-white
                        border border-[#deedf2]
                        text-[#168e9d]
                        flex items-center justify-center
                        shadow-sm
                        hover:bg-[#119baa]
                        hover:text-white
                        hover:border-[#119baa]
                        transition-all duration-300
                      "
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="footer-title">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {quickLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className="
                    group
                    flex items-center gap-2
                    text-[13px]
                    text-[#119baa]
                    hover:text-[#119baa]
                    transition-colors duration-300
                  "
                >
                  <span
                    className="
                    w-1 h-1 rounded-full
                    bg-[#000]
                    group-hover:w-2
                    transition-all duration-300
                  "
                  />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* PRODUCT LINKS */}
          <div>
            <h3 className="footer-title">Our Portfolio</h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {productLinks.map((item) => (
                <Link
                  key={item}
                  to="/products"
                  className="
                    group
                    flex items-center gap-2
                    text-[13px]
                    text-[#119baa]
                    hover:text-[#119baa]
                    transition-colors duration-300
                  "
                >
                  <span
                    className="
                    w-1 h-1 rounded-full
                    bg-[#000]
                    group-hover:w-2
                    transition-all duration-300
                  "
                  />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <h3 className="footer-title">Get In Touch</h3>

            <p className="text-[13px] text-[#000] mt-6 mb-5 leading-relaxed">
              Have a question or looking for a pharmaceutical business
              partnership? We'd love to hear from you.
            </p>

            {/* ADDRESS */}
            <div className="flex items-start gap-3 my-5">
              <div
                className="
                w-9 h-9
                shrink-0
                rounded-lg
                bg-white
                text-[#1399a7]
                flex items-center justify-center
                border border-[#deedf2]
              "
              >
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-[12px] font-bold text-[#233d57] mb-1">
                  Our Address
                </p>
                <p className="text-[12px] leading-[1.7] text-[#000]">
                  87/3, Behind Heritage Housing, Bhagwanpur, Lanka
                </p>
              </div>
            </div>

            {/* PHONE */}
            <a
              href="tel:+918840703781"
              className="flex items-center gap-3 mb-5 group"
            >
              <div
                className="
                w-9 h-9 shrink-0
                rounded-lg bg-white
                text-[#1399a7]
                flex items-center justify-center
                border border-[#deedf2]
                group-hover:bg-[#119baa]
                group-hover:text-white
                transition-all
              "
              >
                <Phone size={16} />
              </div>

              <div>
                <p className="text-[12px] font-bold text-[#233d57] mb-1">
                  Call Us
                </p>
                <p className="text-[12px] text-[#119baa] group-hover:text-[#119baa]">
                  +91 8840703781
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@gametehealthcare.com"
              className="flex items-center gap-3 group"
            >
              <div
                className="
                w-9 h-9 shrink-0
                rounded-lg bg-white
                text-[#1399a7]
                flex items-center justify-center
                border border-[#deedf2]
                group-hover:bg-[#119baa]
                group-hover:text-white
                transition-all
              "
              >
                <Mail size={16} />
              </div>

              <div className="min-w-0">
                <p className="text-[12px] font-bold text-[#233d57] mb-1">
                  Email Us
                </p>
                <p className="text-[12px] text-[#119baa] break-all group-hover:text-[#119baa]">
                  info@gametehealthcare.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div
          className="
          py-6
          flex flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        "
        >
          <p
            className="
            text-[11px] sm:text-[12px]
            text-[#758495]
            text-center md:text-left
          "
          >
            © {new Date().getFullYear()} Gamete Healthcare Pvt Ltd. All rights
            reserved.
          </p>

          <div
            className="
            flex flex-wrap
            justify-center
            items-center
            gap-x-5 gap-y-3
          "
          >
            <Link
              to="/privacy-policy"
              className="text-[11px] text-[#119baa] hover:text-[#119baa] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-use"
              className="text-[11px] text-[#119baa] hover:text-[#119baa] transition-colors"
            >
              Terms of Use
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-[11px] text-[#119baa] hover:text-[#119baa] transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* BACK TO TOP */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
            className="
              hidden lg:flex
              w-10 h-10
              rounded-full
              bg-white
              border border-[#80c1d7]
              items-center justify-center
              text-[#119baa]
              hover:bg-[#119baa]
              hover:text-white
              transition-all duration-300
            "
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
