import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Project, ProjectKind } from "../data/content";

const ICONS: Record<ProjectKind, ReactNode> = {
  enterprise: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
      <path d="M4 21V8l8-4 8 4v13" />
      <path d="M9 21v-6h6v6M9 12h.01M15 12h.01M9 8h.01M15 8h.01" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <circle cx="12" cy="12.5" r="3.2" />
    </svg>
  ),
  ml: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
      <path d="M4 20V10M11 20V4M18 20v-7" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),
  forecasting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
      <path d="M3 17l5-6 4 3 5-7 4 4" />
    </svg>
  ),
  nlp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="16" height="16">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

const KIND_LABEL: Record<ProjectKind, string> = {
  enterprise: "Enterprise AI",
  vision: "Computer Vision",
  ml: "Machine Learning",
  analytics: "Data Analytics",
  database: "Database",
  forecasting: "Forecasting",
  nlp: "NLP",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`proj${project.featured ? " feat" : ""}`}>
      <div className="card proj-card">
        <div className="proj-hero">
          {project.image ? (
            <img src={project.image} alt={`${project.name} screenshot`} className="proj-hero-img" />
          ) : (
            <>
              <span className="kind-icon">{ICONS[project.heroKind]}</span>
              <span className="kind-label">{KIND_LABEL[project.heroKind]}</span>
            </>
          )}
        </div>
        <div className="proj-body">
          <div className="proj-top">
            <h3>
              {project.name}
              {project.featured && <span className="feat-star" title="Featured">★</span>}
            </h3>
            <span className="proj-status st-live">● {project.status}</span>
          </div>
          <p>{project.desc}</p>

          {project.metrics.length > 0 && (
            <div className="metric-row">
              {project.metrics.map((m) => (
                <span className="metric-badge" key={m}>
                  {m}
                </span>
              ))}
            </div>
          )}

          <div className="chips">
            {project.chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>

          <div className="proj-actions">
            <Link className="proj-btn solid" to={`/projects/${project.id}`}>
              View Details →
            </Link>
            {project.githubUrl && (
              <a className="proj-btn" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                ◆ GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
