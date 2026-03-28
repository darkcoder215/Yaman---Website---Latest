import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { isLight, isAnimated } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — dark theme only */}
      {!isLight && (
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>
      )}

      {/* Editorial light background */}
      {isLight && (
        <div className="absolute inset-0 bg-[#F7F4EE]">
          {/* Animated blobs — animated editorial only */}
          {isAnimated && (
            <>
              <div
                className="absolute top-[10%] right-[5%] w-[400px] h-[400px] opacity-[0.15]"
                style={{
                  background: "radial-gradient(circle, #00C17A 0%, transparent 70%)",
                  animation: "blob-morph 8s ease-in-out infinite, editorial-float 10s ease-in-out infinite",
                }}
              />
              <div
                className="absolute bottom-[15%] left-[8%] w-[350px] h-[350px] opacity-[0.10]"
                style={{
                  background: "radial-gradient(circle, #0072F9 0%, transparent 70%)",
                  animation: "blob-morph 10s ease-in-out infinite 2s, editorial-float-reverse 12s ease-in-out infinite",
                }}
              />
              <div
                className="absolute top-[40%] left-[50%] w-[300px] h-[300px] opacity-[0.08]"
                style={{
                  background: "radial-gradient(circle, #FFBC0A 0%, transparent 70%)",
                  animation: "blob-morph 12s ease-in-out infinite 4s, editorial-pulse 8s ease-in-out infinite",
                }}
              />
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F7F4EE] to-transparent" />
        </div>
      )}

      {/* Animated orbs — dark theme only */}
      {!isLight && (
        <>
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary glow-orb animate-float" />
          <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-secondary glow-orb animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent glow-orb animate-pulse-soft" />
        </>
      )}

      {/* Grid pattern overlay — dark theme only */}
      {!isLight && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(250 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(250 80% 60%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      )}

      {/* Animated grid dots — animated editorial only */}
      {isAnimated && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #00C17A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      )}

      <div className="container relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: isAnimated ? 1.2 : 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <p className={`text-4xl md:text-6xl font-extrabold leading-relaxed mb-4 ${isLight ? "text-[#000000]" : "text-foreground"}`}>
            {isAnimated ? (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                استديو ابتكاري
              </motion.span>
            ) : (
              "استديو ابتكاري"
            )}{" "}
            {isLight ? (
              <motion.span
                className="relative inline-block"
                initial={isAnimated ? { opacity: 0, scale: 0.9 } : undefined}
                animate={isAnimated ? { opacity: 1, scale: 1 } : undefined}
                transition={isAnimated ? { delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] } : undefined}
              >
                <span className="relative z-10 text-[#000000] font-black">وطني</span>
                <motion.span
                  className="absolute bottom-1 right-0 left-0 h-3 md:h-4 bg-[#B5E8BE] -z-0 rounded-sm"
                  initial={isAnimated ? { scaleX: 0 } : undefined}
                  animate={isAnimated ? { scaleX: 1 } : undefined}
                  transition={isAnimated ? { delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } : undefined}
                  style={isAnimated ? { transformOrigin: "right" } : undefined}
                />
              </motion.span>
            ) : (
              <motion.span
                animate={{ textShadow: ["0 0 0px hsl(250 80% 60%)", "0 0 20px hsl(250 80% 60%)", "0 0 0px hsl(250 80% 60%)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-gradient font-black"
              >
                وطني
              </motion.span>
            )}
          </p>
          <motion.p
            className={`text-base md:text-lg font-normal leading-loose max-w-xl mx-auto ${isLight ? "text-[#494C6B]" : "text-foreground"}`}
            initial={isAnimated ? { opacity: 0, y: 15 } : undefined}
            animate={isAnimated ? { opacity: 1, y: 0 } : undefined}
            transition={isAnimated ? { delay: 1.4, duration: 0.8 } : undefined}
          >
            لاندسكيب استديو شركات ناشئة سعودي يؤسس شركات ريادية داخلية في قطاعات التقنية المالية، إضافة إلى تأسيس وتشغيل الاستديوهات للشركات العائلية.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isAnimated ? 1.8 : 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#services"
            whileHover={isAnimated ? { scale: 1.05, y: -3 } : undefined}
            whileTap={isAnimated ? { scale: 0.97 } : undefined}
            className={`px-8 py-3.5 rounded-full font-medium text-base hover:-translate-y-0.5 transition-all duration-300 ${
              isLight
                ? "bg-[#000000] text-white hover:shadow-lg"
                : "bg-gradient-brand text-primary-foreground rounded-2xl hover:shadow-xl hover:shadow-primary/25"
            }`}
          >
            اكتشف خدماتنا
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={isAnimated ? { scale: 1.05, y: -3 } : undefined}
            whileTap={isAnimated ? { scale: 0.97 } : undefined}
            className={`px-8 py-3.5 font-medium text-base hover:-translate-y-0.5 transition-all duration-300 ${
              isLight
                ? "rounded-full bg-white text-[#000000] border border-[#EFEDE2] hover:border-[#00C17A]/30 hover:shadow-md"
                : "glass text-foreground rounded-2xl hover:bg-muted/60"
            }`}
          >
            تواصل معنا
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
