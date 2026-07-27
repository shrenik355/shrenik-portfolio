import { motion, type Variants } from "framer-motion";
import { EXPERIENCE } from "../data/content";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const } },
};

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="18" height="18">
    <rect x="2.5" y="7" width="19" height="13" rx="2" />
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
    <path d="M2.5 12.5h19" />
  </svg>
);

export default function Experience() {
  return (
    <section id="experience">
      <motion.div
        className="wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="eyebrow">Experience</div>
        <h2 className="title">Where I've worked.</h2>
        <p className="lead">
          Roles across AI/ML engineering, data, and trust &amp; safety — each building toward the
          systems I design today.
        </p>

        <div className="tl">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              className="tl-item"
              key={item.role}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="card tl-card">
                <div className="tl-icon">
                  <BriefcaseIcon />
                </div>
                <div>
                  <div className="tl-role">{item.role}</div>
                  <div className="tl-meta">{item.meta}</div>
                  <p className="tl-desc">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
