import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Clock,
  ChevronRight,
  Upload,
  TrendingUp,
  Users,
  Lightbulb,
  Globe,
  Heart,
  Award,
  Coffee,
  CheckCircle,
} from "lucide-react";

const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Structured career paths with regular performance reviews and fast-track opportunities.",
    color: "#1253A1",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health insurance covering employee and family. Mental wellness programmes.",
    color: "#0a8987",
  },
  {
    icon: Lightbulb,
    title: "Learning & Development",
    desc: "Annual L&D budget, access to online learning platforms, and conference sponsorships.",
    color: "#8b5cf6",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    desc: "Work across our offices in 10 countries or take on international rotation assignments.",
    color: "#2ecc71",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    desc: "We celebrate diversity and foster a collaborative, respectful work environment.",
    color: "#ec4899",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    desc: "Flexible working hours, generous leave policy, and remote-work options for eligible roles.",
    color: "#f59e0b",
  },
];

const jobListings = [
  {
    id: 1,
    title: "Senior Research Scientist — Oncology",
    location: "Noida",
    type: "Full-time",
    dept: "R&D",
    experience: "6-10 years",
  },
  {
    id: 2,
    title: "Medical Affairs Manager",
    location: "Noida",
    type: "Full-time",
    dept: "Medical Affairs",
    experience: "4-7 years",
  },
  {
    id: 3,
    title: "Regulatory Affairs Specialist",
    location: "Noida",
    type: "Full-time",
    dept: "Regulatory",
    experience: "3-5 years",
  },
  {
    id: 4,
    title: "Business Development Executive — MENA",
    location: "Dubai / Remote",
    type: "Full-time",
    dept: "Commercial",
    experience: "5-8 years",
  },
  {
    id: 5,
    title: "Quality Assurance Analyst",
    location: "Noida",
    type: "Full-time",
    dept: "Quality",
    experience: "2-4 years",
  },
  {
    id: 6,
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Hybrid",
    dept: "Marketing",
    experience: "3-5 years",
  },
  {
    id: 7,
    title: "Clinical Data Manager",
    location: "Dubai, UAE",
    type: "Full-time",
    dept: "Clinical Operations",
    experience: "4-6 years",
  },
  {
    id: 8,
    title: "Supply Chain Analyst",
    location: "Noida",
    type: "Full-time",
    dept: "Operations",
    experience: "2-4 years",
  },
];

const deptColors: Record<string, string> = {
  "R&D": "#8b5cf6",
  "Medical Affairs": "#1253A1",
  Regulatory: "#0a8987",
  Commercial: "#2ecc71",
  Quality: "#ec4899",
  Marketing: "#f59e0b",
  "Clinical Operations": "#1253A1",
  Operations: "#2ecc71",
};

const Careers = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const recipient = formData.get("email");
    const message = formData.get("message");
    window.location.href = `mailto:${recipient}?subject=""&body=${message}`;
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", position: "", message: "" });
    setFileName("");
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
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
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              right: "-5%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Careers</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-white/70 text-lg max-w-xl mb-8">
              Be part of a mission-driven team dedicated to transforming global
              health. At Helik, your work directly impacts millions of lives.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm">
                <Globe className="w-4 h-4 text-[#0a8987]" /> 10 Countries
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm">
                <Award className="w-4 h-4 text-[#0a8987]" /> Great Place to Work
                Certified
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Why Helik
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Why Work With Us
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We invest in our people because we know that exceptional teams
                create exceptional medicines.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <FadeUp key={benefit.title} delay={i * 0.1}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl transition-all hover:-translate-y-1 group h-full">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: `${benefit.color}15` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: benefit.color }}
                      />
                    </div>
                    <h3 className="font-bold text-[#1253A1] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Open Roles
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Current Opportunities
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Explore our open positions and find your next meaningful career
                move.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobListings.map((job, i) => (
              <FadeUp key={job.id} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all hover:border-[#1253A1]/20 group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            background: `${deptColors[job.dept]}15`,
                            color: deptColors[job.dept],
                          }}
                        >
                          {job.dept}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Clock className="w-3 h-3" /> {job.type}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#1253A1] mb-1 group-hover:text-[#0a8987] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#0a8987]" />{" "}
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-[#0a8987]" />{" "}
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:shadow-md hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, #1253A1, #2a5298)",
                      }}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Apply
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Submit Your Application
              </h2>
              <p className="text-gray-500">
                Don't see a perfect role? We're always looking for talented
                people. Send us your CV and we'll be in touch.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Dr. Ananya Sharma"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="ananya@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Position Applying For *
                </label>
                <select
                  required
                  name="position"
                  value={form.position}
                  onChange={(e) =>
                    setForm({ ...form, position: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors bg-white"
                >
                  <option value="">Select a position</option>
                  {jobListings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                  <option value="Other">Other / Speculative Application</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="cv"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Upload Resume/CV
                </label>
                <label className="w-full border-2 border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#1253A1] transition-colors group">
                  <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#1253A1] transition-colors" />
                  <span className="text-sm text-gray-500 group-hover:text-[#1253A1] transition-colors">
                    {fileName || "Click to upload PDF or Word document"}
                  </span>
                  <span className="text-xs text-gray-400">Max size: 5MB</span>
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || "")
                    }
                  />
                </label>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Cover Letter / Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us about yourself and why you want to join Helik Healthcare..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl text-white font-semibold text-base transition-all hover:shadow-lg"
                style={{
                  background: submitted
                    ? "#2ecc71"
                    : "linear-gradient(135deg, #1253A1, #2a5298)",
                }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" /> Application Submitted!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Submit Application
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Careers;
