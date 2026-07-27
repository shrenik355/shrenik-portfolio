import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  const goTo = (id: string) => {
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    let observer: IntersectionObserver | undefined;
    // small delay lets Home's sections mount before we query for them
    const t = setTimeout(() => {
      const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
        (el): el is HTMLElement => !!el
      );
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((el) => observer!.observe(el));
    }, 0);
    return () => {
      clearTimeout(t);
      observer?.disconnect();
    };
  }, [onHome]);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""} aria-label="Primary">
        <button className="brand" onClick={() => goTo("hero")} aria-label="Back to top">
          <span className="mark">SS</span>
          Shrenik Shukla
        </button>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              style={active === link.id ? { color: "var(--text)" } : undefined}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <button
            className="nav-mob"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "close" : "menu"}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mob-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  goTo(link.id);
                  setMobileOpen(false);
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
