import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Send,
  CheckCircle,
  Building2,
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

const contactInfo = [
  {
    icon: MapPin,
    label: "India Office",
    value:
      "C-502, Hotech Commercial, C-Block, Defence Enclave, Noida Sector-44, Uttar Pradesh 201301, India",
    color: "#1253A1",
  },
  {
    icon: MapPin,
    label: "Dubai Office",
    value: "Owaisi Building, 302, Golden Sands, Mankhool, Dubai, UAE",
    color: "#1253A1",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9415812557\n+91 9793142303",
    color: "#0a8987",
  },
  {
    icon: Mail,
    label: "Email",
    value: "gametehealthcare@gmail.com",
    color: "#2ecc71",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM IST\nSat: 9:00 AM – 1:00 PM IST",
    color: "#8b5cf6",
  },
];

const offices = [
  {
    city: "Noida, India",
    address:
      "C-502, Hotech Commercial, C-Block, Defence Enclave, Noida Sector-44, Uttar Pradesh 201301, India",
    phone1: "+91 9415812557",
    phone2: "+91 9793142303",
    email: "gametehealthcare@gmail.com",
    type: "North India Headquarters",
    color: "#1253A1",
  },
  {
    city: "Dubai, UAE",
    address: "Owaisi Building, 302, Golden Sands, Mankhool, Dubai, UAE",
    phone1: "+91 9415812557",
    phone2: "+91 9793142303",
    email: "gametehealthcare@gmail.com",
    type: "International Headquarters",
    color: "#0a8987",
  },
];

const subjects = [
  "General Inquiry",
  "Product Information",
  "Medical/Clinical Query",
  "Partnership / Distribution",
  "Media & Press",
  "Regulatory Affairs",
  "Career Inquiry",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    window.location.href = `mailto:${form.email}?subject=${form.subject}&body="Hi, I'm ${form.name} \n ${form.message}"`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
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
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Whether you're a healthcare professional, distributor, or partner
              — we're here to help. Reach out to our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <FadeUp key={info.label} delay={i * 0.1}>
                  <div className="bg-white h-full rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${info.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      {info.label}
                    </div>
                    <div className="text-sm text-[#1253A1] font-medium whitespace-pre-line leading-relaxed">
                      {info.value}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeUp>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-4">
                  Send Us a Message
                </span>
                <h2 className="text-3xl font-bold text-[#1253A1] mb-6">
                  We'd Love to Hear From You
                </h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-[#2ecc71]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1253A1] mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-500 text-sm max-w-sm">
                        Thank you for reaching out. Our team will respond within
                        1-2 business days.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            placeholder="Your full name"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            placeholder="+91 98765 43210"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Subject *
                          </label>
                          <select
                            required
                            value={form.subject}
                            onChange={(e) =>
                              setForm({ ...form, subject: e.target.value })
                            }
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors bg-white"
                          >
                            <option value="">Select a subject</option>
                            {subjects.map((s) => (
                              <option key={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={7}
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          placeholder="How can we help you? Please provide as much detail as possible..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1253A1] transition-colors resize-none"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-70"
                        style={{
                          background:
                            "linear-gradient(135deg, #1253A1, #2a5298)",
                        }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>

            {/* Map placeholder */}
            <FadeUp delay={0.2}>
              <div className="h-full min-h-80">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-4">
                  Our Location
                </span>
                <h2 className="text-3xl font-bold text-[#1253A1] mb-6">
                  Find Us Here
                </h2>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4035723451075!2d77.34330497571736!3d28.557641675705757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce542d8f57c89%3A0x9a97943d1b73f2b5!2sDefence%20Enclave!5e0!3m2!1sen!2sin!4v1784051136581!5m2!1sen!2sin"
                  className="w-[400px] md:w-[600px] rounded-2xl"
                  height="350"
                  title="location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

                <div className="mt-4 flex items-start gap-3 p-4 bg-blue-50 rounded-2xl">
                  <MapPin className="w-5 h-5 text-[#1253A1] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1253A1] text-sm mb-0.5">
                      Helik Healthcare
                    </div>
                    <div className="text-gray-600 text-sm">
                      C-502, Hotech Commercial, C-Block, Defence Enclave, Noida
                      Sector-44, Uttar Pradesh-201301, India
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
                Our Offices
              </span>
              <h2 className="text-4xl font-bold text-[#1253A1] mb-4">
                Office Locations
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Two strategic offices across World's key commercial and research
                hubs.
              </p>
            </div>
          </FadeUp>

          <div className="flex items-center justify-center flex-col md:flex-row gap-6">
            {offices.map((office, i) => (
              <FadeUp key={office.city} delay={i * 0.1}>
                <div className="bg-white md:w-[500px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="h-2" style={{ background: office.color }} />
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${office.color}15` }}
                      >
                        <Building2
                          className="w-5 h-5"
                          style={{ color: office.color }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1253A1]">
                          {office.city}
                        </h3>
                        <span
                          className="text-xs"
                          style={{ color: office.color }}
                        >
                          {office.type}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {office.phone1}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {office.phone2}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Mail className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-sm hover:text-[#1253A1] transition-colors"
                          style={{ color: office.color }}
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
