import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { isLight, isAnimated } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Dark theme background ── */}
      {!isLight && (
        <>
          <div className="absolute inset-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          </div>
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary glow-orb animate-float" />
          <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-secondary glow-orb animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent glow-orb animate-pulse-soft" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(hsl(250 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(250 80% 60%) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </>
      )}

      {/* ── Editorial background: clean, flat ── */}
      {isLight && (
        <div className="absolute inset-0 bg-[#F7F4EE]" />
      )}

      <div className="container relative z-10 pt-28 pb-20">
        {/* Editorial: asymmetric layout with decorative element */}
        {isLight ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
            {/* Right side (primary in RTL): Heading + description + CTA */}
            <motion.div
              className="order-1 md:order-2 flex flex-col gap-8"
              initial={isAnimated ? { opacity: 0, y: 30 } : undefined}
              animate={isAnimated ? { opacity: 1, y: 0 } : undefined}
              transition={isAnimated ? { delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] } : undefined}
            >
              <h1 className="text-5xl md:text-7xl font-black text-[#000000] leading-[1.15] tracking-tight">
                {isAnimated ? (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    استديو ابتكاري وطني
                  </motion.span>
                ) : (
                  "استديو ابتكاري وطني"
                )}
              </h1>

              <motion.p
                className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-lg font-light"
                initial={isAnimated ? { opacity: 0, y: 15 } : undefined}
                animate={isAnimated ? { opacity: 1, y: 0 } : undefined}
                transition={isAnimated ? { delay: 0.9, duration: 0.8 } : undefined}
              >
                لاندسكيب استديو شركات ناشئة سعودي يؤسس شركات ريادية داخلية في قطاعات التقنية المالية، إضافة إلى تأسيس وتشغيل الاستديوهات للشركات العائلية.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={isAnimated ? { opacity: 0, y: 20 } : undefined}
                animate={isAnimated ? { opacity: 1, y: 0 } : undefined}
                transition={isAnimated ? { delay: 1.3, duration: 0.6 } : undefined}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <motion.a
                  href="#services"
                  whileHover={isAnimated ? { scale: 1.04, y: -2 } : undefined}
                  whileTap={isAnimated ? { scale: 0.97 } : undefined}
                  className="px-10 py-4 rounded-full bg-[#000000] text-white font-bold text-base hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
                >
                  اكتشف خدماتنا
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={isAnimated ? { scale: 1.04, y: -2 } : undefined}
                  whileTap={isAnimated ? { scale: 0.97 } : undefined}
                  className="px-10 py-4 rounded-full bg-white text-[#000000] font-bold text-base border border-[#E5E0D8] hover:border-[#000000]/20 hover:shadow-lg transition-all duration-300"
                >
                  تواصل معنا
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Left side: Trust indicator stats stacked with thin dividers */}
            <motion.div
              className="order-2 md:order-1 flex flex-col md:pt-4"
              initial={isAnimated ? { opacity: 0 } : undefined}
              animate={isAnimated ? { opacity: 1 } : undefined}
              transition={isAnimated ? { delay: 1.6, duration: 0.8 } : undefined}
            >
              {[
                { num: "+45", label: "عام خبرة" },
                { num: "+15", label: "شريك" },
                { num: "80%", label: "أتمتة" },
              ].map((stat, i) => (
                <div key={i}>
                  {i > 0 && <div className="h-px bg-[#EFEDE2]" />}
                  <div className="py-6 flex items-baseline justify-between gap-4">
                    <p className="text-3xl md:text-4xl font-black text-[#000000]">{stat.num}</p>
                    <p className="text-sm text-[#6B6B6B] font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* ── Dark theme hero ── */
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-4xl md:text-6xl font-extrabold text-foreground leading-relaxed mb-4">
                استديو ابتكاري{" "}
                <motion.span
                  animate={{ textShadow: ["0 0 0px hsl(250 80% 60%)", "0 0 20px hsl(250 80% 60%)", "0 0 0px hsl(250 80% 60%)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-gradient font-black"
                >
                  وطني
                </motion.span>
              </p>
              <p className="text-base md:text-lg font-normal text-foreground leading-loose max-w-xl mx-auto">
                لاندسكيب استديو شركات ناشئة سعودي يؤسس شركات ريادية داخلية في قطاعات التقنية المالية، إضافة إلى تأسيس وتشغيل الاستديوهات للشركات العائلية.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#services" className="bg-gradient-brand text-primary-foreground px-8 py-3.5 rounded-2xl font-medium text-base hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300">
                اكتشف خدماتنا
              </a>
              <a href="#contact" className="glass text-foreground px-8 py-3.5 rounded-2xl font-medium text-base hover:bg-muted/60 hover:-translate-y-0.5 transition-all duration-300">
                تواصل معنا
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
