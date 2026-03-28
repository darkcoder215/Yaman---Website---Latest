import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Search, Zap, Users } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const strategies = [
  {
    icon: Target,
    title: "مجالات مُغفَلة",
    desc: "نستهدف قطاعات صغيرة أو متخصصة لكن مربحة، غالبًا تغفل عنها الشركات الكبيرة.",
    editorialAccent: "#F24935",
  },
  {
    icon: TrendingUp,
    title: "نموذج ربحي",
    desc: "نهدف لتحقيق عوائد مالية من العميل الأول، والمحافظة على ربحية المنتج في مراحل النمو.",
    editorialAccent: "#00C17A",
  },
  {
    icon: Search,
    title: "التوزيع والوصول",
    desc: "نركز على مجالات نمتلك فيها وصول لصنّاع القرار لديهم القدرة على تحريك السوق.",
    editorialAccent: "#0072F9",
  },
  {
    icon: Zap,
    title: "أتمتة التشغيل",
    desc: "نستهدف أتمتة 80% من الإجراءات والمهام التشغيلية لتقليل التكلفة وتحسين الربحية.",
    editorialAccent: "#FFBC0A",
  },
  {
    icon: Users,
    title: "استكشاف سريع",
    desc: "فريق متمرّس في الاستكشاف والابتكار للمحافظة على العملاء وكذلك التوسع لفئات أكبر.",
    editorialAccent: "#84DBE5",
  },
];

const Methodology = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { isLight, isAnimated } = useTheme();

  return (
    <section id="methodology" className="pt-14 pb-14 md:pt-20 md:pb-20 relative" ref={ref}>
      {!isLight && (
        <div className="absolute right-0 bottom-1/3 w-[500px] h-[500px] bg-secondary glow-orb animate-pulse-soft" />
      )}

      {isAnimated && (
        <motion.div
          className="absolute left-[4%] top-[30%] w-10 h-10 rounded-lg border-2 border-[#FFBC0A]/15 rotate-12"
          style={{ animation: "editorial-float-reverse 9s ease-in-out infinite" }}
        />
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            استراتيجيتنا في{" "}
            {isLight ? (
              <span className="relative inline-block">
                <span className="relative z-10">تطوير المنتجات</span>
                <motion.span
                  className="absolute bottom-1 right-0 left-0 h-3 md:h-4 bg-[#F9E59E] -z-0 rounded-sm"
                  initial={isAnimated ? { scaleX: 0 } : undefined}
                  animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                  transition={isAnimated ? { delay: 0.4, duration: 0.6 } : undefined}
                  style={isAnimated ? { transformOrigin: "right" } : undefined}
                />
              </span>
            ) : (
              <span className="text-gradient">تطوير المنتجات</span>
            )}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {strategies.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: isAnimated ? i * 0.12 : i * 0.1, duration: isAnimated ? 0.7 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={isAnimated ? { y: -6, transition: { duration: 0.35 } } : undefined}
              className="card-premium p-7 group relative overflow-hidden w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.33%-0.875rem)]"
            >
              {!isLight && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              {/* Colored top accent for editorial */}
              {isLight && (
                <motion.div
                  className="absolute top-0 right-0 left-0 h-1 rounded-t-2xl"
                  style={{ backgroundColor: s.editorialAccent }}
                  initial={isAnimated ? { scaleX: 0 } : undefined}
                  animate={isAnimated && inView ? { scaleX: 1 } : undefined}
                  transition={isAnimated ? { delay: 0.3 + i * 0.1, duration: 0.5 } : undefined}
                  whileHover={isAnimated ? { scaleY: 2 } : undefined}
                />
              )}

              <div className="relative text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h3 className="font-bold">{s.title}</h3>
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isLight
                        ? "bg-[#F7F4EE] group-hover:bg-[#00C17A]/10"
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}
                    whileHover={isAnimated ? { rotate: [0, -8, 8, 0], transition: { duration: 0.4 } } : undefined}
                  >
                    <s.icon className={`w-5 h-5 ${isLight ? "text-[#000000]" : "text-primary"}`} />
                  </motion.div>
                </div>
                <p className={`text-sm leading-relaxed ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
