import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { isLight, isAnimated } = useTheme();

  return (
    <footer ref={ref} className={`relative border-t ${
      isLight
        ? "border-[#EFEDE2]/60 py-12 md:py-16"
        : "border-border/30 py-14 md:py-16"
    }`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            className={`mb-2 tracking-tight ${
              isLight
                ? "text-3xl font-black text-[#2B2D3F]"
                : "font-black text-2xl text-gradient"
            }`}
            animate={isAnimated ? { opacity: [0.8, 1, 0.8] } : undefined}
            transition={isAnimated ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
          >
            لاندسكيب إكس
          </motion.p>

          {/* Tagline — light theme only */}
          {isLight && (
            <p className="text-sm font-medium text-[#494C6B]/50 tracking-wide mb-4">
              استديو ابتكاري وطني
            </p>
          )}

          <p className={`font-medium ${
            isLight
              ? "text-[10px] tracking-widest uppercase text-[#494C6B]/40"
              : "text-xs text-muted-foreground/40"
          }`}>
            © {new Date().getFullYear()} Landscape X. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
