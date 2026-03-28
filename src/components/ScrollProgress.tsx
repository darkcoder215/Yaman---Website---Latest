import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const { theme } = useTheme();
  const isEditorial = theme === "editorial";

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] ${
        isEditorial ? "bg-[#00C17A]" : "bg-gradient-brand"
      }`}
    />
  );
};

export default ScrollProgress;
