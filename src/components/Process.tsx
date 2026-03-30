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

  // ── Light theme: clean 4-column grid ──
  return (
    <section
      className="pt-16 pb-16 md:pt-24 md:pb-24 relative overflow-hidden"
      ref={ref}
    >
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={isAnimated ? { y: 50, opacity: 0 } : undefined}
          animate={isAnimated && inView ? { y: 0, opacity: 1 } : undefined}
          transition={isAnimated ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="text-right mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#2B2D3F] mb-5 leading-tight">
            كيف نعمل؟
          </h2>
          <p className="text-base md:text-lg max-w-2xl text-[#494C6B] leading-relaxed">
            أربع مراحل واضحة من الفكرة إلى الشركة المستقلة
          </p>
        </motion.div>

        {/* 4-column grid with connecting line */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden md:block absolute top-5 right-[12%] left-[12%] h-px" style={{ backgroundColor: "#EFEDE2" }}>
            {isAnimated && (
              <motion.div
                className="h-full bg-[#EFEDE2]"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "right" }}
              />
            )}
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
              animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
              transition={
                isAnimated
                  ? { delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                  : undefined
              }
              className="text-center relative"
            >
              {/* Numbered circle */}
              <motion.div
                className="w-10 h-10 rounded-full mx-auto mb-5 flex items-center justify-center relative z-10 text-white text-sm font-bold"
                style={{ backgroundColor: step.color }}
                initial={isAnimated ? { scale: 0 } : undefined}
                animate={isAnimated && inView ? { scale: 1 } : undefined}
                transition={isAnimated ? { delay: 0.3 + i * 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] } : undefined}
              >
                {step.number}
              </motion.div>

              <h3 className="font-bold text-[#2B2D3F] mb-2 text-sm md:text-base">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-[#494C6B]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
