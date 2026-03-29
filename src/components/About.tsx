import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const AnimatedNumber = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return <span ref={ref}>{prefix}{value}{suffix}</span>;
};

const stats = [
  { number: 45, prefix: "+", suffix: "", label: "عام من الخبرات المتراكمة", desc: "في بناء الشركات والابتكار والاستثمار", highlightColor: "#B5E8BE" },
  { number: 9, prefix: "+", suffix: "", label: "سنوات في تأسيس الشركات", desc: "خبرة عملية في ريادة الأعمال", highlightColor: "#F9E59E" },
  { number: 80, prefix: "", suffix: "%", label: "أتمتة التشغيل المستهدفة", desc: "لتقليل التكلفة وتحسين الربحية", highlightColor: "#AFE2EA" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { isLight, isAnimated } = useTheme();

  if (!isLight) {
    return (
      <section id="about" className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
        <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-accent glow-orb animate-pulse-soft" />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              عن{" "}
              <span className="text-gradient">لاندسكيب إكس</span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
              نمزج بين المنهجيات المتعددة بهدف استكشاف وصناعة وحماية القيمة لعملاء ومستثمري لاندسكيب إكس
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={isAnimated ? { y: -6, transition: { duration: 0.35 } } : undefined}
                className="card-premium p-8 md:p-10 text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary glow-orb opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold text-gradient-warm mb-3">
                    <AnimatedNumber target={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Light theme: luxury editorial redesign
  return (
    <section id="about" className="pt-20 pb-20 md:pt-28 md:pb-28 relative overflow-hidden" ref={ref}>
      {/* Background dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #494C6B 0.7px, transparent 0.7px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Geometric accent - top right partial circle */}
      <motion.div
        className="absolute -top-32 -right-32 w-[380px] h-[380px] rounded-full border-[1.5px] border-[#00C17A] opacity-[0.12] pointer-events-none"
        initial={isAnimated ? { scale: 0.7, opacity: 0 } : undefined}
        animate={isAnimated && inView ? { scale: 1, opacity: 0.12 } : undefined}
        transition={isAnimated ? { duration: 1.2, ease: "easeOut" } : undefined}
      />

      {/* Geometric accent - bottom left partial circle */}
      <motion.div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border-[1.5px] border-[#0072F9] opacity-[0.08] pointer-events-none"
        initial={isAnimated ? { scale: 0.7, opacity: 0 } : undefined}
        animate={isAnimated && inView ? { scale: 1, opacity: 0.08 } : undefined}
        transition={isAnimated ? { duration: 1.4, delay: 0.2, ease: "easeOut" } : undefined}
      />

      {/* Small geometric accent - mid left */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -left-16 w-[180px] h-[180px] rounded-full border border-[#FFBC0A] opacity-[0.10] pointer-events-none"
        initial={isAnimated ? { scale: 0.5, opacity: 0 } : undefined}
        animate={isAnimated && inView ? { scale: 1, opacity: 0.10 } : undefined}
        transition={isAnimated ? { duration: 1, delay: 0.4, ease: "easeOut" } : undefined}
      />

      <div className="container relative z-10">
        {/* Tagline badge */}
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
          animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
          transition={isAnimated ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EFEDE2] bg-white/60 backdrop-blur-sm text-xs font-semibold tracking-[0.15em] text-[#494C6B] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C17A]" />
            عن الاستوديو
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 40 } : undefined}
          animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
          transition={isAnimated ? { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2B2D3F] mb-6 leading-[1.1] tracking-tight">
            نبني{" "}
            <span className="relative inline-block">
              <span className="relative z-10">المستقبل</span>
              <motion.span
                className="absolute bottom-2 md:bottom-3 right-0 left-0 h-3 md:h-5 bg-[#00C17A]/25 -z-0 rounded-sm"
                initial={isAnimated ? { scaleX: 0 } : undefined}
                animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                transition={isAnimated ? { delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] } : undefined}
                style={isAnimated ? { transformOrigin: "right" } : undefined}
              />
            </span>
            {" "}مع{" "}
            <span className="relative inline-block">
              <span className="relative z-10">لاندسكيب إكس</span>
              <motion.span
                className="absolute bottom-2 md:bottom-3 right-0 left-0 h-3 md:h-5 bg-[#0072F9]/20 -z-0 rounded-sm"
                initial={isAnimated ? { scaleX: 0 } : undefined}
                animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                transition={isAnimated ? { delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] } : undefined}
                style={isAnimated ? { transformOrigin: "right" } : undefined}
              />
            </span>
          </h2>
        </motion.div>

        {/* Mission paragraph */}
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 30 } : undefined}
          animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
          transition={isAnimated ? { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-[1.9] text-[#494C6B] font-light">
            نمزج بين المنهجيات المتعددة بهدف استكشاف وصناعة وحماية القيمة لعملاء ومستثمري لاندسكيب إكس.
            نؤمن بأن الابتكار الحقيقي يبدأ من فهم عميق للسوق وبناء حلول مستدامة تُحدث أثراً ملموساً.
          </p>
        </motion.div>

        {/* Asymmetric editorial stats layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Featured large stat - left side */}
          <motion.div
            initial={isAnimated ? { opacity: 0, y: 40, scale: 0.97 } : undefined}
            animate={isAnimated && inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
            transition={isAnimated ? { delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] } : undefined}
            whileHover={isAnimated ? { y: -6, transition: { duration: 0.35 } } : undefined}
            className="md:col-span-7 relative group"
          >
            <div className="relative bg-white/70 backdrop-blur-sm border border-[#EFEDE2] rounded-2xl p-10 md:p-14 overflow-hidden h-full flex flex-col justify-center">
              {/* Decorative geometric circle accent */}
              <div className="absolute -bottom-20 -left-20 w-[240px] h-[240px] rounded-full border-2 border-[#00C17A] opacity-[0.08] pointer-events-none group-hover:opacity-[0.14] transition-opacity duration-700" />
              <div className="absolute -bottom-12 -left-12 w-[160px] h-[160px] rounded-full border border-[#00C17A] opacity-[0.06] pointer-events-none" />

              <div className="relative">
                <div className="relative inline-block mb-6">
                  <span className="text-7xl md:text-8xl lg:text-9xl font-black text-[#2B2D3F] relative z-10 leading-none">
                    <AnimatedNumber target={stats[0].number} suffix={stats[0].suffix} prefix={stats[0].prefix} />
                  </span>
                  <motion.span
                    className="absolute bottom-2 right-0 left-0 h-4 md:h-6 bg-[#B5E8BE] -z-0 rounded-sm"
                    initial={isAnimated ? { scaleX: 0 } : undefined}
                    animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                    transition={isAnimated ? { delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] } : undefined}
                    style={isAnimated ? { transformOrigin: "right" } : undefined}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2B2D3F] mb-3">{stats[0].label}</h3>
                <p className="text-base md:text-lg text-[#494C6B] leading-relaxed max-w-md">{stats[0].desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Two smaller stats stacked - right side */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            {stats.slice(1).map((stat, i) => (
              <motion.div
                key={i}
                initial={isAnimated ? { opacity: 0, y: 30, scale: 0.97 } : undefined}
                animate={isAnimated && inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
                transition={isAnimated ? { delay: 0.55 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] } : undefined}
                whileHover={isAnimated ? { y: -4, transition: { duration: 0.35 } } : undefined}
                className="relative group flex-1"
              >
                <div className="relative bg-white/70 backdrop-blur-sm border border-[#EFEDE2] rounded-2xl p-8 md:p-10 overflow-hidden h-full flex flex-col justify-center">
                  <div className="relative">
                    <div className="relative inline-block mb-4">
                      <span className="text-5xl md:text-6xl font-black text-[#2B2D3F] relative z-10 leading-none">
                        <AnimatedNumber target={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                      </span>
                      <motion.span
                        className="absolute bottom-1 right-0 left-0 h-3 md:h-4 -z-0 rounded-sm"
                        initial={isAnimated ? { scaleX: 0 } : undefined}
                        animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                        transition={isAnimated ? { delay: 0.8 + i * 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] } : undefined}
                        style={{ backgroundColor: stat.highlightColor, transformOrigin: isAnimated ? "right" : undefined }}
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#2B2D3F] mb-2">{stat.label}</h3>
                    <p className="text-sm md:text-base text-[#494C6B] leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
