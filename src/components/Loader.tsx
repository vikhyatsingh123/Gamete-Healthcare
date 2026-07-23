import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "#0D1F3A",
          }}
        >
          {/* Floating blobs */}
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
            animate={{
              x: [-80, 100, -80],
              y: [-60, 80, -60],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-80 h-80 rounded-full bg-green-500/20 blur-3xl"
            animate={{
              x: [120, -100, 120],
              y: [60, -80, 60],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="relative"
            >
              <img
                src="./Gamete Logo_tag_line.jpeg"
                alt="logo"
                className="w-24 h-24 object-contain"
              />

              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500"
                style={{
                  filter: "blur(35px)",
                  zIndex: -1,
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Text */}
            <motion.h2
              className="mt-8 text-white text-3xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Helik Healthcare
            </motion.h2>

            <motion.p
              className="text-white/60 tracking-[5px] uppercase mt-2 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Excellence in Every Molecule
            </motion.p>

            {/* Loading dots */}
            <div className="flex gap-2 mt-10">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-green-500"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
