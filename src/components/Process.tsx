import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FlaskConical, Code2, Rocket } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "التواصل والاستكشاف",
    desc: "نبدأ بفهم رؤيتك وأهدافك من خلال جلسات عمل متعمقة مع فريقك.",
    color: "#00C17A",
    highlightBg: "#B5E8BE",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "البحث والتحقق",
    desc: "نحلل السوق والمنافسين ونتحقق من جدوى الفكرة قبل البناء.",
    color: "#0072F9",
    highlightBg: "#AFE2EA",
  },
  {
    icon: Code2,
    number: "03",
    title: "التصميم والبناء",
    desc: "نبني المنتج من الصفر بمنهجية رشيقة مع اختبار مستمر.",
    color: "#FFBC0A",
    highlightBg: "#F9E59E",
  },
  {
    icon: Rocket,
    number: "04",
    title: "الإطلاق والنمو",
    desc: "نطلق المنتج ونديره ونحقق النمو حتى نقل الملكية الكاملة.",
    color: "#F24935",
    highlightBg: "#FFD1C4",
  },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { isLight, isAnimated } = useTheme();

  if (!isLight) {
    // ── Dark theme: original layout ──
    return (
      <section className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent glow-orb animate-pulse-soft" />

        <div className="container relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              كيف <span className="text-gradient">نعمل</span>؟
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-muted-foreground">
              أربع مراحل واضحة من الفكرة إلى الشركة المستقلة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-16 right-[12%] left-[12%] h-px bg-border/30">
              {isAnimated && (
                <motion.div
                  className="h-full bg-[#00C17A]"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "right" }}
                />
              )}
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={isAnimated ? { y: -8, transition: { duration: 0.35 } } : undefined}
                className="text-center relative"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center relative z-10 bg-card border border-border/30"
                  whileHover={isAnimated ? { rotate: [0, -5, 5, 0], scale: 1.1 } : undefined}
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <p className="text-2xl font-black text-gradient mb-3">{step.number}</p>
                <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">{step.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Light theme: luxury editorial timeline ──
  return (
    <section
      className="pt-20 pb-20 md:pt-28 md:pb-28 relative overflow-hidden"
      ref={ref}
    >

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={isAnimated ? { y: 50, opacity: 0 } : undefined}
          animate={isAnimated && inView ? { y: 0, opacity: 1 } : undefined}
          transition={isAnimated ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="text-center mb-20 md:mb-28"
        >
          {/* Tagline badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFEDE2] text-xs font-medium tracking-wide text-[#494C6B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C17A] inline-block" />
              منهجيتنا — OUR PROCESS
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2B2D3F] mb-6 leading-tight">
            كيف{" "}
            <span className="relative inline-block">
              <span className="relative z-10">نعمل</span>
              <motion.span
                className="absolute bottom-2 md:bottom-3 right-0 left-0 h-3 md:h-5 bg-[#AFE2EA] -z-0 rounded-sm"
                initial={isAnimated ? { scaleX: 0 } : undefined}
                animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                transition={isAnimated ? { delay: 0.4, duration: 0.6 } : undefined}
                style={isAnimated ? { transformOrigin: "right" } : undefined}
              />
            </span>
            ؟
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#494C6B] leading-relaxed">
            أربع مراحل واضحة من الفكرة إلى الشركة المستقلة
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* ── Vertical connecting line (center on desktop, left on mobile) ── */}
          <div className="absolute top-0 bottom-0 right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 w-px bg-[#EFEDE2]">
            {isAnimated && (
              <motion.div
                className="w-full bg-[#00C17A]"
                initial={{ height: 0 }}
                animate={inView ? { height: "100%" } : {}}
                transition={{ delay: 0.6, duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top" }}
              />
            )}
          </div>

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <div key={i} className="relative mb-12 last:mb-0">
                {/* ── Step number circle on the line ── */}
                <motion.div
                  initial={isAnimated ? { scale: 0, opacity: 0 } : undefined}
                  animate={isAnimated && inView ? { scale: 1, opacity: 1 } : undefined}
                  transition={isAnimated ? { delay: 0.4 + i * 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] } : undefined}
                  className="absolute top-8 right-1 md:right-auto md:left-1/2 md:-translate-x-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </motion.div>

                {/* ── Card ── */}
                <motion.div
                  initial={isAnimated ? { opacity: 0, x: isEven ? 40 : -40 } : undefined}
                  animate={isAnimated && inView ? { opacity: 1, x: 0 } : undefined}
                  transition={isAnimated ? { delay: 0.3 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] } : undefined}
                  whileHover={isAnimated ? { y: -4, transition: { duration: 0.3 } } : undefined}
                  className={`
                    relative mr-16
                    md:mr-0 md:w-[calc(50%-40px)]
                    ${isEven ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}
                    bg-white rounded-2xl p-8 md:p-10
                    border border-[#EFEDE2]
                    shadow-[0_2px_20px_rgba(0,0,0,0.04)]
                    transition-shadow duration-300
                    hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]
                  `}
                >
                  {/* Colored accent bar */}
                  <div
                    className="absolute top-6 right-0 w-1 h-12 rounded-l-full"
                    style={{ backgroundColor: step.color }}
                  />

                  <div className="flex items-start gap-5">
                    {/* Icon container */}
                    <motion.div
                      className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}12` }}
                      whileHover={isAnimated ? { rotate: [0, -5, 5, 0], scale: 1.1 } : undefined}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    </motion.div>

                    <div className="flex-1 text-right">
                      {/* Step number with highlight */}
                      <div className="relative inline-block mb-2">
                        <span className="text-3xl font-black text-[#2B2D3F] relative z-10">
                          {step.number}
                        </span>
                        <motion.span
                          className="absolute bottom-0 right-0 left-0 h-2.5 -z-0 rounded-sm"
                          style={{ backgroundColor: step.highlightBg }}
                          initial={isAnimated ? { scaleX: 0 } : undefined}
                          animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                          transition={isAnimated ? { delay: 0.5 + i * 0.15, duration: 0.4 } : undefined}
                          {...(isAnimated ? { style: { backgroundColor: step.highlightBg, transformOrigin: "right" } } : { style: { backgroundColor: step.highlightBg } })}
                        />
                      </div>

                      <h3 className="font-black text-[#2B2D3F] text-lg md:text-xl mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#494C6B] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
