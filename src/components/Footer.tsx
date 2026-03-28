import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { isLight, isAnimated } = useTheme();

  return (
    <footer ref={ref} className={`relative border-t py-14 md:py-16 ${
      isLight ? "border-[#EFEDE2]" : "border-border/30"
    }`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            className={`font-black text-2xl mb-2 tracking-tight ${
              isLight ? "text-[#000000]" : "text-gradient"
            }`}
            animate={isAnimated ? { opacity: [0.8, 1, 0.8] } : undefined}
            transition={isAnimated ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
          >
            لاندسكيب إكس
          </motion.p>
          <p className={`text-xs font-medium ${
            isLight ? "text-[#494C6B]/60" : "text-muted-foreground/40"
          }`}>
            © {new Date().getFullYear()} Landscape X. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
