import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONFIG, ROLES } from "../data/content";
import DetectionFrame from "./DetectionFrame";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// A little wink at his own confidence-scoring pipeline — each rotating
// role ships with a plausible-looking "match confidence" readout.
const ROLE_SCORES = ["0.99", "0.98", "0.97", "0.99", "0.96", "0.98"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid">
        <div>
          <motion.div
            className="hero-tagpill"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="dot" />
            United States · Open to opportunities
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Shrenik <span className="accent">Shukla</span>
          </motion.h1>

          <div className="hero-role-stage">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex]}
                className="hero-role-current"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="hero-role-score">{ROLE_SCORES[roleIndex]}</span>
          </div>

          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            I build <b>AI-powered systems</b> for computer vision, OCR, machine learning, and
            intelligent automation.
          </motion.p>

          <motion.div
            className="cta-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <button className="btn btn-primary" onClick={() => scrollToId("projects")}>
              View Projects →
            </button>
            <a className="btn btn-ghost" href={CONFIG.resumeUrl} download>
              Download Resume
            </a>
            <button className="btn btn-ghost" onClick={() => scrollToId("contact")}>
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <DetectionFrame />
        </motion.div>
      </div>
    </section>
  );
}
