import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const CtaBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { isLight, isAnimated } = useTheme();

  return (
    <section className="py-10 md:py-14 relative overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-3xl overflow-hidden p-10 md:p-16 text-center ${
            isLight
              ? "bg-[#000000]"
              : "bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border/30"
          }`}
        >
          {/* Animated background pattern — animated editorial */}
          {isAnimated && (
            <>
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle, #00C17A 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <motion.div
                className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.08]"
                style={{
                  background: "radial-gradient(circle, #00C17A 0%, transparent 70%)",
                  animation: "blob-morph 8s ease-in-out infinite",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full opacity-[0.06]"
                style={{
                  background: "radial-gradient(circle, #0072F9 0%, transparent 70%)",
                  animation: "blob-morph 10s ease-in-out infinite 3s",
                }}
              />
            </>
          )}

          {/* Dark theme glow */}
          {!isLight && (
            <>
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-primary glow-orb animate-pulse-soft" />
              <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-secondary glow-orb animate-pulse-soft" />
            </>
          )}

          <div className="relative z-10">
            <motion.h3
              className={`text-2xl md:text-4xl font-black mb-4 ${isLight ? "text-white" : "text-foreground"}`}
              initial={isAnimated ? { opacity: 0, y: 15 } : undefined}
              animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
              transition={isAnimated ? { delay: 0.3, duration: 0.6 } : undefined}
            >
              جاهز لتحويل فكرتك إلى شركة ناجحة؟
            </motion.h3>
            <motion.p
              className={`text-base md:text-lg mb-8 max-w-xl mx-auto ${isLight ? "text-white/70" : "text-muted-foreground"}`}
              initial={isAnimated ? { opacity: 0, y: 10 } : undefined}
              animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
              transition={isAnimated ? { delay: 0.5, duration: 0.6 } : undefined}
            >
              تواصل معنا اليوم ودعنا نبني معًا المستقبل
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={isAnimated ? { scale: 1.05, y: -2 } : undefined}
              whileTap={isAnimated ? { scale: 0.97 } : undefined}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 ${
                isLight
                  ? "bg-[#00C17A] text-white hover:bg-[#00a866] hover:shadow-lg hover:shadow-[#00C17A]/25"
                  : "bg-gradient-brand text-white hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
              }`}
            >
              ابدأ الآن
              <ArrowLeft className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
