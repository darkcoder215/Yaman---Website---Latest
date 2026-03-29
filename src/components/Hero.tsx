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

      {/* ── Editorial background: premium, layered ── */}
      {isLight && (
        <div className="absolute inset-0 bg-[#F7F4EE]">
          {/* Large branded geometric accent — top right */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full border border-[#00C17A]/[0.07]" />
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full border border-[#00C17A]/[0.05]" />

          {/* Bottom left accent circle */}
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00C17A]/[0.03] to-transparent" />

          {/* Subtle dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, #000000 0.5px, transparent 0.5px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Animated blobs — animated variant */}
          {isAnimated && (
            <>
              <motion.div
                className="absolute top-[15%] left-[8%] w-[300px] h-[300px] opacity-[0.06]"
                style={{
                  background: "radial-gradient(circle, #00C17A 0%, transparent 70%)",
                  animation: "blob-morph 12s ease-in-out infinite, editorial-float 14s ease-in-out infinite",
                }}
              />
              <motion.div
                className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] opacity-[0.04]"
                style={{
                  background: "radial-gradient(circle, #0072F9 0%, transparent 70%)",
                  animation: "blob-morph 10s ease-in-out infinite 3s, editorial-float-reverse 12s ease-in-out infinite",
                }}
              />
            </>
          )}
        </div>
      )}

      <div className="container relative z-10 pt-28 pb-20">
        {/* Editorial: asymmetric layout with decorative element */}
        {isLight ? (
          <div className="flex flex-col items-center gap-12 md:gap-16">
            {/* Tagline badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#000000]/[0.04] border border-[#000000]/[0.06]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00C17A]" />
              <span className="text-xs font-bold text-[#2B2D3F] tracking-wide">VENTURE STUDIO — SAUDI ARABIA</span>
            </motion.div>

            {/* Main headline — editorial magazine style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#000000] leading-[1.1] tracking-tight mb-8">
                {isAnimated ? (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    استديو ابتكاري
                  </motion.span>
                ) : (
                  "استديو ابتكاري"
                )}
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">وطني</span>
                  <motion.span
                    className="absolute bottom-2 md:bottom-3 right-0 left-0 h-4 md:h-6 bg-[#00C17A]/20 -z-0 rounded-sm"
                    initial={isAnimated ? { scaleX: 0 } : undefined}
                    animate={isAnimated ? { scaleX: 1 } : undefined}
                    transition={isAnimated ? { delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } : undefined}
                    style={isAnimated ? { transformOrigin: "right" } : undefined}
                  />
                </span>
              </h1>

              <motion.p
                className="text-lg md:text-xl text-[#494C6B] leading-relaxed max-w-2xl mx-auto font-light"
                initial={isAnimated ? { opacity: 0, y: 15 } : undefined}
                animate={isAnimated ? { opacity: 1, y: 0 } : undefined}
                transition={isAnimated ? { delay: 1.2, duration: 0.8 } : undefined}
              >
                لاندسكيب استديو شركات ناشئة سعودي يؤسس شركات ريادية داخلية في قطاعات التقنية المالية، إضافة إلى تأسيس وتشغيل الاستديوهات للشركات العائلية.
              </motion.p>
            </motion.div>

            {/* CTA buttons — pill, premium feel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isAnimated ? 1.6 : 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
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

            {/* Trust indicator strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isAnimated ? 2 : 1, duration: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { num: "+45", label: "عام خبرة" },
                { num: "+15", label: "شريك" },
                { num: "80%", label: "أتمتة" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-black text-[#000000]">{stat.num}</p>
                  <p className="text-xs text-[#494C6B] font-medium mt-0.5">{stat.label}</p>
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
