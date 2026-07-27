import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { CONFIG } from "../data/content";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const } },
};

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

export default function GithubSection() {
  const [stats, setStats] = useState<{ repos: string; stars: string; followers: string; lang: string }>({
    repos: "—",
    stars: "—",
    followers: "—",
    lang: "—",
  });
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const u = CONFIG.githubUsername;
    (async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${u}`);
        if (!userRes.ok) throw new Error("user");
        const user = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${u}/repos?per_page=100&sort=updated`);
        const allRepos: Repo[] = await reposRes.json();
        const stars = allRepos.reduce((s, r) => s + r.stargazers_count, 0);

        const langCount: Record<string, number> = {};
        allRepos.forEach((r) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        const topLang = Object.entries(langCount).sort((a, b) => b[1] - a[1])[0];

        setStats({
          repos: String(user.public_repos),
          stars: String(stars),
          followers: String(user.followers),
          lang: topLang ? topLang[0] : "—",
        });

        const kw = CONFIG.highlightRepoKeywords || [];
        const feat = (CONFIG.featuredRepo || "").toLowerCase();
        const isFeat = (r: Repo) => r.name.toLowerCase() === feat;
        const isHi = (r: Repo) =>
          isFeat(r) || kw.some((k) => (r.name + " " + (r.description || "")).toLowerCase().includes(k));
        const top = [...allRepos]
          .sort((a, b) => {
            const fa = isFeat(a) ? 2 : isHi(a) ? 1 : 0;
            const fb = isFeat(b) ? 2 : isHi(b) ? 1 : 0;
            if (fa !== fb) return fb - fa;
            return (
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            );
          })
          .slice(0, 4);
        setRepos(top);
      } catch {
        setError(
          `The GitHub public API rate-limits unauthenticated requests — try a refresh in a minute. (Repos appear once your public projects are pushed.)`
        );
      }
    })();
  }, []);

  const isFeatured = (r: Repo) => {
    const kw = CONFIG.highlightRepoKeywords || [];
    const feat = (CONFIG.featuredRepo || "").toLowerCase();
    return r.name.toLowerCase() === feat || kw.some((k) => (r.name + " " + (r.description || "")).toLowerCase().includes(k));
  };

  return (
    <section id="github">
      <motion.div
        className="wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="eyebrow">GitHub</div>
        <h2 className="title">Open source &amp; activity.</h2>
        <p className="lead">Live from GitHub — public repositories, stars, and the languages I build in.</p>

        <div className="gh-grid">
          <div className="card gh-stat">
            <div className="n">{stats.repos}</div>
            <div className="l">Repositories</div>
          </div>
          <div className="card gh-stat">
            <div className="n">{stats.stars}</div>
            <div className="l">Total Stars</div>
          </div>
          <div className="card gh-stat">
            <div className="n">{stats.followers}</div>
            <div className="l">Followers</div>
          </div>
          <div className="card gh-stat">
            <div className="n">{stats.lang}</div>
            <div className="l">Top Language</div>
          </div>
        </div>

        <div className="gh-repos">
          {!repos && !error && <div className="gh-loading">Loading repositories…</div>}
          {error && <div className="gh-loading">{`Couldn't load repositories for @${CONFIG.githubUsername} right now.`}</div>}
          {repos &&
            repos.map((r) => (
              <div className={`card repo${isFeatured(r) ? " pinned" : ""}`} key={r.name}>
                {isFeatured(r) && <span className="pin-tag">★ Featured</span>}
                <h4>
                  ◆{" "}
                  <a href={r.html_url} target="_blank" rel="noopener noreferrer">
                    {r.name}
                  </a>
                </h4>
                <p>{r.description ? r.description : "No description provided."}</p>
                <div className="repo-meta">
                  {r.language && <span className="lang">● {r.language}</span>}
                  <span>★ {r.stargazers_count}</span>
                  <span>⑂ {r.forks_count}</span>
                </div>
              </div>
            ))}
        </div>
        {error && <p className="gh-note">{error}</p>}
      </motion.div>
    </section>
  );
}
