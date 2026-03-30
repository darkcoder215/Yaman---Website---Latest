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
    <section
      id="services"
      className={`relative ${
        isLight
          ? "pt-16 pb-16 md:pt-24 md:pb-24"
          : "pt-14 pb-14 md:pt-20 md:pb-20"
      }`}
      ref={ref}
    >
      {/* Background glow — dark only */}
      {!isLight && (
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-primary glow-orb animate-pulse-soft" />
      )}


      {/* Animated decorative accent — animated dark theme only */}
      {isAnimated && !isLight && (
        <motion.div
          className="absolute left-[5%] top-[20%] w-16 h-16 rounded-2xl border-2 border-[#00C17A]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="container relative z-10">
        {/* Heading: asymmetric for light, centered for dark */}
        {isLight ? (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-6xl mx-auto mb-0"
          >
            {/* Left: heading */}
            <div className="md:w-2/5 flex-shrink-0">
              <h2 className="text-4xl md:text-5xl font-black text-[#2B2D3F] leading-tight mb-5">
                ماذا نقدم في لاندسكيب إكس؟
              </h2>
              <p className="text-base leading-relaxed text-[#494C6B]/80">
                نصمم ونبني منتجات رقمية من الفكرة إلى الإطلاق، بمنهجية استديو المنتجات.
              </p>
            </div>

            {/* Right: service blocks with divider */}
            <div className="flex-1">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    delay: isAnimated ? 0.2 + i * 0.2 : i * 0.12,
                    duration: isAnimated ? 0.7 : 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group ${i > 0 ? "pt-8 mt-8 border-t border-[#EFEDE2]" : ""}`}
                >
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00C17A]/10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-5 h-5 text-[#00C17A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2B2D3F]">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-[15px] leading-relaxed text-[#494C6B] mb-5 mr-14">
                    {s.desc}
                  </p>

                  {/* Numbered features */}
                  <div className="space-y-3 mb-5 mr-14">
                    {s.features.map((f, fi) => (
                      <motion.div
                        key={fi}
                        className="flex items-center gap-3 text-[15px] text-[#2B2D3F]"
                        initial={
                          isAnimated ? { opacity: 0, x: -8 } : undefined
                        }
                        animate={
                          isAnimated && inView
                            ? { opacity: 1, x: 0 }
                            : undefined
                        }
                        transition={
                          isAnimated
                            ? {
                                delay: 0.4 + i * 0.2 + fi * 0.08,
                                duration: 0.35,
                              }
                            : undefined
                        }
                      >
                        <span className="w-6 h-6 rounded-full bg-[#00C17A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {fi + 1}
                        </span>
                        {f}
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm text-[#494C6B] hover:text-[#00C17A] transition-colors duration-200"
                  >
                    اعرف المزيد
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-bold mb-5 text-3xl md:text-5xl">
              ماذا نقدم في{" "}
              <span className="text-gradient">لاندسكيب إكس</span>
              ؟
            </h2>
          </motion.div>
        )}

        {/* Dark theme: original 2-column grid layout — kept exactly as is */}
        {!isLight && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  delay: isAnimated ? i * 0.25 : i * 0.15,
                  duration: isAnimated ? 0.8 : 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={
                  isAnimated
                    ? { y: -6, transition: { duration: 0.4 } }
                    : undefined
                }
                className="card-premium p-8 group relative overflow-hidden flex flex-col"
              >
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary glow-orb opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

                {/* Animated corner accent */}
                {isAnimated && (
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at top right, #00C17A15, transparent 70%)",
                    }}
                  />
                )}

                <div className="relative flex-1">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10"
                    whileHover={
                      isAnimated
                        ? {
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 },
                          }
                        : undefined
                    }
                  >
                    <s.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                    {s.desc}
                  </p>

                  <div className="space-y-2">
                    {s.features.map((f, fi) => (
                      <motion.div
                        key={fi}
                        className="flex items-center gap-2 text-sm text-muted-foreground/80"
                        initial={
                          isAnimated ? { opacity: 0, x: -10 } : undefined
                        }
                        animate={
                          isAnimated && inView
                            ? { opacity: 1, x: 0 }
                            : undefined
                        }
                        transition={
                          isAnimated
                            ? {
                                delay: 0.5 + i * 0.25 + fi * 0.1,
                                duration: 0.4,
                              }
                            : undefined
                        }
                      >
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-primary/60"
                          animate={
                            isAnimated ? { scale: [1, 1.5, 1] } : undefined
                          }
                          transition={
                            isAnimated
                              ? { delay: 0.6 + fi * 0.2, duration: 0.4 }
                              : undefined
                          }
                        />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300"
                  >
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
