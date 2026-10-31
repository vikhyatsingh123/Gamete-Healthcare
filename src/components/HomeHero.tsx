import { motion, type Easing } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, Package, MapPin, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: CalendarDays,
    title: "1998",
    description: "Established",
  },
  {
    icon: Package,
    title: "Own",
    description: "Pharmaceutical Brands",
  },
  {
    icon: MapPin,
    title: "Fast & Central UP, Gujarat, Rajasthan",
    description: "& West Madhya Pradesh",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description: "Through trusted manufacturing partners",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as Easing,
    },
  },
};

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eaf6fc]">
      {/* FULL HERO BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-no-repeat
          bg-center
          bg-size-[100%_auto]
          md:bg-cover
          md:bg-center
        "
        style={{
          backgroundImage: "url('/home.png')",
        }}
      />

      {/* LIGHT OVERLAY FOR TEXT READABILITY */}
      <div
        className="
          absolute inset-0 -z-10
          bg-linear-to-r
          from-white/95
          via-white/75
          to-white/5
          md:from-white/90
          md:via-white/45
          md:to-transparent
        "
      />

      {/* SUBTLE BLUE ATMOSPHERE */}
      <div className="absolute inset-0 -z-10 bg-[#eaf6fc]/10 pointer-events-none" />

      {/* MAIN HERO CONTENT */}
      <div className="mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className="
          grid grid-cols-1 lg:grid-cols-2
          items-center
        "
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              relative z-10
              max-w-[620px]
              pt-12 pb-8
              sm:pt-16
              lg:py-12
            "
          >
            {/* EYEBROW */}
            <motion.div
              variants={itemVariants}
              className="
                flex items-center gap-2
                text-[#178d9b]
                text-[16px]
                font-bold
                tracking-[1.8px]
                uppercase
                mb-5
              "
            >
              <span>Established 1998</span>
              <span className="w-1 h-1 rounded-full bg-[#149ba9]" />
              <span>Pharmaceuticals</span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={itemVariants}
              className="
                text-[50px]
                leading-[1.08]
                font-extrabold
                tracking-[-1.8px]
                text-[#102744]
                mb-4!
              "
            >
              Trusted
              <br />
              Pharmaceutical Brands.
              <br />
              <span className="text-[#1598a5]">For Healthier Tomorrows.</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="
                mt-5
                max-w-[490px]
                text-[18px]
                leading-[1.7]
                text-[#566779]
              "
            >
              Since 1998, Gamete Healthcare has been delivering quality
              pharmaceutical brands through trusted manufacturing partners and a
              strong distribution network across key regions in India.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="
                flex flex-wrap
                items-center
                gap-3
                sm:gap-4
                mt-7
              "
            >
              <Link
                to="/products"
                className="
                  group
                  inline-flex items-center justify-center gap-3
                  bg-gradient-to-r from-[#129eaa] to-[#078ba9]
                  text-white
                  px-5 sm:px-6
                  py-3.5
                  rounded-lg
                  text-[12px] sm:text-[13px]
                  font-semibold
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                Explore Our Brands
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  border border-[#1598a5]/50
                  bg-white/70
                  text-[#087f91]
                  px-5 sm:px-6
                  py-3.5
                  rounded-lg
                  text-[12px] sm:text-[13px]
                  font-semibold
                  hover:bg-[#1598a5]
                  hover:text-white
                  transition-all duration-300
                "
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-10 right-16! sm:right-8 z-20 rotate-[-9deg]"
          >
            <p
              className="text-[#24364d] text-[22px] sm:text-[25px] leading-[1.25]"
              style={{
                fontFamily: "cursive",
                fontStyle: "italic",
              }}
            >
              Better Health
              <br />
              Brighter Tomorrows
            </p>
            <div className="w-28 h-[3px] bg-[#15a8ac] rotate-[-10deg] ml-8 mt-2 rounded-full" />
          </motion.div>
          {/* RIGHT SIDE INTENTIONALLY EMPTY
              Products are already part of the background image. */}
        </div>

        {/* BOTTOM FEATURE CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            mt-16
            relative z-20
            grid grid-cols-2
            lg:grid-cols-4
            bg-white/80
            backdrop-blur-xl
            border border-white/90
            rounded-2xl
            shadow-[0_10px_40px_rgba(39,112,145,0.08)]
            overflow-hidden
            mb-6 sm:mb-8
          "
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                variants={itemVariants}
                key={item.title}
                className={`
                  flex items-center
                  gap-3 sm:gap-4
                  px-3 sm:px-5 lg:px-5
                  py-5 sm:py-6
                  min-w-0
                  ${index % 2 === 0 ? "border-r border-[#dceaf1]" : ""}
                  ${index < 2 ? "border-b lg:border-b-0 border-[#dceaf1]" : ""}
                  ${index === 1 ? "lg:border-r border-[#dceaf1]" : ""}
                  ${index === 2 ? "lg:border-r border-[#dceaf1]" : ""}
                `}
              >
                {/* ICON */}
                <div
                  className="
                  w-10 h-10
                  sm:w-[48px] sm:h-[48px]
                  rounded-full
                  bg-[#effaff]
                  flex items-center justify-center
                  text-[#1598a5]
                  shrink-0
                "
                >
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3
                    className="
                    font-bold
                    leading-snug
                    text-[#172d49]
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    text-[14px]
                    text-[#667587]
                    leading-[1.5]
                    mt-1
                  "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
