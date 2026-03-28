import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { theme } = useTheme();
  const isEditorial = theme === "editorial";

  return (
    <footer ref={ref} className={`relative border-t py-14 md:py-16 ${
      isEditorial ? "border-[#EFEDE2]" : "border-border/30"
    }`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <p className={`font-black text-2xl mb-2 tracking-tight ${
            isEditorial ? "text-[#000000]" : "text-gradient"
          }`}>
            لاندسكيب إكس
          </p>
          <p className={`text-xs font-medium ${
            isEditorial ? "text-[#494C6B]/60" : "text-muted-foreground/40"
          }`}>
            © {new Date().getFullYear()} Landscape X. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
