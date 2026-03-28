import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { theme } = useTheme();
  const isEditorial = theme === "editorial";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — dark theme only */}
      {!isEditorial && (
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </div>
      )}

      {/* Editorial background — warm off-white with subtle green accent */}
      {isEditorial && (
        <div className="absolute inset-0 bg-[#F7F4EE]">
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F7F4EE] to-transparent" />
        </div>
      )}

      {/* Animated orbs — dark theme only */}
      {!isEditorial && (
        <>
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary glow-orb animate-float" />
          <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full bg-secondary glow-orb animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent glow-orb animate-pulse-soft" />
        </>
      )}

      {/* Grid pattern overlay — dark theme only */}
      {!isEditorial && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(250 80% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(250 80% 60%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      )}

      <div className="container relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <p className={`text-4xl md:text-6xl font-extrabold leading-relaxed mb-4 ${isEditorial ? "text-[#000000]" : "text-foreground"}`}>
            استديو ابتكاري{" "}
            {isEditorial ? (
              <span className="relative inline-block">
                <span className="relative z-10 text-[#000000] font-black">وطني</span>
                <span className="absolute bottom-1 right-0 left-0 h-3 md:h-4 bg-[#B5E8BE] -z-0 rounded-sm" />
              </span>
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
          <p className={`text-base md:text-lg font-normal leading-loose max-w-xl mx-auto ${isEditorial ? "text-[#494C6B]" : "text-foreground"}`}>
            لاندسكيب استديو شركات ناشئة سعودي يؤسس شركات ريادية داخلية في قطاعات التقنية المالية، إضافة إلى تأسيس وتشغيل الاستديوهات للشركات العائلية.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className={`px-8 py-3.5 rounded-full font-medium text-base hover:-translate-y-0.5 transition-all duration-300 ${
              isEditorial
                ? "bg-[#000000] text-white hover:shadow-lg"
                : "bg-gradient-brand text-primary-foreground rounded-2xl hover:shadow-xl hover:shadow-primary/25"
            }`}
          >
            اكتشف خدماتنا
          </a>
          <a
            href="#contact"
            className={`px-8 py-3.5 font-medium text-base hover:-translate-y-0.5 transition-all duration-300 ${
              isEditorial
                ? "rounded-full bg-white text-[#000000] border border-[#EFEDE2] hover:border-[#00C17A]/30 hover:shadow-md"
                : "glass text-foreground rounded-2xl hover:bg-muted/60"
            }`}
          >
            تواصل معنا
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
