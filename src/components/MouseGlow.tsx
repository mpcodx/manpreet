import { useMouseGlow } from "@/hooks/useMouseGlow";
import { motion } from "framer-motion";

export const MouseGlow = () => {
  const { mousePosition, isVisible } = useMouseGlow();

  return (
    <>
      {/* Main glow circle */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Inner glow */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.05,
        }}
        style={{
          width: 150,
          height: 150,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full bg-primary"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.05,
        }}
        style={{
          width: 8,
          height: 8,
        }}
      />
    </>
  );
};
