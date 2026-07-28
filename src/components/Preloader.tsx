import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 15;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 animate-spin blur-md opacity-70" />
              <div className="absolute inset-0.5 rounded-2xl bg-slate-950 flex items-center justify-center">
                <span className="font-display font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  MS
                </span>
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-display font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400">
                MANPREET SINGH
              </h2>
              <p className="text-xs text-slate-400 tracking-widest uppercase mt-1">
                Senior Full Stack & AI Engineer
              </p>
            </div>

            <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
