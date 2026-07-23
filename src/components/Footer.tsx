import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Simple SVG social icons (lucide-react v1 dropped brand icons)
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

const policy = [
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms of Use", link: "/terms-of-use" },
  { title: "Terms & Conditions", link: "/terms-and-conditions" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Products", path: "/products" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];

  const therapeuticAreas = [
    {
      label: "Nutraceuticals & Herbal Supplements",
      path: "/products",
    },
    { label: "Cardiology", path: "/products" },
    { label: "Oncology", path: "/products" },
    { label: "Neurology", path: "/products" },
    { label: "Dermatology", path: "/products" },
    { label: "Antibiotics", path: "/products" },
  ];

  const socialLinks = [
    { Icon: TwitterIcon, label: "Twitter", href: "#" },
    { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
    { Icon: FacebookIcon, label: "Facebook", href: "#" },
    { Icon: YoutubeIcon, label: "YouTube", href: "#" },
  ];

  return (
    <footer style={{ background: "#0f2347" }} className="text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-40 h-10 rounded-xl flex items-center justify-center">
                <img src="./helik_logo.png" alt="logo" />
              </div>
              {/* <div>
                <span className="text-xl font-bold text-white">Helik</span>
                <span className="text-xl font-light text-white/70">
                  {" "}
                  Healthcare
                </span>
              </div> */}
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Advancing health through innovative pharmaceutical solutions.
              Committed to quality, safety, and accessibility for patients
              worldwide.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0a8987] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#0a8987] transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Range */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Product Range
            </h3>
            <ul className="space-y-2.5">
              {therapeuticAreas.map((area) => (
                <li key={area.label}>
                  <Link
                    to={area.path}
                    className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#0a8987] transition-transform group-hover:translate-x-1" />
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#0a8987] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  C-502, Hotech Commercial, C-Block, Defence Enclave, Noida
                  Sector-44, Uttar Pradesh 201301, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#0a8987] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">+91 9415812557</span>
                <span className="text-white/70 text-sm">+91 9793142303</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#0a8987] mt-0.5 shrink-0" />
                <a
                  href="mailto:gametehealthcare@gmail.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  gametehealthcare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Helik Healthcare Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            {policy.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
