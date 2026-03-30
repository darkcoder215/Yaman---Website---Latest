import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const CtaBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { isLight, isAnimated } = useTheme();

  const trustIndicators = [
    { value: "15+", label: "شريك" },
    { value: "45+", label: "عام خبرة" },
    { value: "100+", label: "مشروع" },
  ];

  return (
    <section className="py-10 md:py-14 relative overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden text-center ${
            isLight
              ? "bg-[#000000] rounded-[2rem] p-12 md:p-20"
              : "bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border/30 rounded-3xl p-10 md:p-16"
          }`}
        >
          {/* Light theme: geometric dot pattern overlay */}
          {isLight && (
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          )}

          {/* Animated background elements — animated editorial (light) */}
          {isLight && isAnimated && (
            <>
              <motion.div
                className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.08]"
                style={{
                  background:
                    "radial-gradient(circle, #00C17A 0%, transparent 70%)",
                  animation: "blob-morph 8s ease-in-out infinite",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full opacity-[0.06]"
                style={{
                  background:
                    "radial-gradient(circle, #0072F9 0%, transparent 70%)",
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
              className={`font-black mb-4 ${
                isLight
                  ? "text-3xl md:text-5xl text-white"
                  : "text-2xl md:text-4xl text-foreground"
              }`}
              initial={isAnimated ? { opacity: 0, y: 15 } : undefined}
              animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
              transition={
                isAnimated ? { delay: 0.3, duration: 0.6 } : undefined
              }
            >
              جاهز لتحويل فكرتك إلى شركة ناجحة؟
            </motion.h3>

            <motion.p
              className={`mb-10 max-w-xl mx-auto ${
                isLight
                  ? "text-lg text-white/60"
                  : "text-base md:text-lg text-muted-foreground"
              }`}
              initial={isAnimated ? { opacity: 0, y: 10 } : undefined}
              animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
              transition={
                isAnimated ? { delay: 0.5, duration: 0.6 } : undefined
              }
            >
              تواصل معنا اليوم ودعنا نبني معًا المستقبل
            </motion.p>

            {/* CTA Buttons */}
            {isLight ? (
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                initial={isAnimated ? { opacity: 0, y: 10 } : undefined}
                animate={
                  isAnimated && inView ? { opacity: 1, y: 0 } : undefined
                }
                transition={
                  isAnimated ? { delay: 0.7, duration: 0.6 } : undefined
                }
              >
                <motion.a
                  href="#contact"
                  whileHover={
                    isAnimated ? { scale: 1.05, y: -2 } : undefined
                  }
                  whileTap={isAnimated ? { scale: 0.97 } : undefined}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium text-base bg-[#00C17A] text-white hover:bg-[#00a866] hover:shadow-lg hover:shadow-[#00C17A]/25 transition-all duration-300"
                >
                  ابدأ الآن
                  <ArrowLeft className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={
                    isAnimated ? { scale: 1.05, y: -2 } : undefined
                  }
                  whileTap={isAnimated ? { scale: 0.97 } : undefined}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium text-base border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  تعرّف على خدماتنا
                </motion.a>
              </motion.div>
            ) : (
              <motion.a
                href="#contact"
                whileHover={
                  isAnimated ? { scale: 1.05, y: -2 } : undefined
                }
                whileTap={isAnimated ? { scale: 0.97 } : undefined}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base transition-all duration-300 bg-gradient-brand text-white hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                ابدأ الآن
                <ArrowLeft className="w-4 h-4" />
              </motion.a>
            )}

            {/* Trust indicators — light theme only */}
            {isLight && (
              <motion.div
                className="flex items-center justify-center gap-8 md:gap-12"
                initial={isAnimated ? { opacity: 0 } : undefined}
                animate={
                  isAnimated && inView ? { opacity: 1 } : undefined
                }
                transition={
                  isAnimated ? { delay: 0.9, duration: 0.6 } : undefined
                }
              >
                {trustIndicators.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center"
                    initial={isAnimated ? { opacity: 0, y: 10 } : undefined}
                    animate={
                      isAnimated && inView
                        ? { opacity: 1, y: 0 }
                        : undefined
                    }
                    transition={
                      isAnimated
                        ? { delay: 1.0 + i * 0.15, duration: 0.5 }
                        : undefined
                    }
                  >
                    <span className="text-xl md:text-2xl font-bold text-[#00C17A]">
                      {item.value}
                    </span>
                    <span className="text-xs md:text-sm text-white/40 mt-1">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
