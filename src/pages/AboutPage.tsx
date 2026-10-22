import { motion, useInView } from "framer-motion";
import { CountUpText } from "../components/CountUpText";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { InnerPageHero } from "../components/InnerPageHero";
import { Reveal } from "../components/Reveal";
import { Target, Eye, HeartPulse, ArrowUpRight } from "lucide-react";
import {
  tags,
  homeStats,
  whatWeStandFor,
  journey,
  countries,
} from "../siteData";
import { useRef } from "react";

const certifications = [
  {
    label: "GMP",
    sublabel: "Approved Facility",
    color: "#2ecc71",
    logo: "/gmp.png",
  },
  {
    label: "WHO",
    sublabel: "World Health Organization",
    color: "#8b5cf6",
    logo: "/who.jpg",
  },

  {
    label: "ISO 9001",
    sublabel: "2015 Certified",
    color: "#276f4b",
    logo: "/iso.png",
  },
  {
    label: "HACCP",
    sublabel: "HACCP Certified",
    color: "#2ecc71",
    logo: "/haccp.png",
  },
];

const teamMembers = [
  {
    name: "Sudhir Kumar Pandey",
    title: "Chairman & CEO",
    bio: "A visionary leader with 30+ years in pharma. Sudhir founded Helik in 2020 and has guided its growth into a global organisation after running successfully Gamete Healthcare Pvt. Ltd. for 30+ years.",
    initial: "SK",
    color: "#1a3a6b",
  },
  {
    name: "Tushar Pandey",
    title: "H.O. Executive",
    bio: "An MBA in International Marketing, Tushar leads Helik Healthcare with a vision for sustainable growth and global expansion. He focuses on strengthening international partnerships, and driving strategic business initiatives.",
    initial: "TP",
    color: "#276f4b",
  },
  {
    name: "C.P. Tiwari",
    title: "Senior Manager - Sales & Distribution",
    bio: "With over 30 years of pharmaceutical industry experience, C. P. Tiwari specializes in sales management, distribution network development, and strengthening market presence through lasting business partnerships.",
    initial: "CP",
    color: "#2ecc71",
  },
  {
    name: "Rohit Pandey",
    title: "Sales & Marketing Manager",
    bio: "With over 10 years of experience in the pharmaceutical industry, Rohit Pandey specializes in sales growth, marketing strategy, market development, and building strong customer relationships to drive business growth.",
    initial: "RP",
    color: "#2457A6",
  },
  {
    name: "Ankit Tiwari",
    title: "Area Sales Manager",
    bio: "With over 9 years of experience in the pharmaceutical industry, Ankit Tiwari specializes in area sales management, market expansion, distributor relations, and driving sales growth across assigned territories.",
    initial: "AT",
    color: "#198754",
  },
  {
    name: "Vikhyat Singh",
    title: "Website & Digital Marketing Head",
    bio: "Leads Helik's digital presence, overseeing website development, online marketing campaigns, and social media strategy to enhance brand visibility and engagement.",
    initial: "VS",
    color: "#17A589",
  },
];

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="About us"
        title={["Trusted since 1998", "Committed to better health"]}
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80"
        backgroundAlt="Modern healthcare facility corridor"
        spotlight={{
          value: "25+ years of pharmaceuticals experience",
          text: "Three decades of Trust. Quality Healthcare. Better Tomorrow.",
        }}
        cards={[
          {
            title: "Who We Are",
            text: "Trusted Pharmaceutical Care since 1998.",
          },
          {
            title: "Our Commitment",
            text: "Delivering quality medicines for better health for nearly three decades.",
          },
          {
            title: "Our Reach",
            text: "A reliable distribution network bringing quality healthcare closer to you.",
          },
        ]}
      />

      <section className="split-section split-section-image-left">
        <Reveal className="split-media">
          <ImagePlaceholder
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80"
            alt="Modern healthcare facility corridor"
          />
        </Reveal>
        <Reveal className="split-content" delay={0.08}>
          <span className="eyebrow">Who we are</span>
          <h2>
            A trusted pharmaceutical company built on quality, integrity, and
            reach
          </h2>
          <br />
          <p style={{ marginBottom: "1rem" }}>
            Founded in 1998, Gamete Healthcare is a trusted pharmaceutical
            company committed to delivering high-quality, reliable, and
            affordable healthcare solutions across India. With nearly three
            decades of experience, we uphold the highest standards of quality,
            integrity, and ethical business practices.
          </p>
          <p>
            Our strong distribution network spans East and Central Uttar
            Pradesh, Gujarat, Rajasthan, and West Madhya Pradesh, ensuring
            timely product availability and dependable service to healthcare
            professionals, distributors, and business partners. We continue to
            grow through innovation, quality, and customer satisfaction.
          </p>
          <div className="certification-strip">
            {tags.map((item) => (
              <div key={item} className="certification-pill">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="trust-strip trust-strip-compact">
        {homeStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05} className="stat-card">
            <CountUpText as="strong" value={stat.value} />
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <span className="eyebrow">What We Stand For</span>
          <h2>Principles that guide Gamete</h2>
        </div>

        <div className="capability-grid">
          {whatWeStandFor.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="capability-card"
            >
              <img src={item.icon} alt={item.title} width={100} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <span className="eyebrow">Our Manufacturing Network</span>
          <h2>Certified Manufacturing Partners</h2>
        </div>

        <FadeUp
          delay={0.1}
          className="flex md:flex-row flex-col items-center gap-6"
        >
          <div className="md:w-1/2 flex items-center text-center px-12 py-6  justify-center transition-all mx-auto border-2 border-dotted hover:-translate-y-1 hover:shadow-xl border-blue-400 rounded-2xl overflow-hidden">
            Our manufacturing network comprises WHO-GMP, ISO, HACCP, US FDA,
            European regulatory, and Ministry of AYUSH-compliant manufacturing
            units, selected according to specific product and market
            requirements.
            <br />
            <br />
            Our partner facilities have extensive experience in manufacturing
            and exporting healthcare products across SRA markets, the Middle
            East, Africa, and Asia.
            <br />
            <br />
            Collectively, our manufacturing partners have established export
            experience across more than 51 countries, with the capabilities to
            meet diverse regulatory, quality, and market requirements.
            <br />
            <br />
            We identify and select manufacturing partners based on product
            specifications, target-market regulations, quality standards,
            production capabilities, and evolving consumer needs.
          </div>
          <div className="grid grid-cols-2 gap-4 md:w-1/2">
            {certifications.map((cert, i) => (
              <FadeUp key={cert.label} delay={i * 0.08}>
                <div
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed hover:shadow-lg transition-all"
                  style={{ borderColor: `${cert.color}40` }}
                >
                  <img src={cert.logo} alt="logo" width="100px" />
                  <div className="font-bold text-sm text-[#1a3a6b] text-center">
                    {cert.label}
                  </div>
                  <div className="text-xs text-gray-400 text-center mt-1">
                    {cert.sublabel}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <span className="eyebrow">Leadership</span>
          <h2>Meet Our Leaders</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.1}>
              <div className="bg-white h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                {/* Avatar */}
                <div
                  className="h-44 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
                  }}
                >
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                    {member.initial}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a3a6b] text-md">
                    {member.name}
                  </h3>
                  <div className="text-sm font-medium text-[#276f4b] mb-3">
                    {member.title}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <span className="eyebrow">Purpose & Direction</span>
          <h2>Mission & Vision</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <FadeUp delay={0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal-50 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                  <Target className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                  What drives us
                </span>

                <h3 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Our Mission
                </h3>

                <p className="text-base leading-7 text-slate-600">
                  To make quality healthcare more accessible through reliable
                  healthcare solutions, a patient-first approach, and a
                  commitment to improving health and well-being in the
                  communities we serve.
                </p>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="h-5 w-5 text-teal-600" />
                    <p className="text-sm font-medium text-slate-700">
                      Care that puts people first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Vision */}
          <FadeUp delay={0.2}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-[#c5e3e8] bg-gradient-to-br from-[#c9e2f2] via-[#c5e8e5] to-[#b3ded7] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#155e75]/10 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#155e75]/10" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/50 text-[#155e75] shadow-sm backdrop-blur-sm">
                  <Eye className="h-7 w-7" strokeWidth={1.8} />
                </div>

                {/* Label */}
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#176b70]">
                  Where we're headed
                </span>

                {/* Heading */}
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#173b55] md:text-3xl">
                  Our Vision
                </h3>

                {/* Description */}
                <p className="text-base leading-7 text-slate-700">
                  To build a trusted healthcare brand known for quality,
                  innovation, and compassionate care, creating a healthier
                  future through solutions that make a meaningful difference in
                  people's lives.
                </p>

                {/* Bottom section */}
                <div className="mt-8 border-t border-[#155e75]/15 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[#173b55]">
                        A healthier tomorrow
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Guided by care. Driven by purpose.
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/50 text-[#155e75] shadow-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-white/80">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <span className="eyebrow">Our Journey</span>
          <h2>Every milestone moves us forward</h2>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-8">
          {/* Horizontally scrollable timeline */}
          <div className="-mx-5 overflow-x-auto px-5 pb-8 md:mx-0 md:overflow-visible md:px-0">
            <div className="relative min-w-[760px] pt-2 md:min-w-0">
              {/* Continuous horizontal line through all points */}
              <div className="absolute left-0 right-0 top-[260px] h-px bg-gradient-to-r from-[#247985]/10 via-[#247985]/60 to-[#247985]/10" />

              <div className="grid grid-cols-4">
                {journey.map((item, index) => {
                  const contentAbove = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.year}
                      initial={{
                        opacity: 0,
                        y: contentAbove ? 18 : -18,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.12,
                        ease: "easeOut",
                      }}
                      className="relative grid grid-rows-[220px_80px_220px] px-4"
                    >
                      {/* TOP: Content for odd-positioned milestones */}
                      <div className="flex flex-col justify-end pb-3">
                        {contentAbove && (
                          <div className="relative pb-5">
                            <h3 className="mb-3 text-xl font-semibold leading-snug text-slate-900 lg:text-2xl">
                              {item.title}
                            </h3>

                            <p className="text-sm leading-6 text-slate-600 lg:text-base">
                              {item.description}
                            </p>

                            {/* Connector down to the point */}
                            <div className="absolute -bottom-[45px] left-2.5 h-[45px] w-px bg-[#247985]/40" />
                          </div>
                        )}

                        {/* TOP: Year for alternating milestones */}
                        {!contentAbove && (
                          <div className="flex items-end pb-2">
                            <span className="text-3xl font-light tracking-tighter text-[#247985]">
                              {item.year}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* MIDDLE: Timeline point */}
                      <div className="relative z-10 flex items-center">
                        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#247985]/10" />

                        <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-[#247985]/40 bg-white shadow-[0_0_0_5px_white]">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#247985]" />
                        </div>
                      </div>

                      {/* BOTTOM: Year or content */}
                      <div className="pt-5">
                        {contentAbove ? (
                          <div>
                            <span className="text-3xl font-light tracking-tighter text-[#247985]">
                              {item.year}
                            </span>
                          </div>
                        ) : (
                          <div className="relative pt-5">
                            {/* Connector up from the point */}
                            <div className="absolute -top-10 left-2.5 h-[45px] w-px bg-[#247985]/40" />

                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#247985]">
                              Milestone {String(index + 1).padStart(2, "0")}
                            </p>

                            <h3 className="mb-3 text-xl font-semibold leading-snug text-slate-900 lg:text-2xl">
                              {item.title}
                            </h3>

                            <p className="text-sm leading-6 text-slate-600 lg:text-base">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading">
          <span className="eyebrow">Worldwide</span>
          <h2>Global Presence</h2>
          <div>
            Helik Healthcare Pvt Ltd export division working in more than 5
            countries.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map placeholder */}
          <FadeUp delay={0.1}>
            <div
              className="h-80 rounded-3xl relative overflow-hidden flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1a3a6b, #2a5298)",
              }}
            >
              <img
                src="./map.png"
                alt="world map"
                style={{ height: "stretch" }}
              />
              {/* Animated dots */}
            </div>
          </FadeUp>

          {/* Countries list */}
          <FadeUp delay={0.2}>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country) => (
                  <span
                    key={country.id}
                    className="flex items-center justify-center gap-1.5 bg-white border border-gray-100 shadow-sm px-4 py-4 rounded-2xl text-sm text-gray-700 hover:border-[#1a3a6b] hover:text-[#1a3a6b] transition-colors cursor-default"
                  >
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <b> {country.name}</b>
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
