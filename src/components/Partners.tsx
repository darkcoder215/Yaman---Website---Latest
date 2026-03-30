import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import walaplus from "@/assets/partner-walaplus.png";
import drahim from "@/assets/partner-drahim.png";
import wbk from "@/assets/partner-wbk.png";
import nusuk from "@/assets/partner-nusuk.png";
import saudi from "@/assets/partner-saudi.png";
import alrajhi from "@/assets/partner-alrajhi.png";
import thiqah from "@/assets/partner-thiqah.png";
import sta from "@/assets/partner-sta.png";
import aldyar from "@/assets/partner-aldyar.png";
import exim from "@/assets/partner-exim.png";
import sfa from "@/assets/partner-sfa.png";
import elm from "@/assets/partner-elm.png";
import wahadat from "@/assets/partner-wahadat.png";
import sultan from "@/assets/partner-sultan.png";
import uxbert from "@/assets/partner-uxbert.png";

const companies = [
  { name: "ولاء بلس - WalaPlus", logo: walaplus },
  { name: "دراهم - Drahim", logo: drahim },
  { name: "WBK", logo: wbk },
  { name: "نُسُك - Nusuk", logo: nusuk },
  { name: "روح السعودية", logo: saudi },
  { name: "مصرف الراجحي - Al Rajhi Bank", logo: alrajhi },
  { name: "ثقة - Thiqah", logo: thiqah },
  { name: "هيئة السياحة السعودية", logo: sta },
  { name: "Saudi EXIM", logo: exim },
  { name: "الديار العربية - Aldyar Alarabiya", logo: aldyar },
  { name: "الرياضة للجميع - Sports For All", logo: sfa },
  { name: "علم - Elm", logo: elm },
  { name: "وحدات - Wahadat", logo: wahadat },
  { name: "سلطان القابضة - Sultan Holding", logo: sultan },
  { name: "UXBERT Labs", logo: uxbert },
];

const Partners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { isLight, isAnimated } = useTheme();

  return (
    <section
      id="partners"
      className={`relative overflow-hidden ${
        isLight ? "pt-20 pb-20 md:pt-28 md:pb-28" : "pt-14 pb-14 md:pt-20 md:pb-20"
      }`}
      ref={ref}
    >
      {/* Dark theme glow orb */}
      {!isLight && (
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary glow-orb animate-pulse-soft" />
      )}


      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          {/* Tagline badge - light theme only */}
          {isLight && (
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00C17A]/10 border border-[#00C17A]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C17A]" />
                <span className="text-xs font-semibold tracking-wide text-[#00C17A]">
                  شركاؤنا — TRUSTED BY
                </span>
              </span>
            </div>
          )}

          <h2
            className={
              isLight
                ? "text-4xl md:text-6xl font-black mb-5 text-[#2B2D3F]"
                : "text-3xl md:text-5xl font-bold mb-5"
            }
          >
            عمل فريقنا مع
          </h2>

          <p
            className={`text-base md:text-lg max-w-2xl mx-auto ${
              isLight ? "text-[#494C6B]" : "text-muted-foreground"
            }`}
          >
            {isLight
              ? "نفخر بالعمل جنبًا إلى جنب مع أبرز المؤسسات والجهات الرائدة في القطاعين الحكومي والخاص لبناء منتجات رقمية استثنائية"
              : "عملنا مع أبرز الجهات في القطاعين الحكومي والخاص"}
          </p>

          {/* Count indicator - light theme only */}
          {isLight && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <span className="text-sm font-bold text-[#2B2D3F]">
                15+
              </span>
              <span className="text-sm text-[#494C6B] mr-1.5">
                {" "}شريك موثوق
              </span>
            </motion.div>
          )}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 max-w-5xl mx-auto px-2 md:px-0">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: isAnimated ? i * 0.08 : i * 0.05,
                duration: isAnimated ? 0.7 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={isAnimated ? {
                y: -8,
                scale: 1.03,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              } : undefined}
              className={`relative group ${
                isLight
                  ? "w-[calc(50%-0.375rem)] sm:w-[calc(33.33%-0.875rem)] md:w-[calc(25%-0.9375rem)] lg:w-[calc(20%-1rem)] min-h-[100px] md:min-h-[120px] rounded-2xl"
                  : "w-[calc(50%-0.375rem)] sm:w-[calc(33.33%-0.875rem)] md:w-[calc(25%-0.9375rem)] lg:w-[calc(20%-1rem)] min-h-[85px] md:min-h-[110px] rounded-2xl"
              }`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {/* Circulating pulse dot border — dark theme only */}
              {!isLight && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0 animate-[spin_4s_linear_infinite]"
                    style={{ animationDelay: `${i * -0.3}s` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary blur-[2px] shadow-[0_0_12px_4px_hsl(250_80%_60%/0.6)]" />
                  </div>
                </div>
              )}

              {/* Card background */}
              <div className={`absolute inset-[1px] z-[1] ${
                isLight
                  ? "bg-white rounded-2xl"
                  : "bg-gradient-to-b from-card to-background rounded-2xl"
              }`} />

              {/* Border */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                isLight
                  ? isAnimated
                    ? "rounded-2xl border border-[#EFEDE2] group-hover:border-[#00C17A]/30 group-hover:shadow-lg group-hover:shadow-[#00C17A]/[0.06]"
                    : "rounded-2xl border border-[#EFEDE2]"
                  : "rounded-2xl border border-border/30"
              }`} />

              {/* Content */}
              <div className={`relative z-[2] flex items-center justify-center h-full ${
                isLight ? "p-4 md:p-7" : "p-3 md:p-6"
              }`}>
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`w-auto max-w-[90%] object-contain transition-all duration-300 ${
                    isLight
                      ? "h-12 md:h-20 opacity-60 group-hover:opacity-100"
                      : "h-12 md:h-20"
                  }`}
                  style={{ imageRendering: 'auto' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
