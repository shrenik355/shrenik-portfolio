export const CONFIG = {
  githubUsername: "shrenik355",
  email: "shrenik1128@gmail.com",
  linkedin: "https://linkedin.com/in/shrenik-shukla",
  github: "https://github.com/shrenik355",
  resumeUrl: "/Shukla_Resume.pdf",
  featuredRepo: "AI-Asset-Recognition-Portfolio",
  highlightRepoKeywords: ["asset", "recognition", "vision", "ocr"],
};

// Rotating hero role subtitle
export const ROLES = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Computer Vision Engineer",
  "Full-Stack AI Developer",
  "Generative AI Developer",
];

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Enterprise AI",
  "Computer Vision",
  "Machine Learning",
  "Data Analytics",
  "Database",
  "Forecasting",
  "NLP",
] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const ABOUT = {
  eyebrow: "About",
  title: "Engineering intelligence, end to end.",
  lead: "A data scientist and AI/ML engineer focused on systems that read, understand, and act on real-world data — from computer vision and OCR to analytics that inform decisions.",
  name: "Shrenik Shukla",
  role: "AI Engineer",
  location: "United States",
  initials: "SS",
  mission:
    "Build AI-powered systems for computer vision, OCR, machine learning, and intelligent automation — turning complex, multi-source data into clear, decision-ready outcomes.",
  building: [
    "Computer-vision and OCR pipelines that extract and validate information from images.",
    "Machine-learning models for recommendation, classification, and prediction.",
    "Data pipelines and BI dashboards that make analytics usable for stakeholders.",
  ],
  education: {
    degree: "M.S. Data Science & Analytics",
    school: "SUNY Buffalo State University · GPA 3.76",
    description:
      "Graduate study in machine learning, statistical modeling, and applied analytics — the foundation for building systems that turn raw data into decisions.",
    graduation: "May 2026 · United States",
    secondDegree: "B.S. Computer Applications",
    secondSchool: "GLS University, India · GPA 3.78 · Jul 2023",
  },
  stats: [
    { num: "99.4%", label: "Model accuracy · AutoGuard ML" },
    { num: "0.96", label: "R² price model · Airbnb analysis" },
    { num: "49.8K", label: "Vehicles in recommendation engine" },
    { num: "2", label: "Degrees · Data Science & CS" },
  ],
};

export const EXPERIENCE = [
  {
    role: "AI/ML Engineer & Data Analyst · WeTechForU LLC",
    meta: "May 2026 – Present · Computer Vision · OCR · MLOps",
    desc: "Automated enterprise asset classification end-to-end by designing and deploying two production ML systems (GreenAssetIQ Device Recognition & Multi-Device Detection) using computer vision, OCR, and barcode recognition. Built the core ML infrastructure — OCR fallback architecture, barcode pipelines, confidence-scoring and model-evaluation logic, image-quality validation — with Python, OpenCV, and ZXing. Led a cross-functional team of 5 engineers, applying MLOps practices across Python, SQL, and TypeScript/Node.js.",
  },
  {
    role: "Data Science & Technology Intern · WeTechForU LLC",
    meta: "Jan 2026 – May 2026 · Data Pipelines · BI · APIs",
    desc: "Enabled data-driven inventory and KPI reporting (DriveCasa) by automating pipelines and standardizing preprocessing, ingestion, and quality validation across CRM/dealership sources, and designing REST APIs for downstream analytics. Built SQL-driven Power BI dashboards (YouDrive) for performance, lead conversion, and KPI monitoring while supporting API integrations and database optimization.",
  },
  {
    role: "Fraud Prevention Specialist · TTEC (partnered with Airbnb)",
    meta: "Mar 2024 – Dec 2024 · Trust & Safety · Risk",
    desc: "Protected platform integrity by investigating 50+ fraud cases weekly at 98% resolution accuracy — detecting identity, login, and behavioral fraud with internal risk-management tools. Collaborated with Trust & Safety, Risk Management, and Customer Experience teams to support compliance and cross-team risk decisions.",
  },
];

export type ProjectKind =
  | "enterprise"
  | "vision"
  | "ml"
  | "analytics"
  | "database"
  | "forecasting"
  | "nlp";

export type Project = {
  id: string; // used as the /projects/:id route slug
  featured?: boolean;
  categories: ProjectCategory[];
  name: string;
  status: string;
  desc: string;
  chips: string[];
  skills: string[];
  metrics: string[];
  githubUrl?: string;
  /** Optional screenshot path, e.g. "/project-images/greenassetiq.png".
   *  When unset, the card falls back to the built-in icon placeholder —
   *  so adding a real screenshot later is just setting this one field. */
  image?: string;
  heroKind: ProjectKind;
};

