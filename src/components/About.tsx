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

  // Light theme: techy professional Rimthan-style
  return (
    <section id="about" className="pt-16 pb-16 md:pt-24 md:pb-24 relative overflow-hidden" ref={ref}>
      <div className="container relative z-10">
        {/* Header area - left-aligned (RTL: text-right) */}
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 30 } : undefined}
          animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
          transition={isAnimated ? { duration: 0.7, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="text-right mb-4"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#2B2D3F] leading-[1.15] tracking-tight">
            عن لاندسكيب إكس
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
          animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
          transition={isAnimated ? { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="text-right mb-8 md:mb-10"
        >
          <p className="text-base md:text-lg text-[#494C6B] max-w-2xl mr-0 ml-auto leading-relaxed">
            نمزج بين المنهجيات المتعددة بهدف استكشاف وصناعة وحماية القيمة لعملاء ومستثمري لاندسكيب إكس
          </p>
        </motion.div>

        {/* Thin hairline divider */}
        <motion.div
          initial={isAnimated ? { opacity: 0, scaleX: 0 } : undefined}
          animate={isAnimated && inView ? { opacity: 1, scaleX: 1 } : undefined}
          transition={isAnimated ? { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } : undefined}
          style={isAnimated ? { transformOrigin: "right" } : undefined}
          className="h-px bg-[#EFEDE2] mb-12 md:mb-16"
        />

        {/* Stats dashboard strip */}
        <motion.div
          initial={isAnimated ? { opacity: 0, y: 30 } : undefined}
          animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
          transition={isAnimated ? { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } : undefined}
          className="bg-white/70 backdrop-blur-sm border border-[#EFEDE2] rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
                animate={isAnimated && inView ? { opacity: 1, y: 0 } : undefined}
                transition={isAnimated ? { delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] } : undefined}
                className={`p-8 md:p-10 text-right ${
                  i < stats.length - 1 ? "border-b md:border-b-0 md:border-l border-[#EFEDE2]" : ""
                }`}
              >
                <div className="text-5xl font-black text-[#2B2D3F] mb-3 leading-none">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#2B2D3F] mb-1.5">{stat.label}</h3>
                <p className="text-sm text-[#494C6B] leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
