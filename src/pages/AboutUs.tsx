import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Eye,
  Globe,
  Lightbulb,
  Heart,
  Shield,
  ChevronRight,
} from "lucide-react";

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

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every business decision and scientific endeavour.",
    color: "#1253A1",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Relentless pursuit of new ideas and technologies to advance pharmaceutical science.",
    color: "#0a8987",
  },
  {
    icon: Heart,
    title: "Patient First",
    desc: "Every decision is filtered through one question: how does this benefit the patient?",
    color: "#ec4899",
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "Quality healthcare should be universal — we work to make it affordable and available.",
    color: "#2ecc71",
  },
];

const teamMembers = [
  {
    name: "Sudhir Kumar Pandey",
    title: "Chairman & CEO",
    bio: "A visionary leader with 30+ years in pharma. Sudhir founded Helik in 2020 and has guided its growth into a global organisation after running successfully Gamete Healthcare Pvt. Ltd. for 30+ years.",
    initial: "SK",
    color: "#1253A1",
  },
  {
    name: "Tushar Pandey",
    title: "Director",
    bio: "An MBA in International Marketing, Tushar leads Helik Healthcare with a vision for sustainable growth and global expansion. He focuses on strengthening international partnerships, and driving strategic business initiatives.",
    initial: "TP",
    color: "#0a8987",
  },
  {
    name: "Rahul Pandey",
    title: "Executive Director",
    bio: "Worked at Accenture, a leading global technology and consulting company, for over two years as a Software Engineer. Rahul Pandey brings together technology expertise and business acumen to lead marketing, and business operations.",
    initial: "RP",
    color: "#8b5cf6",
  },
  {
    name: "Vikhyat Singh",
    title: "Website & Digital Marketing Head",
    bio: "Leads Helik's digital presence, overseeing website development, online marketing campaigns, and social media strategy to enhance brand visibility and engagement.",
    initial: "VS",
    color: "#2ecc71",
  },
];

const certifications = [
  {
    label: "GMP",
    sublabel: "Approved Facility",
    color: "#2ecc71",
    logo: "./gmp.png",
  },
  {
    label: "WHO",
    sublabel: "World Health Organization",
    color: "#8b5cf6",
    logo: "./who.jpg",
  },

  {
    label: "ISO 9001",
    sublabel: "2015 Certified",
    color: "#0a8987",
    logo: "./iso.png",
  },
];

const countries = [
  {
    id: 1,
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    id: 2,
    name: "Nepal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
  },
  {
    id: 3,
    name: "Bhutan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
  },
  {
    id: 4,
    name: "Dubai",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    id: 5,
    name: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    id: 6,
    name: "Myanmar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
  },
  {
    id: 7,
    name: "Romania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  },
  {
    id: 8,
    name: "Qatar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
  },
  {
    id: 9,
    name: "Ethiopia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
  },
  {
    id: 10,
    name: "Sudan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
  },
];

const AboutUs = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2347, #1253A1 50%, #2a5298)",
        }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Our Story
            </h1>
            <p className="text-white/70 text-lg">
              Founded in 1998, Gamete Healthcare is a trusted pharmaceutical
              company committed to delivering high-quality healthcare solutions
              across India. With nearly three decades of experience, we have
              built a strong reputation for providing reliable, effective, and
              affordable pharmaceutical products while upholding the highest
              standards of quality, integrity, and ethical business practices.
            </p>
            <p className="text-white/70 text-lg">
              Over the years, we have established a strong distribution network
              across East & Central Uttar Pradesh, followed by Gujarat,
              Rajasthan, and West Madhya Pradesh, ensuring the timely
              availability of quality pharmaceutical products and dependable
              service to healthcare professionals, distributors, and business
              partners. Driven by innovation and customer satisfaction, Gamete
              Healthcare continues to strengthen its position as a reliable name
              in the pharmaceutical industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Purpose & Direction
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1]">
                Mission & Vision
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div
                className="rounded-3xl overflow-hidden h-full"
                style={{
                  background: "linear-gradient(135deg, #1253A1, #2a5298)",
                }}
              >
                <div className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-white/80 leading-relaxed text-base">
                    <div>
                      • Deliver safe, effective, and high-quality healthcare
                      products.
                    </div>
                    <div>
                      {" "}
                      • Uphold the highest standards of quality and ethics.{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      • Build lasting partnerships through trust and customer
                      satisfaction.
                    </div>
                    <div>
                      {" "}
                      • Drive continuous innovation to meet evolving healthcare
                      needs.
                    </div>{" "}
                    <div>• Expand our global presence with excellence.</div>
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/60 text-sm italic">
                      "Excellence in Every Molecule"
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="rounded-3xl overflow-hidden h-full bg-white border border-gray-100 shadow-sm">
                <div className="p-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "#0a898720" }}
                  >
                    <Eye className="w-7 h-7 text-[#0a8987]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1253A1] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    To become a globally trusted healthcare company by
                    delivering quality, innovation, and excellence in
                    pharmaceutical and nutraceutical solutions.
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex gap-6">
                      <div>
                        <div className="text-2xl font-bold text-[#0a8987]">
                          2030
                        </div>
                        <div className="text-xs text-gray-500">Target Year</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#1253A1]">
                          100M+
                        </div>
                        <div className="text-xs text-gray-500">Patients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#2ecc71]">
                          80+
                        </div>
                        <div className="text-xs text-gray-500">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                What We Stand For
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1]">Core Values</h2>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <FadeUp key={val.title} delay={i * 0.1}>
                  <div className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div
                      className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                      style={{ background: `${val.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: val.color }} />
                    </div>
                    <h3 className="font-bold text-[#1253A1] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Leadership
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Meet Our Leaders
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Seasoned professionals driving innovation and growth at Helik
                Healthcare.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div className="bg-white h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                  {/* Avatar */}
                  <div
                    className="h-36 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      {member.initial}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1253A1]">{member.name}</h3>
                    <div className="text-xs font-medium text-[#0a8987] mb-3">
                      {member.title}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Recognition
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Awards & Certifications
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Our quality and innovation are recognised by leading global
                regulatory authorities and industry bodies.
              </p>
            </div>
          </FadeUp>

          <div className="flex lg:flex-row flex-col items-center justify-center gap-4">
            {certifications.map((cert, i) => (
              <FadeUp key={cert.label} delay={i * 0.08}>
                <div
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed hover:shadow-lg transition-all"
                  style={{ borderColor: `${cert.color}40` }}
                >
                  <img src={cert.logo} alt="logo" width="100px" />
                  <div className="font-bold text-sm text-[#1253A1] text-center">
                    {cert.label}
                  </div>
                  <div className="text-xs text-gray-400 text-center mt-1">
                    {cert.sublabel}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Worldwide
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Global Presence
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Our products reach patients in over 10 countries
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map placeholder */}
            <FadeUp delay={0.1}>
              <div
                className="h-80 rounded-3xl relative overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1253A1, #2a5298)",
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
                <h3 className="font-bold text-[#1253A1] mb-4 text-lg">
                  Key Markets
                </h3>
                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <span
                      key={country.id}
                      className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3 py-1.5 rounded-2xl text-sm text-gray-700 hover:border-[#1253A1] hover:text-[#1253A1] transition-colors cursor-default"
                    >
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {country.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