export const PROJECTS: Project[] = [
  {
    id: "greenassetiq",
    featured: true,
    categories: ["Enterprise AI", "Computer Vision"],
    name: "GreenAssetIQ",
    status: "Active",
    desc: "Enterprise AI-powered asset identification platform that combines OCR, barcode recognition, Azure AI Vision, GPT-4, heuristic extraction, and computer vision to identify IT assets with high accuracy.",
    chips: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Azure AI Vision",
      "Azure OpenAI",
      "OCR",
      "Redis",
      "Socket.IO",
    ],
    skills: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Azure AI Vision", "Azure OpenAI", "OCR", "Redis", "Socket.IO"],
    metrics: ["500+ Assets/hour", "95% Scan Accuracy", "Enterprise Platform"],
    heroKind: "enterprise",
  },
  {
    id: "autoguard",
    featured: true,
    categories: ["Machine Learning"],
    name: "AutoGuardML",
    status: "Complete",
    desc: "Machine learning recommendation system that recommends vehicles based on budget, ownership cost, safety, emissions, and user preferences.",
    chips: ["Python", "Flask", "Scikit-Learn", "Pandas", "NumPy"],
    skills: ["Python", "Flask", "Scikit-Learn", "Pandas", "NumPy"],
    metrics: ["ML Recommendation Engine"],
    githubUrl: "https://github.com/shrenik355",
    heroKind: "ml",
  },
  {
    id: "airbnb",
    categories: ["Data Analytics"],
    name: "Airbnb Investment Analytics",
    status: "Complete",
    desc: "Analyzed more than 123,000 Airbnb listings using Python, SQL, and Tableau to identify the most profitable real estate investment opportunities.",
    chips: ["Python", "SQL", "Tableau", "Pandas", "NumPy"],
    skills: ["Python", "SQL", "Tableau", "Pandas", "NumPy"],
    metrics: ["123K Listings"],
    githubUrl: "https://github.com/shrenik355",
    heroKind: "analytics",
  },
  {
    id: "morth",
    categories: ["Database"],
    name: "Morth Landscaping Dashboard",
    status: "Complete",
    desc: "Business dashboard and relational database system built using Node.js and MySQL to automate KPI reporting and business management.",
    chips: ["Node.js", "Express", "MySQL", "SQL"],
    skills: ["Node.js", "Express", "MySQL", "SQL"],
    metrics: ["Business Dashboard"],
    githubUrl: "https://github.com/shrenik355",
    heroKind: "database",
  },
  {
    id: "customer-segmentation",
    categories: ["Machine Learning"],
    name: "Customer Segmentation & Subscription Prediction",
    status: "Complete",
    desc: "Segmented customers using clustering algorithms and predicted subscription likelihood using supervised machine learning.",
    chips: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    metrics: ["85% Accuracy"],
    githubUrl: "https://github.com/shrenik355",
    heroKind: "ml",
  },
  {
    id: "nvidia",
    categories: ["Forecasting"],
    name: "NVIDIA Stock Time Series Forecasting",
    status: "Complete",
    desc: "Designed and evaluated ARIMA, SARIMA, and Prophet models to forecast NVIDIA stock prices using historical market data. Performed exploratory data analysis, trend analysis, feature engineering, and model evaluation to compare forecasting performance and identify the most reliable predictive approach.",
    chips: ["Python","Pandas","NumPy","ARIMA","SARIMA","Prophet","Matplotlib"],
    skills: ["Python","Pandas","NumPy","ARIMA","SARIMA","Prophet","Matplotlib"],
    metrics: [ "2,000+ Trading Days","3 Forecasting Models"],
    githubUrl: "https://github.com/shrenik355",
    heroKind: "forecasting",
  },
  {
    id: "sentiment",
    categories: ["NLP"],
    name: "Sentiment Analysis",
    status: "Complete",
    desc: "Compared Logistic Regression, Naive Bayes, and BERT transformer models for sentiment classification.",
    chips: ["Python", "Scikit-Learn", "BERT", "HuggingFace Transformers"],
    skills: ["Python", "Scikit-Learn", "BERT", "HuggingFace Transformers"],
    metrics: ["10K Reviews"],
    githubUrl: "https://github.com/shrenik355",
    heroKind: "nlp",
  },
];

export const SKILLS = [
  "Python",
  "SQL",
  "Machine Learning",
  "Computer Vision",
  "OCR",
  "OpenCV",
  "Random Forest",
  "Feature Engineering",
  "Power BI",
  "REST APIs",
  "Data Science",
  "MLOps",
];
