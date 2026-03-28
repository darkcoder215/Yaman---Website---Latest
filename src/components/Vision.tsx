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
    <section className="pt-14 pb-14 md:pt-20 md:pb-20 relative overflow-hidden" ref={ref}>
      {!isLight && (
        <div className="absolute right-1/3 top-1/4 w-[500px] h-[500px] bg-primary glow-orb animate-pulse-soft" />
      )}

      {/* Large decorative text background */}
      {isLight && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.span
            className="text-[200px] md:text-[300px] font-black text-[#000000] select-none leading-none"
            style={{ opacity: 0.02 }}
            initial={isAnimated ? { scale: 0.9, opacity: 0 } : undefined}
            animate={isAnimated && inView ? { scale: 1, opacity: 0.02 } : undefined}
            transition={isAnimated ? { duration: 1.5 } : undefined}
          >
            LX
          </motion.span>
        </div>
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            ما الذي{" "}
            {isLight ? (
              <span className="relative inline-block">
                <span className="relative z-10">يميّزنا</span>
                <motion.span
                  className="absolute bottom-1 right-0 left-0 h-3 md:h-4 bg-[#FFD1C4] -z-0 rounded-sm"
                  initial={isAnimated ? { scaleX: 0 } : undefined}
                  animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                  transition={isAnimated ? { delay: 0.4, duration: 0.6 } : undefined}
                  style={isAnimated ? { transformOrigin: "right" } : undefined}
                />
              </span>
            ) : (
              <span className="text-gradient">يميّزنا</span>
            )}
            ؟
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>
            نؤمن بأن بناء الشركات الناجحة يبدأ بقيم واضحة ورؤية متكاملة
          </p>
        </motion.div>

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
              {/* Colored left/right accent bar */}
              {isLight && (
                <motion.div
                  className="absolute top-0 bottom-0 right-0 w-1 rounded-l-sm"
                  style={{ backgroundColor: v.color, transformOrigin: "top" }}
                  initial={isAnimated ? { scaleY: 0 } : undefined}
                  animate={isAnimated && inView ? { scaleY: 1 } : undefined}
                  transition={isAnimated ? { delay: 0.4 + i * 0.1, duration: 0.5 } : undefined}
                />
              )}

              {!isLight && (
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary glow-orb opacity-0 group-hover:opacity-15 transition-opacity duration-700" />
              )}

              <div className="relative flex gap-5">
                <motion.div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isLight
                      ? "group-hover:scale-105"
                      : "bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10"
                  }`}
                  style={isLight ? { backgroundColor: `${v.color}15` } : undefined}
                  whileHover={isAnimated ? { rotate: [0, -5, 5, 0] } : undefined}
                >
                  <v.icon
                    className="w-7 h-7"
                    style={isLight ? { color: v.color } : undefined}
                    {...(!isLight && { className: "w-7 h-7 text-primary" })}
                  />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{v.title}</h3>
                  <p className={`text-sm leading-relaxed ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>
                    {v.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
