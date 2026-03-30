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
          ? "pt-20 pb-20 md:pt-28 md:pb-28"
          : "pt-14 pb-14 md:pt-20 md:pb-20"
      }`}
      ref={ref}
    >
      {/* Dark theme glow orb */}
      {!isLight && (
        <div className="absolute right-1/3 top-1/4 w-[500px] h-[500px] bg-primary glow-orb animate-pulse-soft" />
      )}

      {/* Light theme: Large luxurious LX watermark */}
      {isLight && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.span
            className="text-[220px] md:text-[360px] font-black text-[#2B2D3F] select-none leading-none tracking-tighter"
            style={{ opacity: 0.015 }}
            initial={isAnimated ? { scale: 0.85, opacity: 0 } : undefined}
            animate={isAnimated && inView ? { scale: 1, opacity: 0.015 } : undefined}
            transition={isAnimated ? { duration: 1.8, ease: [0.16, 1, 0.3, 1] } : undefined}
          >
            LX
          </motion.span>
        </div>
      )}


      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={isAnimated ? { y: 50, opacity: 0 } : undefined}
          animate={isAnimated && inView ? { y: 0, opacity: 1 } : undefined}
          transition={isAnimated ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="text-center mb-16 md:mb-20"
        >
          {/* Tagline badge - light theme only */}
          {isLight && (
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EFEDE2] bg-white/60 backdrop-blur-sm mb-6"
              initial={isAnimated ? { y: 20, opacity: 0 } : undefined}
              animate={isAnimated && inView ? { y: 0, opacity: 1 } : undefined}
              transition={isAnimated ? { delay: 0.15, duration: 0.6 } : undefined}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C17A]" />
              <span className="text-xs font-semibold tracking-wide text-[#494C6B]">
                قيمنا — OUR VALUES
              </span>
            </motion.div>
          )}

          <h2
            className={
              isLight
                ? "text-4xl md:text-6xl font-black mb-5 text-[#2B2D3F] leading-tight"
                : "text-3xl md:text-5xl font-bold mb-5"
            }
          >
            ما الذي{" "}
            {isLight ? (
              <span className="relative inline-block">
                <span className="relative z-10">يميّزنا</span>
                <motion.span
                  className="absolute bottom-1 md:bottom-2 right-0 left-0 h-3 md:h-5 bg-[#FFD1C4] -z-0 rounded-sm"
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
          <p
            className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
              isLight ? "text-[#494C6B]" : "text-muted-foreground"
            }`}
          >
            نؤمن بأن بناء الشركات الناجحة يبدأ بقيم واضحة ورؤية متكاملة
          </p>
        </motion.div>

        {/* Bento grid - light theme / standard grid - dark theme */}
        {isLight ? (
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {/* Hero card: first value spanning full width */}
            {(() => {
              const HeroIcon = values[0].icon;
              return (
            <motion.div
              initial={isAnimated ? { opacity: 0, y: 30 } : undefined}
              animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
              transition={
                isAnimated
                  ? { delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                  : undefined
              }
              whileHover={isAnimated ? { y: -6, transition: { duration: 0.35 } } : undefined}
              className="relative overflow-hidden rounded-3xl bg-white border border-[#EFEDE2] p-8 md:p-10 group"
            >
              {/* Right accent stripe */}
              <motion.div
                className="absolute top-0 bottom-0 right-0 w-1.5 rounded-l-sm"
                style={{ backgroundColor: values[0].color, transformOrigin: "top" }}
                initial={isAnimated ? { scaleY: 0 } : undefined}
                animate={isAnimated && inView ? { scaleY: 1 } : undefined}
                transition={isAnimated ? { delay: 0.4, duration: 0.5 } : undefined}
              />

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${values[0].color}12` }}
                  whileHover={isAnimated ? { rotate: [0, -5, 5, 0] } : undefined}
                >
                  <HeroIcon
                    className="w-8 h-8 md:w-10 md:h-10"
                    style={{ color: values[0].color }}
                  />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black mb-3 text-[#2B2D3F]">
                    {values[0].title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-[#494C6B] max-w-xl">
                    {values[0].desc}
                  </p>
                </div>
              </div>
            </motion.div>
              );
            })()}

            {/* Bottom row: remaining 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.slice(1).map((v, i) => (
                <motion.div
                  key={i + 1}
                  initial={isAnimated ? { opacity: 0, y: 30 } : undefined}
                  animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
                  transition={
                    isAnimated
                      ? {
                          delay: 0.35 + i * 0.12,
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1],
                        }
                      : undefined
                  }
                  whileHover={isAnimated ? { y: -6, transition: { duration: 0.35 } } : undefined}
                  className="relative overflow-hidden rounded-3xl bg-white border border-[#EFEDE2] p-8 md:p-10 group"
                >
                  {/* Right accent stripe */}
                  <motion.div
                    className="absolute top-0 bottom-0 right-0 w-1.5 rounded-l-sm"
                    style={{ backgroundColor: v.color, transformOrigin: "top" }}
                    initial={isAnimated ? { scaleY: 0 } : undefined}
                    animate={isAnimated && inView ? { scaleY: 1 } : undefined}
                    transition={isAnimated ? { delay: 0.5 + i * 0.1, duration: 0.5 } : undefined}
                  />

                  <div className="flex flex-col gap-5">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${v.color}12` }}
                      whileHover={isAnimated ? { rotate: [0, -5, 5, 0] } : undefined}
                    >
                      <v.icon
                        className="w-7 h-7"
                        style={{ color: v.color }}
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-lg font-black mb-2 text-[#2B2D3F]">
                        {v.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#494C6B]">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
