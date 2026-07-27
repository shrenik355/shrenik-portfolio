import { motion, type Variants } from "framer-motion";
import { ABOUT } from "../data/content";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const } },
};

export default function About() {
  return (
    <section id="about">
      <motion.div
        className="wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="eyebrow">About</div>
        <h2 className="title">Engineering intelligence, end to end.</h2>
        <p className="lead">{ABOUT.lead}</p>

        <div className="about-top">
          <div className="card headshot">
            <div className="ring">{ABOUT.initials}</div>
            <div className="h-name">{ABOUT.name}</div>
            <div className="h-role">{ABOUT.role}</div>
            <div className="h-loc">◉ {ABOUT.location}</div>
          </div>
          <div className="card mission-card">
            <div className="m-block">
              <h4>Mission</h4>
              <p>{ABOUT.mission}</p>
            </div>
            <div className="m-block">
              <h4>What I'm building</h4>
              <div className="building-list">
                {ABOUT.building.map((item) => (
                  <div className="bl" key={item}>
                    <span className="ic" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {ABOUT.stats.map((s) => (
            <div className="card stat" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
