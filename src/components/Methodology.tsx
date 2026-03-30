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
    <section
      id="methodology"
      className={`relative overflow-hidden ${
        isLight
          ? "pt-16 pb-16 md:pt-24 md:pb-24"
          : "pt-14 pb-14 md:pt-20 md:pb-20"
      }`}
      ref={ref}
    >
      {/* Dark theme glow orb */}
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
        {/* Section header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`mb-16 md:mb-20 ${isLight ? "text-right" : "text-center"}`}
        >
          <h2
            className={`font-black mb-5 ${
              isLight
                ? "text-4xl md:text-5xl text-[#2B2D3F]"
                : "text-3xl md:text-5xl font-bold"
            }`}
          >
            استراتيجيتنا في{" "}
            {isLight ? (
              <span>تطوير المنتجات</span>
            ) : (
              <span className="text-gradient">تطوير المنتجات</span>
            )}
          </h2>
        </motion.div>

        {/* Cards grid */}
        {isLight ? (
          <div className="max-w-6xl mx-auto space-y-5">
            {/* Top row: first 2 cards, half width each */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {strategies.slice(0, 2).map((s, i) => (
                <LightCard
                  key={i}
                  strategy={s}
                  index={i}
                  inView={inView}
                  isAnimated={isAnimated}
                />
              ))}
            </div>
            {/* Bottom row: next 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {strategies.slice(2).map((s, i) => (
                <LightCard
                  key={i + 2}
                  strategy={s}
                  index={i + 2}
                  inView={inView}
                  isAnimated={isAnimated}
                />
              ))}
            </div>
          </div>
        ) : (
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <h3 className="font-bold">{s.title}</h3>
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 bg-primary/10 group-hover:bg-primary/20"
                      whileHover={isAnimated ? { rotate: [0, -8, 8, 0], transition: { duration: 0.4 } } : undefined}
                    >
                      <s.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* Light-theme premium card component */
const LightCard = ({
  strategy: s,
  index: i,
  inView,
  isAnimated,
}: {
  strategy: (typeof strategies)[number];
  index: number;
  inView: boolean;
  isAnimated: boolean;
}) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        delay: isAnimated ? i * 0.12 : i * 0.1,
        duration: isAnimated ? 0.7 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        isAnimated
          ? { y: -6, transition: { duration: 0.35 } }
          : undefined
      }
      className="group relative overflow-hidden rounded-xl bg-white border border-[#EFEDE2] p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/[0.04]"
    >
      {/* Thick colored top accent bar */}
      <motion.div
        className="absolute top-0 right-0 left-0 h-[3px] rounded-t-xl"
        style={{ backgroundColor: s.editorialAccent }}
        initial={isAnimated ? { scaleX: 0 } : undefined}
        animate={isAnimated && inView ? { scaleX: 1 } : undefined}
        transition={isAnimated ? { delay: 0.3 + i * 0.1, duration: 0.5 } : undefined}
      />

      <div className="relative text-right">
        {/* Large icon in rounded square with subtle colored bg */}
        <motion.div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
          style={{ backgroundColor: `${s.editorialAccent}12` }}
          whileHover={
            isAnimated
              ? { rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }
              : undefined
          }
        >
          <s.icon
            className="w-7 h-7"
            style={{ color: s.editorialAccent }}
          />
        </motion.div>

        {/* Card title */}
        <h3 className="text-xl font-black text-[#2B2D3F] mb-3">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-[15px] leading-[1.8] text-[#494C6B]">
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default Methodology;
