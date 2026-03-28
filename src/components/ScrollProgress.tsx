import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const { isLight, isAnimated } = useTheme();

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] ${
        isLight ? "bg-[#00C17A]" : "bg-gradient-brand"
      } ${isAnimated ? "shadow-[0_0_10px_rgba(0,193,122,0.4)]" : ""}`}
    />
  );
};

export default ScrollProgress;
