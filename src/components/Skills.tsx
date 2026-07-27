import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { PROJECTS, SKILLS } from "../data/content";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const } },
};

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const drawLines = () => {
    const field = fieldRef.current;
    const svg = svgRef.current;
    if (!field || !svg) return;
    const wrap = field.parentElement!.getBoundingClientRect();
    const nodes = [...field.querySelectorAll<HTMLButtonElement>(".node")];
    const pts = nodes.map((n) => {
      const r = n.getBoundingClientRect();
      return { x: r.left - wrap.left + r.width / 2, y: r.top - wrap.top + r.height / 2 };
    });
    svg.setAttribute("viewBox", `0 0 ${wrap.width} ${wrap.height}`);
    let lines = "";
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x,
          dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 170) {
          lines += `<line x1="${pts[i].x}" y1="${pts[i].y}" x2="${pts[j].x}" y2="${pts[j].y}"/>`;
        }
      }
    }
    svg.innerHTML = lines;
  };

  useEffect(() => {
    const t = setTimeout(drawLines, 60);
    let resizeT: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(drawLines, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      clearTimeout(resizeT);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const matches = active ? PROJECTS.filter((p) => p.skills.includes(active)) : [];

  return (
    <section id="skills">
      <motion.div
        className="wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="eyebrow">Skills</div>
        <h2 className="title">An interactive skill graph.</h2>
        <p className="lead">Each skill is a node in the network. Select one to surface the projects that use it.</p>

        <div className="skills-shell">
          <div className="node-wrap">
            <svg className="node-svg" ref={svgRef} aria-hidden="true" />
            <div className="node-field" ref={fieldRef} role="tablist" aria-label="Skills">
              {SKILLS.map((skill) => (
                <button
                  key={skill}
                  className={`node${active === skill ? " active" : ""}`}
                  role="tab"
                  aria-selected={active === skill}
                  onClick={() => setActive(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
          <div className="card skill-panel">
            {!active && <p className="ph">Select a skill node to see related projects.</p>}
            {active && (
              <>
                <h4>
                  {active} · {matches.length} project{matches.length !== 1 ? "s" : ""}
                </h4>
                {matches.length ? (
                  matches.map((m, i) => (
                    <div className="skill-proj" style={{ animationDelay: `${i * 70}ms` }} key={m.id}>
                      <b>{m.name}</b>
                      <span>{m.desc.slice(0, 92)}…</span>
                    </div>
                  ))
                ) : (
                  <p className="ph">Part of my toolkit across data and ML work.</p>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
