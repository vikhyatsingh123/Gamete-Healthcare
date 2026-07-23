import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Package, Globe, Users } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Award,
    value: 30,
    suffix: "+",
    prefix: "",
    label: "Years of Industrial Experience",
    description: "Trusted pharmaceutical expertise since 1998",
    color: "#0a8987",
  },
  {
    icon: Package,
    value: 500,
    suffix: "+",
    prefix: "",
    label: "Products",
    description: "Comprehensive portfolio across Product Range",
    color: "#1253A1",
  },
  {
    icon: Globe,
    value: 10,
    suffix: "+",
    prefix: "",
    label: "Countries",
    description: "Global presence serving diverse markets",
    color: "#1253A1",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    prefix: "",
    label: "Trusted Clients",
    description: "Lives improved through quality healthcare",
    color: "#0a8987",
  },
];

const useCounter = (target: number, duration: number, isActive: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isActive]);

  return count;
};

const StatItem = ({
  stat,
  index,
  isActive,
}: {
  stat: Stat;
  index: number;
  isActive: boolean;
}) => {
  const count = useCounter(stat.value, 1500, isActive);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="flex flex-col items-center text-center p-6"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: `${stat.color}20` }}
      >
        <Icon className="w-7 h-7" style={{ color: stat.color }} />
      </div>
      <div className="text-4xl font-extrabold text-[#1253A1] mb-1">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-base font-semibold text-gray-800 mb-1">
        {stat.label}
      </div>
      <div className="text-sm text-gray-500">{stat.description}</div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1253A1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#0a8987] bg-[#b5fbfa] px-4 py-1.5 rounded-full mb-3">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold text-[#1253A1]">
            Numbers That Define Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gray-100" />
              )}
              <StatItem stat={stat} index={i} isActive={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
