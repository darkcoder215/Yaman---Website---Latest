import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Hammer, Settings, ArrowRightLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const phases = [
  {
    key: "transfer",
    letter: "T",
    title: "Transfer",
    titleAr: "النقل",
    icon: ArrowRightLeft,
    color: "from-accent to-primary",
    editorialColor: "#0072F9",
    glowColor: "hsl(200 80% 55%)",
    description: "ننقل الملكية والإدارة بالكامل إلى المستثمر أو الشريك مع ضمان استمرارية النجاح.",
    points: [
      "نقل الملكية الفكرية والتقنية",
      "تدريب الفريق الجديد",
      "ضمان استمرارية التشغيل",
      "دعم ما بعد النقل",
    ],
  },
  {
    key: "operate",
    letter: "O",
    title: "Operate",
    titleAr: "التشغيل",
    icon: Settings,
    color: "from-secondary to-accent",
    editorialColor: "#FFBC0A",
    glowColor: "hsl(275 65% 50%)",
    description: "ندير العمليات اليومية ونحقق النمو المستدام مع أتمتة العمليات التشغيلية.",
    points: [
      "إدارة العمليات والفريق",
      "أتمتة تصل إلى 80% من التشغيل",
      "تحسين مستمر للأداء والربحية",
      "توسيع قاعدة العملاء والشراكات",
    ],
  },
  {
    key: "build",
    letter: "B",
    title: "Build",
    titleAr: "البناء",
    icon: Hammer,
    color: "from-primary to-secondary",
    editorialColor: "#00C17A",
    glowColor: "hsl(250 80% 60%)",
    description: "نبني المنتج من الصفر — من الفكرة إلى النموذج الأولي إلى الإطلاق الكامل.",
    points: [
      "تصميم المنتج وتجربة المستخدم",
      "التطوير التقني والبنية التحتية",
      "اختبار السوق والتحقق من الطلب",
      "بناء الفريق الأساسي",
    ],
  },
];

