import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logoHeader from "@/assets/logo-header.png";

const navLinks = [
  { href: "#services", label: "نبذة عنا" },
  { href: "#founders", label: "فريقنا" },
  { href: "#partners", label: "قصصنا" },
  { href: "#bot-framework", label: "منهجيتنا" },
  { href: "#contact", label: "تواصل معنا" },
];

const themeIcons = {
  dark: Moon,
  editorial: Sun,
  "editorial-animated": Sparkles,
} as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, isLight } = useTheme();

  const Icon = themeIcons[theme];

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 right-0 left-0 z-50 glass-strong"
      >
        <div className="container flex items-center justify-between h-16 md:h-20 px-4">
          <div className="flex items-center gap-2">
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Theme Switcher — cycles through 3 themes */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-500 border ${
                theme === "dark"
                  ? "bg-primary/10 border-primary/30 text-primary"
                  : theme === "editorial"
                    ? "bg-[#00C17A]/10 border-[#00C17A]/30 text-[#00C17A]"
                    : "bg-gradient-to-r from-[#00C17A]/10 via-[#0072F9]/10 to-[#FFBC0A]/10 border-[#00C17A]/30 text-[#00C17A]"
              }`}
              aria-label="تبديل المظهر"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              </AnimatePresence>
              <span className="text-[10px] font-bold hidden sm:block">
                {theme === "dark" ? "داكن" : theme === "editorial" ? "فاتح" : "حيوي"}
              </span>
            </motion.button>
          </div>

          <a href="#" className="flex-shrink-0 md:mr-0">
            <img
              src={logoHeader}
              alt="لاندسكيب إكس"
              className={`h-8 md:h-10 w-auto transition-all duration-500 ${isLight ? "invert" : ""}`}
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm mx-auto">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`hover:text-foreground transition-all duration-300 relative group font-bold ${
                  isLight
                    ? "text-[#494C6B] hover:drop-shadow-none"
                    : "text-muted-foreground hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 right-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    isLight ? "bg-[#00C17A]" : "bg-gradient-brand"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Spacer for mobile to center the logo */}
          <div className="w-10 md:hidden" />
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 glass-strong md:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-12 text-lg">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
