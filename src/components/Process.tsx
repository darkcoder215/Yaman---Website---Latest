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

  return (
    <section className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
      {!isLight && (
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent glow-orb animate-pulse-soft" />
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            كيف{" "}
            {isLight ? (
              <span className="relative inline-block">
                <span className="relative z-10">نعمل</span>
                <motion.span
                  className="absolute bottom-1 right-0 left-0 h-3 md:h-4 bg-[#AFE2EA] -z-0 rounded-sm"
                  initial={isAnimated ? { scaleX: 0 } : undefined}
                  animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                  transition={isAnimated ? { delay: 0.4, duration: 0.6 } : undefined}
                  style={isAnimated ? { transformOrigin: "right" } : undefined}
                />
              </span>
            ) : (
              <span className="text-gradient">نعمل</span>
            )}
            ؟
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>
            أربع مراحل واضحة من الفكرة إلى الشركة المستقلة
          </p>
        </motion.div>

        {/* Desktop: horizontal, Mobile: vertical */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {/* Connecting line — desktop only */}
          <div className={`hidden md:block absolute top-16 right-[12%] left-[12%] h-px ${
            isLight ? "bg-[#EFEDE2]" : "bg-border/30"
          }`}>
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
              {/* Step circle */}
              <motion.div
                className={`w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center relative z-10 ${
                  isLight ? "" : "bg-card border border-border/30"
                }`}
                style={isLight ? { backgroundColor: `${step.color}12` } : undefined}
                whileHover={isAnimated ? { rotate: [0, -5, 5, 0], scale: 1.1 } : undefined}
              >
                <step.icon
                  className="w-6 h-6"
                  style={isLight ? { color: step.color } : undefined}
                  {...(!isLight && { className: "w-6 h-6 text-primary" })}
                />
              </motion.div>

              {/* Number */}
              {isLight ? (
                <div className="relative inline-block mb-3">
                  <span className="text-2xl font-black text-[#000000] relative z-10">{step.number}</span>
                  <motion.span
                    className="absolute bottom-0 right-0 left-0 h-2 -z-0 rounded-sm"
                    style={{ backgroundColor: step.highlightBg }}
                    initial={isAnimated ? { scaleX: 0 } : undefined}
                    animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                    transition={isAnimated ? { delay: 0.5 + i * 0.15, duration: 0.4 } : undefined}
                  />
                </div>
              ) : (
                <p className="text-2xl font-black text-gradient mb-3">{step.number}</p>
              )}

              <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">{step.title}</h3>
              <p className={`text-xs md:text-sm leading-relaxed ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>
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
