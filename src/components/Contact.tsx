import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, CheckCircle, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";

const serviceOptions = [
  "إطلاق منتجات داخلية",
  "بناء شركة ناشئة",
  "خدمات استشارية",
  "هاكاثونات الابتكار",
  "تحليل المُمَكّنات",
  "أخرى",
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const { isLight, isAnimated } = useTheme();

  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "يرجى ملء الحقول المطلوبة", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "تم إرسال طلبك بنجاح ✅", description: "سنتواصل معك قريبًا" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={isLight ? "pt-20 pb-20 md:pt-28 md:pb-28 relative overflow-hidden bg-[#F7F4EE]" : "pt-14 pb-14 md:pt-20 md:pb-20 relative"}
      ref={ref}
    >
      {!isLight && (
        <>
          <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-primary glow-orb animate-pulse-soft" />
          <div className="absolute left-1/4 top-1/2 w-[300px] h-[300px] bg-secondary glow-orb animate-pulse-soft" />
        </>
      )}

      {/* Geometric decorative circles — light theme */}
      {isLight && (
        <>
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border border-[#EFEDE2] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full border border-[#EFEDE2] pointer-events-none" />
          <div className="absolute top-1/3 right-[8%] w-[180px] h-[180px] rounded-full bg-[#00C17A]/[0.04] pointer-events-none" />
          <div className="absolute bottom-[15%] left-[5%] w-[100px] h-[100px] rounded-full bg-[#0072F9]/[0.04] pointer-events-none" />
        </>
      )}

      {/* Animated decorative elements */}
      {isAnimated && (
        <>
          <motion.div
            className="absolute right-[6%] top-[10%] w-20 h-20 rounded-full border border-[#00C17A]/10"
            style={{ animation: "editorial-float 12s ease-in-out infinite" }}
          />
          <motion.div
            className="absolute left-[10%] bottom-[15%] w-6 h-6 rounded-full bg-[#FFBC0A]/10"
            style={{ animation: "gentle-bounce 4s ease-in-out infinite" }}
          />
        </>
      )}

      <div className="container relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={isLight ? "text-center mb-16" : "text-center mb-14"}
        >
          {/* Tagline badge — light only */}
          {isLight && (
            <span className="inline-block mb-5 px-5 py-2 rounded-full border border-[#EFEDE2] bg-white/60 text-xs font-semibold tracking-widest text-[#494C6B] uppercase">
              تواصل &mdash; GET IN TOUCH
            </span>
          )}

          <h2 className={
            isLight
              ? "text-4xl md:text-6xl font-black text-[#2B2D3F] mb-5 leading-tight"
              : "text-3xl md:text-5xl font-bold mb-5"
          }>
            {isLight ? "يسعدنا تواصلك" : "يسعدنا تواصلك 🤝"}
          </h2>

          {isLight && (
            <p className="text-[#494C6B] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              أخبرنا عن مشروعك وسنعود إليك خلال يوم عمل واحد
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: isAnimated ? 0.9 : 0.6 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={
                  isLight
                    ? "bg-white rounded-3xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[400px] border border-[#EFEDE2]"
                    : "card-premium p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[400px]"
                }
              >
                <motion.div
                  animate={isAnimated ? { scale: [1, 1.1, 1] } : undefined}
                  transition={isAnimated ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" } : undefined}
                  className={isLight ? "w-20 h-20 rounded-full bg-[#00C17A]/10 flex items-center justify-center mb-6" : undefined}
                >
                  <CheckCircle className={`${isLight ? "w-10 h-10 text-[#00C17A]" : "w-16 h-16 mb-6 text-emerald-400"}`} />
                </motion.div>
                <h3 className={
                  isLight
                    ? "text-2xl md:text-3xl font-black mb-3 text-[#2B2D3F]"
                    : "text-2xl font-bold mb-3 text-foreground"
                }>شكرًا لتواصلك!</h3>
                <p className={isLight ? "text-[#494C6B] text-base md:text-lg" : "text-muted-foreground"}>
                  تم استلام طلبك وسيتواصل معك فريقنا خلال 24 ساعة.
                </p>
                <Button
                  variant="outline"
                  className={
                    isLight
                      ? "mt-8 rounded-full px-8 py-3 border-[#EFEDE2] text-[#2B2D3F] font-bold hover:bg-[#F7F4EE]"
                      : "mt-8"
                  }
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                >
                  إرسال طلب آخر
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={
                  isLight
                    ? "bg-white rounded-3xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-8 md:p-12 space-y-6 border border-[#EFEDE2]"
                    : "card-premium p-6 md:p-8 space-y-5"
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className={
                      isLight
                        ? "text-sm md:text-base font-bold text-[#2B2D3F]"
                        : "text-sm font-medium text-foreground"
                    }>الاسم <span className="text-destructive">*</span></label>
                    <Input
                      placeholder="اسمك الكامل"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={isLight
                        ? "bg-white border-[#EFEDE2] focus:border-[#00C17A]/50 h-12 text-base rounded-xl"
                        : "bg-muted/50 border-border/50 focus:border-primary/50"
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={
                      isLight
                        ? "text-sm md:text-base font-bold text-[#2B2D3F]"
                        : "text-sm font-medium text-foreground"
                    }>البريد الإلكتروني <span className="text-destructive">*</span></label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      dir="ltr"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`text-left ${isLight
                        ? "bg-white border-[#EFEDE2] focus:border-[#00C17A]/50 h-12 text-base rounded-xl"
                        : "bg-muted/50 border-border/50 focus:border-primary/50"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className={
                      isLight
                        ? "text-sm md:text-base font-bold text-[#2B2D3F]"
                        : "text-sm font-medium text-foreground"
                    }>رقم الجوال</label>
                    <Input
                      type="tel"
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`text-left ${isLight
                        ? "bg-white border-[#EFEDE2] focus:border-[#00C17A]/50 h-12 text-base rounded-xl"
                        : "bg-muted/50 border-border/50 focus:border-primary/50"
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={
                      isLight
                        ? "text-sm md:text-base font-bold text-[#2B2D3F]"
                        : "text-sm font-medium text-foreground"
                    }>الخدمة المطلوبة</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`flex h-12 w-full rounded-xl border px-3 py-2 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isLight
                          ? "bg-white border-[#EFEDE2] focus:border-[#00C17A]/50 focus:ring-[#00C17A]/20 focus:ring-offset-white"
                          : "bg-muted/50 border-border/50 focus:border-primary/50 focus:ring-ring focus:ring-offset-background"
                      }`}
                    >
                      <option value="">اختر الخدمة</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={
                    isLight
                      ? "text-sm md:text-base font-bold text-[#2B2D3F]"
                      : "text-sm font-medium text-foreground"
                  }>رسالتك <span className="text-destructive">*</span></label>
                  <Textarea
                    placeholder="أخبرنا عن فكرتك أو مشروعك..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`resize-none ${isLight
                      ? "bg-white border-[#EFEDE2] focus:border-[#00C17A]/50 text-base rounded-xl"
                      : "bg-muted/50 border-border/50 focus:border-primary/50"
                    }`}
                  />
                </div>

                <motion.div
                  whileHover={isAnimated ? { scale: 1.02 } : undefined}
                  whileTap={isAnimated ? { scale: 0.98 } : undefined}
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-14 font-bold text-base transition-opacity ${
                      isLight
                        ? "bg-[#000000] text-white hover:bg-[#2B2D3F] rounded-full px-10 text-lg"
                        : "bg-gradient-brand text-primary-foreground hover:opacity-90"
                    }`}
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 ml-2" />
                        إرسال الطلب
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: isAnimated ? 0.9 : 0.6 }}
            className="space-y-5"
          >
            {[
              {
                href: "mailto:business@landscapex.co",
                icon: Mail,
                label: "البريد الإلكتروني",
                value: "business@landscapex.co",
              },
              {
                href: "tel:0560656965",
                icon: Phone,
                label: "الهاتف",
                value: "0560656965",
              },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={isAnimated ? { y: -4, transition: { duration: 0.3 } } : undefined}
                className={
                  isLight
                    ? "bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.05)] border border-[#EFEDE2] p-6 flex items-center gap-5 group block"
                    : "card-premium p-5 flex items-center gap-4 group block"
                }
              >
                <motion.div
                  className={`flex items-center justify-center transition-all duration-500 ${
                    isLight
                      ? "w-14 h-14 rounded-2xl bg-[#00C17A]/10 group-hover:bg-[#00C17A]/20"
                      : "w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/10"
                  }`}
                  whileHover={isAnimated ? { rotate: [0, -5, 5, 0], transition: { duration: 0.4 } } : undefined}
                >
                  <item.icon className={`${isLight ? "w-6 h-6 text-[#00C17A]" : "w-5 h-5 text-primary"}`} />
                </motion.div>
                <div>
                  <p className={`mb-0.5 ${isLight ? "text-xs font-medium text-[#494C6B]" : "text-xs text-muted-foreground"}`}>{item.label}</p>
                  <p className={`font-semibold ${isLight ? "text-base text-[#2B2D3F]" : "text-sm text-foreground font-medium"}`} dir="ltr">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              className={
                isLight
                  ? "bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.05)] border border-[#EFEDE2] p-6"
                  : "card-premium p-5"
              }
              whileHover={isAnimated ? { y: -4, transition: { duration: 0.3 } } : undefined}
            >
              <div className={isLight ? "flex items-center gap-3 mb-3" : ""}>
                {isLight && (
                  <div className="w-10 h-10 rounded-xl bg-[#0072F9]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0072F9]" />
                  </div>
                )}
                <p className={
                  isLight
                    ? "text-base font-bold text-[#2B2D3F]"
                    : "text-sm font-semibold text-foreground mb-2"
                }>ساعات العمل</p>
              </div>
              <p className={`leading-relaxed ${isLight ? "text-sm text-[#494C6B]" : "text-xs text-muted-foreground"}`}>
                الأحد - الخميس<br />
                9:00 صباحًا - 5:00 مساءً
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
