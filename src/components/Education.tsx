import { motion, type Variants } from "framer-motion";
import { ABOUT } from "../data/content";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const } },
};

const CapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="19" height="19">
    <path d="M22 9 12 4 2 9l10 5 10-5Z" />
    <path d="M6 11.5V17c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
  </svg>
);

export default function Education() {
  return (
    <section id="education">
      <motion.div
        className="wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="eyebrow">Education</div>
        <h2 className="title">Where the foundation was built.</h2>
        <p className="lead">Graduate and undergraduate study in data science and computer applications.</p>

        <div className="edu-grid">
          <div className="card edu-card">
            <div className="edu-icon">
              <CapIcon />
            </div>
            <div className="edu-degree">{ABOUT.education.degree}</div>
            <div className="edu-field">{ABOUT.education.school}</div>
            <p className="edu-desc">{ABOUT.education.description}</p>
            <div className="edu-meta">📅 {ABOUT.education.graduation}</div>
          </div>
          <div className="card edu-card">
            <div className="edu-icon">
              <CapIcon />
            </div>
            <div className="edu-degree">{ABOUT.education.secondDegree}</div>
            <div className="edu-field">{ABOUT.education.secondSchool}</div>
            <p className="edu-desc">
              Undergraduate foundation in programming, data structures, and application
              development that led into graduate-level data science study.
            </p>
            <div className="edu-meta">📅 Jul 2023</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
