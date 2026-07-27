import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { PROJECTS } from "../data/content";
import { PROJECT_DETAILS } from "../data/projectDetails";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="detail-block">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const detail = id ? PROJECT_DETAILS[id] : undefined;

  if (!project || !detail) {
    return (
      <section id="project-not-found" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            404
          </div>
          <h2 className="title">Project not found.</h2>
          <p className="lead" style={{ margin: "0 auto 28px" }}>
            That project doesn't exist — it may have moved.
          </p>
          <Link className="btn btn-primary" to="/#projects">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="project-detail-hero" style={{ paddingTop: 130, paddingBottom: 40 }}>
        <div className="wrap">
          <Link className="detail-back" to="/#projects">
            ← Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">
              {project.categories.join(" · ")}
              {project.featured && <span style={{ color: "var(--accent)" }}> · ★ Featured</span>}
            </div>
            <h1 className="title" style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
              {project.name}
            </h1>
            <p className="lead" style={{ maxWidth: 720 }}>
              {project.desc}
            </p>

            {project.metrics.length > 0 && (
              <div className="metric-row" style={{ marginTop: 22 }}>
                {project.metrics.map((m) => (
                  <span className="metric-badge" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            )}

            <div className="cta-row" style={{ marginTop: 28 }}>
              {project.githubUrl && (
                <a className="btn btn-ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  ◆ View on GitHub
                </a>
              )}
              <Link className="btn btn-ghost" to="/#contact">
                Ask me about this project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="project-detail-body" style={{ paddingTop: 0 }}>
        <div className="wrap detail-grid">
          <div className="detail-main">
            <Block title="Overview">
              <p>{detail.overview}</p>
            </Block>
            <Block title="Problem">
              <p>{detail.problem}</p>
            </Block>
            <Block title="Solution">
              <p>{detail.solution}</p>
            </Block>

            {detail.architecture && (
              <Block title="Architecture">
                <div className="card arch-card">
                  <div className="arch">
                    {detail.architecture.map((line) => (
                      <div key={line}>
                        <b>›</b> {line}
                      </div>
                    ))}
                  </div>
                </div>
              </Block>
            )}

            <Block title="Key Features">
              <BulletList items={detail.keyFeatures} />
            </Block>
            <Block title="Challenges">
              <BulletList items={detail.challenges} />
            </Block>
            <Block title="Results">
              <BulletList items={detail.results} />
            </Block>
            <Block title="Future Improvements">
              <BulletList items={detail.futureImprovements} />
            </Block>
          </div>

          <aside className="detail-side">
            <div className="card detail-side-card">
              <h4>Technologies</h4>
              <div className="chips" style={{ marginBottom: 0 }}>
                {project.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {project.githubUrl && (
              <a
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: 16 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                ◆ View on GitHub
              </a>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
