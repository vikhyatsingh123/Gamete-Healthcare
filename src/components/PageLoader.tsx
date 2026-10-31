import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const started = Date.now();
    let hideTimer;

    const finishLoading = () => {
      const remaining = Math.max(0, 500 - (Date.now() - started));

      hideTimer = setTimeout(() => {
        setVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
        >
          <div className="relative flex w-full flex-col items-center px-6">
            {/* Animated orbit */}
            <motion.div
              className="absolute h-[175px] w-[min(90vw,430px)] rounded-[50%] border-2 border-transparent border-t-[#08B4B1] border-r-[#08B4B1]/50"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Logo */}
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, scale: 0.88, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative z-10"
            >
              <img
                src="/gamete_final.png"
                alt="Gamete Healthcare Pvt Ltd"
                className="w-[min(72vw,340px)] object-contain"
              />
            </motion.div>

            {/* Star glow */}
            <motion.div
              className="absolute right-[calc(50%-170px)] top-[-32px] h-3 w-3 rounded-full bg-[#08B4B1] blur-[2px]"
              animate={
                reduceMotion
                  ? {}
                  : {
                      opacity: [0.35, 1, 0.35],
                      scale: [0.8, 1.5, 0.8],
                    }
              }
              transition={{ duration: 1.8, repeat: Infinity }}
            />

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-12 text-center text-sm font-medium tracking-wide text-[#0755A8]"
            >
              Preparing your healthcare experience
              <span className="animate-pulse">...</span>
            </motion.p>

            {/* Animated progress indicator */}
            <div className="mt-5 h-[3px] w-44 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#0755A8] to-[#08B4B1]"
                animate={reduceMotion ? {} : { x: ["-110%", "330%"] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <p className="mt-4 text-[10px] font-medium tracking-[3px] text-slate-400">
              GAMETE HEALTHCARE
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
