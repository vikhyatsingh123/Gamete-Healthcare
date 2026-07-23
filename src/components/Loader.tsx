import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #0f2347 0%, #1253A1 60%, #2a5298 100%)",
          }}
        >
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/10"
                style={{ width: 100 + i * 80, height: 100 + i * 80 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
              />
            ))}
          </div>

          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo icon */}
            <motion.div
              className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgb(39, 111, 75)",
              }}
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="./helik_logo.png" alt="logo" />
            </motion.div>

            {/* Company name */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white tracking-wide">
                Helik Healthcare
              </h1>
              <p className="text-white/60 text-sm mt-1 tracking-widest uppercase">
                Excellence in Every Molecule
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "rgb(39, 111, 75)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
