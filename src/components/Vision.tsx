import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Lightbulb, Shield, Flame } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const values = [
  {
    icon: Compass,
    title: "الرؤية الواضحة",
    desc: "نرسم طريقًا واضحًا من الفكرة إلى الشركة الناجحة، بمنهجية مدروسة وخطوات محسوبة.",
    color: "#00C17A",
    lightBg: "#B5E8BE",
  },
  {
    icon: Lightbulb,
    title: "الابتكار العملي",
    desc: "نجمع بين الإبداع والتنفيذ — كل فكرة نطرحها مبنية على احتياج حقيقي وقابلة للتطبيق.",
    color: "#0072F9",
    lightBg: "#AFE2EA",
  },
  {
    icon: Shield,
    title: "الثقة والشفافية",
    desc: "نبني علاقات طويلة الأمد مع شركائنا من خلال الشفافية الكاملة في كل مرحلة.",
    color: "#FFBC0A",
    lightBg: "#F9E59E",
  },
  {
    icon: Flame,
    title: "الشغف المستدام",
    desc: "لا نبني شركات فحسب — بل نبني فرقًا شغوفة قادرة على الاستمرار والنمو بعد انطلاقها.",
    color: "#F24935",
    lightBg: "#FFD1C4",
  },
];

const Vision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { isLight, isAnimated } = useTheme();

  return (
    <section
      className={`relative overflow-hidden ${
        isLight
          ? "pt-16 pb-16 md:pt-24 md:pb-24"
          : "pt-14 pb-14 md:pt-20 md:pb-20"
      }`}
      ref={ref}
    >
      {/* Dark theme glow orb */}
      {!isLight && (
        <div className="absolute right-1/3 top-1/4 w-[500px] h-[500px] bg-primary glow-orb animate-pulse-soft" />
      )}

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={isAnimated ? { y: 50, opacity: 0 } : undefined}
          animate={isAnimated && inView ? { y: 0, opacity: 1 } : undefined}
          transition={isAnimated ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : undefined}
          className={isLight ? "text-right mb-12 md:mb-16" : "text-center mb-16 md:mb-20"}
        >
          <h2
            className={
              isLight
                ? "text-4xl md:text-5xl font-black mb-5 text-[#2B2D3F] leading-tight"
                : "text-3xl md:text-5xl font-bold mb-5"
            }
          >
            {isLight ? (
              "ما الذي يميّزنا؟"
            ) : (
              <>
                ما الذي{" "}
                <span className="text-gradient">يميّزنا</span>
                ؟
              </>
            )}
          </h2>
          <p
            className={`text-base md:text-lg max-w-2xl leading-relaxed ${
              isLight ? "text-[#494C6B]" : "text-muted-foreground mx-auto"
            }`}
          >
            نؤمن بأن بناء الشركات الناجحة يبدأ بقيم واضحة ورؤية متكاملة
          </p>
        </motion.div>

        {/* Light theme: clean vertical list with dividers */}
        {isLight ? (
          <div className="max-w-3xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
                animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
                transition={
                  isAnimated
                    ? { delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                    : undefined
                }
              >
                <div className="flex items-start gap-5 py-7">
                  {/* Title + description on the right (RTL layout) */}
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold text-[#2B2D3F] mb-1.5">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#494C6B]">
                      {v.desc}
                    </p>
                  </div>

                  {/* Icon in small colored circle on the left (appears on right in RTL) */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${v.color}15` }}
                  >
                    <v.icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                </div>

                {/* Thin divider between rows */}
                {i < values.length - 1 && (
                  <div className="h-px w-full" style={{ backgroundColor: "#EFEDE2" }} />
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          /* Dark theme: original 2x2 grid - kept exactly as is */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={isAnimated ? { y: -6, transition: { duration: 0.35 } } : undefined}
                className="card-premium p-7 md:p-8 group relative overflow-hidden"
              >
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary glow-orb opacity-0 group-hover:opacity-15 transition-opacity duration-700" />

                <div className="relative flex gap-5">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10"
                    whileHover={isAnimated ? { rotate: [0, -5, 5, 0] } : undefined}
                  >
                    <v.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Vision;
