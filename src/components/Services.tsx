import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Building2, ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const services = [
  {
    icon: Package,
    title: "بناء الشركات الناشئة داخليًا",
    desc: "نركز على قطاع التقنية المالية في بناء الشركات الناشئة داخليًا.",
    features: ["الإطلاق والاختبار", "التشغيل والتطوير", "بناء الفريق"],
  },
  {
    icon: Building2,
    title: "بناء استديو المنتجات للشركات",
    desc: "نقدم خدمة بناء استديو المنتجات داخل الشركات العائلية والجهات الحكومية.",
    features: ["تحليل المُمكّنات", "هاكاثونات الابتكار", "بناء النماذج الأولية"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { isLight, isAnimated } = useTheme();

  return (
    <section id="services" className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
      {/* Background glow — dark only */}
      {!isLight && (
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-primary glow-orb animate-pulse-soft" />
      )}

      {/* Animated decorative accent — animated editorial only */}
      {isAnimated && (
        <motion.div
          className="absolute left-[5%] top-[20%] w-16 h-16 rounded-2xl border-2 border-[#00C17A]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            ماذا نقدم في{" "}
            {isLight ? (
              <span className="relative inline-block">
                <span className="relative z-10">لاندسكيب إكس</span>
                <motion.span
                  className="absolute bottom-1 right-0 left-0 h-3 md:h-4 bg-[#B5E8BE] -z-0 rounded-sm"
                  initial={isAnimated ? { scaleX: 0 } : undefined}
                  animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                  transition={isAnimated ? { delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] } : undefined}
                  style={isAnimated ? { transformOrigin: "right" } : undefined}
                />
              </span>
            ) : (
              <span className="text-gradient">لاندسكيب إكس</span>
            )}
            ؟
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: isAnimated ? i * 0.25 : i * 0.15, duration: isAnimated ? 0.8 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={isAnimated ? { y: -6, transition: { duration: 0.4 } } : undefined}
              className="card-premium p-8 group relative overflow-hidden flex flex-col"
            >
              {!isLight && (
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary glow-orb opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              )}

              {/* Animated corner accent */}
              {isAnimated && (
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at top right, #00C17A15, transparent 70%)",
                  }}
                />
              )}

              <div className="relative flex-1">
                <motion.div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    isLight
                      ? "bg-[#00C17A]/10 group-hover:bg-[#00C17A]/20"
                      : "bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10"
                  }`}
                  whileHover={isAnimated ? { rotate: [0, -5, 5, 0], transition: { duration: 0.5 } } : undefined}
                >
                  <s.icon className={`w-7 h-7 ${isLight ? "text-[#00C17A]" : "text-primary"}`} />
                </motion.div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>{s.desc}</p>

                <div className="space-y-2">
                  {s.features.map((f, fi) => (
                    <motion.div
                      key={fi}
                      className={`flex items-center gap-2 text-sm ${isLight ? "text-[#494C6B]" : "text-muted-foreground/80"}`}
                      initial={isAnimated ? { opacity: 0, x: -10 } : undefined}
                      animate={isAnimated && inView ? { opacity: 1, x: 0 } : undefined}
                      transition={isAnimated ? { delay: 0.5 + i * 0.25 + fi * 0.1, duration: 0.4 } : undefined}
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full ${isLight ? "bg-[#00C17A]" : "bg-primary/60"}`}
                        animate={isAnimated ? { scale: [1, 1.5, 1] } : undefined}
                        transition={isAnimated ? { delay: 0.6 + fi * 0.2, duration: 0.4 } : undefined}
                      />
                      {f}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <a href="#contact" className={`inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300 ${
                  isLight ? "text-[#00C17A]" : "text-primary"
                }`}>
                  اعرف المزيد
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
