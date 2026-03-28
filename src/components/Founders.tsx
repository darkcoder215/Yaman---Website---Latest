import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import founderYaman from "@/assets/founder-yaman.jpeg";
import founderBandar from "@/assets/founder-bandar.jpeg";
import founderAbdulrahim from "@/assets/founder-abdulrahim.jpeg";
import founderHarith from "@/assets/founder-harith.jpg";

const founders = [
  {
    id: "founder-0",
    name: "عبدالرحيم القاعود",
    role: "الرئيس التنفيذي",
    bio: 'رائد أعمال ومؤسس لعدة شركات في <strong>قطاع الخدمات</strong>، قاد تطوير الأعمال في شركة <strong>هُناك</strong>، وشركة <strong>النجاح المهني</strong> بخبرة تجاوزت الـ<strong>10 سنوات</strong>، يجمع بين الرؤية الاستراتيجية والتشغيل، والقدرة على بناء الفريق.',
    color: "from-primary/30 to-secondary/30",
    image: founderAbdulrahim,
  },
  {
    id: "founder-1",
    name: "عبدالرحمن حارث",
    role: "الرئيس التنفيذي للمنتجات",
    bio: 'خبير في مجال <strong>المنتجات التقنية</strong>، يرأس المنتجات في <strong>دراهم</strong> وسابقًا في <strong>ولاء</strong>، أشرف على العديد من المشاريع الخاصة والحكومية بخبرة تمتد لـ<strong>9 سنوات</strong>.',
    color: "from-accent/30 to-primary/30",
    image: founderHarith,
  },
  {
    id: "founder-2",
    name: "بندر العصيمي",
    role: "الرئيس التنفيذي للعمليات",
    bio: 'ممارس لتأسيس <strong>الشركات الناشئة</strong> لأكثر من <strong>9 سنوات</strong>، قاد تأسيس شركة <strong>كريرهب</strong> وشركة <strong>أندري</strong>، وهندس العديد من الصفقات الناجحة مع <strong>القطاع الحكومي والخاص</strong>.',
    color: "from-secondary/30 to-accent/30",
    image: founderBandar,
  },
  {
    id: "founder-3",
    name: "يمان العرضي",
    role: "الرئيس التنفيذي للتسويق",
    bio: 'رائد أعمال ومؤسس لعدة شركات ناشئة سابقة. يرأس المنتجات في <strong>ثمانية</strong> وسابقًا في <strong>ويبوك</strong>. أشرف على العديد من المبادرات مع الجهات الحكومية مثل <strong>هيئة السياحة</strong> و<strong>نسك</strong> و<strong>روح السعودية</strong>.',
    color: "from-primary/30 to-accent/30",
    image: founderYaman,
  },
];

const Founders = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const { isLight, isAnimated } = useTheme();

  const go = useCallback((dir: number) => {
    setActive((prev) => (prev + dir + founders.length) % founders.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  return (
    <section id="founders" className="pt-14 pb-14 md:pt-20 md:pb-20 relative overflow-hidden" ref={ref}>
      {!isLight && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary glow-orb animate-pulse-soft" />
      )}

      {/* Animated floating accent shapes */}
      {isAnimated && (
        <>
          <motion.div
            className="absolute right-[8%] top-[15%] w-12 h-12 rounded-full border-2 border-[#FFBC0A]/20"
            style={{ animation: "editorial-float 8s ease-in-out infinite" }}
          />
          <motion.div
            className="absolute left-[12%] bottom-[20%] w-8 h-8 rounded-lg border-2 border-[#0072F9]/15"
            style={{ animation: "editorial-float-reverse 10s ease-in-out infinite" }}
          />
        </>
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">فريق التأسيس</h2>
          <p className={`text-base md:text-lg ${isLight ? "text-[#494C6B]" : "text-muted-foreground"}`}>
            +45 عام من الخبرات المتراكمة في بناء الشركات الناشئة والابتكار
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative"
        >
          {/* Photos row */}
          <div className="relative flex items-center justify-center gap-3 md:gap-5 px-14 md:px-20">
            {founders.map((founder, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={founder.id}
                  onClick={() => setActive(i)}
                  whileHover={isAnimated ? { scale: 1.06, y: -4 } : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex-1 max-w-[250px] rounded-2xl overflow-hidden focus:outline-none"
                  style={{ aspectRatio: "3/4" }}
                  layout={isAnimated}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{ filter: isActive ? "none" : "brightness(0.45)" }}
                  />
                  {/* gradient overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
                  {/* name + role */}
                  <div className="absolute bottom-0 inset-x-0 p-3 md:p-4">
                    <p className={`font-bold text-sm md:text-base transition-colors duration-300 ${isActive ? "text-white" : "text-white/50"}`}>
                      {founder.name}
                    </p>
                    <p className={`text-xs mt-0.5 transition-colors duration-300 ${isActive ? "text-white/60" : "text-white/30"}`}>
                      {founder.role}
                    </p>
                  </div>
                  {/* active border ring */}
                  {isActive && (
                    <motion.div
                      layoutId="active-ring"
                      className={`absolute inset-0 rounded-2xl border-[6px] pointer-events-none ${
                        isLight ? "border-[#00C17A]" : "border-primary"
                      }`}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}

                  {/* Animated shimmer on hover — animated only */}
                  {isAnimated && isActive && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        background: "linear-gradient(135deg, transparent 40%, rgba(0,193,122,0.1) 50%, transparent 60%)",
                        backgroundSize: "200% 200%",
                        animation: "shimmer-bg 3s ease-in-out infinite",
                      }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Arrow left */}
            <motion.button
              onClick={() => go(-1)}
              whileHover={isAnimated ? { scale: 1.15 } : undefined}
              whileTap={isAnimated ? { scale: 0.9 } : undefined}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20 ${
                isLight
                  ? "bg-white border border-[#EFEDE2] text-[#000000] hover:bg-[#F7F4EE] shadow-sm"
                  : "glass text-foreground hover:bg-muted/60"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Arrow right */}
            <motion.button
              onClick={() => go(1)}
              whileHover={isAnimated ? { scale: 1.15 } : undefined}
              whileTap={isAnimated ? { scale: 0.9 } : undefined}
              className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-20 ${
                isLight
                  ? "bg-white border border-[#EFEDE2] text-[#000000] hover:bg-[#F7F4EE] shadow-sm"
                  : "glass text-foreground hover:bg-muted/60"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {founders.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={isAnimated ? { scale: 1.3 } : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? `w-7 ${isLight ? "bg-[#00C17A]" : "bg-primary"}`
                    : `w-2.5 ${isLight ? "bg-[#EFEDE2] hover:bg-[#D1C4E2]" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
                }`}
                layout={isAnimated}
              />
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: isAnimated ? 20 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isAnimated ? -20 : -12 }}
            transition={{ duration: isAnimated ? 0.5 : 0.35, ease: "easeOut" }}
            className="text-center mt-8 max-w-xl mx-auto"
          >
            <p
              className={`text-sm md:text-base leading-loose ${
                isLight
                  ? "text-[#494C6B] [&_strong]:text-[#00C17A] [&_strong]:font-bold"
                  : "text-foreground/80 [&_strong]:text-primary [&_strong]:font-bold"
              }`}
              dangerouslySetInnerHTML={{ __html: founders[active].bio }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Founders;
