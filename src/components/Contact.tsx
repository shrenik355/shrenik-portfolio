import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { CONFIG } from "../data/content";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const } },
};

const CMD = "contact --all";
const LINES = [
  { k: "email", v: CONFIG.email, href: `mailto:${CONFIG.email}` },
  { k: "linkedin", v: CONFIG.linkedin, href: CONFIG.linkedin },
  { k: "github", v: CONFIG.github, href: CONFIG.github },
  { k: "resume", v: "download résumé", href: CONFIG.resumeUrl },
];

export default function Contact() {
  const [typedCmd, setTypedCmd] = useState("");
  const [showCursorTyping, setShowCursorTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          runType();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();

    function runType() {
      let i = 0;
      const type = () => {
        if (i <= CMD.length) {
          setTypedCmd(CMD.slice(0, i));
          i++;
          setTimeout(type, 55);
        } else {
          setShowCursorTyping(false);
          revealLines();
        }
      };
      type();
    }
    function revealLines() {
      let i = 0;
      const show = () => {
        if (i < LINES.length) {
          i++;
          setVisibleLines(i);
          setTimeout(show, 180);
        } else {
          setDone(true);
        }
      };
      show();
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <motion.div
        className="wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="eyebrow">Contact</div>
        <h2 className="title">Let's connect.</h2>
        <p className="lead">The fastest ways to reach me.</p>

        <div className="terminal">
          <div className="term-bar">
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
            <span className="ttl">shrenik — contact</span>
          </div>
          <div className="term-body">
            <div className="term-line">
              <span className="term-prompt">shrenik:~$</span> <span className="term-cmd">{typedCmd}</span>
              {showCursorTyping && <span className="cursor" />}
            </div>
            <div>
              {LINES.slice(0, visibleLines).map((l) => (
                <div className="term-out" key={l.k}>
                  <span style={{ color: "#5eead4" }}>{l.k.padEnd(9, " ")}</span> →{" "}
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.v}
                  </a>
                </div>
              ))}
              {done && (
                <div className="term-line" style={{ marginTop: 14 }}>
                  <span className="term-prompt">shrenik:~$</span>{" "}
                  <span className="cursor" style={{ display: "inline-block" }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
