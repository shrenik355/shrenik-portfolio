import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { PROJECT_CATEGORIES, PROJECTS, type ProjectCategory } from "../data/content";
import ProjectCard from "./ProjectCard";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const } },
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <section id="projects">
      <motion.div
        className="wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={reveal}
      >
        <div className="eyebrow">Projects</div>
        <h2 className="title">Independent work.</h2>
        <p className="lead">
          Public and personal projects in computer vision, machine learning, and data science.
          Filter by domain, then open any card for the architecture breakdown.
        </p>

        <div className="filter-tabs">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-tab${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {visible.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
