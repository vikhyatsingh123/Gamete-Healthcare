import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  organization: string;
  quote: string;
  rating: number;
  country: string;
  initial: string;
  color: string;
  index: number;
  isVisible: boolean;
}

const TestimonialCard = ({
  name,
  role,
  organization,
  country,
  quote,
  rating,
  initial,
  color,
  index,
  isVisible,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Quote icon */}
      <div className="w-10 h-10 rounded-xl bg-[#b5fbfa] flex items-center justify-center mb-5">
        <Quote className="w-5 h-5 text-[#0a8987]" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-amber-400" : "text-gray-200"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ background: color }}
        >
          {initial}
        </div>
        <div>
          <div className="font-semibold text-[#1253A1] text-sm">{name}</div>
          <div className="text-xs text-gray-700">
            {role}, {organization}
          </div>
          <div className="text-xs text-gray-500">{country}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