const BotFramework = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePhase, setActivePhase] = useState(0);
  const { isLight, isAnimated } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="bot-framework"
      className={`relative overflow-hidden ${
        isLight
          ? "pt-20 pb-20 md:pt-28 md:pb-28 bg-[#F7F4EE]"
          : "pt-14 pb-14 md:pt-20 md:pb-20"
      }`}
      ref={ref}
    >
      {/* Background orb — dark only */}
      {!isLight && (
        <motion.div
          className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: phases[activePhase].glowColor, filter: "blur(120px)", opacity: 0.08 }}
          animate={{ background: phases[activePhase].glowColor }}
          transition={{ duration: 1.5 }}
        />
      )}

      {/* Animated background blob */}
      {isAnimated && (
        <motion.div
          className="absolute right-[10%] top-[20%] w-[300px] h-[300px] rounded-full opacity-[0.06]"
          style={{
            background: phases[activePhase].editorialColor,
            filter: "blur(80px)",
            animation: "blob-morph 10s ease-in-out infinite",
          }}
          animate={{ background: phases[activePhase].editorialColor }}
          transition={{ duration: 1 }}
        />
      )}

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          {/* Tagline badge — light only */}
          {isLight && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#EFEDE2] bg-white/80 backdrop-blur-sm mb-6"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: phases[activePhase].editorialColor }}
              />
              <span className="text-xs font-bold tracking-widest text-[#494C6B] uppercase">
                إطار العمل — BOT FRAMEWORK
              </span>
            </motion.div>
          )}

          <h2
            className={`font-black mb-5 ${
              isLight
                ? "text-4xl md:text-6xl text-[#2B2D3F]"
                : "text-3xl md:text-5xl"
            }`}
          >
            نبني، نشغّل، وننقل:
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>
            إطار عمل متكامل لتحويل الأفكار إلى شركات مستدامة
          </p>
        </motion.div>

        {/* BOT Letters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-3 md:gap-6 mb-16"
          dir="ltr"
        >
          {phases.map((phase, i) => {
            const isActive = activePhase === i;
            const Icon = phase.icon;
            return (
              <motion.button
                key={phase.key}
                onClick={() => setActivePhase(i)}
                whileHover={isAnimated ? { scale: 1.1, y: -4 } : { scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`relative group cursor-pointer transition-all duration-700 ${
                  isActive ? "z-10" : isLight ? "opacity-50 hover:opacity-75" : "opacity-40 hover:opacity-70"
                }`}
              >
                {/* Glow ring — dark only */}
                {isActive && !isLight && (
                  <motion.div
                    layoutId="bot-glow"
                    className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${phase.color} opacity-20 blur-xl`}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}

                {/* Animated ring — animated editorial */}
                {isActive && isAnimated && (
                  <motion.div
                    layoutId="bot-ring-animated"
                    className="absolute -inset-2 rounded-3xl border-2 opacity-30"
                    style={{ borderColor: phase.editorialColor }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                  />
                )}

                {/* Light theme: premium card with colored bottom border */}
                {isLight ? (
                  <div
                    className={`relative flex flex-col items-center gap-3 px-8 py-6 md:px-12 md:py-9 rounded-2xl transition-all duration-500 ${
                      isActive
                        ? "bg-white shadow-xl border border-[#EFEDE2]"
                        : "bg-white/40 border border-[#EFEDE2]/60"
                    }`}
                    style={
                      isActive
                        ? { borderBottomWidth: "4px", borderBottomColor: phase.editorialColor }
                        : undefined
                    }
                  >
                    <motion.span
                      className={`text-5xl md:text-7xl font-black tracking-tighter transition-all duration-500 ${
                        isActive ? "text-[#2B2D3F]" : "text-[#2B2D3F]/40"
                      }`}
                      animate={isAnimated && isActive ? { scale: [1, 1.05, 1] } : undefined}
                      transition={isAnimated ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
                    >
                      {phase.letter}
                    </motion.span>
                    <div className="flex items-center gap-2">
                      <Icon
                        className={`w-4 h-4 transition-colors duration-500 ${
                          isActive ? "" : "text-[#494C6B]/50"
                        }`}
                        style={isActive ? { color: phase.editorialColor } : undefined}
                      />
                      <span
                        className={`text-sm font-bold transition-colors duration-500 ${
                          isActive ? "text-[#2B2D3F]" : "text-[#494C6B]/60"
                        }`}
                      >
                        {phase.title}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Dark theme: original styling */
                  <div
                    className={`relative flex flex-col items-center gap-2 px-6 py-5 md:px-10 md:py-7 rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? "border-primary/40 bg-card shadow-2xl shadow-primary/10"
                        : "border-border/30 bg-card/50"
                    }`}
                  >
                    <motion.span
                      className={`text-4xl md:text-6xl font-black tracking-tighter transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-br ${phase.color}`}
                      animate={isAnimated && isActive ? { scale: [1, 1.05, 1] } : undefined}
                      transition={isAnimated ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : undefined}
                    >
                      {phase.letter}
                    </motion.span>
                    <div className="flex items-center gap-1.5">
                      <Icon className={`w-3.5 h-3.5 transition-colors duration-500 ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <span className={`text-xs font-bold transition-colors duration-500 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {phase.title}
                      </span>
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Phase Detail Card */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: isAnimated ? 30 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isAnimated ? 0.9 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {isLight ? (
            /* Light theme: premium editorial card */
            <div className="relative bg-white rounded-2xl p-10 md:p-14 border border-[#EFEDE2] shadow-lg overflow-hidden">
              {/* Colored accent line at top */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                style={{ backgroundColor: phases[activePhase].editorialColor }}
                initial={isAnimated ? { scaleX: 0, transformOrigin: "right" } : { scaleX: 1 }}
                animate={{ scaleX: 1 }}
                transition={isAnimated ? { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] } : undefined}
              />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon in larger colored circle */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: phases[activePhase].editorialColor }}
                    whileHover={isAnimated ? { rotate: [0, -10, 10, 0], transition: { duration: 0.5 } } : undefined}
                  >
                    {(() => {
                      const Icon = phases[activePhase].icon;
                      return <Icon className="w-7 h-7 text-white" />;
                    })()}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#2B2D3F]">
                      {phases[activePhase].titleAr}
                    </h3>
                    <p className="text-sm font-semibold text-[#494C6B] tracking-wide">
                      {phases[activePhase].title}
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg font-medium leading-relaxed mb-10 text-[#494C6B]">
                  {phases[activePhase].description}
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {phases[activePhase].points.map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: isAnimated ? 0.2 + i * 0.15 : 0.1 + i * 0.1, duration: 0.5 }}
                      whileHover={isAnimated ? { x: 4, transition: { duration: 0.2 } } : undefined}
                      className="flex items-center gap-4 p-4 md:p-5 rounded-xl bg-[#F7F4EE]/70 border border-[#EFEDE2]"
                    >
                      <motion.div
                        className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{ backgroundColor: phases[activePhase].editorialColor }}
                        animate={isAnimated ? { scale: [1, 1.1, 1] } : undefined}
                        transition={isAnimated ? { delay: 0.3 + i * 0.15, duration: 0.4 } : undefined}
                      >
                        <span className="text-xs font-bold text-white">{i + 1}</span>
                      </motion.div>
                      <span className="text-base font-semibold text-[#2B2D3F]">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Dark theme: original card */
            <div className="card-premium p-8 md:p-12 relative overflow-hidden">
              {/* Top accent bar */}
              <motion.div
                className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${phases[activePhase].color}`}
                initial={isAnimated ? { width: 0 } : { width: "100%" }}
                animate={{ width: "100%" }}
                transition={isAnimated ? { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] } : undefined}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${phases[activePhase].color}`}
                    whileHover={isAnimated ? { rotate: [0, -10, 10, 0], transition: { duration: 0.5 } } : undefined}
                  >
                    {(() => {
                      const Icon = phases[activePhase].icon;
                      return <Icon className="w-5 h-5 text-white" />;
                    })()}
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-foreground">
                      {phases[activePhase].titleAr}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {phases[activePhase].title}
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base font-medium leading-relaxed mb-8 text-foreground/80">
                  {phases[activePhase].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {phases[activePhase].points.map((point, i) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: isAnimated ? 0.2 + i * 0.15 : 0.1 + i * 0.1, duration: 0.5 }}
                      whileHover={isAnimated ? { x: 4, transition: { duration: 0.2 } } : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl border bg-muted/30 border-border/20"
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-br ${phases[activePhase].color}`}
                        animate={isAnimated ? { scale: [1, 1.4, 1] } : undefined}
                        transition={isAnimated ? { delay: 0.3 + i * 0.15, duration: 0.4 } : undefined}
                      />
                      <span className="text-sm font-semibold text-foreground/80">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {phases.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActivePhase(i)}
              whileHover={isAnimated ? { scale: 1.3 } : undefined}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === activePhase
                  ? `w-7 ${isLight ? "bg-[#00C17A]" : "bg-primary"}`
                  : `w-2.5 ${isLight ? "bg-[#EFEDE2] hover:bg-[#D1C4E2]" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
              }`}
              layout={isAnimated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotFramework;
